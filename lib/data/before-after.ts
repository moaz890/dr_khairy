type T = { en: string; ar: string };

export interface BeforeAfterCase {
  id: string;
  title: T;
  alt: T;
  category: "rhinoplasty" | "functional" | "revision";
  description: T;
  gradientClass: string;
  beforeImage?: string;
  afterImage?: string;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "ba1",
    title: { en: "Dorsal Hump Reduction & Tip Refinement", ar: "إزالة التحدب وتحديد المقدمة" },
    alt: {
      en: "Rhinoplasty before and after — dorsal hump reduction and tip refinement by Dr. Rabea Khairy",
      ar: "تجميل الأنف قبل وبعد — إزالة التحدب وتحديد المقدمة مع د. ربيع خيري",
    },
    category: "rhinoplasty",
    description: {
      en: "Natural profile correction with preserved nasal breathing function.",
      ar: "تصحيح طبيعي للملف الأنفي مع الحفاظ على وظيفة التنفس.",
    },
    gradientClass: "from-cyan-900 to-slate-800",
  },
  {
    id: "ba2",
    title: { en: "Functional Rhinoplasty — Septal Correction", ar: "تجميل وظيفي مع استعدال الحاجز" },
    alt: {
      en: "Functional rhinoplasty before and after with septoplasty — Dr. Mohammed Rabea Khairy",
      ar: "تجميل الأنف الوظيفي قبل وبعد مع تقويم الحاجز — د. محمد ربيع خيري",
    },
    category: "functional",
    description: {
      en: "Combined aesthetic refinement and septoplasty for improved airflow.",
      ar: "تحسين جمالي مع تقويم الحاجز لتحسين تدفق الهواء.",
    },
    gradientClass: "from-emerald-800 to-teal-700",
  },
  {
    id: "ba3",
    title: { en: "Revision — Over-Rotated Tip Correction", ar: "تصحيح مقدمة مرفوعة أكثر من اللازم" },
    alt: {
      en: "Revision rhinoplasty before and after — over-rotated tip correction Egypt",
      ar: "تصحيح تجميل الأنف قبل وبعد — مقدمة مرفوعة أكثر من اللازم في مصر",
    },
    category: "revision",
    description: {
      en: "Secondary rhinoplasty restoring natural tip position and symmetry.",
      ar: "تجميل ثانوي لاستعادة وضع المقدمة الطبيعي والتناسق.",
    },
    gradientClass: "from-amber-800 to-orange-700",
  },
  {
    id: "ba4",
    title: { en: "Wide Nose Narrowing & Alar Reduction", ar: "تصغير عرض الأنف والجناب" },
    alt: {
      en: "Nose narrowing rhinoplasty before and after results — Dr. Khairy Cairo",
      ar: "نتائج تصغير عرض الأنف قبل وبعد — د. خيري القاهرة",
    },
    category: "rhinoplasty",
    description: {
      en: "Proportionate narrowing aligned with facial dimensions.",
      ar: "تضييق متناسب مع أبعاد الوجه.",
    },
    gradientClass: "from-indigo-900 to-cyan-800",
  },
  {
    id: "ba5",
    title: { en: "Thick-Skin Rhinoplasty", ar: "تجميل الأنف للجلد السميك" },
    alt: {
      en: "Thick skin rhinoplasty before and after — specialized technique Dr. Rabea Khairy",
      ar: "تجميل الأنف للجلد السميك قبل وبعد — تقنية متخصصة د. ربيع خيري",
    },
    category: "functional",
    description: {
      en: "Specialized technique for thick nasal skin with defined tip support.",
      ar: "تقنية متخصصة للجلد الأنفي السميك مع دعم محكم للمقدمة.",
    },
    gradientClass: "from-slate-800 to-slate-600",
  },
  {
    id: "ba6",
    title: { en: "Revision — Polly Beak Deformity", ar: "تصحيح deformity Polly Beak" },
    alt: {
      en: "Revision rhinoplasty before and after — polly beak deformity correction Egypt",
      ar: "تصحيح تجميل الأنف قبل وبعد — تصحيح Polly Beak في مصر",
    },
    category: "revision",
    description: {
      en: "Correction of supratip fullness from previous rhinoplasty.",
      ar: "تصحيح البروز فوق المقدمة الناتج عن عملية سابقة.",
    },
    gradientClass: "from-rose-900 to-amber-900",
  },
];
