// Database module - uses sqlite3 (no Visual Studio compilation needed)
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { buildSeedRows } = require('./challenges-data');

const dbPath = path.join(__dirname, 'medplay.db');
const db = new sqlite3.Database(dbPath);

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function(err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

async function initDatabase() {
  await run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      coins INTEGER DEFAULT 100,
      xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS challenges (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      section TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      difficulty TEXT DEFAULT 'easy',
      xp_reward INTEGER DEFAULT 10,
      coins_reward INTEGER DEFAULT 5,
      challenge_type TEXT,
      challenge_data TEXT,
      order_num INTEGER DEFAULT 0
    )
  `);

  await run(`
    CREATE TABLE IF NOT EXISTS user_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      challenge_id INTEGER NOT NULL,
      completed INTEGER DEFAULT 0,
      attempts INTEGER DEFAULT 0,
      completed_at DATETIME,
      UNIQUE(user_id, challenge_id)
    )
  `);

  console.log('Database initialized successfully');

  const seedRows = buildSeedRows();
  const countRow = await get('SELECT COUNT(*) as count FROM challenges');

  // Reseed when total count doesn't match expected — keeps the challenges set
  // in sync with challenges-data.js without preserving stale rows.
  if (countRow.count === seedRows.length) {
    console.log(`Challenges already seeded (${countRow.count})`);
    return;
  }

  console.log(
    `Reseeding challenges (db has ${countRow.count}, expected ${seedRows.length})`
  );
  await run('DELETE FROM user_progress');
  await run('DELETE FROM challenges');

  const insertSql = `
    INSERT INTO challenges (section, title, description, difficulty, xp_reward, coins_reward, challenge_type, challenge_data, order_num)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  for (const c of seedRows) {
    await run(insertSql, [
      c.section, c.title, c.description, c.difficulty,
      c.xp_reward, c.coins_reward, c.challenge_type,
      c.challenge_data, c.order_num
    ]);
  }

  // Summary per section
  const summary = await all(
    "SELECT section, COUNT(*) as n FROM challenges GROUP BY section"
  );
  summary.forEach(r => console.log(`  ${r.section}: ${r.n} challenges`));
  console.log(`Seeded ${seedRows.length} total challenges`);
}

module.exports = { db, run, get, all, initDatabase };
