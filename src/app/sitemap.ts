import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://muhammadbilal-qa.com",
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
