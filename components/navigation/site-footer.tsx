import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[rgba(5,7,11,0.6)] py-8 backdrop-blur-md">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name} · {siteConfig.role}
          </p>
          <nav
            aria-label="Footer links"
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-zinc-100"
            >
              Email
            </a>
            <a
              href={siteConfig.contact.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              GitHub
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
