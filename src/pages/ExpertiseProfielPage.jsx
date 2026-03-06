import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';
import { useUser } from '../context/UserContext';

const RADAR_SIZE = 280;
const CENTER = RADAR_SIZE / 2;
const RADIUS = 110;

function polarToXY(angle, r) {
  return {
    x: CENTER + r * Math.cos(angle - Math.PI / 2),
    y: CENTER + r * Math.sin(angle - Math.PI / 2),
  };
}

function buildPolygon(points) {
  return points.map(p => `${p.x},${p.y}`).join(' ');
}

const RadarChart = ({ categories, values }) => {
  const n = categories.length;
  if (n < 3) return null;

  const angles = categories.map((_, i) => (2 * Math.PI * i) / n);

  // Grid rings
  const rings = [0.25, 0.5, 0.75, 1];

  // Data polygon
  const dataPoints = angles.map((angle, i) => polarToXY(angle, (values[i] / 100) * RADIUS));

  // Axis endpoints
  const axisPoints = angles.map(angle => polarToXY(angle, RADIUS));

  // Label positions (iets verder)
  const labelPoints = angles.map(angle => polarToXY(angle, RADIUS + 22));

  return (
    <svg width={RADAR_SIZE} height={RADAR_SIZE} className="overflow-visible">
      {/* Grid rings */}
      {rings.map(r => {
        const pts = angles.map(angle => polarToXY(angle, r * RADIUS));
        return (
          <polygon
            key={r}
            points={buildPolygon(pts)}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        );
      })}

      {/* Assen */}
      {axisPoints.map((pt, i) => (
        <line
          key={i}
          x1={CENTER} y1={CENTER}
          x2={pt.x} y2={pt.y}
          stroke="var(--color-border)"
          strokeWidth={1}
        />
      ))}

      {/* Data polygon (fill) */}
      <motion.polygon
        points={buildPolygon(dataPoints)}
        fill="rgba(92,79,207,0.15)"
        stroke="var(--color-primary)"
        strokeWidth={2}
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
      />

      {/* Data punten */}
      {dataPoints.map((pt, i) => (
        <motion.circle
          key={i}
          cx={pt.x} cy={pt.y} r={4}
          fill="var(--color-primary)"
          stroke="var(--color-surface)"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.04 }}
          style={{ transformOrigin: `${pt.x}px ${pt.y}px` }}
        />
      ))}

      {/* Labels */}
      {labelPoints.map((pt, i) => {
        const angle = angles[i];
        const alignLeft = pt.x < CENTER - 10;
        const alignRight = pt.x > CENTER + 10;
        const anchor = alignLeft ? 'end' : alignRight ? 'start' : 'middle';

        // Korte categorie naam (max 18 chars)
        const label = categories[i].length > 18 ? categories[i].substring(0, 16) + '…' : categories[i];
        return (
          <text
            key={i}
            x={pt.x}
            y={pt.y + (pt.y < CENTER ? -4 : 4)}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize="9"
            fontWeight="600"
            fill="var(--color-text-muted)"
            fontFamily="var(--font-sans)"
          >
            {label}
          </text>
        );
      })}

      {/* % labels op ringen */}
      {rings.map(r => (
        <text
          key={r}
          x={CENTER + 3}
          y={CENTER - r * RADIUS + 3}
          fontSize="7"
          fill="var(--color-text-muted)"
          fontFamily="var(--font-sans)"
        >
          {Math.round(r * 100)}%
        </text>
      ))}
    </svg>
  );
};

const ExpertiseProfielPage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();

  const academicData = useMemo(() => {
    const cats = getCategories('academic');
    return cats.map(cat => {
      const principles = getPrinciplesByCategory(cat, 'academic');
      const totalMastery = principles.reduce((sum, p) => {
        return sum + (userData?.principleProgress?.[p.id]?.masteryPercentage || 0);
      }, 0);
      return { category: cat, value: principles.length > 0 ? Math.round(totalMastery / principles.length) : 0, count: principles.length };
    }).sort((a, b) => b.value - a.value);
  }, [userData]);

  const skillsData = useMemo(() => {
    const cats = getCategories('skills');
    return cats.map(cat => {
      const principles = getPrinciplesByCategory(cat, 'skills');
      const totalMastery = principles.reduce((sum, p) => {
        return sum + (userData?.principleProgress?.[p.id]?.masteryPercentage || 0);
      }, 0);
      return { category: cat, value: principles.length > 0 ? Math.round(totalMastery / principles.length) : 0, count: principles.length };
    }).sort((a, b) => b.value - a.value);
  }, [userData]);

  const radarCats = academicData.slice(0, 10).map(d => d.category);
  const radarVals = academicData.slice(0, 10).map(d => d.value);

  const totalGelezen = allPrinciples.filter(p => userData?.principleProgress?.[p.id]?.activities?.read).length;
  const avgMastery = academicData.length > 0
    ? Math.round(academicData.reduce((s, d) => s + d.value, 0) / academicData.length)
    : 0;

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Terug
          </button>
          <span className="text-sm font-semibold text-text">Expertise-profiel</span>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-50 text-primary text-sm font-semibold mb-4">
            <span>📊</span>
            <span>Expertise-profiel</span>
          </div>
          <h1 className="text-2xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Jouw kennisverdeling
          </h1>
          <p className="text-sm text-text-muted">Overzicht van je sterke en zwakkere gebieden.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Principes gelezen', value: totalGelezen, icon: '📖', color: 'var(--color-primary)' },
            { label: 'Gem. beheersing', value: `${avgMastery}%`, icon: '⚡', color: 'var(--color-accent-dark)' },
            { label: 'Categorieën', value: academicData.length, icon: '🗂️', color: 'var(--color-success)' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="card text-center py-5"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Radargrafiek */}
        {totalGelezen > 0 && radarCats.length >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card mb-8"
          >
            <h2 className="text-base font-bold text-text mb-6 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
              <span>🕸️</span>
              Academische kenniskaart
            </h2>
            <div className="flex justify-center">
              <RadarChart categories={radarCats} values={radarVals} />
            </div>
            <p className="text-xs text-text-muted text-center mt-4">
              Toont de eerste 10 academische categorieën · Beheersing op basis van gelezen principes
            </p>
          </motion.div>
        )}

        {totalGelezen === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="card text-center py-12 mb-8"
          >
            <div className="text-5xl mb-4">📊</div>
            <h3 className="font-bold text-text mb-2">Nog geen data</h3>
            <p className="text-sm text-text-secondary">Lees een paar principes om je expertise-profiel op te bouwen.</p>
            <button onClick={() => navigate('/home')} className="btn-primary mt-4 mx-auto">
              Start met leren
            </button>
          </motion.div>
        )}

        {/* Academisch overzicht */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mb-6"
        >
          <h2 className="text-base font-bold text-text mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
            <span>🎓</span>
            Academisch overzicht
          </h2>
          <div className="space-y-3">
            {academicData.map((d, i) => (
              <motion.div
                key={d.category}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 + i * 0.03 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text">{d.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-muted">{d.count} pr.</span>
                    <span className="text-sm font-bold" style={{
                      color: d.value < 33 ? 'var(--color-danger)' : d.value < 67 ? 'var(--color-accent-dark)' : 'var(--color-success)'
                    }}>{d.value}%</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-bg-alt rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${d.value}%` }}
                    transition={{ delay: 0.4 + i * 0.03, duration: 0.6, ease: 'easeOut' }}
                    style={{
                      background: d.value < 33
                        ? 'linear-gradient(90deg, var(--color-danger), #f87171)'
                        : d.value < 67
                        ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))'
                        : 'linear-gradient(90deg, var(--color-success), #34d399)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vaardigheden overzicht */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="text-base font-bold text-text mb-5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
            <span>🎯</span>
            Vaardigheden overzicht
          </h2>
          <div className="space-y-3">
            {skillsData.map((d, i) => (
              <motion.div
                key={d.category}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + i * 0.03 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text">{d.category}</span>
                  <span className="text-sm font-bold" style={{
                    color: d.value < 33 ? 'var(--color-danger)' : d.value < 67 ? 'var(--color-accent-dark)' : 'var(--color-success)'
                  }}>{d.value}%</span>
                </div>
                <div className="w-full h-2 bg-bg-alt rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${d.value}%` }}
                    transition={{ delay: 0.5 + i * 0.03, duration: 0.6, ease: 'easeOut' }}
                    style={{
                      background: d.value < 33
                        ? 'linear-gradient(90deg, var(--color-danger), #f87171)'
                        : d.value < 67
                        ? 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))'
                        : 'linear-gradient(90deg, var(--color-success), #34d399)'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpertiseProfielPage;
