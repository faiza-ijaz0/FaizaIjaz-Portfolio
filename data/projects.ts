export type ProjectCategory = "SaaS Platform" | "Web Application";

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
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "proposalhub",
    title: "ProposalHub",
    tagline:
      "A client-side proposal and document-generation platform — structured forms, validation, line-item pricing, analytics, and professional PDF export.",
    description:
      "ProposalHub is a full-featured proposal management platform — client and service records, line-item pricing, reusable templates, analytics, and branded PDF export — built entirely as a client-side Next.js application.",
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
      "Built a fully client-side Next.js application where proposals, clients, services, and templates are structured, validated data — persisted to the browser via localStorage — with dedicated builder, analytics, and export flows.",
    architecture: [
      "Next.js App Router with route groups for dashboard, proposals, clients, templates, services, and analytics",
      "Form handling and schema validation via React Hook Form and Zod",
      "Client-side persistence through a dedicated localStorage hook, with no backend or database",
      "PDF export and financial calculations handled in dedicated lib modules",
    ],
    challenges: [
      {
        challenge:
          "Keeping proposal data consistent across the builder, preview, PDF export, and analytics views without a backend.",
        solution:
          "Centralized proposal math and summaries in dedicated lib modules so every view reads from the same derived data instead of recomputing it independently.",
      },
    ],
    results: [
      "Delivered a complete proposal lifecycle — clients, templates, pricing, PDF export, and analytics — as a single client-side application",
    ],
    githubUrl: "https://github.com/faiza-ijaz0/Proposalhub",
    liveUrl: "https://proposalhub-eta.vercel.app/",
    featured: true,
  },
  {
    slug: "multi-tenant-saas-app",
    title: "Multi-Tenant SaaS App",
    tagline:
      "A multi-tenant SaaS platform (SignalBoard) for managing customer feedback — isolated organizations, role-based access, and Postgres Row Level Security enforced at the database layer.",
    description:
      "A multi-tenant customer feedback platform (SignalBoard) — isolated organizations, role-based team management, and a branded customer portal, with tenant isolation enforced by Postgres Row Level Security rather than application logic alone.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row Level Security", "Tailwind CSS", "Chart.js"],
    features: [
      "Multi-tenant organizations with complete data isolation",
      "Brandable, public or invite-only customer feedback portal",
      "Three-tier role system (Owner / Admin / Member) with granular permissions",
      "Submission triage queue with comments, voting, and an activity audit log",
      "Separate authentication flows for internal staff and customers",
      "Analytics dashboard built with Chart.js",
    ],
    problem:
      "Product teams collect customer feedback across scattered channels — email, chat, spreadsheets — with no shared, customer-facing record of what was requested or its status.",
    approach:
      "Used a single shared Postgres database with tenant isolation enforced at the database level via Row Level Security, rather than separate databases per tenant, with organization context always resolved server-side and never trusted from the client.",
    architecture: [
      "Next.js App Router (React Server Components) for both frontend and application logic, with Supabase as the entire backend",
      "Three-layer authorization: structural foreign keys, database-level Row Level Security, and application-level checks",
      "Single Supabase Auth identity system split into distinct staff and customer sign-in flows",
      "Version-controlled SQL migrations and RLS policies",
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
          "Left unresolved for this release rather than threading new RPCs through both auth contexts late in the build — documented as a known limitation.",
      },
    ],
    results: [
      "Enforced tenant isolation at the database layer via RLS rather than relying on application logic alone",
      "Validated authorization boundaries with integration tests run against the live Supabase project instead of mocks",
    ],
    githubUrl: "https://github.com/faiza-ijaz0/multi-tenant-SaaSApp",
    liveUrl: "https://multi-tenant-saas-agljaxk9l-faiza-ijaz0s-projects.vercel.app/",
    featured: true,
  },
  {
    slug: "coldpilot",
    title: "ColdPilot",
    tagline:
      "A client-side cold outreach platform — generates and scores multi-email sequences using proven copywriting frameworks with niche-specific personalization.",
    description:
      "ColdPilot generates, scores, and manages cold email outreach sequences — building 3-email campaigns from proven copywriting frameworks with niche-specific personalization, entirely client-side with no external AI APIs.",
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
      "Modular pipeline: framework selection, niche personalization, generation with retry/fallback, quality scoring, then storage/export",
      "Content guards that scan generated emails for cross-niche vocabulary leakage and re-roll contaminated output before falling back to a safe template",
      "Deterministic, rule-based scoring instead of LLM-based scoring, for reproducible and testable output",
      "Defense-in-depth HTML sanitization via DOMPurify at paste, persistence, legacy-read, and render time",
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
      "Covered generation and scoring logic with a Vitest test suite",
    ],
    githubUrl: "https://github.com/faiza-ijaz0/coldpilot",
    liveUrl: "https://coldpilot-sandy.vercel.app/",
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
    problem:
      "Spreadsheets get unwieldy for ongoing personal finance tracking — no real-time totals, no visual breakdown, and no proactive signal when spending or budgets drift.",
    approach:
      "Modeled transactions, budgets, categories, recurring items, and savings goals as client-side data, then layered a rule-based insights engine on top that flags spending spikes, budget overruns, and savings trends against fixed thresholds.",
    architecture: [
      "Next.js App Router with dedicated routes for transactions, budgets, recurring items, savings, insights, achievements, and statistics",
      "Context providers for transactions, budgets, categories, savings, recurring items, and achievements",
      "Rule-based insights engine scoring ten categories of financial signals and prioritizing them for display",
      "Client-side persistence via a localStorage abstraction, with no backend or database",
    ],
    challenges: [
      {
        challenge: "Surfacing meaningful financial guidance without a real backend or an external AI service.",
        solution:
          "Built a deterministic insights engine that scores transactions and budgets against fixed thresholds — spending spikes, budget utilization, savings rate — rather than relying on an LLM.",
      },
    ],
    results: [
      "Delivered a full personal finance dashboard — tracking, budgeting, insights, and gamified achievements — as a client-side application",
    ],
    githubUrl: "https://github.com/faiza-ijaz0/FinanceTracker",
    liveUrl: "https://finance-tracker-alpha-three-84.vercel.app/",
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
