import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = process.env.DATABASE_PATH || join(__dirname, 'data', 'scrolls.db');
const db = new Database(dbPath);

// Enable WAL mode for better concurrency
db.pragma('journal_mode = WAL');

// Initialize database schema
db.exec(`
  -- Users table
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- User preferences
  CREATE TABLE IF NOT EXISTS user_preferences (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    organization TEXT DEFAULT 'academic',
    default_learning_style TEXT DEFAULT 'auto',
    daily_reminder INTEGER DEFAULT 0,
    reminder_time TEXT DEFAULT '09:00',
    theme TEXT DEFAULT 'classic'
  );

  -- Principle progress tracking
  CREATE TABLE IF NOT EXISTS principle_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    principle_id TEXT NOT NULL,
    mastery_percentage INTEGER DEFAULT 0,
    completed INTEGER DEFAULT 0,
    read INTEGER DEFAULT 0,
    multiple_choice_correct INTEGER DEFAULT 0,
    own_example INTEGER DEFAULT 0,
    ai_assisted_example INTEGER DEFAULT 0,
    own_example_text TEXT,
    last_visited DATETIME,
    times_reviewed INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, principle_id)
  );

  -- Spaced repetition schedule
  CREATE TABLE IF NOT EXISTS spaced_repetition (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    principle_id TEXT NOT NULL,
    next_review_date DATETIME NOT NULL,
    interval_days INTEGER DEFAULT 1,
    ease_factor REAL DEFAULT 2.5,
    repetitions INTEGER DEFAULT 0,
    last_quality INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, principle_id)
  );

  -- Learning style history
  CREATE TABLE IF NOT EXISTS learning_style_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    choice TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- AI chat history
  CREATE TABLE IF NOT EXISTS ai_chat_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    principle_id TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Points and achievements
  CREATE TABLE IF NOT EXISTS user_points (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    total_points INTEGER DEFAULT 0,
    streak_days INTEGER DEFAULT 0,
    last_activity_date DATE
  );

  -- Create indexes for better query performance
  CREATE INDEX IF NOT EXISTS idx_progress_user ON principle_progress(user_id);
  CREATE INDEX IF NOT EXISTS idx_progress_principle ON principle_progress(principle_id);
  CREATE INDEX IF NOT EXISTS idx_spaced_user_date ON spaced_repetition(user_id, next_review_date);
  CREATE INDEX IF NOT EXISTS idx_chat_user_principle ON ai_chat_history(user_id, principle_id);
`);

// Prepared statements for common operations
export const queries = {
  // Users
  createUser: db.prepare(`
    INSERT INTO users (id, email, password_hash, name)
    VALUES (?, ?, ?, ?)
  `),

  getUserByEmail: db.prepare(`
    SELECT * FROM users WHERE email = ?
  `),

  getUserById: db.prepare(`
    SELECT id, email, name, created_at FROM users WHERE id = ?
  `),

  // User Preferences
  createPreferences: db.prepare(`
    INSERT INTO user_preferences (user_id) VALUES (?)
  `),

  getPreferences: db.prepare(`
    SELECT * FROM user_preferences WHERE user_id = ?
  `),

  updatePreferences: db.prepare(`
    UPDATE user_preferences
    SET organization = ?, default_learning_style = ?, daily_reminder = ?, reminder_time = ?, theme = ?
    WHERE user_id = ?
  `),

  // Points
  initPoints: db.prepare(`
    INSERT INTO user_points (user_id, total_points) VALUES (?, 0)
  `),

  getPoints: db.prepare(`
    SELECT * FROM user_points WHERE user_id = ?
  `),

  addPoints: db.prepare(`
    UPDATE user_points
    SET total_points = total_points + ?,
        last_activity_date = DATE('now'),
        streak_days = CASE
          WHEN last_activity_date = DATE('now', '-1 day') THEN streak_days + 1
          WHEN last_activity_date = DATE('now') THEN streak_days
          ELSE 1
        END
    WHERE user_id = ?
  `),

  // Principle Progress
  getProgress: db.prepare(`
    SELECT * FROM principle_progress WHERE user_id = ? AND principle_id = ?
  `),

  getAllProgress: db.prepare(`
    SELECT * FROM principle_progress WHERE user_id = ?
  `),

  upsertProgress: db.prepare(`
    INSERT INTO principle_progress (user_id, principle_id, mastery_percentage, read, multiple_choice_correct, own_example, ai_assisted_example, own_example_text, last_visited, times_reviewed)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, principle_id) DO UPDATE SET
      mastery_percentage = excluded.mastery_percentage,
      read = excluded.read,
      multiple_choice_correct = excluded.multiple_choice_correct,
      own_example = excluded.own_example,
      ai_assisted_example = excluded.ai_assisted_example,
      own_example_text = COALESCE(excluded.own_example_text, own_example_text),
      last_visited = excluded.last_visited,
      times_reviewed = excluded.times_reviewed,
      updated_at = CURRENT_TIMESTAMP
  `),

  // Spaced Repetition
  getReviewsDue: db.prepare(`
    SELECT * FROM spaced_repetition
    WHERE user_id = ? AND next_review_date <= DATETIME('now')
    ORDER BY next_review_date ASC
  `),

  getSpacedRepetition: db.prepare(`
    SELECT * FROM spaced_repetition WHERE user_id = ? AND principle_id = ?
  `),

  upsertSpacedRepetition: db.prepare(`
    INSERT INTO spaced_repetition (user_id, principle_id, next_review_date, interval_days, ease_factor, repetitions, last_quality)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(user_id, principle_id) DO UPDATE SET
      next_review_date = excluded.next_review_date,
      interval_days = excluded.interval_days,
      ease_factor = excluded.ease_factor,
      repetitions = excluded.repetitions,
      last_quality = excluded.last_quality,
      updated_at = CURRENT_TIMESTAMP
  `),

  // AI Chat History
  addChatMessage: db.prepare(`
    INSERT INTO ai_chat_history (user_id, principle_id, role, content)
    VALUES (?, ?, ?, ?)
  `),

  getChatHistory: db.prepare(`
    SELECT * FROM ai_chat_history
    WHERE user_id = ? AND principle_id = ?
    ORDER BY timestamp ASC
    LIMIT 20
  `),

  // Learning Style History
  addLearningStyleChoice: db.prepare(`
    INSERT INTO learning_style_history (user_id, choice) VALUES (?, ?)
  `),

  getLearningStyleHistory: db.prepare(`
    SELECT * FROM learning_style_history WHERE user_id = ? ORDER BY timestamp DESC LIMIT 10
  `)
};

export default db;
