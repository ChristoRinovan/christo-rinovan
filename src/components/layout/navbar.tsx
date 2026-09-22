import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f7f5]/90 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <Link className="font-semibold tracking-tight" href="/">
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              className="text-sm text-neutral-600 transition hover:text-neutral-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
