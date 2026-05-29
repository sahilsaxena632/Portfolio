"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  PortfolioProject,
  ProjectMetric,
  projects,
} from "@/content/projects";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";

const detailRows = [
  ["problem", "Problem"],
  ["approach", "Approach"],
  ["result", "Result"],
] as const;

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-20 hidden h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,212,0.12),transparent_65%)] blur-3xl sm:block"
      />
      <Container className="relative z-10 space-y-8 sm:space-y-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Backend systems built for scale"
          description="Case studies from shipped production work and an active product, scannable in seconds — with DA Copilot as the flagship."
        />

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} rank={index + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  rank,
}: {
  project: PortfolioProject;
  rank: number;
}) {
  const isFlagship = Boolean(project.flagship);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: 0.5, ease: EASE_OUT }}
      className={[
        "group relative overflow-hidden rounded-3xl border backdrop-blur-xl transition duration-300",
        isFlagship
          ? "border-[rgba(124,255,212,0.34)] bg-[linear-gradient(135deg,rgba(124,255,212,0.10),rgba(122,162,255,0.05)_38%,rgba(255,255,255,0.035))] shadow-[0_0_70px_rgba(124,255,212,0.10)]"
          : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.05]",
      ].join(" ")}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />

      <div className="relative z-10 grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-8">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              {String(rank).padStart(2, "0")}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
              {project.category}
            </span>
            {isFlagship ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,255,212,0.24)] bg-[rgba(124,255,212,0.08)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent-mint)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_12px_rgba(124,255,212,0.9)]" />
                Flagship · in development
              </span>
            ) : (
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] text-zinc-400">
                Shipped
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3
              className={[
                "font-display font-semibold tracking-tight text-white",
                isFlagship ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
              ].join(" ")}
            >
              {project.name}
            </h3>
            <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-[15px]">
              {project.summary}
            </p>
          </div>

          <dl className="grid gap-3 sm:grid-cols-3">
            {detailRows.map(([key, label]) => (
              <div
                key={key}
                className="rounded-2xl border border-white/10 bg-black/20 p-3.5"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  {label}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-6 text-zinc-300">
                  {project[key]}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links?.length ? (
            <div className="flex flex-wrap gap-2.5 pt-1">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
                >
                  {link.label}
                  <span aria-hidden className="transition-transform group-hover/link:translate-x-0.5">
                    →
                  </span>
                </a>
              ))}
            </div>
          ) : project.confidential ? (
            <p className="pt-1 text-xs text-zinc-500">
              Private — company work, code not public.
            </p>
          ) : null}
        </div>

        <div className="grid h-fit gap-2.5 self-start">
          {project.metrics.map((metric) => (
            <MetricTile key={metric.label} metric={metric} flagship={isFlagship} />
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function MetricTile({
  metric,
  flagship,
}: {
  metric: ProjectMetric;
  flagship: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-4",
        flagship
          ? "border-[rgba(124,255,212,0.2)] bg-[rgba(124,255,212,0.05)]"
          : "border-white/10 bg-black/20",
      ].join(" ")}
    >
      <p
        className={[
          "font-display text-2xl font-semibold tracking-tight",
          flagship ? "text-[var(--accent-mint)]" : "text-white",
        ].join(" ")}
      >
        {metric.value}
      </p>
      <p className="mt-1 text-xs leading-5 text-zinc-400">{metric.label}</p>
    </div>
  );
}
