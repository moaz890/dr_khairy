import { createBlogPost, defaultCta } from "./factory";

export const targetedBlogPosts = [
  createBlogPost({
    id: "b51",
    slug: "deviated-septum-headaches",
    title: {
      en: "Can a Deviated Septum Cause Headaches?",
      ar: "هل يسبب انحراف الحاجز الأنفي صداعاً؟",
    },
    excerpt: {
      en: "Expert guide by Prof. Dr. Mohammed Rabea Khairy on deviated septum and headaches.",
      ar: "دليل طبي من أ.د. محمد ربيع خيري حول انحراف الحاجز الأنفي والصداع.",
    },
    body: [
      {
        en: "A deviated septum can contribute to facial pressure and sinus-type headaches when airflow is blocked and sinus drainage is impaired.",
        ar: "قد يساهم انحراف الحاجز في ضغط وجهي وصداع شبيه بالجيوب عند انسداد تدفق الهواء وضعف تصريف الجيوب.",
      },
      {
        en: "Prof. Dr. Khairy evaluates each case with examination and endoscopy before recommending medical or surgical treatment.",
        ar: "يقيّم الأستاذ الدكتور خيري كل حالة بالفحص والمنظار قبل التوصية بالعلاج الدوائي أو الجراحي.",
      },
      defaultCta,
    ],
    category: "nose-conditions",
    date: "2024-06-01",
    readMinutes: 7,
    featured: true,
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["septoplasty", "nasal-obstruction", "sinusitis"],
    relatedBlogSlugs: ["deviated-septum-signs", "do-i-need-septoplasty", "sinus-headache-vs-normal"],
  }),
  createBlogPost({
    id: "b52",
    slug: "is-snoring-dangerous",
    title: {
      en: "Is Snoring Dangerous? When to Worry",
      ar: "هل الشخير خطير؟ متى يجب القلق",
    },
    excerpt: {
      en: "Expert guide by Prof. Dr. Mohammed Rabea Khairy on whether snoring is dangerous.",
      ar: "دليل طبي من أ.د. محمد ربيع خيري حول هل الشخير خطير.",
    },
    body: [
      {
        en: "Habitual loud snoring may signal obstructive sleep apnoea — a condition linked to hypertension, heart disease, and daytime accidents.",
        ar: "الشخير العالي المتكرر قد يشير لانقطاع النفس الانسدادي — حالة مرتبطة بارتفاع الضغط وأمراض القلب وحوادث النهار.",
      },
      {
        en: "Prof. Dr. Khairy evaluates each case with examination and endoscopy before recommending medical or surgical treatment.",
        ar: "يقيّم الأستاذ الدكتور خيري كل حالة بالفحص والمنظار قبل التوصية بالعلاج الدوائي أو الجراحي.",
      },
      defaultCta,
    ],
    category: "sleep-breathing",
    date: "2024-06-02",
    readMinutes: 8,
    featured: true,
    primaryServiceSlug: "snoring",
    relatedServiceSlugs: ["snoring", "sleep-apnea", "nasal-obstruction"],
    relatedBlogSlugs: ["snoring-vs-sleep-apnea", "sleep-apnea-symptoms-risks", "septum-deviation-snoring"],
  }),
  createBlogPost({
    id: "b53",
    slug: "adenoids-affect-hearing",
    title: {
      en: "Does Adenoid Enlargement Affect Hearing?",
      ar: "هل يؤثر تضخم اللحمية على السمع؟",
    },
    excerpt: {
      en: "Expert guide by Prof. Dr. Mohammed Rabea Khairy on adenoids and hearing in children.",
      ar: "دليل طبي من أ.د. محمد ربيع خيري حول اللحمية والسمع عند الأطفال.",
    },
    body: [
      {
        en: "Enlarged adenoids can block the Eustachian tube and cause middle ear fluid, leading to conductive hearing loss in children.",
        ar: "اللحمية المتضخمة قد تعيق قناة استاكيوس وتسبب سوائل في الأذن الوسطى، مما يؤدي لضعف سمع توصيلي عند الأطفال.",
      },
      {
        en: "Prof. Dr. Khairy evaluates each case with examination and endoscopy before recommending medical or surgical treatment.",
        ar: "يقيّم الأستاذ الدكتور خيري كل حالة بالفحص والمنظار قبل التوصية بالعلاج الدوائي أو الجراحي.",
      },
      defaultCta,
    ],
    category: "throat-conditions",
    date: "2024-06-03",
    readMinutes: 7,
    featured: false,
    primaryServiceSlug: "adenoidectomy",
    relatedServiceSlugs: ["adenoidectomy", "ear-infection", "hearing-loss"],
    relatedBlogSlugs: ["adenoids-children", "ventilation-tubes-guide", "child-tonsillectomy"],
  }),
];
