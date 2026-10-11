// All portfolio content lives here. Edit this file to update the site at /portfolio.

export const profile = {
  name: "Chakradhar Reddy",
  role: "Aspiring AI Engineer",
  location: "Bengaluru, India",
  tagline: "Building reliable and responsible AI.",
  intro:
    "I'm a Computer Science (AI & ML) student at CMR Institute of Technology, building applications with LLMs, retrieval pipelines, and machine learning.",
  about: [
    "I like AI that stays grounded: retrieval pipelines that answer from real data, models that explain their decisions, and systems that hold up when someone tries to misuse them.",
    "My work spans privacy-aware Graph-RAG with Neo4j and Ollama, content moderation with fine-tuned DistilBERT, and data pipelines on Airflow and Postgres. I won first place at the Membrain AI Hackathon in 2026.",
  ],
  email: "chakradharreddy9559@gmail.com",
  // Leave empty to show a GitHub button instead of the résumé download.
  resumeUrl: "/Chakradhar-Reddy-Resume.pdf",
  available: true,
  socials: [
    { name: "GitHub", href: "https://github.com/chakradhar91085" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/chakradharreddym9559/" },
    { name: "LeetCode", href: "https://leetcode.com/u/Chakradhar7705/" },
  ],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "AI & NLP", items: ["RAG / Graph-RAG", "Ollama", "PyTorch", "Hugging Face"] },
  { group: "Languages", items: ["Python", "TypeScript", "Java", "SQL"] },
  { group: "Backend & data", items: ["FastAPI", "Node.js / Express", "Neo4j", "PostgreSQL", "Redis / BullMQ"] },
  { group: "Tools", items: ["Docker", "Apache Airflow", "Git", "Power BI"] },
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
    title: "AegisGraph",
    year: "2026",
    description:
      "Privacy-aware Graph-RAG security framework. It watches query behaviour to stop progressive data extraction from a Neo4j knowledge graph, and answers through a grounded pipeline with Ollama and Qwen2.5-Coder.",
    tags: ["Python", "FastAPI", "Neo4j", "Ollama", "TypeScript"],
    repo: "https://github.com/chakradhar91085/AegisGraph",
  },
  {
    title: "Sentinel",
    year: "2026",
    description:
      "AI content moderation suite. A DistilBERT model fine-tuned on the Jigsaw toxic comments dataset classifies seven harm categories, with token-level explainability heatmaps and a human review queue.",
    tags: ["PyTorch", "Transformers", "FastAPI", "JavaScript"],
    repo: "https://github.com/chakradhar91085/Sentinel",
  },
  {
    title: "Outbox Email Scheduler",
    year: "2026",
    description:
      "Asynchronous email campaign scheduler with staggered delivery, per-sender rate limits, retries, idempotency checks and live status tracking, built on Redis and BullMQ workers with no cron jobs.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker"],
    href: "https://outbox-email-scheduler-ten.vercel.app/",
    repo: "https://github.com/chakradhar91085/outbox-email-scheduler",
  },
  {
    title: "Cinema AI",
    year: "2026",
    description:
      "Movie recommendation system on MovieLens. Clusters users into viewing personas and compares SVD, collaborative filtering and a hybrid engine (RMSE 0.90), with a React dashboard to explore results.",
    tags: ["Python", "scikit-learn", "React", "Vite"],
    repo: "https://github.com/chakradhar91085/Cinema-AI",
  },
  {
    title: "AQI MLOps Pipeline",
    year: "2026",
    description:
      "Daily air-quality data pipeline: an Airflow DAG pulls OpenAQ and Open-Meteo data into a staged Postgres warehouse, with a Streamlit dashboard over the mart tables. Runs from one Docker Compose file.",
    tags: ["Airflow", "PostgreSQL", "Streamlit", "Docker"],
    repo: "https://github.com/chakradhar91085/aqi-mlops-pipeline",
  },
  {
    title: "Electricity Consumption Patterns",
    year: "2026",
    description:
      "Clusters about 5,500 London households by smart-meter usage behaviour, validates the segments statistically, and generates an energy-saving recommendation for each one.",
    tags: ["Python", "Pandas", "scikit-learn"],
    repo: "https://github.com/chakradhar91085/Electricity_Consumption_Pattern_Analysis",
  },
];

export const experience: { period: string; title: string; org: string; summary: string }[] = [
  {
    period: "2026",
    title: "First Place",
    org: "Membrain AI Hackathon",
    summary: "Won first place at the Membrain AI Hackathon.",
  },
  {
    period: "2025 — 2026",
    title: "Promotion Team Leader",
    org: "Brain Bot Club",
    summary:
      "Lead the club's design work (posters, event branding and visual content), mentor peers, and ran a session on how Gibberlink works.",
  },
  {
    period: "2023 — 2027",
    title: "B.E., Computer Science (AI & ML)",
    org: "CMR Institute of Technology, Bengaluru",
    summary:
      "CGPA 8.88. Mini Project Winner three semesters running (2023–2024). Took part in Repogenesis at BMSCE and Smart India Hackathon (2025).",
  },
  {
    period: "Certifications",
    title: "NPTEL Cloud Computing",
    org: "Silver Elite, 2026",
    summary: "Also completed Google Prompting Essentials Specialization (Coursera) and The Complete Python Developer (Udemy).",
  },
];
