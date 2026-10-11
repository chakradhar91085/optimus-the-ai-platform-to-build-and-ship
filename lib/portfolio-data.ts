// All portfolio content lives here. Edit this file to update the site at /portfolio.

export const profile = {
  name: "Chakradhar Reddy",
  role: "Software Developer",
  location: "India",
  tagline: "I build fast, thoughtful products for the web.",
  intro:
    "I'm a developer who enjoys turning ideas into polished, reliable software — from clean interfaces to the APIs and infrastructure behind them.",
  about: [
    "I care about the details that make software feel good to use: quick load times, clear interfaces, and code that's easy for the next person to change.",
    "Lately I've been building AI-powered tools and full-stack apps with Next.js, TypeScript, and modern cloud platforms. I like owning a feature end to end, from the first sketch to production.",
  ],
  email: "chakradharreddy9559@gmail.com",
  resumeUrl: "#",
  available: true,
  socials: [
    { name: "GitHub", href: "https://github.com/chakradhar91085" },
    { name: "LinkedIn", href: "#" },
    { name: "X / Twitter", href: "#" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Three.js"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase"] },
  { group: "Tools", items: ["Git", "Vercel", "Docker", "Figma"] },
];

export const projects: {
  title: string;
  year: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
}[] = [
  {
    title: "Optimus",
    year: "2026",
    description:
      "A landing site for an AI platform to build and ship products, with animated ASCII canvas visuals and a responsive editorial layout.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repo: "https://github.com/chakradhar91085/optimus-the-ai-platform-to-build-and-ship",
  },
  {
    title: "Project Two",
    year: "2025",
    description: "Describe what this project does, the problem it solves, and your role in building it.",
    tags: ["React", "Node.js"],
    href: "#",
  },
  {
    title: "Project Three",
    year: "2025",
    description: "Another highlight. Mention a concrete result if you have one — users, speed-up, or what you learned.",
    tags: ["Python", "PostgreSQL"],
    href: "#",
  },
];

export const experience: { period: string; title: string; org: string; summary: string }[] = [
  {
    period: "2025 — Now",
    title: "Software Developer",
    org: "Company / Freelance",
    summary: "What you work on and the impact you've had.",
  },
  {
    period: "2023 — 2025",
    title: "Previous Role",
    org: "Company",
    summary: "Key responsibilities and accomplishments.",
  },
  {
    period: "2019 — 2023",
    title: "B.Tech, Computer Science",
    org: "University",
    summary: "Relevant coursework, clubs, or achievements.",
  },
];
