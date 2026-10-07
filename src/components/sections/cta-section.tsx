import { Group, Stack, Text, Title } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="section-shell">
      <Container>
        <div className="cta-card">
          <Stack gap="lg" maw={760}>
            <Text className="section-kicker">Open to opportunities</Text>
            <Title className="section-title" order={2}>
              Looking for a developer who enjoys working through backend logic?
            </Title>
            <Text className="body-copy">
              I’m currently looking for internship opportunities and am also open to junior developer roles. I’m comfortable working across the stack, with a particular interest in
              backend development.
            </Text>
            <Group>
              <Button href="/#contact" leftSection={<IconMessageCircle aria-hidden size={18} stroke={1.8} />}>
                Get in touch
              </Button>
            </Group>
          </Stack>
        </div>
      </Container>
    </section>
  );
}
