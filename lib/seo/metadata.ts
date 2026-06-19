import type { Metadata } from "next";
import { siteConfig } from "./config";
import { seoPages, type SeoPageKey } from "./pages";
import type { PageSeoConfig } from "./types";

function resolveCanonicalUrl(path: string): string {
  if (path === "/") {
    return siteConfig.url;
  }
  return `${siteConfig.url}${path}`;
}

function buildKeywords(config: PageSeoConfig): string[] | undefined {
  const keywords = [...(config.keywords?.ar ?? []), ...(config.keywords?.en ?? [])];
  return keywords.length > 0 ? keywords : undefined;
}

function buildHreflangAlternates(canonicalUrl: string): Metadata["alternates"] {
  return {
    canonical: canonicalUrl,
    languages: {
      ar: canonicalUrl,
      en: canonicalUrl,
      "x-default": canonicalUrl,
    },
  };
}

function buildRobots(config: PageSeoConfig): Metadata["robots"] {
  if (config.noIndex) {
    return { index: false, follow: false };
  }

  if (config.robots) {
    return config.robots;
  }

  return {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

/**
 * Builds complete Next.js Metadata for a page config.
 * Arabic is the primary locale for title/description (Google Egypt priority).
 * hreflang alternates point to the same URL per site architecture (client-side locale toggle).
 */
export function buildMetadata(config: PageSeoConfig): Metadata {
  const canonicalUrl = resolveCanonicalUrl(config.path);
  const title = config.title.ar;
  const description = config.description.ar;
  const ogType = config.openGraph?.type ?? "website";

  return {
    title: { absolute: title },
    description,
    keywords: buildKeywords(config),
    authors: [{ name: siteConfig.name.en }],
    creator: siteConfig.name.en,
    publisher: siteConfig.name.en,
    alternates: buildHreflangAlternates(canonicalUrl),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name.ar,
      locale: siteConfig.localeOpenGraph.ar,
      alternateLocale: [siteConfig.localeOpenGraph.en],
      type: ogType,
      ...(config.openGraph?.publishedTime && {
        publishedTime: config.openGraph.publishedTime,
      }),
      ...(config.openGraph?.modifiedTime && {
        modifiedTime: config.openGraph.modifiedTime,
      }),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: buildRobots(config),
  };
}

export function createPageMetadata(pageKey: SeoPageKey): Metadata {
  return buildMetadata(seoPages[pageKey]);
}

/**
 * Builds metadata for dynamic blog articles.
 */
export function createBlogArticleMetadata(options: {
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  publishedTime: string;
  modifiedTime?: string;
}): Metadata {
  return buildMetadata({
    path: `/blog/${options.slug}`,
    title: {
      ar: `${options.title.ar} | مدونة د. محمد ربيع خيري`,
      en: `${options.title.en} | Dr. Mohammed Rabea Khairy Blog`,
    },
    description: options.description,
    priority: 0.7,
    changeFrequency: "monthly",
    openGraph: {
      type: "article",
      publishedTime: options.publishedTime,
      modifiedTime: options.modifiedTime,
    },
  });
}

/**
 * Builds metadata for dynamic service pages by slug.
 */
export function createServiceMetadata(slug: string): Metadata | null {
  const key = `services/${slug}` as SeoPageKey;
  if (!(key in seoPages)) {
    return null;
  }
  return createPageMetadata(key);
}

const localPageKeyMap: Record<string, SeoPageKey> = {
  "cairo/rhinoplasty": "local/cairo-rhinoplasty",
  "cairo/ent-specialist": "local/cairo-ent-specialist",
  "zagazig/rhinoplasty": "local/zagazig-rhinoplasty",
  "zagazig/sinus-surgery": "local/zagazig-sinus-surgery",
};

/**
 * Builds metadata for city/topic local SEO landing pages.
 */
export function createLocalPageMetadata(city: string, topic: string): Metadata | null {
  const key = localPageKeyMap[`${city}/${topic}`];
  if (!key) {
    return null;
  }
  return createPageMetadata(key);
}
