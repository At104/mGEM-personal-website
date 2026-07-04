# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/portfolio single-page app for **mGEM** — McMaster University's iGEM synthetic biology team. Content-heavy, animation-heavy, no backend.

## Stack & conventions

- **Vite + React 19** SPA (not Next.js — see below). TypeScript throughout.
- **React Router 7** with `BrowserRouter`. Routes are declared in [src/App.tsx](src/App.tsx); each maps to one page in [src/pages/](src/pages/). Deployment ([vercel.json](vercel.json)) rewrites all paths to `/index.html` for client-side routing.
- **Path alias**: `@/` -> `src/` (configured in [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json)). Note some files also use relative `../` imports — both work.
- **Tailwind** with a bespoke design system in [tailwind.config.ts](tailwind.config.ts): `paper`/`ink`/`forest` neutrals, `leaf` brand green, fluorescent-protein accents (`cyan`/`amber`/`gold`/`coral`/`violet`), and McMaster `maroon` used sparingly. Use these tokens rather than raw hex. Merge classes with `cn()` from [src/lib/utils.ts](src/lib/utils.ts).
- Fonts are loaded via `@fontsource-variable/*` in [src/main.tsx](src/main.tsx) and exposed as CSS vars / Tailwind families (`font-display`, `font-sans`, `font-montserrat`, `font-mono`).

### Legacy Next.js artifacts (ignore / do not follow)

This repo was migrated from Next.js. Stale leftovers remain: [README.md](README.md) (describes a Next.js app — inaccurate), `next-env.d.ts`, and `postcss.config.mjs`/`eslint.config.mjs` naming. `ClientOnly` and SSR-mismatch guards exist but this is a pure client SPA. Don't reintroduce Next.js APIs (`next/font`, `next/image`, app router, etc.).

## Content is data-driven

Copy and structured content are centralized, not hard-coded in JSX. When updating site text, edit the data source, not the page:

- [src/lib/content.ts](src/lib/content.ts) — information for nearly all pages to copy: stats, subteam descriptions, projects, testimonials, sponsorships, and blurbs.
- [src/data/membersData.json](src/data/membersData.json) — team roster, keyed by subteam group. Consumed by [src/components/TeamHelix.tsx](src/components/TeamHelix.tsx).
- [src/data/sponsors.ts](src/data/sponsors.ts) — sponsor description, logos, and tiers.
- Static assets (photos, videos) live in `public/` and are referenced by absolute path (e.g. `/photos/...`, `/Videos/...`).

## Limits

Set boundaries around involvement outside given prompts: 
- Never commit, push, pull, or use any git commands
- Do not read, edit, or access files outside of those explicitly named in the prompt
- Do not run "npm run dev" unprompted
