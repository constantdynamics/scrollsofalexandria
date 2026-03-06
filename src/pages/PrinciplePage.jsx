import { useState, useEffect } from 'react';
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

  const principle = getPrincipleById(principleId);
  const progress = getPrincipleProgress(principleId);

  useEffect(() => {
    if (!principle) {
      navigate('/home');
      return;
    }
    const recommended = getRecommendedLearningStyle();
    setLearningStyle(recommended);
  }, [principle, navigate, getRecommendedLearningStyle]);

  useEffect(() => {
    if (!hasMarkedAsRead && !progress.activities.read) {
      const handleScroll = () => {
        const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 50) {
          markPrincipleAsRead(principleId);
          setHasMarkedAsRead(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hasMarkedAsRead, progress, principleId, markPrincipleAsRead]);

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

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/home')}
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
        {/* Learning Style Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex rounded-xl bg-bg-alt p-1 border border-border shadow-xs">
            <button
              onClick={() => handleLearningStyleToggle('definition-first')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                learningStyle === 'definition-first'
                  ? 'bg-surface text-text shadow-sm border border-border'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span>🎯</span>
              <span>Definitie eerst</span>
            </button>
            <button
              onClick={() => handleLearningStyleToggle('example-first')}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                learningStyle === 'example-first'
                  ? 'bg-surface text-text shadow-sm border border-border'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              <span>💡</span>
              <span>Voorbeeld eerst</span>
            </button>
          </div>
        </motion.div>

        {/* Principle Content */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="decorative-border bg-surface mb-8 scroll-reveal relative overflow-hidden"
          style={{ boxShadow: 'var(--shadow-md)' }}
        >
          <div className="hero-overlay" />
          <div className="p-6 md:p-8 relative">
            {/* Title */}
            <div className="flex items-start gap-4 mb-6 pt-2">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                style={{
                  background: 'linear-gradient(140deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)',
                  border: '1px solid var(--color-primary-100)'
                }}
              >
                <span className="text-3xl md:text-4xl">{principle.emoji}</span>
              </motion.div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold text-text mb-2 leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  {principle.title}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="tag-pill">{principle.academicCategory}</span>
                  <span className="tag-pill">{principle.skillCategory}</span>
                  <DifficultyBadge difficulty={principle.difficulty} />
                </div>
              </div>
            </div>

            <div className="h-px bg-border my-6" />

            {learningStyle === 'definition-first' ? (
              <DefinitionFirstContent principle={principle} />
            ) : (
              <ExampleFirstContent principle={principle} />
            )}

            <div className="h-px bg-border my-6" />

            {/* Mark as read button */}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl p-4 flex items-center gap-3"
                style={{ background: 'var(--color-success-light)', border: '1px solid rgba(5,150,105,0.25)' }}
              >
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
              </motion.div>
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
        </motion.div>

        {/* Exercises */}
        {principle.exercises && principle.exercises.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6"
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

const DefinitionFirstContent = ({ principle }) => {
  return (
    <div className="space-y-6">
      {/* Definition */}
      <div>
        <h2 className="text-lg font-bold text-text mb-3 flex items-center gap-2.5" style={{ fontFamily: 'var(--font-display)' }}>
          <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center" style={{ border: '1px solid var(--color-primary-100)' }}>
            <span className="text-sm">📍</span>
          </div>
          Definitie
        </h2>
        <div className="prose-definition">
          <p className="text-base text-text-secondary leading-relaxed relative z-10">{principle.definition}</p>
        </div>
      </div>

      {principle.abstractExample && (
        <div className="rounded-xl p-4 border-l-4 ml-2"
          style={{
            borderLeftColor: 'var(--color-accent)',
            background: 'rgba(201,136,15,0.05)',
            borderTop: '1px solid rgba(201,136,15,0.15)',
            borderRight: '1px solid rgba(201,136,15,0.15)',
            borderBottom: '1px solid rgba(201,136,15,0.15)',
          }}>
          <h3 className="font-semibold text-text text-sm mb-1.5 flex items-center gap-2">
            <span>🔍</span>
            Abstract voorbeeld
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">{principle.abstractExample}</p>
        </div>
      )}

      {principle.examples && principle.examples.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2.5" style={{ fontFamily: 'var(--font-display)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,136,15,0.1)', border: '1px solid rgba(201,136,15,0.2)' }}>
              <span className="text-sm">💡</span>
            </div>
            Concrete voorbeelden
          </h2>
          <div className="space-y-3">
            {principle.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.09, ease: 'easeOut' }}
                className="rounded-xl p-4"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <h3 className="font-semibold text-text text-sm mb-2 flex items-center gap-2">
                  <span className="text-base">{example.icon}</span>
                  <span style={{ color: 'var(--color-text)' }}>{getDomainName(example.domain)}</span>
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{example.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ExampleFirstContent = ({ principle }) => {
  return (
    <div className="space-y-6">
      {principle.examples && principle.examples.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-text mb-4 flex items-center gap-2.5" style={{ fontFamily: 'var(--font-display)' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,136,15,0.1)', border: '1px solid rgba(201,136,15,0.2)' }}>
              <span className="text-sm">💡</span>
            </div>
            Voorbeelden
          </h2>
          <div className="space-y-3">
            {principle.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.09, ease: 'easeOut' }}
                className="rounded-xl p-4"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-xs)',
                }}
              >
                <h3 className="font-semibold text-text text-sm mb-2 flex items-center gap-2">
                  <span className="text-base">{example.icon}</span>
                  <span>{getDomainName(example.domain)}</span>
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{example.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-xl p-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary-50) 0%, rgba(201,136,15,0.05) 100%)',
          border: '1px solid var(--color-primary-100)',
        }}>
        <h2 className="text-lg font-bold text-text mb-3 flex items-center gap-2.5" style={{ fontFamily: 'var(--font-display)' }}>
          <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center" style={{ border: '1px solid var(--color-primary-100)' }}>
            <span className="text-sm">📍</span>
          </div>
          Algemene definitie
        </h2>
        <div className="prose-definition">
          <p className="text-base text-text-secondary leading-relaxed relative z-10">{principle.definition}</p>
        </div>
        {principle.abstractExample && (
          <div className="mt-4 pt-4 border-t border-primary-100">
            <h3 className="font-semibold text-text text-sm mb-1.5">Abstract</h3>
            <p className="text-sm text-text-secondary leading-relaxed">{principle.abstractExample}</p>
          </div>
        )}
      </div>
    </div>
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
