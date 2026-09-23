import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

/*
 * The homepage only composes sections.
 * Each section keeps its own UI and data-reading responsibility.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <JourneySection />
      <CtaSection />
      <ContactSection />
    </>
  );
}
