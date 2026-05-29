import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#5cd9b0] text-zinc-950 shadow-[0_0_18px_rgba(92,217,176,0.18)] hover:bg-[#6fe3bf] hover:shadow-[0_0_26px_rgba(92,217,176,0.32)] hover:scale-[1.02]"
      : "border border-white/15 bg-white/5 text-zinc-100 backdrop-blur-md hover:border-white/30 hover:bg-white/[0.08]";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
