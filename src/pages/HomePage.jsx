import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';

const HomePage = () => {
  const navigate = useNavigate();
  const { userData, getUserStats, getPrincipleStatuses } = useUser();
  const [organizationSystem, setOrganizationSystem] = useState(userData?.preferences?.organization || 'academic');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

  const stats = getUserStats();

  const featuredPrinciple = useMemo(() => {
    const today = new Date().toDateString();
    const dayHash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    if (allPrinciples.length === 0) return null;
    const index = dayHash % allPrinciples.length;
    return allPrinciples[index];
  }, []);

  // Recent bekeken principes (max 6, gesorteerd op lastVisited)
  const recentBekeken = useMemo(() => {
    if (!userData?.principleProgress) return [];
    return Object.entries(userData.principleProgress)
      .filter(([, p]) => p.lastVisited)
      .sort(([, a], [, b]) => (b.lastVisited || '').localeCompare(a.lastVisited || ''))
      .slice(0, 6)
      .map(([id]) => allPrinciples.find(p => p.id === id))
      .filter(Boolean);
  }, [userData]);

  // Bewaarde en herlezen principes
  const bewaardePrincipes = useMemo(() => {
    return allPrinciples.filter(p => getPrincipleStatuses(p.id).bewaard).slice(0, 6);
  }, [userData, getPrincipleStatuses]);

  const herlezenPrincipes = useMemo(() => {
    return allPrinciples.filter(p => getPrincipleStatuses(p.id).herlezen).slice(0, 4);
  }, [userData, getPrincipleStatuses]);

  const categories = useMemo(() => {
    return getCategories(organizationSystem);
  }, [organizationSystem]);

  const filteredPrinciples = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allPrinciples.filter(p => {
      const matchesDifficulty = difficultyFilter === 'all' || p.difficulty === difficultyFilter;
      if (!q) return matchesDifficulty;
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        (p.definition || '').toLowerCase().includes(q) ||
        (p.academicCategory || '').toLowerCase().includes(q) ||
        (p.skillCategory || '').toLowerCase().includes(q);
      return matchesDifficulty && matchesSearch;
    });
  }, [searchQuery, difficultyFilter]);

  const isSearchActive = searchQuery.trim() !== '' || difficultyFilter !== 'all';

  const getCategoryProgress = (category) => {
    const categoryPrinciples = getPrinciplesByCategory(category, organizationSystem);
    const completedCount = categoryPrinciples.filter(p => {
      const progress = userData?.principleProgress[p.id];
      return progress?.masteryPercentage === 100;
    }).length;

    return {
      total: categoryPrinciples.length,
      completed: completedCount,
      percentage: categoryPrinciples.length > 0 ? (completedCount / categoryPrinciples.length) * 100 : 0
    };
  };

  const handlePrincipleClick = (principleId) => {
    navigate(`/principle/${principleId}`);
  };

  const totaalGelezen = allPrinciples.filter(p => userData?.principleProgress?.[p.id]?.activities?.read).length;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-surface/95">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <span className="text-lg">📜</span>
              </div>
              <h1 className="text-xl font-bold text-text tracking-tight">Scrolls of Wisdom</h1>
            </div>
            <div className="flex items-center gap-2">
              {stats.currentStreak > 0 && (
                <div
                  className="flex items-center gap-1.5 bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20"
                  title={`Langste reeks: ${stats.longestStreak} dagen`}
                >
                  <span className="text-sm">🔥</span>
                  <span className="font-semibold text-accent-dark text-sm">{stats.currentStreak}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-primary-50 px-3 py-1.5 rounded-full border border-primary-100">
                <span className="text-sm">🏆</span>
                <span className="font-semibold text-primary text-sm">{stats.points}</span>
              </div>
              <button
                onClick={() => navigate('/register')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-colors"
                aria-label="Register"
                title="Register — alle principes"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-colors"
                aria-label="Instellingen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Zoekbalk */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={`Zoek tussen ${allPrinciples.length} principes...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-surface text-text placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                aria-label="Zoek een principe"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-bg-alt"
                  aria-label="Zoekopdracht wissen"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>
            <div className="flex gap-1.5 items-center">
              <span className="text-sm text-text-muted whitespace-nowrap mr-1">Niveau:</span>
              {[
                { label: 'Alle', value: 'all' },
                { label: 'Beginner', value: 1 },
                { label: 'Gemiddeld', value: 2 },
                { label: 'Expert', value: 3 },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setDifficultyFilter(opt.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    difficultyFilter === opt.value
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface border border-border text-text-secondary hover:border-primary/40 hover:text-text'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Zoekresultaten */}
        {isSearchActive ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-base font-semibold text-text">
                {filteredPrinciples.length} principe{filteredPrinciples.length !== 1 ? 's' : ''} gevonden
              </h2>
              <button
                onClick={() => { setSearchQuery(''); setDifficultyFilter('all'); }}
                className="text-sm text-primary hover:text-primary-dark font-medium"
              >
                Wis filters
              </button>
            </div>
            {filteredPrinciples.length === 0 ? (
              <div className="card text-center py-16">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-bg-alt flex items-center justify-center">
                  <svg className="w-7 h-7 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <p className="text-text-secondary">Geen principes gevonden voor &ldquo;{searchQuery}&rdquo;</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredPrinciples.map((principle, index) => {
                  const principleProgress = userData?.principleProgress[principle.id];
                  return (
                    <PrincipleCard
                      key={principle.id}
                      principle={principle}
                      principleProgress={principleProgress}
                      onClick={() => handlePrincipleClick(principle.id)}
                      index={index}
                    />
                  );
                })}
              </div>
            )}
          </motion.div>
        ) : (
          <>
            {/* Voortgang banner */}
            {totaalGelezen > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-surface border border-border rounded-xl p-4 flex items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-text">Jouw voortgang</span>
                    <span className="text-sm font-bold text-primary">{totaalGelezen}/{allPrinciples.length}</span>
                  </div>
                  <div className="w-full h-2 bg-bg-alt rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-700"
                      style={{ width: `${(totaalGelezen / allPrinciples.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-text-muted mt-1.5">
                    {Math.round((totaalGelezen / allPrinciples.length) * 100)}% gelezen · {allPrinciples.length - totaalGelezen} nog te ontdekken
                  </p>
                </div>
                <button
                  onClick={() => navigate('/register')}
                  className="flex-shrink-0 text-xs text-primary font-medium hover:underline"
                >
                  Bekijk register →
                </button>
              </motion.div>
            )}

            {/* Herlezen lijst */}
            {herlezenPrincipes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-text flex items-center gap-2">
                    <span>📖</span>
                    Nog eens lezen
                  </h2>
                  <button
                    onClick={() => navigate('/register?status=herlezen')}
                    className="text-xs text-primary hover:underline"
                  >
                    Alles zien →
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {herlezenPrincipes.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePrincipleClick(p.id)}
                      className="text-left p-3 rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-50 hover:border-amber-300 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{p.emoji}</span>
                        <span className="text-xs font-semibold text-text truncate">{p.title}</span>
                      </div>
                      <span className="text-xs text-amber-700">{p.academicCategory}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Bewaarde principes */}
            {bewaardePrincipes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-semibold text-text flex items-center gap-2">
                    <span>⭐</span>
                    Bewaard
                  </h2>
                  <button
                    onClick={() => navigate('/register?status=bewaard')}
                    className="text-xs text-primary hover:underline"
                  >
                    Alles zien →
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {bewaardePrincipes.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePrincipleClick(p.id)}
                      className="text-left p-3 rounded-xl border border-border bg-surface hover:border-primary/40 hover:bg-bg-alt/40 transition-all flex items-center gap-3"
                    >
                      <span className="text-xl">{p.emoji}</span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-text truncate">{p.title}</div>
                        <div className="text-xs text-text-muted">{p.academicCategory}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Recent bekeken */}
            {recentBekeken.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Recent bekeken
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {recentBekeken.map(p => {
                    const progress = userData?.principleProgress[p.id];
                    return (
                      <button
                        key={p.id}
                        onClick={() => handlePrincipleClick(p.id)}
                        className="text-left p-3 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-sm transition-all flex items-center gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{p.emoji}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-text truncate">{p.title}</div>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="w-10 h-1 bg-bg-alt rounded-full overflow-hidden">
                              <div className="h-full bg-primary rounded-full" style={{ width: `${progress?.masteryPercentage || 0}%` }} />
                            </div>
                            <span className="text-xs text-text-muted">{progress?.masteryPercentage || 0}%</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Principe van de dag */}
            {featuredPrinciple && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Ontdek vandaag
                </h2>
                <motion.div
                  whileHover={{ y: -2 }}
                  onClick={() => handlePrincipleClick(featuredPrinciple.id)}
                  className="decorative-border bg-surface p-6 cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">{featuredPrinciple.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-text mb-1.5">{featuredPrinciple.title}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="tag-pill text-xs">
                          {featuredPrinciple.academicCategory}
                        </span>
                        <DifficultyBadge difficulty={featuredPrinciple.difficulty} />
                      </div>
                      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                        {(featuredPrinciple.definition || '').substring(0, 150)}{featuredPrinciple.definition?.length > 150 ? '...' : ''}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="btn-primary text-sm px-4 py-2">
                          Verken principe
                          <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </span>
                        <PrincipleProgressBadge principleId={featuredPrinciple.id} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Organisatie toggle */}
            <div className="mb-6">
              <div className="inline-flex rounded-xl bg-bg-alt p-1 border border-border">
                <button
                  onClick={() => setOrganizationSystem('academic')}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    organizationSystem === 'academic'
                      ? 'bg-surface text-text shadow-sm border border-border'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  🎓 Academisch
                </button>
                <button
                  onClick={() => setOrganizationSystem('skills')}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    organizationSystem === 'skills'
                      ? 'bg-surface text-text shadow-sm border border-border'
                      : 'text-text-muted hover:text-text'
                  }`}
                >
                  🎯 Vaardigheden
                </button>
              </div>
            </div>

            {/* Categorieën */}
            <div className="space-y-5">
              {categories.map((category, index) => {
                const progress = getCategoryProgress(category);
                const categoryPrinciples = getPrinciplesByCategory(category, organizationSystem);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-text flex items-center gap-2">
                          <span>{getCategoryIcon(category)}</span>
                          {category}
                          <span className="text-xs text-text-muted font-normal bg-bg-alt px-2 py-0.5 rounded-full">
                            {progress.completed}/{progress.total}
                          </span>
                        </h3>
                        <span className="text-sm font-semibold text-primary">
                          {Math.round(progress.percentage)}%
                        </span>
                      </div>
                      <div className="progress-bar" role="progressbar" aria-valuenow={Math.round(progress.percentage)} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                          style={{
                            background: progress.percentage < 33
                              ? 'linear-gradient(90deg, #ef4444, #f87171)'
                              : progress.percentage < 67
                              ? 'linear-gradient(90deg, #f59e0b, #fbbf24)'
                              : 'linear-gradient(90deg, #10b981, #34d399)'
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {categoryPrinciples.map(principle => {
                        const principleProgress = userData?.principleProgress[principle.id];

                        return (
                          <PrincipleCard
                            key={principle.id}
                            principle={principle}
                            principleProgress={principleProgress}
                            onClick={() => handlePrincipleClick(principle.id)}
                            compact
                          />
                        );
                      })}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
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

const PrincipleCard = ({ principle, principleProgress, onClick, compact, index = 0 }) => {
  return (
    <motion.div
      initial={compact ? undefined : { opacity: 0, y: 10 }}
      animate={compact ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Open principe: ${principle.title}`}
      className="p-3.5 rounded-xl border transition-all border-border bg-surface hover:border-primary/40 cursor-pointer hover:shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-50">
          <span className="text-xl">{principle.emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text text-sm mb-0.5 truncate">
            {principle.title}
          </h4>
          <div className="flex items-center gap-2 mb-1.5">
            <DifficultyBadge difficulty={principle.difficulty} />
            {principleProgress && principleProgress.masteryPercentage > 0 && (
              <span className="text-xs font-semibold text-primary">
                {principleProgress.masteryPercentage}%
              </span>
            )}
          </div>
          {!compact && (
            <p className="text-xs text-text-secondary line-clamp-2">{(principle.definition || '').substring(0, 80)}...</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PrincipleProgressBadge = ({ principleId }) => {
  const { getPrincipleProgress } = useUser();
  const progress = getPrincipleProgress(principleId);

  if (progress.masteryPercentage === 0) {
    return (
      <span className="flex items-center gap-1.5 text-sm text-text-muted">
        <span className="w-2 h-2 rounded-full bg-border" />
        Nieuw
      </span>
    );
  } else if (progress.masteryPercentage === 100) {
    return (
      <span className="flex items-center gap-1.5 text-sm font-semibold text-success">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        Gelezen
      </span>
    );
  } else {
    return (
      <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
        <span className="w-2 h-2 rounded-full bg-primary" />
        {progress.masteryPercentage}%
      </span>
    );
  }
};

const getCategoryIcon = (category) => {
  const icons = {
    'Logica': '📚',
    'Ethiek': '⚖️',
    'Epistemologie': '🧠',
    'Retorica': '🎭',
    'Metafysica': '🌌',
    'Wetenschapsfilosofie': '🔬',
    'Behavioral Economics': '💰',
    'Speltheorie': '🎲',
    'Psychologie': '🧠',
    'Besliskunde': '🎯',
    'Systeemdenken': '🔄',
    'Statistiek': '📊',
    'Organisatie': '🏢',
    'Beter Argumenteren': '💬',
    'Manipulatie Herkennen': '🎭',
    'Complexiteit Begrijpen': '🧩',
    'Patronen Zien': '👁️',
    'Beslissingen Nemen': '🎯',
    'Beter Redeneren': '🧩',
    'Beter Beslissen': '🎯',
    'Mensen Begrijpen': '👥',
    'Causale Verbanden Begrijpen': '🔗',
    'Zelfvertrouwen': '💪',
    'Emotieregulatie': '🌊',
    'Gedachteexperimenten': '🔮',
  };
  return icons[category] || '📖';
};

export default HomePage;
