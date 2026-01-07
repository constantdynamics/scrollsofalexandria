import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { principles, getCategories, getPrinciplesByCategory } from '../data/principles';

const HomePage = () => {
  const navigate = useNavigate();
  const { userData, getUserStats, isPrincipleUnlocked } = useUser();
  const [organizationSystem, setOrganizationSystem] = useState(userData?.preferences?.organization || 'academic');

  const stats = getUserStats();

  // Get featured principle of the day (deterministic based on date)
  const featuredPrinciple = useMemo(() => {
    const today = new Date().toDateString();
    const dayHash = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const unlockedPrinciples = principles.filter(p => isPrincipleUnlocked(p.id));
    const index = dayHash % unlockedPrinciples.length;
    return unlockedPrinciples[index];
  }, [isPrincipleUnlocked]);

  // Get categories for current system
  const categories = useMemo(() => {
    return getCategories(organizationSystem);
  }, [organizationSystem]);

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

  const toggleOrganization = (system) => {
    setOrganizationSystem(system);
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full border border-gold">
                <span className="text-xl">🏆</span>
                <span className="font-semibold text-ink">{stats.points}</span>
              </div>
              <button
                onClick={() => navigate('/settings')}
                className="text-2xl hover:scale-110 transition-transform"
              >
                ⚙️
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
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
                    <span className="text-ink-light">
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
              onClick={() => toggleOrganization('academic')}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                organizationSystem === 'academic'
                  ? 'bg-gold text-ink shadow-md'
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              🎓 Academisch
            </button>
            <button
              onClick={() => toggleOrganization('skills')}
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
                  <div className="progress-bar">
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
                      <motion.div
                        key={principle.id}
                        whileHover={isUnlocked ? { scale: 1.03 } : {}}
                        onClick={() => handlePrincipleClick(principle.id)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          isUnlocked
                            ? 'border-sepia bg-parchment hover:border-gold cursor-pointer hover:shadow-md'
                            : 'border-gray-300 bg-gray-100 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-3xl">{principle.emoji}</div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-serif text-ink text-sm mb-1 truncate">
                              {isUnlocked ? principle.title : '🔒 Locked'}
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
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
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
