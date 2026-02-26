import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { principles, getCategories, getPrinciplesByCategory } from '../data/principles';

const HomePage = () => {
  const navigate = useNavigate();
  const { userData, getUserStats, isPrincipleUnlocked } = useUser();
  const [organizationSystem, setOrganizationSystem] = useState(userData?.preferences?.organization || 'academic');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('all'); // 'all', 1, 2

  const stats = getUserStats();

  // Get featured principle of the day (deterministic based on date)
  const featuredPrinciple = useMemo(() => {
    const today = new Date().toDateString();
    const dayHash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const unlockedPrinciples = principles.filter(p => isPrincipleUnlocked(p.id));
    if (unlockedPrinciples.length === 0) return null;
    const index = dayHash % unlockedPrinciples.length;
    return unlockedPrinciples[index];
  }, [isPrincipleUnlocked]);

  // Get categories for current system
  const categories = useMemo(() => {
    return getCategories(organizationSystem);
  }, [organizationSystem]);

  // Filter principles based on search query and difficulty
  const filteredPrinciples = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return principles.filter(p => {
      const matchesDifficulty = difficultyFilter === 'all' || p.difficulty === difficultyFilter;
      if (!q) return matchesDifficulty;
      const matchesSearch =
        p.title.toLowerCase().includes(q) ||
        p.definition.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q)) ||
        p.academicCategory.toLowerCase().includes(q) ||
        p.skillCategory.toLowerCase().includes(q);
      return matchesDifficulty && matchesSearch;
    });
  }, [searchQuery, difficultyFilter]);

  const isSearchActive = searchQuery.trim() !== '' || difficultyFilter !== 'all';

  // Calculate category progress
  const getCategoryProgress = (category) => {
    const categoryPrinciples = getPrinciplesByCategory(category, organizationSystem);
    const unlockedCount = categoryPrinciples.filter(p => isPrincipleUnlocked(p.id)).length;
    const completedCount = categoryPrinciples.filter(p => {
      const progress = userData?.principleProgress[p.id];
      return progress?.masteryPercentage === 100;
    }).length;

    return {
      total: categoryPrinciples.length,
      unlocked: unlockedCount,
      completed: completedCount,
      percentage: (completedCount / categoryPrinciples.length) * 100
    };
  };

  const handlePrincipleClick = (principleId) => {
    if (isPrincipleUnlocked(principleId)) {
      navigate(`/principle/${principleId}`);
    }
  };

  return (
    <div className="min-h-screen bg-parchment parchment">
      {/* Header */}
      <header className="bg-parchment-dark border-b-2 border-sepia shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">📜</span>
              <h1 className="text-2xl md:text-3xl font-serif text-ink">Scrolls of Wisdom</h1>
            </div>
            <div className="flex items-center gap-3">
              {/* Streak badge */}
              {stats.currentStreak > 0 && (
                <div
                  className="flex items-center gap-1 bg-orange-100 px-3 py-1.5 rounded-full border border-orange-300"
                  title={`Langste reeks: ${stats.longestStreak} dagen`}
                >
                  <span className="text-lg">🔥</span>
                  <span className="font-semibold text-orange-700 text-sm">{stats.currentStreak}</span>
                </div>
              )}
              {/* Points badge */}
              <div className="flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full border border-gold">
                <span className="text-xl">🏆</span>
                <span className="font-semibold text-ink">{stats.points}</span>
              </div>
              <button
                onClick={() => navigate('/settings')}
                className="text-2xl hover:scale-110 transition-transform"
                aria-label="Instellingen"
              >
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search + Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search input */}
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-light select-none">🔍</span>
              <input
                type="text"
                placeholder="Zoek een principe..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-sepia bg-parchment-dark text-ink placeholder-ink-light focus:border-gold focus:outline-none transition-colors"
                aria-label="Zoek een principe"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-light hover:text-ink"
                  aria-label="Zoekopdracht wissen"
                >
                  ✕
                </button>
              )}
            </div>
            {/* Difficulty filter */}
            <div className="flex gap-2 items-center">
              <span className="text-sm text-ink-light whitespace-nowrap">Niveau:</span>
              {[
                { label: 'Alle', value: 'all' },
                { label: '⭐ Beginner', value: 1 },
                { label: '⭐⭐ Gemiddeld', value: 2 },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setDifficultyFilter(opt.value)}
                  className={`px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all whitespace-nowrap ${
                    difficultyFilter === opt.value
                      ? 'border-gold bg-gold/20 text-ink'
                      : 'border-sepia text-ink-light hover:border-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search results view */}
        {isSearchActive ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-serif text-ink">
                {filteredPrinciples.length} principe{filteredPrinciples.length !== 1 ? 's' : ''} gevonden
              </h2>
              <button
                onClick={() => { setSearchQuery(''); setDifficultyFilter('all'); }}
                className="text-sm text-ink-light hover:text-ink underline"
              >
                Wis filters
              </button>
            </div>
            {filteredPrinciples.length === 0 ? (
              <div className="card text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-ink-light">Geen principes gevonden voor &ldquo;{searchQuery}&rdquo;</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPrinciples.map((principle, index) => {
                  const isUnlocked = isPrincipleUnlocked(principle.id);
                  const principleProgress = userData?.principleProgress[principle.id];
                  return (
                    <PrincipleCard
                      key={principle.id}
                      principle={principle}
                      isUnlocked={isUnlocked}
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
            {/* Featured Principle of the Day */}
            {featuredPrinciple && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-serif text-ink mb-4 flex items-center gap-2">
                  <span>📜</span>
                  Scroll van de Dag
                </h2>
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -4 }}
                  onClick={() => handlePrincipleClick(featuredPrinciple.id)}
                  className="decorative-border bg-parchment-dark p-6 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{featuredPrinciple.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-ink mb-2">{featuredPrinciple.title}</h3>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="tag-pill">
                          {organizationSystem === 'academic' ? featuredPrinciple.academicCategory : featuredPrinciple.skillCategory}
                        </span>
                        <span className="text-ink-light" aria-label={`Moeilijkheid: ${featuredPrinciple.difficulty === 1 ? 'beginner' : 'gemiddeld'}`}>
                          {'⭐'.repeat(featuredPrinciple.difficulty)}
                        </span>
                      </div>
                      <p className="text-ink-light mb-4">
                        {featuredPrinciple.definition.substring(0, 150)}...
                      </p>
                      <div className="flex items-center justify-between">
                        <button className="btn-primary">
                          Verken →
                        </button>
                        <PrincipleProgressBadge principleId={featuredPrinciple.id} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Organization Toggle */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-ink-light mb-3">
                <span>Verken via:</span>
              </div>
              <div className="inline-flex rounded-lg border-2 border-sepia bg-parchment-dark p-1">
                <button
                  onClick={() => setOrganizationSystem('academic')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    organizationSystem === 'academic'
                      ? 'bg-gold text-ink shadow-md'
                      : 'text-ink-light hover:text-ink'
                  }`}
                >
                  🎓 Academisch
                </button>
                <button
                  onClick={() => setOrganizationSystem('skills')}
                  className={`px-6 py-2 rounded-md font-semibold transition-all ${
                    organizationSystem === 'skills'
                      ? 'bg-gold text-ink shadow-md'
                      : 'text-ink-light hover:text-ink'
                  }`}
                >
                  🎯 Vaardigheden
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              {categories.map((category, index) => {
                const progress = getCategoryProgress(category);
                const categoryPrinciples = getPrinciplesByCategory(category, organizationSystem);

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="card"
                  >
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-serif text-ink flex items-center gap-2">
                          <span>{getCategoryIcon(category)}</span>
                          {category}
                          <span className="text-sm text-ink-light font-sans">
                            ({progress.completed}/{progress.total} principes)
                          </span>
                        </h3>
                        <span className="text-ink-light font-semibold">
                          {Math.round(progress.percentage)}%
                        </span>
                      </div>
                      <div className="progress-bar" role="progressbar" aria-valuenow={Math.round(progress.percentage)} aria-valuemin={0} aria-valuemax={100}>
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress.percentage}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                          style={{
                            backgroundColor: progress.percentage < 33 ? 'var(--color-progress-low)' :
                                           progress.percentage < 67 ? 'var(--color-progress-medium)' :
                                           'var(--color-progress-high)'
                          }}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {categoryPrinciples.map(principle => {
                        const isUnlocked = isPrincipleUnlocked(principle.id);
                        const principleProgress = userData?.principleProgress[principle.id];

                        return (
                          <PrincipleCard
                            key={principle.id}
                            principle={principle}
                            isUnlocked={isUnlocked}
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

// Reusable principle card component
const PrincipleCard = ({ principle, isUnlocked, principleProgress, onClick, compact, index = 0 }) => {
  return (
    <motion.div
      initial={compact ? undefined : { opacity: 0, y: 10 }}
      animate={compact ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={isUnlocked ? { scale: 1.03 } : {}}
      onClick={onClick}
      role={isUnlocked ? 'button' : undefined}
      tabIndex={isUnlocked ? 0 : undefined}
      onKeyDown={isUnlocked ? (e) => e.key === 'Enter' && onClick() : undefined}
      aria-label={isUnlocked ? `Open principe: ${principle.title}` : `Vergrendeld principe`}
      className={`p-4 rounded-lg border-2 transition-all ${
        isUnlocked
          ? 'border-sepia bg-parchment hover:border-gold cursor-pointer hover:shadow-md'
          : 'border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{isUnlocked ? principle.emoji : '🔒'}</div>
        <div className="flex-1 min-w-0">
          <h4 className="font-serif text-ink text-sm mb-1 truncate">
            {isUnlocked ? principle.title : 'Vergrendeld'}
          </h4>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-ink-light">
              {'⭐'.repeat(principle.difficulty)}
            </span>
            {isUnlocked && principleProgress && (
              <span className="text-xs font-semibold text-gold">
                {principleProgress.masteryPercentage}%
              </span>
            )}
          </div>
          {isUnlocked && !compact && (
            <p className="text-xs text-ink-light mb-2 line-clamp-2">{principle.definition.substring(0, 80)}...</p>
          )}
          {isUnlocked && (
            <div className="flex flex-wrap gap-1">
              {principle.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-sepia/20 text-ink-light px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
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
    return <span className="text-2xl">📜</span>;
  } else if (progress.masteryPercentage === 100) {
    return <span className="text-2xl">✅</span>;
  } else {
    return (
      <div className="flex items-center gap-2">
        <span className="text-2xl">📖</span>
        <span className="text-sm font-semibold text-gold">{progress.masteryPercentage}%</span>
      </div>
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
    'Beter Argumenteren': '💬',
    'Manipulatie Herkennen': '🎭',
    'Complexiteit Begrijpen': '🧩',
    'Patronen Zien': '👁️',
    'Beslissingen Nemen': '🎯',
    'Causale Verbanden Begrijpen': '🔗'
  };
  return icons[category] || '📖';
};

export default HomePage;
