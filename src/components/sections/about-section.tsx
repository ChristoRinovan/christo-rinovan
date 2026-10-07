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
            title="I’m interested in the systems behind useful products."
            description="My path into software development began with a career transition from Philosophy of Divinity and a desire to turn ideas into practical products people can actually use."
          />

          <Stack gap="md">
            <Text className="body-copy">
              I graduated from STFT Widya Sasana Malang in 2025 with a degree in Philosophy of Divinity. After graduating, I spent several months in pastoral service in rural
              Kalimantan before transitioning into software development through Purwadhika’s Full Stack Web Development Job Connector program.
            </Text>
            <Text className="body-copy">
              Through team projects, I found myself most interested in backend development—designing APIs, authentication and access control, data models, and business workflows. I
              also work across the frontend when needed, which helps me understand how backend decisions affect the application as a whole.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
