import Link from "next/link";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24" id="contact">
      <Container>
        <SectionHeading
          description="Keep the first version simple. Direct links are enough; add a contact form later only if it solves a real need."
          eyebrow="Contact"
          title="The easiest ways to reach me."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium" href={siteConfig.links.email}>
            Email
          </Link>
          <Link className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium" href={siteConfig.links.linkedin}>
            LinkedIn
          </Link>
          <Link className="rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-medium" href={siteConfig.links.github}>
            GitHub
          </Link>
        </div>
      </Container>
    </section>
  );
}
