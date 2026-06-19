export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://drrabiekhairy.com",
  name: {
    ar: "د. محمد ربيع خيري",
    en: "Prof. Dr. Mohammed Rabea Khairy",
  },
  shortName: {
    ar: "د. محمد ربيع خيري",
    en: "Dr. Mohammed Rabea Khairy",
  },
  defaultTitle: {
    ar: "د. محمد ربيع خيري | استشاري الأنف والأذن والحنجرة وتجميل الأنف",
    en: "Prof. Dr. Mohammed Rabea Khairy | ENT & Rhinoplasty Specialist",
  },
  defaultDescription: {
    ar: "أستاذ كلية الطب، استشاري أنف وأذن وحنجرة، متخصص في تجميل الأنف الوظيفي ومناظير الجيوب الأنفية. عيادات التجمع الخامس والزقازيق.",
    en: "Professor of Medicine, ENT consultant and rhinoplasty specialist. Functional rhinoplasty and endoscopic sinus surgery. Clinics in New Cairo (5th Settlement) and Zagazig.",
  },
  phone: "01124427427",
  whatsapp: "201124427427",
  ogImage: "/logo.jpg",
  locales: ["ar", "en"] as const,
  primaryLocale: "ar" as const,
  localeOpenGraph: {
    ar: "ar_EG",
    en: "en_US",
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
