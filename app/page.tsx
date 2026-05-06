import { NoiseOverlay } from "@/components/effects/noise-overlay";
import { SiteFooter, TopNav } from "@/components/navigation";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  LabSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <TopNav />
      <main id="main" className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <LabSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
