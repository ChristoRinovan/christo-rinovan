import { Group } from "@mantine/core";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-[16px]">
      <Container>
        <Group h={72} justify="space-between" wrap="nowrap">
          <Link className="font-extrabold tracking-[-0.03em]" href="/">
            {siteConfig.name}
          </Link>

          <Group
            aria-label="Primary navigation"
            component="nav"
            gap="xl"
            visibleFrom="sm"
          >
            {navigation.map((item) => (
              <Link
                className="text-sm font-semibold text-[var(--muted)] transition-colors duration-[160ms] hover:text-[var(--accent)]"
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
