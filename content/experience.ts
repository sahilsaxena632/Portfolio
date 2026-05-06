export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  phase: string;
  summary: string;
  ownership: string[];
  impact: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "fig1-stars",
    company: "Fig1 Inc.",
    role: "Contract Software Engineer - STARS Logistics Platform",
    period: "Feb 2025 - Present",
    location: "Remote",
    phase: "Current ownership across logistics systems",
    summary:
      "Designed and enhanced backend systems across API server, sync service, and queue-based architecture for high-volume logistics workflows.",
    ownership: [
      "Enhanced backend systems across API, sync, and queue services.",
      "Implemented asynchronous workflows with PG-Boss and PostgreSQL queues.",
      "Built sync services integrating the external BRATS system.",
      "Added idempotent processing and concurrency controls for distributed data integrity.",
    ],
    impact: [
      "Handled 100K+ daily transactions.",
      "Processed 50K+ background jobs/day.",
      "Reduced API response times by up to 35%.",
      "Reduced manual discrepancies by 40%.",
      "Improved PostgreSQL query performance by 30%.",
      "Reduced queue failures and retry rates by 25%.",
    ],
    stack: ["Node.js", "REST APIs", "PostgreSQL", "PG-Boss", "Queues"],
  },
  {
    id: "etelligens",
    company: "Etelligens Technologies Pvt. Ltd.",
    role: "Software Engineer",
    period: "May 2024 - Jan 2025",
    phase: "Cloud-native scale and cost optimization",
    summary:
      "Developed and optimized RESTful and serverless APIs while improving performance, throughput, cloud cost, and production observability.",
    ownership: [
      "Developed and optimized 50+ RESTful and serverless APIs.",
      "Managed DynamoDB workloads with strong consistency requirements.",
      "Improved API performance using Redis caching, batch processing, and asynchronous execution.",
      "Implemented logging and monitoring with CloudWatch and ELK.",
    ],
    impact: [
      "Reduced API response times by 40%.",
      "Managed DynamoDB with 99% availability.",
      "Handled up to 1M read/write operations per second.",
      "Improved API performance by 30%.",
      "Reduced API costs by 25%.",
    ],
    stack: [
      "Node.js",
      "AWS Lambda",
      "DynamoDB",
      "Redis",
      "CloudWatch",
      "ELK",
    ],
  },
  {
    id: "fig1-backend",
    company: "Fig1 Inc.",
    role: "Software Engineer",
    period: "Jan 2023 - Dec 2023",
    location: "Remote",
    phase: "Backend foundations and delivery systems",
    summary:
      "Built scalable backend systems with Node.js, Express.js, and Koa.js, improving availability, API speed, database performance, security, and deployment flow.",
    ownership: [
      "Built scalable backend systems with high availability and fault tolerance.",
      "Improved PostgreSQL performance through indexing, query optimization, and data modeling.",
      "Developed microservices-based backend and asynchronous workflows.",
      "Implemented JWT, OAuth 2.0, and access control mechanisms.",
      "Designed CI/CD pipelines with GitHub Actions.",
    ],
    impact: [
      "Handled 1M+ concurrent requests.",
      "Boosted PostgreSQL performance by 30%.",
      "Cut API response times by 25%.",
      "Improved delivery speed through automated deployments.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Koa.js",
      "PostgreSQL",
      "JWT",
      "OAuth 2.0",
      "GitHub Actions",
    ],
  },
];
