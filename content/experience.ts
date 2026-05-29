export type ExperienceMetric = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  phase: string;
  summary: string;
  ownership: string[];
  impact: ExperienceMetric[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "fig1-stars",
    company: "Fig1 Inc.",
    role: "Contract Software Engineer",
    period: "Feb 2025 — Present",
    location: "Remote",
    phase: "Logistics systems at scale",
    summary:
      "Own backend across API, sync, and queue services for a high-volume logistics platform.",
    ownership: [
      "Hardened API and sync services powering high-volume logistics workflows.",
      "Moved heavy work to PG-Boss queues with idempotency and concurrency controls.",
      "Built sync services integrating the external BRATS system for near real-time consistency.",
      "Tuned PostgreSQL queries and indexes to cut response times.",
    ],
    impact: [
      { value: "100K+", label: "Daily transactions" },
      { value: "50K+", label: "Background jobs/day" },
      { value: "35%", label: "Faster API responses" },
      { value: "25%", label: "Fewer queue failures" },
    ],
    stack: ["Node.js", "PostgreSQL", "PG-Boss", "REST APIs"],
  },
  {
    id: "etelligens",
    company: "Etelligens Technologies",
    role: "Software Engineer",
    period: "May 2024 — Jan 2025",
    phase: "Cloud-native scale & cost",
    summary:
      "Built and optimized RESTful and serverless APIs on AWS, improving throughput, latency, and cloud cost.",
    ownership: [
      "Built and optimized 50+ RESTful and serverless APIs on AWS Lambda.",
      "Ran DynamoDB workloads with strong consistency at high throughput.",
      "Cut latency with Redis caching, batch processing, and async execution.",
      "Added logging and monitoring with CloudWatch and ELK.",
    ],
    impact: [
      { value: "1M", label: "Read/write ops per second" },
      { value: "99%", label: "DynamoDB availability" },
      { value: "40%", label: "Faster API responses" },
      { value: "25%", label: "Lower API cost" },
    ],
    stack: ["Node.js", "AWS Lambda", "DynamoDB", "Redis", "CloudWatch", "ELK"],
  },
  {
    id: "fig1-backend",
    company: "Fig1 Inc.",
    role: "Software Engineer",
    period: "Jan 2023 — Dec 2023",
    location: "Remote",
    phase: "Backend foundations",
    summary:
      "Built scalable backend systems with Node.js, improving availability, API speed, database performance, and deployment flow.",
    ownership: [
      "Built scalable, fault-tolerant backend services with Node.js, Express, and Koa.",
      "Improved PostgreSQL performance through indexing, query tuning, and data modeling.",
      "Implemented JWT, OAuth 2.0, and access control across services.",
      "Set up CI/CD pipelines with GitHub Actions for faster, safer releases.",
    ],
    impact: [
      { value: "1M+", label: "Concurrent requests" },
      { value: "30%", label: "Faster DB queries" },
      { value: "25%", label: "Faster API responses" },
    ],
    stack: ["Node.js", "Express.js", "Koa.js", "PostgreSQL", "GitHub Actions"],
  },
];
