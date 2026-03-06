import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { allPrinciples, getCategories, getPrinciplesByCategory, getPrincipleById } from '../data/principles';

const HomePage = () => {
  const navigate = useNavigate();
  const { userData, getUserStats, getPrincipleStatuses, setMentorPrinciple } = useUser();
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

  const handleWillekeurigeWandeling = () => {
    const random = allPrinciples[Math.floor(Math.random() * allPrinciples.length)];
    navigate(`/principle/${random.id}`);
  };

  const mentorPrinciple = useMemo(() => {
    const id = userData?.preferences?.mentorPrincipleId;
    return id ? getPrincipleById(id) : null;
  }, [userData?.preferences?.mentorPrincipleId]);

  const totaalGelezen = allPrinciples.filter(p => userData?.principleProgress?.[p.id]?.activities?.read).length;

  const uitdagingVoltooid = userData?.dagelijkseUitdaging?.datum === new Date().toDateString() && userData?.dagelijkseUitdaging?.voltooid;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)', boxShadow: '0 2px 8px rgba(92,79,207,0.30)' }}>
                <span className="text-xl">📜</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-text leading-tight" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>
                  Scrolls of Alexandria
                </h1>
                <p className="text-xs text-text-muted leading-none hidden sm:block">Denkprincipes voor het leven</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleWillekeurigeWandeling}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-surface text-text-secondary hover:text-text hover:border-primary/40 hover:shadow-sm transition-all"
                title="Neem me mee op een intellectueel avontuur"
              >
                <span>🎲</span>
                <span className="hidden md:inline">Willekeurig</span>
              </button>
              <button
                onClick={() => navigate('/blinde-definitie')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-surface text-text-secondary hover:text-text hover:border-primary/40 hover:shadow-sm transition-all"
                title="Blinde definitie — raad het principe"
              >
                <span>🎭</span>
                <span className="hidden md:inline">Raadspel</span>
              </button>
              {stats.currentStreak > 0 && (
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-accent/25 transition-all"
                  style={{ background: 'rgba(201,136,15,0.08)' }}
                  title={`Langste reeks: ${stats.longestStreak} dagen`}
                >
                  <span className="text-sm">🔥</span>
                  <span className="font-semibold text-accent-dark text-sm">{stats.currentStreak}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-primary-100 bg-primary-50">
                <span className="text-sm">🏆</span>
                <span className="font-semibold text-primary text-sm">{stats.points}</span>
              </div>
              <button
                onClick={() => navigate('/prestaties')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-all"
                aria-label="Prestaties"
                title="Prestaties — jouw achievements"
              >
                <span className="text-lg">🏆</span>
              </button>
              <button
                onClick={() => navigate('/register')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-all"
                aria-label="Register"
                title="Register — alle principes"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </button>
              <button
                onClick={() => navigate('/settings')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-all"
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
        {/* Snelle toegang */}
        <div className="flex flex-wrap gap-2 mb-5">
          {[
            { label: 'Herhaling', emoji: '⚡', path: '/herhaling', title: 'Snelherhalings-deck' },
            { label: 'Expertise', emoji: '📊', path: '/expertise', title: 'Expertise-profiel' },
            { label: 'Boekenplank', emoji: '📚', path: '/boekenplank', title: 'Boekenplank-view' },
            { label: 'Raadspel', emoji: '🎭', path: '/blinde-definitie', title: 'Blinde definitie' },
            { label: 'Leerpad', emoji: '🗺️', path: '/leerpad', title: 'Aanbevolen leerpad' },
            { label: 'Uitdaging', emoji: '🎯', path: '/uitdaging', title: 'Dagelijkse uitdaging' },
            { label: 'Prestaties', emoji: '🏆', path: '/prestaties', title: 'Jouw prestaties' },
          ].map(item => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-border bg-surface text-text-secondary hover:text-text hover:border-primary/40 hover:shadow-sm transition-all"
              title={item.title}
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Dagelijkse uitdaging banner */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <button
            onClick={() => navigate('/uitdaging')}
            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:shadow-sm"
            style={{
              borderColor: uitdagingVoltooid ? 'rgba(5,150,105,0.3)' : 'rgba(92,79,207,0.25)',
              background: uitdagingVoltooid ? 'rgba(5,150,105,0.05)' : 'linear-gradient(135deg, rgba(92,79,207,0.07) 0%, var(--color-surface) 100%)',
            }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
              style={{ background: uitdagingVoltooid ? 'rgba(5,150,105,0.12)' : 'linear-gradient(140deg, var(--color-primary), var(--color-accent))', boxShadow: uitdagingVoltooid ? 'none' : '0 2px 8px rgba(92,79,207,0.2)' }}>
              {uitdagingVoltooid ? '✅' : '🎯'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-text">
                {uitdagingVoltooid ? 'Uitdaging voltooid vandaag!' : 'Dagelijkse uitdaging — doe mee!'}
              </div>
              <div className="text-xs text-text-muted">
                {uitdagingVoltooid
                  ? `Score: ${userData?.dagelijkseUitdaging?.score ?? '?'}/5 · Kom morgen terug`
                  : '5 vragen · Tot 25 punten · Dagelijks vernieuwd'}
              </div>
            </div>
            <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

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
                className="mb-6 rounded-2xl border border-border overflow-hidden"
                style={{ background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-surface) 60%, rgba(201,136,15,0.05) 100%)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div className="p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(140deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}>
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-text">Jouw voortgang</span>
                      <span className="text-sm font-bold text-primary">{totaalGelezen}<span className="font-normal text-text-muted">/{allPrinciples.length}</span></span>
                    </div>
                    <div className="w-full h-2 bg-bg-alt rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-accent) 100%)' }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(totaalGelezen / allPrinciples.length) * 100}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-xs text-text-muted mt-1.5">
                      {Math.round((totaalGelezen / allPrinciples.length) * 100)}% gelezen · {allPrinciples.length - totaalGelezen} nog te ontdekken
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('/register')}
                    className="flex-shrink-0 text-xs font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                  >
                    Register
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Herlezen lijst */}
            {herlezenPrincipes.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">📖 Nog eens lezen</span>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => navigate('/register?status=herlezen')}
                    className="text-xs text-primary font-medium hover:text-primary-dark transition-colors flex items-center gap-1"
                  >
                    Alles
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
                  {herlezenPrincipes.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePrincipleClick(p.id)}
                      className="text-left p-3 rounded-xl border transition-all hover:shadow-sm"
                      style={{ borderColor: 'rgba(201,136,15,0.35)', background: 'rgba(201,136,15,0.05)' }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,136,15,0.10)'; e.currentTarget.style.borderColor = 'rgba(201,136,15,0.55)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,136,15,0.05)'; e.currentTarget.style.borderColor = 'rgba(201,136,15,0.35)'; }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{p.emoji}</span>
                        <span className="text-xs font-semibold text-text truncate">{p.title}</span>
                      </div>
                      <span className="text-xs" style={{ color: 'var(--color-accent-dark)' }}>{p.academicCategory}</span>
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">⭐ Bewaard</span>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => navigate('/register?status=bewaard')}
                    className="text-xs text-primary font-medium hover:text-primary-dark transition-colors flex items-center gap-1"
                  >
                    Alles
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {bewaardePrincipes.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handlePrincipleClick(p.id)}
                      className="text-left p-3 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-sm transition-all flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{p.emoji}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-text truncate">{p.title}</div>
                        <div className="text-xs text-text-muted mt-0.5">{p.academicCategory}</div>
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">Recent bekeken</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {recentBekeken.map(p => {
                    const progress = userData?.principleProgress[p.id];
                    return (
                      <button
                        key={p.id}
                        onClick={() => handlePrincipleClick(p.id)}
                        className="text-left p-3 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-sm transition-all flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg">{p.emoji}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-text truncate">{p.title}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex-1 h-1.5 bg-bg-alt rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${progress?.masteryPercentage || 0}%`, background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
                              />
                            </div>
                            <span className="text-xs text-text-muted flex-shrink-0">{progress?.masteryPercentage || 0}%</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Principe-mentor */}
            {mentorPrinciple ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">🌟 Principe van de maand</span>
                  <div className="flex-1 h-px bg-border" />
                  <button
                    onClick={() => setMentorPrinciple(null)}
                    className="text-xs text-text-muted hover:text-text transition-colors"
                    title="Verwijder mentor principe"
                  >
                    Wijzigen
                  </button>
                </div>
                <motion.div
                  whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
                  onClick={() => handlePrincipleClick(mentorPrinciple.id)}
                  className="cursor-pointer rounded-2xl border p-5 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,136,15,0.07) 0%, var(--color-surface) 60%)',
                    borderColor: 'rgba(201,136,15,0.35)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow 0.25s ease, transform 0.2s ease',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ background: 'rgba(201,136,15,0.12)', border: '1px solid rgba(201,136,15,0.25)' }}>
                      <span className="text-2xl">{mentorPrinciple.emoji}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-text leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                          {mentorPrinciple.title}
                        </h3>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                        {(mentorPrinciple.definition || '').substring(0, 120)}{mentorPrinciple.definition?.length > 120 ? '...' : ''}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="tag-pill text-xs">{mentorPrinciple.academicCategory}</span>
                        <span className="text-xs text-accent-dark font-medium">Bewust toepassen deze maand</span>
                      </div>
                    </div>
                    <svg className="w-4 h-4 text-text-muted flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">🌟 Principe van de maand</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div
                  className="rounded-2xl border border-dashed p-5 flex items-center gap-4 cursor-pointer hover:border-accent/50 transition-colors group"
                  style={{ borderColor: 'rgba(201,136,15,0.3)' }}
                  onClick={() => {
                    const random = allPrinciples[Math.floor(Math.random() * allPrinciples.length)];
                    setMentorPrinciple(random.id);
                  }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,136,15,0.08)', border: '1px solid rgba(201,136,15,0.2)' }}>
                    <span className="text-xl">🌟</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-text mb-0.5">Kies je principe van de maand</div>
                    <p className="text-xs text-text-muted">Klik op een principe en kies het als je maandmentor, of klik hier voor een willekeurige keuze.</p>
                  </div>
                  <svg className="w-4 h-4 text-text-muted group-hover:text-text transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="section-label">Ontdek vandaag</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <motion.div
                  whileHover={{ y: -3, boxShadow: 'var(--shadow-lg)' }}
                  onClick={() => handlePrincipleClick(featuredPrinciple.id)}
                  className="decorative-border bg-surface cursor-pointer relative overflow-hidden"
                  style={{ boxShadow: 'var(--shadow-md)', transition: 'box-shadow 0.25s ease, transform 0.25s ease' }}
                >
                  <div className="hero-overlay" />
                  <div className="p-6 md:p-8 relative">
                    <div className="flex items-start gap-5">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                        style={{ background: 'linear-gradient(140deg, var(--color-primary-50) 0%, var(--color-primary-100) 100%)', border: '1px solid var(--color-primary-100)' }}
                      >
                        <span className="text-3xl md:text-4xl">{featuredPrinciple.emoji}</span>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl md:text-2xl font-bold text-text mb-2 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                          {featuredPrinciple.title}
                        </h2>
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="tag-pill text-xs">{featuredPrinciple.academicCategory}</span>
                          <DifficultyBadge difficulty={featuredPrinciple.difficulty} />
                        </div>
                        <p className="text-sm text-text-secondary mb-5 line-clamp-2 leading-relaxed">
                          {(featuredPrinciple.definition || '').substring(0, 160)}{featuredPrinciple.definition?.length > 160 ? '...' : ''}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <span className="btn-primary text-sm px-5 py-2.5">
                            Verken principe
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </span>
                          <PrincipleProgressBadge principleId={featuredPrinciple.id} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Organisatie toggle */}
            <div className="mb-6 flex items-center gap-3">
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
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2.5">
                        <h3 className="text-base font-bold text-text flex items-center gap-2.5">
                          <span className="text-lg">{getCategoryIcon(category)}</span>
                          <span>{category}</span>
                          <span className="text-xs text-text-muted font-medium bg-bg-alt px-2 py-0.5 rounded-full border border-border">
                            {progress.completed}/{progress.total}
                          </span>
                        </h3>
                        <span className="text-sm font-bold"
                          style={{ color: progress.percentage < 33 ? 'var(--color-danger)' : progress.percentage < 67 ? 'var(--color-accent)' : 'var(--color-success)' }}>
                          {Math.round(progress.percentage)}%
                        </span>
                      </div>
                      <div className="progress-bar" role="progressbar" aria-valuenow={Math.round(progress.percentage)} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress.percentage}%` }}
                          transition={{ duration: 0.9, delay: index * 0.06 + 0.2, ease: 'easeOut' }}
                          style={{
                            background: progress.percentage < 33
                              ? 'linear-gradient(90deg, var(--color-danger), #f87171)'
                              : progress.percentage < 67
                              ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))'
                              : 'linear-gradient(90deg, var(--color-success), #34d399)'
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
  const mastery = principleProgress?.masteryPercentage || 0;
  const isComplete = mastery === 100;

  return (
    <motion.div
      initial={compact ? undefined : { opacity: 0, y: 10 }}
      animate={compact ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -2, boxShadow: 'var(--shadow-md)' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Open principe: ${principle.title}`}
      className="p-3.5 rounded-xl border cursor-pointer relative overflow-hidden"
      style={{
        borderColor: isComplete ? 'rgba(5,150,105,0.3)' : 'var(--color-border)',
        backgroundColor: isComplete ? 'rgba(5,150,105,0.04)' : 'var(--color-surface)',
        boxShadow: 'var(--shadow-xs)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease, transform 0.2s ease',
      }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-50"
          style={{ border: '1px solid var(--color-primary-100)' }}>
          <span className="text-xl">{principle.emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-text text-sm mb-1 truncate leading-snug">
            {principle.title}
          </h4>
          <div className="flex items-center gap-2">
            <DifficultyBadge difficulty={principle.difficulty} />
            {mastery > 0 && (
              <div className="flex items-center gap-1.5 ml-auto">
                {isComplete ? (
                  <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: 'var(--color-success)' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    100%
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-primary">{mastery}%</span>
                )}
              </div>
            )}
          </div>
          {!compact && (
            <p className="text-xs text-text-secondary line-clamp-2 mt-1.5 leading-relaxed">{(principle.definition || '').substring(0, 80)}...</p>
          )}
          {mastery > 0 && mastery < 100 && (
            <div className="mt-2 w-full h-1 bg-bg-alt rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${mastery}%`, background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              />
            </div>
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
