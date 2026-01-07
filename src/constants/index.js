// Application constants - centralized configuration

// Points System
export const POINTS = {
  READ_PRINCIPLE: 10,
  MULTIPLE_CHOICE_CORRECT: 15,
  OWN_EXAMPLE: 25,
  AI_ASSISTED_EXAMPLE: 20,
  SPACED_REPETITION_REVIEW: 10,
  STREAK_BONUS: 5,
};

// Mastery Weights (percentages)
export const MASTERY_WEIGHTS = {
  READ: 20,
  MULTIPLE_CHOICE: 20,
  OWN_EXAMPLE: 30,
  AI_ASSISTED_EXAMPLE: 30,
};

// Difficulty Levels
export const DIFFICULTY = {
  BEGINNER: 1,
  INTERMEDIATE: 2,
  ADVANCED: 3,
};

// Learning Styles
export const LEARNING_STYLE = {
  DEFINITION_FIRST: 'definition-first',
  EXAMPLE_FIRST: 'example-first',
  AUTO: 'auto',
};

// Organization Systems
export const ORGANIZATION = {
  ACADEMIC: 'academic',
  SKILLS: 'skills',
};

// Spaced Repetition Intervals (in days)
export const SPACED_REPETITION = {
  INTERVALS: [1, 3, 7, 14, 30, 60, 120],
  MIN_MASTERY_FOR_REVIEW: 50,
};

// Academic Categories
export const ACADEMIC_CATEGORIES = [
  'Logica',
  'Ethiek',
  'Epistemologie',
  'Retorica',
  'Metafysica',
  'Wetenschapsfilosofie',
  'Behavioral Economics',
  'Speltheorie',
];

// Skills Categories
export const SKILL_CATEGORIES = [
  'Beter Argumenteren',
  'Manipulatie Herkennen',
  'Complexiteit Begrijpen',
  'Patronen Zien',
  'Beslissingen Nemen',
  'Causale Verbanden Begrijpen',
];

// Domain Icons
export const DOMAIN_ICONS = {
  business: '💼',
  daily: '🏠',
  science: '🔬',
  politics: '🏛️',
  history: '📜',
};

// Category Icons
export const CATEGORY_ICONS = {
  'Logica': '📚',
  'Ethiek': '⚖️',
  'Epistemologie': '🧠',
  'Retorica': '🎭',
  'Metafysica': '🌌',
  'Wetenschapsfilosofie': '🔬',
  'Behavioral Economics': '💰',
  'Speltheorie': '🎲',
  'Beter Argumenteren': '💬',
  'Manipulatie Herkennen': '🎭',
  'Complexiteit Begrijpen': '🧩',
  'Patronen Zien': '👁️',
  'Beslissingen Nemen': '🎯',
  'Causale Verbanden Begrijpen': '🔗',
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  USER_DATA: 'scrolls_of_wisdom_user_data',
  THEME: 'scrolls_of_wisdom_theme',
};

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 30000,
};

// Validation
export const VALIDATION = {
  MIN_EXAMPLE_LENGTH: 20,
  MAX_EXAMPLE_LENGTH: 1000,
  MIN_CHAT_MESSAGE_LENGTH: 2,
  MAX_CHAT_MESSAGE_LENGTH: 500,
};

// Initial Unlocked Principles (IDs)
export const INITIAL_UNLOCKED_PRINCIPLES = [
  'modus-ponens',
  'set-theory-basics',
  'correlation-causation',
  'confirmation-bias',
  'sunk-cost-fallacy',
  'opportunity-cost',
  'straw-man-fallacy',
  'ad-hominem',
  'false-dilemma',
  'anchoring',
  'affirming-consequent',
  'deduction-induction',
  'availability-heuristic',
  'post-hoc-ergo',
  'prisoners-dilemma',
  'loss-aversion',
  'framing-effect',
  'dunning-kruger',
  'gamblers-fallacy',
  'hindsight-bias',
];
