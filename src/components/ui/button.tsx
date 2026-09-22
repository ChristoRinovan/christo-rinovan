"use client"
import type { MouseEventHandler, ReactNode } from "react";
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
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  leftSection,
  rightSection,
  type = "button",
  loading,
  disabled,
  fullWidth,
  onClick,
}: ButtonProps) {
  const classes = cn(
    variant === "primary"
      ? "portfolio-button-primary"
      : "portfolio-button-secondary",
    className,
  );

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

  if (href) {
    const isExternal = href.startsWith("http");

    return (
      <MantineButton
        className={classes}
        component="a"
        href={href}
        leftSection={leftSection}
        radius="xl"
        rel={isExternal ? "noreferrer" : undefined}
        rightSection={rightSection}
        target={isExternal ? "_blank" : undefined}
      >
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton
      className={classes}
      disabled={disabled}
      fullWidth={fullWidth}
      leftSection={leftSection}
      loading={loading}
      onClick={onClick}
      radius="xl"
      rightSection={rightSection}
      type={type}
    >
      {children}
    </MantineButton>
  );
}
