import { Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="section-shell section-shell-soft" id="skills">
      <Container>
        <Stack gap={48}>
          <SectionHeading eyebrow="Skills" title="Technologies I’ve used to build full-stack applications." />

          <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
            {skills.map((group) => (
              <div className="skill-card" key={group.category}>
                <Stack gap="md">
                  <Title className="skill-category" order={3} size="h4">
                    {group.category}
                  </Title>
                  <Group gap="xs">
                    {group.items.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </Group>
                  <Text className="muted-text" size="sm"></Text>
                </Stack>
              </div>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
