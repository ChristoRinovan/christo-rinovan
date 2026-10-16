export type ProjectCaseStudy = {
  challenge: string;
  solution: string;
  highlights: string[];
  // Optional STAR-specific copy. Existing content is preserved until the
  // owner supplies project-specific Task and verifiable Result text.
  task?: string;
  result?: string;
};
export type ProjectImage = {
  src: string; // contoh: "/images/projects/popo-laundry.png"
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  team?: string;
  technologies: string[];
  image?: ProjectImage;
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
};