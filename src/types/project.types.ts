/*
 * Types describe the shape of the data.
 * If a project misses a required field, TypeScript will show an error.
 */
export type ProjectCaseStudy = {
  challenge: string;
  solution: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  year: string;
  role: string;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: ProjectCaseStudy;
};
