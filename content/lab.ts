export type LabTrack = "experiment" | "prototype" | "ai-idea";

export type LabItem = {
  id: string;
  title: string;
  track: LabTrack;
  summary: string;
  focus: string[];
};

export const labItems: LabItem[] = [
  {
    id: "nl-to-sql",
    title: "Natural-language to SQL",
    track: "prototype",
    summary:
      "Grounding LLM prompts in schema metadata so generated SQL is validated before it ever touches the database.",
    focus: ["Schema grounding", "Query validation", "Insight UX"],
  },
  {
    id: "llm-reliability",
    title: "LLM provider failover",
    track: "ai-idea",
    summary:
      "A primary/fallback strategy (Gemini → Groq) that keeps AI workflows running when one provider degrades.",
    focus: ["Primary/fallback routing", "Graceful degradation"],
  },
  {
    id: "queue-reliability",
    title: "Queue reliability patterns",
    track: "experiment",
    summary:
      "Turning production lessons — idempotency, retries, concurrency guards — into reusable patterns for async workflows.",
    focus: ["Idempotent jobs", "Retry/backoff", "Concurrency guards"],
  },
];
