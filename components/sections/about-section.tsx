"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";

const facts = [
  { label: "Experience", value: "3+ years in production engineering" },
  { label: "Focus", value: "Backend, cloud-native, AI-assisted products" },
  { label: "Location", value: "Faridabad, India" },
];

const credentials = [
  {
    label: "Master of Computer Applications",
    institution: "JC Bose University of Science and Technology",
  },
  {
    label: "Bachelor of Computer Applications",
    institution: "Amity University",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <Container className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="space-y-8"
        >
          <SectionHeading
            eyebrow="About"
            title="Engineering for scale, calm, and useful outcomes."
            description="A short story behind the systems and the direction I'm building toward."
          />

          <div className="space-y-5 text-base leading-8 text-zinc-300">
            <p>
              I&apos;m a software engineer with 3+ years of production
              backend and cloud-native experience. My work has focused on
              scalable APIs, distributed workflows, queue reliability,
              database performance, and cloud cost optimization across
              logistics and high-throughput systems.
            </p>
            <p>
              Across roles at Fig1 Inc. and Etelligens Technologies, I&apos;ve
              shipped systems handling 100K+ daily transactions, 50K+
              background jobs/day, and 1M+ concurrent requests — improving
              response times, reducing failures, and cutting AWS API costs.
            </p>
            <p>
              I&apos;m currently shaping{" "}
              <span className="text-[var(--accent-mint)]">DA Copilot</span>,
              an AI-assisted analytics workspace for data analysts —
              applying the same production discipline to natural-language
              data workflows, schema-aware SQL generation, and validated
              insight exploration.
            </p>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.05 }}
          className="space-y-4"
        >
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Snapshot
            </p>
            <ul className="mt-4 grid gap-3">
              {facts.map((fact) => (
                <li key={fact.label} className="text-sm leading-6">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                    {fact.label}
                  </span>
                  <span className="mt-1 block text-zinc-200">{fact.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
              Education
            </p>
            <ul className="mt-4 grid gap-4">
              {credentials.map((item) => (
                <li key={item.label} className="text-sm leading-6">
                  <span className="block text-zinc-200">{item.label}</span>
                  <span className="mt-1 block text-xs text-zinc-500">
                    {item.institution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </Container>
    </section>
  );
}
