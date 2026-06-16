export { siteConfig } from "./config";
export { buildMetadata, createPageMetadata, createBlogArticleMetadata, createServiceMetadata } from "./metadata";
export { seoPages, corePageKeys, servicePageKeys, sitemapPageKeys, type SeoPageKey } from "./pages";
export { getSitemapEntries } from "./sitemap-entries";
export {
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildPhysicianSchema,
  buildMedicalWebPageSchema,
  buildArticleSchema,
} from "./schema";
export type { PageSeoConfig, LocalizedText, SitemapEntry } from "./types";
