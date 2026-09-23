"use client";

/*
 * This component needs "use client" because useDisclosure
 * changes the Drawer open/close state in the browser.
 */
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
          content: "bg-[var(--page-bg)] text-[var(--text)]",
          header: "bg-[var(--page-bg)] text-[var(--text)]",
          body: "bg-[var(--page-bg)]",
          overlay: "bg-[rgba(27,31,28,0.32)]",
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
              className="block w-full rounded-[var(--radius-sm)] px-4 py-[0.9rem] font-bold text-[var(--text)] hover:bg-[var(--surface-accent)] hover:text-[var(--accent)]"
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
