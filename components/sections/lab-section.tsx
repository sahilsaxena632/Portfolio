"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { labItems, LabTrack } from "@/content/lab";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";

const trackMeta: Record<LabTrack, { label: string; signal: string; glyph: string }> = {
  experiment: {
    label: "Experiment",
    signal:
      "text-[var(--accent-blue)] border-[rgba(122,162,255,0.35)] bg-[rgba(122,162,255,0.12)]",
    glyph: "◌",
  },
  prototype: {
    label: "Prototype",
    signal:
      "text-[var(--accent-mint)] border-[rgba(124,255,212,0.35)] bg-[rgba(124,255,212,0.12)]",
    glyph: "◇",
  },
  "ai-idea": {
    label: "AI Idea",
    signal:
      "text-[var(--accent-violet)] border-[rgba(167,139,250,0.35)] bg-[rgba(167,139,250,0.12)]",
    glyph: "✦",
  },
};

export function LabSection() {
  return (
    <section id="lab" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <Container className="relative z-10 space-y-8 sm:space-y-10">
        <SectionHeading
          eyebrow="Lab"
          title="Ideas I'm poking at"
          description="Small explorations into AI workflows and backend reliability — where curiosity turns into reusable patterns."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {labItems.map((item, index) => {
            const meta = trackMeta[item.track];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_REVEAL}
                transition={{ duration: 0.42, delay: index * 0.05, ease: EASE_OUT }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] ${meta.signal}`}
                >
                  <span aria-hidden>{meta.glyph}</span>
                  {meta.label}
                </span>

                <h3 className="font-display mt-3 text-lg font-semibold tracking-tight text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{item.summary}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.focus.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-zinc-400"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
