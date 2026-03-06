import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { allPrinciples, getCategories } from '../data/principles';
import { useUser } from '../context/UserContext';

const STATUS_FILTERS = [
  { value: 'alle', label: 'Alles' },
  { value: 'nieuw', label: '🆕 Nieuw' },
  { value: 'gelezen', label: '👁 Gelezen' },
  { value: 'kenIk', label: '✅ Ken ik' },
  { value: 'herlezen', label: '📖 Herlezen' },
  { value: 'bewaard', label: '⭐ Bewaard' },
];

const SORT_OPTIONS = [
  { value: 'titel', label: 'Naam A–Z' },
  { value: 'titelDesc', label: 'Naam Z–A' },
  { value: 'categorie', label: 'Categorie' },
  { value: 'moeilijkheid', label: 'Niveau ↑' },
  { value: 'moeilijkheidDesc', label: 'Niveau ↓' },
  { value: 'voortgang', label: 'Voortgang ↓' },
  { value: 'recent', label: 'Recent bekeken' },
];

const RegisterPage = () => {
  const navigate = useNavigate();
  const { userData, getPrincipleStatuses } = useUser();

  const [zoekterm, setZoekterm] = useState('');
  const [geselecteerdeCategorie, setGeselecteerdeCategorie] = useState('alle');
  const [geselecteerdNiveau, setGeselecteerdNiveau] = useState('alle');
  const [statusFilter, setStatusFilter] = useState('alle');
  const [sorteerOp, setSorteerOp] = useState('titel');
  const [bekijkModus, setBekijkModus] = useState('lijst'); // 'lijst' | 'categorieen'
  const [catSysteem, setCatSysteem] = useState('academic'); // 'academic' | 'skills'

  // Bouw categorieoverzicht
  const categorieStats = useMemo(() => {
    const catKey = catSysteem === 'academic' ? 'academicCategory' : 'skillCategory';
    const stats = {};
    allPrinciples.forEach(p => {
      const cat = p[catKey] || 'Onbekend';
      if (!stats[cat]) stats[cat] = { count: 0, principes: [] };
      stats[cat].count++;
      stats[cat].principes.push(p);
    });
    return Object.entries(stats)
      .map(([naam, data]) => ({ naam, ...data }))
      .sort((a, b) => b.count - a.count);
  }, [catSysteem]);

  const alleCategorieën = useMemo(() => {
    return getCategories(catSysteem);
  }, [catSysteem]);

  const getMasteryInfo = (principleId) => {
    const progress = userData?.principleProgress?.[principleId];
    return {
      mastery: progress?.masteryPercentage || 0,
      lastVisited: progress?.lastVisited || null,
    };
  };

  // Filter en sorteer principes
  const gefilterdePrincipes = useMemo(() => {
    const catKey = catSysteem === 'academic' ? 'academicCategory' : 'skillCategory';
    let lijst = [...allPrinciples];

    if (geselecteerdeCategorie !== 'alle') {
      lijst = lijst.filter(p => p[catKey] === geselecteerdeCategorie);
    }

    if (geselecteerdNiveau !== 'alle') {
      lijst = lijst.filter(p => (p.difficulty || 1) === parseInt(geselecteerdNiveau));
    }

    if (zoekterm.trim()) {
      const q = zoekterm.toLowerCase();
      lijst = lijst.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.definition || '').toLowerCase().includes(q) ||
        (p.academicCategory || '').toLowerCase().includes(q) ||
        (p.skillCategory || '').toLowerCase().includes(q)
      );
    }

    if (statusFilter !== 'alle') {
      lijst = lijst.filter(p => {
        const progress = userData?.principleProgress?.[p.id];
        const statuses = getPrincipleStatuses(p.id);
        if (statusFilter === 'nieuw') return !progress?.activities?.read;
        if (statusFilter === 'gelezen') return !!progress?.activities?.read;
        if (statusFilter === 'kenIk') return statuses.kenIk;
        if (statusFilter === 'herlezen') return statuses.herlezen;
        if (statusFilter === 'bewaard') return statuses.bewaard;
        return true;
      });
    }

    if (sorteerOp === 'titel') {
      lijst.sort((a, b) => a.title.localeCompare(b.title, 'nl'));
    } else if (sorteerOp === 'titelDesc') {
      lijst.sort((a, b) => b.title.localeCompare(a.title, 'nl'));
    } else if (sorteerOp === 'categorie') {
      lijst.sort((a, b) => (a[catKey] || '').localeCompare(b[catKey] || '', 'nl') || a.title.localeCompare(b.title, 'nl'));
    } else if (sorteerOp === 'moeilijkheid') {
      lijst.sort((a, b) => (a.difficulty || 1) - (b.difficulty || 1));
    } else if (sorteerOp === 'moeilijkheidDesc') {
      lijst.sort((a, b) => (b.difficulty || 1) - (a.difficulty || 1));
    } else if (sorteerOp === 'voortgang') {
      lijst.sort((a, b) => {
        const ma = userData?.principleProgress?.[a.id]?.masteryPercentage || 0;
        const mb = userData?.principleProgress?.[b.id]?.masteryPercentage || 0;
        return mb - ma;
      });
    } else if (sorteerOp === 'recent') {
      lijst.sort((a, b) => {
        const la = userData?.principleProgress?.[a.id]?.lastVisited || '';
        const lb = userData?.principleProgress?.[b.id]?.lastVisited || '';
        return lb.localeCompare(la);
      });
    }

    return lijst;
  }, [zoekterm, geselecteerdeCategorie, geselecteerdNiveau, statusFilter, sorteerOp, catSysteem, userData, getPrincipleStatuses]);

  const moeilijkheidLabel = (d) => {
    if (d === 1) return { label: 'Beginner', kleur: 'text-green-700 bg-green-50 border border-green-200' };
    if (d === 2) return { label: 'Gevorderd', kleur: 'text-amber-700 bg-amber-50 border border-amber-200' };
    return { label: 'Expert', kleur: 'text-red-700 bg-red-50 border border-red-200' };
  };

  const totaalBeheerst = allPrinciples.filter(p => {
    const progress = userData?.principleProgress?.[p.id];
    return progress?.masteryPercentage === 100;
  }).length;

  const totaalBewaard = allPrinciples.filter(p => getPrincipleStatuses(p.id).bewaard).length;

  const resetFilters = () => {
    setZoekterm('');
    setGeselecteerdeCategorie('alle');
    setGeselecteerdNiveau('alle');
    setStatusFilter('alle');
  };

  const heeftActieveFilters = zoekterm || geselecteerdeCategorie !== 'alle' || geselecteerdNiveau !== 'alle' || statusFilter !== 'alle';

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-surface/95">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/home')}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-text-muted hover:text-text hover:bg-bg-alt transition-colors"
                aria-label="Terug naar home"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <span className="text-lg">📋</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-text tracking-tight">Register</h1>
                <p className="text-xs text-text-muted">{allPrinciples.length} principes · {categorieStats.length} categorieën</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {totaalBewaard > 0 && (
                <div className="bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200 text-xs font-medium text-amber-700">
                  ⭐ {totaalBewaard}
                </div>
              )}
              <div className="bg-primary-50 px-3 py-1.5 rounded-full border border-primary-100 text-xs font-medium text-primary">
                {totaalBeheerst}/{allPrinciples.length} gelezen
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Weergave tabs + categorie systeem */}
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => setBekijkModus('lijst')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${bekijkModus === 'lijst' ? 'bg-primary text-white' : 'bg-surface border border-border text-text-muted hover:text-text'}`}
            >
              Lijst
            </button>
            <button
              onClick={() => setBekijkModus('categorieen')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${bekijkModus === 'categorieen' ? 'bg-primary text-white' : 'bg-surface border border-border text-text-muted hover:text-text'}`}
            >
              Per categorie
            </button>
          </div>
          <div className="inline-flex rounded-lg bg-bg-alt p-0.5 border border-border">
            <button
              onClick={() => setCatSysteem('academic')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${catSysteem === 'academic' ? 'bg-surface text-text shadow-sm' : 'text-text-muted hover:text-text'}`}
            >
              🎓 Academisch
            </button>
            <button
              onClick={() => setCatSysteem('skills')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${catSysteem === 'skills' ? 'bg-surface text-text shadow-sm' : 'text-text-muted hover:text-text'}`}
            >
              🎯 Vaardigheden
            </button>
          </div>
        </div>

        {bekijkModus === 'categorieen' ? (
          /* Categorieoverzicht tabel */
          <div className="bg-surface border border-border rounded-xl overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-bg-alt">
              <h2 className="font-semibold text-text">Categorieën overzicht</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-alt/50">
                    <th className="text-left px-4 py-3 font-medium text-text-muted">#</th>
                    <th className="text-left px-4 py-3 font-medium text-text-muted">Categorie</th>
                    <th className="text-right px-4 py-3 font-medium text-text-muted">Principes</th>
                    <th className="text-right px-4 py-3 font-medium text-text-muted">Gelezen</th>
                    <th className="text-right px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Voortgang</th>
                  </tr>
                </thead>
                <tbody>
                  {categorieStats.map((cat, index) => {
                    const beheerst = cat.principes.filter(p => {
                      const prog = userData?.principleProgress?.[p.id];
                      return prog?.masteryPercentage === 100;
                    }).length;
                    const pct = cat.count > 0 ? Math.round((beheerst / cat.count) * 100) : 0;
                    return (
                      <tr
                        key={cat.naam}
                        className="border-b border-border/50 hover:bg-bg-alt/40 cursor-pointer transition-colors"
                        onClick={() => { setGeselecteerdeCategorie(cat.naam); setBekijkModus('lijst'); }}
                      >
                        <td className="px-4 py-3 text-text-muted">{index + 1}</td>
                        <td className="px-4 py-3 font-medium text-text">{cat.naam}</td>
                        <td className="px-4 py-3 text-right text-text">{cat.count}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={beheerst === cat.count && cat.count > 0 ? 'text-green-600 font-medium' : 'text-text-muted'}>
                            {beheerst}/{cat.count}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-16 h-1.5 bg-bg-alt rounded-full overflow-hidden">
                              <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                            </div>
                            <span className="text-xs text-text-muted w-8 text-right">{pct}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-border bg-bg-alt/50">
                    <td className="px-4 py-3" colSpan={2}>
                      <span className="font-semibold text-text">Totaal</span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-text">{allPrinciples.length}</td>
                    <td className="px-4 py-3 text-right font-semibold text-primary">{totaalBeheerst}</td>
                    <td className="px-4 py-3 hidden sm:table-cell" />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          /* Lijst van principes */
          <>
            {/* Zoekbalk */}
            <div className="relative mb-3">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Zoek op naam, definitie of categorie..."
                value={zoekterm}
                onChange={e => setZoekterm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface text-text placeholder-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
              />
              {zoekterm && (
                <button onClick={() => setZoekterm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              )}
            </div>

            {/* Filter rij 1: Status */}
            <div className="flex gap-1.5 flex-wrap mb-2">
              {STATUS_FILTERS.map(f => (
                <button
                  key={f.value}
                  onClick={() => setStatusFilter(f.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                    statusFilter === f.value
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-surface border border-border text-text-muted hover:text-text hover:border-primary/40'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Filter rij 2: Niveau + Categorie + Sortering */}
            <div className="flex flex-wrap gap-2 mb-4">
              <select
                value={geselecteerdNiveau}
                onChange={e => setGeselecteerdNiveau(e.target.value)}
                className="px-3 py-2 rounded-xl border border-border bg-surface text-text focus:border-primary focus:outline-none text-xs"
              >
                <option value="alle">Alle niveaus</option>
                <option value="1">🟢 Beginner</option>
                <option value="2">🟡 Gevorderd</option>
                <option value="3">🔴 Expert</option>
              </select>
              <select
                value={geselecteerdeCategorie}
                onChange={e => setGeselecteerdeCategorie(e.target.value)}
                className="px-3 py-2 rounded-xl border border-border bg-surface text-text focus:border-primary focus:outline-none text-xs min-w-[160px]"
              >
                <option value="alle">Alle categorieën</option>
                {alleCategorieën.sort().map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={sorteerOp}
                onChange={e => setSorteerOp(e.target.value)}
                className="px-3 py-2 rounded-xl border border-border bg-surface text-text focus:border-primary focus:outline-none text-xs"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {heeftActieveFilters && (
                <button
                  onClick={resetFilters}
                  className="px-3 py-2 rounded-xl border border-border bg-surface text-text-muted hover:text-text text-xs transition-colors"
                >
                  ✕ Filters wissen
                </button>
              )}
            </div>

            <p className="text-xs text-text-muted mb-3">
              {gefilterdePrincipes.length} van {allPrinciples.length} principes
              {geselecteerdeCategorie !== 'alle' && <span> in <strong className="text-text">{geselecteerdeCategorie}</strong></span>}
            </p>

            {/* Tabel */}
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-bg-alt/50">
                      <th className="text-left px-4 py-3 font-medium text-text-muted w-8">#</th>
                      <th className="text-left px-4 py-3 font-medium text-text-muted">Principe</th>
                      <th className="text-left px-4 py-3 font-medium text-text-muted hidden md:table-cell">Categorie</th>
                      <th className="text-center px-4 py-3 font-medium text-text-muted hidden sm:table-cell">Niveau</th>
                      <th className="text-center px-4 py-3 font-medium text-text-muted hidden lg:table-cell">Status</th>
                      <th className="text-right px-4 py-3 font-medium text-text-muted">Voortgang</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gefilterdePrincipes.map((p, index) => {
                      const { mastery } = getMasteryInfo(p.id);
                      const diff = moeilijkheidLabel(p.difficulty);
                      const statuses = getPrincipleStatuses(p.id);
                      return (
                        <tr
                          key={p.id}
                          onClick={() => navigate(`/principle/${p.id}`)}
                          className="border-b border-border/50 hover:bg-bg-alt/40 cursor-pointer transition-colors"
                        >
                          <td className="px-4 py-3 text-text-muted text-xs">{index + 1}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{p.emoji || '📌'}</span>
                              <span className="font-medium text-text">{p.title}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-text-muted hidden md:table-cell text-xs">
                            {catSysteem === 'academic' ? p.academicCategory : p.skillCategory}
                          </td>
                          <td className="px-4 py-3 text-center hidden sm:table-cell">
                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${diff.kleur}`}>{diff.label}</span>
                          </td>
                          <td className="px-4 py-3 text-center hidden lg:table-cell">
                            <div className="flex items-center justify-center gap-1">
                              {statuses.kenIk && <span title="Ken ik" className="text-sm">✅</span>}
                              {statuses.herlezen && <span title="Herlezen" className="text-sm">📖</span>}
                              {statuses.bewaard && <span title="Bewaard" className="text-sm">⭐</span>}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            {mastery > 0 ? (
                              <div className="flex items-center justify-end gap-2">
                                <div className="w-16 h-1.5 bg-bg-alt rounded-full overflow-hidden">
                                  <div
                                    className="h-full rounded-full bg-primary transition-all"
                                    style={{ width: `${mastery}%` }}
                                  />
                                </div>
                                <span className={`text-xs font-medium ${mastery === 100 ? 'text-green-600' : 'text-primary'}`}>{mastery}%</span>
                              </div>
                            ) : (
                              <span className="text-xs text-text-muted">—</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {gefilterdePrincipes.length === 0 && (
                <div className="px-4 py-12 text-center text-text-muted">
                  <p className="text-3xl mb-3">🔍</p>
                  <p className="font-medium">Geen principes gevonden</p>
                  <p className="text-sm mt-1">Probeer een andere zoekterm of filter</p>
                  {heeftActieveFilters && (
                    <button onClick={resetFilters} className="mt-3 text-primary text-sm underline">Filters wissen</button>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
