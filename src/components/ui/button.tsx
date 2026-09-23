"use client";

/*
 * This wrapper has three simple jobs:
 * 1. Internal link -> Next.js Link
 * 2. External link -> normal <a>
 * 3. No href -> normal button
 *
 * It stays a Client Component because Mantine receives Next.js Link
 * through its "component" prop.
 */
import type { ReactNode } from "react";
import { Button as MantineButton } from "@mantine/core";
import Link from "next/link";

import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  type?: "button" | "submit";
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  leftSection,
  rightSection,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    variant === "primary"
      ? "border border-[var(--accent)] bg-[var(--accent)] font-extrabold text-[var(--accent-contrast)] hover:border-[var(--accent-hover)] hover:bg-[var(--accent-hover)]"
      : "border border-[var(--border)] bg-transparent font-extrabold text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--surface-accent)] hover:text-[var(--accent)]",
    className,
  );

  // Internal links use Next.js Link.
  if (href?.startsWith("/")) {
    return (
      <MantineButton
        className={classes}
        component={Link}
        href={href}
        leftSection={leftSection}
        radius="xl"
        rightSection={rightSection}
      >
        {children}
      </MantineButton>
    );
  }

  // External links and mailto links use a normal anchor.
  if (href) {
    const isExternalWebsite = href.startsWith("http");

    return (
      <MantineButton
        className={classes}
        component="a"
        href={href}
        leftSection={leftSection}
        radius="xl"
        rel={isExternalWebsite ? "noreferrer" : undefined}
        rightSection={rightSection}
        target={isExternalWebsite ? "_blank" : undefined}
      >
        {children}
      </MantineButton>
    );
  }

  // Without href, this behaves like a normal button.
  return (
    <MantineButton
      className={classes}
      leftSection={leftSection}
      radius="xl"
      rightSection={rightSection}
      type={type}
    >
      {children}
    </MantineButton>
  );
}
