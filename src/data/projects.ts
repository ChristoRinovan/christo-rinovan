import type { Project } from "@/types/project.types";

/*
 * This file is the single source of truth for portfolio projects.
 * Replace these examples with your 2–3 strongest real projects.
 */
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary:
      "A short, outcome-focused summary that explains what the project does and why it matters.",
    description:
      "Use this space for a concise project overview: who it was for, the main problem, and the result you delivered.",
    year: "2026",
    role: "Fullstack Developer",
    technologies: ["Next.js", "TypeScript", "Mantine"],
    repositoryUrl: "https://github.com/ChristoRinovan/project-one",
    liveUrl: "https://example.com",
    featured: true,
    caseStudy: {
      challenge:
        "Explain the main product or engineering problem. Keep it specific enough that a recruiter or client understands the constraint.",
      solution:
        "Explain your approach, the important implementation decisions, and why you chose them.",
      highlights: [
        "Describe one meaningful technical contribution.",
        "Describe one UX, performance, or product improvement.",
        "Describe one lesson or measurable outcome.",
      ],
    },
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary:
      "Another selected project. Focus the summary on the problem solved rather than listing technologies.",
    description:
      "This second example shows that every project detail page is generated from the same static data source.",
    year: "2025",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "REST API"],
    repositoryUrl: "https://github.com/ChristoRinovan/project-two",
    featured: true,
    caseStudy: {
      challenge:
        "Describe the situation before your solution and the most important constraint you had to work with.",
      solution:
        "Describe how you broke the problem down and what you personally implemented.",
      highlights: [
        "A feature you are proud of.",
        "A difficult problem you solved.",
        "A result, improvement, or learning from the project.",
      ],
    },
  },
];
