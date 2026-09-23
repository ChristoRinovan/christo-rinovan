import { Stack, Text, Title } from "@mantine/core";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Stack className={className} gap="sm" maw={720}>
      {eyebrow ? (
        <Text className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">
          {eyebrow}
        </Text>
      ) : null}

      <Title
        className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[var(--text)]"
        order={2}
      >
        {title}
      </Title>

      {description ? (
        <Text className="leading-[1.75] text-[var(--muted)]" size="lg">
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}
