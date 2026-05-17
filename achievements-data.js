// Achievement definitions - condition functions evaluated against user data
// Each achievement: id, icon, name, description, check(stats)
// stats = { user, completed, attempts, total, perSection }

const ACHIEVEMENTS = [
  { id: 'first_step', icon: '◐', name: 'First Step', description: 'Solve your first challenge',
    check: (s) => s.completed >= 1 },

  { id: 'getting_started', icon: '▶', name: 'Getting Started', description: 'Complete 5 challenges',
    check: (s) => s.completed >= 5 },

  { id: 'level_2', icon: '▲', name: 'Level 2 Reached', description: 'Reach player level 2',
    check: (s) => s.user.level >= 2 },

  { id: 'level_5', icon: '◆', name: 'Rising Star', description: 'Reach player level 5',
    check: (s) => s.user.level >= 5 },

  { id: 'level_10', icon: '★', name: 'Scholar', description: 'Reach player level 10',
    check: (s) => s.user.level >= 10 },

  { id: 'flawless', icon: '✦', name: 'Flawless', description: 'Solve 10 challenges first try',
    check: (s) => s.firstTryCount >= 10 },

  { id: 'quick_thinker', icon: '⚡', name: 'Quick Thinker', description: 'Complete 20 challenges',
    check: (s) => s.completed >= 20 },

  { id: 'coin_collector', icon: '◯', name: 'Coin Collector', description: 'Earn 500 coins',
    check: (s) => s.user.coins >= 500 },

  { id: 'frontend_pro', icon: '◐', name: 'Frontend Pro', description: 'Complete 50 frontend challenges',
    check: (s) => (s.perSection.frontend || 0) >= 50 },

  { id: 'expert_coder', icon: '♛', name: 'Expert Coder', description: 'Complete an entire track (100 challenges)',
    check: (s) => (s.perSection.frontend || 0) >= 100 },

  { id: 'xp_500', icon: '✧', name: 'XP Climber', description: 'Earn 500 XP total',
    check: (s) => s.user.xp >= 500 },

  { id: 'xp_2000', icon: '⬢', name: 'XP Legend', description: 'Earn 2000 XP total',
    check: (s) => s.user.xp >= 2000 },
];

module.exports = { ACHIEVEMENTS };
