import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { ACHIEVEMENTS, ACHIEVEMENT_CATEGORIES, checkAchievements } from '../data/achievements';
import { allPrinciples } from '../data/principles';

const PrestatiePage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();

  const unlockedIds = useMemo(() => {
    if (!userData) return new Set();
    return new Set(checkAchievements(userData, allPrinciples));
  }, [userData]);

  const totaalOntgrendeld = unlockedIds.size;
  const totaal = ACHIEVEMENTS.length;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate('/home')}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-text leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              🏆 Prestaties
            </h1>
            <p className="text-xs text-text-muted">{totaalOntgrendeld}/{totaal} ontgrendeld</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Voortgangsbanner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 rounded-2xl p-5 border border-border overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-surface) 70%, rgba(201,136,15,0.06) 100%)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl shadow-md"
              style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}>
              🏆
            </div>
            <div className="flex-1">
              <div className="text-xl font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {totaalOntgrendeld} van {totaal} prestaties
              </div>
              <div className="w-full h-3 bg-bg-alt rounded-full overflow-hidden mb-2">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(totaalOntgrendeld / totaal) * 100}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
              <p className="text-sm text-text-muted">
                {Math.round((totaalOntgrendeld / totaal) * 100)}% voltooid
                {totaalOntgrendeld === totaal && ' · Volledig meester!'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Per categorie */}
        {ACHIEVEMENT_CATEGORIES.map((cat, catIdx) => {
          const catAchievements = ACHIEVEMENTS.filter(a => a.category === cat);
          const catUnlocked = catAchievements.filter(a => unlockedIds.has(a.id)).length;

          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.07 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-text-secondary">{cat}</span>
                <span className="text-xs text-text-muted bg-bg-alt px-2 py-0.5 rounded-full border border-border">
                  {catUnlocked}/{catAchievements.length}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {catAchievements.map((achievement, i) => {
                  const isUnlocked = unlockedIds.has(achievement.id);
                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: catIdx * 0.07 + i * 0.04 }}
                      className="rounded-xl border p-4 flex items-center gap-3 relative overflow-hidden"
                      style={{
                        borderColor: isUnlocked ? 'var(--color-primary-100)' : 'var(--color-border)',
                        background: isUnlocked
                          ? 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-surface) 100%)'
                          : 'var(--color-surface)',
                        opacity: isUnlocked ? 1 : 0.65,
                        boxShadow: isUnlocked ? 'var(--shadow-sm)' : 'none',
                      }}
                    >
                      {/* Glow effect voor ontgrendelde */}
                      {isUnlocked && (
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ background: 'radial-gradient(ellipse at top left, rgba(92,79,207,0.07) 0%, transparent 70%)' }} />
                      )}

                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl relative"
                        style={{
                          background: isUnlocked
                            ? 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)'
                            : 'var(--color-bg-alt)',
                          filter: isUnlocked ? 'none' : 'grayscale(1)',
                          boxShadow: isUnlocked ? '0 4px 12px rgba(92,79,207,0.25)' : 'none',
                        }}
                      >
                        {achievement.emoji}
                        {!isUnlocked && (
                          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/20">
                            <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-text truncate">{achievement.title}</div>
                        <div className="text-xs text-text-muted leading-snug mt-0.5">{achievement.description}</div>
                        {isUnlocked && (
                          <div className="flex items-center gap-1 mt-1">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-xs font-semibold text-primary">Ontgrendeld</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PrestatiePage;
