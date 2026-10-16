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
        className="rounded-md p-1 transition-colors hover:bg-surface-accent focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none"
        hiddenFrom="sm"
        onClick={toggle}
        opened={opened}
        size="sm"
      />

      <Drawer
        classNames={{
          body: "bg-page text-text",
          content: "bg-page text-text",
          header: "border-b border-border bg-page text-text",
          overlay: "bg-text/35",
        }}
        onClose={close}
        opened={opened}
        position="right"
        size="xs"
        title="Navigation"
        transitionProps={{ duration: 260, timingFunction: "ease-out" }}
      >
        <Stack component="nav" gap="xs">
          {navigation.map((item) => (
            <Link
              className="block w-full rounded-card-sm px-4 py-3 font-bold text-text outline-offset-2 transition-[background-color,color,transform] duration-200 ease-out hover:bg-surface-accent hover:text-accent motion-safe:hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none"
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
