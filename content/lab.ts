export type LabTrack = "experiment" | "prototype" | "ai-idea" | "automation";

export type LabItem = {
  id: string;
  title: string;
  track: LabTrack;
  status: "active" | "exploring" | "concept";
  summary: string;
  value: string;
  focus: string[];
  note?: string;
};

export const labItems: LabItem[] = [
  {
    id: "da-copilot-workflow-lab",
    title: "DA Copilot Workflow Lab",
    track: "prototype",
    status: "active",
    summary:
      "Experimenting with analyst-first flows where natural-language prompts become schema-aware SQL, then pass through validation before execution.",
    value:
      "Helps analysts move from question to trustworthy insight with less manual query drafting and context switching.",
    focus: [
      "Natural-language to SQL pipeline",
      "Schema metadata grounding",
      "Query validation before execution",
      "Insight cards and chart exploration UX",
    ],
    note: "Active development based on current DA Copilot product direction.",
  },
  {
    id: "llm-reliability-lane",
    title: "LLM Reliability Lane",
    track: "ai-idea",
    status: "active",
    summary:
      "Exploring resilient AI request handling with primary/fallback provider strategy to reduce workflow interruptions.",
    value:
      "Maintains continuity for analyst workflows when one provider degrades or becomes unavailable.",
    focus: [
      "Gemini primary orchestration",
      "Groq fallback path",
      "[EDIT: add fallback trigger policy details]",
    ],
    note: "Grounded in the DA Copilot architecture currently in use.",
  },
  {
    id: "queue-reliability-experiments",
    title: "Queue Reliability Experiments",
    track: "experiment",
    status: "exploring",
    summary:
      "Applying production queue lessons (idempotency, retries, concurrency controls) to reusable reliability patterns.",
    value:
      "Reduces duplicate processing and failure rates in asynchronous service workflows.",
    focus: [
      "Idempotent job handling",
      "Retry/backoff strategy",
      "Concurrency guards for distributed updates",
      "Queue observability metrics",
    ],
    note: "Derived from shipped queue architecture work in logistics systems.",
  },
  {
    id: "api-performance-rig",
    title: "API Performance Rig",
    track: "experiment",
    status: "exploring",
    summary:
      "A practical testing lane for query optimization, caching behavior, and response-time bottleneck analysis.",
    value:
      "Improves latency and throughput decisions before changes hit production paths.",
    focus: [
      "PostgreSQL query/index tuning",
      "Redis caching patterns",
      "Batch/asynchronous execution trade-offs",
    ],
    note: "Inspired by repeated API and database optimization wins across roles.",
  },
  {
    id: "serverless-cost-automation",
    title: "Serverless Cost Automation",
    track: "automation",
    status: "concept",
    summary:
      "Concept lane for tracking and tuning cold starts, memory sizing, and function execution budgets.",
    value:
      "Supports cost-efficient cloud operations without sacrificing performance.",
    focus: [
      "Lambda memory/runtime profiling",
      "Cost anomaly checks",
      "[EDIT: add planned automation tool or script details]",
    ],
  },
  {
    id: "security-hardening-playbook",
    title: "Security Hardening Playbook",
    track: "prototype",
    status: "concept",
    summary:
      "A structured security checklist and reusable middleware baseline for API auth and input safety.",
    value:
      "Accelerates secure defaults when spinning up new backend services and prototypes.",
    focus: [
      "JWT / OAuth flow validation",
      "Input validation baselines",
      "Rate limiting defaults",
      "OWASP-oriented review prompts",
    ],
    note: "[EDIT: add examples of implemented checklist tooling if available]",
  },
];
