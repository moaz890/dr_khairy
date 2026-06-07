// Workshop and upcoming events — ENT specialty (bilingual EN / AR)

type T = { en: string; ar: string };

export interface WorkshopSpeaker {
  name: T;
  title: T;
  country: T;
}

export interface AgendaItem {
  time: string;
  title: T;
  speaker: T;
  duration: T;
}

export interface Workshop {
  id: string;
  title: T;
  subtitle: T;
  date: string;
  displayDate: T;
  location: T;
  format: "in-person" | "hybrid" | "online";
  registrationDeadline: T;
  capacity: number;
  registeredCount: number;
  cme: number;
  fee: T;
  description: T;
  speakers: WorkshopSpeaker[];
  agenda: AgendaItem[];
  topics: T[];
}

export const upcomingWorkshop: Workshop = {
  id: "ws1",
  title: {
    en: "Advanced ENT Surgical Master Class 2026",
    ar: "الفصل الرئيسي المتقدم لجراحة الأنف والأذن والحنجرة ٢٠٢٦",
  },
  subtitle: {
    en: "Rhinoplasty, FESS & Pediatric ENT — From Theory to Operating Room",
    ar: "تجميل الأنف وجراحة الجيوب بالمنظار وأنف وأذن الأطفال — من النظرية إلى غرفة العمليات",
  },
  date: "2026-09-20T09:00:00+03:00",
  displayDate: {
    en: "September 20–22, 2026",
    ar: "٢٠–٢٢ سبتمبر ٢٠٢٦",
  },
  location: {
    en: "Cairo Marriott Hotel, Cairo, Egypt",
    ar: "فندق ماريوت القاهرة، القاهرة، مصر",
  },
  format: "hybrid",
  registrationDeadline: {
    en: "September 1, 2026",
    ar: "١ سبتمبر ٢٠٢٦",
  },
  capacity: 300,
  registeredCount: 187,
  cme: 18,
  fee: {
    en: "USD 350 (In-Person) | USD 150 (Online)",
    ar: "٣٥٠ دولار (حضوري) | ١٥٠ دولار (عبر الإنترنت)",
  },
  description: {
    en: "A three-day intensive master class for ENT surgeons, rhinoplasty specialists, and residents seeking advanced training in endoscopic sinus surgery, nasal reconstruction, and pediatric ENT procedures. Featuring live case discussions and hands-on surgical simulation.",
    ar: "فصل رئيسي مكثف لمدة ثلاثة أيام لجراحي الأنف والأذن والحنجرة ومتخصصي تجميل الأنف والزملاء، يقدم تدريباً متقدماً في جراحة الجيوب بالمنظار وإعادة بناء الأنف وإجراءات الأطفال. يتضمن مناقشات حالات مباشرة ومحاكاة جراحية عملية.",
  },
  speakers: [
    {
      name: { en: "Prof. Dr. Mohammed Rabea Khairy", ar: "أ.د. محمد ربيع خيري" },
      title: { en: "Professor of ENT Surgery, Cairo University", ar: "أستاذ جراحة الأنف والأذن والحنجرة، جامعة القاهرة" },
      country: { en: "Egypt", ar: "مصر" },
    },
    {
      name: { en: "Prof. Thomas Berg", ar: "البروفيسور توماس بيرغ" },
      title: { en: "Director, European Rhinoplasty Society", ar: "مدير الجمعية الأوروبية لتجميل الأنف" },
      country: { en: "Germany", ar: "ألمانيا" },
    },
    {
      name: { en: "Prof. Massimo Pinzani", ar: "البروفيسور ماسيمو بينزاني" },
      title: { en: "Professor of Otolaryngology, UCL", ar: "أستاذ الأنف والأذن والحنجرة، جامعة لندن" },
      country: { en: "United Kingdom", ar: "المملكة المتحدة" },
    },
    {
      name: { en: "Dr. Imam Waked", ar: "د. إمام واكد" },
      title: { en: "Consultant Pediatric ENT, Cairo University", ar: "استشاري أنف وأذن وحنجرة الأطفال، جامعة القاهرة" },
      country: { en: "Egypt", ar: "مصر" },
    },
  ],
  agenda: [
    {
      time: "09:00",
      title: { en: "Opening Ceremony & Welcome Address", ar: "حفل الافتتاح وكلمة الترحيب" },
      speaker: { en: "Prof. Dr. Mohammed Rabea Khairy", ar: "أ.د. محمد ربيع خيري" },
      duration: { en: "30 min", ar: "٣٠ دقيقة" },
    },
    {
      time: "09:30",
      title: { en: "FESS in 2026: Navigation & Outcomes", ar: "جراحة الجيوب بالمنظار ٢٠٢٦: الملاحة والنتائج" },
      speaker: { en: "Prof. Thomas Berg", ar: "البروفيسور توماس بيرغ" },
      duration: { en: "45 min", ar: "٤٥ دقيقة" },
    },
    {
      time: "10:15",
      title: { en: "Rhinoplasty: Primary vs Revision Cases", ar: "تجميل الأنف: الحالات الأولية مقابل التصحيحية" },
      speaker: { en: "Dr. Imam Waked", ar: "د. إمام واكد" },
      duration: { en: "40 min", ar: "٤٠ دقيقة" },
    },
    {
      time: "11:00",
      title: { en: "Coffee Break & Networking", ar: "استراحة قهوة وتواصل" },
      speaker: { en: "", ar: "" },
      duration: { en: "30 min", ar: "٣٠ دقيقة" },
    },
    {
      time: "11:30",
      title: { en: "Snoring & OSAS: Surgical Algorithms", ar: "الشخير وانقطاع النفس: خوارزميات جراحية" },
      speaker: { en: "Prof. Dr. Mohammed Rabea Khairy", ar: "أ.د. محمد ربيع خيري" },
      duration: { en: "50 min", ar: "٥٠ دقيقة" },
    },
    {
      time: "12:20",
      title: { en: "Pediatric ENT: Tonsils, Adenoids & Tubes", ar: "أنف وأذن الأطفال: اللوز واللحمية والأنابيب" },
      speaker: { en: "Prof. Massimo Pinzani", ar: "البروفيسور ماسيمو بينزاني" },
      duration: { en: "45 min", ar: "٤٥ دقيقة" },
    },
    {
      time: "13:05",
      title: { en: "Lunch & Live Case Presentations", ar: "غداء وعرض حالات مباشرة" },
      speaker: { en: "All Faculty", ar: "جميع أعضاء هيئة التدريس" },
      duration: { en: "75 min", ar: "٧٥ دقيقة" },
    },
    {
      time: "14:20",
      title: { en: "Hands-On FESS Simulation (Group A)", ar: "محاكاة عملية لجراحة الجيوب بالمنظار (المجموعة أ)" },
      speaker: { en: "Faculty", ar: "هيئة التدريس" },
      duration: { en: "90 min", ar: "٩٠ دقيقة" },
    },
    {
      time: "15:50",
      title: { en: "Nasal Tip Refinement Masterclass", ar: "فصل رئيسي لتحسين طرف الأنف" },
      speaker: { en: "Prof. Thomas Berg", ar: "البروفيسور توماس بيرغ" },
      duration: { en: "60 min", ar: "٦٠ دقيقة" },
    },
    {
      time: "17:00",
      title: { en: "Panel Q&A & Day 1 Close", ar: "جلسة أسئلة وأجوبة وختام اليوم الأول" },
      speaker: { en: "All Faculty", ar: "جميع أعضاء هيئة التدريس" },
      duration: { en: "45 min", ar: "٤٥ دقيقة" },
    },
  ],
  topics: [
    { en: "Endoscopic Sinus Surgery (FESS) Techniques", ar: "تقنيات جراحة الجيوب الأنفية بالمنظار" },
    { en: "Open & Closed Rhinoplasty", ar: "تجميل الأنف المفتوح والمغلق" },
    { en: "Septoplasty & Nasal Valve Correction", ar: "تصحيح الحاجز الأنفي وصمام الأنف" },
    { en: "Snoring & Obstructive Sleep Apnea Surgery", ar: "جراحة الشخير وانقطاع النفس الانسدادي" },
    { en: "Pediatric Tonsillectomy & Adenoidectomy", ar: "استئصال اللوز واللحمية عند الأطفال" },
    { en: "Tympanoplasty & Ventilation Tubes", ar: "ترقيع الطبلة وأنابيب التهوية" },
    { en: "Nasal Polyps & Chronic Rhinosinusitis", ar: "اللحمية الأنفية والتهاب الجيوب المزمن" },
    { en: "Surgical Navigation in ENT", ar: "الملاحة الجراحية في الأنف والأذن والحنجرة" },
  ],
};
