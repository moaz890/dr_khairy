import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data/blog";
import { siteConfig } from "@/lib/seo/config";
import { getSitemapEntries } from "@/lib/seo/sitemap-entries";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getSitemapEntries();
  const now = new Date();

  // Core, services, clinics, and local landing pages from registry
  const staticPages = entries.map((entry) => ({
    url: entry.path === "/" ? siteConfig.url : `${siteConfig.url}${entry.path}`,
    lastModified: entry.lastModified ?? now,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
