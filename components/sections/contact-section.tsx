"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { EASE_OUT, VIEWPORT_REVEAL } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const contactActions = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: siteConfig.contact.links.github,
    href: siteConfig.contact.links.github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: siteConfig.contact.links.linkedin,
    href: siteConfig.contact.links.linkedin,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,212,0.12),transparent_68%)] blur-3xl"
      />
      <Container className="relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Closing Signal</p>
              <h2 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s build the next useful product layer for real users.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                I&apos;m open to backend, platform, and AI-assisted product engineering opportunities.
                If you&apos;re building systems that need scale, reliability, and practical AI workflows,
                I&apos;d love to connect.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-xs text-zinc-300">
                  {siteConfig.role}
                </span>
                <span className="rounded-full border border-[rgba(124,255,212,0.32)] bg-[rgba(124,255,212,0.10)] px-3 py-1 text-xs text-[var(--accent-mint)]">
                  {siteConfig.location}
                </span>
                <span className="rounded-full border border-white/12 bg-black/25 px-3 py-1 text-xs text-zinc-300">
                  {siteConfig.contact.phone}
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {contactActions.map((action) => (
                <ContactButton
                  key={action.id}
                  label={action.label}
                  value={action.value}
                  href={action.href}
                  external={action.external}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function ContactButton({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external: boolean;
}) {
  const commonClassName =
    "group flex items-center justify-between rounded-2xl border border-white/12 bg-black/25 px-4 py-3 text-left transition duration-300 hover:border-white/30 hover:bg-white/[0.08]";

  if (external && value.startsWith("[EDIT")) {
    return (
      <div className={`${commonClassName} cursor-not-allowed opacity-80`} aria-disabled="true">
        <span>
          <span className="block text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            {label}
          </span>
          <span className="mt-1 block text-sm text-zinc-300">{value}</span>
        </span>
        <span className="text-zinc-500">→</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      className={commonClassName}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>
        <span className="block text-[11px] uppercase tracking-[0.18em] text-zinc-500">
          {label}
        </span>
        <span className="mt-1 block text-sm text-zinc-100">{value}</span>
      </span>
      <span
        aria-hidden
        className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-200"
      >
        →
      </span>
    </a>
  );
}
