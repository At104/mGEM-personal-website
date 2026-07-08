# mGEM — McMaster iGEM Website

The official website for McMaster University's iGEM team. Built with React 19, TypeScript, and Vite.

## Stack

| Tool | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite | Build tool and dev server |
| React Router v7 | Client-side routing |
| Tailwind CSS v3 | Styling |
| GSAP + ScrollTrigger | Scroll animations |
| Three.js | DNA helix visualizations |

## Commands

```bash
npm run dev      # Dev server at localhost:5173
npm run build    # Production build
npm run preview  # Serve the production build locally
npm run lint     # ESLint
```

## Project Structure

```
src/
├── pages/           # One file per route
│   ├── Home.tsx          # /
│   ├── AboutUs.tsx       # /about-us
│   ├── OurTeam.tsx       # /our-team
│   ├── Projects.tsx      # /projects
│   ├── Sponsors.tsx      # /sponsors
│   └── GetInvolved.tsx   # /get-involved
├── components/
│   ├── home/        # Hero, StatStrip, WhatIsIgem, DnaFlowBackground
│   ├── about/       # DnaShowcase, DnaScene
│   ├── team/        # TeamHelix, TeamDnaScene, MemberCard, MemberProfilePanel
│   ├── layout/      # Navbar, Footer
│   ├── ui/          # Shared: Reveal, SplitChars, ButtonLink, PageHeader, …
│   └── get-involved/ # MailingListForm
├── lib/
│   ├── content.ts   # Single source of truth for all static copy
│   ├── teamConfig.ts
│   ├── gsap.ts      # GSAP plugin registration + prefersReducedMotion()
│   └── utils.ts     # cn() utility
└── data/
    ├── membersData.json   # Team roster consumed by OurTeam page
    └── sponsors.ts        # Sponsor tiers and metadata
```

## Content

All static text lives in `src/lib/content.ts`. Edit there to change copy — stats, subteam descriptions, project data, testimonials, social links, etc. — without touching page components.

Team members are managed via `src/data/membersData.json`. Each subteam is a key (`wetlab`, `drylab`, `hp`, `media`, `finance`, `webDev`) mapping to an array of member objects.

## Assets

```
public/
├── photos/
│   ├── home/        # Homepage showcase photos
│   ├── about-us/    # About page photos
│   ├── headshots/   # Team member headshots
│   ├── projects/    # Project images
│   └── sponsors/    # Sponsor logos
└── Videos/          # MP4s used in hero and project cards
```

Reference assets with root-relative paths: `/photos/home/example.jpg`.

## Animation

- Wrap scroll-reveal elements in `<Reveal>` (`src/components/ui/Reveal.tsx`) rather than writing raw GSAP.
- Always import GSAP from `@/lib/gsap` — never directly from `gsap`. This ensures plugins are registered once and `prefersReducedMotion()` is available.
- Three.js scenes are expensive — they stay wrapped in `<ClientOnly>` and are avoided on mobile.
