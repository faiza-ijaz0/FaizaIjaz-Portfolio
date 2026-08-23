export type ExperienceEntry = {
  period: string;
  title: string;
  summary: string;
  highlights: string[];
};

export const experienceTimeline: ExperienceEntry[] = [
  {
    period: "2022 — Present",
    title: "Software Engineer, Full-Stack",
    summary:
      "Designing and building complete web applications end to end — from data models and APIs to interface and deployment — for SaaS platforms, business tools, and client products.",
    highlights: [
      "Owned full product builds solo: architecture, backend, frontend, and deployment",
      "Integrated AI capabilities into production workflows and internal tools",
      "Delivered management platforms, booking systems, and e-commerce experiences",
    ],
  },
  {
    period: "2023",
    title: "Systems & Architecture Focus",
    summary:
      "Shifted focus toward system design and technical decision-making — structuring applications for maintainability, performance, and long-term scale rather than shipping features in isolation.",
    highlights: [
      "Adopted structured data modeling and API contracts across projects",
      "Introduced component and content architecture patterns for faster iteration",
      "Prioritized performance budgets and Core Web Vitals as delivery criteria",
    ],
  },
  {
    period: "2022",
    title: "Full-Stack Expansion",
    summary:
      "Extended from frontend-focused development into backend services, database design, and cloud deployment to take ownership of complete products.",
    highlights: [
      "Built and shipped REST APIs backing production applications",
      "Designed relational schemas and data models in PostgreSQL",
      "Deployed and maintained applications on Vercel",
    ],
  },
  {
    period: "2021 — 2022",
    title: "Foundations",
    summary:
      "Started professional development work centered on JavaScript and React, building UI-focused features and developing an eye for interface craft and code quality.",
    highlights: [
      "Built component-driven interfaces with React",
      "Developed a strong working foundation in modern JavaScript and TypeScript",
    ],
  },
];
