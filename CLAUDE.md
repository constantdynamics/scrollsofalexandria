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

Additional principle data files (`principlesExtra3-7.js`) exist but are **not imported** anywhere currently.

### Progress & Gamification System

User progress per principle tracks four activities: `read` (+20%), `multipleChoiceCorrect` (+20%), `ownExample` (+30%), `aiAssistedExample` (+30%) = 100% mastery max. Points are awarded per activity. Completing exercises can unlock related principles via the `unlocks[]` field.

15 principles are unlocked by default (defined in `localStorage.js:getInitialUnlockedPrinciples`).

### Styling

Tailwind CSS v4 with CSS-based configuration (no `tailwind.config.js`). The entire design system is defined in `src/index.css` using `@theme {}` block — custom colors, fonts, spacing, shadows, radii. Three themes: classic (default), light, dark — applied via CSS class on root div (`theme-dark`, `theme-light`).

Custom utility classes defined in `index.css`: `.card`, `.btn-primary`, `.tag-pill`, `.progress-bar`, `.progress-fill`, `.decorative-border`, `.parchment`, `.scroll-reveal`.

## Language

The app UI and all principle content are in **Dutch**. Keep all user-facing text in Dutch.
