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

    // Set initial learning style based on recommendation
    const recommended = getRecommendedLearningStyle();
    setLearningStyle(recommended);
  }, [principle, isUnlocked, navigate, getRecommendedLearningStyle]);

  useEffect(() => {
    // Mark as read when user scrolls through content
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
    // Scroll to exercises
    setTimeout(() => {
      document.getElementById('exercises')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleUnlock = (unlockedIds) => {
    setNewlyUnlockedPrinciples(unlockedIds);
  };

  return (
    <div className="min-h-screen bg-parchment parchment">
      {/* Header */}
      <header className="bg-parchment-dark border-b-2 border-sepia shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/home')}
              className="flex items-center gap-2 text-ink-light hover:text-ink transition-colors"
            >
              <span className="text-xl">←</span>
              <span>Terug</span>
            </button>
            <div className="flex items-center gap-4">
              <MasteryBadge progress={progress} />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Learning Style Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-center"
        >
          <div className="inline-flex rounded-lg border-2 border-gold bg-parchment-dark p-1 shadow-md">
            <button
              onClick={() => handleLearningStyleToggle('definition-first')}
              className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                learningStyle === 'definition-first'
                  ? 'bg-gold text-ink shadow-md'
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              <span>🎯</span>
              <span>Start met Definitie</span>
            </button>
            <button
              onClick={() => handleLearningStyleToggle('example-first')}
              className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                learningStyle === 'example-first'
                  ? 'bg-gold text-ink shadow-md'
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              <span>💡</span>
              <span>Start met Voorbeeld</span>
            </button>
          </div>
        </motion.div>

        {/* Principle Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="decorative-border bg-parchment-dark p-8 mb-8 scroll-reveal"
        >
          {/* Title */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-6xl">{principle.emoji}</div>
            <div className="flex-1">
              <h1 className="text-4xl font-serif text-ink mb-3">{principle.title}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="tag-pill">{principle.academicCategory}</span>
                <span className="tag-pill">{principle.skillCategory}</span>
                <span className="text-ink-light">
                  {'⭐'.repeat(principle.difficulty)}
                  {principle.difficulty === 1 && ' Beginner'}
                  {principle.difficulty === 2 && ' Gemiddeld'}
                  {principle.difficulty === 3 && ' Gevorderd'}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-sepia my-6"></div>

          {/* Content based on learning style */}
          {learningStyle === 'definition-first' ? (
            <DefinitionFirstContent principle={principle} />
          ) : (
            <ExampleFirstContent principle={principle} />
          )}

          <div className="h-px bg-sepia my-6"></div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-ink-light mb-3">🏷️ Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {principle.tags.map(tag => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Understand Button */}
          {!showExercises && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUnderstand}
              className="btn-primary w-full text-lg py-4"
            >
              ✅ Ik begrijp het - Ga naar oefening
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
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Multiple Choice Exercise */}
              {principle.exercises?.[0] && (
                <MultipleChoiceExercise
                  principle={principle}
                  exercise={principle.exercises[0]}
                  onComplete={handleUnlock}
                />
              )}

              {/* Creative Exercise */}
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

const DefinitionFirstContent = ({ principle }) => {
  return (
    <div className="space-y-6">
      {/* Definition */}
      <div>
        <h2 className="text-2xl font-serif text-ink mb-3 flex items-center gap-2">
          <span>📍</span>
          Definitie
        </h2>
        <p className="text-lg text-ink leading-relaxed">{principle.definition}</p>
      </div>

      {/* Abstract Example */}
      {principle.abstractExample && (
        <div className="bg-gold/10 border-l-4 border-gold p-4 rounded">
          <h3 className="font-semibold text-ink mb-2">Abstract Voorbeeld:</h3>
          <p className="text-ink-light">{principle.abstractExample}</p>
        </div>
      )}

      {/* Concrete Examples */}
      <div>
        <h2 className="text-2xl font-serif text-ink mb-4 flex items-center gap-2">
          <span>💡</span>
          Concrete Voorbeelden
        </h2>
        <div className="space-y-4">
          {principle.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="font-serif text-lg text-ink mb-2 flex items-center gap-2">
                <span>{example.icon}</span>
                {getDomainName(example.domain)}
              </h3>
              <p className="text-ink-light">{example.text}</p>
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
      {/* Start with Examples */}
      <div>
        <h2 className="text-2xl font-serif text-ink mb-4 flex items-center gap-2">
          <span>💡</span>
          Voorbeelden
        </h2>
        <div className="space-y-4">
          {principle.examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <h3 className="font-serif text-lg text-ink mb-2 flex items-center gap-2">
                <span>{example.icon}</span>
                {getDomainName(example.domain)}
              </h3>
              <p className="text-ink-light">{example.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Then Definition */}
      <div className="bg-gold/10 border-2 border-gold p-6 rounded-lg">
        <h2 className="text-2xl font-serif text-ink mb-3 flex items-center gap-2">
          <span>📍</span>
          Algemene Definitie
        </h2>
        <p className="text-lg text-ink leading-relaxed mb-4">{principle.definition}</p>
        {principle.abstractExample && (
          <>
            <h3 className="font-semibold text-ink mb-2">Abstract:</h3>
            <p className="text-ink-light">{principle.abstractExample}</p>
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
        <div className="text-sm text-ink-light">Beheersing</div>
        <div className="text-lg font-bold text-gold">{percentage}%</div>
      </div>
      <div className="w-24 h-2 bg-parchment-dark rounded-full overflow-hidden border border-sepia">
        <div
          className="h-full bg-gold transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-3xl">
        {percentage === 0 && '📜'}
        {percentage > 0 && percentage < 100 && '📖'}
        {percentage === 100 && '✅'}
      </div>
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
