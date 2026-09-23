import { cn } from "@/lib/utils/cn";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

/*
 * White card with border and rounded corners.
 * Used for skill cards, journey cards, case study panels,
 * and the contact form wrapper.
 */
export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] p-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
