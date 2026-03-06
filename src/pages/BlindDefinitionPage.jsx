import { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allPrinciples } from '../data/principles';
import { useUser } from '../context/UserContext';

const NUM_OPTIONS = 4;

function pickRandom(arr, n, exclude = []) {
  const pool = arr.filter(x => !exclude.includes(x));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
}

function buildQuestion(principles) {
  const eligible = principles.filter(p => p.examples && p.examples.length >= 2);
  if (eligible.length < NUM_OPTIONS) return null;

  const [correct] = pickRandom(eligible, 1);
  const distractors = pickRandom(eligible, NUM_OPTIONS - 1, [correct]);
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);

  return { correct, options };
}

const getDomainName = (domain) => {
  const names = {
    business: 'Business & Werk',
    politics: 'Politiek & Maatschappij',
    science: 'Wetenschap & Technologie',
    history: 'Geschiedenis',
    daily: 'Dagelijks Leven',
  };
  return names[domain] || domain;
};

const BlindDefinitionPage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();

  const [question, setQuestion] = useState(() => buildQuestion(allPrinciples));
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showStreak, setShowStreak] = useState(false);

  const isAnswered = selected !== null;
  const isCorrect = selected?.id === question?.correct?.id;

  const nextQuestion = useCallback(() => {
    setQuestion(buildQuestion(allPrinciples));
    setSelected(null);
  }, []);

  const handleSelect = (option) => {
    if (isAnswered) return;
    setSelected(option);
    const correct = option.id === question.correct.id;
    setScore(s => ({ correct: s.correct + (correct ? 1 : 0), total: s.total + 1 }));
    if (correct) {
      setShowStreak(true);
      setTimeout(() => setShowStreak(false), 1200);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-text-muted">Onvoldoende principes beschikbaar.</p>
      </div>
    );
  }

  const { correct, options } = question;
  const examples = correct.examples.slice(0, 3);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Terug
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface text-sm font-semibold">
              <span className="text-success">✓ {score.correct}</span>
              <span className="text-text-muted">/</span>
              <span className="text-text">{score.total}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-50 text-primary text-sm font-semibold mb-4">
            <span>🎭</span>
            <span>Blinde Definitie</span>
          </div>
          <h1 className="text-2xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Welk principe is dit?
          </h1>
          <p className="text-sm text-text-muted">
            Herken het principe aan de hand van de voorbeelden hieronder.
          </p>
        </motion.div>

        {/* Examples */}
        <AnimatePresence mode="wait">
          <motion.div
            key={correct.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mb-8"
          >
            <div className="decorative-border bg-surface p-6 space-y-4" style={{ boxShadow: 'var(--shadow-md)' }}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,136,15,0.1)', border: '1px solid rgba(201,136,15,0.2)' }}>
                  <span className="text-sm">💡</span>
                </div>
                <h2 className="text-base font-bold text-text" style={{ fontFamily: 'var(--font-display)' }}>
                  Voorbeelden
                </h2>
              </div>

              {examples.map((example, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base">{example.icon}</span>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                      {getDomainName(example.domain)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{example.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          {options.map((option, i) => {
            const isThis = selected?.id === option.id;
            const isCorrectOption = option.id === correct.id;
            let style = {};
            let extraClass = '';

            if (isAnswered) {
              if (isCorrectOption) {
                style = { background: 'rgba(5,150,105,0.08)', borderColor: 'rgba(5,150,105,0.5)', color: 'var(--color-success)' };
              } else if (isThis) {
                style = { background: 'rgba(220,38,38,0.08)', borderColor: 'rgba(220,38,38,0.4)', color: 'var(--color-danger)' };
              } else {
                extraClass = 'opacity-50';
              }
            }

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleSelect(option)}
                disabled={isAnswered}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${extraClass} ${!isAnswered ? 'hover:border-primary/40 hover:shadow-sm cursor-pointer' : 'cursor-default'}`}
                style={{
                  borderColor: 'var(--color-border)',
                  background: 'var(--color-surface)',
                  ...style,
                }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0"
                  style={{ border: '1px solid var(--color-primary-100)' }}>
                  <span className="text-xl">{option.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-text">{option.title}</div>
                  <div className="text-xs text-text-muted mt-0.5">{option.academicCategory}</div>
                </div>
                {isAnswered && isCorrectOption && (
                  <svg className="w-5 h-5 text-success flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {isAnswered && isThis && !isCorrectOption && (
                  <svg className="w-5 h-5 text-danger flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Feedback + Next */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-3"
            >
              {/* Feedback banner */}
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: isCorrect ? 'rgba(5,150,105,0.08)' : 'rgba(220,38,38,0.08)',
                  border: `1px solid ${isCorrect ? 'rgba(5,150,105,0.3)' : 'rgba(220,38,38,0.25)'}`,
                }}
              >
                <span className="text-xl flex-shrink-0">{isCorrect ? '🎉' : '🤔'}</span>
                <div className="flex-1">
                  <div className="font-semibold text-text text-sm mb-1">
                    {isCorrect ? 'Goed geraden!' : `Het was: ${correct.title}`}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {correct.definition?.substring(0, 140)}{correct.definition?.length > 140 ? '...' : ''}
                  </p>
                  <button
                    onClick={() => navigate(`/principle/${correct.id}`)}
                    className="mt-2 text-xs font-semibold text-primary hover:text-primary-dark flex items-center gap-1 transition-colors"
                  >
                    Verken dit principe
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={nextQuestion}
                className="btn-primary w-full justify-center text-base py-4"
              >
                Volgende vraag
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlindDefinitionPage;
