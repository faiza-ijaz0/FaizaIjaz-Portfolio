export const siteConfig = {
  name: "Faiza Ijaz",
  initials: "FI",
  role: "Software Engineer",
  tagline: "I build scalable, intelligent, high-quality digital products and systems.",
  description:
    "Software Engineer with four years of production experience across frontend, backend, APIs, databases, cloud infrastructure, and AI-integrated systems.",
  url: "https://faizaijaz.dev",
  email: "faizaijjaz@gmail.com",
  availability: "Open to select engagements",
  experienceYears: 4,
} as const;

export const socialLinks = {
  github: "https://github.com/faiza-ijaz0",
  linkedin: "https://www.linkedin.com/in/faiza-ijjaz",
  email: `mailto:${siteConfig.email}`,
} as const;
