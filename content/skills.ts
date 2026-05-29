export type SkillCategory = {
  id: "backend" | "data" | "cloud" | "reliability";
  label: string;
  summary: string;
  signal: "mint" | "blue" | "violet";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend & APIs",
    summary: "Scalable services and clean API design.",
    signal: "mint",
    skills: [
      "Node.js · Express · Koa",
      "Python (FastAPI)",
      "REST & GraphQL",
      "Microservices",
      "Event-driven architecture",
      "LLM integration (Gemini, Groq)",
    ],
  },
  {
    id: "data",
    label: "Databases & Caching",
    summary: "SQL and NoSQL tuned for performance.",
    signal: "violet",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Query & index optimization",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    summary: "Cloud-native services and delivery pipelines.",
    signal: "blue",
    skills: [
      "AWS (Lambda, EC2, S3)",
      "SQS / SNS, API Gateway",
      "Docker",
      "CI/CD (GitHub Actions)",
      "CloudWatch & ELK",
    ],
  },
  {
    id: "reliability",
    label: "Reliability & Security",
    summary: "Keeping systems correct under real load.",
    signal: "mint",
    skills: [
      "Queues (PG-Boss)",
      "Idempotency & concurrency",
      "JWT / OAuth 2.0",
      "Automated testing (Jest, Mocha)",
      "Monitoring & observability",
    ],
  },
];
