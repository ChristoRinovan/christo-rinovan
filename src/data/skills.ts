import type { SkillGroup } from "@/types/skill.types";

// Keep only technologies you can confidently discuss or demonstrate.
export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Mantine", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "REST API", "Express.js",'zod', "JWT"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Prisma ORM"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "React Query Tanstack", "Zustand", "Cloudinary", "Multer"],
  },
];
