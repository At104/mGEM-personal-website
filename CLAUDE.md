# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173)
npm run build     # TypeScript compile + Vite production build
npm run preview   # Serve the production build locally
npm run lint      # ESLint over the entire project
```

**Dev server:** Always assume it is already running at http://localhost:5173. Never start it. Never open the browser.

There are no tests in this project.

## Architecture

React 19 + TypeScript SPA built with Vite. React Router v7 handles client-side routing. All routes are defined in `src/App.tsx` — Navbar and Footer wrap the `<Routes>` tree.

**Pages** (`src/pages/`): One file per route (`/`, `/about-us`, `/our-team`, `/projects`, `/sponsors`, `/get-involved`). Pages compose shared components.

**Components** (`src/components/`): Reusable UI. Notable patterns:
- `Reveal.tsx` — scroll-triggered entrance animation wrapper (GSAP + ScrollTrigger). Use for any element that should animate in on scroll.
- `SplitChars.tsx` — per-character text animation.
- `DnaScene.tsx` / `DnaFlowBackground.tsx` / `TeamDnaScene.tsx` — Three.js DNA helix renders used as decorative backgrounds.
- `ClientOnly.tsx` — renders children only after hydration (guards Three.js canvases from SSR).

**Content** (`src/lib/content.ts`): Single source of truth for all static copy — stats, subteam descriptions, project data, testimonials, social links, etc. Edit this file to change site text rather than hunting through page components.

**Utilities**:
- `src/lib/gsap.ts` — registers GSAP plugins once (`ScrollTrigger`, `useGSAP`) and exports a `prefersReducedMotion()` guard. Always import GSAP from here, never directly from `gsap`.
- `src/lib/utils.ts` — exports `cn()` (clsx + tailwind-merge).
- `src/lib/teamConfig.ts` — team member display configuration.
- `src/lib/dnaHelix.ts` — geometry helpers for Three.js helix.

**Data** (`src/data/membersData.json`): Member roster JSON consumed by the team page.

**Aliases**: `@` maps to `src/` (configured in `vite.config.ts`).

## Styling

Tailwind CSS v3 with a custom theme defined in `tailwind.config.ts`. Key token groups:
- `paper` / `ink` — light-mode base (warm off-white background, dark green text)
- `forest` — inverted/dark section backgrounds
- `leaf` — primary brand green
- `maroon` — McMaster maroon (used sparingly as an accent)
- `cyan`, `amber`, `gold`, `coral`, `violet` — fluorescent-protein accent palette

Fonts (all variable): `font-display` (Bricolage Grotesque), `font-sans` (Inter), `font-montserrat`, `font-mono` (JetBrains Mono).

Global styles in `src/globals.css`. Custom utility classes like `.bg-dots` and `.bg-dots-dark` are defined there.

## Animation conventions

- Wrap scroll-reveal elements in `<Reveal>` rather than writing raw GSAP.
- Always check `prefersReducedMotion()` before running GSAP animations (the `Reveal` component does this automatically).
- Three.js scenes (`DnaScene`, `TeamDnaScene`) are computationally expensive — keep them wrapped in `ClientOnly` and avoid mounting them unconditionally on mobile.
- Framer Motion is installed and preferred for component-level animations (entrance, hover, layout). Import from `framer-motion`.

## Assets

Static assets live in `public/`. Photo sets are organized under `public/photos/{about-us,home,headshots,projects,sponsors}/`. Videos are under `public/Videos/`. Reference them with root-relative paths (e.g., `/photos/home/WetLab_TeamPhoto.jpg`).
