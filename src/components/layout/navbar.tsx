import { Group } from "@mantine/core";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b border-border bg-page/90 backdrop-blur-xl">
      <Container>
        <Group h={72} justify="space-between" wrap="nowrap">
          <Link
            className="inline-flex shrink-0 items-center rounded-sm text-base font-extrabold tracking-[-0.035em] text-text outline-offset-4 transition-[color,transform] duration-200 ease-out hover:text-accent motion-safe:hover:-rotate-2 focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none"
            href="/"
          >
            {siteConfig.name}
          </Link>

          <Group aria-label="Primary navigation" component="nav" gap="xl" visibleFrom="sm">
            {navigation.map((item) => (
              <Link
                className="relative inline-flex min-h-10 items-center rounded-sm px-0.5 text-sm font-semibold text-muted outline-offset-4 transition-colors duration-200 hover:text-accent focus-visible:text-accent focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </Group>

          <MobileMenu />
        </Group>
      </Container>
    </header>
  );
}
