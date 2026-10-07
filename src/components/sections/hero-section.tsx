import Image from "next/image";
import { Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <Container>
        <div className="hero-grid">
          <Stack className="hero-content" gap="xl" align="flex-start">
            <Text className="hero-eyebrow">{siteConfig.role}</Text>

            <Title className="hero-title" order={1}>
              I build full-stack web applications with a focus on reliable
              backend systems.
            </Title>

            <Text className="hero-copy">
              Full-stack developer and bootcamp graduate with hands-on
              experience building team-based applications around
              authentication, role-based access, operational workflows, and
              REST APIs. Based in Surabaya and currently open to internship and
              junior developer opportunities.
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
                Get in touch
              </Button>
            </Group>
          </Stack>

          <div className="hero-photo">
            <Image
              src="/images/profile/profile.jpg"
              alt="Portrait of Christo Rinovan"
              fill
              priority
              sizes="(max-width: 992px) 80vw, 352px"
              className="hero-photo-img"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}