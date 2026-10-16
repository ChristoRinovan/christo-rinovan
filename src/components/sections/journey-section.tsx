import { Container } from "@/components/ui/container";
import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section
      aria-labelledby="journey-title"
      className="scroll-mt-20 bg-page py-20 sm:py-28 lg:py-36"
      id="journey"
    >
      <Container>
        <div className="flex flex-col gap-10 sm:gap-14 lg:gap-16">
          <header className="grid min-w-0 grid-cols-2 items-start gap-3 sm:gap-8 lg:gap-14">
            <h2
              className="min-w-0 text-[clamp(1.5rem,4.2vw,3.75rem)] leading-[1.08] font-extrabold tracking-[-0.045em] text-text"
              id="journey-title"
            >
              My Journey
            </h2>
            {/* TODO (copy): replace this original template description yourself. */}
            <p className="min-w-0 text-xs leading-relaxed text-muted sm:text-base sm:leading-[1.75]">
              Choose milestones that explain how your skills and responsibilities have grown.
            </p>
          </header>

          <ol className="m-0 list-none border-y border-border p-0">
            {journey.map((item) => (
              <li
                className="grid min-w-0 grid-cols-[minmax(0,1fr)_minmax(0,36%)] border-b border-border transition-colors duration-200 last:border-b-0 hover:bg-surface-accent/60 sm:grid-cols-[minmax(0,1fr)_minmax(0,31%)] lg:grid-cols-[minmax(0,1fr)_minmax(0,27%)] motion-reduce:transition-none"
                key={`${item.year}-${item.title}`}
              >
                <div className="min-w-0 px-2 py-5 sm:px-5 sm:py-7 lg:px-7 lg:py-9">
                  <h3 className="text-sm leading-snug font-bold text-text sm:text-lg lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.7rem] leading-[1.6] text-muted sm:mt-3 sm:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="flex min-w-0 items-start justify-end border-l border-border px-2 py-5 text-right sm:px-5 sm:py-7 lg:px-7 lg:py-9">
                  <span className="min-w-0 text-[clamp(0.875rem,2vw,1.875rem)] leading-tight font-semibold tracking-[-0.035em] text-text [overflow-wrap:anywhere] sm:font-medium">
                    {item.year}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
