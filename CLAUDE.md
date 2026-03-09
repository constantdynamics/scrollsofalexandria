# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start dev server (Vite, port 5173, host 0.0.0.0)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint (flat config)
```

No test framework is configured. There are no tests.

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Triggers on push to specific branches and `workflow_dispatch`. The workflow runs `npm ci && npm run build` and deploys `dist/` using `actions/deploy-pages@v4`.

The Vite `base` is set to `/scrollsofalexandria/` for GitHub Pages path.

## Architecture

**React 19 + Vite 7 + Tailwind CSS v4** single-page app with no backend. All data persists in localStorage.

### Routing

`App.jsx` uses `HashRouter` (required for GitHub Pages). Routes:
- `/` → Onboarding (redirects to `/home` if completed)
- `/home` → HomePage (redirects to `/` if onboarding not done)
- `/principle/:principleId` → PrinciplePage
- `/settings` → SettingsPage
- `/library` → LibraryPage (2D canvas exploration game)
- `/register` → RegisterPage

### State Management

Two-layer architecture with duplication (historical artifact):

1. **`UserContext.jsx`** — React Context wrapping the entire app. Provides `useUser()` hook used by all components. Holds `userData` in state, syncs to localStorage on change. This is the primary API used at runtime. Key methods: `updatePreference`, `updateUserField` (generic state updater), `getPrincipleProgress`, `markPrincipleAsRead`, `trackLearningStyleChoice`, `togglePrincipleStatus`, `resetUserData`, `updateStreak`.
2. **`utils/localStorage.js`** — Lower-level localStorage utilities. Exports the same operations but reads/writes localStorage directly. Used by UserContext internally via `storage.loadUserData()`, `storage.saveUserData()`, and `storage.calculateMastery()`.

Components always go through `useUser()`, never call localStorage utils directly.

### Data Model

`src/data/principles.js` exports:
- `principles` — Array of 120 core principle objects. Each has: `id`, `title`, `difficulty` (1-3), `emoji`, `academicCategory`, `skillCategory`, `definition`, `abstractExample`, `examples[]`, `relatedPrinciples[]`
- `allPrinciples` — Combined array of all principles: core 120 + all supplementary collections (principlesNew, gedachteExperimenten1-10, zelfvertrouwen1-39, emotieregulatie1-10, ethiek1, organisatie1, extraPrinciples3-7). All are imported and active.
- `CATEGORY_CHAIN_ORDER` — Curated array of ~93 categories in pedagogical learning order (14 tiers, from Logica → personal development)
- `getCategoryChainOrder(system)` — Returns categories in chain order for library walking path. Core categories first, then any uncategorized ones appended.
- `getCategories(system)` — Returns unique categories (unordered) for 'academic' or 'skills' organization
- `getPrinciplesByCategory(category, system)` — Filters principles by category
- `getPrincipleById(id)` — Lookup by ID

### User Data Structure (localStorage)

```
userId, points, principleProgress, principleStatuses ({kenIk, herlezen, bewaard}),
preferences ({organization, defaultLearningStyle, dailyReminder, reminderTime, theme, progressiveUnlock}),
learningStyleHistory, completedOnboarding,
streak ({currentStreak, longestStreak, lastActiveDate}),
bookmarks (principle IDs), libraryStamps ({[roomName]: timestamp}),
dailyMissions ({date, missions[], completed[]}),
characterLevel ({level, title, xp}),
annotations ({[principleId]: string}),
timeCapsules ([{principleId, note, createdAt, revealAt}])
```

### Progress & Gamification System

User progress per principle tracks four activities: `read` (+20%), `multipleChoiceCorrect` (+20%), `ownExample` (+30%), `aiAssistedExample` (+30%) = 100% mastery max. Points are awarded per activity.

Additional gamification: character levels (Novice→Filosoof, 10 tiers based on XP), daily missions (2 per day), library stamps (per room visit), trophy vitrine (8 trophies in entrance hall), streak tracking.

### Progressive Unlock Chain

The library uses a **linear chain-based unlock system** (enabled by default, toggle in Settings):
- Categories are ordered in `CATEGORY_CHAIN_ORDER` — a pedagogical progression from foundational (Logica, Retorica) to advanced (Systeemdenken, Ethiek)
- Rooms in the library map follow this order spatially: first categories at the bottom (near entrance hall), advanced at the top
- **Room N unlocks when ≥50% of principles in room N-1 are read** (first room always unlocked)
- Can be disabled via `preferences.progressiveUnlock = false` in Settings

### Library Game (`LibraryPage.jsx`, ~6200 lines)

A 2D canvas-based exploration game where the player walks through a procedurally generated library. This is the largest and most complex file in the codebase.

**Key systems:**
- **Map generation** (`generateLibrary()`) — Grid layout with rooms placed bottom-up in chain order (no shuffle). First categories near entrance hall, advanced categories furthest away. Uses seeded pseudo-random for room sizes and decoration. Includes a central rotonde between rooms grid and entrance hall.
- **Tile types** — EMPTY(0), FLOOR(1), WALL(2), BOOKSHELF(3), DOOR(4), CARPET(5), PILLAR(6), TORCH(7), TABLE(8), PLANT(9). Walkable tiles: FLOOR, CARPET, DOOR.
- **Game loop** — `requestAnimationFrame` with delta-time movement. Canvas rendering with camera follow (lerp-based).
- **Fog of war** — `Float32Array` per-tile reveal grid. Visibility radius scales with knowledge (3 base + 1 per 15 principles read, max 7). Persists via localStorage.
- **Save/load system** — Versioned saves in localStorage (`SAVE_VERSION` constant, currently 5). Old saves are auto-invalidated when version changes. Auto-saves every 10 seconds. Player position also stored in sessionStorage for quick restore.
- **NPCs** — Themed characters at each room with visit-aware speech bubbles. NPC appearance maps to room category. Gratitude messages when all room scrolls are read.
- **Particle systems** — Dust, sparks, smoke, leaves, moths, footprints, gold dust, milestone particles — all managed via refs.
- **Visual effects** — Cobwebs in locked rooms, candle wind near doors, mastery badges on 100% rooms, floating points animation, trophy vitrine in entrance hall.
- **Audio** — Web Audio API for unlock chimes (major chord) and milestone fanfares (arpeggio).
- **HUD** — Minimap (parchment-styled with progress bars), compass pointing to nearest unread room, stats panel, flashcard mode, book panel with annotations/bookmarks/time capsules.
- **Collision** — 10px hitbox corners checked against tile types.

**When modifying the library game:**
- Bump `SAVE_VERSION` if map generation changes (invalidates old saves)
- Bump the UI version string (e.g., `v2.6.0`) shown at bottom-left so users can verify they're running new code
- Player spawn uses `findSafeSpawn()` which spirals outward from hall center to find a walkable tile with room to move
- Movement uses `speed * dt` (delta-time), not fixed timestep

### Styling

Tailwind CSS v4 with CSS-based configuration (no `tailwind.config.js`). The entire design system is defined in `src/index.css` using `@theme {}` block — custom colors, fonts, spacing, shadows, radii. Three themes: classic (default), light, dark — applied via CSS class on root div (`theme-dark`, `theme-light`).

Custom utility classes defined in `index.css`: `.card`, `.btn-primary`, `.tag-pill`, `.progress-bar`, `.progress-fill`, `.decorative-border`, `.parchment`, `.scroll-reveal`.

## Versioning

**Always use semantic version numbers** when making changes:
- Bump the UI version string in `LibraryPage.jsx` (e.g., `v2.6.0` → `v2.7.0`) on every change to the library game
- Bump `SAVE_VERSION` in `LibraryPage.jsx` when map generation or save format changes
- Bump `version` in `package.json` to match
- Use MAJOR.MINOR.PATCH: major = breaking/overhaul, minor = new features, patch = bugfixes
- Never ship changes without updating the relevant version number

## Language

The app UI and all principle content are in **Dutch**. Keep all user-facing text in Dutch.
