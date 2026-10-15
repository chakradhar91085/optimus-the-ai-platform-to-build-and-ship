// All portfolio content lives here. Replace the placeholder values with your own.

export const profile = {
  name: "Your Name",
  initials: "YN",
  role: "Full-Stack Developer",
  location: "City, Country",
  available: true,
  tagline: "I build fast, thoughtful products for the web.",
  intro:
    "I'm a developer who enjoys turning ideas into polished, reliable software, from interface details to the systems behind them.",
  about: [
    "I've spent the last few years building web applications end to end: designing APIs, shaping data models and crafting interfaces people enjoy using.",
    "I care about clean code, good performance and shipping in small, steady steps. Outside of work I contribute to open source and keep learning new tools.",
  ],
  // Put a photo in /public and set its path here, e.g. "/me.jpg". Leave empty to show initials.
  photo: "",
  resumeUrl: "",
};

export const stats = [
  { value: "3+", label: "years building" },
  { value: "20+", label: "projects shipped" },
  { value: "10+", label: "technologies" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Optimus",
    description:
      "A marketing site for an AI platform to build and ship, built with Next.js, Tailwind CSS and custom canvas animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/chakradhar91085/optimus-the-ai-platform-to-build-and-ship",
    featured: true,
  },
  {
    title: "Project Two",
    description:
      "Describe what it does, the problem it solves and the result. Keep it to one or two sentences.",
    tags: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "Another project worth showing. Mention your role and one standout technical detail.",
    tags: ["Python", "FastAPI", "Docker"],
    repoUrl: "#",
  },
  {
    title: "Project Four",
    description:
      "A smaller experiment, open-source contribution or side project that shows your range.",
    tags: ["TypeScript", "Three.js"],
    liveUrl: "#",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Three.js"] },
  { group: "Backend", items: ["Node.js", "FastAPI", "PostgreSQL", "REST & GraphQL"] },
  { group: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export type Experience = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export const experience: Experience[] = [
  {
    period: "2024 — Present",
    title: "Software Engineer",
    org: "Company Name",
    description: "What you own, what you built and the impact it had.",
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    org: "Company Name",
    description: "Key responsibilities and one or two notable achievements.",
  },
  {
    period: "2018 — 2022",
    title: "B.Tech, Computer Science",
    org: "University Name",
    description: "Relevant coursework, honours or projects.",
  },
];

export const contact = {
  email: "you@example.com",
  socials: [
    { name: "GitHub", href: "https://github.com/chakradhar91085" },
    { name: "LinkedIn", href: "#" },
    { name: "X / Twitter", href: "#" },
  ],
};
