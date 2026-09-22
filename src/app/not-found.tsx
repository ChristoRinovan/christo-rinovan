import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="text-sm font-semibold text-neutral-500">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found.</h1>
        <p className="mt-4 max-w-xl leading-7 text-neutral-600">
          The page you requested does not exist or may have moved.
        </p>
        <Link className="mt-6 inline-flex font-semibold underline underline-offset-4" href="/">
          Back to home
        </Link>
      </Container>
    </section>
  );
}
