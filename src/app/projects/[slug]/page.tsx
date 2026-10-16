import type { Metadata } from "next";
import { IconArrowLeft, IconBrandGithub, IconCode, IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getProjectTechIcon } from "@/config/project-tech-icons";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14">
          <header className="flex flex-col items-start gap-5">
            <Button
              href="/#projects"
              leftSection={<IconArrowLeft aria-hidden size={18} stroke={1.8} />}
              variant="secondary"
            >
              Back to projects
            </Button>

            <h1 className="max-w-5xl text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-text">
              {project.title}
            </h1>
            <p className="text-xs font-extrabold tracking-[0.12em] text-accent uppercase sm:text-sm">
              {project.year} <span aria-hidden="true">·</span> {project.role}
            </p>
          </header>

          <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
            <div className="min-w-0">
              <p className="max-w-2xl text-base leading-[1.8] text-muted sm:text-lg">
                {project.description}
              </p>
            </div>

            <aside className="flex min-w-0 flex-col items-start gap-5" aria-label="Project technologies and links">
              <h2 className="text-sm font-extrabold tracking-[0.12em] text-text uppercase">
                Tech Stack
              </h2>
              <ul className="flex list-none flex-wrap gap-2 p-0" aria-label="Technologies used in this project">
                {project.technologies.map((technology) => {
                  const icon = getProjectTechIcon(technology);

                  return (
                    <li
                      aria-label={technology}
                      className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface p-2 shadow-sm"
                      key={technology}
                      title={technology}
                    >
                      {icon ? (
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="size-7 object-contain"
                          height={28}
                          src={icon}
                          unoptimized={icon.endsWith(".svg")}
                          width={28}
                        />
                      ) : (
                        <IconCode aria-hidden="true" className="text-muted" size={26} stroke={1.7} />
                      )}
                    </li>
                  );
                })}
              </ul>

              {project.liveUrl || project.repositoryUrl ? (
                <div className="flex flex-wrap gap-3 pt-1">
                  {project.liveUrl ? (
                    <Button
                      href={project.liveUrl}
                      rightSection={<IconExternalLink aria-hidden size={18} stroke={1.8} />}
                    >
                      Live project
                    </Button>
                  ) : null}
                  {project.repositoryUrl ? (
                    <Button
                      href={project.repositoryUrl}
                      leftSection={<IconBrandGithub aria-hidden size={18} stroke={1.8} />}
                      variant="secondary"
                    >
                      Repository
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </aside>
          </div>

          {project.image ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-card-lg border border-border bg-surface-accent shadow-soft">
              <Image
                alt={project.image.alt}
                className="object-cover object-top"
                fill
                priority
                sizes="(max-width: 72rem) 100vw, 1152px"
                src={project.image.src}
              />
            </div>
          ) : (
            <div className="grid aspect-video min-h-56 place-items-center rounded-card-lg border border-border bg-surface-accent p-6 text-center text-sm font-bold text-accent">
              Large project screenshot / visual placeholder
            </div>
          )}

          <section aria-labelledby="star-heading" className="flex flex-col gap-6">
            <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-text sm:text-3xl" id="star-heading">
              STAR Case Study
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              <section className="min-w-0 rounded-card border border-border bg-surface p-6 sm:p-8">
                <h3 className="mb-4 text-lg font-extrabold tracking-[-0.02em] text-text">
                  <span className="mr-2 text-accent">S</span>Situation
                </h3>
                <p className="leading-[1.75] text-muted">{project.caseStudy.challenge}</p>
              </section>

              <section className="min-w-0 rounded-card border border-border bg-surface p-6 sm:p-8">
                <h3 className="mb-4 text-lg font-extrabold tracking-[-0.02em] text-text">
                  <span className="mr-2 text-accent">T</span>Task
                </h3>
                <p className="leading-[1.75] text-muted">
                  {project.caseStudy.task ?? project.description}
                </p>
              </section>

              <section className="min-w-0 rounded-card border border-border bg-surface p-6 sm:p-8">
                <h3 className="mb-4 text-lg font-extrabold tracking-[-0.02em] text-text">
                  <span className="mr-2 text-accent">A</span>Action
                </h3>
                <p className="leading-[1.75] text-muted">{project.caseStudy.solution}</p>
                {project.caseStudy.highlights.length > 0 ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 leading-[1.7] text-muted">
                    {project.caseStudy.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </section>

              <section className="min-w-0 rounded-card border border-border bg-surface p-6 sm:p-8">
                <h3 className="mb-4 text-lg font-extrabold tracking-[-0.02em] text-text">
                  <span className="mr-2 text-accent">R</span>Result
                </h3>
                {project.caseStudy.result ? (
                  <p className="leading-[1.75] text-muted">{project.caseStudy.result}</p>
                ) : (
                  <p className="font-semibold tracking-wide text-muted/75">TODO</p>
                )}
              </section>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
