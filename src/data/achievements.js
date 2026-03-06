// Achievements definitie — 25+ prestaties
// Elke achievement heeft: id, title, description, emoji, category, condition(userData, allPrinciples)

export const ACHIEVEMENTS = [
  // === LEZEN ===
  {
    id: 'eerste_stap',
    title: 'Eerste stap',
    description: 'Lees je eerste principe',
    emoji: '🌱',
    category: 'Lezen',
    condition: (ud) => {
      const gelezen = Object.values(ud.principleProgress || {}).filter(p => p.activities?.read).length;
      return gelezen >= 1;
    },
  },
  {
    id: 'lezer_10',
    title: 'Leergierige',
    description: '10 principes gelezen',
    emoji: '📖',
    category: 'Lezen',
    condition: (ud) => {
      return Object.values(ud.principleProgress || {}).filter(p => p.activities?.read).length >= 10;
    },
  },
  {
    id: 'lezer_25',
    title: 'Scholier van Alexandrië',
    description: '25 principes gelezen',
    emoji: '📚',
    category: 'Lezen',
    condition: (ud) => {
      return Object.values(ud.principleProgress || {}).filter(p => p.activities?.read).length >= 25;
    },
  },
  {
    id: 'lezer_50',
    title: 'Halfweg de bibliotheek',
    description: '50 principes gelezen',
    emoji: '🏛️',
    category: 'Lezen',
    condition: (ud) => {
      return Object.values(ud.principleProgress || {}).filter(p => p.activities?.read).length >= 50;
    },
  },
  {
    id: 'lezer_100',
    title: 'Bibliothecaris',
    description: 'Alle 100 principes gelezen',
    emoji: '👑',
    category: 'Lezen',
    condition: (ud, all) => {
      const gelezen = Object.values(ud.principleProgress || {}).filter(p => p.activities?.read).length;
      return gelezen >= (all?.length || 100);
    },
  },

  // === PUNTEN ===
  {
    id: 'punten_100',
    title: 'Eerste honderd',
    description: '100 punten verzameld',
    emoji: '💰',
    category: 'Punten',
    condition: (ud) => (ud.points || 0) >= 100,
  },
  {
    id: 'punten_500',
    title: 'Schatkist',
    description: '500 punten verzameld',
    emoji: '💎',
    category: 'Punten',
    condition: (ud) => (ud.points || 0) >= 500,
  },
  {
    id: 'punten_1000',
    title: 'Rijkdom des geestes',
    description: '1000 punten verzameld',
    emoji: '🏆',
    category: 'Punten',
    condition: (ud) => (ud.points || 0) >= 1000,
  },

  // === REEKS (STREAK) ===
  {
    id: 'streak_3',
    title: 'Op dreef',
    description: '3 dagen op rij gestudeerd',
    emoji: '🔥',
    category: 'Reeks',
    condition: (ud) => (ud.streak?.currentStreak || 0) >= 3 || (ud.streak?.longestStreak || 0) >= 3,
  },
  {
    id: 'streak_7',
    title: 'Weekkampioen',
    description: '7 dagen op rij gestudeerd',
    emoji: '🌟',
    category: 'Reeks',
    condition: (ud) => (ud.streak?.currentStreak || 0) >= 7 || (ud.streak?.longestStreak || 0) >= 7,
  },
  {
    id: 'streak_30',
    title: 'IJzeren wil',
    description: '30 dagen op rij gestudeerd',
    emoji: '⚡',
    category: 'Reeks',
    condition: (ud) => (ud.streak?.currentStreak || 0) >= 30 || (ud.streak?.longestStreak || 0) >= 30,
  },

  // === CATEGORIEËN ===
  {
    id: 'categorie_logica',
    title: 'Logicus',
    description: 'Alle Logica-principes gelezen',
    emoji: '🔗',
    category: 'Categorieën',
    condition: (ud, all) => {
      const cat = (all || []).filter(p => p.academicCategory === 'Logica');
      return cat.length > 0 && cat.every(p => ud.principleProgress?.[p.id]?.activities?.read);
    },
  },
  {
    id: 'categorie_psychologie',
    title: 'Psycholoog',
    description: 'Alle Psychologie-principes gelezen',
    emoji: '🧠',
    category: 'Categorieën',
    condition: (ud, all) => {
      const cat = (all || []).filter(p => p.academicCategory === 'Psychologie');
      return cat.length > 0 && cat.every(p => ud.principleProgress?.[p.id]?.activities?.read);
    },
  },
  {
    id: 'categorie_ethiek',
    title: 'Ethicus',
    description: 'Alle Ethiek-principes gelezen',
    emoji: '⚖️',
    category: 'Categorieën',
    condition: (ud, all) => {
      const cat = (all || []).filter(p => p.academicCategory === 'Ethiek');
      return cat.length > 0 && cat.every(p => ud.principleProgress?.[p.id]?.activities?.read);
    },
  },
  {
    id: 'drie_categorieen',
    title: 'Veelzijdig denker',
    description: '3 volledige academische categorieën afgerond',
    emoji: '🎓',
    category: 'Categorieën',
    condition: (ud, all) => {
      if (!all) return false;
      const cats = [...new Set(all.map(p => p.academicCategory))];
      const volledigCats = cats.filter(cat => {
        const catPrinciples = all.filter(p => p.academicCategory === cat);
        return catPrinciples.length > 0 && catPrinciples.every(p => ud.principleProgress?.[p.id]?.activities?.read);
      });
      return volledigCats.length >= 3;
    },
  },

  // === SPELEN ===
  {
    id: 'raadspel_1',
    title: 'Eerste raad',
    description: 'De blinde definitie één keer gespeeld',
    emoji: '🎭',
    category: 'Spelen',
    condition: (ud) => (ud.gamesPlayed?.blindeDefinitie || 0) >= 1,
  },
  {
    id: 'raadspel_10',
    title: 'Raadsheer',
    description: 'De blinde definitie 10 keer gespeeld',
    emoji: '🎩',
    category: 'Spelen',
    condition: (ud) => (ud.gamesPlayed?.blindeDefinitie || 0) >= 10,
  },
  {
    id: 'herhaling_1',
    title: 'Eerste herhaling',
    description: 'De herhalingsdeck één keer gebruikt',
    emoji: '⚡',
    category: 'Spelen',
    condition: (ud) => (ud.herhalingSessies || 0) >= 1,
  },
  {
    id: 'herhaling_10',
    title: 'Herhaal-held',
    description: 'De herhalingsdeck 10 keer gebruikt',
    emoji: '🔄',
    category: 'Spelen',
    condition: (ud) => (ud.herhalingSessies || 0) >= 10,
  },

  // === BEWAARD ===
  {
    id: 'bewaard_5',
    title: 'Verzamelaar',
    description: '5 principes opgeslagen als favoriet',
    emoji: '⭐',
    category: 'Verzamelen',
    condition: (ud) => {
      const bewaard = Object.values(ud.principleStatuses || {}).filter(s => s.bewaard).length;
      return bewaard >= 5;
    },
  },
  {
    id: 'bewaard_20',
    title: 'Schatzoekers',
    description: '20 principes opgeslagen als favoriet',
    emoji: '💫',
    category: 'Verzamelen',
    condition: (ud) => {
      const bewaard = Object.values(ud.principleStatuses || {}).filter(s => s.bewaard).length;
      return bewaard >= 20;
    },
  },

  // === UITDAGINGEN ===
  {
    id: 'uitdaging_1',
    title: 'Eerste uitdaging',
    description: 'Een dagelijkse uitdaging voltooid',
    emoji: '🎯',
    category: 'Uitdagingen',
    condition: (ud) => (ud.uitdagingenVoltooid || 0) >= 1,
  },
  {
    id: 'uitdaging_7',
    title: 'Uitdagingsreeks',
    description: '7 dagelijkse uitdagingen voltooid',
    emoji: '🏅',
    category: 'Uitdagingen',
    condition: (ud) => (ud.uitdagingenVoltooid || 0) >= 7,
  },
  {
    id: 'uitdaging_30',
    title: 'Uitdagingskampioen',
    description: '30 dagelijkse uitdagingen voltooid',
    emoji: '🥇',
    category: 'Uitdagingen',
    condition: (ud) => (ud.uitdagingenVoltooid || 0) >= 30,
  },

  // === MENTOR ===
  {
    id: 'mentor_gezet',
    title: 'Leermeester',
    description: 'Je eerste principe van de maand gekozen',
    emoji: '🌟',
    category: 'Mentor',
    condition: (ud) => !!ud.preferences?.mentorPrincipleId,
  },

  // === VERRASSING ===
  {
    id: 'nachtbraker',
    title: 'Nachtbraker',
    description: 'Na middernacht een principe gelezen',
    emoji: '🌙',
    category: 'Verrassing',
    condition: (ud) => (ud.nachtSessies || 0) >= 1,
  },
  {
    id: 'vroege_vogel',
    title: 'Vroege vogel',
    description: 'Voor 07:00 een principe gelezen',
    emoji: '🌅',
    category: 'Verrassing',
    condition: (ud) => (ud.vroegeSessies || 0) >= 1,
  },
];

// Groepeer per categorie
export const ACHIEVEMENT_CATEGORIES = [
  'Lezen', 'Punten', 'Reeks', 'Categorieën', 'Spelen', 'Verzamelen', 'Uitdagingen', 'Mentor', 'Verrassing'
];

// Bereken welke achievements ontgrendeld zijn
export const checkAchievements = (userData, allPrinciples) => {
  if (!userData) return [];
  return ACHIEVEMENTS.filter(a => {
    try {
      return a.condition(userData, allPrinciples);
    } catch {
      return false;
    }
  }).map(a => a.id);
};

// Vind nieuw ontgrendelde achievements (vergelijk oud en nieuw)
export const findNewAchievements = (oldUnlocked, newUnlocked) => {
  const oldSet = new Set(oldUnlocked || []);
  return newUnlocked.filter(id => !oldSet.has(id));
};

export default ACHIEVEMENTS;
