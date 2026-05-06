"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { labItems, LabTrack } from "@/content/lab";
import { EASE_OUT } from "@/lib/motion";

const trackMeta: Record<
  LabTrack,
  { label: string; signal: string; glow: string; glyph: string }
> = {
  experiment: {
    label: "Experiment",
    signal: "text-[var(--accent-blue)] border-[rgba(122,162,255,0.35)] bg-[rgba(122,162,255,0.15)]",
    glow: "from-[rgba(122,162,255,0.22)]",
    glyph: "◌",
  },
  prototype: {
    label: "Prototype",
    signal: "text-[var(--accent-mint)] border-[rgba(124,255,212,0.35)] bg-[rgba(124,255,212,0.15)]",
    glow: "from-[rgba(124,255,212,0.22)]",
    glyph: "◇",
  },
  "ai-idea": {
    label: "AI Idea",
    signal:
      "text-[var(--accent-violet)] border-[rgba(167,139,250,0.35)] bg-[rgba(167,139,250,0.15)]",
    glow: "from-[rgba(167,139,250,0.22)]",
    glyph: "✦",
  },
  automation: {
    label: "Automation",
    signal: "text-zinc-200 border-white/30 bg-white/10",
    glow: "from-white/20",
    glyph: "▣",
  },
};

const filters: Array<{ id: "all" | LabTrack; label: string }> = [
  { id: "all", label: "All Tracks" },
  { id: "prototype", label: "Prototypes" },
  { id: "experiment", label: "Experiments" },
  { id: "ai-idea", label: "AI Ideas" },
  { id: "automation", label: "Automation" },
];

export function LabSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | LabTrack>("all");

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") return labItems;
    return labItems.filter((item) => item.track === activeFilter);
  }, [activeFilter]);

  return (
    <section id="lab" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 hidden h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.10),transparent_68%)] blur-3xl sm:block"
      />

      <Container className="relative z-10 space-y-8 sm:space-y-10">
        <SectionHeading
          eyebrow="Innovation Lab"
          title="Experiments, prototypes, and technical curiosity"
          description="A high-signal snapshot of active explorations and concept lanes across AI workflows, automation, and backend systems thinking."
        />

        <div role="group" aria-label="Lab track filters" className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const active = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveFilter(filter.id)}
                className={[
                  "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                  active
                    ? "border-[rgba(124,255,212,0.35)] bg-[rgba(124,255,212,0.14)] text-[var(--accent-mint)]"
                    : "border-white/15 bg-white/[0.03] text-zinc-400 hover:border-white/30 hover:text-zinc-200",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item, index) => {
            const meta = trackMeta[item.track];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.42,
                  delay: index * 0.04,
                  ease: EASE_OUT,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:p-6"
              >
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative z-10">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="space-y-2">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] ${meta.signal}`}
                      >
                        <span aria-hidden>{meta.glyph}</span>
                        {meta.label}
                      </span>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-100">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-zinc-300">{item.summary}</p>
                  <p className="mt-3 rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-zinc-300">
                    {item.value}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  {item.note ? (
                    <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-6 text-zinc-500">
                      {item.note}
                    </p>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
