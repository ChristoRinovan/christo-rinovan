import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

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
    <article className="py-16 sm:py-24">
      <Container>
        <Link className="text-sm font-medium text-neutral-600 hover:text-neutral-950" href="/#projects">
          ← Back to projects
        </Link>

        <header className="mt-10 max-w-4xl">
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-neutral-500">
            <span>{project.year}</span>
            <span aria-hidden="true">•</span>
            <span>{project.role}</span>
          </div>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology}>{technology}</Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
            {project.liveUrl ? (
              <Link className="underline underline-offset-4" href={project.liveUrl}>
                Live project ↗
              </Link>
            ) : null}
            {project.repositoryUrl ? (
              <Link className="underline underline-offset-4" href={project.repositoryUrl}>
                Repository ↗
              </Link>
            ) : null}
          </div>
        </header>

        <div className="mt-12 aspect-[16/8] rounded-3xl border border-neutral-200 bg-neutral-100 p-8">
          <p className="text-sm text-neutral-500">Large project screenshot / visual placeholder</p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[220px_1fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Challenge
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-neutral-700">
            {project.caseStudy.challenge}
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Solution
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-neutral-700">
            {project.caseStudy.solution}
          </p>

          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Highlights
          </h2>
          <ul className="max-w-3xl space-y-3 text-lg leading-8 text-neutral-700">
            {project.caseStudy.highlights.map((highlight) => (
              <li className="flex gap-3" key={highlight}>
                <span aria-hidden="true">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </article>
  );
}
