import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";

/*
 * Next.js turns this file into /sitemap.xml.
 * Project URLs are generated from the same static project data.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectPages,
  ];
}
