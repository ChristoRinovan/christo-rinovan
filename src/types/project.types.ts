export type ProjectCaseStudy = {
  challenge: string;
  solution: string;
  highlights: string[];
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