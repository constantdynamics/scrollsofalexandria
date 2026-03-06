import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { allPrinciples, getCategories, getPrinciplesByCategory } from '../data/principles';
import { useUser } from '../context/UserContext';

const BOOK_HEIGHT = 140;
const BOOK_MIN_WIDTH = 36;
const BOOK_WIDTH_PER_PRINCIPLE = 5.5;

const SPINE_COLORS = [
  ['#5c4fcf', '#7b6fde'], // indigo
  ['#c9880f', '#e8a830'], // goud
  ['#059669', '#34d399'], // groen
  ['#dc2626', '#f87171'], // rood
  ['#0891b2', '#22d3ee'], // cyaan
  ['#7c3aed', '#a78bfa'], // paars
  ['#b45309', '#d97706'], // amber
  ['#0f766e', '#2dd4bf'], // teal
  ['#be185d', '#f472b6'], // roze
  ['#1d4ed8', '#60a5fa'], // blauw
];

const Book = ({ category, principles, masteryPct, colorPair, index, onCategoryClick }) => {
  const width = Math.max(BOOK_MIN_WIDTH, principles.length * BOOK_WIDTH_PER_PRINCIPLE);
  const heightVariation = 1 + (index % 3) * 0.06; // lichte variatie in hoogte
  const h = BOOK_HEIGHT * heightVariation;
  const [color1, color2] = colorPair;

  // Mastery als schaduw/transparantie
  const opacity = masteryPct === 0 ? 0.45 : 0.7 + masteryPct * 0.003;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, type: 'spring', stiffness: 200, damping: 22 }}
      whileHover={{ y: -8, filter: 'brightness(1.08)' }}
      onClick={() => onCategoryClick(category)}
      title={`${category} — ${principles.length} principes — ${masteryPct}% beheersing`}
      className="relative cursor-pointer group flex-shrink-0"
      style={{ width, height: h, opacity }}
    >
      {/* Boekrug */}
      <div
        className="absolute inset-0 rounded-t-sm rounded-b-sm shadow-md group-hover:shadow-lg transition-shadow"
        style={{
          background: `linear-gradient(160deg, ${color1} 0%, ${color2} 100%)`,
          borderRadius: '2px 3px 3px 2px',
        }}
      >
        {/* Binnenste glans */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 'inherit',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 30%, rgba(0,0,0,0.12) 100%)',
          }}
        />

        {/* Bovenrand (dikte-illusie) */}
        <div
          className="absolute top-0 left-0 right-0 h-2"
          style={{
            background: `linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.05) 100%)`,
            borderRadius: '2px 3px 0 0',
          }}
        />

        {/* Voortgangsbalk onderaan */}
        {masteryPct > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 rounded-b-sm overflow-hidden"
            style={{ height: 4 }}
          >
            <motion.div
              className="h-full"
              initial={{ width: 0 }}
              animate={{ width: `${masteryPct}%` }}
              transition={{ delay: index * 0.04 + 0.3, duration: 0.6 }}
              style={{ background: 'rgba(255,255,255,0.6)' }}
            />
          </div>
        )}

        {/* Categorie tekst — verticaal */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          style={{ padding: '8px 4px' }}
        >
          <span
            className="text-white font-bold leading-tight select-none"
            style={{
              fontSize: width < 50 ? 7 : width < 70 ? 8 : 9,
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              letterSpacing: '0.03em',
              maxHeight: h - 16,
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {category}
          </span>
        </div>

        {/* Tooltip bij hover */}
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 bg-text text-surface text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-lg"
          style={{ minWidth: 140 }}
        >
          <div>{category}</div>
          <div className="font-normal opacity-80">{principles.length} pr. · {masteryPct}%</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-4 border-transparent border-t-text" />
        </div>
      </div>
    </motion.div>
  );
};

const BoekenplankPage = () => {
  const navigate = useNavigate();
  const { userData } = useUser();

  const [system, setSystem] = useState('academic');

  const shelves = useMemo(() => {
    const cats = getCategories(system);
    return cats.map((cat, i) => {
      const principles = getPrinciplesByCategory(cat, system);
      const totalMastery = principles.reduce((sum, p) => {
        return sum + (userData?.principleProgress?.[p.id]?.masteryPercentage || 0);
      }, 0);
      const masteryPct = principles.length > 0 ? Math.round(totalMastery / principles.length) : 0;
      return {
        category: cat,
        principles,
        masteryPct,
        colorPair: SPINE_COLORS[i % SPINE_COLORS.length],
      };
    });
  }, [system, userData]);

  // Verdeel over 2 planken
  const mid = Math.ceil(shelves.length / 2);
  const shelf1 = shelves.slice(0, mid);
  const shelf2 = shelves.slice(mid);

  const handleCategoryClick = (category) => {
    navigate(`/home?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-bg">
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-border" style={{ backgroundColor: 'color-mix(in srgb, var(--color-surface) 96%, transparent)' }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => navigate('/home')} className="flex items-center gap-2 text-text-secondary hover:text-text transition-colors text-sm font-medium group">
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Terug
          </button>
          <span className="text-sm font-semibold text-text">Boekenplank</span>
          <div className="w-16" />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary-50 text-primary text-sm font-semibold mb-4">
            <span>📚</span>
            <span>Boekenplank-view</span>
          </div>
          <h1 className="text-2xl font-bold text-text mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Jouw bibliotheek
          </h1>
          <p className="text-sm text-text-muted">
            Breedte = aantal principes · Witte balk onderaan = voortgang · Klik op een boek
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl bg-bg-alt p-1 border border-border">
            <button
              onClick={() => setSystem('academic')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${system === 'academic' ? 'bg-surface text-text shadow-sm border border-border' : 'text-text-muted hover:text-text'}`}
            >
              🎓 Academisch
            </button>
            <button
              onClick={() => setSystem('skills')}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${system === 'skills' ? 'bg-surface text-text shadow-sm border border-border' : 'text-text-muted hover:text-text'}`}
            >
              🎯 Vaardigheden
            </button>
          </div>
        </div>

        {/* Planken */}
        {[shelf1, shelf2].map((shelf, si) => (
          <motion.div
            key={si}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: si * 0.1 }}
            className="mb-10"
          >
            {/* Boeken */}
            <div
              className="flex items-end gap-1 px-4 pb-0"
              style={{ minHeight: BOOK_HEIGHT * 1.06 + 16 }}
            >
              {shelf.map((book, i) => (
                <Book
                  key={book.category}
                  {...book}
                  index={si * mid + i}
                  onCategoryClick={handleCategoryClick}
                />
              ))}
            </div>

            {/* Plank */}
            <div
              className="mx-2 rounded-sm"
              style={{
                height: 14,
                background: 'linear-gradient(180deg, #a0826a 0%, #7a5c48 60%, #5c4030 100%)',
                boxShadow: '0 4px 12px rgba(60,30,10,0.35)',
              }}
            />
            {/* Plankschaduw */}
            <div
              className="mx-4 rounded-b"
              style={{
                height: 6,
                background: 'rgba(60,30,10,0.18)',
                filter: 'blur(4px)',
              }}
            />
          </motion.div>
        ))}

        {/* Legenda */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="card mt-4"
        >
          <h3 className="text-sm font-bold text-text mb-3">Legenda</h3>
          <div className="flex flex-wrap gap-4 text-xs text-text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 rounded-sm" style={{ background: 'linear-gradient(160deg, #5c4fcf, #7b6fde)', opacity: 0.45 }} />
              <span>Niet begonnen</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 rounded-sm" style={{ background: 'linear-gradient(160deg, #5c4fcf, #7b6fde)', opacity: 0.75 }} />
              <span>Bezig</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-5 rounded-sm" style={{ background: 'linear-gradient(160deg, #5c4fcf, #7b6fde)' }} />
              <span>Grotendeels voltooid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1 rounded-full bg-white opacity-60" />
              <span>Witte balk onderaan = % voltooid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-text-muted">↔</div>
              <span>Breedte = aantal principes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BoekenplankPage;
