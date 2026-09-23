import { Text } from "@mantine/core";

type MetaLabelProps = {
  children: React.ReactNode;
};

/*
 * Small uppercase label used for metadata like year, role,
 * and case study section labels (Challenge, Solution, Highlights).
 */
export function MetaLabel({ children }: MetaLabelProps) {
  return (
    <Text className="text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
      {children}
    </Text>
  );
}
