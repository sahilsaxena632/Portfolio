export type SkillCategory = {
  id:
    | "frontend"
    | "backend"
    | "databases"
    | "ai-integrations"
    | "dev-tools"
    | "cloud-deployment"
    | "automation";
  label: string;
  summary: string;
  signal: "mint" | "blue" | "violet";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    summary: "UI delivery for product-facing workflows.",
    signal: "blue",
    skills: ["React.js", "JavaScript", "WebSockets"],
  },
  {
    id: "backend",
    label: "Backend",
    summary: "Scalable API and service architecture.",
    signal: "mint",
    skills: [
      "Node.js",
      "Express.js",
      "Koa.js",
      "Python (FastAPI)",
      "REST API",
      "GraphQL",
      "Microservices",
      "Event-driven Architecture",
      "Security (JWT, OAuth 2.0, OWASP, Input Validation)",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    summary: "SQL and NoSQL systems with optimization focus.",
    signal: "violet",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Query Optimization",
    ],
  },
  {
    id: "ai-integrations",
    label: "AI / Integrations",
    summary: "Applied AI integration for analytics workflows.",
    signal: "mint",
    skills: [
      "Gemini API integration (DA Copilot)",
      "Groq fallback provider (DA Copilot)",
      "External system sync patterns (e.g., BRATS integration)",
      "[EDIT: add additional AI integration details if needed]",
    ],
  },
  {
    id: "dev-tools",
    label: "Dev Tools",
    summary: "Testing, collaboration, and developer workflow tools.",
    signal: "blue",
    skills: [
      "Mocha",
      "Chai",
      "Jest",
      "Postman",
      "Git",
      "Firebase",
      "PM2",
      "Agile",
      "Code Reviews",
    ],
  },
  {
    id: "cloud-deployment",
    label: "Cloud / Deployment",
    summary: "Cloud-native services and deployment pipelines.",
    signal: "violet",
    skills: [
      "AWS Lambda",
      "EC2",
      "S3",
      "API Gateway",
      "SNS/SQS",
      "CloudWatch",
      "Docker",
      "CI/CD (GitHub Actions)",
      "Serverless Architecture",
    ],
  },
  {
    id: "automation",
    label: "Automation",
    summary: "Operational automation for reliability and throughput.",
    signal: "mint",
    skills: [
      "Asynchronous job processing",
      "Queue-based workflows (PG-Boss, PostgreSQL queues)",
      "Idempotent processing",
      "Concurrency controls",
      "Batch processing",
      "Automated testing workflows",
      "Automated deployments (GitHub Actions)",
    ],
  },
];
