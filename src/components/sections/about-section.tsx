import { SimpleGrid, Stack, Text } from "@mantine/core";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="section-shell section-shell-soft" id="about">
      <Container>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
          <SectionHeading
            eyebrow="About"
            title="A short story is stronger than a long autobiography."
            description="Use this section to introduce the way you think and work, not to repeat your entire CV."
          />

          <Stack gap="md">
            <Text className="body-copy">
              Write 1–2 paragraphs about your focus as a developer, what you care
              about when building products, and what kind of team or client you
              want to collaborate with.
            </Text>
            <Text className="body-copy">
              Keep the details concrete. Your projects and journey sections can
              provide the evidence behind this introduction.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
