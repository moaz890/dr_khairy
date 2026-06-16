export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/nosejob.rhinoplasty",
  instagram: "https://www.instagram.com/dr_mohamed_rabea",
  youtube: "https://www.youtube.com/@mohamedrabea1",
  tiktok: "https://www.tiktok.com/@mohamedrabea5892",
} as const;

export type SocialKey = keyof typeof SOCIAL_LINKS;

export const socialLinkList: { key: SocialKey; href: string }[] = [
  { key: "facebook", href: SOCIAL_LINKS.facebook },
  { key: "instagram", href: SOCIAL_LINKS.instagram },
  { key: "youtube", href: SOCIAL_LINKS.youtube },
  { key: "tiktok", href: SOCIAL_LINKS.tiktok },
];
