import { Stack, Text, Title } from "@mantine/core";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ProjectNotFound() {
  return (
    <section className="flex min-h-[65vh] items-center py-20">
      <Container>
        <Stack gap="md" maw={650}>
          <Text className="font-extrabold text-[var(--accent)]">
            Project not found
          </Text>

          <Title
            className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[var(--text)]"
            order={1}
          >
            This case study does not exist.
          </Title>

          <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
            Check the project URL, or return to the selected projects on the
            homepage.
          </Text>

          <div>
            <Button href="/#projects">Back to projects</Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
