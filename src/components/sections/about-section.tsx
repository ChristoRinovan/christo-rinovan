import { SimpleGrid, Stack, Text } from "@mantine/core";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section
      className="scroll-mt-20 bg-[var(--surface-soft)] py-24 md:py-[7.5rem]"
      id="about"
    >
      <Container>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={48}>
          <SectionHeading
            eyebrow="About"
            title="A short story is stronger than a long autobiography."
            description="Use this section to introduce the way you think and work, not to repeat your entire CV."
          />

          <Stack gap="md">
            <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
              Write 1–2 paragraphs about your focus as a developer, what you care
              about when building products, and what kind of team or client you
              want to collaborate with.
            </Text>

            <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
              Keep the details concrete. Your projects and journey sections can
              provide the evidence behind this introduction.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
