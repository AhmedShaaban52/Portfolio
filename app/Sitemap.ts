import type { MetadataRoute } from "next";

const SITE_URL = "https://ahmed-portfolio-git-main-ahmeds-projects-22e75af4.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}