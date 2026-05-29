"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { EASE_OUT } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

const HeroScene = dynamic(
  () =>
    import("@/components/three/hero-scene").then((mod) => ({
      default: mod.HeroScene,
    })),
  { ssr: false },
);

export function HeroSection() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const springX = useSpring(pointerX, { stiffness: 60, damping: 20, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 60, damping: 20, mass: 0.4 });

  const translateX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      pointerX.set(x);
      pointerY.set(y);
    };
    window.addEventListener("pointermove", handlePointer);
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [pointerX, pointerY]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[86svh] w-full items-center overflow-hidden pb-16 pt-24 sm:min-h-[100svh] sm:py-0"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_0%,rgba(5,7,11,0.55)_55%,rgba(5,7,11,0.95)_100%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-b from-transparent to-[#05070b]"
      />

      <Container className="relative z-20">
        <motion.div
          style={{ x: translateX, y: translateY }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-300 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-mint)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-mint)]" />
            </span>
            {siteConfig.status.label}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.18 }}
            className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 sm:mt-7 sm:text-xs sm:tracking-[0.32em]"
          >
            {siteConfig.role} · {siteConfig.discipline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.28 }}
            className="font-display mt-3 text-[clamp(2.25rem,8vw,4.5rem)] font-semibold leading-[0.98] tracking-tight sm:mt-4"
          >
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {siteConfig.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.42 }}
            className="font-display mt-5 max-w-3xl text-balance text-[clamp(1.25rem,4vw,2rem)] font-medium leading-snug text-white sm:mt-6"
          >
            {siteConfig.brandStatement}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.56 }}
            className="mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-base"
          >
            {siteConfig.brandSubline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.72 }}
            className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:mt-9"
          >
            <Button href={siteConfig.ctas.primary.href} variant="primary">
              {siteConfig.ctas.primary.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <Button href={siteConfig.ctas.secondary.href} variant="ghost">
              {siteConfig.ctas.secondary.label}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 4, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          y: {
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          },
        }}
        className="absolute inset-x-0 bottom-8 z-20 hidden justify-center sm:flex"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          <span>Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
