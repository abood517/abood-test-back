// MedPlay Nexus - Main Server
// Express + SQLite + JWT authentication
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const { run, get, all, initDatabase } = require('./database');
const { ACHIEVEMENTS } = require('./achievements-data');
const { answer: aiAnswer } = require('./ai-replies');

const app = express();
const PORT = process.env.PORT || 3000;
// JWT signing secret. Override via env var JWT_SECRET in production (Railway/Render).
const JWT_SECRET = process.env.JWT_SECRET || 'dev-only-secret-change-me';

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// JWT authentication middleware - validates Bearer token
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Calculate player level from XP (100 XP per level)
function calculateLevel(xp) {
  return Math.floor(xp / 100) + 1;
}

// =====================
// Authentication routes
// =====================

// Register a new user account
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Check for duplicate username or email
    const existingUser = await get('SELECT id FROM users WHERE email = ? OR username = ?', [email, username]);
    if (existingUser) {
      return res.status(400).json({ error: 'Email or username already exists' });
    }

    // Hash password and insert user
    const passwordHash = await bcrypt.hash(password, 10);
    const result = await run(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, passwordHash]
    );

    const token = jwt.sign({ userId: result.lastID }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: result.lastID,
        username,
        email,
        coins: 100,
        xp: 0,
        level: 1
      }
    });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login with email and password
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await get('SELECT * FROM users WHERE email = ?', [email]);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        coins: user.coins,
        xp: user.xp,
        level: user.level
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// =====================
// User routes
// =====================

// Get the currently authenticated user's profile
app.get('/api/user/me', authMiddleware, async (req, res) => {
  try {
    const user = await get(
      'SELECT id, username, email, coins, xp, level, created_at FROM users WHERE id = ?',
      [req.userId]
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// Challenge routes
// =====================

// Get all challenges for a section with user progress
app.get('/api/challenges/:section', authMiddleware, async (req, res) => {
  try {
    const challenges = await all(`
      SELECT c.id, c.title, c.description, c.difficulty, c.xp_reward, c.coins_reward, c.order_num,
             COALESCE(up.completed, 0) as completed,
             COALESCE(up.attempts, 0) as attempts
      FROM challenges c
      LEFT JOIN user_progress up ON c.id = up.challenge_id AND up.user_id = ?
      WHERE c.section = ?
      ORDER BY c.order_num ASC
    `, [req.userId, req.params.section]);
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get full challenge details (including instruction, starter code, etc.)
app.get('/api/challenges/detail/:id', authMiddleware, async (req, res) => {
  try {
    const challenge = await get(`
      SELECT c.*, COALESCE(up.completed, 0) as completed
      FROM challenges c
      LEFT JOIN user_progress up ON c.id = up.challenge_id AND up.user_id = ?
      WHERE c.id = ?
    `, [req.userId, req.params.id]);

    if (!challenge) return res.status(404).json({ error: 'Challenge not found' });

    // Parse the JSON-encoded challenge_data
    challenge.challenge_data = JSON.parse(challenge.challenge_data || '{}');
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit a challenge answer and award XP/coins if correct
app.post('/api/challenges/:id/submit', authMiddleware, async (req, res) => {
  try {
    const challengeId = parseInt(req.params.id);
    const { answer } = req.body;

    const challenge = await get('SELECT * FROM challenges WHERE id = ?', [challengeId]);
    if (!challenge) return res.status(404).json({ error: 'Challenge not found' });

    const challengeData = JSON.parse(challenge.challenge_data);
    let isCorrect = false;

    // Validate using regex pattern matching
    if (challenge.challenge_type === 'code_match') {
      const regex = new RegExp(challengeData.expected_pattern, 'i');
      isCorrect = regex.test(answer);
    }

    // Check existing progress
    let progress = await get(
      'SELECT * FROM user_progress WHERE user_id = ? AND challenge_id = ?',
      [req.userId, challengeId]
    );

    const wasAlreadyCompleted = progress && progress.completed === 1;

    // Update or insert progress record
    if (!progress) {
      await run(
        'INSERT INTO user_progress (user_id, challenge_id, attempts, completed, completed_at) VALUES (?, ?, 1, ?, ?)',
        [req.userId, challengeId, isCorrect ? 1 : 0, isCorrect ? new Date().toISOString() : null]
      );
    } else {
      const newAttempts = progress.attempts + 1;
      const newCompleted = progress.completed || (isCorrect ? 1 : 0);
      const completedAt = (isCorrect && !progress.completed) ? new Date().toISOString() : progress.completed_at;
      await run(
        'UPDATE user_progress SET attempts = ?, completed = ?, completed_at = ? WHERE user_id = ? AND challenge_id = ?',
        [newAttempts, newCompleted, completedAt, req.userId, challengeId]
      );
    }

    // Award XP and coins only for first-time completion
    if (isCorrect && !wasAlreadyCompleted) {
      const user = await get('SELECT xp, coins FROM users WHERE id = ?', [req.userId]);
      const oldLevel = calculateLevel(user.xp);
      const newXp = user.xp + challenge.xp_reward;
      const newCoins = user.coins + challenge.coins_reward;
      const newLevel = calculateLevel(newXp);

      await run(
        'UPDATE users SET xp = ?, coins = ?, level = ? WHERE id = ?',
        [newXp, newCoins, newLevel, req.userId]
      );

      const updatedUser = await get(
        'SELECT id, username, coins, xp, level FROM users WHERE id = ?',
        [req.userId]
      );

      return res.json({
        correct: true,
        message: 'Excellent! Correct answer',
        xp_gained: challenge.xp_reward,
        coins_gained: challenge.coins_reward,
        user: updatedUser,
        leveled_up: newLevel > oldLevel
      });
    }

    // Already completed previously - no reward
    if (isCorrect) {
      return res.json({
        correct: true,
        message: 'Correct, but you already completed this challenge',
        already_completed: true
      });
    }

    // Wrong answer - return hint
    return res.json({
      correct: false,
      message: 'Incorrect, try again',
      hint: challengeData.hint
    });
  } catch (err) {
    console.error('Submit error:', err);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// =====================
// Leaderboard & stats
// =====================

// Get top 10 users by XP
app.get('/api/leaderboard', authMiddleware, async (req, res) => {
  try {
    const top = await all(`
      SELECT username, xp, level, coins
      FROM users
      ORDER BY xp DESC
      LIMIT 10
    `);
    res.json(top);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get progress stats for each section (total vs completed)
app.get('/api/sections/progress', authMiddleware, async (req, res) => {
  try {
    const sections = ['frontend', 'backend', 'cybersecurity', 'ehr'];
    const progress = {};

    for (const section of sections) {
      const stats = await get(`
        SELECT
          COUNT(c.id) as total,
          COUNT(CASE WHEN up.completed = 1 THEN 1 END) as completed
        FROM challenges c
        LEFT JOIN user_progress up ON c.id = up.challenge_id AND up.user_id = ?
        WHERE c.section = ?
      `, [req.userId, section]);
      progress[section] = stats;
    }

    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =====================
// Analytics
// =====================

// Aggregate user analytics: totals, accuracy, weekly bars, recent activity
app.get('/api/analytics', authMiddleware, async (req, res) => {
  try {
    const user = await get(
      'SELECT id, username, xp, coins, level FROM users WHERE id = ?',
      [req.userId]
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Totals
    const totals = await get(`
      SELECT
        COALESCE(SUM(up.completed), 0) as completed,
        COALESCE(SUM(up.attempts), 0) as attempts,
        COUNT(up.id) as touched
      FROM user_progress up
      WHERE up.user_id = ?
    `, [req.userId]);

    // First-try completions (completed AND attempts = 1)
    const firstTry = await get(`
      SELECT COUNT(*) as count
      FROM user_progress
      WHERE user_id = ? AND completed = 1 AND attempts = 1
    `, [req.userId]);

    // Per-section completed counts
    const perSectionRows = await all(`
      SELECT c.section, COUNT(*) as count
      FROM user_progress up
      JOIN challenges c ON c.id = up.challenge_id
      WHERE up.user_id = ? AND up.completed = 1
      GROUP BY c.section
    `, [req.userId]);
    const perSection = {};
    perSectionRows.forEach(r => { perSection[r.section] = r.count; });

    // Recent activity: last 7 completed challenges
    const recent = await all(`
      SELECT c.title, c.xp_reward, c.section, up.completed_at
      FROM user_progress up
      JOIN challenges c ON c.id = up.challenge_id
      WHERE up.user_id = ? AND up.completed = 1
      ORDER BY up.completed_at DESC
      LIMIT 7
    `, [req.userId]);

    // Weekly XP: group completed challenges by day-of-week (last 7 days)
    const weeklyRows = await all(`
      SELECT
        strftime('%w', up.completed_at) as dow,
        SUM(c.xp_reward) as xp
      FROM user_progress up
      JOIN challenges c ON c.id = up.challenge_id
      WHERE up.user_id = ? AND up.completed = 1
        AND up.completed_at >= datetime('now', '-7 days')
      GROUP BY dow
    `, [req.userId]);
    const weekly = [0, 0, 0, 0, 0, 0, 0]; // Sun..Sat
    weeklyRows.forEach(r => { if (r.dow !== null) weekly[parseInt(r.dow)] = r.xp || 0; });
    // Reorder to Mon-Sun for display
    const weeklyMonSun = [weekly[1], weekly[2], weekly[3], weekly[4], weekly[5], weekly[6], weekly[0]];

    const accuracy = totals.attempts > 0
      ? Math.round((totals.completed / totals.attempts) * 100)
      : 0;

    res.json({
      user,
      totals: {
        completed: totals.completed,
        attempts: totals.attempts,
        accuracy,
        firstTry: firstTry.count
      },
      perSection,
      weekly: weeklyMonSun,
      recent
    });
  } catch (err) {
    console.error('Analytics error:', err);
    res.status(500).json({ error: err.message });
  }
});

// =====================
// Achievements
// =====================

app.get('/api/achievements', authMiddleware, async (req, res) => {
  try {
    const user = await get(
      'SELECT id, username, xp, coins, level FROM users WHERE id = ?',
      [req.userId]
    );
    if (!user) return res.status(404).json({ error: 'User not found' });

    const totals = await get(`
      SELECT COUNT(*) as completed,
             SUM(CASE WHEN attempts = 1 THEN 1 ELSE 0 END) as firstTryCount
      FROM user_progress WHERE user_id = ? AND completed = 1
    `, [req.userId]);

    const perSectionRows = await all(`
      SELECT c.section, COUNT(*) as count
      FROM user_progress up
      JOIN challenges c ON c.id = up.challenge_id
      WHERE up.user_id = ? AND up.completed = 1
      GROUP BY c.section
    `, [req.userId]);
    const perSection = {};
    perSectionRows.forEach(r => { perSection[r.section] = r.count; });

    const stats = {
      user,
      completed: totals.completed || 0,
      firstTryCount: totals.firstTryCount || 0,
      perSection
    };

    const items = ACHIEVEMENTS.map(a => ({
      id: a.id,
      icon: a.icon,
      name: a.name,
      description: a.description,
      unlocked: a.check(stats)
    }));

    const unlockedCount = items.filter(i => i.unlocked).length;

    res.json({
      total: items.length,
      unlocked: unlockedCount,
      items
    });
  } catch (err) {
    console.error('Achievements error:', err);
    res.status(500).json({ error: err.message });
  }
});

// =====================
// AI Assistant
// =====================

app.post('/api/ai/ask', authMiddleware, (req, res) => {
  const { question } = req.body || {};
  if (!question) return res.status(400).json({ error: 'Question is required' });
  // Simulate small delay for realism
  setTimeout(() => {
    res.json({ answer: aiAnswer(question) });
  }, 400);
});

// Public URL of the frontend (GitHub Pages). When users hit the Railway
// backend URL directly, send them to the live frontend.
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://abood517.github.io/abood-test-FRONT/';

// Default route - redirect to the frontend
app.get('/', (req, res) => {
  res.redirect(FRONTEND_URL);
});

// Catch-all for non-API routes - redirect to the frontend instead of 404
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.redirect(FRONTEND_URL);
});

// Start server after database is ready
async function startServer() {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`MedPlay Nexus running on http://localhost:${PORT}`);
      console.log(`Open your browser at: http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

startServer();
