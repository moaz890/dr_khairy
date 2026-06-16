import type { BeforeAfterCase } from "./before-after";

type T = { en: string; ar: string };

export interface BeforeAfterVideo {
  id: string;
  youtubeId: string;
  title: T;
  alt: T;
  category: BeforeAfterCase["category"];
  description: T;
  relatedServiceSlug: string;
}

export const beforeAfterVideos: BeforeAfterVideo[] = [
  {
    id: "bav1",
    youtubeId: "maHo1Cp2yS4",
    title: {
      en: "Dorsal Hump & Bony Deviation Correction",
      ar: "إصلاح البروز والاعوجاج العظمي",
    },
    alt: {
      en: "Rhinoplasty before and after — dorsal hump and bony deviation correction by Prof. Dr. Rabea Khairy",
      ar: "تجميل الأنف قبل وبعد — إصلاح البروز والاعوجاج العظمي مع أ.د. محمد ربيع خيري",
    },
    category: "rhinoplasty",
    description: {
      en: "Correction of dorsal prominence and bony asymmetry for a smoother nasal profile.",
      ar: "تصحيح البروز الأنفي والاعوجاج العظمي للحصول على ملف أنفي أنعم.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav2",
    youtubeId: "GbF6Vj3di6A",
    title: {
      en: "Tip & Alar Base Reduction",
      ar: "تصغير الأرنبة والجناب",
    },
    alt: {
      en: "Rhinoplasty before and after — nasal tip and alar base reduction",
      ar: "تجميل الأنف قبل وبعد — تصغير الأرنبة والجناب",
    },
    category: "rhinoplasty",
    description: {
      en: "Refined tip and narrower alar base with balanced facial proportions.",
      ar: "مقدمة أنيقة وجناب أضيق مع تناسق متوازن للوجه.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav3",
    youtubeId: "Ere8bnuisPs",
    title: {
      en: "Nose, Tip & Hump Reduction",
      ar: "تصغير الأنف والمقدمة والبروز",
    },
    alt: {
      en: "Rhinoplasty before and after — overall nose, tip and hump reduction",
      ar: "تجميل الأنف قبل وبعد — تصغير الأنف والمقدمة والبروز",
    },
    category: "rhinoplasty",
    description: {
      en: "Comprehensive reduction of nasal size, tip refinement and dorsal hump removal.",
      ar: "تصغير شامل للأنف مع تحديد المقدمة وإزالة البروز.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav4",
    youtubeId: "ggY6pqg5RGA",
    title: {
      en: "Tip Elevation & Nostril Reshaping",
      ar: "رفع مقدمة الأنف وتنسيق الفتحات",
    },
    alt: {
      en: "Rhinoplasty before and after — tip elevation and nostril reshaping",
      ar: "تجميل الأنف قبل وبعد — رفع مقدمة الأنف وتنسيق الفتحات",
    },
    category: "rhinoplasty",
    description: {
      en: "Lifted tip position with harmonised nostril shape and symmetry.",
      ar: "رفع المقدمة مع تناسق شكل الفتحات الأنفية.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav5",
    youtubeId: "w3vI5UUKwS4",
    title: {
      en: "Dorsal Hump Rhinoplasty — Tip Lift & Reduction",
      ar: "تجميل الأنف الخطم ورفع الأرنبة وتصغيرها",
    },
    alt: {
      en: "Rhinoplasty before and after — dorsal hump removal with tip lift and reduction",
      ar: "تجميل الأنف قبل وبعد — تجميل الخطم ورفع الأرنبة وتصغيرها",
    },
    category: "functional",
    description: {
      en: "Dorsal profile correction combined with tip elevation and size reduction.",
      ar: "تصحيح الخطم مع رفع الأرنبة وتصغيرها.",
    },
    relatedServiceSlug: "functional-rhinoplasty",
  },
  {
    id: "bav6",
    youtubeId: "Nq91kUBy-fY",
    title: {
      en: "Rhinoplasty & Nose Reduction",
      ar: "تجميل وتصغير الأنف",
    },
    alt: {
      en: "Rhinoplasty before and after — aesthetic reshaping and nose reduction",
      ar: "تجميل الأنف قبل وبعد — تجميل وتصغير الأنف",
    },
    category: "rhinoplasty",
    description: {
      en: "Natural overall nose reduction with refined aesthetic contours.",
      ar: "تصغير طبيعي للأنف مع ملامح جمالية متناسقة.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav7",
    youtubeId: "sP8QMTE9780",
    title: {
      en: "Tip Reduction & Elevation",
      ar: "تصغير ورفع المقدمة",
    },
    alt: {
      en: "Rhinoplasty before and after — nasal tip reduction and elevation",
      ar: "تجميل الأنف قبل وبعد — تصغير ورفع المقدمة",
    },
    category: "rhinoplasty",
    description: {
      en: "Smaller, lifted tip with improved nasal-facial balance.",
      ar: "مقدمة أصغر ومرفوعة مع توازن أفضل بين الأنف والوجه.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav8",
    youtubeId: "RhG7XzwTV9I",
    title: {
      en: "Tip Reduction, Definition & Elevation",
      ar: "تصغير وتحديد ورفع المقدمة",
    },
    alt: {
      en: "Rhinoplasty before and after — tip reduction, definition and elevation",
      ar: "تجميل الأنف قبل وبعد — تصغير وتحديد ورفع المقدمة",
    },
    category: "rhinoplasty",
    description: {
      en: "Defined, refined tip with reduced bulk and elegant lift.",
      ar: "مقدمة محددة وأنيقة مع تصغير ورفع متناسق.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav9",
    youtubeId: "X6pW4AAqPB0",
    title: {
      en: "Nose Length Shortening & Tip Elevation",
      ar: "تقصير طول الأنف ورفع المقدمة",
    },
    alt: {
      en: "Rhinoplasty before and after — nose length shortening and tip elevation",
      ar: "تجميل الأنف قبل وبعد — تقصير طول الأنف ورفع المقدمة",
    },
    category: "rhinoplasty",
    description: {
      en: "Shorter nasal length with an elevated tip for a youthful profile.",
      ar: "تقصير طول الأنف مع رفع المقدمة لملف أنفي أكثر شباباً.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
  {
    id: "bav10",
    youtubeId: "DnYQcitpYfk",
    title: {
      en: "Nose Reduction & Hump Removal",
      ar: "تصغير الأنف وإزالة البروز",
    },
    alt: {
      en: "Rhinoplasty before and after — nose reduction and dorsal hump removal",
      ar: "تجميل الأنف قبل وبعد — تصغير الأنف وإزالة البروز",
    },
    category: "rhinoplasty",
    description: {
      en: "Smaller nose with smooth dorsal line after hump removal.",
      ar: "أنف أصغر مع خط ظهري أنعم بعد إزالة البروز.",
    },
    relatedServiceSlug: "rhinoplasty",
  },
];
