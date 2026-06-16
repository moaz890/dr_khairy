import type { BlogPost, MythFact } from "./types";

export const initialBlogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "endoscopic-sinus-surgery-guide",
    title: {
      en: "Endoscopic Sinus Surgery: What to Expect Before, During & After",
      ar: "جراحة الجيوب الأنفية بالمنظار: ماذا تتوقع قبل وأثناء وبعد العملية؟",
    },
    excerpt: {
      en: "A complete patient guide to FESS — from pre-operative CT scans and nasal preparation to recovery milestones and long-term outcomes.",
      ar: "دليل شامل للمريض حول FESS — من الأشعة المقطعية والتحضير الأنفي قبل العملية إلى مراحل التعافي والنتائج طويلة المدى.",
    },
    body: [
      {
        en: "Functional endoscopic sinus surgery (FESS) is the gold standard for chronic sinusitis that does not respond to medical therapy. Using a thin endoscope inserted through the nostrils, the surgeon opens blocked sinus pathways without external incisions.",
        ar: "جراحة الجيوب الأنفية الوظيفية بالمنظار (FESS) هي المعيار الذهبي للتهاب الجيوب المزمن الذي لا يستجيب للعلاج الدوائي. باستخدام منظار رفيع يُدخل عبر فتحات الأنف، يفتح الجراح مسارات الجيوب المسدودة دون شقوق خارجية.",
      },
      {
        en: "Before surgery, a CT scan of the sinuses maps your anatomy and guides the procedure. Prof. Dr. Khairy reviews this imaging with you to explain which sinuses are affected and what improvement to expect.",
        ar: "قبل العملية، تُظهر الأشعة المقطعية للجيوب تشريحك وتوجه الإجراء. يراجع الأستاذ الدكتور خيري هذه الصور معك لشرح الجيوب المتأثرة والتحسن المتوقع.",
      },
      {
        en: "Recovery is typically manageable with nasal rinses and short-term medication. Most patients notice improved breathing within the first two weeks, with continued healing over several months.",
        ar: "التعافي عادةً سهل الإدارة مع غسولات أنفية وأدوية قصيرة المدى. يلاحظ معظم المرضى تحسناً في التنفس خلال أسبوعين، مع استمرار الشفاء على مدى عدة أشهر.",
      },
    ],
    category: "sinusitis",
    date: "2024-06-01",
    readMinutes: 9,
    featured: true,
    gradientClass: "from-cyan-900 to-indigo-800",
    primaryServiceSlug: "sinus-surgery",
    relatedServiceSlugs: ["sinusitis", "nasal-polyps"],
    relatedBlogSlugs: ["deviated-septum-signs", "when-sinus-surgery-needed"],
  },
  {
    id: "b2",
    slug: "deviated-septum-signs",
    title: {
      en: "5 Signs You May Have a Deviated Septum",
      ar: "٥ علامات تدل على أن لديك انحرافاً في الحاجز الأنفي",
    },
    excerpt: {
      en: "Chronic nasal blockage, snoring, and frequent nosebleeds may point to a deviated septum. Here are five warning signs and when to see an ENT specialist.",
      ar: "الانسداد الأنفي المزمن والشخير ونزيف الأنف المتكرر قد يشير إلى انحراف الحاجز. إليك خمس علامات تحذيرية ومتى تراجع أخصائي الأنف والأذن.",
    },
    body: [
      {
        en: "The nasal septum is the wall dividing your nostrils. When it deviates to one side, airflow becomes restricted — often causing chronic congestion on one side, snoring, or recurrent nosebleeds.",
        ar: "الحاجز الأنفي هو الجدار الذي يقسم فتحتي الأنف. عند انحرافه إلى جانب واحد، يُقيد تدفق الهواء — وغالباً يسبب احتقاناً مزمناً في جانب واحد أو شخيراً أو نزيفاً متكرراً.",
      },
      {
        en: "Five common signs include persistent one-sided blockage, mouth breathing at night, frequent sinus infections, facial pressure, and nosebleeds from the narrower side.",
        ar: "من العلامات الشائعة: انسداد مستمر في جانب واحد، التنفس من الفم ليلاً، التهابات جيوب متكررة، ضغط في الوجه، ونزيف من الجانب الضيق.",
      },
      {
        en: "Septoplasty can straighten the septum and restore balanced airflow. Prof. Dr. Khairy evaluates whether medical treatment or surgery is appropriate during your consultation.",
        ar: "يمكن لعملية الحاجز الأنفي استعدال الحاجز واستعادة تدفق هواء متوازن. يقيّم الأستاذ الدكتور خيري مناسبة العلاج الدوائي أو الجراحي خلال الاستشارة.",
      },
    ],
    category: "nose-conditions",
    date: "2024-05-14",
    readMinutes: 6,
    featured: false,
    gradientClass: "from-emerald-800 to-teal-700",
    primaryServiceSlug: "septoplasty",
    relatedServiceSlugs: ["nasal-obstruction", "snoring"],
    relatedBlogSlugs: ["snoring-vs-sleep-apnea", "septum-deviation-snoring"],
  },
  {
    id: "b3",
    slug: "rhinoplasty-egypt-guide",
    title: {
      en: "Rhinoplasty in Egypt: Safety, Recovery & Results",
      ar: "تجميل الأنف في مصر: السلامة والتعافي والنتائج",
    },
    excerpt: {
      en: "Considering rhinoplasty in Egypt? Prof. Khairy explains how to choose a qualified surgeon, what safety standards to expect, and realistic recovery timelines.",
      ar: "تفكر في تجميل الأنف في مصر؟ يوضح الأستاذ الدكتور خيري كيف تختار جراحاً مؤهلاً ومعايير السلامة المتوقعة وجداول التعافي الواقعية.",
    },
    body: [
      {
        en: "Choosing a rhinoplasty surgeon in Egypt should begin with credentials — board certification, university affiliation, and documented experience in both cosmetic and functional nasal surgery.",
        ar: "اختيار جراح تجميل الأنف في مصر يبدأ بالمؤهلات — الاعتماد، الانتماء الجامعي، وخبرة موثقة في الجراحة الأنفية التجميلية والوظيفية.",
      },
      {
        en: "Safety depends on accredited facilities, anaesthesia standards, and a surgeon who discusses risks openly. Prof. Dr. Khairy performs rhinoplasty with emphasis on natural results and preserved breathing.",
        ar: "تعتمد السلامة على منشآت معتمدة ومعايير تخدير وجراح يناقش المخاطر بصراحة. يجري الأستاذ الدكتور خيري تجميل الأنف مع التركيز على نتائج طبيعية وتنفس محفوظ.",
      },
      {
        en: "Recovery typically involves one week off work, swelling that improves over months, and follow-up visits to ensure optimal healing.",
        ar: "التعافي يتضمن عادة أسبوعاً بعيداً عن العمل، تورماً يتحسن على مدى أشهر، وزيارات متابعة لضمان الشفاء الأمثل.",
      },
    ],
    category: "rhinoplasty",
    date: "2024-04-22",
    readMinutes: 10,
    featured: true,
    gradientClass: "from-amber-800 to-orange-700",
    primaryServiceSlug: "rhinoplasty",
    relatedServiceSlugs: ["functional-rhinoplasty", "revision-rhinoplasty"],
    relatedBlogSlugs: ["functional-vs-cosmetic-rhinoplasty", "rhinoplasty-cost-egypt"],
  },
  {
    id: "b4",
    slug: "snoring-vs-sleep-apnea",
    title: {
      en: "Snoring vs Sleep Apnea: How to Tell the Difference",
      ar: "الشخير مقابل انقطاع النفس أثناء النوم: كيف تميز بينهما؟",
    },
    excerpt: {
      en: "Snoring is common, but it can mask a serious condition. Learn the clinical differences between benign snoring and obstructive sleep apnea.",
      ar: "الشخير شائع، لكنه قد يخفي حالة خطيرة. تعرّف على الفروق السريرية بين الشخير البسيط وانقطاع النفس الانسدادي أثناء النوم.",
    },
    body: [
      {
        en: "Simple snoring occurs when airflow causes soft tissues to vibrate without significant breathing pauses. Sleep apnea involves repeated complete or partial airway collapse during sleep.",
        ar: "الشخير البسيط يحدث عندما يسبب تدفق الهواء اهتزاز الأنسجة الرخوة دون توقف تنفسي ملحوظ. انقطاع النفس ينطوي على انهيار متكرر كلي أو جزئي للمجرى الهوائي أثناء النوم.",
      },
      {
        en: "Warning signs of sleep apnea include gasping during sleep, excessive daytime sleepiness, morning headaches, and witnessed breathing pauses reported by a partner.",
        ar: "علامات انقطاع النفس تشمل لهاثاً أثناء النوم، نعاساً نهارياً مفرطاً، صداعاً صباحياً، وتوقف تنفس يلاحظه الشريك.",
      },
      {
        en: "ENT evaluation can identify treatable causes such as nasal obstruction or enlarged tonsils. Prof. Dr. Khairy offers surgical and non-surgical options tailored to each patient.",
        ar: "تقييم الأنف والأذن يحدد أسباباً قابلة للعلاج مثل انسداد الأنف أو تضخم اللوز. يقدم الأستاذ الدكتور خيري خيارات جراحية وغير جراحية مخصصة.",
      },
    ],
    category: "sleep-breathing",
    date: "2024-03-10",
    readMinutes: 7,
    featured: false,
    gradientClass: "from-slate-800 to-slate-700",
    primaryServiceSlug: "sleep-apnea",
    relatedServiceSlugs: ["snoring", "septoplasty"],
    relatedBlogSlugs: ["septum-deviation-causes-snoring", "sleep-apnea-symptoms-risks"],
  },
  {
    id: "b5",
    slug: "child-tonsillectomy",
    title: {
      en: "Should My Child Have Their Tonsils Removed?",
      ar: "هل يجب إزالة لوز طفلي؟",
    },
    excerpt: {
      en: "Tonsillectomy isn't always the answer. Prof. Khairy outlines the evidence-based criteria that guide the decision for children with recurrent throat infections.",
      ar: "استئصال اللوز ليس دائماً الحل. يحدد الأستاذ الدكتور خيري المعايير المبنية على الأدلة التي توجه القرار للأطفال ذوي التهابات الحلق المتكررة.",
    },
    body: [
      {
        en: "Recurrent tonsillitis is generally defined as seven or more episodes in one year, five per year for two years, or three per year for three years — warranting surgical discussion.",
        ar: "يُعرَّف التهاب اللوز المتكرر عموماً بسبع نوبات أو أكثر في سنة، أو خمس سنوياً لسنتين، أو ثلاث سنوياً لثلاث سنوات — مما يستدعي مناقشة جراحية.",
      },
      {
        en: "Other indications include sleep-disordered breathing from enlarged tonsils, difficulty swallowing, peritonsillar abscess history, and suspected complications affecting growth or school attendance.",
        ar: "مؤشرات أخرى تشمل اضطرابات التنفس من تضخم اللوز، صعوبة البلع، تاريخ خراج حول اللوز، ومضاعفات محتملة تؤثر على النمو أو الحضور المدرسي.",
      },
      {
        en: "Prof. Dr. Khairy performs tonsillectomy with modern techniques focused on safety and faster recovery in both children and adults when surgery is indicated.",
        ar: "يجري الأستاذ الدكتور خيري استئصال اللوز بتقنيات حديثة تركز على السلامة وتعافٍ أسرع للأطفال والكبار عند وجود مؤشر جراحي.",
      },
    ],
    category: "throat-conditions",
    date: "2024-02-28",
    readMinutes: 8,
    featured: false,
    gradientClass: "from-cyan-800 to-cyan-700",
    primaryServiceSlug: "tonsillectomy",
    relatedServiceSlugs: ["adenoidectomy", "snoring"],
    relatedBlogSlugs: ["ventilation-tubes-guide", "adult-tonsillectomy"],
  },
  {
    id: "b6",
    slug: "ventilation-tubes-guide",
    title: {
      en: "Ventilation Tubes for Kids: A Parent's Complete Guide",
      ar: "أنابيب التهوية للأطفال: دليل شامل للآباء",
    },
    excerpt: {
      en: "From diagnosis of glue ear to tube insertion and follow-up — everything parents need to know about myringotomy and grommets.",
      ar: "من تشخيص التهاب الأذن الوسطى بالسوائل إلى إدخال الأنبوب والمتابعة — كل ما يحتاجه الآباء معرفته عن شق الطبلة وأنابيب التهوية.",
    },
    body: [
      {
        en: "Glue ear (otitis media with effusion) occurs when fluid builds behind the eardrum, often affecting hearing and speech development in children.",
        ar: "التهاب الأذن الوسطى بالسوائل يحدث عند تراكم سائل خلف طبلة الأذن، وغالباً يؤثر على السمع وتطور الكلام عند الأطفال.",
      },
      {
        en: "Ventilation tubes (grommets) are tiny devices placed through a small incision in the eardrum to ventilate the middle ear and drain fluid.",
        ar: "أنابيب التهوية أجهزة صغيرة تُوضع عبر شق صغير في الطبلة لتهوية الأذن الوسطى وتصريف السائل.",
      },
      {
        en: "Regular follow-up ensures tubes are functioning and the eardrum heals properly after extrusion. Prof. Dr. Khairy monitors hearing recovery at each visit.",
        ar: "المتابعة المنتظمة تضمن عمل الأنابيب وشفاء الطبلة بعد خروجها. يراقب الأستاذ الدكتور خيري استعادة السمع في كل زيارة.",
      },
    ],
    category: "ear-conditions",
    date: "2024-01-15",
    readMinutes: 9,
    featured: false,
    gradientClass: "from-indigo-900 to-cyan-800",
    primaryServiceSlug: "ear-infection",
    relatedServiceSlugs: ["hearing-loss", "adenoidectomy"],
    relatedBlogSlugs: ["child-tonsillectomy", "otitis-media-adults-children"],
  },
];

export const mythFacts: MythFact[] = [
  {
    id: "mf1",
    myth: { en: "ENT surgery is only cosmetic.", ar: "جراحة الأنف والأذن والحنجرة تجميلية فقط." },
    fact: {
      en: "The vast majority of ENT procedures address functional problems — breathing, hearing, swallowing, and sleep — with cosmetic improvement as a secondary benefit in rhinoplasty.",
      ar: "الغالبية العظمى من إجراءات الأنف والأذن والحنجرة تعالج مشاكل وظيفية — التنفس والسمع والبلع والنوم — مع تحسين جمالي ثانوي في تجميل الأنف.",
    },
    category: "nose-conditions",
  },
  {
    id: "mf2",
    myth: { en: "Snoring is harmless.", ar: "الشخير أمر بريء ولا يضر." },
    fact: {
      en: "Habitual loud snoring can indicate obstructive sleep apnea (OSA), which is linked to hypertension, heart disease, stroke, and daytime accidents if left untreated.",
      ar: "الشخير العالي المتكرر قد يشير إلى انقطاع النفس الانسدادي أثناء النوم المرتبط بارتفاع ضغط الدم وأمراض القلب والسكتة والحوادث النهارية إذا تُرك دون علاج.",
    },
    category: "sleep-breathing",
  },
  {
    id: "mf3",
    myth: { en: "Children always outgrow tonsil problems.", ar: "الأطفال يتجاوزون مشاكل اللوز دائماً مع العمر." },
    fact: {
      en: "While some children improve with age, chronic tonsillitis (≥7 episodes/year), sleep-disordered breathing, and peritonsillar abscess history are clear indications for tonsillectomy.",
      ar: "رغم تحسن بعض الأطفال مع العمر، فإن التهاب اللوز المزمن (≥٧ نوبات/سنة) واضطرابات التنفس أثناء النوم وتاريخ خراج حول اللوز مؤشرات واضحة لاستئصال اللوز.",
    },
    category: "throat-conditions",
  },
  {
    id: "mf4",
    myth: { en: "Rhinoplasty results look unnatural.", ar: "نتائج تجميل الأنف تبدو غير طبيعية." },
    fact: {
      en: "Modern rhinoplasty emphasises natural, proportionate results. Prof. Khairy's European-trained techniques focus on preserving nasal function while achieving harmonious facial balance.",
      ar: "تجميل الأنف الحديث يركز على نتائج طبيعية متناسقة. تقنيات الأستاذ الدكتور خيري المدربة أوروبياً تحافظ على وظيفة الأنف مع تحقيق تناسق وجهي متناغم.",
    },
    category: "rhinoplasty",
  },
  {
    id: "mf5",
    myth: { en: "Sinus surgery is very painful.", ar: "جراحة الجيوب الأنفية مؤلمة جداً." },
    fact: {
      en: "Functional endoscopic sinus surgery (FESS) is minimally invasive with no external incisions. Most patients return to normal activities within 1–2 weeks with manageable discomfort.",
      ar: "جراحة الجيوب الأنفية الوظيفية بالمنظار (FESS) طفيفة التوغل بلا شقوق خارجية. يعود معظم المرضى لأنشطتهم خلال ١-٢ أسبوع بانزعاج يمكن التحكم فيه.",
    },
    category: "sinusitis",
  },
  {
    id: "mf6",
    myth: { en: "Ear tubes fall out on their own — no need for follow-up.", ar: "أنابيب الأذن تسقط وحدها — لا حاجة للمتابعة." },
    fact: {
      en: "While ventilation tubes typically extrude within 6–18 months, regular ENT follow-up is essential to monitor eardrum healing, hearing recovery, and detect complications early.",
      ar: "رغم أن أنابيب التهوية تخرج عادة خلال ٦-١٨ شهراً، فإن المتابعة المنتظمة لدى أخصائي الأنف والأذن ضرورية لمراقبة التئام الطبلة واستعادة السمع واكتشاف المضاعفات مبكراً.",
    },
    category: "ear-conditions",
  },
];
