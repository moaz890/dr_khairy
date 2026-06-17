import type { ServiceFaq } from "@/lib/data/service-pages";

type T = { en: string; ar: string };

export interface LocalPage {
  city: string;
  topic: string;
  clinicSlug: string;
  h1: T;
  intro: T;
  sections: { heading: T; body: T }[];
  faqs: ServiceFaq[];
  primaryServiceSlug: string;
  relatedServiceSlugs: string[];
  relatedBlogSlugs: string[];
}

export const localPages: LocalPage[] = [
  {
    city: "cairo",
    topic: "rhinoplasty",
    clinicSlug: "cairo-fifth-settlement",
    h1: {
      en: "Rhinoplasty in Cairo — New Cairo (5th Settlement)",
      ar: "تجميل الأنف في القاهرة — التجمع الخامس",
    },
    intro: {
      en: "Prof. Dr. Mohammed Rabea Khairy performs cosmetic and functional rhinoplasty at his Fifth Settlement clinic in New Cairo. Patients from across Greater Cairo choose his practice for natural results that preserve nasal breathing.",
      ar: "يجري أ.د. محمد ربيع خيري تجميل الأنف التجميلي والوظيفي في عيادته بالتجمع الخامس بالقاهرة الجديدة. يختار مرضاه من القاهرة الكبرى عيادته لنتائج طبيعية تحافظ على التنفس الأنفي.",
    },
    sections: [
      {
        heading: {
          en: "Why choose an ENT professor for rhinoplasty in Cairo?",
          ar: "لماذا تختار أستاذ أنف وأذن لتجميل الأنف في القاهرة؟",
        },
        body: {
          en: "Rhinoplasty is not only an aesthetic procedure — airway function matters. As a Cairo University ENT professor, Prof. Khairy combines structural nasal surgery expertise with refined cosmetic technique. Every consultation includes breathing assessment and photographic analysis.",
          ar: "تجميل الأنف ليس إجراءً جمالياً فقط — وظيفة المجرى الهوائي مهمة. بصفته أستاذ أنف وأذن بجامعة القاهرة، يجمع أ.د. خيري خبرة جراحة الأنف الهيكلية مع تقنية تجميلية دقيقة. كل استشارة تشمل تقييم التنفس وتحليلاً تصويرياً.",
        },
      },
      {
        heading: {
          en: "Clinic location — Fifth Settlement, New Cairo",
          ar: "موقع العيادة — التجمع الخامس، القاهرة الجديدة",
        },
        body: {
          en: "The clinic is located at Cairo Medical Center, next to Al-Shifa Hospital in the 5th Settlement — easily accessible from Madinaty, Rehab, Mostakbal City, and central Cairo via Ring Road. Appointments Saturday through Thursday, 4:00–9:00 PM.",
          ar: "تقع العيادة في كايرو مديكال سنتر بجوار مستشفى الشفا بالتجمع الخامس — يسهل الوصول إليها من مدينتي والرحاب ومدينة المستقبل ووسط القاهرة عبر الطريق الدائري. المواعيد من السبت إلى الخميس، ٤:٠٠–٩:٠٠ مساءً.",
        },
      },
      {
        heading: {
          en: "Procedures available at our Cairo rhinoplasty clinic",
          ar: "الإجراءات المتاحة في عيادة تجميل الأنف بالقاهرة",
        },
        body: {
          en: "Primary rhinoplasty, functional rhinoplasty (breathing + aesthetics), revision rhinoplasty for failed prior surgery, and septorhinoplasty when a deviated septum contributes to blockage. Before-and-after results and video consultations are available for out-of-town patients.",
          ar: "تجميل الأنف الأولي، التجميل الوظيفي (التنفس + الجمال)، تصحيح العمليات الفاشلة، والسبتورينوبلاستي عندما يساهم انحراف الحاجز في الانسداد. نتائج قبل وبعد واستشارات فيديو متاحة للمرضى من خارج القاهرة.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "How do I book a rhinoplasty consultation in New Cairo?",
          ar: "كيف أحجز استشارة تجميل أنف في التجمع الخامس؟",
        },
        answer: {
          en: "Contact the clinic via WhatsApp at 01124427427. Send photos of your nose (front and profile) and describe your goals. The team will confirm the next available appointment.",
          ar: "تواصل مع العيادة عبر واتساب على ٠١١٢٤٤٢٧٤٢٧. أرسل صوراً لأنفك (أمامية وجانبية) وصف أهدافك. سيؤكد الفريق الموعد المتاح التالي.",
        },
      },
      {
        question: {
          en: "Does Prof. Khairy perform rhinoplasty for patients outside Cairo?",
          ar: "هل يجري أ.د. خيري تجميل الأنف لمرضى من خارج القاهرة؟",
        },
        answer: {
          en: "Yes. Patients travel from Alexandria, Delta cities, and Upper Egypt. A Zagazig clinic is also available for Eastern Delta patients.",
          ar: "نعم. يسافر مرضى من الإسكندرية ومدن الدلتا وصعيد مصر. عيادة الزقازيق متاحة أيضاً لمرضى شرق الدلتا.",
        },
      },
      {
        question: {
          en: "What is the typical rhinoplasty recovery timeline?",
          ar: "ما الجدول المعتاد للتعافي بعد تجميل الأنف؟",
        },
        answer: {
          en: "Most patients return to desk work within 1–2 weeks. Splint removal is usually at day 7. Final contour refines over 6–12 months as swelling subsides.",
          ar: "يعود معظم المرضى للعمل المكتبي خلال ١–٢ أسبوع. إزالة الجبيرة عادة في اليوم السابع. يتضح الشكل النهائي على ٦–١٢ شهراً مع زوال التورم.",
        },
      },
    ],
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["functional-rhinoplasty", "revision-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["rhinoplasty-egypt-guide", "rhinoplasty-recovery-stages", "functional-vs-cosmetic-rhinoplasty"],
  },
  {
    city: "cairo",
    topic: "ent-specialist",
    clinicSlug: "cairo-fifth-settlement",
    h1: {
      en: "ENT Specialist in Cairo — New Cairo Clinic",
      ar: "دكتور أنف وأذن وحنجرة في القاهرة — عيادة التجمع الخامس",
    },
    intro: {
      en: "Prof. Dr. Mohammed Rabea Khairy is a Cairo University ENT professor offering comprehensive ear, nose, and throat care at his Fifth Settlement clinic. From sinus disease and nasal obstruction to hearing loss and tonsil disorders — expert diagnosis and treatment under one roof.",
      ar: "أ.د. محمد ربيع خيري أستاذ أنف وأذن وحنجرة بجامعة القاهرة يقدم رعاية شاملة للأذن والأنف والحنجرة في عيادته بالتجمع الخامس. من أمراض الجيوب وانسداد الأنف إلى ضعف السمع واضطرابات اللوز — تشخيص وعلاج متخصص تحت سقف واحد.",
    },
    sections: [
      {
        heading: {
          en: "ENT services at our New Cairo clinic",
          ar: "خدمات الأنف والأذن والحنجرة في عيادتنا بالقاهرة الجديدة",
        },
        body: {
          en: "Rhinoplasty and septoplasty, endoscopic sinus surgery (FESS), nasal polyp removal, allergic rhinitis management, tinnitus and vertigo evaluation, ear infection treatment, tonsillectomy, adenoidectomy, snoring and sleep apnoea assessment.",
          ar: "تجميل الأنف وتصحيح الحاجز، مناظير الجيوب (FESS)، إزالة الزوائد الأنفية، علاج حساسية الأنف، تقييم الطنين والدوار، علاج التهاب الأذن، استئصال اللوز واللحمية، تقييم الشخير وانقطاع النفس النومي.",
        },
      },
      {
        heading: {
          en: "Professor-level expertise you can trust",
          ar: "خبرة على مستوى الأستاذية يمكنك الوثوق بها",
        },
        body: {
          en: "With decades of academic and surgical experience, Prof. Khairy applies evidence-based protocols and modern endoscopic technology. He is a member of international rhinology societies and regularly presents at ENT conferences.",
          ar: "بعقود من الخبرة الأكاديمية والجراحية، يطبق أ.د. خيري بروتوكولات قائمة على الأدلة وتقنية منظارية حديثة. عضو في جمعيات الأنف الدولية ويقدم بانتظام في مؤتمرات الأنف والأذن والحنجرة.",
        },
      },
      {
        heading: {
          en: "Convenient access from across Greater Cairo",
          ar: "وصول مريح من أنحاء القاهرة الكبرى",
        },
        body: {
          en: "Located in the 5th Settlement near Al-Shifa Hospital, the clinic serves patients from New Cairo, Heliopolis, Nasr City, Maadi, and surrounding areas. Evening hours (4–9 PM) accommodate working professionals.",
          ar: "تقع في التجمع الخامس قرب مستشفى الشفا، وتخدم مرضى من القاهرة الجديدة ومصر الجديدة ومدينة نصر والمعادي والمناطق المحيطة. مواعيد مسائية (٤–٩) تناسب العاملين.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "What conditions does the ENT clinic in New Cairo treat?",
          ar: "ما الحالات التي تعالجها عيادة الأنف والأذن في التجمع الخامس؟",
        },
        answer: {
          en: "All common ENT conditions: deviated septum, chronic sinusitis, nasal polyps, allergic rhinitis, hearing loss, ear infections, vertigo, tonsillitis, hoarseness, snoring, and sleep apnoea.",
          ar: "جميع حالات الأنف والأذن والحنجرة الشائعة: انحراف الحاجز، التهاب الجيوب المزمن، الزوائد الأنفية، حساسية الأنف، ضعف السمع، التهاب الأذن، الدوار، التهاب اللوز، بحة الصوت، الشخير، وانقطاع النفس النومي.",
        },
      },
      {
        question: {
          en: "Do I need a referral to see Prof. Dr. Khairy?",
          ar: "هل أحتاج تحويلاً لزيارة أ.د. خيري؟",
        },
        answer: {
          en: "No referral is required. Book directly via WhatsApp at 01124427427 for an initial consultation.",
          ar: "لا حاجة لتحويل. احجز مباشرة عبر واتساب على ٠١١٢٤٤٢٧٤٢٧ لاستشارة أولية.",
        },
      },
      {
        question: {
          en: "Does the clinic offer paediatric ENT care?",
          ar: "هل تقدم العيادة رعاية أنف وأذن للأطفال؟",
        },
        answer: {
          en: "Yes. Common paediatric procedures include adenoidectomy, tonsillectomy, ventilation tube insertion, and management of recurrent ear infections.",
          ar: "نعم. الإجراءات الشائعة للأطفال تشمل استئصال اللحمية واللوز وإدخال أنابيب التهوية وعلاج التهابات الأذن المتكررة.",
        },
      },
    ],
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["sinus-surgery", "rhinoplasty", "tonsillectomy", "snoring"],
    relatedBlogSlugs: ["when-to-see-ent", "deviated-septum-signs", "endoscopic-sinus-surgery-guide"],
  },
  {
    city: "zagazig",
    topic: "rhinoplasty",
    clinicSlug: "zagazig",
    h1: {
      en: "Rhinoplasty in Zagazig — Sharqia Governorate",
      ar: "تجميل الأنف في الزقازيق — محافظة الشرقية",
    },
    intro: {
      en: "Residents of Zagazig, Sharqia, and the Eastern Delta can access expert rhinoplasty with Prof. Dr. Mohammed Rabea Khairy at his Zagazig clinic on Medan Al-Sagha. The same surgical standards and personalised care as the New Cairo practice.",
      ar: "سكان الزقازيق والشرقية وشرق الدلتا يمكنهم الوصول لتجميل أنف متخصص مع أ.د. محمد ربيع خيري في عيادته بميدان الصاغة. نفس المعايير الجراحية والرعاية المخصصة كعيادة القاهرة الجديدة.",
    },
    sections: [
      {
        heading: {
          en: "Rhinoplasty services in Zagazig",
          ar: "خدمات تجميل الأنف في الزقازيق",
        },
        body: {
          en: "Cosmetic rhinoplasty, functional rhinoplasty combining breathing correction, revision surgery for unsatisfactory prior results, and septoplasty when needed. Consultations include endoscopic examination and digital planning.",
          ar: "تجميل الأنف التجميلي، التجميل الوظيفي مع تصحيح التنفس، جراحة التصحيح للنتائج غير المرضية، وتصحيح الحاجز عند الحاجة. الاستشارات تشمل فحصاً منظارياً وتخطيطاً رقمياً.",
        },
      },
      {
        heading: {
          en: "Zagazig clinic — Medan Al-Sagha",
          ar: "عيادة الزقازيق — ميدان الصاغة",
        },
        body: {
          en: "The Zagazig branch is on Al-Kobri Al-Alawi Street, opposite Wadea Anton, near the elevated bridge. Convenient for patients from Zagazig, 10th of Ramadan City, Belbeis, Abu Hammad, and surrounding Sharqia towns.",
          ar: "فرع الزقازيق في شارع الكوبري العلوي أمام وديع انطوان قرب الكوبري العلوي. مناسب لمرضى الزقازيق ومدينة العاشر وبلبيس وأبو حماد ومدن الشرقية المحيطة.",
        },
      },
      {
        heading: {
          en: "Why patients from Sharqia choose Prof. Khairy",
          ar: "لماذا يختار مرضى الشرقية أ.د. خيري",
        },
        body: {
          en: "Professor-level ENT training means your rhinoplasty surgeon understands nasal anatomy at the deepest level. Prof. Khairy trained at Cairo University and internationally, bringing world-class technique to the Delta region without requiring travel to central Cairo.",
          ar: "تدريب الأستاذية في الأنف والأذن يعني أن جراح تجميل أنفك يفهم تشريح الأنف بعمق. تدرب أ.د. خيري في جامعة القاهرة ودولياً، ويجلب تقنية عالمية لمنطقة الدلتا دون الحاجة للسفر لوسط القاهرة.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "Where exactly is the Zagazig rhinoplasty clinic?",
          ar: "أين تقع عيادة تجميل الأنف في الزقازيق بالتحديد؟",
        },
        answer: {
          en: "Medan Al-Sagha, first Al-Kobri Al-Alawi Street, opposite Wadea Anton, Zagazig. WhatsApp 01124427427 for directions and booking.",
          ar: "ميدان الصاغة، أول الكوبري العلوي، أمام وديع انطوان، الزقازيق. واتساب ٠١١٢٤٤٢٧٤٢٧ للاتجاهات والحجز.",
        },
      },
      {
        question: {
          en: "Is surgery performed in Zagazig or Cairo?",
          ar: "هل تُجرى العملية في الزقازيق أم القاهرة؟",
        },
        answer: {
          en: "Consultations are held at both clinics. Surgical procedures are performed at accredited hospitals; your surgeon will confirm the facility during your consultation.",
          ar: "الاستشارات في العيادتين. العمليات الجراحية في مستشفيات معتمدة؛ يؤكد جراحك المنشأة أثناء الاستشارة.",
        },
      },
      {
        question: {
          en: "Can I see rhinoplasty before-and-after results?",
          ar: "هل يمكنني رؤية نتائج تجميل الأنف قبل وبعد؟",
        },
        answer: {
          en: "Yes. Visit the before-and-after gallery on this website or ask during your consultation for cases similar to your anatomy.",
          ar: "نعم. زُر معرض النتائج قبل وبعد على الموقع أو اطلب أثناء الاستشارة حالات مشابهة لتشريحك.",
        },
      },
    ],
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["functional-rhinoplasty", "septoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["rhinoplasty-egypt-guide", "questions-before-rhinoplasty"],
  },
  {
    city: "zagazig",
    topic: "sinus-surgery",
    clinicSlug: "zagazig",
    h1: {
      en: "Sinus Surgery in Zagazig — FESS Specialist",
      ar: "عملية الجيوب الأنفية في الزقازيق — متخصص مناظير",
    },
    intro: {
      en: "Chronic sinusitis and nasal polyps affect thousands in Sharqia governorate. Prof. Dr. Mohammed Rabea Khairy offers endoscopic sinus surgery (FESS) evaluation and treatment at his Zagazig clinic — bringing advanced sinus care closer to Eastern Delta patients.",
      ar: "التهاب الجيوب المزمن والزوائد الأنفية يصيبان آلافاً في محافظة الشرقية. يقدم أ.د. محمد ربيع خيري تقييم وعلاج مناظير الجيوب (FESS) في عيادته بالزقازيق — ليقترب برعاية الجيوب المتقدمة من مرضى شرق الدلتا.",
    },
    sections: [
      {
        heading: {
          en: "When is sinus surgery needed?",
          ar: "متى تكون عملية الجيوب ضرورية؟",
        },
        body: {
          en: "Surgery is considered when chronic sinusitis persists beyond 12 weeks despite antibiotics and nasal steroids, when nasal polyps block drainage, or when recurrent infections cause facial pain and smell loss. CT imaging confirms disease extent before planning FESS.",
          ar: "تُفكر الجراحة عندما يستمر التهاب الجيوب أكثر من ١٢ أسبوعاً رغم المضادات والستيرويدات الأنفية، أو عندما تعيق الزوائد التصريف، أو عند تكرار العدوى مع ألم وجهي وفقدان شم. الأشعة المقطعية تؤكد مدى المرض قبل تخطيط FESS.",
        },
      },
      {
        heading: {
          en: "FESS — minimally invasive sinus surgery",
          ar: "FESS — جراحة جيوب طفيفة التوغل",
        },
        body: {
          en: "Functional endoscopic sinus surgery uses a rigid endoscope through the nostrils — no external incisions. Diseased tissue and blocked ostia are cleared while healthy mucosa is preserved. Most patients go home within 24 hours.",
          ar: "جراحة الجيوب الوظيفية بالمنظار تستخدم منظاراً صلباً عبر المنخرين — دون شقوق خارجية. تُزال الأنسجة المريضة والفتحات المسدودة مع الحفاظ على الغشاء السليم. يغادر معظم المرضى خلال ٢٤ ساعة.",
        },
      },
      {
        heading: {
          en: "Zagazig clinic for Sharqia and Delta patients",
          ar: "عيادة الزقازيق لمرضى الشرقية والدلتا",
        },
        body: {
          en: "The Zagazig branch saves travel time for patients from 10th of Ramadan, Belbeis, Minya al-Qamh, and Abu Kabir. Evening appointments Saturday–Thursday, 4:00–9:00 PM. Book via WhatsApp: 01124427427.",
          ar: "فرع الزقازيق يوفر وقت السفر لمرضى العاشر وبلبيس ومنيا القمح وأبو كبير. مواعيد مسائية السبت–الخميس، ٤:٠٠–٩:٠٠ مساءً. احجز عبر واتساب: ٠١١٢٤٤٢٧٤٢٧.",
        },
      },
    ],
    faqs: [
      {
        question: {
          en: "How long is recovery after FESS sinus surgery?",
          ar: "كم مدة التعافي بعد عملية الجيوب بالمنظار؟",
        },
        answer: {
          en: "Most patients resume normal activities within 1–2 weeks. Saline nasal irrigation is essential for 2–4 weeks. Full symptom improvement typically occurs within 4–6 weeks.",
          ar: "يعود معظم المرضى للأنشطة خلال ١–٢ أسبوع. الغسول الملحي الأنفي ضروري لمدة ٢–٤ أسابيع. تحسن الأعراض الكامل عادة خلال ٤–٦ أسابيع.",
        },
      },
      {
        question: {
          en: "Can sinus surgery be combined with septoplasty?",
          ar: "هل يمكن الجمع بين جراحة الجيوب وتصحيح الحاجز؟",
        },
        answer: {
          en: "Yes. When a deviated septum contributes to blockage, both procedures are often performed in one operation for comprehensive airway improvement.",
          ar: "نعم. عندما يساهم انحراف الحاجز في الانسداد، تُجرى غالباً الإجراءات معاً في عملية واحدة لتحسين شامل للمجرى الهوائي.",
        },
      },
      {
        question: {
          en: "Do I need a CT scan before sinus surgery?",
          ar: "هل أحتاج أشعة مقطعية قبل عملية الجيوب؟",
        },
        answer: {
          en: "Yes. A sinus CT scan is standard pre-operative planning to map anatomy safely and identify all affected sinuses.",
          ar: "نعم. الأشعة المقطعية للجيوب معيارية للتخطيط قبل العملية لرسم التشريح بأمان وتحديد جميع الجيوب المصابة.",
        },
      },
    ],
    primaryServiceSlug: "sinus-surgery",
    relatedServiceSlugs: ["sinusitis", "nasal-polyps", "septoplasty"],
    relatedBlogSlugs: ["when-sinus-surgery-needed", "endoscopic-sinus-surgery-guide", "chronic-sinusitis-symptoms"],
  },
];

export const localPageParams = localPages.map((p) => ({
  city: p.city,
  topic: p.topic,
}));

export function getLocalPage(city: string, topic: string): LocalPage | undefined {
  return localPages.find((p) => p.city === city && p.topic === topic);
}

export function getLocalPagesByCity(city: string): LocalPage[] {
  return localPages.filter((p) => p.city === city);
}

export function getLocalPagePath(city: string, topic: string): string {
  return `/${city}/${topic}`;
}
