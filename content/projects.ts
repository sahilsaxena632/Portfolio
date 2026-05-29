export type ProjectStatus = "active" | "shipped";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type PortfolioProject = {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  flagship?: boolean;
  confidential?: boolean;
  summary: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  metrics: ProjectMetric[];
  links?: ProjectLink[];
};

export const projects: PortfolioProject[] = [
  {
    id: "da-copilot",
    name: "DA Copilot",
    category: "AI Analytics Product",
    status: "active",
    flagship: true,
    summary:
      "An AI analytics workspace that turns plain-English questions into schema-aware, validated SQL and visual insights.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Gemini API"],
    problem:
      "Analysts lose hours bouncing between schema docs, SQL editors, and dashboards just to answer a single business question.",
    approach:
      "Built a workspace — not a chatbot — that grounds prompts in selected tables, generates SQL, and validates every query before it runs, with a Gemini/Groq fallback for resilient AI calls.",
    result:
      "Question to safe SQL to chart in one flow, with a Dockerized stack and provider failover keeping the experience reliable.",
    metrics: [
      { value: "1 flow", label: "Question → SQL → insight" },
      { value: "2x", label: "LLM providers with failover" },
      { value: "100%", label: "Queries validated pre-run" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/sahilsaxena632" },
    ],
  },
  {
    id: "stars-logistics-platform",
    name: "STARS Logistics Platform",
    category: "Logistics Systems · Fig1 Inc.",
    status: "shipped",
    confidential: true,
    summary:
      "High-volume logistics backend spanning API, sync, and queue-driven processing for reliable distributed workflows.",
    stack: ["Node.js", "PostgreSQL", "PG-Boss", "REST APIs"],
    problem:
      "A high-volume logistics platform needed dependable API, sync, and background processing without losing data integrity across systems.",
    approach:
      "Hardened the API and sync services and moved heavy work to PG-Boss queues, adding idempotency and concurrency controls to protect distributed state.",
    result:
      "Faster APIs, fewer queue failures, and near real-time consistency with the external BRATS system.",
    metrics: [
      { value: "100K+", label: "Daily transactions" },
      { value: "35%", label: "Faster API responses" },
      { value: "40%", label: "Fewer data discrepancies" },
    ],
  },
  {
    id: "100-panel",
    name: "100 Panel",
    category: "Real-Time Backend · Etelligens",
    status: "shipped",
    confidential: true,
    summary:
      "Event-driven, real-time betting backend built for high throughput, fault tolerance, and strong consistency.",
    stack: ["Python", "Node.js", "AWS Lambda", "DynamoDB", "WebSockets"],
    problem:
      "Real-time betting demanded high-throughput processing with strong consistency and microsecond-level accuracy.",
    approach:
      "Built event-driven workflows across monolith, serverless, and microservices using AWS, WebSockets, Redis caching, and DynamoDB with strong consistency.",
    result:
      "A fault-tolerant real-time backend that scales with traffic while keeping latency and cloud cost in check.",
    metrics: [
      { value: "1M", label: "Read/write ops per second" },
      { value: "99%", label: "DynamoDB availability" },
      { value: "25%", label: "Lower API cost" },
    ],
  },
  {
    id: "workflow-app-backend",
    name: "Workflow App Backend",
    category: "Logistics APIs · Fig1 Inc.",
    status: "shipped",
    confidential: true,
    summary:
      "Secure, documented REST and microservice layer powering logistics workflow management.",
    stack: ["Node.js", "Koa.js", "PostgreSQL", "Redis", "OAuth 2.0"],
    problem:
      "Logistics workflows needed secure APIs, clean documentation, and dependable performance for frontend teams to build on.",
    approach:
      "Shipped RESTful microservices with OAuth 2.0/JWT auth, Redis caching, query optimization, automated tests, monitoring, and Swagger docs.",
    result:
      "A secure, well-documented backend with faster queries and tighter frontend-backend integration.",
    metrics: [
      { value: "1M+", label: "Concurrent requests" },
      { value: "30%", label: "Faster DB queries" },
      { value: "25%", label: "Faster API responses" },
    ],
  },
  {
    id: "warehouse-app-backend",
    name: "Warehouse App Backend",
    category: "Warehouse Infra · Fig1 Inc.",
    status: "shipped",
    confidential: true,
    summary:
      "Backend foundation for inventory, orders, shipments, and reporting — built from the ground up.",
    stack: ["Node.js", "Express.js", "Koa.js", "PostgreSQL"],
    problem:
      "Warehouse operations needed backend infrastructure for inventory, orders, shipments, and fast reporting with secure access.",
    approach:
      "Stood up the backend from scratch, designed REST APIs, and tuned PostgreSQL reporting with indexing, access control, and rate limiting.",
    result:
      "A reliable warehouse backend with fast reporting and a clean base for new features to ship on.",
    metrics: [
      { value: "0 → 1", label: "Backend built from scratch" },
      { value: "30%", label: "Faster reporting queries" },
      { value: "5", label: "Core API domains" },
    ],
  },
];
