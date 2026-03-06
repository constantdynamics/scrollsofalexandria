import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { allPrinciples } from '../data/principles';

// Genereer 5 dagelijkse uitdagingsvragen op basis van datum-seed
// Elke dag andere vragen door datumhash
const getDagelijkseSeed = () => {
  const today = new Date().toDateString();
  return today.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
};

const seededRandom = (seed, index) => {
  const x = Math.sin(seed + index * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const generateDailyQuestions = (seed) => {
  const shuffled = [...allPrinciples].sort((a, b) => seededRandom(seed, a.id.length) - seededRandom(seed, b.id.length));
  const selected = shuffled.slice(0, 5);

  return selected.map((principle, idx) => {
    const questionType = Math.floor(seededRandom(seed, idx * 7) * 3); // 0=definitie, 1=categorie, 2=emoji

    // Genereer 3 foute antwoorden
    const others = allPrinciples.filter(p => p.id !== principle.id);
    const wrongCandidates = others.sort((a, b) => seededRandom(seed, idx * 13 + a.id.length) - seededRandom(seed, idx * 13 + b.id.length)).slice(0, 3);

    if (questionType === 0) {
      // Definitie → raad de titel
      const options = [principle.title, ...wrongCandidates.map(p => p.title)].sort(() => seededRandom(seed, idx * 17) - 0.5);
      return {
        type: 'definitie',
        question: `Welk principe past bij deze definitie?`,
        excerpt: (principle.definition || '').substring(0, 180) + '...',
        correctAnswer: principle.title,
        options,
        principleId: principle.id,
        emoji: principle.emoji,
      };
    } else if (questionType === 1) {
      // Titel → raad de categorie
      const options = [principle.academicCategory, ...wrongCandidates.map(p => p.academicCategory)].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4).sort(() => seededRandom(seed, idx * 19) - 0.5);
      return {
        type: 'categorie',
        question: `In welke categorie hoort "${principle.title}"?`,
        excerpt: null,
        correctAnswer: principle.academicCategory,
        options: options.length >= 2 ? options : [principle.academicCategory, ...wrongCandidates.slice(0, 3).map(p => p.academicCategory)].slice(0, 4),
        principleId: principle.id,
        emoji: principle.emoji,
      };
    } else {
      // Emoji + categorie → raad de titel
      const options = [principle.title, ...wrongCandidates.map(p => p.title)].sort(() => seededRandom(seed, idx * 23) - 0.5);
      return {
        type: 'emoji',
        question: `Welk principe hoort bij ${principle.emoji} (${principle.academicCategory})?`,
        excerpt: null,
        correctAnswer: principle.title,
        options,
        principleId: principle.id,
        emoji: principle.emoji,
      };
    }
  });
};

// Haal huidig dagslabel op
const getTodayLabel = () => new Date().toDateString();

const DagelijkseUitdagingPage = () => {
  const navigate = useNavigate();
  const { userData, trackUitdagingVoltooid, trackGamePlayed } = useUser();

  const seed = useMemo(() => getDagelijkseSeed(), []);
  const questions = useMemo(() => generateDailyQuestions(seed), [seed]);

  const todayLabel = getTodayLabel();
  const alVoltooid = userData?.dagelijkseUitdaging?.datum === todayLabel && userData?.dagelijkseUitdaging?.voltooid;
  const alGescoord = userData?.dagelijkseUitdaging?.datum === todayLabel ? (userData?.dagelijkseUitdaging?.score || 0) : null;

  const [fase, setFase] = useState(alVoltooid ? 'klaar' : 'intro'); // 'intro' | 'quiz' | 'klaar'
  const [currentQ, setCurrentQ] = useState(0);
  const [antwoorden, setAntwoorden] = useState([]); // { correct: bool, chosen: string }
  const [gekozen, setGekozen] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const { updatePreference } = useUser();

  // Sla resultaat op in userData via updatePreference (hacky maar zonder backend)
  const slaResultaatOp = (score) => {
    // We gebruiken userData direct via context setUserData
    // Maar we hebben geen directe setUserData — we simuleren via een custom event
    // In plaats daarvan updaten we via localStorage direct en reload context
    const stored = localStorage.getItem('scrolls_of_wisdom_user_data');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        data.dagelijkseUitdaging = { datum: todayLabel, voltooid: true, score };
        data.uitdagingenVoltooid = (data.uitdagingenVoltooid || 0) + 1;
        data.points = (data.points || 0) + score * 5; // 5 punten per goede vraag
        localStorage.setItem('scrolls_of_wisdom_user_data', JSON.stringify(data));
      } catch {
        // ignore
      }
    }
    trackUitdagingVoltooid();
    trackGamePlayed('dagelijkseUitdaging');
  };

  const handleKies = (optie) => {
    if (gekozen !== null || showFeedback) return;
    setGekozen(optie);
    setShowFeedback(true);
    const correct = optie === questions[currentQ].correctAnswer;
    setAntwoorden(prev => [...prev, { correct, chosen: optie }]);
  };

  const handleVolgende = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setGekozen(null);
      setShowFeedback(false);
    } else {
      // Klaar!
      const score = antwoorden.filter(a => a.correct).length + (gekozen === questions[currentQ].correctAnswer ? 1 : 0);
      slaResultaatOp(score);
      setFase('klaar');
    }
  };

  const vraag = questions[currentQ];
  const score = antwoorden.filter(a => a.correct).length;

  // Countdown naar volgende uitdaging (middernacht)
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const morgen = new Date(now);
      morgen.setDate(morgen.getDate() + 1);
      morgen.setHours(0, 0, 0, 0);
      const diff = morgen - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCountdown(`${h}u ${m}m ${s}s`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border"
        style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
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
              🎯 Dagelijkse uitdaging
            </h1>
            <p className="text-xs text-text-muted">Vernieuwt elke dag om middernacht</p>
          </div>
          {fase === 'quiz' && (
            <div className="text-sm font-bold text-primary">
              {currentQ + 1}/{questions.length}
            </div>
          )}
        </div>
        {/* Voortgangsbalk tijdens quiz */}
        {fase === 'quiz' && (
          <div className="h-1 bg-bg-alt">
            <motion.div
              className="h-full"
              style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              animate={{ width: `${((currentQ + (showFeedback ? 1 : 0)) / questions.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">

          {/* Intro */}
          {fase === 'intro' && !alVoltooid && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center text-5xl shadow-lg"
                style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)', boxShadow: '0 8px 32px rgba(92,79,207,0.3)' }}>
                🎯
              </div>
              <h2 className="text-2xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Jouw dagelijkse uitdaging
              </h2>
              <p className="text-text-secondary mb-2 leading-relaxed">
                5 vragen over principes uit de Scrolls of Alexandria.
                Elke dag een nieuwe set — kom elke dag terug!
              </p>
              <div className="flex items-center justify-center gap-4 mb-8 text-sm text-text-muted">
                <span>📚 5 vragen</span>
                <span>·</span>
                <span>⚡ Tot 25 punten</span>
                <span>·</span>
                <span>🔄 Dagelijks vernieuwd</span>
              </div>

              {/* Datum indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface mb-8 text-sm text-text-muted">
                <span>📅</span>
                <span>{new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
              </div>

              <button
                onClick={() => setFase('quiz')}
                className="btn-primary px-8 py-3 text-base"
              >
                Begin uitdaging
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </motion.div>
          )}

          {/* Quiz */}
          {fase === 'quiz' && (
            <motion.div
              key={`vraag-${currentQ}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Score tracker */}
              <div className="flex items-center justify-center gap-2 mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all"
                    style={{
                      borderColor: i < antwoorden.length
                        ? antwoorden[i].correct ? 'var(--color-success)' : 'var(--color-danger)'
                        : i === currentQ ? 'var(--color-primary)' : 'var(--color-border)',
                      background: i < antwoorden.length
                        ? antwoorden[i].correct ? 'rgba(5,150,105,0.12)' : 'rgba(239,68,68,0.12)'
                        : i === currentQ ? 'var(--color-primary-50)' : 'var(--color-surface)',
                      color: i < antwoorden.length
                        ? antwoorden[i].correct ? 'var(--color-success)' : 'var(--color-danger)'
                        : i === currentQ ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    }}
                  >
                    {i < antwoorden.length ? (antwoorden[i].correct ? '✓' : '✗') : i + 1}
                  </div>
                ))}
              </div>

              {/* Vraag card */}
              <div className="card mb-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-primary-50"
                    style={{ border: '1px solid var(--color-primary-100)' }}>
                    {vraag.emoji}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wide mb-0.5">
                      Vraag {currentQ + 1} van {questions.length}
                    </div>
                    <div className="text-base font-bold text-text" style={{ fontFamily: 'var(--font-display)' }}>
                      {vraag.question}
                    </div>
                  </div>
                </div>

                {vraag.excerpt && (
                  <div className="p-4 rounded-xl mb-4 text-sm text-text-secondary leading-relaxed italic"
                    style={{ background: 'var(--color-bg-alt)', borderLeft: '3px solid var(--color-primary-100)' }}>
                    &ldquo;{vraag.excerpt}&rdquo;
                  </div>
                )}
              </div>

              {/* Antwoord-opties */}
              <div className="space-y-2.5 mb-6">
                {vraag.options.map((optie, i) => {
                  const isGekozen = gekozen === optie;
                  const isCorrect = optie === vraag.correctAnswer;
                  let stijl = {};

                  if (showFeedback) {
                    if (isCorrect) {
                      stijl = { borderColor: 'var(--color-success)', background: 'rgba(5,150,105,0.08)' };
                    } else if (isGekozen && !isCorrect) {
                      stijl = { borderColor: 'var(--color-danger)', background: 'rgba(239,68,68,0.08)' };
                    }
                  }

                  return (
                    <motion.button
                      key={`${optie}-${i}`}
                      whileHover={!showFeedback ? { x: 4 } : {}}
                      whileTap={!showFeedback ? { scale: 0.98 } : {}}
                      onClick={() => handleKies(optie)}
                      disabled={showFeedback}
                      className="w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all font-medium text-sm"
                      style={{
                        borderColor: showFeedback ? stijl.borderColor || 'var(--color-border)' : isGekozen ? 'var(--color-primary)' : 'var(--color-border)',
                        background: showFeedback ? stijl.background || 'var(--color-surface)' : isGekozen ? 'var(--color-primary-50)' : 'var(--color-surface)',
                        cursor: showFeedback ? 'default' : 'pointer',
                        color: 'var(--color-text)',
                        ...stijl,
                      }}
                    >
                      <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                        style={{
                          background: showFeedback && isCorrect ? 'var(--color-success)' : showFeedback && isGekozen && !isCorrect ? 'var(--color-danger)' : 'var(--color-bg-alt)',
                          color: showFeedback && (isCorrect || (isGekozen && !isCorrect)) ? 'white' : 'var(--color-text-muted)',
                        }}>
                        {showFeedback && isCorrect ? '✓' : showFeedback && isGekozen && !isCorrect ? '✗' : String.fromCharCode(65 + i)}
                      </span>
                      <span className="flex-1">{optie}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Feedback + volgende */}
              <AnimatePresence>
                {showFeedback && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row items-center gap-3"
                  >
                    <div className="flex-1 text-sm font-medium"
                      style={{ color: gekozen === vraag.correctAnswer ? 'var(--color-success)' : 'var(--color-danger)' }}>
                      {gekozen === vraag.correctAnswer
                        ? '✓ Correct! Goed gedaan.'
                        : `✗ Het juiste antwoord was: ${vraag.correctAnswer}`}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/principle/${vraag.principleId}`)}
                        className="px-3 py-2 rounded-lg text-xs font-medium border border-border bg-surface text-text-secondary hover:text-text hover:border-primary/40 transition-all"
                      >
                        Bekijk principe
                      </button>
                      <button
                        onClick={handleVolgende}
                        className="btn-primary px-5 py-2 text-sm"
                      >
                        {currentQ < questions.length - 1 ? 'Volgende →' : 'Resultaat →'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Klaar scherm */}
          {fase === 'klaar' && (
            <motion.div
              key="klaar"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {/* Confetti-achtige score display */}
              {(() => {
                const eindScore = alVoltooid ? alGescoord : antwoorden.filter(a => a.correct).length;
                const perfect = eindScore === questions.length;
                const goed = eindScore >= 3;

                return (
                  <>
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-28 h-28 mx-auto mb-6 rounded-3xl flex items-center justify-center text-6xl shadow-xl"
                      style={{
                        background: perfect ? 'linear-gradient(140deg, #f59e0b 0%, #ef4444 100%)' : goed ? 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)' : 'linear-gradient(140deg, #6b7280 0%, #9ca3af 100%)',
                        boxShadow: perfect ? '0 8px 40px rgba(245,158,11,0.4)' : goed ? '0 8px 40px rgba(92,79,207,0.3)' : 'none',
                      }}
                    >
                      {perfect ? '🌟' : goed ? '🎉' : '📖'}
                    </motion.div>

                    <h2 className="text-3xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {eindScore}/{questions.length}
                    </h2>
                    <p className="text-lg text-text-secondary mb-1">
                      {perfect ? 'Perfecte score! Uitstekend!' : goed ? 'Goed gedaan!' : 'Blijf oefenen!'}
                    </p>
                    <p className="text-sm text-text-muted mb-6">
                      {!alVoltooid && `+${eindScore * 5} punten verdiend`}
                      {alVoltooid && 'Je hebt de uitdaging van vandaag al voltooid'}
                    </p>

                    {/* Vraag-overzicht */}
                    {!alVoltooid && (
                      <div className="flex items-center justify-center gap-2 mb-8">
                        {questions.map((q, i) => (
                          <div
                            key={i}
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                            style={{
                              background: antwoorden[i]?.correct ? 'rgba(5,150,105,0.12)' : 'rgba(239,68,68,0.08)',
                              border: `2px solid ${antwoorden[i]?.correct ? 'var(--color-success)' : 'var(--color-danger)'}`,
                            }}
                          >
                            {q.emoji}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Countdown */}
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface mb-8 text-sm">
                      <span>🕐</span>
                      <span className="text-text-muted">Nieuwe uitdaging over</span>
                      <span className="font-bold text-text font-mono">{countdown}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => navigate('/home')}
                        className="px-6 py-3 rounded-xl border border-border bg-surface text-text font-medium hover:border-primary/40 hover:shadow-sm transition-all"
                      >
                        Terug naar home
                      </button>
                      <button
                        onClick={() => navigate('/prestaties')}
                        className="btn-primary px-6 py-3"
                      >
                        🏆 Bekijk prestaties
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* Al voltooid (intro) */}
          {fase === 'intro' && alVoltooid && (
            <motion.div
              key="al-voltooid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center text-5xl shadow-lg"
                style={{ background: 'linear-gradient(140deg, var(--color-success) 0%, #34d399 100%)', boxShadow: '0 8px 32px rgba(5,150,105,0.3)' }}>
                ✅
              </div>
              <h2 className="text-2xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Uitdaging voltooid!
              </h2>
              <p className="text-text-secondary mb-2">
                Je hebt de uitdaging van vandaag al gedaan.
              </p>
              <p className="text-text-muted text-sm mb-6">
                Score: <span className="font-bold text-text">{alGescoord}/{questions.length}</span>
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-surface mb-8 text-sm">
                <span>🕐</span>
                <span className="text-text-muted">Nieuwe uitdaging over</span>
                <span className="font-bold text-text font-mono">{countdown}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => navigate('/home')}
                  className="px-6 py-3 rounded-xl border border-border bg-surface text-text font-medium hover:border-primary/40 transition-all"
                >
                  Terug naar home
                </button>
                <button
                  onClick={() => navigate('/prestaties')}
                  className="btn-primary px-6 py-3"
                >
                  🏆 Bekijk prestaties
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
};

export default DagelijkseUitdagingPage;
