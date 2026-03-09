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

1. **`UserContext.jsx`** — React Context wrapping the entire app. Provides `useUser()` hook used by all components. Holds `userData` in state, syncs to localStorage on change. This is the primary API used at runtime.
2. **`utils/localStorage.js`** — Lower-level localStorage utilities. Exports the same operations (markPrincipleAsRead, etc.) but reads/writes localStorage directly. Used by UserContext internally via `storage.loadUserData()`, `storage.saveUserData()`, and `storage.calculateMastery()`.

Components always go through `useUser()`, never call localStorage utils directly.

### Data Model

`src/data/principles.js` exports:
- `principles` — Array of ~100 principle objects. Each has: `id`, `title`, `difficulty` (1-3), `emoji`, `academicCategory`, `skillCategory`, `tags[]`, `definition`, `abstractExample`, `examples[]`, `prerequisites[]`, `unlocks[]`, `exercises[]`, `creativePrompt`, `aiHelperPrompts[]`
- `getCategories(system)` — Returns unique categories for 'academic' or 'skills' organization
- `getPrinciplesByCategory(category, system)` — Filters principles by category
- `getPrincipleById(id)` — Lookup by ID

Additional principle data files (`principlesExtra3-7.js`, `emotieregulatie*.js`, `gedachteExperimenten*.js`, `zelfvertrouwen*.js`, etc.) exist but are **not imported** anywhere currently.

### Progress & Gamification System

User progress per principle tracks four activities: `read` (+20%), `multipleChoiceCorrect` (+20%), `ownExample` (+30%), `aiAssistedExample` (+30%) = 100% mastery max. Points are awarded per activity. Completing exercises can unlock related principles via the `unlocks[]` field.

15 principles are unlocked by default (defined in `localStorage.js:getInitialUnlockedPrinciples`).

### Library Game (`LibraryPage.jsx`, ~5300 lines)

A 2D canvas-based exploration game where the player walks through a procedurally generated library. This is the largest and most complex file in the codebase.

**Key systems:**
- **Map generation** (`generateLibrary()`) — Organic layout with a central spine, branching wings, and variable room sizes. Uses seeded pseudo-random for deterministic generation. Rooms are assigned principle categories.
- **Tile types** — EMPTY(0), FLOOR(1), WALL(2), BOOKSHELF(3), DOOR(4), CARPET(5), PILLAR(6), TORCH(7), TABLE(8), PLANT(9). Walkable tiles: FLOOR, CARPET, DOOR.
- **Game loop** — `requestAnimationFrame` with delta-time movement. Canvas rendering with camera follow (lerp-based).
- **Fog of war** — `Float32Array` per-tile reveal grid, 3-tile visibility radius around player. Persists across page navigations via localStorage.
- **Save/load system** — Versioned saves in localStorage (`SAVE_VERSION` constant). Old saves are auto-invalidated when version changes. Auto-saves every 10 seconds. Player position also stored in sessionStorage for quick restore.
- **NPCs** — Themed characters at each room with speech bubbles recommending scrolls. NPC appearance (colors, hat style) maps to room category.
- **Particle systems** — Dust, sparks, leaves, moths, footprints, quill trails — all managed via refs.
- **Collision** — 10px hitbox corners checked against tile types.

**When modifying the library game:**
- Bump `SAVE_VERSION` if map generation changes (invalidates old saves)
- Bump the UI version string (e.g., `v1.7.0`) shown at bottom-left so users can verify they're running new code
- Player spawn uses `findSafeSpawn()` which spirals outward from hall center to find a walkable tile with room to move
- Movement uses `speed * dt` (delta-time), not fixed timestep

### Styling

Tailwind CSS v4 with CSS-based configuration (no `tailwind.config.js`). The entire design system is defined in `src/index.css` using `@theme {}` block — custom colors, fonts, spacing, shadows, radii. Three themes: classic (default), light, dark — applied via CSS class on root div (`theme-dark`, `theme-light`).

Custom utility classes defined in `index.css`: `.card`, `.btn-primary`, `.tag-pill`, `.progress-bar`, `.progress-fill`, `.decorative-border`, `.parchment`, `.scroll-reveal`.

## Versioning

**Always use semantic version numbers** when making changes:
- Bump the UI version string in `LibraryPage.jsx` (e.g., `v1.8.0` → `v1.9.0`) on every change to the library game
- Bump `SAVE_VERSION` in `LibraryPage.jsx` when map generation or save format changes
- Use MAJOR.MINOR.PATCH: major = breaking/overhaul, minor = new features, patch = bugfixes
- Never ship changes without updating the relevant version number

## Language

The app UI and all principle content are in **Dutch**. Keep all user-facing text in Dutch.
