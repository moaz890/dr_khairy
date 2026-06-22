import type { ServiceFaq } from "../service-pages";

export type T = { en: string; ar: string };

export type BlogCategoryKey =
  | "all"
  | "rhinoplasty"
  | "nose-conditions"
  | "sinusitis"
  | "ear-conditions"
  | "throat-conditions"
  | "sleep-breathing";

export type BlogPostCategory = Exclude<BlogCategoryKey, "all">;

export interface BlogPost {
  id: string;
  slug: string;
  title: T;
  excerpt: T;
  body: T[];
  category: BlogPostCategory;
  date: string;
  readMinutes: number;
  featured: boolean;
  gradientClass: string;
  primaryServiceSlug?: string;
  relatedServiceSlugs: string[];
  relatedBlogSlugs: string[];
  faqs?: ServiceFaq[];
}

export interface MythFact {
  id: string;
  myth: T;
  fact: T;
  category: BlogPostCategory;
}

export const blogCategoryKeys: BlogCategoryKey[] = [
  "all",
  "rhinoplasty",
  "nose-conditions",
  "sinusitis",
  "ear-conditions",
  "throat-conditions",
  "sleep-breathing",
];

export const categoryGradients: Record<BlogPostCategory, string[]> = {
  rhinoplasty: ["from-amber-800 to-orange-700", "from-rose-900 to-amber-900"],
  "nose-conditions": ["from-emerald-800 to-teal-700", "from-cyan-800 to-cyan-700"],
  sinusitis: ["from-cyan-900 to-indigo-800", "from-indigo-900 to-cyan-800"],
  "ear-conditions": ["from-teal-800 to-cyan-700", "from-slate-800 to-slate-600"],
  "throat-conditions": ["from-purple-800 to-indigo-700", "from-cyan-800 to-cyan-700"],
  "sleep-breathing": ["from-slate-800 to-slate-700", "from-emerald-900 to-teal-800"],
};
