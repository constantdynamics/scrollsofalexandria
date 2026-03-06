import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { ACHIEVEMENTS } from '../data/achievements';

const AchievementToast = () => {
  const { newAchievements, dismissAchievement } = useUser();
  const timers = useRef({});

  // Auto-dismiss na 4 seconden
  useEffect(() => {
    newAchievements.forEach(id => {
      if (!timers.current[id]) {
        timers.current[id] = setTimeout(() => {
          dismissAchievement(id);
          delete timers.current[id];
        }, 4000);
      }
    });
  }, [newAchievements, dismissAchievement]);

  if (newAchievements.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 pointer-events-none" style={{ maxWidth: 320 }}>
      <AnimatePresence>
        {newAchievements.slice(0, 3).map(id => {
          const achievement = ACHIEVEMENTS.find(a => a.id === id);
          if (!achievement) return null;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 80, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 80, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="pointer-events-auto"
            >
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg border"
                style={{
                  background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-primary-50) 100%)',
                  borderColor: 'var(--color-primary-100)',
                  boxShadow: '0 8px 32px rgba(92,79,207,0.18)',
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 500, damping: 20 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl shadow-sm"
                  style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}
                >
                  {achievement.emoji}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
                    Prestatie ontgrendeld!
                  </div>
                  <div className="text-sm font-bold text-text truncate">{achievement.title}</div>
                  <div className="text-xs text-text-muted truncate">{achievement.description}</div>
                </div>
                <button
                  onClick={() => dismissAchievement(id)}
                  className="w-6 h-6 flex items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-bg-alt transition-all flex-shrink-0"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default AchievementToast;
