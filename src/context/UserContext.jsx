import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as storage from '../utils/localStorage';
import { checkAchievements, findNewAchievements } from '../data/achievements';
import { allPrinciples } from '../data/principles';

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
  const [newAchievements, setNewAchievements] = useState([]); // voor toast-notificaties

  useEffect(() => {
    const data = storage.loadUserData();
    setUserData(data);
    setLoading(false);
  }, []);

  // Achievement check — roep aan na elke state-update die scores/progress wijzigt
  const checkAndNotifyAchievements = useCallback((updatedData) => {
    if (!updatedData) return;
    const oldUnlocked = updatedData.unlockedAchievements || [];
    const nowUnlocked = checkAchievements(updatedData, allPrinciples);
    const nieuw = findNewAchievements(oldUnlocked, nowUnlocked);
    if (nieuw.length > 0) {
      setUserData(prev => ({ ...prev, unlockedAchievements: nowUnlocked }));
      setNewAchievements(prev => [...prev, ...nieuw]);
    }
  }, []);

  useEffect(() => {
    if (userData && !loading) {
      storage.saveUserData(userData);
      // Check achievements na elke data-update
      checkAndNotifyAchievements(userData);
    }
  }, [userData, loading, checkAndNotifyAchievements]);

  const updatePreference = (key, value) => {
    setUserData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: value
      }
    }));
  };

  const getPrincipleProgress = (principleId) => {
    return userData?.principleProgress[principleId] || {
      masteryPercentage: 0,
      completed: false,
      activities: {
        read: false
      },
      lastVisited: null,
      timesReviewed: 0
    };
  };

  const updateStreak = () => {
    const today = new Date().toDateString();
    setUserData(prev => {
      const lastActive = prev.streak?.lastActiveDate;
      if (lastActive === today) return prev;

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

  const markPrincipleAsRead = (principleId) => {
    const progress = getPrincipleProgress(principleId);
    if (progress.activities.read) return 0;
    progress.activities.read = true;
    progress.masteryPercentage = 100;
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

    return 10;
  };

  const trackLearningStyleChoice = (choice) => {
    setUserData(prev => {
      const newHistory = [...prev.learningStyleHistory, {
        choice,
        timestamp: new Date().toISOString()
      }].slice(-10);

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

  const completeOnboarding = () => {
    setUserData(prev => ({
      ...prev,
      completedOnboarding: true
    }));
  };

  const getUserStats = () => {
    if (!userData) return {
      points: 0,
      totalPrinciples: 0,
      completedPrinciples: 0,
      averageMastery: 0,
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
      currentStreak: userData.streak?.currentStreak || 0,
      longestStreak: userData.streak?.longestStreak || 0
    };
  };

  const resetUserData = () => {
    storage.clearUserData();
    const freshData = storage.loadUserData();
    setUserData(freshData);
  };

  // Get statuses for a principle (kenIk, herlezen, bewaard)
  const getPrincipleStatuses = (principleId) => {
    return userData?.principleStatuses?.[principleId] || { kenIk: false, herlezen: false, bewaard: false };
  };

  // Toggle a specific status for a principle
  const togglePrincipleStatus = (principleId, statusKey) => {
    setUserData(prev => {
      const current = prev.principleStatuses?.[principleId] || { kenIk: false, herlezen: false, bewaard: false };
      const newVal = !current[statusKey];
      // kenIk and herlezen are mutually exclusive
      const updated = { ...current, [statusKey]: newVal };
      if (statusKey === 'kenIk' && newVal) updated.herlezen = false;
      if (statusKey === 'herlezen' && newVal) updated.kenIk = false;
      return {
        ...prev,
        principleStatuses: {
          ...prev.principleStatuses,
          [principleId]: updated
        }
      };
    });
  };

  const setMentorPrinciple = (principleId) => {
    updatePreference('mentorPrincipleId', principleId);
  };

  // Verwijder een achievement-notificatie (na tonen)
  const dismissAchievement = (achievementId) => {
    setNewAchievements(prev => prev.filter(id => id !== achievementId));
  };

  // Registreer nacht/vroeg sessie
  const trackSessionTime = () => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) {
      setUserData(prev => ({ ...prev, nachtSessies: (prev.nachtSessies || 0) + 1 }));
    } else if (hour < 7) {
      setUserData(prev => ({ ...prev, vroegeSessies: (prev.vroegeSessies || 0) + 1 }));
    }
  };

  // Registreer spel gespeeld
  const trackGamePlayed = (game) => {
    setUserData(prev => ({
      ...prev,
      gamesPlayed: { ...(prev.gamesPlayed || {}), [game]: ((prev.gamesPlayed?.[game] || 0) + 1) }
    }));
  };

  // Registreer herhaling sessie
  const trackHerhalingSessie = () => {
    setUserData(prev => ({ ...prev, herhalingSessies: (prev.herhalingSessies || 0) + 1 }));
  };

  // Registreer uitdaging voltooid
  const trackUitdagingVoltooid = () => {
    setUserData(prev => ({ ...prev, uitdagingenVoltooid: (prev.uitdagingenVoltooid || 0) + 1 }));
  };

  const value = {
    userData,
    loading,
    updatePreference,
    getPrincipleProgress,
    markPrincipleAsRead,
    trackLearningStyleChoice,
    getRecommendedLearningStyle,
    completeOnboarding,
    getUserStats,
    resetUserData,
    updateStreak,
    getPrincipleStatuses,
    togglePrincipleStatus,
    setMentorPrinciple,
    // Achievements
    newAchievements,
    dismissAchievement,
    trackSessionTime,
    trackGamePlayed,
    trackHerhalingSessie,
    trackUitdagingVoltooid,
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
