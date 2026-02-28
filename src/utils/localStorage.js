// LocalStorage utility functions for persisting user data
import { getPrincipleById } from '../data/principles';

const STORAGE_KEY = 'scrolls_of_wisdom_user_data';

// Default user data structure
const defaultUserData = {
  userId: generateUserId(),
  points: 0,
  principleProgress: {},
  preferences: {
    organization: 'academic', // 'academic' or 'skills'
    defaultLearningStyle: 'auto', // 'definition-first', 'example-first', or 'auto'
    dailyReminder: false,
    reminderTime: '08:00',
    theme: 'classic'
  },
  unlockedPrinciples: getInitialUnlockedPrinciples(),
  learningStyleHistory: [], // Track user choices to learn preference
  completedOnboarding: false,
  streak: {
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: null
  }
};

function generateUserId() {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get initial unlocked principles (first 20 basic ones)
function getInitialUnlockedPrinciples() {
  return [
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
    'prisoners-dilemma'
  ];
}

// Load user data from localStorage
export const loadUserData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      // Deep merge with defaults to ensure all fields exist (including nested)
      return {
        ...defaultUserData,
        ...data,
        preferences: { ...defaultUserData.preferences, ...(data.preferences || {}) },
        streak: { ...defaultUserData.streak, ...(data.streak || {}) }
      };
    }
    return { ...defaultUserData };
  } catch (error) {
    console.error('Error loading user data:', error);
    return { ...defaultUserData };
  }
};

// Save user data to localStorage
export const saveUserData = (userData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
};

// Clear all user data (reset)
export const clearUserData = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing user data:', error);
    return false;
  }
};

// Update specific user preference
export const updatePreference = (key, value) => {
  const userData = loadUserData();
  userData.preferences[key] = value;
  saveUserData(userData);
  return userData;
};

// Get principle progress
export const getPrincipleProgress = (principleId) => {
  const userData = loadUserData();
  return userData.principleProgress[principleId] || {
    masteryPercentage: 0,
    completed: false,
    activities: {
      read: false,
      multipleChoiceCorrect: false,
      ownExample: false,
      aiAssistedExample: false
    },
    lastVisited: null,
    timesReviewed: 0
  };
};

// Update principle progress
export const updatePrincipleProgress = (principleId, updates) => {
  const userData = loadUserData();
  const currentProgress = getPrincipleProgress(principleId);

  userData.principleProgress[principleId] = {
    ...currentProgress,
    ...updates,
    lastVisited: new Date().toISOString()
  };

  saveUserData(userData);
  return userData.principleProgress[principleId];
};

// Calculate mastery percentage based on activities
export const calculateMastery = (activities) => {
  let mastery = 0;

  if (activities.read) mastery += 20;
  if (activities.multipleChoiceCorrect) mastery += 20;
  if (activities.ownExample) mastery += 30;
  if (activities.aiAssistedExample) mastery += 30;

  return Math.min(mastery, 100);
};

// Mark principle as read
export const markPrincipleAsRead = (principleId) => {
  const progress = getPrincipleProgress(principleId);
  progress.activities.read = true;
  progress.masteryPercentage = calculateMastery(progress.activities);

  const userData = updatePrincipleProgress(principleId, progress);

  // Add points
  const points = 10;
  addPoints(points);

  return { progress: userData, points };
};

// Mark multiple choice as correct
export const markMultipleChoiceCorrect = (principleId) => {
  const progress = getPrincipleProgress(principleId);
  progress.activities.multipleChoiceCorrect = true;
  progress.masteryPercentage = calculateMastery(progress.activities);

  const userData = updatePrincipleProgress(principleId, progress);

  // Add points
  const points = 15;
  addPoints(points);

  return { progress: userData, points };
};

// Mark own example as complete
export const markOwnExample = (principleId) => {
  const progress = getPrincipleProgress(principleId);
  progress.activities.ownExample = true;
  progress.masteryPercentage = calculateMastery(progress.activities);

  const userData = updatePrincipleProgress(principleId, progress);

  // Add points
  const points = 25;
  addPoints(points);

  // Check for unlocks
  checkAndUnlockPrinciples(principleId);

  return { progress: userData, points };
};

// Mark AI assisted example as complete
export const markAiAssistedExample = (principleId) => {
  const progress = getPrincipleProgress(principleId);
  progress.activities.aiAssistedExample = true;
  progress.masteryPercentage = calculateMastery(progress.activities);

  const userData = updatePrincipleProgress(principleId, progress);

  // Add points
  const points = 20;
  addPoints(points);

  // Check for unlocks
  checkAndUnlockPrinciples(principleId);

  return { progress: userData, points };
};

// Update daily streak
export const updateStreak = () => {
  const userData = loadUserData();
  const today = new Date().toDateString();
  const lastActive = userData.streak?.lastActiveDate;

  if (lastActive === today) {
    return userData.streak; // Already active today
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  let currentStreak = userData.streak?.currentStreak || 0;
  if (lastActive === yesterdayStr) {
    currentStreak += 1; // Consecutive day
  } else {
    currentStreak = 1; // Reset streak
  }

  const longestStreak = Math.max(currentStreak, userData.streak?.longestStreak || 0);
  userData.streak = { currentStreak, longestStreak, lastActiveDate: today };
  saveUserData(userData);
  return userData.streak;
};

// Add points to user total
export const addPoints = (points) => {
  const userData = loadUserData();
  userData.points += points;
  saveUserData(userData);
  return userData.points;
};

// Check if principle is unlocked
export const isPrincipleUnlocked = (principleId) => {
  const userData = loadUserData();
  return userData.unlockedPrinciples.includes(principleId);
};

// Unlock principle
export const unlockPrinciple = (principleId) => {
  const userData = loadUserData();
  if (!userData.unlockedPrinciples.includes(principleId)) {
    userData.unlockedPrinciples.push(principleId);
    saveUserData(userData);
    return true; // Newly unlocked
  }
  return false; // Already unlocked
};

// Check and unlock related principles based on current principle completion
export const checkAndUnlockPrinciples = (principleId) => {
  const principle = getPrincipleById(principleId);

  if (!principle) return [];

  const newlyUnlocked = [];

  // Unlock principles that this one unlocks
  if (principle.unlocks && principle.unlocks.length > 0) {
    principle.unlocks.forEach(unlockedId => {
      const wasNewlyUnlocked = unlockPrinciple(unlockedId);
      if (wasNewlyUnlocked) {
        newlyUnlocked.push(unlockedId);
      }
    });
  }

  return newlyUnlocked;
};

// Track learning style choice
export const trackLearningStyleChoice = (choice) => {
  const userData = loadUserData();
  userData.learningStyleHistory.push({
    choice,
    timestamp: new Date().toISOString()
  });

  // Only keep last 10 choices
  if (userData.learningStyleHistory.length > 10) {
    userData.learningStyleHistory = userData.learningStyleHistory.slice(-10);
  }

  // After 3 choices, determine preference
  if (userData.learningStyleHistory.length >= 3 && userData.preferences.defaultLearningStyle === 'auto') {
    const recentChoices = userData.learningStyleHistory.slice(-5);
    const definitionFirst = recentChoices.filter(c => c.choice === 'definition-first').length;
    const exampleFirst = recentChoices.filter(c => c.choice === 'example-first').length;

    if (definitionFirst > exampleFirst + 1) {
      userData.preferences.defaultLearningStyle = 'definition-first';
    } else if (exampleFirst > definitionFirst + 1) {
      userData.preferences.defaultLearningStyle = 'example-first';
    }
  }

  saveUserData(userData);
  return userData.preferences.defaultLearningStyle;
};

// Get recommended learning style
export const getRecommendedLearningStyle = () => {
  const userData = loadUserData();

  if (userData.preferences.defaultLearningStyle !== 'auto') {
    return userData.preferences.defaultLearningStyle;
  }

  // If auto and we have enough history, recommend based on history
  if (userData.learningStyleHistory.length >= 3) {
    const recent = userData.learningStyleHistory.slice(-5);
    const definitionFirst = recent.filter(c => c.choice === 'definition-first').length;
    const exampleFirst = recent.filter(c => c.choice === 'example-first').length;

    return exampleFirst > definitionFirst ? 'example-first' : 'definition-first';
  }

  // Default to example first (more intuitive for beginners)
  return 'example-first';
};

// Complete onboarding
export const completeOnboarding = () => {
  const userData = loadUserData();
  userData.completedOnboarding = true;
  saveUserData(userData);
  return userData;
};

// Get user statistics
export const getUserStats = () => {
  const userData = loadUserData();
  const totalPrinciples = Object.keys(userData.principleProgress).length;
  const completedPrinciples = Object.values(userData.principleProgress).filter(p => p.masteryPercentage === 100).length;
  const totalMastery = Object.values(userData.principleProgress).reduce((sum, p) => sum + p.masteryPercentage, 0);
  const averageMastery = totalPrinciples > 0 ? totalMastery / totalPrinciples : 0;

  return {
    points: userData.points,
    totalPrinciples,
    completedPrinciples,
    averageMastery: Math.round(averageMastery),
    unlockedCount: userData.unlockedPrinciples.length
  };
};

export default {
  loadUserData,
  saveUserData,
  clearUserData,
  updatePreference,
  getPrincipleProgress,
  updatePrincipleProgress,
  calculateMastery,
  markPrincipleAsRead,
  markMultipleChoiceCorrect,
  markOwnExample,
  markAiAssistedExample,
  addPoints,
  isPrincipleUnlocked,
  unlockPrinciple,
  checkAndUnlockPrinciples,
  trackLearningStyleChoice,
  getRecommendedLearningStyle,
  completeOnboarding,
  getUserStats
};
