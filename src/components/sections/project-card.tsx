import { Card, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="project-card" padding={0} shadow="none">
      <Stack gap="lg" h="100%">
        {project.image ? (
          <div className="project-image">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(max-width: 62rem) 100vw, 50vw"
              className="project-image-img"
            />
          </div>
        ) : (
          <div className="project-placeholder">Project visual / screenshot</div>
        )}

        <Group gap="xs">
          <Text className="project-meta">{project.year}</Text>
          <Text className="muted-text" aria-hidden="true">
            •
          </Text>
          <Text className="project-meta">{project.role}</Text>
        </Group>

        <Stack gap="xs">
          <Title className="project-card-title" order={3}>
            {project.title}
          </Title>
          <Text className="project-card-copy">{project.summary}</Text>
        </Stack>

        <Group gap="xs">
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </Group>

        <div style={{ marginTop: "auto" }}>
          <Button href={`/projects/${project.slug}`} rightSection={<IconArrowUpRight aria-hidden size={18} stroke={1.8} />} variant="secondary">
            Read case study
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
