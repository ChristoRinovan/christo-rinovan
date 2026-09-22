import { Stack, Text, Title } from "@mantine/core";

import { cn } from "@/lib/utils/cn";

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
    <Stack className={cn(className)} gap="sm" maw={720}>
      {eyebrow ? <Text className="section-kicker">{eyebrow}</Text> : null}
      <Title className="section-title" order={2}>
        {title}
      </Title>
      {description ? (
        <Text className="section-description" size="lg">
          {description}
        </Text>
      ) : null}
    </Stack>
  );
}
