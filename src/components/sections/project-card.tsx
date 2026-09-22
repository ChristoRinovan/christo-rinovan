import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project.types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="mb-8 aspect-[16/9] rounded-2xl border border-neutral-200 bg-neutral-100 p-6">
        <div className="flex h-full items-end">
          <p className="text-sm text-neutral-500">
            Project visual / screenshot placeholder
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-500">
        <span>{project.year}</span>
        <span aria-hidden="true">•</span>
        <span>{project.role}</span>
      </div>

      <h3 className="mt-3 text-2xl font-semibold tracking-tight">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="mt-3 leading-7 text-neutral-600">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      <Link
        className="mt-6 inline-flex text-sm font-semibold underline decoration-neutral-300 underline-offset-4 transition group-hover:decoration-neutral-900"
        href={`/projects/${project.slug}`}
      >
        Read case study
      </Link>
    </article>
  );
}
