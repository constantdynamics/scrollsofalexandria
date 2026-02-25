import { createContext, useContext, useState, useEffect } from 'react';
import * as storage from '../utils/localStorage';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user data on mount
  useEffect(() => {
    const data = storage.loadUserData();
    setUserData(data);
    setLoading(false);
  }, []);

  // Save user data whenever it changes
  useEffect(() => {
    if (userData && !loading) {
      storage.saveUserData(userData);
    }
  }, [userData, loading]);

  // Update preference
  const updatePreference = (key, value) => {
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  // Get principle progress
  const getPrincipleProgress = (principleId) => {
    return userData?.principleProgress[principleId] || {
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

  // Update daily streak
  const updateStreak = () => {
    const today = new Date().toDateString();
    setUserData(prev => {
      const lastActive = prev.streak?.lastActiveDate;
      if (lastActive === today) return prev; // Already active today

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();

      let currentStreak = prev.streak?.currentStreak || 0;
      if (lastActive === yesterdayStr) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }

      const longestStreak = Math.max(currentStreak, prev.streak?.longestStreak || 0);
      return {
        ...prev,
        streak: { currentStreak, longestStreak, lastActiveDate: today }
      };
    });
  };

  // Mark principle as read
  const markPrincipleAsRead = (principleId) => {
    const progress = getPrincipleProgress(principleId);
    if (progress.activities.read) return 0; // Already marked, no extra points
    progress.activities.read = true;
    progress.masteryPercentage = storage.calculateMastery(progress.activities);
    progress.lastVisited = new Date().toISOString();

    updateStreak();

    setUserData(prev => ({
      ...prev,
      points: prev.points + 10,
      principleProgress: {
        ...prev.principleProgress,
        [principleId]: progress
      }
    }));

    return 10; // Points earned
  };

  // Mark multiple choice correct
  const markMultipleChoiceCorrect = (principleId) => {
    const progress = getPrincipleProgress(principleId);
    if (progress.activities.multipleChoiceCorrect) return 0; // Already done
    progress.activities.multipleChoiceCorrect = true;
    updateStreak();
    progress.masteryPercentage = storage.calculateMastery(progress.activities);
    progress.lastVisited = new Date().toISOString();

    setUserData(prev => ({
      ...prev,
      points: prev.points + 15,
      principleProgress: {
        ...prev.principleProgress,
        [principleId]: progress
      }
    }));

    return 15; // Points earned
  };

  // Mark own example complete
  const markOwnExample = (principleId) => {
    const progress = getPrincipleProgress(principleId);
    if (progress.activities.ownExample) return { points: 0, newlyUnlocked: [] };
    progress.activities.ownExample = true;
    updateStreak();
    progress.masteryPercentage = storage.calculateMastery(progress.activities);
    progress.lastVisited = new Date().toISOString();

    const newlyUnlocked = checkAndUnlockPrinciples(principleId);

    setUserData(prev => ({
      ...prev,
      points: prev.points + 25,
      principleProgress: {
        ...prev.principleProgress,
        [principleId]: progress
      }
    }));

    return { points: 25, newlyUnlocked };
  };

  // Mark AI assisted example complete
  const markAiAssistedExample = (principleId) => {
    const progress = getPrincipleProgress(principleId);
    if (progress.activities.aiAssistedExample) return { points: 0, newlyUnlocked: [] };
    progress.activities.aiAssistedExample = true;
    updateStreak();
    progress.masteryPercentage = storage.calculateMastery(progress.activities);
    progress.lastVisited = new Date().toISOString();

    const newlyUnlocked = checkAndUnlockPrinciples(principleId);

    setUserData(prev => ({
      ...prev,
      points: prev.points + 20,
      principleProgress: {
        ...prev.principleProgress,
        [principleId]: progress
      }
    }));

    return { points: 20, newlyUnlocked };
  };

  // Check if principle is unlocked
  const isPrincipleUnlocked = (principleId) => {
    return userData?.unlockedPrinciples?.includes(principleId) || false;
  };

  // Unlock principle
  const unlockPrinciple = (principleId) => {
    if (!isPrincipleUnlocked(principleId)) {
      setUserData(prev => ({
        ...prev,
        unlockedPrinciples: [...prev.unlockedPrinciples, principleId]
      }));
      return true; // Newly unlocked
    }
    return false; // Already unlocked
  };

  // Check and unlock related principles
  const checkAndUnlockPrinciples = (principleId) => {
    const { getPrincipleById } = require('../data/principles');
    const principle = getPrincipleById(principleId);

    if (!principle) return [];

    const newlyUnlocked = [];

    if (principle.unlocks && principle.unlocks.length > 0) {
      principle.unlocks.forEach(unlockedId => {
        if (unlockPrinciple(unlockedId)) {
          newlyUnlocked.push(unlockedId);
        }
      });
    }

    return newlyUnlocked;
  };

  // Track learning style choice
  const trackLearningStyleChoice = (choice) => {
    setUserData(prev => {
      const newHistory = [...prev.learningStyleHistory, {
        choice,
        timestamp: new Date().toISOString()
      }].slice(-10); // Keep last 10

      // Determine preference after 3 choices
      let newPreference = prev.preferences.defaultLearningStyle;
      if (newHistory.length >= 3 && newPreference === 'auto') {
        const recent = newHistory.slice(-5);
        const definitionFirst = recent.filter(c => c.choice === 'definition-first').length;
        const exampleFirst = recent.filter(c => c.choice === 'example-first').length;

        if (definitionFirst > exampleFirst + 1) {
          newPreference = 'definition-first';
        } else if (exampleFirst > definitionFirst + 1) {
          newPreference = 'example-first';
        }
      }

      return {
        ...prev,
        learningStyleHistory: newHistory,
        preferences: {
          ...prev.preferences,
          defaultLearningStyle: newPreference
        }
      };
    });
  };

  // Get recommended learning style
  const getRecommendedLearningStyle = () => {
    if (!userData) return 'example-first';

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
  const completeOnboarding = () => {
    setUserData(prev => ({
      ...prev,
      completedOnboarding: true
    }));
  };

  // Get user statistics
  const getUserStats = () => {
    if (!userData) return {
      points: 0,
      totalPrinciples: 0,
      completedPrinciples: 0,
      averageMastery: 0,
      unlockedCount: 0,
      currentStreak: 0,
      longestStreak: 0
    };

    const totalPrinciples = Object.keys(userData.principleProgress).length;
    const completedPrinciples = Object.values(userData.principleProgress).filter(
      p => p.masteryPercentage === 100
    ).length;
    const totalMastery = Object.values(userData.principleProgress).reduce(
      (sum, p) => sum + p.masteryPercentage,
      0
    );
    const averageMastery = totalPrinciples > 0 ? totalMastery / totalPrinciples : 0;

    return {
      points: userData.points,
      totalPrinciples,
      completedPrinciples,
      averageMastery: Math.round(averageMastery),
      unlockedCount: userData.unlockedPrinciples.length,
      currentStreak: userData.streak?.currentStreak || 0,
      longestStreak: userData.streak?.longestStreak || 0
    };
  };

  // Reset all data
  const resetUserData = () => {
    storage.clearUserData();
    const freshData = storage.loadUserData();
    setUserData(freshData);
  };

  const value = {
    userData,
    loading,
    updatePreference,
    getPrincipleProgress,
    markPrincipleAsRead,
    markMultipleChoiceCorrect,
    markOwnExample,
    markAiAssistedExample,
    isPrincipleUnlocked,
    unlockPrinciple,
    trackLearningStyleChoice,
    getRecommendedLearningStyle,
    completeOnboarding,
    getUserStats,
    resetUserData,
    updateStreak
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-parchment">
        <div className="text-center">
          <div className="text-6xl mb-4">📜</div>
          <div className="text-xl font-serif text-ink">Loading Scrolls of Wisdom...</div>
        </div>
      </div>
    );
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
