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
    id: "phone",
    label: "Phone",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/sahil-saxena",
    href: siteConfig.contact.links.linkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/sahilsaxena632",
    href: siteConfig.contact.links.github,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 hidden h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,255,212,0.12),transparent_68%)] blur-3xl sm:block"
      />
      <Container className="relative z-10 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_REVEAL}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="space-y-5">
              <p className="eyebrow">Get in touch</p>
              <h2 className="font-display max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for a backend engineer who sweats the details?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                I&apos;m open to backend and platform roles. If you&apos;re
                building systems that have to stay fast and reliable under real
                load, I&apos;d be glad to talk. I usually reply within a day.
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
