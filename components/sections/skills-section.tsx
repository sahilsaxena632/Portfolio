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
    <section id="skills" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <Container className="space-y-8 sm:space-y-10">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The tools I reach for"
          description="A focused backend and cloud toolkit — the stack behind the systems above."
        />

        <div className="grid gap-4 sm:grid-cols-2">
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
              <div className="relative z-10">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs ${signalStyles[category.signal]}`}
                    aria-hidden
                  >
                    ◉
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-zinc-100">
                      {category.label}
                    </h3>
                    <p className="text-xs leading-5 text-zinc-500">
                      {category.summary}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-white/10 bg-black/20 px-2.5 py-1.5 text-[13px] leading-5 text-zinc-300"
                    >
                      {skill}
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
