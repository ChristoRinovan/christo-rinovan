import type { Project } from "@/types/project.types";

export const projects: Project[] = [
  {
    slug: "popo-laundry",
    title: "Popo Laundry",
    summary:
      "A full-stack laundry operations platform connecting customers, outlet staff, drivers, and workers across pickup, processing, payment, and delivery workflows.",
    description:
      "Built as a three-person team project. My main responsibility was the field-operations flow for drivers and workers, including task states, attendance, operating-hour restrictions, task history, employee profiles, and integration between backend rules and the frontend experience.",
    year: "2026",
    role: "Full-Stack Developer · Backend Focus",
    team: "3 developers",
    technologies: ["TypeScript", "Express.js", "Prisma", "PostgreSQL", "Next.js", "React", "Zod", "JWT"],
    image: {
      src: "/images/projects/popo-laundry.png",
      alt: "Popo Laundry dashboard showing driver and worker task management",
      width: 1600,
      height: 900,
    },
    repositoryUrl: "https://github.com/kelompokfinalsehat/Laundry-Backend",
    liveUrl: "https://laundryapp-ui.vercel.app/",
    featured: true,
    caseStudy: {
      challenge:
        "The most challenging part was keeping field operations secure and consistent. Drivers and workers needed to access only the actions appropriate to their role, assignment, current task state, and operating hours.",
      solution:
        "I implemented and refined backend workflows around task assignments, attendance, operational restrictions, order-state transitions, and role-aware access. I also worked on the corresponding frontend flows to ensure the interface followed the state and rules defined by the backend.",
      highlights: [
        "Built and refined task workflows and task-history functionality for drivers and workers.",
        "Implemented operating-hour restrictions and attendance logic for field operations.",
        "Worked on employee profile functionality and role-aware application states.",
        "Resolved integration and workflow edge cases across the backend and frontend.",
      ],
    },
  },
  {
    slug: "rtku",
    title: "RTku — Neighborhood Finance Management",
    summary:
      "A neighborhood financial management application for managing residents, dues, bills, payments, income, expenses, and financial reporting.",
    description:
      "Built as a two-person team project. My work focused primarily on authentication, role-based access control, user management, fee and billing workflows, and the backend APIs responsible for enforcing those rules.",
    year: "2026",
    role: "Full-Stack Developer · Backend Focus",
    team: "2 developers",
    technologies: ["TypeScript", "Express.js", "Prisma", "PostgreSQL", "Next.js", "React", "Zod", "JWT"],
    image: {
      src: "/images/projects/rtku.png",
      alt: "RTku dashboard showing resident bills and payment status",
      width: 1600,
      height: 900,
    },
    // repositoryUrl: "https://github.com/...",   // isi jika ada
    // liveUrl: "https://...",                    // isi jika ada
    featured: true,
    caseStudy: {
      challenge:
        "The main challenge was keeping permissions and billing states consistent across multiple user roles and financial workflows.",
      solution:
        "I worked on authentication and role-based access control, user and role management, bill generation, due-date rules, overdue handling, scheduled status updates, and server-side search and pagination. I also adjusted frontend behavior to remain consistent with backend validation and business rules.",
      highlights: [
        "Implemented authentication and role-based access flows across backend and frontend.",
        "Developed user and role-management functionality.",
        "Built billing logic involving fee types, due dates, overdue states, and scheduled status updates.",
        "Improved bill management through server-side search, filtering, summaries, and pagination.",
      ],
    },
  },
];