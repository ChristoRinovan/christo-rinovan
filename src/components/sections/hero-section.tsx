import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="py-24 sm:py-32" id="home">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {siteConfig.role}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            I build useful digital experiences with thoughtful engineering.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Replace this copy with a short introduction that explains what you build,
            who you want to work with, and what makes your approach different.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects">View projects</Button>
            <Button href="/#contact" variant="secondary">
              Contact me
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
