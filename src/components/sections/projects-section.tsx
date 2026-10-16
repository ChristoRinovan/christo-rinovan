import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";
import { ProjectCardReveal } from "./project-card-reveal";

export function ProjectsSection() {
  // The homepage is a curated preview. All project details retain their own slug pages.
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section className="scroll-mt-20 bg-page py-24 sm:py-30 lg:py-36" id="projects">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col gap-10 md:gap-12">
          <header className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="inline-flex rounded-full border border-accent/25 bg-surface-accent px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-accent uppercase">
              Selected work
            </span>
            <h2 className="max-w-[20ch] text-[clamp(2.25rem,4.3vw,3.75rem)] leading-[1.08] font-extrabold tracking-[-0.05em] text-text">
              A few projects, explained properly.
            </h2>
            {/* TODO (copy): replace this original template placeholder yourself. */}
            <p className="max-w-xl text-base leading-[1.75] text-muted sm:text-lg">
              Focus on 2–3 strong projects. Show the problem, your decisions, and what you actually contributed.
            </p>
          </header>

          <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-7">
            {featuredProjects.map((project, index) => (
              <ProjectCardReveal index={index} key={project.slug}>
                <ProjectCard project={project} />
              </ProjectCardReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
