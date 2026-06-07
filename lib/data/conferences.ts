// International conferences — ENT specialty (bilingual EN / AR)

type T = { en: string; ar: string };

export type ConferenceRole = "keynote" | "invited-speaker" | "panelist" | "workshop-chair";

export interface Conference {
  id: string;
  name: T;
  organizer: T;
  city: T;
  country: T;
  year: number;
  month: T;
  role: ConferenceRole;
  topic: T;
  description: T;
  flag: string;
}

export const conferenceRoles: ConferenceRole[] = [
  "keynote",
  "invited-speaker",
  "panelist",
  "workshop-chair",
];

export const conferences: Conference[] = [
  {
    id: "c1",
    name: {
      en: "IFOS World Congress",
      ar: "المؤتمر العالمي للاتحاد الدولي لجمعيات الأنف والأذن والحنجرة",
    },
    organizer: {
      en: "International Federation of Otorhinolaryngological Societies",
      ar: "الاتحاد الدولي لجمعيات الأنف والأذن والحنجرة",
    },
    city: { en: "Dubai", ar: "دبي" },
    country: { en: "UAE", ar: "الإمارات" },
    year: 2024,
    month: { en: "March", ar: "مارس" },
    role: "keynote",
    topic: {
      en: "Advances in Endoscopic Sinus Surgery (FESS)",
      ar: "التطورات في جراحة الجيوب الأنفية بالمنظار",
    },
    description: {
      en: "Opening keynote to 8,000+ global ENT surgeons on modern FESS techniques, navigation systems, and outcomes in chronic rhinosinusitis.",
      ar: "محاضرة رئيسية افتتاحية أمام أكثر من ٨٠٠٠ جراح أنف وأذن وحنجرة حول تقنيات المناظير الحديثة وأنظمة الملاحة ونتائج التهاب الجيوب المزمن.",
    },
    flag: "🇦🇪",
  },
  {
    id: "c2",
    name: {
      en: "European Rhinoplasty Society Meeting",
      ar: "اجتماع الجمعية الأوروبية لتجميل الأنف",
    },
    organizer: {
      en: "European Rhinoplasty Society",
      ar: "الجمعية الأوروبية لتجميل الأنف",
    },
    city: { en: "Paris", ar: "باريس" },
    country: { en: "France", ar: "فرنسا" },
    year: 2024,
    month: { en: "June", ar: "يونيو" },
    role: "invited-speaker",
    topic: {
      en: "Open vs Closed Rhinoplasty: Functional & Aesthetic Balance",
      ar: "تجميل الأنف المفتوح مقابل المغلق: التوازن بين الوظيفة والجمال",
    },
    description: {
      en: "Invited plenary lecture on surgical decision-making in primary and revision rhinoplasty with long-term functional outcomes.",
      ar: "محاضرة مدعوة حول اتخاذ القرار الجراحي في تجميل الأنف الأولي والتصحيحي مع النتائج الوظيفية طويلة المدى.",
    },
    flag: "🇫🇷",
  },
  {
    id: "c3",
    name: {
      en: "AAO-HNSF Annual Meeting",
      ar: "الاجتماع السنوي للأكاديمية الأمريكية لجراحات الأنف والأذن والحنجرة",
    },
    organizer: {
      en: "American Academy of Otolaryngology — Head & Neck Surgery",
      ar: "الأكاديمية الأمريكية لجراحات الأنف والأذن والحنجرة",
    },
    city: { en: "Nashville", ar: "ناشفيل" },
    country: { en: "USA", ar: "الولايات المتحدة" },
    year: 2023,
    month: { en: "October", ar: "أكتوبر" },
    role: "panelist",
    topic: {
      en: "Pediatric ENT: Tonsillectomy & Adenoidectomy in the Modern Era",
      ar: "أنف وأذن وحنجرة الأطفال: استئصال اللوز واللحمية في العصر الحديث",
    },
    description: {
      en: "Expert panel discussing updated indications, bleeding risk reduction, and post-operative care protocols in pediatric ENT surgery.",
      ar: "جلسة نقاش مع خبراء حول المؤشرات المحدّثة وتقليل خطر النزيف وبروتوكولات الرعاية بعد الجراحة لدى الأطفال.",
    },
    flag: "🇺🇸",
  },
  {
    id: "c4",
    name: {
      en: "Pan Arab ORL Society Congress",
      ar: "مؤتمر الجمعية العربية لطب الأنف والأذن والحنجرة",
    },
    organizer: {
      en: "Pan Arab ORL Society",
      ar: "الجمعية العربية لطب الأنف والأذن والحنجرة",
    },
    city: { en: "Cairo", ar: "القاهرة" },
    country: { en: "Egypt", ar: "مصر" },
    year: 2024,
    month: { en: "January", ar: "يناير" },
    role: "keynote",
    topic: {
      en: "Rhinoplasty & Septoplasty: A Unified Surgical Approach",
      ar: "تجميل الأنف وتصحيح الحاجز: نهج جراحي موحّد",
    },
    description: {
      en: "Keynote address on combining functional septoplasty with aesthetic rhinoplasty for optimal breathing and natural results.",
      ar: "محاضرة رئيسية حول الجمع بين تصحيح الحاجز الوظيفي وتجميل الأنف لتحقيق تنفس مثالي ونتائج طبيعية.",
    },
    flag: "🇪🇬",
  },
  {
    id: "c5",
    name: {
      en: "Middle East Academy of Otolaryngology Summit",
      ar: "قمة أكاديمية الشرق الأوسط لطب الأنف والأذن والحنجرة",
    },
    organizer: {
      en: "Middle East Academy of Otolaryngology",
      ar: "أكاديمية الشرق الأوسط لطب الأنف والأذن والحنجرة",
    },
    city: { en: "Riyadh", ar: "الرياض" },
    country: { en: "Saudi Arabia", ar: "السعودية" },
    year: 2024,
    month: { en: "November", ar: "نوفمبر" },
    role: "workshop-chair",
    topic: {
      en: "Hands-On FESS Workshop: Sinus Anatomy & Surgical Navigation",
      ar: "ورشة عملية لجراحة الجيوب بالمنظار: التشريح والملاحة الجراحية",
    },
    description: {
      en: "Chaired a full-day cadaveric and simulation workshop on endoscopic sinus surgery for 120 regional ENT fellows.",
      ar: "أشرف على ورشة عمل يوم كامل باستخدام المحاكاة والتشريح لجراحة الجيوب بالمنظار لـ ١٢٠ زميلاً إقليمياً.",
    },
    flag: "🇸🇦",
  },
  {
    id: "c6",
    name: {
      en: "German ENT Society (HNO) Congress",
      ar: "مؤتمر الجمعية الألمانية للأنف والأذن والحنجرة",
    },
    organizer: {
      en: "German Society of Oto-Rhino-Laryngology",
      ar: "الجمعية الألمانية لطب الأنف والأذن والحنجرة",
    },
    city: { en: "Berlin", ar: "برلين" },
    country: { en: "Germany", ar: "ألمانيا" },
    year: 2023,
    month: { en: "May", ar: "مايو" },
    role: "invited-speaker",
    topic: {
      en: "Snoring & Obstructive Sleep Apnea: Surgical Treatment Algorithms",
      ar: "الشخير وانقطاع النفس الانسدادي: خوارزميات العلاج الجراحي",
    },
    description: {
      en: "Presented evidence-based surgical pathways for OSAS — from nasal valve correction to multilevel pharyngeal procedures.",
      ar: "عرض مسارات جراحية مبنية على الأدلة لانقطاع النفس — من تصحيح صمام الأنف إلى إجراءات البلعوم متعددة المستويات.",
    },
    flag: "🇩🇪",
  },
  {
    id: "c7",
    name: {
      en: "Asia Pacific ORL-HNS Federation Congress",
      ar: "مؤتمر اتحاد جراحات الأنف والأذن والحنجرة لآسيا والمحيط الهادئ",
    },
    organizer: {
      en: "Asia Pacific ORL-HNS Federation",
      ar: "اتحاد جراحات الأنف والأذن والحنجرة لآسيا والمحيط الهادئ",
    },
    city: { en: "Seoul", ar: "سيول" },
    country: { en: "South Korea", ar: "كوريا الجنوبية" },
    year: 2023,
    month: { en: "September", ar: "سبتمبر" },
    role: "invited-speaker",
    topic: {
      en: "Tympanoplasty & Middle Ear Reconstruction Outcomes",
      ar: "نتائج ترقيع الطبلة وإعادة بناء الأذن الوسطى",
    },
    description: {
      en: "International lecture on graft selection, ossicular chain reconstruction, and hearing outcomes in chronic otitis media.",
      ar: "محاضرة دولية حول اختيار الطعم وإعادة بناء سلسلة العظيمات ونتائج السمع في التهاب الأذن الوسطى المزمن.",
    },
    flag: "🇰🇷",
  },
  {
    id: "c8",
    name: {
      en: "International Symposium on Rhinoplasty",
      ar: "الندوة الدولية لتجميل الأنف",
    },
    organizer: {
      en: "International Rhinoplasty Society",
      ar: "الجمعية الدولية لتجميل الأنف",
    },
    city: { en: "Istanbul", ar: "إسطنبول" },
    country: { en: "Turkey", ar: "تركيا" },
    year: 2022,
    month: { en: "December", ar: "ديسمبر" },
    role: "keynote",
    topic: {
      en: "Nasal Tip Refinement: Cartilage Sparing Techniques",
      ar: "تحسين طرف الأنف: تقنيات حفظ الغضروف",
    },
    description: {
      en: "Keynote on preserving nasal structure while achieving aesthetic refinement — live case discussion with 500+ surgeons.",
      ar: "محاضرة رئيسية حول الحفاظ على بنية الأنف مع تحقيق تحسين جمالي — نقاش حالات مباشر مع أكثر من ٥٠٠ جراح.",
    },
    flag: "🇹🇷",
  },
  {
    id: "c9",
    name: {
      en: "Egyptian ORL Society Annual Congress",
      ar: "المؤتمر السنوي للجمعية المصرية للأنف والأذن والحنجرة",
    },
    organizer: {
      en: "Egyptian Society of Oto-Rhino-Laryngology",
      ar: "الجمعية المصرية لطب الأنف والأذن والحنجرة",
    },
    city: { en: "Alexandria", ar: "الإسكندرية" },
    country: { en: "Egypt", ar: "مصر" },
    year: 2024,
    month: { en: "July", ar: "يوليو" },
    role: "keynote",
    topic: {
      en: "Building ENT Surgical Excellence in Egypt: Training & Outcomes",
      ar: "بناء التميز الجراحي في الأنف والأذن بمصر: التدريب والنتائج",
    },
    description: {
      en: "National keynote on advancing ENT subspecialty training, surgical volume benchmarks, and patient safety standards across Egypt.",
      ar: "محاضرة وطنية حول تطوير التدريج الجراحي في التخصصات الفرعية ومعايير حجم العمليات وسلامة المرضى في مصر.",
    },
    flag: "🇪🇬",
  },
  {
    id: "c10",
    name: {
      en: "Mediterranean ENT Forum",
      ar: "منتدى البحر الأبيض المتوسط للأنف والأذن والحنجرة",
    },
    organizer: {
      en: "Mediterranean ORL Association",
      ar: "جمعية البحر الأبيض المتوسط للأنف والأذن والحنجرة",
    },
    city: { en: "Athens", ar: "أثينا" },
    country: { en: "Greece", ar: "اليونان" },
    year: 2023,
    month: { en: "April", ar: "أبريل" },
    role: "panelist",
    topic: {
      en: "Chronic Rhinosinusitis: Medical vs Surgical Management",
      ar: "التهاب الجيوب المزمن: العلاج الدوائي مقابل الجراحي",
    },
    description: {
      en: "Expert panel debating treatment algorithms, biologics eligibility, and when to refer for endoscopic sinus surgery.",
      ar: "جلسة نقاش بين خبراء حول خوارزميات العلاج وأهلية العلاجات البيولوجية ومتى يُحال المريض لجراحة الجيوب بالمنظار.",
    },
    flag: "🇬🇷",
  },
];
