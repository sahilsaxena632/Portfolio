"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Lab", href: "#lab" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled || open
          ? "border-b border-white/[0.06] bg-[rgba(5,7,11,0.78)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href="#home"
            onClick={() => setOpen(false)}
            className="font-display text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
          >
            {siteConfig.name}
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 text-sm text-zinc-400 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.08] sm:px-4"
            >
              Get in touch
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 transition-colors hover:border-white/30 md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={[
                    "absolute left-0 right-0 block h-px bg-current transition-transform",
                    open ? "top-1.5 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 block h-px bg-current transition-opacity",
                    open ? "top-1.5 opacity-0" : "top-1.5",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 right-0 block h-px bg-current transition-transform",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={[
          "overflow-hidden border-t transition-[max-height,opacity] duration-300 md:hidden",
          open
            ? "max-h-96 border-white/[0.06] opacity-100"
            : "max-h-0 border-transparent opacity-0",
        ].join(" ")}
      >
        <Container>
          <nav aria-label="Mobile sections" className="grid gap-1.5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
