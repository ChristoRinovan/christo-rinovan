import { Card, CardSection } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="group flex h-full min-w-0 flex-col overflow-hidden rounded-card border border-border bg-surface p-0 shadow-none transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft focus-within:-translate-y-1 focus-within:border-accent/40 focus-within:shadow-soft motion-reduce:transform-none"
      padding={0}
      withBorder
    >
      <CardSection className="relative aspect-video overflow-hidden bg-surface-accent">
        {project.image ? (
          <Image
            alt={project.image.alt}
            className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04] motion-safe:group-focus-within:scale-[1.04]"
            fill
            sizes="(max-width: 61.99rem) 100vw, 480px"
            src={project.image.src}
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-center text-sm font-semibold text-accent">
            Project visual / screenshot
          </div>
        )}
      </CardSection>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl leading-snug font-extrabold tracking-[-0.035em] text-text sm:text-2xl">
            {project.title}
          </h3>
          <p className="text-sm leading-[1.7] text-muted sm:text-[0.95rem]">
            {project.summary}
          </p>
        </div>

        <div className="mt-auto pt-1">
          <Button
            className="w-full"
            href={`/projects/${project.slug}`}
            rightSection={
              <IconArrowUpRight
                aria-hidden
                className="transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-safe:group-focus-within:translate-x-1"
                size={18}
                stroke={1.8}
              />
            }
            variant="secondary"
          >
            View Details<span className="sr-only"> for {project.title}</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
