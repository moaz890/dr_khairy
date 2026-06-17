export { siteConfig } from "./config";
export {
  buildMetadata,
  createPageMetadata,
  createBlogArticleMetadata,
  createServiceMetadata,
  createLocalPageMetadata,
} from "./metadata";
export { seoPages, corePageKeys, servicePageKeys, localPageKeys, sitemapPageKeys, type SeoPageKey } from "./pages";
export { getSitemapEntries } from "./sitemap-entries";
export {
  buildFaqPageSchema,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildPhysicianSchema,
  buildMedicalWebPageSchema,
  buildArticleSchema,
} from "./schema";
export type { PageSeoConfig, LocalizedText, SitemapEntry } from "./types";
