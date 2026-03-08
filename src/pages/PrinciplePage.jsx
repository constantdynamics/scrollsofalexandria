import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { getPrincipleById } from '../data/principles';
import MultipleChoiceExercise from '../components/MultipleChoiceExercise';
import CreativeExercise from '../components/CreativeExercise';
import UnlockNotification from '../components/UnlockNotification';

const PrinciplePage = () => {
  const { principleId } = useParams();
  const navigate = useNavigate();
  const {
    getPrincipleProgress,
    markPrincipleAsRead,
    getRecommendedLearningStyle,
    trackLearningStyleChoice,
    getPrincipleStatuses,
    togglePrincipleStatus,
  } = useUser();

  const [learningStyle, setLearningStyle] = useState('');
  const [hasMarkedAsRead, setHasMarkedAsRead] = useState(false);
  const [unlockedPrinciples, setUnlockedPrinciples] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [swipeDir, setSwipeDir] = useState(0); // -1 left, 1 right, 0 none

  const principle = getPrincipleById(principleId);
  const progress = getPrincipleProgress(principleId);

  // Touch handling refs
  const touchStartRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!principle) {
      navigate('/home');
      return;
    }
    const recommended = getRecommendedLearningStyle();
    setLearningStyle(recommended);
  }, [principle, navigate, getRecommendedLearningStyle]);

  // Reset card index when principle changes
  useEffect(() => {
    setCardIndex(0);
  }, [principleId]);

  if (!principle) return null;

  const handleLearningStyleToggle = (style) => {
    setLearningStyle(style);
    trackLearningStyleChoice(style);
  };

  const handleMarkRead = () => {
    markPrincipleAsRead(principleId);
    setHasMarkedAsRead(true);
  };

  const isRead = progress.activities.read || hasMarkedAsRead;
  const statuses = getPrincipleStatuses(principleId);

  // Build cards based on learning style
  const cards = useMemo(() => {
    const c = [];
    if (learningStyle === 'definition-first') {
      c.push({ type: 'definition', title: 'Definitie', icon: '📍' });
      if (principle.abstractExample) c.push({ type: 'abstract', title: 'Abstract voorbeeld', icon: '🔍' });
      if (principle.examples?.length > 0) {
        principle.examples.forEach((ex, i) => {
          c.push({ type: 'example', title: getDomainName(ex.domain), icon: ex.icon, example: ex, index: i });
        });
      }
    } else {
      if (principle.examples?.length > 0) {
        principle.examples.forEach((ex, i) => {
          c.push({ type: 'example', title: getDomainName(ex.domain), icon: ex.icon, example: ex, index: i });
        });
      }
      c.push({ type: 'definition', title: 'Definitie', icon: '📍' });
      if (principle.abstractExample) c.push({ type: 'abstract', title: 'Abstract voorbeeld', icon: '🔍' });
    }
    c.push({ type: 'status', title: 'Afronden', icon: '✅' });
    return c;
  }, [principle, learningStyle]);

  const totalCards = cards.length;
  const safeIndex = Math.min(cardIndex, totalCards - 1);

  const goTo = useCallback((idx) => {
    const target = Math.max(0, Math.min(totalCards - 1, idx));
    setSwipeDir(target > safeIndex ? 1 : -1);
    setCardIndex(target);
  }, [totalCards, safeIndex]);

  const goNext = useCallback(() => goTo(safeIndex + 1), [goTo, safeIndex]);
  const goPrev = useCallback(() => goTo(safeIndex - 1), [goTo, safeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, time: Date.now() };
  };
  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    const dt = Date.now() - touchStartRef.current.time;
    touchStartRef.current = null;
    // Only register horizontal swipe if it's more horizontal than vertical and fast enough
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2 && dt < 500) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  // Auto mark as read when reaching last card
  useEffect(() => {
    if (safeIndex >= totalCards - 1 && !isRead && !hasMarkedAsRead) {
      markPrincipleAsRead(principleId);
      setHasMarkedAsRead(true);
    }
  }, [safeIndex, totalCards, isRead, hasMarkedAsRead, markPrincipleAsRead, principleId]);

  const card = cards[safeIndex];

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                if (window.history.length > 1) navigate(-1);
                else navigate('/home');
              }}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Terug
            </button>
            <MasteryBadge progress={progress} />
          </div>
        </div>
      </header>

      {/* Unlock notifications */}
      <AnimatePresence>
        {unlockedPrinciples.map((id, index) => (
          <UnlockNotification
            key={id}
            principleId={id}
            delay={index * 0.4}
            onClose={() => setUnlockedPrinciples(prev => prev.filter(p => p !== id))}
          />
        ))}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Title section (always visible) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="decorative-border bg-surface mb-4 scroll-reveal relative overflow-hidden"
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          <div className="hero-overlay" />
          <div className="p-5 md:p-6 relative">
            <div className="flex items-start gap-4">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{
                  background: 'linear-gradient(140deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)',
                  border: '1px solid var(--color-primary-100)'
                }}
              >
                <span className="text-2xl md:text-3xl">{principle.emoji}</span>
              </motion.div>
              <div className="flex-1">
                <h1 className="text-xl md:text-2xl font-bold text-text mb-2 leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  {principle.title}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="tag-pill">{principle.academicCategory}</span>
                  <span className="tag-pill">{principle.skillCategory}</span>
                  <DifficultyBadge difficulty={principle.difficulty} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Style Toggle */}
        <div className="mb-4 flex justify-center">
          <div className="inline-flex rounded-xl bg-bg-alt p-1 border border-border shadow-xs">
            <button
              onClick={() => handleLearningStyleToggle('definition-first')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                learningStyle === 'definition-first'
                  ? 'bg-surface text-text shadow-sm border border-border'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span>🎯</span> Definitie eerst
            </button>
            <button
              onClick={() => handleLearningStyleToggle('example-first')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                learningStyle === 'example-first'
                  ? 'bg-surface text-text shadow-sm border border-border'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span>💡</span> Voorbeeld eerst
            </button>
          </div>
        </div>

        {/* Swipeable Card Area */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative"
          style={{ minHeight: 200 }}
        >
          <AnimatePresence mode="wait" custom={swipeDir}>
            <motion.div
              key={`${safeIndex}-${learningStyle}`}
              custom={swipeDir}
              initial={(dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 })}
              animate={{ opacity: 1, x: 0 }}
              exit={(dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 })}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="decorative-border bg-surface scroll-reveal relative overflow-hidden"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div className="p-5 md:p-6">
                {/* Card header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center" style={{ border: '1px solid var(--color-primary-100)' }}>
                    <span className="text-sm">{card.icon}</span>
                  </div>
                  <h2 className="text-lg font-bold text-text" style={{ fontFamily: 'var(--font-display)' }}>
                    {card.title}
                  </h2>
                  <div className="ml-auto text-xs text-text-muted font-medium">
                    {safeIndex + 1} / {totalCards}
                  </div>
                </div>

                {/* Card content */}
                {card.type === 'definition' && (
                  <div>
                    <p className="text-base text-text-secondary leading-relaxed">{principle.definition}</p>
                    {learningStyle === 'example-first' && principle.abstractExample && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <h3 className="font-semibold text-text text-sm mb-1.5">Abstract</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">{principle.abstractExample}</p>
                      </div>
                    )}
                  </div>
                )}

                {card.type === 'abstract' && (
                  <div className="rounded-xl p-4 border-l-4 ml-1"
                    style={{
                      borderLeftColor: 'var(--color-accent)',
                      background: 'rgba(201,136,15,0.05)',
                      borderTop: '1px solid rgba(201,136,15,0.15)',
                      borderRight: '1px solid rgba(201,136,15,0.15)',
                      borderBottom: '1px solid rgba(201,136,15,0.15)',
                    }}>
                    <p className="text-sm text-text-secondary leading-relaxed">{principle.abstractExample}</p>
                  </div>
                )}

                {card.type === 'example' && (
                  <div className="rounded-xl p-4"
                    style={{
                      background: 'var(--color-bg-alt)',
                      border: '1px solid var(--color-border)',
                    }}>
                    <h3 className="font-semibold text-text text-sm mb-2 flex items-center gap-2">
                      <span className="text-base">{card.example.icon}</span>
                      <span>{card.title}</span>
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{card.example.text}</p>
                  </div>
                )}

                {card.type === 'status' && (
                  <div>
                    {!isRead ? (
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleMarkRead}
                        className="btn-primary w-full text-base py-4 flex items-center justify-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Ik begrijp het (+10 pts)
                      </motion.button>
                    ) : (
                      <div className="rounded-xl p-4 flex items-center gap-3"
                        style={{ background: 'var(--color-success-light)', border: '1px solid rgba(5,150,105,0.25)' }}>
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(5,150,105,0.12)' }}>
                          <svg className="w-6 h-6" style={{ color: 'var(--color-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-text text-sm">Gelezen!</div>
                          <div className="text-xs text-text-secondary">Je hebt dit principe bestudeerd</div>
                        </div>
                      </div>
                    )}

                    {/* Status knoppen */}
                    <div className="mt-5 pt-5 border-t border-border">
                      <p className="text-xs text-text-muted mb-3 font-semibold uppercase tracking-widest">Markeer dit principe</p>
                      <div className="flex flex-wrap gap-2">
                        <StatusButton
                          active={statuses.kenIk}
                          onClick={() => togglePrincipleStatus(principleId, 'kenIk')}
                          emoji="✅"
                          label="Dit ken ik"
                          activeStyle={{ background: 'rgba(5,150,105,0.08)', borderColor: 'rgba(5,150,105,0.4)', color: 'var(--color-success)' }}
                        />
                        <StatusButton
                          active={statuses.herlezen}
                          onClick={() => togglePrincipleStatus(principleId, 'herlezen')}
                          emoji="📖"
                          label="Nog eens lezen"
                          activeStyle={{ background: 'rgba(201,136,15,0.08)', borderColor: 'rgba(201,136,15,0.4)', color: 'var(--color-accent-dark)' }}
                        />
                        <StatusButton
                          active={statuses.bewaard}
                          onClick={() => togglePrincipleStatus(principleId, 'bewaard')}
                          emoji="⭐"
                          label="Bewaren"
                          activeStyle={{ background: 'rgba(92,79,207,0.08)', borderColor: 'rgba(92,79,207,0.35)', color: 'var(--color-primary)' }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows (desktop) */}
          <div className="hidden md:flex items-center justify-between mt-4">
            <button
              onClick={goPrev}
              disabled={safeIndex === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-alt"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Vorige
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all"
                  style={{
                    width: i === safeIndex ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === safeIndex ? 'var(--color-primary)' : 'var(--color-border)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={safeIndex >= totalCards - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-bg-alt"
            >
              Volgende
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile dot indicators + swipe hint */}
          <div className="md:hidden mt-4">
            <div className="flex items-center justify-center gap-1.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === safeIndex ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === safeIndex ? 'var(--color-primary)' : 'var(--color-border)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                />
              ))}
            </div>
            <p className="text-center text-xs text-text-muted mt-2">
              Swipe om te navigeren
            </p>
          </div>
        </div>

        {/* Exercises */}
        {principle.exercises && principle.exercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 mb-6"
          >
            <MultipleChoiceExercise
              principle={principle}
              exercise={principle.exercises[0]}
              onComplete={(newlyUnlocked) => {
                if (newlyUnlocked?.length > 0) {
                  setUnlockedPrinciples(prev => [...prev, ...newlyUnlocked]);
                }
              }}
            />
          </motion.div>
        )}

        {principle.creativePrompt && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mb-6"
          >
            <CreativeExercise
              principle={principle}
              onComplete={(newlyUnlocked) => {
                if (newlyUnlocked?.length > 0) {
                  setUnlockedPrinciples(prev => [...prev, ...newlyUnlocked]);
                }
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const DifficultyBadge = ({ difficulty }) => {
  const config = {
    1: { label: 'Beginner',  bg: 'rgba(5,150,105,0.08)',   text: 'var(--color-success)',      border: 'rgba(5,150,105,0.25)' },
    2: { label: 'Gemiddeld', bg: 'rgba(201,136,15,0.08)',  text: 'var(--color-accent-dark)',  border: 'rgba(201,136,15,0.3)' },
    3: { label: 'Gevorderd', bg: 'rgba(220,38,38,0.08)',   text: 'var(--color-danger)',       border: 'rgba(220,38,38,0.25)' },
  };
  const c = config[difficulty] || config[1];
  return (
    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full"
      style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
      {c.label}
    </span>
  );
};

const MasteryBadge = ({ progress }) => {
  const percentage = progress.masteryPercentage || 0;

  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <div className="text-xs text-text-muted">Beheersing</div>
        <div className="text-sm font-bold text-primary">{percentage}%</div>
      </div>
      <div className="w-24 h-2 bg-bg-alt rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>
      {percentage === 100 && (
        <svg className="w-5 h-5" style={{ color: 'var(--color-success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
  );
};

const getDomainName = (domain) => {
  const names = {
    business:  'Business & Werk',
    politics:  'Politiek & Maatschappij',
    science:   'Wetenschap & Technologie',
    history:   'Geschiedenis',
    daily:     'Dagelijks Leven',
  };
  return names[domain] || domain;
};

const StatusButton = ({ active, onClick, emoji, label, activeStyle }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all"
    style={active
      ? { ...activeStyle, boxShadow: 'var(--shadow-xs)' }
      : { borderColor: 'var(--color-border)', background: 'var(--color-bg-alt)', color: 'var(--color-text-muted)' }
    }
  >
    <span>{emoji}</span>
    <span>{label}</span>
    {active && (
      <svg className="w-3.5 h-3.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    )}
  </button>
);

export default PrinciplePage;
