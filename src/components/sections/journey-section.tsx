import { SimpleGrid, Stack, Text, Title } from "@mantine/core";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { journey } from "@/data/journey";

export function JourneySection() {
  return (
    <section className="section-shell" id="journey">
      <Container>
        <Stack gap={48}>
          <SectionHeading
            eyebrow="Journey"
            title="Show progression, not every event."
            description="Choose milestones that explain how your skills and responsibilities have grown."
          />

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {journey.map((item) => (
              <div className="journey-card" key={`${item.year}-${item.title}`}>
                <Stack gap="sm">
                  <Text className="journey-year">{item.year}</Text>
                  <Title className="journey-title" order={3} size="h4">
                    {item.title}
                  </Title>
                  <Text className="body-copy">{item.description}</Text>
                </Stack>
              </div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
