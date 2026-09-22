import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl bg-neutral-950 p-8 text-white sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Let&apos;s work together
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Have a role, project, or collaboration in mind?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-300">
            Replace this text with a direct invitation that fits both your job search and freelance goals.
          </p>
          <Button className="mt-7 bg-white text-neutral-950 hover:bg-neutral-200" href="/#contact">
            Start a conversation
          </Button>
        </div>
      </Container>
    </section>
  );
}
