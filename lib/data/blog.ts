// Blog posts and Myth vs Fact — ENT specialty (bilingual EN / AR)

type T = { en: string; ar: string };

export type BlogCategoryKey =
  | "all"
  | "ent-surgery"
  | "rhinoplasty"
  | "patient-education"
  | "prevention"
  | "research";

export interface BlogPost {
  id: string;
  title: T;
  excerpt: T;
  category: Exclude<BlogCategoryKey, "all">;
  date: string;
  readMinutes: number;
  featured: boolean;
  gradientClass: string;
}

export interface MythFact {
  id: string;
  myth: T;
  fact: T;
  category: Exclude<BlogCategoryKey, "all">;
}

export const blogCategoryKeys: BlogCategoryKey[] = [
  "all",
  "ent-surgery",
  "rhinoplasty",
  "patient-education",
  "prevention",
  "research",
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: {
      en: "Endoscopic Sinus Surgery: What to Expect Before, During & After",
      ar: "جراحة الجيوب الأنفية بالمنظار: ماذا تتوقع قبل وأثناء وبعد العملية؟",
    },
    excerpt: {
      en: "A complete patient guide to FESS — from pre-operative CT scans and nasal preparation to recovery milestones and long-term outcomes.",
      ar: "دليل شامل للمريض حول FESS — من الأشعة المقطعية والتحضير الأنفي قبل العملية إلى مراحل التعافي والنتائج طويلة المدى.",
    },
    category: "ent-surgery",
    date: "2024-06-01",
    readMinutes: 9,
    featured: true,
    gradientClass: "from-cyan-900 to-indigo-800",
  },
  {
    id: "b2",
    title: {
      en: "5 Signs You May Have a Deviated Septum",
      ar: "٥ علامات تدل على أن لديك انحرافاً في الحاجز الأنفي",
    },
    excerpt: {
      en: "Chronic nasal blockage, snoring, and frequent nosebleeds may point to a deviated septum. Here are five warning signs and when to see an ENT specialist.",
      ar: "الانسداد الأنفي المزمن والشخير ونزيف الأنف المتكرر قد يشير إلى انحراف الحاجز. إليك خمس علامات تحذيرية ومتى تراجع أخصائي الأنف والأذن.",
    },
    category: "ent-surgery",
    date: "2024-05-14",
    readMinutes: 6,
    featured: false,
    gradientClass: "from-emerald-800 to-teal-700",
  },
  {
    id: "b3",
    title: {
      en: "Rhinoplasty in Egypt: Safety, Recovery & Results",
      ar: "تجميل الأنف في مصر: السلامة والتعافي والنتائج",
    },
    excerpt: {
      en: "Considering rhinoplasty in Egypt? Prof. Khairy explains how to choose a qualified surgeon, what safety standards to expect, and realistic recovery timelines.",
      ar: "تفكر في تجميل الأنف في مصر؟ يوضح الأستاذ الدكتور خيري كيف تختار جراحاً مؤهلاً ومعايير السلامة المتوقعة وجداول التعافي الواقعية.",
    },
    category: "rhinoplasty",
    date: "2024-04-22",
    readMinutes: 10,
    featured: true,
    gradientClass: "from-amber-800 to-orange-700",
  },
  {
    id: "b4",
    title: {
      en: "Snoring vs Sleep Apnea: How to Tell the Difference",
      ar: "الشخير مقابل انقطاع النفس أثناء النوم: كيف تميز بينهما؟",
    },
    excerpt: {
      en: "Snoring is common, but it can mask a serious condition. Learn the clinical differences between benign snoring and obstructive sleep apnea.",
      ar: "الشخير شائع، لكنه قد يخفي حالة خطيرة. تعرّف على الفروق السريرية بين الشخير البسيط وانقطاع النفس الانسدادي أثناء النوم.",
    },
    category: "patient-education",
    date: "2024-03-10",
    readMinutes: 7,
    featured: false,
    gradientClass: "from-slate-800 to-slate-700",
  },
  {
    id: "b5",
    title: {
      en: "Should My Child Have Their Tonsils Removed?",
      ar: "هل يجب إزالة لوز طفلي؟",
    },
    excerpt: {
      en: "Tonsillectomy isn't always the answer. Prof. Khairy outlines the evidence-based criteria that guide the decision for children with recurrent throat infections.",
      ar: "استئصال اللوز ليس دائماً الحل. يحدد الأستاذ الدكتور خيري المعايير المبنية على الأدلة التي توجه القرار للأطفال ذوي التهابات الحلق المتكررة.",
    },
    category: "patient-education",
    date: "2024-02-28",
    readMinutes: 8,
    featured: false,
    gradientClass: "from-cyan-800 to-cyan-700",
  },
  {
    id: "b6",
    title: {
      en: "Ventilation Tubes for Kids: A Parent's Complete Guide",
      ar: "أنابيب التهوية للأطفال: دليل شامل للآباء",
    },
    excerpt: {
      en: "From diagnosis of glue ear to tube insertion and follow-up — everything parents need to know about myringotomy and grommets.",
      ar: "من تشخيص التهاب الأذن الوسطى بالسوائل إلى إدخال الأنبوب والمتابعة — كل ما يحتاجه الآباء معرفته عن شق الطبلة وأنابيب التهوية.",
    },
    category: "ent-surgery",
    date: "2024-01-15",
    readMinutes: 9,
    featured: false,
    gradientClass: "from-indigo-900 to-cyan-800",
  },
];

export const mythFacts: MythFact[] = [
  {
    id: "mf1",
    myth: {
      en: "ENT surgery is only cosmetic.",
      ar: "جراحة الأنف والأذن والحنجرة تجميلية فقط.",
    },
    fact: {
      en: "The vast majority of ENT procedures address functional problems — breathing, hearing, swallowing, and sleep — with cosmetic improvement as a secondary benefit in rhinoplasty.",
      ar: "الغالبية العظمى من إجراءات الأنف والأذن والحنجرة تعالج مشاكل وظيفية — التنفس والسمع والبلع والنوم — مع تحسين جمالي ثانوي في تجميل الأنف.",
    },
    category: "ent-surgery",
  },
  {
    id: "mf2",
    myth: {
      en: "Snoring is harmless.",
      ar: "الشخير أمر بريء ولا يضر.",
    },
    fact: {
      en: "Habitual loud snoring can indicate obstructive sleep apnea (OSA), which is linked to hypertension, heart disease, stroke, and daytime accidents if left untreated.",
      ar: "الشخير العالي المتكرر قد يشير إلى انقطاع النفس الانسدادي أثناء النوم المرتبط بارتفاع ضغط الدم وأمراض القلب والسكتة والحوادث النهارية إذا تُرك دون علاج.",
    },
    category: "prevention",
  },
  {
    id: "mf3",
    myth: {
      en: "Children always outgrow tonsil problems.",
      ar: "الأطفال يتجاوزون مشاكل اللوز دائماً مع العمر.",
    },
    fact: {
      en: "While some children improve with age, chronic tonsillitis (≥7 episodes/year), sleep-disordered breathing, and peritonsillar abscess history are clear indications for tonsillectomy.",
      ar: "رغم تحسن بعض الأطفال مع العمر، فإن التهاب اللوز المزمن (≥٧ نوبات/سنة) واضطرابات التنفس أثناء النوم وتاريخ خراج حول اللوز مؤشرات واضحة لاستئصال اللوز.",
    },
    category: "patient-education",
  },
  {
    id: "mf4",
    myth: {
      en: "Rhinoplasty results look unnatural.",
      ar: "نتائج تجميل الأنف تبدو غير طبيعية.",
    },
    fact: {
      en: "Modern rhinoplasty emphasises natural, proportionate results. Prof. Khairy's European-trained techniques focus on preserving nasal function while achieving harmonious facial balance.",
      ar: "تجميل الأنف الحديث يركز على نتائج طبيعية متناسقة. تقنيات الأستاذ الدكتور خيري المدربة أوروبياً تحافظ على وظيفة الأنف مع تحقيق تناسق وجهي متناغم.",
    },
    category: "rhinoplasty",
  },
  {
    id: "mf5",
    myth: {
      en: "Sinus surgery is very painful.",
      ar: "جراحة الجيوب الأنفية مؤلمة جداً.",
    },
    fact: {
      en: "Functional endoscopic sinus surgery (FESS) is minimally invasive with no external incisions. Most patients return to normal activities within 1–2 weeks with manageable discomfort.",
      ar: "جراحة الجيوب الأنفية الوظيفية بالمنظار (FESS) طفيفة التوغل بلا شقوق خارجية. يعود معظم المرضى لأنشطتهم خلال ١-٢ أسبوع بانزعاج يمكن التحكم فيه.",
    },
    category: "ent-surgery",
  },
  {
    id: "mf6",
    myth: {
      en: "Ear tubes fall out on their own — no need for follow-up.",
      ar: "أنابيب الأذن تسقط وحدها — لا حاجة للمتابعة.",
    },
    fact: {
      en: "While ventilation tubes typically extrude within 6–18 months, regular ENT follow-up is essential to monitor eardrum healing, hearing recovery, and detect complications early.",
      ar: "رغم أن أنابيب التهوية تخرج عادة خلال ٦-١٨ شهراً، فإن المتابعة المنتظمة لدى أخصائي الأنف والأذن ضرورية لمراقبة التئام الطبلة واستعادة السمع واكتشاف المضاعفات مبكراً.",
    },
    category: "patient-education",
  },
];
