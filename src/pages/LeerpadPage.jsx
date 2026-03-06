import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { allPrinciples, getPrincipleById, getCategories } from '../data/principles';

// Bereken een aanbevolen leerpad op basis van:
// 1. Welke principes al gelezen zijn
// 2. Welke principes prerequisites hebben die al gelezen zijn
// 3. Moeilijkheidsgraad (1 → 2 → 3)
const computeRecommendedPath = (userData) => {
  const readIds = new Set(
    Object.entries(userData?.principleProgress || {})
      .filter(([, p]) => p.activities?.read)
      .map(([id]) => id)
  );

  // Schets per principe: is het beschikbaar (alle prereqs gelezen)?
  const isAvailable = (p) => {
    if (readIds.has(p.id)) return false; // al gelezen
    const prereqs = p.prerequisites || p.relatedPrinciples || [];
    if (prereqs.length === 0) return true;
    // Beschikbaar als minstens 1 prereq gelezen is, of geen verplichte prereqs
    return true; // We tonen alles maar sorteren op gereedheid
  };

  const score = (p) => {
    const prereqs = p.prerequisites || p.relatedPrinciples || [];
    const readPrereqs = prereqs.filter(id => readIds.has(id)).length;
    const readRatio = prereqs.length > 0 ? readPrereqs / prereqs.length : 0.5;
    // Score: veel prereqs gelezen = hoog, lage moeilijkheid = hoger
    return readRatio * 10 + (4 - p.difficulty) * 3;
  };

  const unread = allPrinciples.filter(p => !readIds.has(p.id));
  unread.sort((a, b) => score(b) - score(a));

  return { readIds, recommended: unread.slice(0, 12), allUnread: unread };
};

// Cluster van bij elkaar horende principes (zelfde academicCategory)
const computeClusters = (userData) => {
  const readIds = new Set(
    Object.entries(userData?.principleProgress || {})
      .filter(([, p]) => p.activities?.read)
      .map(([id]) => id)
  );

  const cats = getCategories('academic');
  return cats.map(cat => {
    const principles = allPrinciples.filter(p => p.academicCategory === cat);
    const read = principles.filter(p => readIds.has(p.id));
    const unread = principles.filter(p => !readIds.has(p.id));
    return {
      category: cat,
      total: principles.length,
      readCount: read.length,
      percentage: principles.length > 0 ? Math.round((read.length / principles.length) * 100) : 0,
      nextUp: unread.slice(0, 3),
    };
  }).sort((a, b) => {
    // Bijna-klaar categorieën bovenaan
    const scoreA = a.readCount > 0 ? a.percentage : -10;
    const scoreB = b.readCount > 0 ? b.percentage : -10;
    return scoreB - scoreA;
  });
};

const LeerpadPage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();
  const [view, setView] = useState('aanbevolen'); // 'aanbevolen' | 'clusters'

  const { readIds, recommended } = useMemo(() => computeRecommendedPath(userData), [userData]);
  const clusters = useMemo(() => computeClusters(userData), [userData]);

  const totaalGelezen = readIds.size;
  const totaal = allPrinciples.length;
  const percentage = Math.round((totaalGelezen / totaal) * 100);

  // Bereken "volgende stap" — beste aanbeveling
  const volgendeStap = recommended[0];

  const difficultyLabel = { 1: 'Beginner', 2: 'Gemiddeld', 3: 'Expert' };
  const difficultyColor = {
    1: 'text-success border-success/20 bg-success/10',
    2: 'text-warning border-warning/20 bg-warning/10',
    3: 'text-danger border-danger/20 bg-danger/10',
  };

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
              🗺️ Leerpad
            </h1>
            <p className="text-xs text-text-muted">{totaalGelezen}/{totaal} principes gelezen</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">

        {/* Voortgang */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl border border-border p-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-surface) 60%, rgba(201,136,15,0.05) 100%)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)', boxShadow: '0 4px 12px rgba(92,79,207,0.25)' }}>
              🗺️
            </div>
            <div className="flex-1">
              <div className="text-lg font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {totaalGelezen === 0 ? 'Begin je reis' : totaalGelezen === totaal ? 'Reis voltooid!' : 'Op weg naar wijsheid'}
              </div>
              <p className="text-sm text-text-muted">{percentage}% van de bibliotheek verkend</p>
            </div>
            <div className="text-2xl font-bold text-primary">{percentage}%</div>
          </div>
          <div className="w-full h-3 bg-bg-alt rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        {/* Volgende stap highlight */}
        {volgendeStap && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-text-secondary">✨ Aanbevolen volgende stap</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <motion.div
              whileHover={{ y: -2, boxShadow: 'var(--shadow-lg)' }}
              onClick={() => navigate(`/principle/${volgendeStap.id}`)}
              className="cursor-pointer rounded-2xl border p-5 flex items-center gap-4"
              style={{
                background: 'linear-gradient(135deg, rgba(92,79,207,0.07) 0%, var(--color-surface) 100%)',
                borderColor: 'rgba(92,79,207,0.25)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'box-shadow 0.25s ease, transform 0.2s ease',
              }}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: 'var(--color-primary-50)', border: '1px solid var(--color-primary-100)' }}>
                {volgendeStap.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-bold text-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                  {volgendeStap.title}
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="tag-pill text-xs">{volgendeStap.academicCategory}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${difficultyColor[volgendeStap.difficulty]}`}>
                    {difficultyLabel[volgendeStap.difficulty]}
                  </span>
                </div>
                <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                  {(volgendeStap.definition || '').substring(0, 120)}...
                </p>
              </div>
              <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
        )}

        {/* View toggle */}
        <div className="mb-5 inline-flex rounded-xl bg-bg-alt p-1 border border-border">
          {[
            { key: 'aanbevolen', label: '⚡ Aanbevolen', title: 'Beste volgende principes' },
            { key: 'clusters', label: '🧩 Categorieën', title: 'Voortgang per categorie' },
          ].map(v => (
            <button
              key={v.key}
              onClick={() => setView(v.key)}
              title={v.title}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                view === v.key
                  ? 'bg-surface text-text shadow-sm border border-border'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Aanbevolen view */}
        {view === 'aanbevolen' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-text-secondary">Aanbevolen volgorde</span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-text-muted">{recommended.length} principes</span>
            </div>
            <div className="space-y-2">
              {recommended.map((p, i) => {
                const prereqs = p.prerequisites || p.relatedPrinciples || [];
                const readPrereqs = prereqs.filter(id => readIds.has(id));

                return (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    whileHover={{ x: 4 }}
                    onClick={() => navigate(`/principle/${p.id}`)}
                    className="cursor-pointer flex items-center gap-3 p-3.5 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-sm transition-all"
                  >
                    {/* Nummer */}
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                      style={{
                        background: i === 0 ? 'linear-gradient(140deg, var(--color-primary), var(--color-accent))' : 'var(--color-bg-alt)',
                        color: i === 0 ? 'white' : 'var(--color-text-muted)',
                      }}>
                      {i + 1}
                    </div>

                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl bg-primary-50"
                      style={{ border: '1px solid var(--color-primary-100)' }}>
                      {p.emoji}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-text truncate">{p.title}</div>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="text-xs text-text-muted">{p.academicCategory}</span>
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full border ${difficultyColor[p.difficulty]}`}>
                          {difficultyLabel[p.difficulty]}
                        </span>
                        {readPrereqs.length > 0 && (
                          <span className="text-xs text-primary font-medium">
                            {readPrereqs.length} prereq{readPrereqs.length !== 1 ? 's' : ''} ✓
                          </span>
                        )}
                      </div>
                    </div>

                    <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Clusters view */}
        {view === 'clusters' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="space-y-4">
              {clusters.map((cluster, i) => (
                <motion.div
                  key={cluster.category}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-text text-sm">{cluster.category}</h3>
                      <span className="text-xs text-text-muted bg-bg-alt px-2 py-0.5 rounded-full border border-border">
                        {cluster.readCount}/{cluster.total}
                      </span>
                    </div>
                    <span className="text-sm font-bold"
                      style={{ color: cluster.percentage >= 100 ? 'var(--color-success)' : cluster.percentage >= 50 ? 'var(--color-accent)' : 'var(--color-text-muted)' }}>
                      {cluster.percentage}%
                    </span>
                  </div>

                  {/* Voortgangsbalk */}
                  <div className="w-full h-2 bg-bg-alt rounded-full overflow-hidden mb-3">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: cluster.percentage >= 100
                          ? 'linear-gradient(90deg, var(--color-success), #34d399)'
                          : cluster.percentage >= 50
                          ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))'
                          : 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${cluster.percentage}%` }}
                      transition={{ duration: 0.9, delay: i * 0.06, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Volgende principes in categorie */}
                  {cluster.nextUp.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {cluster.nextUp.map(p => (
                        <button
                          key={p.id}
                          onClick={() => navigate(`/principle/${p.id}`)}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border border-border bg-bg hover:border-primary/40 hover:bg-primary-50 transition-all"
                        >
                          <span>{p.emoji}</span>
                          <span className="text-text truncate max-w-[120px]">{p.title}</span>
                        </button>
                      ))}
                      {cluster.total - cluster.readCount > cluster.nextUp.length && (
                        <span className="flex items-center px-2.5 py-1.5 text-xs text-text-muted">
                          +{cluster.total - cluster.readCount - cluster.nextUp.length} meer
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-success font-semibold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      Categorie voltooid!
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LeerpadPage;
