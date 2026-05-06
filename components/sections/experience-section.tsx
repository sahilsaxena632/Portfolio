"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExperienceEntry, experience } from "@/content/experience";
import { EASE_OUT } from "@/lib/motion";

export function ExperienceSection() {
  const [activeId, setActiveId] = useState(experience[0]?.id ?? "");
  const activeExperience =
    experience.find((entry) => entry.id === activeId) ?? experience[0];

  return (
    <section id="experience" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 hidden h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(122,162,255,0.10),transparent_65%)] blur-3xl sm:block"
      />
      <Container className="relative z-10 space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="A backend journey through scale, reliability, and ownership"
          description="A timeline of shipped systems, performance gains, cloud optimization, and distributed workflow ownership drawn directly from resume experience."
        />

        <div className="grid gap-6 lg:grid-cols-[22rem_minmax(0,1fr)] lg:gap-8">
          <TimelineRail activeId={activeId} onSelect={setActiveId} />
          <AnimatePresence mode="wait">
            <ExperiencePanel key={activeExperience.id} entry={activeExperience} />
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

function TimelineRail({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-[var(--accent-mint)] via-white/20 to-transparent sm:block"
      />
      <div className="grid gap-3">
        {experience.map((entry, index) => {
          const isActive = activeId === entry.id;
          return (
            <button
              key={entry.id}
              type="button"
              onClick={() => onSelect(entry.id)}
              className={[
                "group relative rounded-3xl border p-4 text-left transition duration-300",
                isActive
                  ? "border-[rgba(124,255,212,0.32)] bg-[rgba(124,255,212,0.07)] shadow-[0_0_40px_rgba(124,255,212,0.08)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]",
              ].join(" ")}
              aria-pressed={isActive}
            >
              <div className="flex gap-4">
                <span
                  className={[
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
                    isActive
                      ? "border-[rgba(124,255,212,0.45)] bg-[rgba(124,255,212,0.14)] text-[var(--accent-mint)]"
                      : "border-white/10 bg-black/25 text-zinc-500",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {entry.period}
                  </span>
                  <span className="mt-2 block font-display text-base font-semibold text-zinc-100">
                    {entry.phase}
                  </span>
                  <span className="mt-1 block text-sm text-zinc-400">
                    {entry.company}
                  </span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ExperiencePanel({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.35, ease: EASE_OUT }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <div
        aria-hidden
        className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[var(--accent-blue)] opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <div className="relative z-10">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-mint)]">
              {entry.period}
            </p>
            <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {entry.role}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              {entry.company}
              {entry.location ? ` / ${entry.location}` : ""}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Growth signal
            </p>
            <p className="mt-1 text-sm text-zinc-300">{entry.phase}</p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300">
          {entry.summary}
        </p>

        <div className="mt-7 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Built / Improved
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300">
              {entry.ownership.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-blue)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[rgba(124,255,212,0.18)] bg-[rgba(124,255,212,0.05)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-mint)]">
              Impact
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {entry.impact.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-zinc-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {entry.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
