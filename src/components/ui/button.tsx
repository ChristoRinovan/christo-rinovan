import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition",
    variant === "primary"
      ? "bg-neutral-950 text-white hover:bg-neutral-800"
      : "border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-100",
    className,
  );

  if (href) {
    return (
      <Link className={styles} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} type="button">
      {children}
    </button>
  );
}
