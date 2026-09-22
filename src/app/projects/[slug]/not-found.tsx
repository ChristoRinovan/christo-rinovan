import { Stack, Text, Title } from "@mantine/core";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function ProjectNotFound() {
  return (
    <section className="not-found-shell">
      <Container>
        <Stack gap="md" maw={650}>
          <Text className="not-found-code">Project not found</Text>
          <Title className="section-title" order={1}>
            This case study does not exist.
          </Title>
          <Text className="body-copy">
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
