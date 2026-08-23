export type Service = {
  number: string;
  icon: "code" | "layout" | "server" | "sparkles" | "layers" | "database" | "workflow" | "gauge" | "cart";
  title: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    number: "01",
    icon: "layers",
    title: "Full-Stack Web Development",
    description:
      "End-to-end product builds — from data model to deployed interface — for teams that need one engineer who can own the whole stack.",
    capabilities: [
      "Product architecture & technical planning",
      "React / Next.js application development",
      "API design and backend implementation",
      "Deployment, monitoring, and iteration",
    ],
  },
  {
    number: "02",
    icon: "layout",
    title: "Frontend Engineering",
    description:
      "Interfaces built with the same rigor as backend systems — typed, componentized, performant, and considered down to the interaction.",
    capabilities: [
      "React & Next.js component architecture",
      "Design system implementation",
      "Motion and micro-interaction design",
      "Cross-device responsive engineering",
    ],
  },
  {
    number: "03",
    icon: "server",
    title: "Backend & API Development",
    description:
      "Reliable services underneath the interface — REST APIs, authentication, and data layers designed to scale with the product.",
    capabilities: [
      "REST API design and implementation",
      "Authentication & authorization systems",
      "Third-party service integration",
      "Business logic and workflow engineering",
    ],
  },
  {
    number: "04",
    icon: "sparkles",
    title: "AI Integration",
    description:
      "Practical AI woven into real products — not a chatbot bolted on, but capability that fits the workflow it's built for.",
    capabilities: [
      "LLM API integration into product workflows",
      "AI-assisted content and automation features",
      "Prompt design and evaluation",
      "Retrieval and context pipelines",
    ],
  },
  {
    number: "05",
    icon: "code",
    title: "SaaS Development",
    description:
      "Multi-tenant products built to onboard real users — from data isolation to billing-ready architecture and account management.",
    capabilities: [
      "Multi-tenant application architecture",
      "User authentication & role management",
      "Dashboard and admin tooling",
      "Iterative, feedback-driven delivery",
    ],
  },
  {
    number: "06",
    icon: "database",
    title: "Database & Cloud Architecture",
    description:
      "Data structures and infrastructure chosen deliberately — schemas that hold up under real usage, deployed on infrastructure that scales cleanly.",
    capabilities: [
      "PostgreSQL schema and data modeling",
      "Cloud deployment (Vercel)",
      "Caching and query performance",
      "Environment & infrastructure setup",
    ],
  },
  {
    number: "07",
    icon: "workflow",
    title: "Automation & Internal Tools",
    description:
      "Purpose-built tools that remove repetitive work — internal dashboards, scripts, and pipelines that give time back to the team.",
    capabilities: [
      "Workflow and process automation",
      "Internal dashboard & tooling development",
      "Third-party API and webhook orchestration",
      "Scheduled jobs and data pipelines",
    ],
  },
  {
    number: "08",
    icon: "gauge",
    title: "Performance & Technical Optimization",
    description:
      "Diagnosing and fixing what slows a product down — load times, render performance, and architectural bottlenecks alike.",
    capabilities: [
      "Core Web Vitals & load-time optimization",
      "Rendering and bundle-size audits",
      "Database query and API optimization",
      "Technical debt assessment and refactoring",
    ],
  },
  {
    number: "09",
    icon: "cart",
    title: "E-Commerce Development",
    description:
      "Storefronts built to convert — product catalogs, cart and checkout flows, and order management wired into a real backend.",
    capabilities: [
      "Product catalog & category architecture",
      "Cart, checkout, and payment integration",
      "Order and inventory management",
      "Performance-optimized storefront pages",
    ],
  },
];
