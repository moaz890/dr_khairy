import type { PageSeoConfig } from "./types";

const serviceTitle = (nameAr: string, nameEn: string) => ({
  ar: `${nameAr} | د. محمد ربيع خيري — استشاري أنف وأذن وحنجرة`,
  en: `${nameEn} | Dr. Mohammed Rabea Khairy — ENT Specialist`,
});

export const seoPages = {
  home: {
    path: "/",
    title: {
      ar: "د. محمد ربيع خيري | استشاري الأنف والأذن والحنجرة وتجميل الأنف",
      en: "Prof. Dr. Mohammed Rabea Khairy | ENT & Rhinoplasty Specialist",
    },
    description: {
      ar: "أستاذ كلية الطب، استشاري أنف وأذن وحنجرة، متخصص في تجميل الأنف الوظيفي ومناظير الجيوب الأنفية. عيادات التجمع الخامس والزقازيق.",
      en: "Professor of Medicine, ENT consultant and rhinoplasty specialist. Functional rhinoplasty and endoscopic sinus surgery. Clinics in New Cairo and Zagazig.",
    },
    keywords: {
      ar: ["دكتور أنف وأذن وحنجرة مصر", "تجميل الأنف", "دكتور ربيع خيري"],
      en: ["ENT specialist Egypt", "Rhinoplasty Egypt", "Dr Mohammed Rabea Khairy"],
    },
    priority: 1.0,
    changeFrequency: "weekly",
  },
  about: {
    path: "/about",
    title: {
      ar: "من نحن | د. محمد ربيع خيري — أستاذ جراحة الأنف والأذن",
      en: "About Dr. Mohammed Rabea Khairy | ENT Professor & Surgeon",
    },
    description: {
      ar: "تعرف على أ.د. محمد ربيع خيري، أستاذ جراحة الأنف والأذن والحنجرة بجامعة القاهرة، متخصص في تجميل الأنف الوظيفي وجراحات الجيوب الأنفية.",
      en: "Meet Prof. Dr. Mohammed Rabea Khairy — Cairo University ENT professor, rhinoplasty and endoscopic sinus surgery specialist with clinics in New Cairo and Zagazig.",
    },
    keywords: {
      ar: ["دكتور ربيع خيري", "أستاذ أنف وأذن", "جراحة الأنف والأذن"],
      en: ["Prof Dr Mohammed Rabea Khairy", "ENT professor Cairo", "rhinoplasty specialist"],
    },
    priority: 1.0,
    changeFrequency: "monthly",
  },
  services: {
    path: "/services",
    title: {
      ar: "خدمات الأنف والأذن والحنجرة | د. محمد ربيع خيري",
      en: "ENT Services | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "خدمات متكاملة في تجميل الأنف الوظيفي، الحاجز الأنفي، الجيوب الأنفية، الأذن، الحنجرة، واضطرابات النوم. استشارة مع أ.د. محمد ربيع خيري.",
      en: "Comprehensive ENT services: functional rhinoplasty, septoplasty, sinus surgery, ear and throat conditions, and sleep-disordered breathing. Consult Prof. Dr. Khairy.",
    },
    keywords: {
      ar: ["خدمات الأنف والأذن والحنجرة", "تجميل الأنف", "عملية الحاجز الأنفي"],
      en: ["ENT services Egypt", "rhinoplasty", "septoplasty"],
    },
    priority: 1.0,
    changeFrequency: "weekly",
  },
  blog: {
    path: "/blog",
    title: {
      ar: "المدونة الطبية | مقالات أنف وأذن وحنجرة — د. محمد ربيع خيري",
      en: "Medical Blog | ENT Articles — Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "مقالات طبية موثوقة عن تجميل الأنف، انحراف الحاجز، الجيوب الأنفية، وأمراض الأذن والحنجرة — بقلم أ.د. محمد ربيع خيري.",
      en: "Trusted medical articles on rhinoplasty, deviated septum, sinus conditions, and ear & throat disorders by Prof. Dr. Mohammed Rabea Khairy.",
    },
    keywords: {
      ar: ["مقالات طبية أنف أذن حنجرة", "تجميل الأنف", "انحراف الحاجز الأنفي"],
      en: ["ENT medical blog", "rhinoplasty articles", "deviated septum"],
    },
    priority: 0.8,
    changeFrequency: "weekly",
  },
  beforeAfter: {
    path: "/before-after",
    title: {
      ar: "نتائج تجميل الأنف قبل وبعد | د. محمد ربيع خيري",
      en: "Rhinoplasty Before & After Results | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "شاهد نتائج حقيقية لتجميل الأنف الوظيفي والتجميلي قبل وبعد العملية مع أ.د. محمد ربيع خيري — نتائج طبيعية مع الحفاظ على التنفس.",
      en: "View real before and after results for functional and cosmetic rhinoplasty with Prof. Dr. Khairy — natural outcomes with preserved breathing function.",
    },
    keywords: {
      ar: ["نتائج تجميل الأنف قبل وبعد", "تجميل الأنف الوظيفي", "نتائج عملية الأنف"],
      en: ["rhinoplasty before after", "nose job results Egypt", "functional rhinoplasty results"],
    },
    priority: 0.8,
    changeFrequency: "monthly",
  },
  testimonials: {
    path: "/testimonials",
    title: {
      ar: "آراء المرضى | د. محمد ربيع خيري — استشاري أنف وأذن وحنجرة",
      en: "Patient Testimonials | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "اقرأ تجارب وآراء مرضى د. ربيع خيري في تجميل الأنف، جراحة الجيوب الأنفية، وعلاج اضطرابات الأنف والأذن والحنجرة.",
      en: "Read patient experiences and reviews for rhinoplasty, sinus surgery, and ENT treatments with Prof. Dr. Mohammed Rabea Khairy.",
    },
    keywords: {
      ar: ["آراء مرضى دكتور ربيع خيري", "تجارب تجميل الأنف"],
      en: ["Dr Khairy patient reviews", "rhinoplasty testimonials Egypt"],
    },
    priority: 0.6,
    changeFrequency: "monthly",
  },
  videos: {
    path: "/videos",
    title: {
      ar: "فيديوهات طبية | أنف وأذن وحنجرة — د. محمد ربيع خيري",
      en: "Medical Videos | ENT Education — Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "فيديوهات تعليمية وتوعوية عن تجميل الأنف، الجيوب الأنفية، واضطرابات الأنف والأذن والحنجرة — بإشراف أ.د. محمد ربيع خيري.",
      en: "Educational videos on rhinoplasty, sinus surgery, and ENT conditions by Prof. Dr. Mohammed Rabea Khairy.",
    },
    keywords: {
      ar: ["فيديوهات طبية أنف وأذن", "تجميل الأنف"],
      en: ["ENT medical videos", "rhinoplasty videos"],
    },
    priority: 0.6,
    changeFrequency: "monthly",
  },
  clinics: {
    path: "/clinics",
    title: {
      ar: "العيادات | د. محمد ربيع خيري — التجمع الخامس والزقازيق",
      en: "Clinic Locations | Dr. Mohammed Rabea Khairy — New Cairo & Zagazig",
    },
    description: {
      ar: "عيادات د. ربيع خيري في التجمع الخامس (بجوار مستشفى الشفا) والزقازيق (ميدان الصاغة). حجز مواعيد على واتساب 01124427427.",
      en: "Dr. Khairy's clinics in 5th Settlement, New Cairo and Zagazig. Book appointments via WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["عيادة أنف وأذن وحنجرة", "دكتور أنف وأذن التجمع الخامس", "دكتور أنف وأذن الزقازيق"],
      en: ["ENT clinic Cairo", "ENT clinic Zagazig", "rhinoplasty clinic Egypt"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  contact: {
    path: "/contact",
    title: {
      ar: "اتصل بنا | حجز موعد د. محمد ربيع خيري",
      en: "Contact & Book Appointment | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "احجز موعدك مع أ.د. محمد ربيع خيري عبر واتساب أو الهاتف. عيادات في التجمع الخامس والزقازيق — 01124427427.",
      en: "Book your appointment with Prof. Dr. Mohammed Rabea Khairy via WhatsApp or phone. Clinics in New Cairo and Zagazig — 01124427427.",
    },
    keywords: {
      ar: ["حجز موعد دكتور ربيع خيري", "حجز تجميل الأنف"],
      en: ["book ENT appointment Egypt", "rhinoplasty consultation Cairo"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  conferences: {
    path: "/conferences",
    title: {
      ar: "المؤتمرات والفعاليات الطبية | د. محمد ربيع خيري",
      en: "Medical Conferences & Events | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "مشاركات أ.د. محمد ربيع خيري في المؤتمرات والندوات الطبية المحلية والدولية في جراحة الأنف والأذن والحنجرة.",
      en: "Prof. Dr. Mohammed Rabea Khairy's participation in local and international ENT medical conferences and workshops.",
    },
    keywords: {
      ar: ["مؤتمرات طبية أذن أنف حنجرة"],
      en: ["ENT medical conferences", "rhinoplasty symposium"],
    },
    priority: 0.5,
    changeFrequency: "monthly",
  },
  workshop: {
    path: "/workshop",
    title: {
      ar: "ورشة عمل | د. محمد ربيع خيري",
      en: "Workshop | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "ورش عمل ودورات تدريبية في جراحة الأنف والأذن والحنجرة.",
      en: "ENT surgical workshops and training courses.",
    },
    priority: 0.3,
    changeFrequency: "yearly",
    noIndex: true,
  },
  // ── Service pages ──
  "services/rhinoplasty": {
    path: "/services/rhinoplasty",
    title: serviceTitle("عملية تجميل الأنف في مصر", "Rhinoplasty in Egypt"),
    description: {
      ar: "تجميل الأنف في مصر مع أ.د. محمد ربيع خيري — نتائج طبيعية متناسقة مع ملامح الوجه مع الحفاظ على وظيفة التنفس.",
      en: "Rhinoplasty in Egypt with Prof. Dr. Khairy — natural, proportionate results while preserving nasal breathing function.",
    },
    keywords: {
      ar: ["تجميل الأنف", "عملية الأنف", "تجميل الأنف في مصر"],
      en: ["rhinoplasty Egypt", "nose surgery", "rhinoplasty doctor Cairo"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/functional-rhinoplasty": {
    path: "/services/functional-rhinoplasty",
    title: serviceTitle("تجميل الأنف الوظيفي", "Functional Rhinoplasty"),
    description: {
      ar: "تجميل الأنف الوظيفي — جمال التنفس معاً. تحسين شكل الأنف مع استعدال الحاجز وضمان التنفس السليم.",
      en: "Functional rhinoplasty — beauty and breathing together. Improve nose appearance while correcting septal deviation and ensuring proper airflow.",
    },
    keywords: {
      ar: ["تجميل الأنف الوظيفي", "استعدال حاجز انفي", "تجميل الأنف والتنفس"],
      en: ["functional rhinoplasty", "septal correction rhinoplasty", "breathing rhinoplasty"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/revision-rhinoplasty": {
    path: "/services/revision-rhinoplasty",
    title: serviceTitle("تصحيح عملية تجميل الأنف", "Revision Rhinoplasty"),
    description: {
      ar: "تصحيح عملية تجميل الأنف السابقة مع متخصص في إصلاح العمليات الفاشلة — نتائج طبيعية واستعادة وظيفة التنفس.",
      en: "Revision rhinoplasty to correct previous nose surgery — specialist in fixing failed procedures with natural results and restored breathing.",
    },
    keywords: {
      ar: ["تصحيح تجميل الأنف", "تجميل الأنف بعد عملية فاشلة", "إصلاح عملية أنف سابقة"],
      en: ["revision rhinoplasty", "failed nose job correction", "secondary rhinoplasty Egypt"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/septoplasty": {
    path: "/services/septoplasty",
    title: serviceTitle("عملية الحاجز الأنفي المنحرف", "Septoplasty — Deviated Septum"),
    description: {
      ar: "عملية استعدال الحاجز الأنفي المنحرف لعلاج انسداد الأنف وصعوبة التنفس. تقييم شامل وجراحة دقيقة مع أ.د. ربيع خيري.",
      en: "Septoplasty for deviated nasal septum — treating nasal obstruction and breathing difficulty. Comprehensive evaluation and precise surgery.",
    },
    keywords: {
      ar: ["عملية الحاجز الأنفي", "انحراف الحاجز الأنفي", "استعدال الحاجز الأنفي"],
      en: ["septoplasty", "deviated nasal septum", "septal straightening"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/nasal-obstruction": {
    path: "/services/nasal-obstruction",
    title: serviceTitle("علاج انسداد الأنف المزمن", "Nasal Obstruction Treatment"),
    description: {
      ar: "علاج انسداد الأنف المزمن — تشخيص الأسباب (حاجز منحرف، تضخم حطم، حساسية) وخطة علاج جراحية أو دوائية.",
      en: "Chronic nasal obstruction treatment — diagnose causes (deviated septum, turbinate hypertrophy, allergy) and surgical or medical treatment plan.",
    },
    keywords: {
      ar: ["انسداد الأنف", "علاج انسداد الأنف", "صعوبة التنفس من الأنف"],
      en: ["nasal obstruction", "blocked nose treatment", "difficulty breathing through nose"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/nasal-polyps": {
    path: "/services/nasal-polyps",
    title: serviceTitle("إزالة الزوائد الأنفية", "Nasal Polyp Removal"),
    description: {
      ar: "إزالة الزوائد الأنفية بالمنظار — علاج انسداد الأنف المزمن، فقدان الشم، والتهاب الجيوب الناتج عن الزوائد.",
      en: "Endoscopic nasal polyp removal — treating chronic blockage, loss of smell, and sinus inflammation caused by polyps.",
    },
    keywords: {
      ar: ["زوائد أنفية", "إزالة الزوائد الأنفية", "علاج الزوائد الأنفية"],
      en: ["nasal polyps", "nasal polyp removal", "polyp surgery"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/sinus-surgery": {
    path: "/services/sinus-surgery",
    title: serviceTitle("عملية مناظير الجيوب الأنفية", "Sinus Endoscopy (FESS)"),
    description: {
      ar: "عملية مناظير الجيوب الأنفية (FESS) — جراحة دقيقة بالمنظار لعلاج التهاب الجيوب المزمن وانسداد المجاري الأنفية.",
      en: "Functional endoscopic sinus surgery (FESS) — minimally invasive treatment for chronic sinusitis and blocked sinus drainage.",
    },
    keywords: {
      ar: ["مناظير الجيوب الأنفية", "عملية الجيوب الأنفية", "FESS"],
      en: ["sinus endoscopy", "FESS surgery", "sinus surgery Egypt"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/sinusitis": {
    path: "/services/sinusitis",
    title: serviceTitle("علاج التهاب الجيوب الأنفية", "Sinusitis Treatment"),
    description: {
      ar: "علاج التهاب الجيوب الأنفية الحاد والمزمن — تشخيص دقيق، علاج دوائي، وجراحة منظارية عند الحاجة.",
      en: "Acute and chronic sinusitis treatment — accurate diagnosis, medical therapy, and endoscopic surgery when needed.",
    },
    keywords: {
      ar: ["التهاب الجيوب الأنفية", "علاج التهاب الجيوب الأنفية المزمن"],
      en: ["sinusitis treatment", "chronic sinusitis", "sinus infection"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/allergic-rhinitis": {
    path: "/services/allergic-rhinitis",
    title: serviceTitle("علاج حساسية الأنف", "Allergic Rhinitis Treatment"),
    description: {
      ar: "علاج حساسية الأنف (الرينيت التحسسي) — خطة علاج شاملة تشمل الأدوية، تجنب المحفزات، والتدخل الجراحي عند اللزوم.",
      en: "Allergic rhinitis treatment — comprehensive plan including medication, trigger avoidance, and surgical intervention when needed.",
    },
    keywords: {
      ar: ["حساسية الأنف", "علاج حساسية الأنف", "الرينيت التحسسي"],
      en: ["allergic rhinitis", "nasal allergy treatment", "hay fever nose"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/tinnitus": {
    path: "/services/tinnitus",
    title: serviceTitle("علاج طنين الأذن", "Tinnitus Treatment"),
    description: {
      ar: "علاج طنين الأذن — تشخيص الأسباب (أذن، أنف، أعصاب) وخطة علاج مخصصة مع أ.د. محمد ربيع خيري.",
      en: "Tinnitus treatment — diagnose underlying causes (ear, nose, nerve) and personalized treatment plan with Prof. Dr. Khairy.",
    },
    keywords: {
      ar: ["طنين الأذن", "علاج طنين الأذن", "أسباب طنين الأذن"],
      en: ["tinnitus treatment", "ringing in ears", "tinnitus causes"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/hearing-loss": {
    path: "/services/hearing-loss",
    title: serviceTitle("علاج ضعف السمع", "Hearing Loss Management"),
    description: {
      ar: "علاج ضعف السمع — تقييم شامل للأذن الوسطى والداخلية، علاج التهابات الأذن، وإدارة فقدان السمع المفاجئ.",
      en: "Hearing loss management — comprehensive ear evaluation, otitis treatment, and sudden hearing loss emergency care.",
    },
    keywords: {
      ar: ["ضعف السمع", "علاج ضعف السمع", "فقدان السمع"],
      en: ["hearing loss treatment", "sudden hearing loss", "ear specialist"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/ear-infection": {
    path: "/services/ear-infection",
    title: serviceTitle("علاج التهاب الأذن", "Ear Infection Treatment"),
    description: {
      ar: "علاج التهاب الأذن الوسطى والخارجية عند الكبار والأطفال — تشخيص دقيق وعلاج فعال لمنع المضاعفات.",
      en: "Middle and outer ear infection treatment for adults and children — accurate diagnosis and effective therapy to prevent complications.",
    },
    keywords: {
      ar: ["التهاب الأذن", "علاج التهاب الأذن", "التهاب الأذن الوسطى"],
      en: ["ear infection treatment", "otitis media", "ear infection adults"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/vertigo": {
    path: "/services/vertigo",
    title: serviceTitle("علاج الدوار والدوخة", "Vertigo & Dizziness Treatment"),
    description: {
      ar: "علاج الدوار والدوخة الناتجة عن اضطرابات الأذن الداخلية — تشخيص دقيق وعلاج مخصص.",
      en: "Vertigo and dizziness treatment from inner ear disorders — precise diagnosis and tailored therapy.",
    },
    keywords: {
      ar: ["دوار الأذن", "علاج الدوار", "دوخة ودوار"],
      en: ["vertigo treatment", "dizziness treatment", "inner ear vertigo"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/tonsillectomy": {
    path: "/services/tonsillectomy",
    title: serviceTitle("استئصال اللوزتين", "Tonsillectomy"),
    description: {
      ar: "استئصال اللوزتين — دواعي العملية، خطوات الجراحة، والتعافي. علاج التهاب اللوزتين المتكرر عند الكبار والأطفال.",
      en: "Tonsillectomy — indications, surgical steps, and recovery. Treatment for recurrent tonsillitis in adults and children.",
    },
    keywords: {
      ar: ["استئصال اللوزتين", "التهاب اللوزتين", "عملية اللوز"],
      en: ["tonsillectomy", "tonsil removal", "recurrent tonsillitis"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/adenoidectomy": {
    path: "/services/adenoidectomy",
    title: serviceTitle("إزالة الغدد الأدينية", "Adenoidectomy"),
    description: {
      ar: "إزالة الغدد الأدينية عند الأطفال — علاج انسداد الأنف المزمن، الشخير، والتهابات الأذن المتكررة.",
      en: "Adenoidectomy in children — treating chronic nasal blockage, snoring, and recurrent ear infections.",
    },
    keywords: {
      ar: ["الغدد الأدينية", "استئصال الغدد", "الزوائد الأنفية عند الأطفال"],
      en: ["adenoidectomy", "adenoids removal", "adenoids in children"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/hoarseness": {
    path: "/services/hoarseness",
    title: serviceTitle("علاج بحة الصوت", "Hoarseness & Voice Treatment"),
    description: {
      ar: "علاج بحة الصوت والتهاب الحنجرة — تشخيص أسباب تغير الصوت وخطة علاج جراحية أو دوائية.",
      en: "Hoarseness and laryngitis treatment — diagnose voice change causes and surgical or medical treatment plan.",
    },
    keywords: {
      ar: ["بحة الصوت", "علاج بحة الصوت", "التهاب الحنجرة"],
      en: ["hoarseness treatment", "voice changes", "laryngitis"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/swallowing-disorders": {
    path: "/services/swallowing-disorders",
    title: serviceTitle("علاج صعوبة البلع", "Swallowing Disorder Treatment"),
    description: {
      ar: "علاج صعوبة البلع — تقييم شامل للحلق والمريء وتحديد سبب Dysphagia وخطة العلاج المناسبة.",
      en: "Swallowing difficulty treatment — comprehensive throat and esophageal evaluation to identify dysphagia causes and treatment.",
    },
    keywords: {
      ar: ["صعوبة البلع", "علاج صعوبة البلع", "Dysphagia"],
      en: ["swallowing difficulty", "dysphagia treatment", "swallowing disorders"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/snoring": {
    path: "/services/snoring",
    title: serviceTitle("علاج الشخير", "Snoring Treatment"),
    description: {
      ar: "علاج الشخير جراحياً وغير جراحياً — تشخيص الأسباب (انسداد أنفي، لوز، لسان) وخطة علاج فعالة.",
      en: "Surgical and non-surgical snoring treatment — diagnose causes (nasal obstruction, tonsils, tongue) and effective treatment plan.",
    },
    keywords: {
      ar: ["علاج الشخير", "الشخير", "أسباب الشخير"],
      en: ["snoring treatment", "stop snoring", "snoring surgery"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "services/sleep-apnea": {
    path: "/services/sleep-apnea",
    title: serviceTitle("علاج توقف التنفس أثناء النوم", "Sleep Apnea Treatment"),
    description: {
      ar: "علاج توقف التنفس أثناء النوم — تشخيص OSA وخيارات العلاج الجراحي وغير الجراحي مع متخصص ENT.",
      en: "Sleep apnea treatment — OSA diagnosis and surgical and non-surgical treatment options with an ENT specialist.",
    },
    keywords: {
      ar: ["توقف التنفس أثناء النوم", "علاج Sleep Apnea", "OSA"],
      en: ["sleep apnea treatment", "OSA treatment", "obstructive sleep apnea"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  // ── Local clinic pages ──
  "clinics/cairo-fifth-settlement": {
    path: "/clinics/cairo-fifth-settlement",
    title: {
      ar: "عيادة أنف وأذن وحنجرة التجمع الخامس | د. محمد ربيع خيري",
      en: "ENT Clinic — 5th Settlement, New Cairo | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "عيادة د. ربيع خيري في التجمع الخامس (مركز القاهرة الطبي بجوار مستشفى الشفا) — حجز مواعيد على واتساب 01124427427.",
      en: "Dr. Khairy's clinic in 5th Settlement, New Cairo (Cairo Medical Center, next to Al-Shifa Hospital). Book via WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["دكتور أنف وأذن التجمع الخامس", "عيادة أنف وأذن القاهرة الجديدة"],
      en: ["ENT doctor 5th settlement", "ENT clinic New Cairo"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "clinics/zagazig": {
    path: "/clinics/zagazig",
    title: {
      ar: "عيادة أنف وأذن وحنجرة الزقازيق | د. محمد ربيع خيري",
      en: "ENT Clinic — Zagazig | Dr. Mohammed Rabea Khairy",
    },
    description: {
      ar: "عيادة د. ربيع خيري في الزقازيق (ميدان الصاغة قرب الكوبري العلوي) — حجز مواعيد على واتساب 01124427427.",
      en: "Dr. Khairy's clinic in Zagazig (Medan Al-Sagha, near Al-Kubri Al-Alawi). Book via WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["دكتور أنف وأذن الزقازيق", "عيادة أنف وأذن الشرقية"],
      en: ["ENT doctor Zagazig", "ENT clinic Sharqia"],
    },
    priority: 0.9,
    changeFrequency: "monthly",
  },
  // ── Local SEO landing pages ──
  "local/cairo-rhinoplasty": {
    path: "/cairo/rhinoplasty",
    title: {
      ar: "تجميل الأنف في القاهرة | د. محمد ربيع خيري — التجمع الخامس",
      en: "Rhinoplasty in Cairo | Dr. Mohammed Rabea Khairy — New Cairo",
    },
    description: {
      ar: "عملية تجميل الأنف في القاهرة الجديدة مع أ.د. محمد ربيع خيري — نتائج طبيعية، تجميل وظيفي، وتصحيح عمليات سابقة. عيادة التجمع الخامس. احجز واتساب 01124427427.",
      en: "Rhinoplasty in New Cairo with Prof. Dr. Mohammed Rabea Khairy — natural results, functional surgery, revision cases. 5th Settlement clinic. Book WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["تجميل الأنف في القاهرة", "دكتور تجميل أنف التجمع الخامس", "عملية الأنف القاهرة الجديدة"],
      en: ["rhinoplasty Cairo", "nose job New Cairo", "rhinoplasty 5th settlement"],
    },
    priority: 0.85,
    changeFrequency: "monthly",
  },
  "local/cairo-ent-specialist": {
    path: "/cairo/ent-specialist",
    title: {
      ar: "دكتور أنف وأذن وحنجرة في القاهرة | د. محمد ربيع خيري",
      en: "ENT Specialist in Cairo | Dr. Mohammed Rabea Khairy — New Cairo",
    },
    description: {
      ar: "استشاري أنف وأذن وحنجرة في التجمع الخامس — جراحة الجيوب، الحاجز الأنفي، ضعف السمع، اللوز، والشخير. أ.د. محمد ربيع خيري. حجز 01124427427.",
      en: "ENT specialist in 5th Settlement, New Cairo — sinus surgery, septoplasty, hearing loss, tonsils, snoring. Prof. Dr. Mohammed Rabea Khairy. Book: 01124427427.",
    },
    keywords: {
      ar: ["دكتور أنف وأذن وحنجرة القاهرة", "أخصائي أنف وأذن التجمع الخامس", "عيادة أنف أذن حنجرة"],
      en: ["ENT specialist Cairo", "ENT doctor New Cairo", "ear nose throat Cairo"],
    },
    priority: 0.85,
    changeFrequency: "monthly",
  },
  "local/zagazig-rhinoplasty": {
    path: "/zagazig/rhinoplasty",
    title: {
      ar: "تجميل الأنف في الزقازيق | د. محمد ربيع خيري — الشرقية",
      en: "Rhinoplasty in Zagazig | Dr. Mohammed Rabea Khairy — Sharqia",
    },
    description: {
      ar: "عملية تجميل الأنف في الزقازيق مع أ.د. محمد ربيع خيري — تجميل تجميلي ووظيفي للمرضى في الشرقية وشرق الدلتا. ميدان الصاغة. واتساب 01124427427.",
      en: "Rhinoplasty in Zagazig with Prof. Dr. Khairy — cosmetic and functional nose surgery for Sharqia and Eastern Delta patients. Medan Al-Sagha. WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["تجميل الأنف في الزقازيق", "دكتور تجميل أنف الشرقية", "عملية أنف الزقازيق"],
      en: ["rhinoplasty Zagazig", "nose surgery Sharqia", "rhinoplasty Eastern Delta"],
    },
    priority: 0.85,
    changeFrequency: "monthly",
  },
  "local/zagazig-sinus-surgery": {
    path: "/zagazig/sinus-surgery",
    title: {
      ar: "عملية الجيوب الأنفية في الزقازيق | د. محمد ربيع خيري — FESS",
      en: "Sinus Surgery in Zagazig | Dr. Mohammed Rabea Khairy — FESS",
    },
    description: {
      ar: "جراحة الجيوب الأنفية بالمنظار (FESS) في الزقازيق — علاج التهاب الجيوب المزمن والزوائد الأنفية. أ.د. محمد ربيع خيري. حجز واتساب 01124427427.",
      en: "Endoscopic sinus surgery (FESS) in Zagazig — chronic sinusitis and nasal polyp treatment. Prof. Dr. Mohammed Rabea Khairy. WhatsApp: 01124427427.",
    },
    keywords: {
      ar: ["عملية الجيوب الأنفية الزقازيق", "مناظير الجيوب الشرقية", "FESS الزقازيق"],
      en: ["sinus surgery Zagazig", "FESS Sharqia", "sinus specialist Zagazig"],
    },
    priority: 0.85,
    changeFrequency: "monthly",
  },
} as const satisfies Record<string, PageSeoConfig>;

export type SeoPageKey = keyof typeof seoPages;

export const corePageKeys = [
  "home",
  "about",
  "services",
  "blog",
  "beforeAfter",
  "testimonials",
  "videos",
  "clinics",
  "contact",
  "conferences",
] as const satisfies readonly SeoPageKey[];

export const servicePageKeys = [
  "services/rhinoplasty",
  "services/functional-rhinoplasty",
  "services/revision-rhinoplasty",
  "services/septoplasty",
  "services/nasal-obstruction",
  "services/nasal-polyps",
  "services/sinus-surgery",
  "services/sinusitis",
  "services/allergic-rhinitis",
  "services/tinnitus",
  "services/hearing-loss",
  "services/ear-infection",
  "services/vertigo",
  "services/tonsillectomy",
  "services/adenoidectomy",
  "services/hoarseness",
  "services/swallowing-disorders",
  "services/snoring",
  "services/sleep-apnea",
] as const satisfies readonly SeoPageKey[];

export const localPageKeys = [
  "local/cairo-rhinoplasty",
  "local/cairo-ent-specialist",
  "local/zagazig-rhinoplasty",
  "local/zagazig-sinus-surgery",
] as const satisfies readonly SeoPageKey[];

export const sitemapPageKeys = [
  ...corePageKeys,
  ...servicePageKeys,
  ...localPageKeys,
  "clinics/cairo-fifth-settlement",
  "clinics/zagazig",
] as const;
