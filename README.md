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
- Project showcase with category filters, live-site screenshots, and per-project detail pages
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

## Projects

The Projects page (`/projects`) showcases 11 live projects, filterable by category. Each project has its own detail page with a description, key features, verified technologies, and a link to the live website. Project content lives in `data/projects.ts`.

### Product Builds

| Project | Category | Live Website |
| --- | --- | --- |
| **ProposalHub** — client-side proposal and document-generation platform with line-item pricing, analytics, and PDF export | SaaS Platform | https://proposalhub-eta.vercel.app/ |
| **Multi-Tenant SaaS App (SignalBoard)** — multi-tenant customer feedback platform with tenant isolation enforced by Postgres Row Level Security | SaaS Platform | https://multi-tenant-saas-agljaxk9l-faiza-ijaz0s-projects.vercel.app/ |
| **ColdPilot** — client-side cold email platform that generates and scores multi-email sequences from proven copywriting frameworks | SaaS Platform | https://coldpilot-sandy.vercel.app/ |
| **Finance Tracker** — personal finance dashboard for income, expenses, budgets, and savings with rule-based insights | Web Application | https://finance-tracker-alpha-three-84.vercel.app/ |

### Client Websites

| Project | Category | Live Website |
| --- | --- | --- |
| **HK Motors** — car dealership website with a filterable vehicle inventory and per-vehicle listing pages | Automotive | https://hk-motors.vercel.app/ |
| **Homework UAE** — cleaning-services website for Dubai and Abu Dhabi with starting prices, bundles, and online booking and quote flows | Cleaning Services | https://www.homeworkuae.com/ |
| **Man of Cave** — men's grooming-studio platform with multi-step appointment booking, a product shop, and customer accounts | Beauty & Wellness | https://manofcave.ae/ |
| **Jam Beauty Lounge** — multi-branch ladies' salon website with dedicated service pages and WhatsApp-based booking | Beauty & Wellness | https://jambeautylounge.com/ |
| **Mirrors Beauty Lounge** — salon and home-service booking platform with branch, staff, and time-slot selection | Beauty & Wellness | https://mirrorsbeautylounge.ae/ |
| **Silvermaid** — Dubai cleaning-services website with categorized services, multi-step booking, and quote requests | Cleaning Services | https://silvermaid-cg2i.vercel.app/ |
| **Ragdoll Properties** — Dubai real estate platform with buy/rent listings, off-plan projects, agents, and market insights | Real Estate | https://ragdolproperties.com/ |

Project thumbnails in `public/projects/` are homepage screenshots captured from each live website. Projects without a screenshot fall back to a generated visual.

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
  projects/            Live-site screenshots used on project cards and detail pages
```

## Quality

- Type-checked with `npx tsc --noEmit`
- Linted with `npm run lint` (ESLint, `eslint-config-next`)
- Verified with a production build (`npm run build`)

No automated test suite is included in this repository.

## Design

The portfolio follows a dark-first, luxury editorial aesthetic — a restrained warm accent color against a near-black base, serif display type paired with a clean sans body face, and generous whitespace over dense layouts. A light theme is fully supported and maintains the same visual system. Motion is used deliberately (scroll reveals, hover states, page transitions) rather than decoratively, and the layout is typography-focused throughout, with real project screenshots as the only imagery.

## Contact

Email: [faizaijjaz@gmail.com](mailto:faizaijjaz@gmail.com)
GitHub: https://github.com/faiza-ijaz0
LinkedIn: https://www.linkedin.com/in/faiza-ijjaz
