import { initialBlogPosts, mythFacts } from "./initial-posts";
import { extendedBlogPosts } from "./posts-extended";
import { applyBlogEnrichment } from "./enriched/apply";

export type {
  BlogPost,
  BlogCategoryKey,
  BlogPostCategory,
  MythFact,
  T,
} from "./types";

export { blogCategoryKeys, categoryGradients } from "./types";
export { createBlogPost, bodyFromTopic, defaultCta } from "./factory";

export const blogPosts = [
  ...initialBlogPosts,
  ...applyBlogEnrichment(extendedBlogPosts),
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogSlugs: string[] = blogPosts.map((p) => p.slug);

export { mythFacts };
