import type { SkillGroup } from "@/types/skill.types";

// Keep only technologies you can confidently discuss or demonstrate.
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
