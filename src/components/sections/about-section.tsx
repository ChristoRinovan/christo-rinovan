import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24" id="about">
      <Container>
        <SectionHeading
          description="Use this section to explain your direction as a developer, how you approach problems, and the kind of work you enjoy. Keep it personal, but still relevant to recruiters and clients."
          eyebrow="About"
          title="A short story about how you work."
        />
      </Container>
    </section>
  );
}
