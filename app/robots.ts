import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Primary rule — allow all legitimate crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/login",
          "/api/",
          "/_next/",
          "/admin/",
        ],
      },
      // Block AI training scrapers from indexing medical content
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      // Prioritise Googlebot for sinus/rhinoplasty content
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/login",
          "/api/",
          "/_next/",
        ],
      },
      // Bingbot rules
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/dashboard/",
          "/login",
          "/api/",
          "/_next/",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
