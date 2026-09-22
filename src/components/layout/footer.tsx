import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8">
      <Container className="flex flex-col gap-4 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link href={siteConfig.links.github}>GitHub</Link>
          <Link href={siteConfig.links.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.links.email}>Email</Link>
        </div>
      </Container>
    </footer>
  );
}
