import Image from "next/image";

import { Container } from "@/components/ui/container";
import { techStack } from "@/config/tech-stack";

export function SkillsSection() {
  return (
    <section
      className="scroll-mt-20 bg-surface-soft py-20 sm:py-28 lg:py-36"
      id="skills"
      aria-labelledby="skills-title"
    >
      <Container>
        <div className="grid min-w-0 grid-cols-[minmax(0,3fr)_minmax(0,1fr)] items-center gap-3 sm:gap-6 lg:gap-12">
          <ul
            className="grid min-w-0 list-none grid-cols-2 justify-items-center gap-2 p-0 sm:grid-cols-3 sm:gap-4 lg:gap-6"
            aria-label="Technologies I've used"
          >
            {techStack.map((tech) => (
              <li
                className="flex aspect-square w-full max-w-24 items-center justify-center rounded-xl border border-border bg-surface p-2 shadow-sm sm:max-w-32 sm:rounded-card sm:p-4"
                key={tech.name}
              >
                <Image
                  alt={tech.name}
                  className="h-full w-full object-contain"
                  height={88}
                  src={tech.image}
                  unoptimized={tech.image.endsWith(".svg")}
                  width={88}
                />
              </li>
            ))}
          </ul>

          <h2
            className="min-w-0 text-[clamp(1rem,4vw,3.25rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-text break-words"
            id="skills-title"
          >
            Tech I've Used
          </h2>
        </div>
      </Container>
    </section>
  );
}
