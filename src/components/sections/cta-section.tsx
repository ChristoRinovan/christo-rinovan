import { Group, Stack, Text, Title } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="scroll-mt-20 py-24 md:py-[7.5rem]">
      <Container>
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-accent)] p-[clamp(1.75rem,5vw,4rem)]">
          <Stack gap="lg" maw={760}>
            <Text className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">
              Let&apos;s work together
            </Text>

            <Title
              className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-[var(--text)]"
              order={2}
            >
              Have a role, project, or problem worth discussing?
            </Title>

            <Text className="text-[1.05rem] leading-[1.75] text-[var(--muted)]">
              Replace this text with the kind of opportunities you are currently
              open to: full-time work, freelance projects, or both.
            </Text>

            <Group>
              <Button
                href="/#contact"
                leftSection={
                  <IconMessageCircle aria-hidden size={18} stroke={1.8} />
                }
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
