import type { Metadata } from "next";
import { Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { BulletList } from "@/components/ui/bullet-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MetaLabel } from "@/components/ui/meta-label";
import { Panel } from "@/components/ui/panel";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  // Next.js 16 gives dynamic route params as a Promise.
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
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
    <article className="pt-20 pb-28">
      <Container>
        <Stack gap={48}>
          <Stack gap="xl" maw={900}>
            <div>
              <Button
                href="/#projects"
                leftSection={
                  <IconArrowLeft aria-hidden size={18} stroke={1.8} />
                }
                variant="secondary"
              >
                Back to projects
              </Button>
            </div>

            <Group gap="sm">
              <MetaLabel>{project.year}</MetaLabel>
              <Text aria-hidden="true" className="text-[var(--muted)]">
                •
              </Text>
              <MetaLabel>{project.role}</MetaLabel>
            </Group>

            <Title
              className="text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-[var(--text)]"
              order={1}
            >
              {project.title}
            </Title>

            <Text className="max-w-[48rem] text-[1.1rem] leading-[1.8] text-[var(--muted)]">
              {project.description}
            </Text>

            <Group gap="xs">
              {project.technologies.map((technology) => (
                <Badge key={technology}>{technology}</Badge>
              ))}
            </Group>

            <Group gap="sm">
              {project.liveUrl ? (
                <Button
                  href={project.liveUrl}
                  rightSection={
                    <IconExternalLink aria-hidden size={18} stroke={1.8} />
                  }
                >
                  Live project
                </Button>
              ) : null}

              {project.repositoryUrl ? (
                <Button
                  href={project.repositoryUrl}
                  leftSection={
                    <IconBrandGithub aria-hidden size={18} stroke={1.8} />
                  }
                  variant="secondary"
                >
                  Repository
                </Button>
              ) : null}
            </Group>
          </Stack>

          <div className="grid min-h-[14rem] place-items-center rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-accent)] text-sm font-bold text-[var(--accent)]">
            Large project screenshot / visual placeholder
          </div>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <Panel>
              <Stack gap="md">
                <MetaLabel>Challenge</MetaLabel>

                <Title
                  className="font-extrabold text-[var(--text)]"
                  order={2}
                  size="h3"
                >
                  What needed to be solved?
                </Title>

                <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
                  {project.caseStudy.challenge}
                </Text>
              </Stack>
            </Panel>

            <Panel>
              <Stack gap="md">
                <MetaLabel>Solution</MetaLabel>

                <Title
                  className="font-extrabold text-[var(--text)]"
                  order={2}
                  size="h3"
                >
                  How did you approach it?
                </Title>

                <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
                  {project.caseStudy.solution}
                </Text>
              </Stack>
            </Panel>
          </SimpleGrid>

          <Panel>
            <Stack gap="md">
              <MetaLabel>Highlights</MetaLabel>

              <Title
                className="font-extrabold text-[var(--text)]"
                order={2}
                size="h3"
              >
                What is worth remembering?
              </Title>

              <BulletList items={project.caseStudy.highlights} />
            </Stack>
          </Panel>
        </Stack>
      </Container>
    </article>
  );
}
