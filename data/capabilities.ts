export type Capability = {
  number: string;
  icon: "problem" | "architecture" | "quality" | "performance" | "security" | "ai";
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    number: "01",
    icon: "problem",
    title: "Problem Solving",
    description: "Breaking ambiguous, complex requirements down into reliable, well-scoped systems.",
  },
  {
    number: "02",
    icon: "architecture",
    title: "Architecture",
    description: "Designing application structures that stay maintainable as scope and scale grow.",
  },
  {
    number: "03",
    icon: "quality",
    title: "Quality",
    description: "Type safety, validation, debugging, and production readiness treated as non-negotiable.",
  },
  {
    number: "04",
    icon: "performance",
    title: "Performance",
    description: "Building fast, efficient experiences — from render cost down to query design.",
  },
  {
    number: "05",
    icon: "security",
    title: "Security",
    description: "Authentication, authorization, and data protection built in from the first commit.",
  },
  {
    number: "06",
    icon: "ai",
    title: "AI Integration",
    description: "Integrating intelligent capability into products where it genuinely earns its place.",
  },
];
