# 📜 Scrolls of Wisdom

Een retro-gestylede leer-app die gebruikers helpt generieke denkprincipes te leren uit logica, filosofie, behavioral economics, speltheorie, en andere alfawetenschappen.

## 🎯 Concept

Scrolls of Wisdom is ontworpen om levenslang leerders te helpen hun denkvaardigheden aan te scherpen door universeel toepasbare principes te leren. De app combineert een unieke retro scroll-esthetiek met moderne leertechnieken en gamification elementen.

## ✨ Features

### MVP Functionaliteit
- ✅ **15 Starter Principes** met volledige content uit diverse categorieën
- ✅ **Dual Organisatie Systemen**: Kies tussen Academisch (Logica, Ethiek, etc.) of Vaardigheden (Beter Argumenteren, etc.)
- ✅ **Intelligent Learning Style Detection**: App leert je voorkeur na 3-5 principes
- ✅ **Interactive Oefeningen**:
  - Multiple choice herkenning met Socratische feedback
  - Creatieve oefeningen met self-validation
  - AI helper voor begeleiding (simulatie)
- ✅ **Progress Tracking**: Mastery percentage per principe
- ✅ **Points System**: Verdien punten door te leren en voorbeelden te bedenken
- ✅ **Unlock System**: Ontgrendel gerelateerde principes naarmate je leert
- ✅ **Retro Scroll Esthetiek**: Perkament texturen, serif fonts, decoratieve borders
- ✅ **LocalStorage Persistence**: Je voortgang wordt opgeslagen

### Categorieën & Content
- **Logica**: Modus Ponens, Affirming the Consequent, Set Theory, Deductie vs Inductie
- **Behavioral Economics**: Sunk Cost Fallacy, Opportunity Cost, Anchoring Effect
- **Speltheorie**: Prisoner's Dilemma
- **Cognitieve Biases**: Confirmation Bias, Availability Heuristic
- **Retorica**: Straw Man Fallacy, Ad Hominem, False Dilemma
- **Causaliteit**: Correlatie vs Causatie, Post Hoc Ergo Propter Hoc

## 🚀 Getting Started

### Installatie

```bash
# Clone de repository
git clone https://github.com/yourusername/scrollsofalexandria.git
cd scrollsofalexandria

# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm run build

# Preview productie build
npm run preview
```

### Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **TailwindCSS 4** - Styling met custom retro theme
- **Framer Motion** - Animaties
- **React Router** - Navigatie
- **LocalStorage** - Data persistence (geen backend nodig voor MVP)

## 📚 Project Structuur

```
src/
├── components/          # Herbruikbare UI componenten
│   ├── MultipleChoiceExercise.jsx
│   ├── CreativeExercise.jsx
│   └── UnlockNotification.jsx
├── pages/              # Pagina componenten
│   ├── Onboarding.jsx
│   ├── HomePage.jsx
│   ├── PrinciplePage.jsx
│   └── SettingsPage.jsx
├── data/               # Principes data
│   └── principles.js
├── context/            # React Context voor state management
│   └── UserContext.jsx
├── utils/              # Utility functies
│   └── localStorage.js
├── App.jsx             # Main app met routing
└── index.css           # Global styles met custom theme
```

## 🎮 Hoe het werkt

### Onboarding Flow
1. **Welkom scherm**: Introductie tot Scrolls of Wisdom
2. **Hoe het werkt**: Uitleg van de 3-staps leerflow
3. **Organisatie keuze**: Kies tussen Academisch of Vaardigheden

### Leerflow per Principe
1. **Kies learning style**: Definitie eerst of Voorbeeld eerst
2. **Lees content**: Definitie, abstracte en concrete voorbeelden
3. **Doe oefeningen**:
   - Multiple choice herkenning
   - Creëer je eigen voorbeeld
4. **Verdien punten en unlock nieuwe principes**

### Progress Systeem
- **Read** = 20% mastery + 10 punten
- **Multiple Choice Correct** = +20% mastery + 15 punten
- **Own Example** = +30% mastery + 25 punten
- **AI Assisted Example** = +30% mastery + 20 punten
- **Maximum**: 100% mastery per principe

## 🎨 Design Systeem

### Retro Scroll Theme
- **Kleuren**: Warme, gedempte tonen (parchment, sepia, gold, bronze)
- **Fonts**:
  - Playfair Display (serif) voor headings
  - Inter (sans-serif) voor body text
- **Effecten**: Perkament textuur, decoratieve borders, scroll reveal animaties
- **Components**: Custom tag pills, progress bars, cards met hover effecten

## 📈 Toekomstige Features

- [ ] Backend + user accounts
- [ ] 85 extra principes (totaal 100)
- [ ] Echte AI integration voor chat helper
- [ ] Search functionaliteit
- [ ] Advanced unlock logic gebaseerd op prerequisities
- [ ] Spaced repetition reminders
- [ ] Social features (delen van voorbeelden)
- [ ] Export progress feature
- [ ] Daily notifications
- [ ] Dark mode & light mode themes

## 🤝 Contributing

Contributions zijn welkom! Voel je vrij om issues te openen of pull requests in te dienen.

## 📝 License

MIT License - zie LICENSE file voor details

## 🙏 Credits

Gemaakt met Claude Code en veel liefde voor filosofie en kritisch denken.

---

**Scrolls of Wisdom** - _Leer generieke denkprincipes die je overal kunt toepassen_ 📜
