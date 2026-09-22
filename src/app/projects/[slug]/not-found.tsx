import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function ProjectNotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-semibold text-neutral-500">Project not found</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          This case study does not exist.
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-neutral-600">
          Check the project URL, or return to the selected projects on the homepage.
        </p>
        <Link className="mt-6 inline-flex font-semibold underline underline-offset-4" href="/#projects">
          Back to projects
        </Link>
      </Container>
    </section>
  );
}
