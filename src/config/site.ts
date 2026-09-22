export const siteConfig = {
  name: "Your Name",
  role: "Fullstack Developer",
  description:
    "Personal portfolio of Your Name, a fullstack developer building thoughtful web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  links: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "mailto:hello@example.com",
  },
} as const;
