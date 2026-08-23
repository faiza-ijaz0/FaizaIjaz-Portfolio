export type SkillGroup = {
  number: string;
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    category: "Software Engineering",
    items: [
      "Software Architecture",
      "System Design",
      "Problem Solving",
      "Code Quality",
      "Design Patterns",
      "Scalability",
      "Maintainability",
    ],
  },
  {
    number: "02",
    category: "Frontend Engineering",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Component Architecture",
    ],
  },
  {
    number: "03",
    category: "Backend Engineering",
    items: [
      "Node.js",
      "REST APIs",
      "API Architecture",
      "Authentication",
      "Authorization",
      "Server-Side Development",
      "Database Integration",
    ],
  },
  {
    number: "04",
    category: "Database & Cloud",
    items: ["PostgreSQL", "Data Modeling", "Schema Design", "Cloud Deployment", "Vercel"],
  },
  {
    number: "05",
    category: "AI & Automation",
    items: [
      "AI API Integration",
      "LLM Integration",
      "AI-Assisted Workflows",
      "Automation",
      "Workflow Design",
    ],
  },
  {
    number: "06",
    category: "Testing & Quality",
    items: [
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "Debugging",
      "Error Handling",
      "Type Safety",
      "Code Review",
      "Validation",
    ],
  },
  {
    number: "07",
    category: "DevOps & Delivery",
    items: [
      "Git",
      "GitHub",
      "CI / CD",
      "Deployment",
      "Environment Configuration",
      "Production Builds",
    ],
  },
  {
    number: "08",
    category: "UI/UX & Performance",
    items: [
      "Responsive Design",
      "Interaction Design",
      "Motion & Micro-Interactions",
      "Accessibility",
      "Core Web Vitals",
      "Performance Optimization",
    ],
  },
];
