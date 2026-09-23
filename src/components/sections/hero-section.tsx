import { Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      className="flex min-h-[calc(100svh-4.5rem)] items-center py-20"
      id="home"
    >
      <Container>
        <Stack gap="xl">
          <Text className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[var(--accent)]">
            {siteConfig.role}
          </Text>

          <Title
            className="max-w-[62rem] text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.065em] text-[var(--text)]"
            order={1}
          >
            I build thoughtful digital experiences for the web.
          </Title>

          <Text className="max-w-[43rem] text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.75] text-[var(--muted)]">
            Replace this with a short introduction that explains what you build,
            who you want to work with, and the kind of problems you enjoy
            solving.
          </Text>

          <Group gap="sm">
            <Button
              href="/#projects"
              rightSection={
                <IconArrowRight aria-hidden size={18} stroke={1.8} />
              }
            >
              View projects
            </Button>

            <Button
              href="/#contact"
              leftSection={<IconMail aria-hidden size={18} stroke={1.8} />}
              variant="secondary"
            >
              Contact me
            </Button>
          </Group>
        </Stack>
      </Container>
    </section>
  );
}
