import { seoPages, type SeoPageKey } from "./pages";

export function getServicePath(slug: string): string {
  const key = `services/${slug}`;
  if (key in seoPages) {
    return seoPages[key as SeoPageKey].path;
  }
  return `/services/${slug}`;
}

export function getLocalPagePath(city: string, topic: string): string {
  const localPageKeyMap: Record<string, SeoPageKey> = {
    "cairo/rhinoplasty": "local/cairo-rhinoplasty",
    "cairo/ent-specialist": "local/cairo-ent-specialist",
    "zagazig/rhinoplasty": "local/zagazig-rhinoplasty",
    "zagazig/sinus-surgery": "local/zagazig-sinus-surgery",
  };
  const key = localPageKeyMap[`${city}/${topic}`];
  if (key && key in seoPages) {
    return seoPages[key].path;
  }
  return `/${city}/${topic}`;
}
