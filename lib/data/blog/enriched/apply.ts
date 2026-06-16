import type { BlogPost } from "../types";
import type { EnrichedMap } from "./types";
import { rhinoplastyEnrichment } from "./rhinoplasty";
import { noseConditionsEnrichment } from "./nose-conditions";
import { sinusitisEnrichment } from "./sinusitis";
import { earConditionsEnrichment } from "./ear-conditions";
import { throatConditionsEnrichment } from "./throat-conditions";
import { sleepBreathingEnrichment } from "./sleep-breathing";

const allEnrichment: EnrichedMap = {
  ...rhinoplastyEnrichment,
  ...noseConditionsEnrichment,
  ...sinusitisEnrichment,
  ...earConditionsEnrichment,
  ...throatConditionsEnrichment,
  ...sleepBreathingEnrichment,
};

export function applyBlogEnrichment(posts: BlogPost[]): BlogPost[] {
  return posts.map((post) => {
    const enriched = allEnrichment[post.slug];
    if (!enriched) return post;
    return {
      ...post,
      excerpt: enriched.excerpt,
      body: enriched.body,
      readMinutes: enriched.readMinutes ?? post.readMinutes,
    };
  });
}
