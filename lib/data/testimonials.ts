// Testimonials — ENT patient stories (bilingual EN / AR)

type T = { en: string; ar: string };

export interface Testimonial {
  id: string;
  name: string;
  location: T;
  year: string;
  type: "text" | "video" | "audio";
  rating: number;
  quote: T;
  outcome?: T;
  conditions?: T[];
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "A. Mahmoud",
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    year: "2024",
    type: "video",
    rating: 5,
    quote: {
      en: "I suffered chronic nasal blockage for years. After FESS with Prof. Khairy, I can breathe freely for the first time.",
      ar: "عانيت من انسداد أنفي مزمن لسنوات. بعد جراحة الجيوب الأنفية بالمنظار مع الأستاذ الدكتور خيري، أتنفس بحرية لأول مرة.",
    },
    outcome: {
      en: "Significant improvement in nasal airflow. No recurrence at 12-month follow-up.",
      ar: "تحسن ملحوظ في تدفق الهواء الأنفي. لا انتكاسة في المتابعة بعد ١٢ شهراً.",
    },
    conditions: [
      { en: "Chronic Sinusitis", ar: "التهاب الجيوب الأنفية المزمن" },
      { en: "FESS", ar: "جراحة الجيوب بالمنظار" },
    ],
  },
  {
    id: "t2",
    name: "S. Hassan",
    location: { en: "Alexandria, Egypt", ar: "الإسكندرية، مصر" },
    year: "2024",
    type: "text",
    rating: 5,
    quote: {
      en: "My rhinoplasty result looks completely natural — no one can tell I had surgery. Prof. Khairy is a true artist.",
      ar: "نتيجة تجميل الأنف طبيعية تماماً ولا أحد يشعر أنني أجريت عملية. الأستاذ الدكتور خيري فنان حقيقي.",
    },
    outcome: {
      en: "Natural aesthetic result with improved breathing. Full recovery at 3 months.",
      ar: "نتيجة جمالية طبيعية مع تحسن التنفس. تعافٍ كامل خلال ٣ أشهر.",
    },
    conditions: [
      { en: "Rhinoplasty", ar: "تجميل الأنف" },
      { en: "Deviated Septum", ar: "انحراف الحاجز الأنفي" },
    ],
  },
  {
    id: "t3",
    name: "K. Al-Rashid",
    location: { en: "Zagazig, Egypt", ar: "الزقازيق، مصر" },
    year: "2023",
    type: "text",
    rating: 5,
    quote: {
      en: "He performed ventilation tubes for my son with skill and patience. Hearing improved noticeably and follow-up was excellent.",
      ar: "أجرى لابني أنابيب تهوية بمهارة وصبر. السمع تحسن بشكل ملحوظ والمتابعة كانت ممتازة.",
    },
    outcome: {
      en: "Hearing improved within 6 weeks. Tubes extruded naturally at 14 months.",
      ar: "تحسن السمع خلال ٦ أسابيع. خرجت الأنابيب طبيعياً بعد ١٤ شهراً.",
    },
    conditions: [
      { en: "Glue Ear", ar: "التهاب الأذن الوسطى بالسوائل" },
      { en: "Ventilation Tubes", ar: "أنابيب التهوية" },
    ],
  },
  {
    id: "t4",
    name: "N. Ibrahim",
    location: { en: "New Cairo, Egypt", ar: "التجمع الخامس، مصر" },
    year: "2024",
    type: "audio",
    rating: 5,
    quote: {
      en: "My snoring kept my family awake for years. After Prof. Khairy's treatment, everyone sleeps peacefully now.",
      ar: "شخيري كان يمنع عائلتي من النوم لسنوات. بعد علاج الأستاذ الدكتور خيري، الجميع ينام بسلام الآن.",
    },
    outcome: {
      en: "Snoring resolved. Sleep quality significantly improved at 2-month follow-up.",
      ar: "اختفى الشخير. تحسن جودة النوم بشكل كبير في المتابعة بعد شهرين.",
    },
    conditions: [
      { en: "Snoring / OSAS", ar: "الشخير / انقطاع النفس" },
    ],
  },
  {
    id: "t5",
    name: "M. Youssef",
    location: { en: "Giza, Egypt", ar: "الجيزة، مصر" },
    year: "2023",
    type: "text",
    rating: 5,
    quote: {
      en: "After years of recurrent tonsillitis, my daughter finally had her tonsils removed. The procedure was smooth and recovery was faster than we expected.",
      ar: "بعد سنوات من التهاب اللوز المتكرر، أُزيلت لوز ابنتي أخيراً. الإجراء كان سلساً والتعافي أسرع مما توقعنا.",
    },
    conditions: [
      { en: "Recurrent Tonsillitis", ar: "التهاب اللوز المتكرر" },
      { en: "Tonsillectomy", ar: "استئصال اللوز" },
    ],
  },
  {
    id: "t6",
    name: "F. Andersen",
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    year: "2023",
    type: "video",
    rating: 5,
    quote: {
      en: "I travelled from Dubai specifically for Prof. Khairy's expertise in endoscopic sinus surgery. His precision and care exceeded every expectation.",
      ar: "سافرت من دبي خصيصاً لخبرة الأستاذ الدكتور خيري في جراحة الجيوب بالمنظار. دقته واهتمامه فاقا كل توقع.",
    },
    outcome: {
      en: "Complete symptom relief. Returned to normal activities within 10 days.",
      ar: "اختفاء كامل للأعراض. عودة للأنشطة الطبيعية خلال ١٠ أيام.",
    },
    conditions: [
      { en: "Nasal Polyps", ar: "اللحمية الأنفية" },
      { en: "FESS", ar: "جراحة الجيوب بالمنظار" },
    ],
  },
];
