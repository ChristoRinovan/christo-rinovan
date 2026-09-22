export const siteConfig = {
  name: "Christo Rinovan",
  role: "Fullstack Developer",
  description:
    "Personal portfolio of Christo Rinovan, a fullstack developer building thoughtful web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/ChristoRinovan",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "mailto:hello@example.com",
  },
} as const;
