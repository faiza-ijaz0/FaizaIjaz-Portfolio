export type ProjectCategory = "SaaS Platform" | "Web Application" | "Business Website";

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
    tagline: "An AI-powered platform for generating professional client proposals.",
    description:
      "ProposalHub is an AI-powered client proposal generation platform designed to help freelancers and agencies create professional client proposals efficiently.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI Integration", "Client-Side Persistence"],
    features: [
      "AI-assisted proposal generation from project details",
      "Structured, professional proposal formatting",
      "Client-side saving and management of proposals",
    ],
    problem:
      "Freelancers and small agencies spend significant time manually drafting client proposals from scratch, with no fast way to produce a polished, professional document.",
    approach:
      "Built an AI-powered generator on Next.js and TypeScript — users provide project details and receive a structured, ready-to-send proposal, with data persisted client-side.",
    architecture: [
      "Next.js App Router frontend built with TypeScript",
      "AI integration for generating proposal content from structured user input",
      "Client-side persistence for saving and managing proposals",
    ],
    results: ["Replaced manual proposal drafting with an AI-assisted generation workflow"],
    featured: true,
  },
  {
    slug: "multi-tenant-saas-app",
    title: "Multi-Tenant SaaS App",
    tagline: "A scalable multi-tenant SaaS application with isolated organizations and role-based workflows.",
    description:
      "A scalable multi-tenant SaaS application designed around isolated organizations, shared application infrastructure, and role-based product workflows.",
    category: "SaaS Platform",
    technologies: [],
    featured: true,
  },
  {
    slug: "coldpilot",
    title: "ColdPilot",
    tagline: "A cold outreach and prospecting platform for personalized outreach at scale.",
    description:
      "A professional cold outreach and prospecting platform focused on streamlining personalized outreach workflows.",
    category: "SaaS Platform",
    technologies: [],
    featured: true,
  },
  {
    slug: "finance-tracker",
    title: "Finance Tracker",
    tagline: "A modern personal finance management application with AI-driven financial insights.",
    description:
      "A modern personal finance management application for tracking financial activity and presenting useful financial insights.",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Financial activity tracking",
      "Financial health insights",
      "AI-generated insights",
      "Achievement system",
      "Responsive dashboard",
      "Client-side persistence",
    ],
    featured: true,
  },
  {
    slug: "jam-beauty-lounge",
    title: "Jam Beauty Lounge",
    tagline: "A custom website for a beauty lounge brand, built for bookings-focused conversion.",
    description:
      "A brand website for a beauty lounge business, designed around service presentation and clear calls to action for bookings and inquiries.",
    category: "Business Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Service showcase sections",
      "Mobile-optimized layout",
      "Clear contact and booking calls to action",
    ],
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

export const projectCategories: ProjectCategory[] = ["SaaS Platform", "Web Application", "Business Website"];
