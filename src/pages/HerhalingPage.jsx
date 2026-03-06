import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allPrinciples } from '../data/principles';
import { useUser } from '../context/UserContext';

const HerhalingPage = () => {
  const navigate = useNavigate();
  const { userData, trackHerhalingSessie } = useUser();

  useEffect(() => {
    trackHerhalingSessie?.();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sorteer: nooit bekeken eerst, daarna op lastVisited (oudste eerst)
  const deck = useMemo(() => {
    return [...allPrinciples]
      .map(p => {
        const prog = userData?.principleProgress?.[p.id];
        return { ...p, lastVisited: prog?.lastVisited || null, isRead: !!prog?.activities?.read };
      })
      .sort((a, b) => {
        if (!a.lastVisited && !b.lastVisited) return 0;
        if (!a.lastVisited) return -1;
        if (!b.lastVisited) return 1;
        return new Date(a.lastVisited) - new Date(b.lastVisited);
      });
  }, [userData]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState([]); // indices afgerond
  const [skipped, setSkipped] = useState([]); // 'nog studeren'
  const [direction, setDirection] = useState(1);
  const [sessionDone, setSessionDone] = useState(false);

  const SESSION_SIZE = Math.min(20, deck.length);
  const sessionDeck = useMemo(() => deck.slice(0, SESSION_SIZE), [deck]);

  const current = sessionDeck[index];

  const advance = (dir) => {
    setDirection(dir);
    setFlipped(false);
    setTimeout(() => {
      if (index + 1 >= sessionDeck.length) {
        setSessionDone(true);
      } else {
        setIndex(i => i + 1);
      }
    }, 150);
  };

  const handleOnthouden = () => {
    setDone(d => [...d, index]);
    advance(1);
  };

  const handleNogStuderen = () => {
    setSkipped(s => [...s, index]);
    advance(1);
  };

  const restart = () => {
    setIndex(0);
    setFlipped(false);
    setDone([]);
    setSkipped([]);
    setSessionDone(false);
    setDirection(1);
  };

  if (sessionDone) {
    return (
      <div className="min-h-screen bg-bg flex flex-col">
        <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
          <div className="max-w-2xl mx-auto px-4 py-3 flex items-center">
            <button onClick={() => navigate('/home')} className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group">
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Terug
            </button>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-sm"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-display)' }}>Sessie voltooid!</h2>
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success">{done.length}</div>
                <div className="text-xs text-text-muted">Onthouden</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">{skipped.length}</div>
                <div className="text-xs text-text-muted">Nog studeren</div>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-6">
              Je hebt {sessionDeck.length} principes herhaald. Kom morgen terug voor de volgende sessie!
            </p>
            <div className="flex flex-col gap-3">
              {skipped.length > 0 && (
                <button onClick={restart} className="btn-primary justify-center">
                  Herhaal de moeilijke ({skipped.length})
                </button>
              )}
              <button
                onClick={() => navigate('/home')}
                className="px-6 py-3 rounded-xl border border-border bg-surface text-text font-semibold text-sm hover:border-primary/40 transition-all"
              >
                Terug naar home
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const progress = ((index) / sessionDeck.length) * 100;

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Terug
          </button>
          <span className="text-sm font-semibold text-text-muted">{index + 1} / {sessionDeck.length}</span>
        </div>
        {/* Voortgangsbalk */}
        <div className="h-1 bg-bg-alt">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Titel */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-50 text-primary text-sm font-semibold mb-2">
            <span>⚡</span>
            <span>Snelherhalings-deck</span>
          </div>
          <p className="text-xs text-text-muted">Klik op de kaart om te onthullen</p>
        </div>

        {/* Flashcard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -direction * 60 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-md cursor-pointer"
            onClick={() => !flipped && setFlipped(true)}
          >
            <div
              className="decorative-border bg-surface relative overflow-hidden"
              style={{ boxShadow: 'var(--shadow-lg)', minHeight: 280 }}
            >
              <div className="hero-overlay" />
              <div className="p-8 relative">
                {/* Voorkant */}
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md"
                    style={{ background: 'linear-gradient(140deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)', border: '1px solid var(--color-primary-100)' }}
                  >
                    <span className="text-4xl">{current.emoji}</span>
                  </motion.div>

                  <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
                    <span className="tag-pill text-xs">{current.academicCategory}</span>
                    <span className="tag-pill text-xs">{current.skillCategory}</span>
                  </div>

                  {!flipped ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <div className="w-12 h-1 bg-border rounded-full mx-auto mb-2" />
                      <div className="w-20 h-1 bg-border rounded-full mx-auto mb-2" />
                      <div className="w-16 h-1 bg-border rounded-full mx-auto mb-6" />
                      <p className="text-sm text-text-muted">Tik om de naam te onthullen</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl font-bold text-text mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                        {current.title}
                      </h2>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {(current.definition || '').substring(0, 200)}{current.definition?.length > 200 ? '...' : ''}
                      </p>
                      {current.lastVisited && (
                        <p className="text-xs text-text-muted mt-4">
                          Laatst gezien: {new Date(current.lastVisited).toLocaleDateString('nl-NL')}
                        </p>
                      )}
                      {!current.lastVisited && (
                        <p className="text-xs text-primary mt-4 font-medium">✨ Nog nooit bekeken</p>
                      )}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Actieknoppen */}
        <AnimatePresence>
          {flipped && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3 mt-6 w-full max-w-md"
            >
              <button
                onClick={handleNogStuderen}
                className="flex-1 py-3.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2"
                style={{ borderColor: 'rgba(220,38,38,0.3)', background: 'rgba(220,38,38,0.06)', color: 'var(--color-danger)' }}
              >
                <span>🔄</span>
                Nog studeren
              </button>
              <button
                onClick={() => navigate(`/principle/${current.id}`)}
                className="px-4 py-3.5 rounded-xl border border-border bg-surface text-text-muted text-sm hover:border-primary/40 transition-all"
                title="Verken dit principe"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </button>
              <button
                onClick={handleOnthouden}
                className="flex-1 py-3.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2"
                style={{ background: 'rgba(5,150,105,0.10)', border: '1px solid rgba(5,150,105,0.35)', color: 'var(--color-success)' }}
              >
                <span>✓</span>
                Onthouden
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HerhalingPage;
