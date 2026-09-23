import { Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Panel } from "@/components/ui/panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      className="scroll-mt-20 bg-[var(--surface-soft)] py-24 md:py-[7.5rem]"
      id="skills"
    >
      <Container>
        <Stack gap={48}>
          <SectionHeading
            eyebrow="Skills"
            title="Tools I can actually discuss and demonstrate."
            description="Group skills by how you use them instead of assigning arbitrary percentage bars."
          />

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {skills.map((group) => (
              <Panel className="h-full" key={group.category}>
                <Stack gap="md">
                  <Title
                    className="font-extrabold text-[var(--text)]"
                    order={3}
                    size="h4"
                  >
                    {group.category}
                  </Title>

                  <Group gap="xs">
                    {group.items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </Group>

                  <Text
                    className="text-sm leading-[1.75] text-[var(--muted)]"
                    size="sm"
                  >
                    Replace this helper text with context only if the category
                    needs explanation.
                  </Text>
                </Stack>
              </Panel>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
