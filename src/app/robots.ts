import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/styleguide/"],
    },
    sitemap: "https://tarfamaintenance.com/sitemap.xml",
  };
}

