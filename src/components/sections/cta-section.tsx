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
            <Text className="section-kicker">Let&apos;s work together</Text>
            <Title className="section-title" order={2}>
              Have a role, project, or problem worth discussing?
            </Title>
            <Text className="body-copy">
              Replace this text with the kind of opportunities you are currently
              open to: full-time work, freelance projects, or both.
            </Text>
            <Group>
              <Button
                href="/#contact"
                leftSection={<IconMessageCircle aria-hidden size={18} stroke={1.8} />}
              >
                Start a conversation
              </Button>
            </Group>
          </Stack>
        </div>
      </Container>
    </section>
  );
}
