import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
