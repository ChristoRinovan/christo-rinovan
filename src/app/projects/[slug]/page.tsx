import type { Metadata } from "next";
import { Group,  SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { IconArrowLeft, IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { BulletList } from "@/components/ui/bullet-list";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="project-detail">
      <Container>
        <Stack gap={48}>
          <Stack gap="xl" maw={900}>
            <div>
              <Button href="/#projects" leftSection={<IconArrowLeft aria-hidden size={18} stroke={1.8} />} variant="secondary">
                Back to projects
              </Button>
            </div>

            <Group gap="sm">
              <Text className="project-meta">{project.year}</Text>
              <Text className="muted-text" aria-hidden="true">
                •
              </Text>
              <Text className="project-meta">{project.role}</Text>
            </Group>

            <Title className="project-detail-title" order={1}>
              {project.title}
            </Title>

            <Text className="project-detail-copy">{project.description}</Text>

            <Group gap="xs">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </Group>

            <Group gap="sm">
              {project.liveUrl ? (
                <Button href={project.liveUrl} rightSection={<IconExternalLink aria-hidden size={18} stroke={1.8} />}>
                  Live project
                </Button>
              ) : null}
              {project.repositoryUrl ? (
                <Button href={project.repositoryUrl} leftSection={<IconBrandGithub aria-hidden size={18} stroke={1.8} />} variant="secondary">
                  Repository
                </Button>
              ) : null}
            </Group>
          </Stack>

          <div className="project-visual">Large project screenshot / visual placeholder</div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <section className="case-study-panel">
              <Stack gap="md">
                <Text className="case-study-label">Challenge</Text>
                <Title className="case-study-title" order={2} size="h3">
                  What needed to be solved?
                </Title>
                <Text className="body-copy">{project.caseStudy.challenge}</Text>
              </Stack>
            </section>

            <section className="case-study-panel">
              <Stack gap="md">
                <Text className="case-study-label">Solution</Text>
                <Title className="case-study-title" order={2} size="h3">
                  How did you approach it?
                </Title>
                <Text className="body-copy">{project.caseStudy.solution}</Text>
              </Stack>
            </section>
          </SimpleGrid>

          <section className="case-study-panel">
            <Stack gap="md">
              <Text className="case-study-label">Highlights</Text>
              <Title className="case-study-title" order={2} size="h3">
                What is worth remembering?
              </Title>
              <BulletList className="highlight-list" items={project.caseStudy.highlights} />
            </Stack>
          </section>
        </Stack>
      </Container>
    </article>
  );
}
