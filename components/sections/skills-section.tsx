"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/content/skills";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";

const signalStyles = {
  mint: "bg-[rgba(124,255,212,0.14)] border-[rgba(124,255,212,0.32)] text-[var(--accent-mint)]",
  blue: "bg-[rgba(122,162,255,0.14)] border-[rgba(122,162,255,0.32)] text-[var(--accent-blue)]",
  violet:
    "bg-[rgba(167,139,250,0.14)] border-[rgba(167,139,250,0.32)] text-[var(--accent-violet)]",
} as const;

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Technical Ecosystem"
          title="Skills as a connected system"
          description="Production engineering capabilities grouped by how they work together across product delivery, scale, and AI-assisted workflows."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT_REVEAL}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease: EASE_OUT,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] sm:p-6"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-zinc-100">
                      {category.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {category.summary}
                    </p>
                  </div>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-xs ${signalStyles[category.signal]}`}
                    aria-hidden
                  >
                    ◉
                  </span>
                </div>

                <ul className="grid gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm leading-6 text-zinc-300"
                    >
                      <span className="mt-1 text-[10px] text-zinc-500">◆</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
