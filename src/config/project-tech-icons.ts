import { techStack } from "@/config/tech-stack";

// Extra icons are used by project pages only. They do not change the
// six technologies selected for the homepage Skills section.
const projectOnlyIcons: Readonly<Record<string, string>> = {
  Prisma: "/images/tech-stack/prisma.svg",
  PostgreSQL: "/images/tech-stack/postgresql.svg",
  Zod: "/images/tech-stack/zod.svg",
  JWT: "/images/tech-stack/jwt.svg",
};

export function getProjectTechIcon(technology: string): string | undefined {
  return (
    techStack.find((item) => item.name === technology)?.image ??
    projectOnlyIcons[technology]
  );
}
