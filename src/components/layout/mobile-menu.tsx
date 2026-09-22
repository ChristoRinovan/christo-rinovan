"use client";

import { Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

import { navigation } from "@/data/navigation";

export function MobileMenu() {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <>
      <Burger
        aria-label="Toggle navigation menu"
        hiddenFrom="sm"
        onClick={toggle}
        opened={opened}
        size="sm"
      />

      <Drawer
        classNames={{
          body: "mobile-drawer-body",
          content: "mobile-drawer-content",
          header: "mobile-drawer-header",
          overlay: "mobile-drawer-overlay",
        }}
        onClose={close}
        opened={opened}
        position="right"
        size="xs"
        title="Navigation"
      >
        <Stack component="nav" gap="xs">
          {navigation.map((item) => (
            <Link
              className="mobile-nav-link"
              href={item.href}
              key={item.href}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
