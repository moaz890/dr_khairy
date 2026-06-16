import type { Metadata } from "next";

export type LocalizedText = {
  ar: string;
  en: string;
};

export type LocalizedKeywords = {
  ar?: string[];
  en?: string[];
};

export type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export interface PageSeoConfig {
  path: string;
  title: LocalizedText;
  description: LocalizedText;
  keywords?: LocalizedKeywords;
  priority: number;
  changeFrequency: ChangeFrequency;
  robots?: Metadata["robots"];
  noIndex?: boolean;
  openGraph?: {
    type?: "website" | "article";
    publishedTime?: string;
    modifiedTime?: string;
  };
}

export interface SitemapEntry {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: Date;
}
