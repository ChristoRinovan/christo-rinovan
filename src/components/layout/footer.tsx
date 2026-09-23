import { ActionIcon, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container>
        <Group gap="md" justify="space-between">
          <Text className="text-[var(--muted)]" size="sm">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js +
            Mantine.
          </Text>

          <Group gap="xs">
            <ActionIcon
              aria-label="GitHub"
              className="border border-transparent text-[var(--muted)] hover:border-[var(--border)] hover:bg-[var(--surface-accent)] hover:text-[var(--accent)]"
              component="a"
              href={siteConfig.links.github}
              radius="xl"
              rel="noreferrer"
              target="_blank"
              variant="subtle"
            >
              <IconBrandGithub size={19} stroke={1.8} />
            </ActionIcon>

            <ActionIcon
              aria-label="LinkedIn"
              className="border border-transparent text-[var(--muted)] hover:border-[var(--border)] hover:bg-[var(--surface-accent)] hover:text-[var(--accent)]"
              component="a"
              href={siteConfig.links.linkedin}
              radius="xl"
              rel="noreferrer"
              target="_blank"
              variant="subtle"
            >
              <IconBrandLinkedin size={19} stroke={1.8} />
            </ActionIcon>

            <ActionIcon
              aria-label="Email"
              className="border border-transparent text-[var(--muted)] hover:border-[var(--border)] hover:bg-[var(--surface-accent)] hover:text-[var(--accent)]"
              component="a"
              href={siteConfig.links.email}
              radius="xl"
              variant="subtle"
            >
              <IconMail size={19} stroke={1.8} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
