"use client";

import { List } from "@mantine/core";

type BulletListProps = {
  items: string[];
  className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
  return (
    <List className={className} spacing="sm">
      {items.map((item) => (
        <List.Item key={item}>{item}</List.Item>
      ))}
    </List>
  );
}
