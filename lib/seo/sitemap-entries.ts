import { seoPages, sitemapPageKeys, type SeoPageKey } from "./pages";
import type { SitemapEntry } from "./types";

export function getSitemapEntries(): SitemapEntry[] {
  return sitemapPageKeys.map((key: SeoPageKey) => {
    const page = seoPages[key];
    return {
      path: page.path,
      priority: page.priority,
      changeFrequency: page.changeFrequency,
    };
  });
}
