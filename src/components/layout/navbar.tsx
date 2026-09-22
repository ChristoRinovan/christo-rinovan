import { Group } from "@mantine/core";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { navigation } from "@/data/navigation";

import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="site-header">
      <Container>
        <Group h={72} justify="space-between" wrap="nowrap">
          <Link className="brand-link" href="/">
            {siteConfig.name}
          </Link>

          <Group aria-label="Primary navigation" component="nav" gap="xl" visibleFrom="sm">
            {navigation.map((item) => (
              <Link className="nav-link" href={item.href} key={item.href}>
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
