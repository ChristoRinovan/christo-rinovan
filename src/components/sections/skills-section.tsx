import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <section className="border-t border-neutral-200 py-20 sm:py-24" id="skills">
      <Container>
        <SectionHeading
          description="Group skills by how you use them. Avoid arbitrary proficiency percentages; your projects should be the proof."
          eyebrow="Skills"
          title="Tools I use to turn ideas into products."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div className="rounded-2xl border border-neutral-200 bg-white p-5" key={group.category}>
              <h3 className="font-semibold">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
