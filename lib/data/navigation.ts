type T = { en: string; ar: string };

export interface NavServiceLink {
  slug: string;
  label: T;
}

export interface NavServiceGroup {
  id: string;
  label: T;
  links: NavServiceLink[];
}

export const serviceNavGroups: NavServiceGroup[] = [
  {
    id: "rhinoplasty",
    label: { en: "Rhinoplasty", ar: "تجميل الأنف" },
    links: [
      { slug: "rhinoplasty", label: { en: "Rhinoplasty", ar: "تجميل الأنف" } },
      { slug: "functional-rhinoplasty", label: { en: "Functional Rhinoplasty", ar: "تجميل الأنف الوظيفي" } },
      { slug: "revision-rhinoplasty", label: { en: "Revision Rhinoplasty", ar: "تصحيح تجميل الأنف" } },
    ],
  },
  {
    id: "nose-sinus",
    label: { en: "Nose & Sinus", ar: "الأنف والجيوب" },
    links: [
      { slug: "septoplasty", label: { en: "Septoplasty", ar: "الحاجز الأنفي" } },
      { slug: "sinus-surgery", label: { en: "Sinus Surgery (FESS)", ar: "الجيوب الأنفية" } },
      { slug: "nasal-polyps", label: { en: "Nasal Polyps", ar: "الزوائد الأنفية" } },
      { slug: "nasal-obstruction", label: { en: "Nasal Obstruction", ar: "انسداد الأنف" } },
      { slug: "sinusitis", label: { en: "Sinusitis", ar: "التهاب الجيوب" } },
      { slug: "allergic-rhinitis", label: { en: "Allergic Rhinitis", ar: "حساسية الأنف" } },
    ],
  },
  {
    id: "ear",
    label: { en: "Ear", ar: "الأذن" },
    links: [
      { slug: "tinnitus", label: { en: "Tinnitus", ar: "طنين الأذن" } },
      { slug: "hearing-loss", label: { en: "Hearing Loss", ar: "ضعف السمع" } },
      { slug: "ear-infection", label: { en: "Ear Infection", ar: "التهاب الأذن" } },
      { slug: "vertigo", label: { en: "Vertigo", ar: "الدوار" } },
    ],
  },
  {
    id: "throat",
    label: { en: "Throat", ar: "الحنجرة" },
    links: [
      { slug: "tonsillectomy", label: { en: "Tonsillectomy", ar: "اللوزتين" } },
      { slug: "adenoidectomy", label: { en: "Adenoidectomy", ar: "الغدد الأدينية" } },
      { slug: "hoarseness", label: { en: "Hoarseness", ar: "بحة الصوت" } },
      { slug: "swallowing-disorders", label: { en: "Swallowing Disorders", ar: "صعوبة البلع" } },
    ],
  },
  {
    id: "sleep",
    label: { en: "Sleep & Breathing", ar: "النوم والتنفس" },
    links: [
      { slug: "snoring", label: { en: "Snoring", ar: "الشخير" } },
      { slug: "sleep-apnea", label: { en: "Sleep Apnea", ar: "توقف التنفس" } },
    ],
  },
];

export const footerServiceLinks: NavServiceLink[] = [
  { slug: "rhinoplasty", label: { en: "Rhinoplasty", ar: "تجميل الأنف" } },
  { slug: "functional-rhinoplasty", label: { en: "Functional Rhinoplasty", ar: "تجميل الأنف الوظيفي" } },
  { slug: "revision-rhinoplasty", label: { en: "Revision Rhinoplasty", ar: "تصحيح تجميل الأنف" } },
  { slug: "septoplasty", label: { en: "Septoplasty", ar: "الحاجز الأنفي" } },
  { slug: "sinus-surgery", label: { en: "Sinus Surgery", ar: "مناظير الجيوب" } },
  { slug: "nasal-polyps", label: { en: "Nasal Polyps", ar: "الزوائد الأنفية" } },
  { slug: "snoring", label: { en: "Snoring Treatment", ar: "علاج الشخير" } },
  { slug: "tonsillectomy", label: { en: "Tonsillectomy", ar: "استئصال اللوزتين" } },
];

export const homepageServiceGroups = [
  "rhinoplasty",
  "functional-rhinoplasty",
  "septoplasty",
  "sinus-surgery",
  "snoring",
  "tonsillectomy",
] as const;
