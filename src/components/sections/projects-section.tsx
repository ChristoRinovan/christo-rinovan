import { SimpleGrid, Stack } from "@mantine/core";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  // Only projects marked as featured are shown on the homepage.
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="scroll-mt-20 py-24 md:py-[7.5rem]" id="projects">
      <Container>
        <Stack gap={48}>
          <SectionHeading
            eyebrow="Selected work"
            title="A few projects, explained properly."
            description="Focus on 2–3 strong projects. Show the problem, your decisions, and what you actually contributed."
          />

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
