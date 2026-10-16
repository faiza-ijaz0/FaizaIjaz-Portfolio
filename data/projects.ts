export type ProjectCategory =
  | "SaaS Platform"
  | "Web Application"
  | "Automotive"
  | "Cleaning Services"
  | "Beauty & Wellness"
  | "Real Estate";

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  year?: string;
  /** Empty array when the technology stack hasn't been verified yet. */
  technologies: string[];
  features?: string[];
  problem?: string;
  approach?: string;
  architecture?: string[];
  challenges?: ProjectChallenge[];
  results?: string[];
  /** Leave undefined rather than guessing — the UI hides the CTA when unset. */
  liveUrl?: string;
  /** Real homepage screenshot in /public/projects; the generated visual is used when unset. */
  image?: string;
  /** Hides the technology list on the detail page, keeping it focused on what the product does. */
  hideTechnologies?: boolean;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "proposalhub",
    title: "ProposalHub",
    tagline:
      "A client-side proposal and document-generation platform — structured forms, validation, line-item pricing, analytics, and professional PDF export.",
    description:
      "ProposalHub is a full-featured proposal management platform — client and service records, line-item pricing, reusable templates, analytics, and branded PDF export — that runs entirely in the browser.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "Recharts", "jsPDF"],
    features: [
      "Proposal builder with line-item pricing and version history",
      "Reusable proposal templates with schema validation",
      "Client and service catalog management",
      "Revenue, volume, and conversion-funnel analytics",
      "Branded PDF export",
      "Command palette and rich-text editing",
    ],
    problem:
      "Freelancers and small agencies need a structured way to create, price, and track client proposals without assembling documents by hand in slides or docs.",
    approach:
      "Proposals, clients, services, and templates are managed as structured, validated records saved directly in the browser, with dedicated flows for building, analyzing, and exporting proposals.",
    architecture: [
      "Dedicated workspaces for the dashboard, proposals, clients, templates, services, and analytics",
      "Validated forms catch missing or incorrect proposal details before anything is sent to a client",
      "All data is saved locally in the browser, with no backend or database",
      "Pricing calculations and PDF export share one source of truth, so every view shows the same totals",
    ],
    challenges: [
      {
        challenge:
          "Keeping proposal data consistent across the builder, preview, PDF export, and analytics views without a backend.",
        solution:
          "Centralized proposal calculations and summaries so every view reads from the same derived data instead of recomputing it independently.",
      },
    ],
    results: [
      "Delivered a complete proposal lifecycle — clients, templates, pricing, PDF export, and analytics — as a single client-side application",
    ],
    liveUrl: "https://proposalhub-eta.vercel.app/",
    image: "/projects/proposalhub.webp",
    hideTechnologies: true,
    featured: true,
  },
  {
    slug: "multi-tenant-saas-app",
    title: "Multi-Tenant SaaS App",
    tagline:
      "A multi-tenant SaaS platform (SignalBoard) for managing customer feedback — isolated organizations, role-based access, and Postgres Row Level Security enforced at the database layer.",
    description:
      "A multi-tenant customer feedback platform (SignalBoard) — isolated organizations, role-based team management, and a branded customer portal, with each organization's data isolated at the database level rather than by application logic alone.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row Level Security", "Tailwind CSS", "Chart.js"],
    features: [
      "Multi-tenant organizations with complete data isolation",
      "Brandable, public or invite-only customer feedback portal",
      "Three-tier role system (Owner / Admin / Member) with granular permissions",
      "Submission triage queue with comments, voting, and an activity audit log",
      "Separate authentication flows for internal staff and customers",
      "Analytics dashboard with charts of feedback activity",
    ],
    problem:
      "Product teams collect customer feedback across scattered channels — email, chat, spreadsheets — with no shared, customer-facing record of what was requested or its status.",
    approach:
      "All organizations share a single database, with database-level access rules guaranteeing that each organization only ever sees its own data. The active organization is always determined on the server and never trusted from the browser.",
    architecture: [
      "One platform serves both the internal team workspace and a branded, customer-facing feedback portal",
      "Three layers of access control: data ownership rules, database-level access policies, and in-app permission checks",
      "Separate sign-in experiences for internal staff and customers, backed by a single identity system",
      "Database structure and access rules are version-controlled, so every change is reviewable and repeatable",
    ],
    challenges: [
      {
        challenge:
          "Preventing organization staff from accessing their own organization's customer-facing portal as a customer.",
        solution:
          "Added a dedicated customer-eligibility check on every customer-portal sign-in, separate from the general authentication check.",
      },
      {
        challenge: "Comment author names surface as raw profile IDs in the customer portal rather than resolved names.",
        solution:
          "Left unresolved for this release rather than introducing late changes across both sign-in experiences — documented as a known limitation.",
      },
    ],
    results: [
      "Enforced organization data isolation at the database layer rather than relying on application logic alone",
      "Verified access boundaries with integration tests run against the real backend instead of mocks",
    ],
    liveUrl: "https://multi-tenant-saas-agljaxk9l-faiza-ijaz0s-projects.vercel.app/",
    hideTechnologies: true,
    featured: true,
  },
  {
    slug: "coldpilot",
    title: "ColdPilot",
    tagline:
      "A client-side cold outreach platform — generates and scores multi-email sequences using proven copywriting frameworks with niche-specific personalization.",
    description:
      "ColdPilot generates, scores, and manages cold email outreach sequences — building 3-email campaigns from proven copywriting frameworks with niche-specific personalization, running entirely in the browser with no external AI services.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Radix UI", "DOMPurify", "jsPDF", "Vitest"],
    features: [
      "3-email sequence generation using AIDA, PAS, BAB, and Problem-Solution frameworks",
      "Deterministic quality scoring across 8 weighted dimensions",
      "8 niche-specific personalization templates with contamination protection",
      "Rich-text email editor with HTML sanitization",
      "Multi-format export — plain text, Markdown, and PDF",
      "Analytics dashboard tracking generation volume and quality trends",
    ],
    problem:
      "Writing effective, personalized cold email sequences by hand is slow and inconsistent, and most AI writing tools require sending prospect data to an external API.",
    approach:
      "Built a fully client-side generation pipeline: copywriting frameworks define sentence structure, a personalization engine applies niche-specific vocabulary, and a rule-based scorer evaluates the result — without calling an external AI service.",
    architecture: [
      "A step-by-step pipeline: choose a framework, apply niche personalization, generate the sequence, score it, then save or export",
      "Content guards scan generated emails for vocabulary from unrelated industries and regenerate them before falling back to a safe template",
      "Rule-based scoring instead of AI-based scoring, so the same email always receives the same, explainable score",
      "Email content is sanitized when pasted, saved, loaded, and displayed, protecting users from unsafe HTML",
    ],
    challenges: [
      {
        challenge: "Preventing niche-specific vocabulary from leaking across unrelated industries during generation.",
        solution:
          "Built content guards that scan each generated email for cross-niche contamination and automatically re-roll it, up to 5 attempts, before falling back to a safe template.",
      },
      {
        challenge: "Keeping exported output identical across plain text, Markdown, and PDF formats.",
        solution:
          "Centralized every export through a single transformation step so all formats render from the same normalized data.",
      },
    ],
    results: [
      "Delivered end-to-end sequence generation, scoring, editing, and export without any backend or external AI dependency",
      "Covered generation and scoring logic with an automated test suite",
    ],
    liveUrl: "https://coldpilot-sandy.vercel.app/",
    image: "/projects/coldpilot.webp",
    hideTechnologies: true,
    featured: true,
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    tagline:
      "A personal finance dashboard for tracking income, expenses, budgets, and savings — with rule-based insights, achievements, and fully client-side data storage.",
    description:
      "A personal finance management application for tracking income, expenses, budgets, and savings — with a rule-based insights engine, an achievement system, and a fully client-side data layer.",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Recharts", "React Hook Form", "Zod"],
    features: [
      "Transaction, budget, recurring-expense, and savings tracking",
      "Rule-based financial insights (spending trends, budget utilization, savings rate)",
      "Achievement system for financial milestones",
      "Financial health score",
      "Charts and statistics dashboards",
      "Calendar view and data export",
    ],
    liveUrl: "https://finance-tracker-alpha-three-84.vercel.app/",
    image: "/projects/finance-tracker-dashboard.webp",
    hideTechnologies: true,
    featured: true,
  },
  {
    slug: "hk-motors",
    title: "HK Motors",
    tagline:
      "A car dealership website with a filterable vehicle inventory, dedicated listing pages, and direct routes to test drives and sales enquiries.",
    description:
      "HK Motors is a dealership website built to present a multi-brand vehicle inventory — new, used, and certified pre-owned — and turn browsing into enquiries. Visitors can filter stock by category, brand, model, year, price, and condition, open a dedicated page for each vehicle, and move straight to a test-drive request or a WhatsApp, phone, or email conversation with the sales team.",
    category: "Automotive",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Paginated vehicle inventory filterable by category, brand, model, year, price range, and condition",
      "Dedicated listing page for every vehicle, with year, mileage, condition, and price shown on each card",
      "Brand-led inventory search and featured-vehicle showcase on the homepage",
      "Test-drive and contact calls-to-action, plus WhatsApp, phone, and email contact",
      "Supporting About, Services, Gallery, Blog, and leadership pages",
    ],
    liveUrl: "https://hk-motors.vercel.app/",
    image: "/projects/hk-motors.webp",
    featured: true,
  },
  {
    slug: "homework-uae",
    title: "Homework UAE",
    tagline:
      "A service and booking website for a Dubai and Abu Dhabi cleaning company — 16+ services, transparent starting prices, bundles, and online quote and booking flows.",
    description:
      "Homework UAE is the customer-facing website for an established cleaning and maintenance company serving Dubai and Abu Dhabi. It organizes a broad catalog — home, deep, technical, commercial, and furniture cleaning, pest control, and maintenance — into browsable categories with starting prices, city-specific hub pages, and service bundles, then guides customers into an online booking or free-quote request.",
    category: "Cleaning Services",
    technologies: ["Next.js", "Tailwind CSS"],
    features: [
      "Service catalog with category filters and AED starting prices, or survey/quote-based pricing where applicable",
      "Online booking flow that captures service, property type, city, community, and preferred schedule",
      "Separate free-quote request flow, with WhatsApp and phone as alternative channels",
      "City hub pages for Dubai and Abu Dhabi alongside dedicated pricing and bundle pages",
      "Blog, FAQs, and testimonials pages supporting search visibility and customer trust",
    ],
    liveUrl: "https://www.homeworkuae.com/",
    image: "/projects/homework-uae.webp",
    featured: true,
  },
  {
    slug: "man-of-cave",
    title: "Man of Cave",
    tagline:
      "A grooming-studio platform for a UAE men's barbershop brand — multi-step appointment booking, studio and barber selection, a product shop, and customer accounts.",
    description:
      "Man of Cave is the digital home of a men's grooming brand with studios across the UAE. Beyond presenting its services, the website handles the full appointment journey: customers add services, choose a studio that offers all of them, pick an available barber, select a date and time, and choose how to pay — as a guest or with a signed-in account. It also includes a grooming-products shop with checkout, a price list, team profiles, studio locations, and a journal.",
    category: "Beauty & Wellness",
    technologies: ["Next.js", "Tailwind CSS"],
    features: [
      "Multi-step booking: customer details, studio and barber selection, then date and time",
      "Studio list filtered to locations that offer every service in the booking",
      "Payment options at checkout, including pay-at-studio, online card, e-wallet, and split payment",
      "Customer accounts with guest booking still supported",
      "Product shop with checkout, alongside price list, team, locations, and journal pages",
    ],
    liveUrl: "https://manofcave.ae/",
    image: "/projects/man-of-cave.webp",
    featured: true,
  },
  {
    slug: "jam-beauty-lounge",
    title: "Jam Beauty Lounge",
    tagline:
      "A multi-branch website for a ladies' beauty salon in Dubai — dedicated service pages, salon packages, and WhatsApp-based appointment booking.",
    description:
      "Jam Beauty Lounge is the website for a ladies-only beauty salon based in Wafi Mall, Dubai, with additional branches across the city. It gives each service line — hair, nails, lashes and brows, facials, spa and massage, and waxing — its own page, publishes salon packages, and turns enquiries into appointments through a booking form that hands the request off to WhatsApp, with branch-specific contact details and maps.",
    category: "Beauty & Wellness",
    technologies: ["WordPress", "Elementor"],
    features: [
      "Dedicated pages for six service lines: hair, nails, eyelashes and brows, facials, spa and massage, and waxing",
      "Booking form capturing service, preferred date and time, and contact details, submitted via WhatsApp",
      "Branch directory with individual WhatsApp numbers and Google Maps links",
      "Salon packages page, blog, and an on-page FAQ",
    ],
    liveUrl: "https://jambeautylounge.com/",
    image: "/projects/jam-beauty-lounge.webp",
    featured: true,
  },
  {
    slug: "mirrors-beauty-lounge",
    title: "Mirrors Beauty Lounge",
    tagline:
      "A salon and home-service booking platform for a multi-branch Dubai beauty brand — branch, staff, and time-slot booking with a cart, accounts, vouchers, and memberships.",
    description:
      "Mirrors Beauty Lounge is a booking-driven website for a Dubai beauty brand operating several salon branches and a home-service line. Customers browse a wide service catalog for women and men, then book online by choosing a branch, category, service, staff member, and available time slot — adding multiple services to a cart before checkout. The platform also supports customer accounts, gift vouchers, a membership programme, and a products section.",
    category: "Beauty & Wellness",
    technologies: ["Tailwind CSS", "Bootstrap", "Flowbite"],
    features: [
      "Appointment booking by branch, category, service, staff member, and available time slot",
      "Multi-service cart with an order summary, coupon field, and tax breakdown",
      "Dedicated home-service offering alongside five salon branches",
      "Customer sign-up and sign-in, gift vouchers, and a membership programme",
      "Categorized service catalog with detail pages for women's and men's services",
    ],
    liveUrl: "https://mirrorsbeautylounge.ae/",
    image: "/projects/mirrors-beauty-lounge.webp",
    featured: true,
  },
  {
    slug: "silvermaid",
    title: "Silvermaid",
    tagline:
      "A cleaning-services website for a Dubai company — structured normal, deep, and technical cleaning categories, a multi-step booking flow, and quote requests.",
    description:
      "Silvermaid is a lead-generation and booking website for a Dubai cleaning and hygiene company serving residential and commercial clients. It structures a large service range into normal, deep, and technical cleaning categories, each with its own pages, and converts visitors through a multi-step booking flow, a free-quote request, and instant WhatsApp contact.",
    category: "Cleaning Services",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    features: [
      "Service catalog organized into normal, deep, and technical cleaning categories with dedicated subpages",
      "Multi-step booking flow: contact details, service and staff, then date and time",
      "Free-quote and availability-check requests",
      "WhatsApp, phone, and email contact throughout the site",
      "Testimonials, FAQs, and blog pages",
    ],
    liveUrl: "https://silvermaid-cg2i.vercel.app/",
    image: "/projects/silvermaid.webp",
    featured: true,
  },
  {
    slug: "ragdoll-properties",
    title: "Ragdoll Properties",
    tagline:
      "A real estate platform for a Dubai property investment firm — off-plan projects, sale and rental listings, an agent directory, and market-insight tools.",
    description:
      "Ragdoll Properties is the website for a Dubai real estate firm specializing in off-plan, luxury sales, and rental advisory. It brings together property listings for buying and renting across residential, luxury, and commercial segments, showcases new off-plan projects, and supports investors with market data, area insights, a property calculator, and guides — alongside an agent directory, valuation and selling enquiries, and a wide range of advisory services.",
    category: "Real Estate",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    features: [
      "Buy and rent listings across property types, with dedicated Luxe and Commercial sections",
      "Off-plan new-projects showcase and a Dubai projects map",
      "Market insights: investment analysis, top investment areas, transaction data, and a property calculator",
      "Agent directory, plus selling and property valuation enquiries",
      "Services hub covering property management, mortgage advisory, Golden Visa support, and more",
    ],
    liveUrl: "https://ragdolproperties.com/",
    image: "/projects/ragdoll-properties.webp",
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const previous = projects[(index - 1 + projects.length) % projects.length];
  return { next, previous };
}
