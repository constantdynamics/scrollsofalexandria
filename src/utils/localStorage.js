// LocalStorage utility functions for persisting user data

const STORAGE_KEY = 'scrolls_of_wisdom_user_data';

// Default user data structure
const defaultUserData = {
  userId: generateUserId(),
  points: 0,
  principleProgress: {},
  principleStatuses: {}, // { [principleId]: { kenIk: bool, herlezen: bool, bewaard: bool } }
  preferences: {
    organization: 'academic', // 'academic' or 'skills'
    defaultLearningStyle: 'auto', // 'definition-first', 'example-first', or 'auto'
    dailyReminder: false,
    reminderTime: '08:00',
    theme: 'classic',
    progressiveUnlock: true
  },
  learningStyleHistory: [],
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

// Load user data from localStorage
export const loadUserData = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      return {
        ...defaultUserData,
        ...data,
        preferences: { ...defaultUserData.preferences, ...(data.preferences || {}) },
        streak: { ...defaultUserData.streak, ...(data.streak || {}) },
        principleStatuses: data.principleStatuses || {}
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
      read: false
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

// Calculate mastery percentage — reading = 100%
export const calculateMastery = (activities) => {
  return activities.read ? 100 : 0;
};

// Mark principle as read
export const markPrincipleAsRead = (principleId) => {
  const progress = getPrincipleProgress(principleId);
  progress.activities.read = true;
  progress.masteryPercentage = 100;

  const userData = updatePrincipleProgress(principleId, progress);

  const points = 10;
  addPoints(points);

  return { progress: userData, points };
};

// Update daily streak
export const updateStreak = () => {
  const userData = loadUserData();
  const today = new Date().toDateString();
  const lastActive = userData.streak?.lastActiveDate;

  if (lastActive === today) {
    return userData.streak;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toDateString();

  let currentStreak = userData.streak?.currentStreak || 0;
  if (lastActive === yesterdayStr) {
    currentStreak += 1;
  } else {
    currentStreak = 1;
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

// Track learning style choice
export const trackLearningStyleChoice = (choice) => {
  const userData = loadUserData();
  userData.learningStyleHistory.push({
    choice,
    timestamp: new Date().toISOString()
  });

  if (userData.learningStyleHistory.length > 10) {
    userData.learningStyleHistory = userData.learningStyleHistory.slice(-10);
  }

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

  if (userData.learningStyleHistory.length >= 3) {
    const recent = userData.learningStyleHistory.slice(-5);
    const definitionFirst = recent.filter(c => c.choice === 'definition-first').length;
    const exampleFirst = recent.filter(c => c.choice === 'example-first').length;

    return exampleFirst > definitionFirst ? 'example-first' : 'definition-first';
  }

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
  addPoints,
  trackLearningStyleChoice,
  getRecommendedLearningStyle,
  completeOnboarding,
  getUserStats
};
