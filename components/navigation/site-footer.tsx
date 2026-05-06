import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[rgba(5,7,11,0.6)] py-8 backdrop-blur-md">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Crafted for performance, clarity, and impact.
          </p>
          <nav aria-label="Footer quick links" className="flex items-center gap-6">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
