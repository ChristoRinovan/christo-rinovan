import { Stack, Text, Title } from "@mantine/core";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="flex min-h-[65vh] items-center py-20">
      <Container>
        <Stack gap="md" maw={620}>
          <Text className="font-extrabold text-[var(--accent)]">404</Text>

          <Title
            className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[var(--text)]"
            order={1}
          >
            Page not found.
          </Title>

          <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
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
