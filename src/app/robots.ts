import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/*
 * Next.js turns this file into /robots.txt.
 * It tells search-engine crawlers that the website can be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
