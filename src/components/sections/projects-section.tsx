import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24" id="projects">
      <Container>
        <SectionHeading
          description="Choose only a few projects and explain the problem, your contribution, and the result. Quality matters more than quantity here."
          eyebrow="Selected work"
          title="Projects that show how I solve problems."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
