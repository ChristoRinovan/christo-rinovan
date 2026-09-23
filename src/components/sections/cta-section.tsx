import { Group, Stack } from "@mantine/core";
import { IconMessageCircle } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CtaSection() {
  return (
    <section className="scroll-mt-20 py-24 md:py-[7.5rem]">
      <Container>
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-accent)] p-[clamp(1.75rem,5vw,4rem)]">
          <Stack gap="lg" maw={760}>
            <SectionHeading
              eyebrow="Let's work together"
              title="Have a role, project, or problem worth discussing?"
              description="Replace this text with the kind of opportunities you are currently open to: full-time work, freelance projects, or both."
            />

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
