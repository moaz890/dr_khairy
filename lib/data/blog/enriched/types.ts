import type { T } from "../types";

export type EnrichedContent = {
  excerpt: T;
  body: T[];
  readMinutes?: number;
};

export type EnrichedMap = Record<string, EnrichedContent>;
