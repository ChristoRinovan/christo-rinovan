import { Badge as MantineBadge } from "@mantine/core";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <MantineBadge className="portfolio-badge" radius="xl" variant="light">
      {children}
    </MantineBadge>
  );
}
