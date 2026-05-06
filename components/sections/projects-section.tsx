"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PortfolioProject, projects } from "@/content/projects";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";

const detailLabels = [
  ["problem", "Problem"],
  ["approach", "Approach"],
  ["outcome", "Outcome"],
] as const;

export function ProjectsSection() {
  const [openProjectId, setOpenProjectId] = useState(projects[0]?.id ?? "");

  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-20 hidden h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,212,0.12),transparent_65%)] blur-3xl sm:block"
      />
      <Container className="relative z-10 space-y-8 sm:space-y-12">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects as product systems"
          description="A ranked set of case-study cards built from resume-backed work, with DA Copilot highlighted as the active flagship product direction."
        />

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCaseStudyCard
              key={project.id}
              project={project}
              rank={index + 1}
              isOpen={openProjectId === project.id}
              onToggle={() =>
                setOpenProjectId((current) =>
                  current === project.id ? "" : project.id,
                )
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

type ProjectCardProps = {
  project: PortfolioProject;
  rank: number;
  isOpen: boolean;
  onToggle: () => void;
};

function ProjectCaseStudyCard({
  project,
  rank,
  isOpen,
  onToggle,
}: ProjectCardProps) {
  const isFlagship = project.status === "active";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_REVEAL}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className={[
        "group relative overflow-hidden rounded-[1.75rem] border backdrop-blur-xl transition duration-300",
        isFlagship
          ? "border-[rgba(124,255,212,0.32)] bg-[linear-gradient(135deg,rgba(124,255,212,0.10),rgba(122,162,255,0.05)_36%,rgba(255,255,255,0.04))] shadow-[0_0_80px_rgba(124,255,212,0.12)]"
          : "border-white/10 bg-white/[0.035] hover:border-white/20 hover:bg-white/[0.055]",
      ].join(" ")}
    >
      <div
        aria-hidden
        className={[
          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          isFlagship
            ? "bg-[radial-gradient(circle_at_85%_10%,rgba(124,255,212,0.18),transparent_34%)]"
            : "bg-[radial-gradient(circle_at_85%_10%,rgba(122,162,255,0.12),transparent_34%)]",
        ].join(" ")}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="relative z-10 grid w-full gap-5 p-4 text-left sm:gap-8 sm:p-7 lg:grid-cols-[minmax(0,1fr)_19rem] lg:p-8"
      >
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              {String(rank).padStart(2, "0")}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
              {project.eyebrow}
            </span>
            {isFlagship ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,255,212,0.24)] bg-[rgba(124,255,212,0.08)] px-3 py-1 text-[11px] font-medium text-[var(--accent-mint)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)] shadow-[0_0_12px_rgba(124,255,212,0.9)]" />
                Active product in development
              </span>
            ) : null}
          </div>

          <div className="space-y-3">
            <h3
              className={[
                "font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl",
                isFlagship ? "lg:text-5xl" : "",
              ].join(" ")}
            >
              {project.name}
            </h3>
            <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              {project.problem}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, isFlagship ? 8 : 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex min-h-[12rem] flex-col overflow-hidden rounded-3xl border border-white/10 bg-black/30 sm:min-h-56">
          <div className="relative min-h-[11rem] flex-1 overflow-hidden p-4 sm:min-h-[15rem] sm:p-5">
            <ProjectVisual project={project} />
          </div>
          <div className="shrink-0 border-t border-white/10 bg-zinc-950/95 p-3 backdrop-blur-md sm:p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Visual focus
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {project.visualHighlight}
            </p>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
            className="relative z-10 overflow-hidden"
          >
            <div className="border-t border-white/10 px-4 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6 lg:px-8 lg:pb-8">
              <div className="grid gap-4 lg:grid-cols-3">
                {detailLabels.map(([key, label]) => (
                  <DetailPanel
                    key={key}
                    label={label}
                    text={project[key]}
                    highlight={isFlagship && key === "approach"}
                  />
                ))}
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <ListPanel title="Core Features" items={project.coreFeatures} />
                <ListPanel title="Impact" items={project.impact} accent />
              </div>

              {project.progress ? (
                <div className="mt-4 rounded-3xl border border-[rgba(124,255,212,0.18)] bg-[rgba(124,255,212,0.05)] p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent-mint)]">
                    Current progress
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-300 sm:grid-cols-3">
                    {project.progress.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-mint)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

function DetailPanel({
  label,
  text,
  highlight = false,
}: {
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-4 sm:p-5",
        highlight
          ? "border-[rgba(124,255,212,0.18)] bg-[rgba(124,255,212,0.05)]"
          : "border-white/10 bg-black/20",
      ].join(" ")}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
    </div>
  );
}

function ListPanel({
  title,
  items,
  accent = false,
}: {
  title: string;
  items: string[];
  accent?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-4 sm:p-5">
      <p
        className={[
          "font-mono text-[11px] uppercase tracking-[0.2em]",
          accent ? "text-[var(--accent-mint)]" : "text-zinc-500",
        ].join(" ")}
      >
        {title}
      </p>
      <ul className="mt-4 grid gap-3 text-sm leading-6 text-zinc-300 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              className={[
                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                accent ? "bg-[var(--accent-mint)]" : "bg-zinc-500",
              ].join(" ")}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectVisual({ project }: { project: PortfolioProject }) {
  const isFlagship = project.status === "active";

  if (isFlagship) {
    return (
      <div className="relative h-full min-h-[10rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 h-16 w-16 rounded-full bg-[var(--accent-mint)] opacity-20 blur-2xl sm:right-6 sm:top-4 sm:h-24 sm:w-24 sm:blur-3xl"
        />
        <div className="grid h-full min-h-[9.5rem] grid-rows-[auto_1fr_auto] gap-2 sm:gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-2.5 sm:p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Analyst asks
            </p>
            <p className="mt-1.5 text-xs leading-snug text-zinc-200 sm:mt-2 sm:text-sm">
              Show revenue trends by selected tables
            </p>
          </div>
          <div className="min-h-0 rounded-2xl border border-[rgba(124,255,212,0.18)] bg-black/35 p-2.5 sm:p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--accent-mint)]">
              Schema-aware SQL
            </p>
            <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
              <span className="block h-2 w-4/5 rounded-full bg-white/20" />
              <span className="block h-2 w-2/3 rounded-full bg-white/15" />
              <span className="block h-2 w-3/4 rounded-full bg-[rgba(124,255,212,0.35)]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {["Validated", "Charts", "Cards"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-1.5 text-center text-[10px] text-zinc-300 sm:p-2 sm:text-[11px]"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[10rem] items-center justify-center">
      <div className="pointer-events-none absolute left-6 top-6 h-16 w-16 rounded-full bg-[var(--accent-blue)] opacity-15 blur-2xl sm:left-8 sm:top-8 sm:h-20 sm:w-20 sm:blur-3xl" />
      <div className="grid place-items-center">
        <div className="relative h-36 w-36">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-5 rounded-full border border-[rgba(122,162,255,0.28)]" />
          <div className="absolute inset-12 rounded-full bg-[rgba(122,162,255,0.24)] shadow-[0_0_32px_rgba(122,162,255,0.24)]" />
          {[0, 1, 2, 3].map((node) => (
            <span
              key={node}
              className="absolute h-2.5 w-2.5 rounded-full bg-zinc-200 shadow-[0_0_16px_rgba(255,255,255,0.35)]"
              style={{
                left: `${50 + Math.cos((node * Math.PI) / 2) * 45}%`,
                top: `${50 + Math.sin((node * Math.PI) / 2) * 45}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
