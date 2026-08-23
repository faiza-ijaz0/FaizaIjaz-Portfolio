# Faiza Ijaz — Software Engineer

This is the source for my personal software engineering portfolio — built to showcase roughly four years of production engineering experience across full-stack development, modern web applications, frontend and backend engineering, software architecture, testing and quality, performance, and applied AI integrations, alongside a set of selected production projects.

## Overview

The portfolio is a Next.js (App Router) site presenting my background, engineering capabilities, services, skills, and a curated set of real, deployed projects with detailed case studies — problem, approach, architecture, and outcomes — rather than a static resume or a generic template site.

## Live Website

No confirmed production deployment URL at this time. `data/site.ts` configures a production domain (`https://faizaijaz.dev`) for metadata purposes, but it is not currently resolving, so it isn't listed here as a live link.

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** — page and section entrance animations, interactive transitions
- **Lucide React** — icon set

## Features

- Luxury, editorial-style responsive UI
- Dark/light theme with a persisted preference
- Responsive navigation with an animated mobile menu
- Project showcase with detailed, per-project case studies
- Framer Motion scroll-reveal and micro-interaction animations
- Accessibility considerations — skip-to-content link, keyboard-navigable interactive elements, visible focus states, reduced-motion support
- SEO metadata (per-page titles/descriptions, Open Graph)
- Dynamically generated sitemap (`app/sitemap.ts`)
- Robots configuration (`app/robots.ts`)
- Fully responsive layout across mobile, tablet, and desktop
- Print-friendly base styles (`app/globals.css`) — navigation and footer are hidden when printing

## Pages

- **Home** (`/`) — hero, positioning, engineering capabilities, skills preview, services preview, career journey preview, and a contact call-to-action
- **About** (`/about`) — introduction and career trajectory
- **Services** (`/services`) — engineering services offered
- **Skills** (`/skills`) — categorized technical skill set
- **Projects** (`/projects`) — project showcase grid
- **Contact** (`/contact`) — direct contact information

Individual project case studies are served from a dynamic route, `app/projects/[slug]/page.tsx`, statically generated per project via `generateStaticParams`.

## Featured Projects

**ProposalHub** — A client-side proposal and document-generation platform with structured forms, validation, line-item pricing, analytics, and PDF export.
GitHub: https://github.com/faiza-ijaz0/Proposalhub
Live Demo: https://proposalhub-eta.vercel.app/

**Multi-Tenant SaaS App (SignalBoard)** — A multi-tenant customer feedback platform with isolated organizations and tenant data isolation enforced by Postgres Row Level Security.
GitHub: https://github.com/faiza-ijaz0/multi-tenant-SaaSApp
Live Demo: https://multi-tenant-saas-agljaxk9l-faiza-ijaz0s-projects.vercel.app/

**ColdPilot** — A client-side cold email outreach platform that generates and scores multi-email sequences using proven copywriting frameworks with niche-specific personalization.
GitHub: https://github.com/faiza-ijaz0/coldpilot
Live Demo: https://coldpilot-sandy.vercel.app/

**Finance Tracker** — A personal finance dashboard for tracking income, expenses, budgets, and savings, with rule-based insights and a fully client-side data layer.
GitHub: https://github.com/faiza-ijaz0/FinanceTracker
Live Demo: https://finance-tracker-alpha-three-84.vercel.app/

## Development Setup

```bash
git clone https://github.com/faiza-ijaz0/FaizaIjaz-Portfolio.git
cd FaizaIjaz-Portfolio
npm install
npm run dev
```

Open http://localhost:3000.

Available scripts (`package.json`):

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build
npm run lint     # eslint
```

## Environment Variables

None required. This portfolio makes no external API calls and has no server-side configuration.

## Project Structure

```
app/                Next.js App Router pages
  about/               About page
  contact/             Contact page
  projects/            Project showcase (grid + dynamic [slug] case studies)
  services/            Services page
  skills/              Skills page
components/
  layout/              Navbar, footer, theme provider/toggle
  sections/             Page sections (hero, capabilities, project cards, etc.)
  ui/                   Shared UI primitives (button, badge, container, reveal, icons, ...)
data/                Typed content: site config, nav, projects, services, skills, capabilities, experience
lib/                 Shared utilities
public/              Static assets
```

## Quality

- Type-checked with `npx tsc --noEmit`
- Linted with `npm run lint` (ESLint, `eslint-config-next`)
- Verified with a production build (`npm run build`)

No automated test suite is included in this repository.

## Design

The portfolio follows a dark-first, luxury editorial aesthetic — a restrained warm accent color against a near-black base, serif display type paired with a clean sans body face, and generous whitespace over dense layouts. A light theme is fully supported and maintains the same visual system. Motion is used deliberately (scroll reveals, hover states, page transitions) rather than decoratively, and the layout is typography-focused throughout, letting content — not imagery — carry each page.

## Contact

Email: [faizaijjaz@gmail.com](mailto:faizaijjaz@gmail.com)
GitHub: https://github.com/faiza-ijaz0
LinkedIn: https://www.linkedin.com/in/faiza-ijjaz
