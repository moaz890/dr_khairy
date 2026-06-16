import type { BlogPost, BlogPostCategory, T } from "./types";
import { categoryGradients } from "./types";

export interface BlogPostInput {
  id: string;
  slug: string;
  title: T;
  excerpt: T;
  body: T[];
  category: BlogPostCategory;
  date: string;
  readMinutes?: number;
  featured?: boolean;
  gradientIndex?: number;
  primaryServiceSlug?: string;
  relatedServiceSlugs?: string[];
  relatedBlogSlugs?: string[];
}

export function createBlogPost(input: BlogPostInput): BlogPost {
  const gradients = categoryGradients[input.category];
  const gradientClass = gradients[input.gradientIndex ?? 0] ?? gradients[0];

  return {
    id: input.id,
    slug: input.slug,
    title: input.title,
    excerpt: input.excerpt,
    body: input.body,
    category: input.category,
    date: input.date,
    readMinutes: input.readMinutes ?? 7,
    featured: input.featured ?? false,
    gradientClass,
    primaryServiceSlug: input.primaryServiceSlug,
    relatedServiceSlugs: input.relatedServiceSlugs ?? [],
    relatedBlogSlugs: input.relatedBlogSlugs ?? [],
  };
}

/** Builds a standard 3-paragraph body from topic sentences. */
export function bodyFromTopic(topic: T, detail: T, cta: T): T[] {
  return [topic, detail, cta];
}

export const defaultCta: T = {
  en: "Prof. Dr. Mohammed Rabea Khairy offers comprehensive evaluation and personalised treatment at clinics in New Cairo and Zagazig. Book via WhatsApp for a consultation.",
  ar: "يقدم أ.د. محمد ربيع خيري تقييماً شاملاً وعلاجاً مخصصاً في عيادات التجمع الخامس والزقازيق. احجز عبر واتساب للاستشارة.",
};
