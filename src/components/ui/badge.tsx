import { Badge as MantineBadge } from "@mantine/core";

type BadgeProps = {
  children: React.ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <MantineBadge
      className="border border-[color-mix(in_srgb,var(--accent)_25%,var(--border))] bg-[var(--surface-accent)] font-bold text-[var(--accent)]"
      radius="xl"
      variant="light"
    >
      {children}
    </MantineBadge>
  );
}
