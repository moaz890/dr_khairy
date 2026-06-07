// Career and education timeline — ENT / academic milestones

export interface TimelineItem {
  id: string;
  year: string;
  title: { en: string; ar: string };
  institution: { en: string; ar: string };
  location: { en: string; ar: string };
  type: "education" | "position" | "certification" | "achievement";
  description: { en: string; ar: string };
}

export const timelineItems: TimelineItem[] = [
  {
    id: "t1",
    year: "1995",
    title: { en: "M.B., B.Ch. — Medicine & Surgery", ar: "بكالوريوس الطب والجراحة" },
    institution: { en: "Cairo University, Faculty of Medicine", ar: "جامعة القاهرة، كلية الطب" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "education",
    description: {
      en: "Graduated with honours from Cairo University's Faculty of Medicine, laying the foundation for a career in otolaryngology.",
      ar: "تخرج بامتياز من كلية الطب جامعة القاهرة، ممهداً لمسيرة مهنية في طب الأنف والأذن والحنجرة.",
    },
  },
  {
    id: "t2",
    year: "2000",
    title: { en: "ENT Residency — Otolaryngology", ar: "زمالة الأنف والأذن والحنجرة" },
    institution: { en: "Cairo University ENT Department", ar: "قسم الأنف والأذن والحنجرة — جامعة القاهرة" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "education",
    description: {
      en: "Completed comprehensive ENT residency training covering head and neck surgery, sinus endoscopy, and otologic procedures.",
      ar: "أتم زمالة شاملة في الأنف والأذن والحنجرة تشمل جراحة الرأس والعنق ومناظير الجيوب الأنفية وإجراءات الأذن.",
    },
  },
  {
    id: "t3",
    year: "2004",
    title: { en: "Fellowship in Rhinoplasty & Facial Plastic Surgery", ar: "زمالة تجميل الأنف والجراحة التجميلية للوجه" },
    institution: { en: "European Rhinoplasty Institute, Munich", ar: "المعهد الأوروبي لتجميل الأنف، ميونخ" },
    location: { en: "Munich, Germany", ar: "ميونخ، ألمانيا" },
    type: "education",
    description: {
      en: "Advanced subspecialty training in open and closed rhinoplasty techniques, nasal reconstruction, and aesthetic-functional nasal surgery.",
      ar: "تدريب متقدم في تقنيات تجميل الأنف المفتوح والمغلق وإعادة بناء الأنف والجراحة الأنفية الجمالية الوظيفية.",
    },
  },
  {
    id: "t4",
    year: "2006",
    title: { en: "Assistant Lecturer — ENT Surgery", ar: "مدرس مساعد — جراحة الأنف والأذن والحنجرة" },
    institution: { en: "Cairo University, Faculty of Medicine", ar: "كلية الطب — جامعة القاهرة" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "position",
    description: {
      en: "Joined the academic faculty, teaching ENT residents and establishing an endoscopic sinus surgery training programme.",
      ar: "انضم إلى هيئة التدريس الأكاديمية، ودرّس زملاء الأنف والأذن والحنجرة وأنشأ برنامجاً لتدريب مناظير الجيوب الأنفية.",
    },
  },
  {
    id: "t5",
    year: "2010",
    title: { en: "Consultant ENT Surgeon Certification", ar: "شهادة استشاري جراحة الأنف والأذن والحنجرة" },
    institution: { en: "Egyptian Medical Syndicate", ar: "نقابة الأطباء المصريين" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "certification",
    description: {
      en: "Awarded consultant certification after demonstrating excellence in complex ENT and rhinoplasty surgical outcomes.",
      ar: "حصل على شهادة الاستشارية بعد إثبات التميز في نتائج جراحات الأنف والأذن والحنجرة وتجميل الأنف المعقدة.",
    },
  },
  {
    id: "t6",
    year: "2013",
    title: { en: "Associate Professor of ENT Surgery", ar: "أستاذ مشارك جراحة الأنف والأذن والحنجرة" },
    institution: { en: "Cairo University, Faculty of Medicine", ar: "كلية الطب — جامعة القاهرة" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "position",
    description: {
      en: "Promoted to associate professor, leading the rhinoplasty and endoscopic sinus surgery clinical unit.",
      ar: "ترقى إلى أستاذ مشارك، ورأس وحدة تجميل الأنف وجراحة الجيوب الأنفية بالمنظار السريرية.",
    },
  },
  {
    id: "t7",
    year: "2016",
    title: { en: "Member — Egyptian ENT Society", ar: "عضو — الجمعية المصرية للأنف والأذن والحنجرة" },
    institution: { en: "Egyptian Society of Otolaryngology", ar: "الجمعية المصرية للأنف والأذن والحنجرة" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "certification",
    description: {
      en: "Active member contributing to national ENT clinical guidelines and continuing medical education programmes.",
      ar: "عضو نشط يساهم في الإرشادات السريرية الوطنية لطب الأنف والأذن وبرامج التعليم الطبي المستمر.",
    },
  },
  {
    id: "t8",
    year: "2019",
    title: { en: "Full Professor of Medicine & ENT Surgery", ar: "أستاذ كامل الطب وجراحة الأنف والأذن والحنجرة" },
    institution: { en: "Cairo University, Faculty of Medicine", ar: "كلية الطب — جامعة القاهرة" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "position",
    description: {
      en: "Promoted to full professor — one of the youngest ENT professors at Cairo University. Chairs advanced surgical training.",
      ar: "ترقى إلى أستاذ كامل — من أصغر أساتذة الأنف والأذن والحنجرة في جامعة القاهرة. يشرف على التدريب الجراحي المتقدم.",
    },
  },
  {
    id: "t9",
    year: "2021",
    title: { en: "Excellence in ENT Surgery Award", ar: "جائزة التميز في جراحة الأنف والأذن والحنجرة" },
    institution: { en: "Arab League Medical Council", ar: "المجلس الطبي لجامعة الدول العربية" },
    location: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    type: "achievement",
    description: {
      en: "Recognised for outstanding contributions to rhinoplasty education and endoscopic sinus surgery innovation in the Arab region.",
      ar: "تكريم لمساهماته البارزة في تعليم تجميل الأنف وابتكار جراحة الجيوب الأنفية بالمنظار في المنطقة العربية.",
    },
  },
  {
    id: "t10",
    year: "2024",
    title: { en: "Advanced FESS Workshop — Faculty Lead", ar: "ورشة FESS المتقدمة — قائد هيئة التدريس" },
    institution: { en: "Gulf ENT Conference, Dubai", ar: "مؤتمر الخليج للأنف والأذن والحنجرة، دبي" },
    location: { en: "Dubai, UAE", ar: "دبي، الإمارات" },
    type: "achievement",
    description: {
      en: "Led an international hands-on workshop on functional endoscopic sinus surgery, training surgeons from across the MENA region.",
      ar: "قاد ورشة عمل دولية عملية حول جراحة الجيوب الأنفية الوظيفية بالمنظار، ودرب جراحين من منطقة الشرق الأوسط وشمال أفريقيا.",
    },
  },
];
