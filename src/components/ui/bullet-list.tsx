"use client";

/*
 * Mantine List.Item is a compound component.
 * Keeping it inside a small Client Component avoids the RSC issue
 * we previously hit in the project detail page.
 */
import { List } from "@mantine/core";

import { cn } from "@/lib/utils/cn";

type BulletListProps = {
  items: string[];
  className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
  return (
    <List
      className={cn("leading-[1.75] text-[var(--muted)]", className)}
      spacing="sm"
    >
      {items.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  );
}
