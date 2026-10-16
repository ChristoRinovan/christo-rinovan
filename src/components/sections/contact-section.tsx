import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const contactLinks = [
  { label: "GitHub", href: siteConfig.links.github, icon: IconBrandGithub, external: true },
  { label: "Email", href: siteConfig.links.email, icon: IconMail, external: false },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: IconBrandLinkedin, external: true },
] as const;

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="scroll-mt-20 bg-surface-soft py-20 sm:py-28 lg:py-36"
      id="contact"
    >
      <Container>
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <h2
              className="max-w-[16ch] text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.06] font-extrabold tracking-[-0.05em] text-text"
              id="contact-title"
            >
              Let's talk about an opportunity.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-[1.8] text-muted sm:mt-8 sm:text-lg">
              I'm based in Surabaya and open to on-site or remote opportunities. The best way to
              reach me is by email, and you can also explore my projects and development history
              on GitHub.
            </p>
          </div>

          <nav aria-label="Contact links" className="flex min-w-0 flex-col gap-3 sm:gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  className="group flex min-h-20 w-full items-center justify-between gap-4 rounded-card border border-border bg-surface px-5 py-4 text-text shadow-sm transition-[transform,background-color,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-accent hover:bg-surface-accent hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transform-none motion-reduce:transition-none sm:min-h-24 sm:px-6"
                  href={link.href}
                  key={link.label}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon aria-hidden size={26} stroke={1.8} />
                    <span className="text-lg font-bold tracking-[-0.025em] sm:text-xl">
                      {link.label}
                    </span>
                  </span>
                  <IconArrowUpRight
                    aria-hidden
                    className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                    size={22}
                    stroke={1.8}
                  />
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </section>
  );
}
