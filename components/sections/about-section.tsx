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
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <Container className="relative z-10 grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="space-y-8"
        >
          <SectionHeading
            eyebrow="About"
            title="I like backend problems that don't have neat answers."
            description="Queues that can't drop a job, APIs that have to stay fast under load, databases that need to be both correct and quick."
          />

          <div className="space-y-5 text-[15px] leading-8 text-zinc-300 sm:text-base">
            <p>
              I&apos;m a backend engineer based in Faridabad with 3+ years
              shipping production systems for logistics and high-throughput
              platforms. Most of my work lives in the unglamorous-but-critical
              layer: REST and serverless APIs, queue-driven workflows, and the
              database and caching decisions that decide whether a system holds
              up at scale.
            </p>
            <p>
              At Fig1 and Etelligens I&apos;ve built services handling 100K+
              daily transactions and 1M+ concurrent requests, cut API latency
              and cloud cost, and made async pipelines reliable with idempotency
              and concurrency controls. I care about the boring details —
              retries, indexes, observability — because that&apos;s what keeps
              systems calm in production.
            </p>
            <p>
              Right now I&apos;m building{" "}
              <span className="text-[var(--accent-mint)]">DA Copilot</span>, an
              AI analytics workspace that turns plain-English questions into
              validated SQL — applying the same backend discipline to a brand-new
              kind of product.
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
