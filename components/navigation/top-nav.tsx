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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[rgba(5,7,11,0.72)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          <Link
            href="#home"
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

          <Link
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-100 transition-colors hover:border-white/30 hover:bg-white/[0.08]"
          >
            Get in touch
          </Link>
        </div>
      </Container>
    </header>
  );
}
