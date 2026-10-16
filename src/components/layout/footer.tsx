import { ActionIcon, Group, Text } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const socialIconClassName =
  "border border-transparent text-muted outline-offset-2 transition-[background-color,border-color,color,transform] duration-200 ease-out hover:border-border hover:bg-surface-accent hover:text-accent motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-6 focus-visible:outline-2 focus-visible:outline-accent motion-reduce:transition-none";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <Group justify="space-between" gap="md">
          <Text className="text-muted leading-[1.75]" size="sm">
            © {new Date().getFullYear()} {siteConfig.name}.
          </Text>

          <Group gap="xs">
            <ActionIcon
              aria-label="GitHub"
              className={socialIconClassName}
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
              className={socialIconClassName}
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
              className={socialIconClassName}
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
