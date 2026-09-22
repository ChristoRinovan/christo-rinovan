import { Stack, Text, Title } from "@mantine/core";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="not-found-shell">
      <Container>
        <Stack gap="md" maw={620}>
          <Text className="not-found-code">404</Text>
          <Title className="section-title" order={1}>
            Page not found.
          </Title>
          <Text className="body-copy">
            The page you requested does not exist or may have moved.
          </Text>
          <div>
            <Button href="/">Back to home</Button>
          </div>
        </Stack>
      </Container>
    </section>
  );
}
