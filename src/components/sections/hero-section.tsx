import { Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <Stack gap="xl">
          <Text className="hero-eyebrow">{siteConfig.role}</Text>

          <Title className="hero-title" order={1}>
            I build thoughtful digital experiences for the web.
          </Title>

          <Text className="hero-copy">
            Replace this with a short introduction that explains what you build,
            who you want to work with, and the kind of problems you enjoy solving.
          </Text>

          <Group gap="sm">
            <Button
              href="/#projects"
              rightSection={<IconArrowRight aria-hidden size={18} stroke={1.8} />}
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
