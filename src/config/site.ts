const email = "christophorusrinovan@gmail.com";

export const siteConfig = {
  name: "Christo Rinovan",
  role: "Fullstack Developer",
  description:
    "Full-stack developer based in Surabaya, building web applications with a focus on reliable backend systems. Open to internship and junior developer opportunities.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email,
  links: {
    github: "https://github.com/ChristoRinovan",
    linkedin: "https://www.linkedin.com/in/christophorus-rinovan/",
    email: `mailto:${email}`,
  },
} as const;