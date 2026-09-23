import type { SkillGroup } from "@/types/skill.types";

/*
 * Keep only skills that you can confidently explain in an interview
 * or demonstrate through your projects.
 */
export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Mantine"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST API"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
];
