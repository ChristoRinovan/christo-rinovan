import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24" id="journey">
      <Container>
        <SectionHeading
          description="A short timeline helps visitors understand your growth without turning the portfolio into a full CV."
          eyebrow="Journey"
          title="How my development journey has evolved."
        />

        <ol className="mt-10 border-l border-neutral-300 pl-6">
          {journey.map((item) => (
            <li className="relative pb-10 last:pb-0" key={`${item.year}-${item.title}`}>
              <span
                aria-hidden="true"
                className="absolute -left-[29px] top-2 size-3 rounded-full border-2 border-[#f7f7f5] bg-neutral-950"
              />
              <p className="text-sm font-semibold text-neutral-500">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 max-w-2xl leading-7 text-neutral-600">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
