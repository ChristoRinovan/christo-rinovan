/**
 * To add a technology: place its image in public/images/tech-stack/,
 * then add one { name, image } entry below. The grid is data-driven.
 */
export type TechStackItem = {
  name: string;
  image: string;
};

export const techStack = [
  { name: "TypeScript", image: "/images/tech-stack/typescript.svg" },
  { name: "JavaScript", image: "/images/tech-stack/javascript.svg" },
  { name: "Next.js", image: "/images/tech-stack/nextdotjs.svg" },
  { name: "React", image: "/images/tech-stack/react.svg" },
  { name: "Express.js", image: "/images/tech-stack/express.svg" },
  { name: "GitHub", image: "/images/tech-stack/github.svg" },
] satisfies readonly TechStackItem[];
