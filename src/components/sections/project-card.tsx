import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MetaLabel } from "@/components/ui/meta-label";
import type { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="h-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-[1.4rem] transition-[transform,box-shadow,border-color] duration-[180ms] ease hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] hover:shadow-[var(--shadow)]"
      shadow="none"
    >
      <Stack gap="lg" h="100%">
        <div className="grid min-h-[14rem] place-items-center rounded-[var(--radius-md)] bg-[var(--surface-accent)] text-center text-[0.85rem] font-bold text-[var(--accent)]">
          Project visual / screenshot
        </div>

        <Group gap="xs">
          <MetaLabel>{project.year}</MetaLabel>
          <Text aria-hidden="true" className="text-[var(--muted)]">
            •
          </Text>
          <MetaLabel>{project.role}</MetaLabel>
        </Group>

        <Stack gap="xs">
          <Title
            className="font-extrabold tracking-[-0.03em] text-[var(--text)]"
            order={3}
          >
            {project.title}
          </Title>

          <Text className="leading-[1.7] text-[var(--muted)]">
            {project.summary}
          </Text>
        </Stack>

        <Group gap="xs">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </Group>

        <div className="mt-auto">
          <Button
            href={`/projects/${project.slug}`}
            rightSection={
              <IconArrowUpRight aria-hidden size={18} stroke={1.8} />
            }
            variant="secondary"
          >
            Read case study
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
