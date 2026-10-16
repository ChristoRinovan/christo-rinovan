import { Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconMail } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import ImageCarousels from "@/components/ui/image-carousel";

export function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-page" id="home">
      <div className="grid min-h-[100svh] w-full grid-cols-1 md:grid-cols-[minmax(0,45%)_minmax(0,55%)]">
        <div className="order-2 flex min-w-0 items-center px-6 py-14 sm:px-10 md:order-1 md:px-[clamp(2rem,5.5vw,7.5rem)] md:py-16">
          <Stack align="flex-start" gap="xl" className="w-full max-w-2xl">
            <div className="w-full">
              <Title
                className="max-w-[12ch] text-[clamp(3.25rem,6vw,5.5rem)] leading-[0.94] font-extrabold tracking-[-0.065em] text-text motion-safe:starting:translate-y-8 motion-safe:starting:opacity-0 motion-safe:transition-[opacity,transform] motion-safe:duration-700"
                order={1}
              >
                {siteConfig.name}
              </Title>
              <Text
                className="mt-5 inline-flex rounded-full border-2 border-accent/25 bg-surface-accent px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-accent uppercase sm:text-sm motion-safe:starting:translate-y-6 motion-safe:starting:opacity-0 motion-safe:transition-[opacity,transform] motion-safe:delay-100 motion-safe:duration-700"
              >
                {siteConfig.role}
              </Text>
            </div>

            <Text className="max-w-xl text-base leading-[1.8] text-muted sm:text-lg motion-safe:starting:translate-y-6 motion-safe:starting:opacity-0 motion-safe:transition-[opacity,transform] motion-safe:delay-200 motion-safe:duration-700">
              Full-stack developer and bootcamp graduate with hands-on experience building
              team-based applications around authentication, role-based access, operational
              workflows, and REST APIs. Based in Surabaya and currently open to internship and
              junior developer opportunities.
            </Text>

            <Group
              className="motion-safe:starting:translate-y-6 motion-safe:starting:opacity-0 motion-safe:transition-[opacity,transform] motion-safe:delay-300 motion-safe:duration-700"
              gap="sm"
            >
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
                Get in touch
              </Button>
            </Group>
          </Stack>
        </div>

        <div className="relative order-1 h-[68svh] min-h-80 w-full overflow-hidden bg-surface-soft sm:h-[75svh] md:order-2 md:h-[100svh] md:min-h-[38rem]">
          <ImageCarousels />
        </div>
      </div>
    </section>
  );
}
