export type ProjectStatus = "active" | "shipped";

export type PortfolioProject = {
  id: string;
  name: string;
  eyebrow: string;
  status: ProjectStatus;
  problem: string;
  approach: string;
  stack: string[];
  impact: string[];
  outcome: string;
  role: string;
  coreFeatures: string[];
  visualHighlight: string;
  progress?: string[];
};

export const projects: PortfolioProject[] = [
  {
    id: "da-copilot",
    name: "DA Copilot",
    eyebrow: "Flagship AI Analytics Product",
    status: "active",
    role: "Product builder / full-stack engineer",
    problem:
      "Data analysts lose time moving between schema context, SQL writing, query checks, and dashboard exploration. DA Copilot helps them ask data questions naturally while keeping the workflow grounded in selected tables and schema metadata.",
    approach:
      "Build an AI-assisted analytics workspace instead of a chatbot: natural-language questions become schema-aware SQL, queries are validated before execution, and insights are presented through expandable dashboard cards and visual exploration workflows.",
    stack: [
      "Next.js",
      "NestJS",
      "Gemini API",
      "Groq fallback",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    impact: [
      "Positions AI as a practical analytics productivity layer for real data workflows.",
      "Uses LLM provider fallback for more resilient AI-assisted experiences.",
      "Applies production-minded architecture to an active product, not a demo-style chatbot.",
    ],
    outcome:
      "Active development product focused on safer, faster analyst workflows from question to SQL to visual insight.",
    coreFeatures: [
      "Natural-language analytics questions",
      "Schema-aware SQL generation using selected tables and metadata",
      "Query validation before execution",
      "Interactive insight cards with charts and expandable details",
      "Dockerized local environment with PostgreSQL and Redis",
    ],
    progress: [
      "Active product in development",
      "Core analytics workflow defined and being built",
      "[EDIT: add current milestone, demo link, or screenshots]",
    ],
    visualHighlight:
      "Show a command-center style product card with an analyst question, generated SQL, validation state, and insight cards.",
  },
  {
    id: "stars-logistics-platform",
    name: "STARS Logistics Platform",
    eyebrow: "Logistics Systems",
    status: "shipped",
    role: "Contract Software Engineer - Fig1 Inc.",
    problem:
      "A high-volume logistics platform needed reliable backend services across API, sync, and queue-based workflows.",
    approach:
      "Enhanced API server, sync service, and asynchronous processing using PG-Boss and PostgreSQL queues, with idempotency and concurrency controls to protect distributed data integrity.",
    stack: ["Node.js", "REST APIs", "PostgreSQL", "PG-Boss", "Queues"],
    impact: [
      "Handled 100K+ daily transactions.",
      "Processed 50K+ background jobs/day.",
      "Reduced response times by up to 35%.",
      "Reduced manual discrepancies by 40%.",
      "Reduced queue failures and retry rates by 25%.",
    ],
    outcome:
      "More reliable logistics workflows with faster APIs, stronger queue processing, and near real-time external system consistency.",
    coreFeatures: [
      "Transload, inbound, and outbound REST APIs",
      "BRATS external-system sync",
      "Queue-backed background processing",
      "PostgreSQL indexing and query optimization",
      "Idempotent processing and concurrency controls",
    ],
    visualHighlight:
      "Show a logistics operations pipeline with transactions, queue workers, sync service, and reliability metrics.",
  },
  {
    id: "100-panel",
    name: "100 Panel",
    eyebrow: "Real-Time Betting Backend",
    status: "shipped",
    role: "Software Engineer - Etelligens Technologies",
    problem:
      "Real-time betting workflows needed high-performance backend processing with strong consistency and microsecond-level accuracy requirements.",
    approach:
      "Built backend modules in Python and Node.js using AWS services, event-driven architecture, WebSockets, and a mix of monolithic, serverless, and microservices-based systems.",
    stack: [
      "Python",
      "Node.js",
      "AWS Lambda",
      "SNS",
      "EC2",
      "S3",
      "WebSockets",
      "DynamoDB",
      "PostgreSQL",
      "Redis",
    ],
    impact: [
      "Supported scalable real-time processing.",
      "Implemented betting workflows requiring microsecond-level accuracy.",
      "Optimized backend workflows for performance, scalability, and cost-efficiency.",
    ],
    outcome:
      "A real-time backend foundation designed for fault tolerance, high-volume data, caching, and strong consistency.",
    coreFeatures: [
      "Event-driven betting workflows",
      "WebSocket-based real-time communication",
      "Serverless and microservices integration",
      "High-volume data handling with caching",
      "Fault-tolerant backend architecture",
    ],
    visualHighlight:
      "Use an event-stream visual with timing, WebSocket, cache, and AWS service nodes.",
  },
  {
    id: "workflow-app-backend",
    name: "Workflow App Backend",
    eyebrow: "Logistics Workflow APIs",
    status: "shipped",
    role: "Software Engineer - Fig1 Inc.",
    problem:
      "Logistics management workflows needed secure APIs, service documentation, data performance, and dependable integration with frontend teams.",
    approach:
      "Built and deployed RESTful APIs and microservices using Node.js and Koa.js, with secure OAuth 2.0/JWT access, database optimization, Redis caching, automated tests, monitoring, and Swagger documentation.",
    stack: [
      "Node.js",
      "Koa.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "OAuth 2.0",
      "JWT",
      "Mocha",
      "Jest",
      "Supertest",
      "Swagger",
    ],
    impact: [
      "Improved backend reliability through logging, monitoring, and automated testing.",
      "Improved data performance with modeling, caching, and query optimization.",
      "[EDIT: add measurable business or performance metric if available]",
    ],
    outcome:
      "A secure, documented backend layer for logistics workflows with stronger frontend-backend integration.",
    coreFeatures: [
      "RESTful logistics APIs",
      "Microservices architecture",
      "OAuth 2.0 and JWT authentication",
      "Redis caching and query optimization",
      "Swagger API documentation",
    ],
    visualHighlight:
      "Show an API lifecycle card: auth, services, database, tests, documentation, monitoring.",
  },
  {
    id: "warehouse-app-backend",
    name: "Warehouse App Backend",
    eyebrow: "Warehouse Logistics Infrastructure",
    status: "shipped",
    role: "Software Engineer - Fig1 Inc.",
    problem:
      "Warehouse logistics needed backend infrastructure for inventory tracking, order management, shipment processing, reporting, and secure access.",
    approach:
      "Established backend infrastructure from scratch using Node.js, Express.js, and Koa.js, then designed RESTful APIs and optimized PostgreSQL reporting queries with indexing.",
    stack: ["Node.js", "Express.js", "Koa.js", "PostgreSQL", "REST APIs"],
    impact: [
      "Established backend infrastructure from scratch.",
      "Supported fast reporting and analytics through PostgreSQL indexing and query optimization.",
      "[EDIT: add operational scale, latency, or reporting metric if available]",
    ],
    outcome:
      "A foundational warehouse backend for inventory, orders, shipments, reporting, and sensitive data protection.",
    coreFeatures: [
      "Inventory tracking APIs",
      "Order management APIs",
      "Shipment processing APIs",
      "PostgreSQL reporting optimization",
      "Authentication, access control, and rate limiting",
    ],
    visualHighlight:
      "Show a warehouse flow from inventory to orders to shipments to reporting with security gates.",
  },
];
