// Video library — ENT specialty (bilingual EN / AR)

type T = { en: string; ar: string };

export type VideoCategoryKey = "all" | "education" | "media" | "tips" | "conference";

export interface Video {
  id: string;
  title: T;
  description: T;
  category: Exclude<VideoCategoryKey, "all">;
  duration: string;
  views: string;
  date: string;
  thumbnailGradient: string;
  youtubeId?: string;
}

export const videoCategoryKeys: VideoCategoryKey[] = [
  "all",
  "education",
  "media",
  "tips",
  "conference",
];

export const videos: Video[] = [
  {
    id: "v1",
    title: {
      en: "Understanding Chronic Sinusitis — Causes & Surgical Solutions",
      ar: "فهم التهاب الجيوب الأنفية المزمن — الأسباب والحلول الجراحية",
    },
    description: {
      en: "A patient-friendly guide to chronic sinusitis — what causes it, when medication isn't enough, and how FESS can restore normal breathing.",
      ar: "دليل مبسّط للمرضى حول التهاب الجيوب الأنفية المزمن — أسبابه، ومتى لا تكفي الأدوية، وكيف تُعيد جراحة الجيوب بالمنظار التنفس الطبيعي.",
    },
    category: "education",
    duration: "16:24",
    views: "98K",
    date: "2024-05-12",
    thumbnailGradient: "from-cyan-900 to-cyan-700",
  },
  {
    id: "v2",
    title: {
      en: "Rhinoplasty in 5 Minutes — What Really Happens in the Operating Room",
      ar: "تجميل الأنف في ٥ دقائق — ماذا يحدث فعلاً في غرفة العمليات",
    },
    description: {
      en: "A concise walkthrough of the rhinoplasty procedure — from anaesthesia to recovery, demystifying what patients can expect.",
      ar: "جولة مختصرة لإجراء تجميل الأنف — من التخدير إلى التعافي، لتوضيح ما يمكن أن يتوقعه المريض.",
    },
    category: "education",
    duration: "5:18",
    views: "214K",
    date: "2024-03-28",
    thumbnailGradient: "from-amber-800 to-amber-600",
  },
  {
    id: "v3",
    title: {
      en: "Tonsil Removal: When Is It Necessary for Children?",
      ar: "استئصال اللوزتين: متى يكون ضرورياً للأطفال؟",
    },
    description: {
      en: "Prof. Khairy explains the clinical criteria for tonsillectomy in children and what parents should know before deciding on surgery.",
      ar: "يشرح الأستاذ الدكتور خيري المعايير السريرية لاستئصال اللوزتين عند الأطفال وما يجب على الأهل معرفته قبل اتخاذ قرار الجراحة.",
    },
    category: "education",
    duration: "11:42",
    views: "76K",
    date: "2024-02-15",
    thumbnailGradient: "from-emerald-800 to-teal-700",
  },
  {
    id: "v4",
    title: {
      en: "Snoring vs Sleep Apnea — Prof. Khairy Explains the Difference",
      ar: "الشخير مقابل انقطاع النفس — الأستاذ الدكتور خيري يوضح الفرق",
    },
    description: {
      en: "Not all snoring is harmless. Learn how to distinguish simple snoring from obstructive sleep apnea and when to seek evaluation.",
      ar: "ليس كل شخير بريئاً. تعرّف كيف تميّز الشخير البسيط عن انقطاع النفس الانسدادي ومتى تطلب التقييم.",
    },
    category: "tips",
    duration: "7:55",
    views: "287K",
    date: "2024-04-08",
    thumbnailGradient: "from-slate-800 to-slate-600",
  },
  {
    id: "v5",
    title: {
      en: "Endoscopic Sinus Surgery (FESS) — Before & After Patient Journey",
      ar: "جراحة الجيوب الأنفية بالمنظار — رحلة المريض قبل وبعد العملية",
    },
    description: {
      en: "Follow a real patient's journey through FESS — pre-operative assessment, the procedure itself, and recovery milestones.",
      ar: "تابع رحلة مريض حقيقي خلال جراحة الجيوب بالمنظار — التقييم قبل العملية، والإجراء نفسه، ومحطات التعافي.",
    },
    category: "education",
    duration: "22:10",
    views: "54K",
    date: "2024-01-20",
    thumbnailGradient: "from-cyan-800 to-indigo-700",
  },
  {
    id: "v6",
    title: {
      en: "Eardrum Repair (Tympanoplasty) — Patient Education Guide",
      ar: "ترقيع الطبلة (تيمبانوبلاستي) — دليل تثقيف المرضى",
    },
    description: {
      en: "Everything you need to know about tympanoplasty — indications, surgical approach, expected hearing improvement, and recovery timeline.",
      ar: "كل ما تحتاج معرفته عن ترقيع الطبلة — المؤشرات، والنهج الجراحي، والتحسن المتوقع في السمع، وجدول التعافي.",
    },
    category: "education",
    duration: "14:33",
    views: "43K",
    date: "2023-11-05",
    thumbnailGradient: "from-teal-800 to-cyan-700",
  },
  {
    id: "v7",
    title: {
      en: "Ventilation Tubes for Kids — A Parent's Guide",
      ar: "أنابيب التهوية للأطفال — دليل للأهل",
    },
    description: {
      en: "A complete guide for parents considering grommets for their child — when they're needed, what the procedure involves, and follow-up care.",
      ar: "دليل شامل للأهل الذين يفكرون في أنابيب التهوية لأطفالهم — متى تُحتاج، وماذا يتضمن الإجراء، والمتابعة بعد العملية.",
    },
    category: "education",
    duration: "9:47",
    views: "61K",
    date: "2024-06-01",
    thumbnailGradient: "from-indigo-900 to-cyan-800",
  },
  {
    id: "v8",
    title: {
      en: "Deviated Septum: Can You Fix It Without Surgery?",
      ar: "انحراف الحاجز الأنفي: هل يمكن علاجه دون جراحة؟",
    },
    description: {
      en: "Prof. Khairy discusses non-surgical options for nasal obstruction and when septoplasty becomes the right choice.",
      ar: "يناقش الأستاذ الدكتور خيري الخيارات غير الجراحية لانسداد الأنف ومتى تصبح عملية تصحيح الحاجز الخيار الأنسب.",
    },
    category: "tips",
    duration: "6:12",
    views: "178K",
    date: "2024-07-14",
    thumbnailGradient: "from-amber-800 to-orange-700",
  },
  {
    id: "v9",
    title: {
      en: "Rhinoplasty Recovery Timeline — Day by Day",
      ar: "جدول التعافي بعد تجميل الأنف — يوماً بيوم",
    },
    description: {
      en: "A detailed day-by-day recovery guide after rhinoplasty — swelling patterns, activity restrictions, and when you'll see your final result.",
      ar: "دليل تعافٍ مفصّل يوماً بيوم بعد تجميل الأنف — أنماط التورم، وقيود النشاط، ومتى تظهر النتيجة النهائية.",
    },
    category: "tips",
    duration: "8:30",
    views: "195K",
    date: "2024-08-02",
    thumbnailGradient: "from-cyan-900 to-indigo-800",
  },
];
