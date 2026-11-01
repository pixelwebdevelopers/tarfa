import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tarfamaintenance.com";
  const locales = ["en", "ar"];

  const routes = [
    "",
    "/about",
    "/services",
    "/services/motors",
    "/services/chiller-compressors",
    "/services/water-pumps",
    "/services/generators-transformers",
    "/services/core-maintenance",
    "/services/testing-balancing",
    "/industries",
    "/process",
    "/clients",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const currentDate = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route}`;
      const alternateEn = `${baseUrl}/en${route}`;
      const alternateAr = `${baseUrl}/ar${route}`;

      entries.push({
        url,
        lastModified: currentDate,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.7,
        alternates: {
          languages: {
            en: alternateEn,
            ar: alternateAr,
          },
        },
      });
    }
  }

  return entries;
}
