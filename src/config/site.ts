/*
 * Global website information lives here.
 * Change these values instead of searching through many components.
 */
export const siteConfig = {
  name: "Christo Rinovan",
  role: "Fullstack Developer",
  description:
    "Personal portfolio of Christo Rinovan, a fullstack developer building thoughtful web experiences.",

  // Vercel can provide this value through NEXT_PUBLIC_SITE_URL.
  // localhost is used while developing locally.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  links: {
    github: "https://github.com/ChristoRinovan",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "mailto:hello@example.com",
  },
} as const;
