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
    isPrincipleUnlocked,
    userData
  } = useUser();

  const [learningStyle, setLearningStyle] = useState('');
  const [showExercises, setShowExercises] = useState(false);
  const [newlyUnlockedPrinciples, setNewlyUnlockedPrinciples] = useState([]);
  const [hasMarkedAsRead, setHasMarkedAsRead] = useState(false);

  const principle = getPrincipleById(principleId);
  const progress = getPrincipleProgress(principleId);
  const isUnlocked = isPrincipleUnlocked(principleId);

  useEffect(() => {
    if (!principle || !isUnlocked) {
      navigate('/home');
      return;
    }

    const recommended = getRecommendedLearningStyle();
    setLearningStyle(recommended);
  }, [principle, isUnlocked, navigate, getRecommendedLearningStyle]);

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

  if (!principle) {
    return null;
  }

  const handleLearningStyleToggle = (style) => {
    setLearningStyle(style);
    trackLearningStyleChoice(style);
  };

  const handleUnderstand = () => {
    if (!progress.activities.read) {
      markPrincipleAsRead(principleId);
    }
    setShowExercises(true);
    setTimeout(() => {
      document.getElementById('exercises')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleUnlock = (unlockedIds) => {
    setNewlyUnlockedPrinciples(unlockedIds);
  };

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-surface/95">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/home')}
              className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug
            </button>
            <MasteryBadge progress={progress} />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Learning Style Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex rounded-xl bg-bg-alt p-1 border border-border">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="decorative-border bg-surface p-6 md:p-8 mb-8 scroll-reveal"
        >
          {/* Title */}
          <div className="flex items-start gap-4 mb-6 pt-2">
            <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl">{principle.emoji}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-extrabold text-text mb-2 tracking-tight">{principle.title}</h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="tag-pill">{principle.academicCategory}</span>
                <span className="tag-pill">{principle.skillCategory}</span>
                <DifficultyBadge difficulty={principle.difficulty} />
              </div>
            </div>
          </div>

          <div className="h-px bg-border my-6"></div>

          {/* Content based on learning style */}
          {learningStyle === 'definition-first' ? (
            <DefinitionFirstContent principle={principle} />
          ) : (
            <ExampleFirstContent principle={principle} />
          )}

          <div className="h-px bg-border my-6"></div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {principle.tags.map(tag => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </div>

          {/* Understand Button */}
          {!showExercises && (
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              onClick={handleUnderstand}
              className="btn-primary w-full text-base py-3.5 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Ik begrijp het - Ga naar oefening
            </motion.button>
          )}
        </motion.div>

        {/* Exercises Section */}
        <AnimatePresence>
          {showExercises && (
            <motion.div
              id="exercises"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {principle.exercises?.[0] && (
                <MultipleChoiceExercise
                  principle={principle}
                  exercise={principle.exercises[0]}
                  onComplete={handleUnlock}
                />
              )}

              <CreativeExercise
                principle={principle}
                onComplete={handleUnlock}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Unlock Notifications */}
      <AnimatePresence>
        {newlyUnlockedPrinciples.map((id, index) => (
          <UnlockNotification
            key={id}
            principleId={id}
            delay={index * 1.5}
            onClose={() => setNewlyUnlockedPrinciples(prev => prev.filter(pid => pid !== id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const DifficultyBadge = ({ difficulty }) => {
  const config = {
    1: { label: 'Beginner', bg: 'bg-success/10', text: 'text-success', border: 'border-success/20' },
    2: { label: 'Gemiddeld', bg: 'bg-warning/10', text: 'text-warning', border: 'border-warning/20' },
    3: { label: 'Gevorderd', bg: 'bg-danger/10', text: 'text-danger', border: 'border-danger/20' },
  };
  const c = config[difficulty] || config[1];
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.bg} ${c.text} border ${c.border}`}>
      {c.label}
    </span>
  );
};

const DefinitionFirstContent = ({ principle }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center"><span className="text-base">📍</span></div>
          Definitie
        </h2>
        <p className="text-base text-text-secondary leading-relaxed">{principle.definition}</p>
      </div>

      {principle.abstractExample && (
        <div className="bg-primary-50 border-l-3 border-primary p-4 rounded-r-xl">
          <h3 className="font-semibold text-text text-sm mb-1">Abstract Voorbeeld</h3>
          <p className="text-sm text-text-secondary">{principle.abstractExample}</p>
        </div>
      )}

      <div>
        <h2 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"><span className="text-base">💡</span></div>
          Concrete Voorbeelden
        </h2>
        <div className="space-y-3">
          {principle.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="card p-4"
            >
              <h3 className="font-semibold text-text text-sm mb-1.5 flex items-center gap-2">
                <span>{example.icon}</span>
                {getDomainName(example.domain)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{example.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExampleFirstContent = ({ principle }) => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-text mb-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center"><span className="text-base">💡</span></div>
          Voorbeelden
        </h2>
        <div className="space-y-3">
          {principle.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="card p-4"
            >
              <h3 className="font-semibold text-text text-sm mb-1.5 flex items-center gap-2">
                <span>{example.icon}</span>
                {getDomainName(example.domain)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{example.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
        <h2 className="text-xl font-bold text-text mb-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center"><span className="text-base">📍</span></div>
          Algemene Definitie
        </h2>
        <p className="text-base text-text-secondary leading-relaxed mb-4">{principle.definition}</p>
        {principle.abstractExample && (
          <>
            <h3 className="font-semibold text-text text-sm mb-1">Abstract</h3>
            <p className="text-sm text-text-secondary">{principle.abstractExample}</p>
          </>
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
      <div className="w-20 h-1.5 bg-bg-alt rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {percentage === 100 && (
        <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      )}
    </div>
  );
};

const getDomainName = (domain) => {
  const names = {
    business: 'Business & Werk',
    politics: 'Politiek & Maatschappij',
    science: 'Wetenschap & Technologie',
    history: 'Geschiedenis',
    daily: 'Dagelijks Leven'
  };
  return names[domain] || domain;
};

export default PrinciplePage;
