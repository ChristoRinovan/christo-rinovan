import { Container } from "@/components/ui/container";

import { AboutTypewriter } from "./about-typewriter";

export function AboutSection() {
  return (
    <section className="scroll-mt-20 bg-surface-soft py-24 sm:py-30 lg:py-36" id="about">
      <Container>
        <div className="grid min-w-0 grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14 lg:gap-20">
          <div className="min-w-0">
            <AboutTypewriter text="I’m interested in the systems behind useful products." />
          </div>

          <div className="flex min-w-0 flex-col items-start gap-6">
            <span className="inline-flex rounded-full border border-accent/25 bg-surface-accent px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              About
            </span>

            <p className="text-lg leading-[1.75] font-semibold text-text">
              My path into software development began with a career transition from Philosophy of Divinity and a desire to turn ideas into practical products people can actually use.
            </p>

            <p className="text-base leading-[1.85] text-muted sm:text-[1.05rem]">
              I graduated from STFT Widya Sasana Malang in 2025 with a degree in Philosophy of Divinity. After graduating, I spent several months in pastoral service in rural
              Kalimantan before transitioning into software development through Purwadhika’s Full Stack Web Development Job Connector program.
            </p>
            <p className="text-base leading-[1.85] text-muted sm:text-[1.05rem]">
              Through team projects, I found myself most interested in backend development—designing APIs, authentication and access control, data models, and business workflows. I
              also work across the frontend when needed, which helps me understand how backend decisions affect the application as a whole.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
