import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

import { Container } from "@/components/ui/container";
import { MetaLabel } from "@/components/ui/meta-label";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section className="scroll-mt-20 py-24 md:py-[7.5rem]" id="journey">
      <Container>
        <Stack gap={48}>
          <SectionHeading
            eyebrow="Journey"
            title="Show progression, not every event."
            description="Choose milestones that explain how your skills and responsibilities have grown."
          />

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {journey.map((item) => (
              <Panel key={`${item.year}-${item.title}`}>
                <Stack gap="sm">
                  <MetaLabel>{item.year}</MetaLabel>

                  <Title
                    className="font-extrabold text-[var(--text)]"
                    order={3}
                    size="h4"
                  >
                    {item.title}
                  </Title>

                  <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
                    {item.description}
                  </Text>
                </Stack>
              </Panel>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
