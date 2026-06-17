// Individual service page content — bilingual EN / AR (19 pages)

type T = { en: string; ar: string };

export interface ServiceFaq {
  question: T;
  answer: T;
}

export interface ServicePage {
  slug: string;
  h1: T;
  intro: T;
  overview: T;
  symptoms: T[];
  benefits: T[];
  procedure: T;
  recovery: T;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
  relatedBlogSlugs: string[];
  showBeforeAfterLink: boolean;
}

export const servicePages: ServicePage[] = [
  {
    slug: "rhinoplasty",
    h1: {
      en: "Rhinoplasty in Egypt",
      ar: "عملية تجميل الأنف في مصر",
    },
    intro: {
      en: "Rhinoplasty reshapes the nose to improve facial harmony while preserving or enhancing nasal function. Prof. Dr. Mohammed Rabea Khairy offers personalised aesthetic nasal surgery at his clinics in New Cairo and Zagazig.",
      ar: "تجميل الأنف يعيد تشكيل الأنف لتحسين تناسق الوجه مع الحفاظ على وظيفة الأنف أو تحسينها. يقدم الأستاذ الدكتور محمد ربيع خيري جراحة أنفية جمالية مخصصة في عياداته بالتجمع الخامس والزقازيق.",
    },
    overview: {
      en: "Cosmetic rhinoplasty addresses concerns such as dorsal humps, wide tips, asymmetry, or post-traumatic deformity. Prof. Khairy uses open or closed techniques tailored to each patient's anatomy and goals. Every plan balances natural aesthetics with structural stability and comfortable breathing.",
      ar: "تجميل الأنف الجمالي يعالج مشكلات مثل نتوء ظهر الأنف أو الرأس العريض أو عدم التناسق أو التشوه بعد الإصابة. يستخدم الأستاذ الدكتور خيري تقنيات مفتوحة أو مغلقة حسب تشريح كل مريض وأهدافه. كل خطة توازن بين الجمال الطبيعي والاستقرار الهيكلي والتنفس المريح.",
    },
    symptoms: [
      { en: "Dissatisfaction with nasal shape or size", ar: "عدم الرضا عن شكل أو حجم الأنف" },
      { en: "Dorsal hump or nasal bridge irregularity", ar: "نتوء ظهر الأنف أو عدم انتظام الجسر الأنفي" },
      { en: "Bulbous or drooping nasal tip", ar: "رأس أنف منتفخ أو متدلي" },
      { en: "Wide or flared nostrils", ar: "منخارين عريضين أو متباعدين" },
      { en: "Nasal asymmetry after injury", ar: "عدم تناسق الأنف بعد إصابة" },
    ],
    benefits: [
      { en: "Improved facial balance and self-confidence", ar: "تحسين تناسق الوجه والثقة بالنفس" },
      { en: "Natural-looking results tailored to ethnic features", ar: "نتائج طبيعية مخصصة للملامح العرقية" },
      { en: "Correction of structural issues affecting appearance", ar: "تصحيح مشكلات هيكلية تؤثر على المظهر" },
      { en: "Long-lasting outcomes with experienced surgical technique", ar: "نتائج دائمة بتقنية جراحية متمرسة" },
    ],
    procedure: {
      en: "After a detailed consultation and photographic analysis, surgery is performed under general anaesthesia. Bone and cartilage are precisely sculpted through open or closed approaches. Prof. Khairy may combine cosmetic changes with functional corrections when needed.",
      ar: "بعد استشارة مفصلة وتحليل تصويري، تُجرى العملية تحت تخدير عام. يُعاد تشكيل العظم والغضروف بدقة عبر نهج مفتوح أو مغلق. قد يجمع الأستاذ الدكتور خيري التعديلات الجمالية مع تصحيحات وظيفية عند الحاجة.",
    },
    recovery: {
      en: "Most patients return to desk work within one to two weeks. Swelling peaks in the first week and gradually subsides over several months. A splint is typically worn for one week, with follow-up visits to monitor healing.",
      ar: "يعود معظم المرضى للعمل المكتبي خلال أسبوع إلى أسبوعين. يبلغ التورم ذروته في الأسبوع الأول ويختفي تدريجياً على مدى عدة أشهر. يُرتدى جبيرة عادة لمدة أسبوع، مع زيارات متابعة لمراقبة الشفاء.",
    },
    faqs: [
      {
        question: { en: "How long does rhinoplasty take?", ar: "كم تستغرق عملية تجميل الأنف؟" },
        answer: {
          en: "Primary rhinoplasty typically takes two to three hours depending on complexity. Revision cases may require longer operative time.",
          ar: "تستغرق تجميل الأنف الأولية عادة من ساعتين إلى ثلاث حسب التعقيد. قد تحتاج حالات التصحيح وقتاً أطول في العملية.",
        },
      },
      {
        question: { en: "When will I see the final result?", ar: "متى أرى النتيجة النهائية؟" },
        answer: {
          en: "Initial improvement is visible once the splint is removed, but subtle swelling may persist for up to twelve months before the final contour is fully apparent.",
          ar: "يظهر التحسن الأولي بعد إزالة الجبيرة، لكن قد يستمر تورم طفيف حتى اثني عشر شهراً قبل ظهور الشكل النهائي بالكامل.",
        },
      },
      {
        question: { en: "Is rhinoplasty painful?", ar: "هل تجميل الأنف مؤلم؟" },
        answer: {
          en: "Discomfort is usually mild and managed with prescribed medication. Nasal congestion rather than sharp pain is the most common early complaint.",
          ar: "الانزعاج عادة خفيف ويُدار بأدوية موصوفة. انسداد الأنف وليس الألم الحاد هو الشكوى الأكثر شيوعاً في البداية.",
        },
      },
    ],
    relatedSlugs: ["functional-rhinoplasty", "revision-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["rhinoplasty-egypt-guide", "deviated-septum-signs"],
    showBeforeAfterLink: true,
  },
  {
    slug: "functional-rhinoplasty",
    h1: {
      en: "Functional Rhinoplasty — Beauty and Breathing Together",
      ar: "تجميل الأنف الوظيفي — جمال التنفس معاً",
    },
    intro: {
      en: "Functional rhinoplasty combines aesthetic refinement with correction of breathing problems in a single procedure. Prof. Dr. Khairy specialises in this integrated approach for patients who want both improved airflow and a harmonious nasal appearance.",
      ar: "تجميل الأنف الوظيفي يجمع بين التحسين الجمالي وتصحيح مشكلات التنفس في إجراء واحد. يتخصص الأستاذ الدكتور خيري في هذا النهج المتكامل للمرضى الذين يريدون تحسين تدفق الهواء ومظهر أنف متناسق.",
    },
    overview: {
      en: "This procedure addresses deviated septum, enlarged turbinates, valve collapse, and external deformity simultaneously. Unlike purely cosmetic surgery, functional rhinoplasty prioritises durable airway improvement alongside shape correction. Prof. Khairy plans each case using endoscopic examination and structural analysis.",
      ar: "يعالج هذا الإجراء انحراف الحاجز وتضخم المحارات وانهيار الصمام والتشوه الخارجي في آن واحد. على عكس الجراحة الجمالية البحتة، يعطي تجميل الأنف الوظيفي الأولوية لتحسين المجرى الهوائي الدائم مع تصحيح الشكل. يخطط الأستاذ الدكتور خيري لكل حالة بفحص منظاري وتحليل هيكلي.",
    },
    symptoms: [
      { en: "Chronic nasal obstruction with cosmetic concerns", ar: "انسداد أنفي مزمن مع مخاوف جمالية" },
      { en: "Difficulty exercising due to blocked airflow", ar: "صعوبة ممارسة الرياضة بسبب انسداد تدفق الهواء" },
      { en: "Crooked nose with breathing difficulty", ar: "أنف ملتوٍ مع صعوبة تنفس" },
      { en: "Post-traumatic nasal deformity and blockage", ar: "تشوه أنفي بعد إصابة مع انسداد" },
      { en: "Snoring linked to nasal structure", ar: "شخير مرتبط ببنية الأنف" },
    ],
    benefits: [
      { en: "Single surgery for breathing and appearance", ar: "جراحة واحدة للتنفس والمظهر" },
      { en: "Improved sleep quality and daytime energy", ar: "تحسين جودة النوم والطاقة نهاراً" },
      { en: "Reduced reliance on nasal sprays or strips", ar: "تقليل الاعتماد على بخاخات أو لصقات الأنف" },
      { en: "Natural aesthetic outcome without compromising function", ar: "نتيجة جمالية طبيعية دون المساس بالوظيفة" },
    ],
    procedure: {
      en: "Surgery typically includes septoplasty, turbinate reduction, and structural grafting as needed, combined with external reshaping. Prof. Khairy preserves nasal support structures to prevent long-term collapse while achieving the desired cosmetic result.",
      ar: "تشمل الجراحة عادة تصحيح الحاجز وتصغير المحارات وترقيع هيكلي عند الحاجة، مع إعادة التشكيل الخارجي. يحافظ الأستاذ الدكتور خيري على هياكل دعم الأنف لمنع الانهيار طويل المدى مع تحقيق النتيجة الجمالية المرجوة.",
    },
    recovery: {
      en: "Recovery mirrors standard rhinoplasty with added emphasis on nasal breathing exercises after splint removal. Internal swelling may cause temporary congestion for several weeks. Most patients notice improved airflow within the first month.",
      ar: "التعافي يشبه تجميل الأنف المعتاد مع التركيز على تمارين التنفس الأنفية بعد إزالة الجبيرة. قد يسبب التورم الداخلي انسداداً مؤقتاً لعدة أسابيع. يلاحظ معظم المرضى تحسناً في تدفق الهواء خلال الشهر الأول.",
    },
    faqs: [
      {
        question: { en: "How is functional rhinoplasty different from septoplasty alone?", ar: "ما الفرق بين تجميل الأنف الوظيفي وتصحيح الحاجز وحده؟" },
        answer: {
          en: "Septoplasty straightens the internal septum, while functional rhinoplasty also addresses external shape, valve support, and turbinates for comprehensive functional and aesthetic improvement.",
          ar: "تصحيح الحاجز يقوّم الحاجز الداخلي، بينما يعالج تجميل الأنف الوظيفي أيضاً الشكل الخارجي ودعم الصمام والمحارات لتحسين وظيفي وجمالي شامل.",
        },
      },
      {
        question: { en: "Will insurance cover functional rhinoplasty?", ar: "هل يغطي التأمين تجميل الأنف الوظيفي؟" },
        answer: {
          en: "Coverage varies by insurer and country. Functional components may be partially covered when medically documented, while cosmetic portions are typically self-funded.",
          ar: "يختلف التغطية حسب شركة التأمين والبلد. قد تُغطى الجوانب الوظيفية جزئياً عند توثيقها طبياً، بينما تُمول الأجزاء الجمالية عادة ذاتياً.",
        },
      },
      {
        question: { en: "Can I have functional rhinoplasty after a previous nose surgery?", ar: "هل يمكن إجراء تجميل الأنف الوظيفي بعد عملية أنف سابقة؟" },
        answer: {
          en: "Yes, though prior surgery may require revision techniques with cartilage grafting. Prof. Khairy evaluates available tissue and airway anatomy before recommending the best approach.",
          ar: "نعم، لكن الجراحة السابقة قد تتطلب تقنيات تصحيح مع ترقيع غضروفي. يقيّم الأستاذ الدكتور خيري الأنسجة المتاحة وتشريح المجرى الهوائي قبل التوصية بأفضل نهج.",
        },
      },
    ],
    relatedSlugs: ["rhinoplasty", "revision-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["rhinoplasty-egypt-guide", "deviated-septum-signs"],
    showBeforeAfterLink: true,
  },
  {
    slug: "revision-rhinoplasty",
    h1: {
      en: "Revision Rhinoplasty",
      ar: "تصحيح عملية تجميل الأنف السابقة",
    },
    intro: {
      en: "Revision rhinoplasty corrects unsatisfactory results, breathing problems, or complications from a previous nasal surgery. Prof. Dr. Khairy brings extensive experience in complex secondary nasal procedures for patients across Egypt.",
      ar: "تصحيح تجميل الأنف يعالج النتائج غير المرضية أو مشكلات التنفس أو المضاعفات من جراحة أنفية سابقة. يتمتع الأستاذ الدكتور خيري بخبرة واسعة في الإجراءات الأنفية الثانوية المعقدة للمرضى في مصر.",
    },
    overview: {
      en: "Secondary rhinoplasty is among the most technically demanding ENT procedures. Scar tissue, missing cartilage, and altered anatomy require careful planning and often graft material from the septum, ear, or rib. Prof. Khairy sets realistic expectations and prioritises functional stability.",
      ar: "تجميل الأنف الثانوي من أكثر إجراءات الأنف والأذن والحنجرة تطلباً تقنياً. النسيج الندبي ونقص الغضروف والتشريح المتغير يتطلبان تخطيطاً دقيقاً وغالباً مواد ترقيع من الحاجز أو الأذن أو الضلع. يضع الأستاذ الدكتور خيري توقعات واقعية ويعطي الأولوية للاستقرار الوظيفي.",
    },
    symptoms: [
      { en: "Persistent asymmetry after prior rhinoplasty", ar: "عدم تناسق مستمر بعد تجميل أنف سابق" },
      { en: "Over-reduced or pinched nasal tip", ar: "رأس أنف مفرط التصغير أو مضغوط" },
      { en: "Breathing worse than before surgery", ar: "تنفس أسوأ من قبل الجراحة" },
      { en: "Visible irregularities or collapse", ar: "تشوهات ظاهرة أو انهيار" },
      { en: "Chronic nasal obstruction post-operatively", ar: "انسداد أنفي مزمن بعد العملية" },
    ],
    benefits: [
      { en: "Correction of prior surgical errors or over-resection", ar: "تصحيح أخطاء جراحية سابقة أو استئصال مفرط" },
      { en: "Restoration of nasal airflow and support", ar: "استعادة تدفق الهواء والدعم الأنفي" },
      { en: "Improved confidence with refined aesthetics", ar: "تحسين الثقة بجماليات أكثر دقة" },
      { en: "Expert management of complex nasal anatomy", ar: "إدارة متخصصة لتشريح أنفي معقد" },
    ],
    procedure: {
      en: "A thorough history, examination, and often CT imaging guide the revision plan. Open rhinoplasty is common to access scarred tissue and place structural grafts. Prof. Khairy may stage complex cases across more than one procedure when safest.",
      ar: "تاريخ مفصل وفحص وغالباً تصوير مقطعي يوجه خطة التصحيح. تجميل الأنف المفتوح شائع للوصول للأنسجة الندبية ووضع ترقيعات هيكلية. قد يقسم الأستاذ الدكتور خيري الحالات المعقدة على أكثر من إجراء عند الضرورة.",
    },
    recovery: {
      en: "Healing may take longer than primary rhinoplasty due to existing scar tissue. Swelling can persist for twelve to eighteen months. Patience and regular follow-up are essential for optimal outcomes.",
      ar: "قد يستغرق الشفاء وقتاً أطول من تجميل الأنف الأولي بسبب النسيج الندبي الموجود. قد يستمر التورم من اثني عشر إلى ثمانية عشر شهراً. الصبر والمتابعة المنتظمة ضروريان لأفضل النتائج.",
    },
    faqs: [
      {
        question: { en: "When can revision rhinoplasty be performed?", ar: "متى يمكن إجراء تصحيح تجميل الأنف؟" },
        answer: {
          en: "Most surgeons recommend waiting at least twelve months after the primary procedure to allow swelling to resolve and tissues to stabilise.",
          ar: "يوصي معظم الجراحين بالانتظار اثني عشر شهراً على الأقل بعد الإجراء الأولي لتمكين زوال التورم واستقرار الأنسجة.",
        },
      },
      {
        question: { en: "Is revision rhinoplasty riskier?", ar: "هل تصحيح تجميل الأنف أكثر خطورة؟" },
        answer: {
          en: "Yes, scar tissue and limited cartilage make revision more complex. Choosing an experienced revision surgeon significantly reduces complication risk.",
          ar: "نعم، النسيج الندبي ونقص الغضروف يجعلان التصحيح أكثر تعقيداً. اختيار جراح متمرس في التصحيح يقلل بشكل كبير من خطر المضاعفات.",
        },
      },
      {
        question: { en: "Where does graft cartilage come from?", ar: "من أين يُؤخذ غضروف الترقيع؟" },
        answer: {
          en: "Septal cartilage is preferred when available. Ear or rib cartilage may be used when septal tissue was removed in the prior surgery.",
          ar: "يُفضل غضروف الحاجز عند توافره. قد يُستخدم غضروف الأذن أو الضلع عندما أُزيل نسيج الحاجز في الجراحة السابقة.",
        },
      },
    ],
    relatedSlugs: ["rhinoplasty", "functional-rhinoplasty", "septoplasty"],
    relatedBlogSlugs: ["rhinoplasty-egypt-guide"],
    showBeforeAfterLink: true,
  },
  {
    slug: "septoplasty",
    h1: {
      en: "Septoplasty for Deviated Nasal Septum",
      ar: "عملية الحاجز الأنفي المنحرف",
    },
    intro: {
      en: "Septoplasty straightens a deviated nasal septum to restore balanced airflow through both nostrils. Prof. Dr. Khairy performs this functional procedure for patients with chronic blockage, snoring, or recurrent nosebleeds in Cairo and Zagazig.",
      ar: "تصحيح الحاجز الأنفي يقوّم الحاجز المنحرف لاستعادة تدفق هواء متوازن في المنخرين. يجري الأستاذ الدكتور خيري هذا الإجراء الوظيفي للمرضى ذوي الانسداد المزمن أو الشخير أو نزيف الأنف المتكرر في القاهرة والزقازيق.",
    },
    overview: {
      en: "The nasal septum is the wall dividing the two nasal passages. When crooked due to development or trauma, it obstructs airflow on one or both sides. Septoplasty repositions or removes deviated cartilage and bone while preserving structural support.",
      ar: "الحاجز الأنفي هو الجدار الفاصل بين الممرين الأنفيين. عندما ينحرف بسبب النمو أو الإصابة، يعيق تدفق الهواء في جانب أو كليهما. تصحيح الحاجز يعيد وضع أو يزيل الغضروف والعظم المنحرف مع الحفاظ على الدعامة الهيكلية.",
    },
    symptoms: [
      { en: "Persistent one-sided nasal blockage", ar: "انسداد أنفي مستمر في جانب واحد" },
      { en: "Chronic mouth breathing", ar: "تنفس مزمن من الفم" },
      { en: "Frequent nosebleeds (epistaxis)", ar: "نزيف أنفي متكرر" },
      { en: "Snoring or sleep disruption", ar: "شخير أو اضطراب النوم" },
      { en: "Facial pressure or sinus headaches", ar: "ضغط وجهي أو صداع جيوب أنفية" },
    ],
    benefits: [
      { en: "Improved nasal breathing on both sides", ar: "تحسين التنفس الأنفي من الجانبين" },
      { en: "Reduced snoring and better sleep quality", ar: "تقليل الشخير وتحسين جودة النوم" },
      { en: "Decreased frequency of nosebleeds", ar: "انخفاض تكرار نزيف الأنف" },
      { en: "No external visible scarring", ar: "لا ندوب ظاهرة خارجياً" },
    ],
    procedure: {
      en: "Performed under general or local anaesthesia through internal incisions with no external scars. Prof. Khairy removes or reshapes deviated septal tissue and may combine turbinate reduction for optimal airflow.",
      ar: "تُجرى تحت تخدير عام أو موضعي عبر شقوق داخلية دون ندوب خارجية. يزيل أو يعيد تشكيل الأستاذ الدكتور خيري نسيج الحاجز المنحرف وقد يجمع تصغير المحارات لتدفق هواء مثالي.",
    },
    recovery: {
      en: "Most patients return to normal activities within one week. Nasal packing, if used, is removed within a few days. Full internal healing takes six to eight weeks, with breathing improvement often noticeable immediately.",
      ar: "يعود معظم المرضى للأنشطة الطبيعية خلال أسبوع. تُزال الحشوات الأنفية إن وُضعت خلال أيام قليلة. الشفاء الداخلي الكامل يستغرق ستة إلى ثمانية أسابيع، مع تحسن التنفس غالباً ملحوظاً فوراً.",
    },
    faqs: [
      {
        question: { en: "Does septoplasty change the shape of my nose?", ar: "هل يغير تصحيح الحاجز شكل أنفي؟" },
        answer: {
          en: "Standard septoplasty does not alter external appearance. If a crooked nose is visible externally, functional rhinoplasty may be recommended alongside septoplasty.",
          ar: "تصحيح الحاجز المعياري لا يغير المظهر الخارجي. إن كان الأنف ملتوياً ظاهرياً، قد يُوصى بتجميل الأنف الوظيفي مع تصحيح الحاجز.",
        },
      },
      {
        question: { en: "How successful is septoplasty?", ar: "ما نسبة نجاح تصحيح الحاجز؟" },
        answer: {
          en: "Success rates exceed 80% for improved breathing when the septum is the primary obstruction. Combined turbinate or valve surgery may be needed for complete relief.",
          ar: "تتجاوز نسب النجاح ٨٠٪ لتحسين التنفس عندما يكون الحاجز هو السبب الرئيسي للانسداد. قد تُحتاج جراحة محارات أو صمام مصاحبة للراحة الكاملة.",
        },
      },
      {
        question: { en: "Can septoplasty be combined with rhinoplasty?", ar: "هل يمكن الجمع بين تصحيح الحاجز وتجميل الأنف؟" },
        answer: {
          en: "Yes, septorhinoplasty combines both procedures in one operation, addressing breathing and cosmetic goals simultaneously.",
          ar: "نعم، يجمع السبتورينوبلاستي بين الإجراءين في عملية واحدة، معالجاً أهداف التنفس والجمال معاً.",
        },
      },
    ],
    relatedSlugs: ["nasal-obstruction", "functional-rhinoplasty", "rhinoplasty"],
    relatedBlogSlugs: ["deviated-septum-signs", "rhinoplasty-egypt-guide", "deviated-septum-headaches"],
    showBeforeAfterLink: false,
  },
  {
    slug: "nasal-obstruction",
    h1: {
      en: "Treatment for Chronic Nasal Obstruction",
      ar: "علاج انسداد الأنف المزمن",
    },
    intro: {
      en: "Chronic nasal obstruction limits airflow and affects sleep, exercise, and daily comfort. Prof. Dr. Khairy diagnoses structural and inflammatory causes and offers medical and surgical solutions tailored to each patient.",
      ar: "انسداد الأنف المزمن يحد من تدفق الهواء ويؤثر على النوم والرياضة والراحة اليومية. يشخص الأستاذ الدكتور خيري الأسباب الهيكلية والالتهابية ويقدم حلولاً طبية وجراحية مخصصة لكل مريض.",
    },
    overview: {
      en: "Nasal blockage may result from deviated septum, turbinate hypertrophy, nasal polyps, valve collapse, or chronic rhinitis. A comprehensive evaluation including endoscopy identifies the contributing factors. Treatment ranges from medications to minimally invasive surgery.",
      ar: "قد ينتج انسداد الأنف عن انحراف الحاجز أو تضخم المحارات أو الزوائد الأنفية أو انهيار الصمام أو التهاب الأنف المزمن. تقييم شامل يشمل المنظار يحدد العوامل المساهمة. يتراوح العلاج من الأدوية إلى جراحة طفيفة التوغل.",
    },
    symptoms: [
      { en: "Constant difficulty breathing through the nose", ar: "صعوبة دائمة في التنفس من الأنف" },
      { en: "Alternating or bilateral blockage", ar: "انسداد متناوب أو ثنائي الجانب" },
      { en: "Dry mouth and throat on waking", ar: "جفاف الفم والحلق عند الاستيقاظ" },
      { en: "Reduced sense of smell", ar: "ضعف حاسة الشم" },
      { en: "Fatigue from poor sleep quality", ar: "إرهاق من سوء جودة النوم" },
    ],
    benefits: [
      { en: "Restored comfortable nasal breathing", ar: "استعادة التنفس الأنفي المريح" },
      { en: "Better athletic performance and stamina", ar: "أداء رياضي وقدرة تحمل أفضل" },
      { en: "Improved sleep and reduced snoring", ar: "نوم أفضل وتقليل الشخير" },
      { en: "Targeted treatment based on root cause", ar: "علاج موجه حسب السبب الجذري" },
    ],
    procedure: {
      en: "Surgical options include septoplasty, turbinate reduction via radiofrequency or microdebrider, and polyp removal. Prof. Khairy selects the least invasive approach that achieves lasting airway improvement.",
      ar: "تشمل الخيارات الجراحية تصحيح الحاجز وتصغير المحارات بالتردد أو المجهر وإزالة الزوائد. يختار الأستاذ الدكتور خيري أقل نهج توغل يحقق تحسيناً دائماً للمجرى الهوائي.",
    },
    recovery: {
      en: "Minimally invasive turbinate procedures often allow return to work within two to three days. Post-operative crusting and congestion resolve over two to four weeks with saline rinses.",
      ar: "إجراءات المحارات طفيفة التوغل تسمح غالباً بالعودة للعمل خلال يومين إلى ثلاثة. تزول القشور والانسداد بعد العملية خلال أسبوعين إلى أربعة مع غسول ملحي.",
    },
    faqs: [
      {
        question: { en: "Can nasal obstruction be treated without surgery?", ar: "هل يمكن علاج انسداد الأنف دون جراحة؟" },
        answer: {
          en: "Allergic or inflammatory causes often respond to nasal steroids and antihistamines. Structural obstruction usually requires surgical correction for lasting relief.",
          ar: "الأسباب التحسسية أو الالتهابية تستجيب غالباً للستيرويدات والمضادات الهيستامينية الأنفية. الانسداد الهيكلي يتطلب عادة تصحيحاً جراحياً لراحة دائمة.",
        },
      },
      {
        question: { en: "What are nasal turbinates?", ar: "ما هي المحارات الأنفية؟" },
        answer: {
          en: "Turbinates are curved shelves of bone and tissue inside the nose that warm and humidify air. When enlarged, they significantly block airflow.",
          ar: "المحارات هي أرفف من العظم والنسيج داخل الأنف تدفئ وترطب الهواء. عند تضخمها، تعيق تدفق الهواء بشكل كبير.",
        },
      },
      {
        question: { en: "Will turbinate reduction cause empty nose syndrome?", ar: "هل يسبب تصغير المحارات متلازمة الأنف الفارغ؟" },
        answer: {
          en: "When performed conservatively by an experienced surgeon, turbinate reduction is safe and effective. Prof. Khairy preserves adequate mucosal tissue to maintain normal nasal function.",
          ar: "عند إجرائه بحذر من جراح متمرس، تصغير المحارات آمن وفعال. يحافظ الأستاذ الدكتور خيري على نسيج مخاطي كافٍ للحفاظ على وظيفة الأنف الطبيعية.",
        },
      },
    ],
    relatedSlugs: ["septoplasty", "nasal-polyps", "allergic-rhinitis"],
    relatedBlogSlugs: ["deviated-septum-signs"],
    showBeforeAfterLink: false,
  },
  {
    slug: "nasal-polyps",
    h1: {
      en: "Nasal Polyp Removal",
      ar: "إزالة الزوائد الأنفية",
    },
    intro: {
      en: "Nasal polyps are soft, non-cancerous growths that block the nose and sinuses and often reduce smell. Prof. Dr. Khairy offers combined medical and endoscopic surgical treatment for lasting polyp control.",
      ar: "الزوائد الأنفية نموات رخوة حميدة تعيق الأنف والجيوب وغالباً تقلل الشم. يقدم الأستاذ الدكتور خيري علاجاً طبياً وجراحياً بالمنظار للسيطرة الدائمة على الزوائد.",
    },
    overview: {
      en: "Polyps develop from chronic inflammation in conditions such as chronic rhinosinusitis, asthma, or aspirin sensitivity. They cause progressive blockage and loss of smell. Endoscopic polypectomy with ongoing medical therapy offers the best long-term outcomes.",
      ar: "تتكون الزوائد من التهاب مزمن في حالات مثل التهاب الجيوب المزمن أو الربو أو حساسية الأسبرين. تسبب انسداداً تدريجياً وفقدان الشم. استئصال الزوائد بالمنظار مع علاج طبي مستمر يحقق أفضل النتائج طويلة المدى.",
    },
    symptoms: [
      { en: "Progressive nasal congestion", ar: "انسداد أنفي تدريجي" },
      { en: "Complete or partial loss of smell", ar: "فقدان كامل أو جزئي للشم" },
      { en: "Facial pressure and headache", ar: "ضغط وجهي وصداع" },
      { en: "Persistent runny nose or post-nasal drip", ar: "سيلان أنف مستمر أو تنقيط خلفي" },
      { en: "Reduced taste sensation", ar: "ضعف الإحساس بالتذوق" },
    ],
    benefits: [
      { en: "Clearer nasal passages and easier breathing", ar: "ممرات أنفية أوضح وتنفس أسهل" },
      { en: "Restored or improved sense of smell", ar: "استعادة أو تحسين حاسة الشم" },
      { en: "Reduced sinus infection frequency", ar: "تقليل تكرار التهاب الجيوب" },
      { en: "Minimally invasive endoscopic technique", ar: "تقنية منظارية طفيفة التوغل" },
    ],
    procedure: {
      en: "Endoscopic sinus surgery removes polyps and opens blocked sinus drainage pathways using a high-definition endoscope and powered microdebrider. Prof. Khairy combines surgery with topical steroid therapy to reduce recurrence.",
      ar: "جراحة الجيوب بالمنظار تزيل الزوائد وتفتح مسارات تصريف الجيوب المسدودة بمنظار عالي الدقة وجهاز تفريغ دقيق. يجمع الأستاذ الدكتور خيري الجراحة مع علاج ستيرويدي موضعي لتقليل الانتكاس.",
    },
    recovery: {
      en: "Patients typically go home the same day. Saline irrigation and nasal sprays are essential during the first weeks. Follow-up endoscopy ensures complete healing and early detection of recurrence.",
      ar: "يغادر المرضى عادة في نفس اليوم. الغسول الملحي والبخاخات الأنفية ضرورية خلال الأسابيع الأولى. المنظار في المتابعة يضمن الشفاء الكامل والكشف المبكر عن الانتكاس.",
    },
    faqs: [
      {
        question: { en: "Do nasal polyps come back after surgery?", ar: "هل تعود الزوائد الأنفية بعد الجراحة؟" },
        answer: {
          en: "Recurrence is possible, especially without ongoing medical therapy. Regular nasal steroid sprays and follow-up significantly reduce recurrence rates.",
          ar: "الانتكاس ممكن، خاصة دون علاج طبي مستمر. بخاخات الستيرويد الأنفية والمتابعة المنتظمة تقلل بشكل كبير من معدلات الانتكاس.",
        },
      },
      {
        question: { en: "Are nasal polyps cancerous?", ar: "هل الزوائد الأنفية سرطانية؟" },
        answer: {
          en: "Nasal polyps are benign inflammatory growths. However, any new unilateral polyp or bleeding mass warrants urgent evaluation to exclude rare malignant conditions.",
          ar: "الزوائد الأنفية نموات التهابية حميدة. لكن أي زائدة جديدة أحادية الجانب أو كتلة نازفة تستدعي تقييماً عاجلاً لاستبعاد حالات خبيثة نادرة.",
        },
      },
      {
        question: { en: "Can polyps be treated with medication alone?", ar: "هل يمكن علاج الزوائد بالأدوية فقط؟" },
        answer: {
          en: "Small polyps may shrink with nasal or oral corticosteroids. Larger polyps causing significant blockage usually require endoscopic removal for adequate relief.",
          ar: "قد تتقلص الزوائد الصغيرة بالكورتيكوستيرويدات الأنفية أو الفموية. الزوائد الكبيرة المسببة لانسداد كبير تتطلب عادة إزالة بالمنظار لراحة كافية.",
        },
      },
    ],
    relatedSlugs: ["sinus-surgery", "sinusitis", "nasal-obstruction"],
    relatedBlogSlugs: ["endoscopic-sinus-surgery-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "sinus-surgery",
    h1: {
      en: "Endoscopic Sinus Surgery (FESS)",
      ar: "عملية مناظير الجيوب الأنفية",
    },
    intro: {
      en: "Functional endoscopic sinus surgery (FESS) treats chronic sinus disease by restoring natural drainage and ventilation of the paranasal sinuses. Prof. Dr. Khairy performs advanced FESS using high-definition endoscopic technology.",
      ar: "جراحة الجيوب الأنفية الوظيفية بالمنظار تعالج أمراض الجيوب المزمنة باستعادة التصريف والتهوية الطبيعية للجيوب الأنفية. يجري الأستاذ الدكتور خيري FESS متقدمة بتقنية منظار عالية الدقة.",
    },
    overview: {
      en: "When medical therapy fails for chronic sinusitis, nasal polyps, or fungal sinus disease, FESS offers a minimally invasive solution. The procedure widens blocked ostia and removes diseased tissue while preserving healthy mucosa. Image-guided navigation may be used in complex cases.",
      ar: "عندما يفشل العلاج الطبي لالتهاب الجيوب المزمن أو الزوائد أو الفطريات، يقدم FESS حلاً طفيف التوغل. يوسع الإجراء الفتحات المسدودة ويزيل الأنسجة المريضة مع الحفاظ على الغشاء السليم. قد يُستخدم التوجيه بالصور في الحالات المعقدة.",
    },
    symptoms: [
      { en: "Chronic facial pain or pressure (>12 weeks)", ar: "ألم أو ضغط وجهي مزمن (أكثر من ١٢ أسبوعاً)" },
      { en: "Thick discoloured nasal discharge", ar: "إفرازات أنفية كثيفة ملونة" },
      { en: "Recurrent sinus infections despite antibiotics", ar: "التهابات جيوب متكررة رغم المضادات" },
      { en: "Nasal polyps or chronic blockage", ar: "زوائد أنفية أو انسداد مزمن" },
      { en: "Reduced smell and taste", ar: "ضعف الشم والتذوق" },
    ],
    benefits: [
      { en: "Long-term relief from chronic sinus symptoms", ar: "راحة طويلة المدى من أعراض الجيوب المزمنة" },
      { en: "No external incisions — all-internal approach", ar: "لا شقوق خارجية — نهج داخلي بالكامل" },
      { en: "Faster recovery than traditional open surgery", ar: "تعافٍ أسرع من الجراحة المفتوحة التقليدية" },
      { en: "Improved quality of life and fewer infections", ar: "جودة حياة أفضل وعدوى أقل" },
    ],
    procedure: {
      en: "Under general anaesthesia, a rigid endoscope is inserted through the nostrils to access the sinuses. Diseased bone and tissue are removed with micro-instruments. Prof. Khairy reviews CT scans pre-operatively to plan a precise, safe approach.",
      ar: "تحت تخدير عام، يُدخل منظار صلب عبر المنخرين للوصول للجيوب. تُزال العظام والأنسجة المريضة بأدوات دقيقة. يراجع الأستاذ الدكتور خيري الأشعة المقطعية قبل العملية لتخطيط نهج دقيق وآمن.",
    },
    recovery: {
      en: "Most patients are discharged within twenty-four hours. Saline nasal irrigation is critical for two to four weeks. Full recovery and symptom improvement typically occur within four to six weeks.",
      ar: "يُخرج معظم المرضى خلال أربع وعشرين ساعة. الغسول الملحي الأنفي حاسم لمدة أسبوعين إلى أربعة. التعافي الكامل وتحسن الأعراض يحدث عادة خلال أربعة إلى ستة أسابيع.",
    },
    faqs: [
      {
        question: { en: "Is FESS painful?", ar: "هل FESS مؤلم؟" },
        answer: {
          en: "Post-operative discomfort is usually mild and managed with pain medication. Nasal congestion and pressure are more common than sharp pain during recovery.",
          ar: "الانزعاج بعد العملية عادة خفيف ويُدار بمسكنات. الانسداد والضغط الأنفيان أكثر شيوعاً من الألم الحاد أثناء التعافي.",
        },
      },
      {
        question: { en: "Do I need a CT scan before sinus surgery?", ar: "هل أحتاج أشعة مقطعية قبل جراحة الجيوب؟" },
        answer: {
          en: "Yes, a CT scan of the sinuses is standard pre-operative planning to map anatomy and identify disease extent safely.",
          ar: "نعم، الأشعة المقطعية للجيوب معيارية للتخطيط قبل العملية لرسم التشريح وتحديد مدى المرض بأمان.",
        },
      },
      {
        question: { en: "Can FESS be repeated if symptoms return?", ar: "هل يمكن تكرار FESS إن عادت الأعراض؟" },
        answer: {
          en: "Revision FESS is possible but less common with proper medical follow-up. Ongoing nasal steroid therapy helps prevent recurrence after surgery.",
          ar: "FESS التصحيحي ممكن لكن أقل شيوعاً مع المتابعة الطبية السليمة. الستيرويدات الأنفية المستمرة تساعد في منع الانتكاس بعد الجراحة.",
        },
      },
    ],
    relatedSlugs: ["sinusitis", "nasal-polyps", "allergic-rhinitis"],
    relatedBlogSlugs: ["endoscopic-sinus-surgery-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "sinusitis",
    h1: {
      en: "Sinusitis Treatment",
      ar: "علاج التهاب الجيوب الأنفية",
    },
    intro: {
      en: "Sinusitis is inflammation of the paranasal sinuses causing facial pressure, nasal discharge, and reduced smell. Prof. Dr. Khairy provides comprehensive medical and surgical management for acute and chronic sinus disease.",
      ar: "التهاب الجيوب الأنفية هو التهاب في الجيوب الأنفية يسبب ضغطاً وجهياً وإفرازات أنفية وضعف الشم. يقدم الأستاذ الدكتور خيري إدارة طبية وجراحية شاملة لأمراض الجيوب الحادة والمزمنة.",
    },
    overview: {
      en: "Acute sinusitis often follows a cold and resolves with antibiotics and supportive care. Chronic sinusitis persists beyond twelve weeks and may require long-term medical therapy or FESS. Allergic rhinitis, anatomical blockage, and immune conditions are common contributing factors.",
      ar: "التهاب الجيوب الحاد يتبع غالباً نزلة برد ويتحسن بالمضادات والرعاية الداعمة. التهاب الجيوب المزمن يستمر أكثر من اثني عشر أسبوعاً وقد يتطلب علاجاً طبياً طويل المدى أو FESS. حساسية الأنف والانسداد التشريحي وحالات المناعة عوامل مساهمة شائعة.",
    },
    symptoms: [
      { en: "Facial pain or fullness around cheeks and forehead", ar: "ألم أو امتلاء وجهي حول الخدين والجبهة" },
      { en: "Thick yellow or green nasal discharge", ar: "إفرازات أنفية كثيفة صفراء أو خضراء" },
      { en: "Nasal congestion and post-nasal drip", ar: "انسداد أنفي وتنقيط خلفي" },
      { en: "Cough worse at night", ar: "سعال يزداد ليلاً" },
      { en: "Fever in acute bacterial sinusitis", ar: "حمى في التهاب الجيوب البكتيري الحاد" },
    ],
    benefits: [
      { en: "Accurate diagnosis distinguishing viral vs bacterial disease", ar: "تشخيص دقيق يميز المرض الفيروسي عن البكتيري" },
      { en: "Targeted antibiotic and steroid therapy when indicated", ar: "علاج مضادات حيوية وستيرويد موجه عند الحاجة" },
      { en: "Surgical option for chronic refractory cases", ar: "خيار جراحي للحالات المزمنة المقاومة" },
      { en: "Prevention of complications such as orbital or intracranial spread", ar: "منع مضاعفات مثل الانتشار المداري أو داخل الجمجمة" },
    ],
    procedure: {
      en: "Most cases are managed medically with nasal saline irrigation, intranasal corticosteroids, and antibiotics when bacterial infection is confirmed. Prof. Khairy recommends FESS when symptoms persist despite adequate medical therapy.",
      ar: "تُدار معظم الحالات طبياً بغسول ملحي أنفي وكورتيكوستيرويدات داخل الأنف ومضادات حيوية عند تأكيد العدوى البكتيرية. يوصي الأستاذ الدكتور خيري بـ FESS عند استمرار الأعراض رغم العلاج الطبي الكافي.",
    },
    recovery: {
      en: "Acute sinusitis typically improves within ten to fourteen days with treatment. Chronic cases require ongoing management; post-surgical recovery follows FESS protocols with saline rinses and follow-up endoscopy.",
      ar: "التهاب الجيوب الحاد يتحسن عادة خلال عشرة إلى أربعة عشر يوماً بالعلاج. الحالات المزمنة تتطلب إدارة مستمرة؛ التعافي بعد الجراحة يتبع بروتوكولات FESS مع غسول ملحي ومنظار متابعة.",
    },
    faqs: [
      {
        question: { en: "When do I need antibiotics for sinusitis?", ar: "متى أحتاج مضادات حيوية لالتهاب الجيوب؟" },
        answer: {
          en: "Antibiotics are indicated for bacterial sinusitis with symptoms lasting more than ten days, severe pain, or high fever. Viral sinusitis does not require antibiotics.",
          ar: "المضادات الحيوية مُشار إليها للتهاب الجيوب البكتيري بأعراض تستمر أكثر من عشرة أيام أو ألم شديد أو حمى عالية. التهاب الجيوب الفيروسي لا يحتاج مضادات حيوية.",
        },
      },
      {
        question: { en: "What is the difference between acute and chronic sinusitis?", ar: "ما الفرق بين التهاب الجيوب الحاد والمزمن؟" },
        answer: {
          en: "Acute sinusitis lasts less than four weeks, subacute four to twelve weeks, and chronic sinusitis persists beyond twelve weeks despite treatment.",
          ar: "التهاب الجيوب الحاد يستمر أقل من أربعة أسابيع، وتحت الحاد من أربعة إلى اثني عشر أسبوعاً، والمزمن يستمر أكثر من اثني عشر أسبوعاً رغم العلاج.",
        },
      },
      {
        question: { en: "Can allergies cause sinusitis?", ar: "هل تسبب الحساسية التهاب الجيوب؟" },
        answer: {
          en: "Yes, allergic rhinitis inflames nasal lining and blocks sinus drainage, predisposing to sinus infections. Treating allergies is an important part of sinusitis management.",
          ar: "نعم، حساسية الأنف تُلتهب بطانة الأنف وتعيق تصريف الجيوب، مما يهيئ للتهابات الجيوب. علاج الحساسية جزء مهم من إدارة التهاب الجيوب.",
        },
      },
    ],
    relatedSlugs: ["sinus-surgery", "allergic-rhinitis", "nasal-polyps"],
    relatedBlogSlugs: ["endoscopic-sinus-surgery-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "allergic-rhinitis",
    h1: {
      en: "Allergic Rhinitis Treatment",
      ar: "علاج حساسية الأنف",
    },
    intro: {
      en: "Allergic rhinitis causes sneezing, itching, congestion, and watery eyes triggered by environmental allergens. Prof. Dr. Khairy offers evidence-based medical treatment and surgical options for severe structural complications.",
      ar: "حساسية الأنف تسبب عطاساً وحكة وانسداداً وعيوناً دامعة بسبب مسببات الحساسية البيئية. يقدم الأستاذ الدكتور خيري علاجاً طبياً قائماً على الأدلة وخيارات جراحية للمضاعفات الهيكلية الشديدة.",
    },
    overview: {
      en: "Hay fever and perennial allergic rhinitis result from IgE-mediated reactions to pollen, dust mites, mould, or animal dander. First-line treatment includes allergen avoidance, antihistamines, and intranasal corticosteroids. Immunotherapy may be considered for refractory cases.",
      ar: "حمى القش والحساسية الأنفية المعتدلة ناتجة عن تفاعلات IgE مع حبوب اللقاح أو عث الغبار أو العفن أو وبر الحيوانات. العلاج الأولي يشمل تجنب المسببات ومضادات الهيستامين والكورتيكوستيرويدات الأنفية. قد يُنظر للعلاج المناعي للحالات المقاومة.",
    },
    symptoms: [
      { en: "Frequent sneezing and nasal itching", ar: "عطاس متكرر وحكة أنفية" },
      { en: "Clear watery nasal discharge", ar: "سيلان أنفي مائي صافٍ" },
      { en: "Nasal congestion, especially at night", ar: "انسداد أنفي، خاصة ليلاً" },
      { en: "Itchy, watery, or red eyes", ar: "عيون حاكية أو دامعة أو حمراء" },
      { en: "Fatigue and poor concentration", ar: "إرهاق وضعف تركيز" },
    ],
    benefits: [
      { en: "Effective symptom control with modern medications", ar: "سيطرة فعالة على الأعراض بأدوية حديثة" },
      { en: "Improved sleep and daily productivity", ar: "نوم أفضل وإنتاجية يومية أعلى" },
      { en: "Reduced risk of sinusitis and asthma exacerbation", ar: "تقليل خطر التهاب الجيوب وتفاقم الربو" },
      { en: "Personalised allergy management plan", ar: "خطة إدارة حساسية مخصصة" },
    ],
    procedure: {
      en: "Treatment begins with intranasal corticosteroid sprays and oral or topical antihistamines. Prof. Khairy may recommend turbinate reduction or septoplasty when chronic allergic inflammation causes structural blockage unresponsive to medication.",
      ar: "يبدأ العلاج ببخاخات الكورتيكوستيرويد الأنفية ومضادات الهيستامين الفموية أو الموضعية. قد يوصي الأستاذ الدكتور خيري بتصغير المحارات أو تصحيح الحاجز عندما يسبب التهاب الحساسية المزمن انسداداً هيكلياً لا يستجيب للأدوية.",
    },
    recovery: {
      en: "Medical therapy provides relief within days to weeks. Surgical adjunct procedures follow standard ENT recovery timelines. Long-term allergy management requires consistent medication and environmental control.",
      ar: "العلاج الطبي يوفر راحة خلال أيام إلى أسابيع. الإجراءات الجراحية المساعدة تتبع جداول تعافي الأنف والأذن والحنجرة المعيارية. إدارة الحساسية طويلة المدى تتطلب أدوية مستمرة وتحكم بيئي.",
    },
    faqs: [
      {
        question: { en: "What is the best nasal spray for allergies?", ar: "ما أفضل بخاخ أنفي للحساسية؟" },
        answer: {
          en: "Intranasal corticosteroid sprays such as fluticasone or mometasone are the most effective single treatment for allergic rhinitis when used consistently.",
          ar: "بخاخات الكورتيكوستيرويد الأنفية مثل فلوتيكازون أو موميتازون هي العلاج الأكثر فعالية منفرداً لحساسية الأنف عند الاستخدام المنتظم.",
        },
      },
      {
        question: { en: "Can allergic rhinitis be cured?", ar: "هل يمكن شفاء حساسية الأنف؟" },
        answer: {
          en: "Allergic rhinitis is a chronic condition but symptoms can be well controlled. Allergen immunotherapy may provide long-term remission in selected patients.",
          ar: "حساسية الأنف حالة مزمنة لكن الأعراض يمكن السيطرة عليها جيداً. العلاج المناعي للمسببات قد يوفر هدوءاً طويل المدى لمرضى مختارين.",
        },
      },
      {
        question: { en: "Is surgery necessary for allergic rhinitis?", ar: "هل الجراحة ضرورية لحساسية الأنف؟" },
        answer: {
          en: "Surgery is not a cure for allergies but helps when chronic inflammation causes turbinate enlargement or septal deviation that blocks airflow despite medical therapy.",
          ar: "الجراحة ليست شفاءً للحساسية لكنها تساعد عندما يسبب التهاب المزمن تضخم محارات أو انحراف حاجز يعيق تدفق الهواء رغم العلاج الطبي.",
        },
      },
    ],
    relatedSlugs: ["sinusitis", "nasal-obstruction", "sinus-surgery"],
    relatedBlogSlugs: ["endoscopic-sinus-surgery-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "tinnitus",
    h1: {
      en: "Tinnitus Treatment",
      ar: "علاج طنين الأذن",
    },
    intro: {
      en: "Tinnitus is the perception of ringing, buzzing, or humming in the ears without an external sound source. Prof. Dr. Khairy evaluates underlying causes and offers medical and rehabilitative management for patients in Egypt.",
      ar: "طنين الأذن هو إدراك رنين أو طنين أو همهمة في الأذنين دون مصدر صوت خارجي. يقيّم الأستاذ الدكتور خيري الأسباب الكامنة ويقدم إدارة طبية وتأهيلية للمرضى في مصر.",
    },
    overview: {
      en: "Tinnitus may arise from hearing loss, ear infections, Eustachian tube dysfunction, medications, or inner ear disorders. A thorough otologic examination and audiometry identify treatable causes. While no universal cure exists, many patients achieve significant symptom reduction.",
      ar: "قد ينشأ الطنين عن فقدان السمع أو التهابات الأذن أو خلل قناة استاكيوس أو أدوية أو اضطرابات الأذن الداخلية. فحص أذني شامل وتخطيط سمع يحددان أسباباً قابلة للعلاج. رغم عدم وجود شفاء شامل، يحقق كثير من المرضى تقليلاً كبيراً للأعراض.",
    },
    symptoms: [
      { en: "Ringing, buzzing, or hissing in one or both ears", ar: "رنين أو طنين أو صفير في أذن أو كليهما" },
      { en: "Sound perceived only by the patient", ar: "صوت يُدركه المريض وحده" },
      { en: "Worsening in quiet environments", ar: "تفاقم في البيئات الهادئة" },
      { en: "Difficulty concentrating or sleeping", ar: "صعوبة التركيز أو النوم" },
      { en: "Associated hearing loss", ar: "فقدان سمع مصاحب" },
    ],
    benefits: [
      { en: "Identification and treatment of underlying ear disease", ar: "تحديد وعلاج مرض الأذن الكامن" },
      { en: "Improved coping through sound therapy and counselling", ar: "تحسين التكيف عبر العلاج الصوتي والإرشاد" },
      { en: "Hearing aid fitting when hearing loss contributes", ar: "تركيب سماعة عندما يساهم فقدان السمع" },
      { en: "Comprehensive audiological assessment", ar: "تقييم سمعي شامل" },
    ],
    procedure: {
      en: "Evaluation includes otoscopy, audiometry, and sometimes imaging if pulsatile tinnitus is present. Prof. Khairy treats identifiable causes such as earwax impaction, middle ear effusion, or Eustachian tube dysfunction. Management may include hearing aids, sound masking, or medication.",
      ar: "يشمل التقييم تنظير الأذن وتخطيط السمع وأحياناً تصويراً عند وجود طنين نابض. يعالج الأستاذ الدكتور خيري أسباباً محددة مثل انسداد شمع الأذن أو تجمع الأذن الوسطى أو خلل قناة استاكيوس. قد تشمل الإدارة سماعات أو إخفاء صوتي أو أدوية.",
    },
    recovery: {
      en: "When a treatable cause is addressed, tinnitus often improves within weeks. Chronic tinnitus management is ongoing, with many patients reporting better quality of life through combined therapies.",
      ar: "عند معالجة سبب قابل للعلاج، يتحسن الطنين غالباً خلال أسابيع. إدارة الطنين المزمن مستمرة، وكثير من المرضى يبلغون عن جودة حياة أفضل عبر علاجات مركبة.",
    },
    faqs: [
      {
        question: { en: "Is tinnitus permanent?", ar: "هل طنين الأذن دائم؟" },
        answer: {
          en: "Not always. Tinnitus caused by earwax, infection, or temporary hearing changes often resolves with treatment. Chronic tinnitus can be managed effectively even when it persists.",
          ar: "ليس دائماً. الطنين الناتج عن شمع الأذن أو العدوى أو تغيرات سمع مؤقتة يتحسن غالباً بالعلاج. الطنين المزمن يمكن إدارته بفعالية حتى عند استمراره.",
        },
      },
      {
        question: { en: "Can loud noise cause tinnitus?", ar: "هل الضوضاء العالية تسبب طنين الأذن؟" },
        answer: {
          en: "Yes, noise-induced hearing damage is a leading cause of tinnitus. Hearing protection in loud environments is essential prevention.",
          ar: "نعم، تلف السمع الناتج عن الضوضاء سبب رئيسي للطنين. حماية السمع في البيئات الصاخبة وقاية أساسية.",
        },
      },
      {
        question: { en: "Do hearing aids help tinnitus?", ar: "هل تساعد السماعات في طنين الأذن؟" },
        answer: {
          en: "Yes, when tinnitus accompanies hearing loss, hearing aids amplify external sounds and often reduce the perceived intensity of tinnitus.",
          ar: "نعم، عندما يصاحب الطنين فقدان السمع، تضخم السماعات الأصوات الخارجية وغالباً تقلل شدة الطنين المُدرك.",
        },
      },
    ],
    relatedSlugs: ["hearing-loss", "vertigo", "ear-infection"],
    relatedBlogSlugs: ["ventilation-tubes-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "hearing-loss",
    h1: {
      en: "Hearing Loss Treatment",
      ar: "علاج ضعف السمع",
    },
    intro: {
      en: "Hearing loss affects communication, safety, and quality of life at any age. Prof. Dr. Khairy provides comprehensive audiologic evaluation and medical or surgical treatment for conductive and sensorineural hearing disorders.",
      ar: "ضعف السمع يؤثر على التواصل والسلامة وجودة الحياة في أي عمر. يقدم الأستاذ الدكتور خيري تقييماً سمعياً شاملاً وعلاجاً طبياً أو جراحياً لاضطرابات السمع التوصيلية والعصبية الحسية.",
    },
    overview: {
      en: "Hearing loss may be conductive (outer or middle ear), sensorineural (inner ear or nerve), or mixed. Common causes include ear infections, otosclerosis, noise exposure, ageing, and congenital conditions. Early diagnosis improves treatment outcomes and prevents developmental delays in children.",
      ar: "قد يكون ضعف السمع توصيلياً (أذن خارجية أو وسطى) أو عصبياً حسياً (أذن داخلية أو عصب) أو مختلطاً. الأسباب الشائعة تشمل التهابات الأذن والتلاصق العظمي والضوضاء والشيخوخة والحالات الخلقية. التشخيص المبكر يحسن نتائج العلاج ويمنع تأخر النمو عند الأطفال.",
    },
    symptoms: [
      { en: "Difficulty understanding speech, especially in noise", ar: "صعوبة فهم الكلام، خاصة في الضوضاء" },
      { en: "Asking others to repeat themselves", ar: "طلب تكرار الكلام من الآخرين" },
      { en: "Turning up television or phone volume", ar: "رفع صوت التلفزيون أو الهاتف" },
      { en: "Withdrawal from conversations", ar: "الانسحاب من المحادثات" },
      { en: "Ear fullness or discharge in conductive loss", ar: "امتلاء أو إفرازات أذنية في الضعف التوصيلي" },
    ],
    benefits: [
      { en: "Accurate diagnosis with pure-tone audiometry", ar: "تشخيص دقيق بتخطيط السمع النقي" },
      { en: "Surgical restoration for many conductive causes", ar: "استعادة جراحية لأسباب توصيلية عديدة" },
      { en: "Hearing aid and rehabilitation guidance", ar: "توجيه لسماعات وإعادة تأهيل" },
      { en: "Paediatric hearing assessment and intervention", ar: "تقييم وتدخل سمعي للأطفال" },
    ],
    procedure: {
      en: "After audiometry and otoscopic examination, Prof. Khairy recommends medical treatment, ventilation tubes, tympanoplasty, stapedectomy, or hearing aids depending on the diagnosis. Imaging is ordered when cholesteatoma or retrocochlear pathology is suspected.",
      ar: "بعد تخطيط السمع والفحص بالمنظار، يوصي الأستاذ الدكتور خيري بعلاج طبي أو أنابيب تهوية أو ترقيع طبلة أو استئصال ركابة أو سماعات حسب التشخيص. يُطلب التصوير عند الاشتباه بكوليستياتوما أو مرض ما وراء القوقعة.",
    },
    recovery: {
      en: "Medical and hearing aid interventions require no surgical recovery. Post-tympanoplasty or stapedectomy recovery takes two to four weeks before hearing stabilises. Regular audiologic follow-up tracks improvement.",
      ar: "التدخلات الطبية والسماعات لا تتطلب تعافياً جراحياً. التعافي بعد ترقيع الطبلة أو استئصال الركابة يستغرق أسبوعين إلى أربعة قبل استقرار السمع. المتابعة السمعية المنتظمة ترصد التحسن.",
    },
    faqs: [
      {
        question: { en: "Can hearing loss be reversed?", ar: "هل يمكن عكس ضعف السمع؟" },
        answer: {
          en: "Conductive hearing loss from fluid, wax, or perforation is often reversible with treatment. Sensorineural loss is usually permanent but manageable with hearing aids or cochlear implants in severe cases.",
          ar: "ضعف السمع التوصيلي من سوائل أو شمع أو ثقب غالباً قابل للعكس بالعلاج. الضعف العصبي الحسي عادة دائم لكن يُدار بسماعات أو زراعة قوقعة في الحالات الشديدة.",
        },
      },
      {
        question: { en: "When should children have hearing tested?", ar: "متى يُفحص سمع الأطفال؟" },
        answer: {
          en: "Newborn hearing screening is standard. Any child with speech delay, recurrent ear infections, or parental concern should have formal audiometry promptly.",
          ar: "فحص السمع لحديثي الولادة معياري. أي طفل بتأخر كلام أو التهابات أذن متكررة أو قلق الوالدين يجب أن يخضع لتخطيط سمع رسمي فوراً.",
        },
      },
      {
        question: { en: "What is otosclerosis?", ar: "ما هو التلاصق العظمي؟" },
        answer: {
          en: "Otosclerosis is abnormal bone growth around the stapes footplate causing conductive hearing loss. Stapedectomy surgery can restore hearing in most cases.",
          ar: "التلاصق العظمي نمو عظمي غير طبيعي حول قاعدة الركابة يسبب ضعف سمع توصيلي. جراحة استئصال الركابة تستعيد السمع في معظم الحالات.",
        },
      },
    ],
    relatedSlugs: ["ear-infection", "tinnitus", "vertigo"],
    relatedBlogSlugs: ["ventilation-tubes-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "ear-infection",
    h1: {
      en: "Ear Infection Treatment",
      ar: "علاج التهاب الأذن",
    },
    intro: {
      en: "Ear infections are among the most common reasons children and adults visit an ENT specialist. Prof. Dr. Khairy treats acute and chronic otitis media and externa with evidence-based medical and surgical care.",
      ar: "التهابات الأذن من أكثر أسباب زيارة أخصائي الأنف والأذن والحنجرة للأطفال والبالغين. يعالج الأستاذ الدكتور خيري التهاب الأذن الوسطى والخارجية الحاد والمزمن برعاية طبية وجراحية قائمة على الأدلة.",
    },
    overview: {
      en: "Otitis media affects the middle ear, often after upper respiratory infections. Otitis externa involves the ear canal, commonly from swimming or moisture. Recurrent or chronic infections may cause hearing loss, eardrum perforation, or cholesteatoma requiring surgical intervention.",
      ar: "التهاب الأذن الوسطى يصيب الأذن الوسطى، غالباً بعد التهابات الجهاز التنفسي العلوي. التهاب الأذن الخارجية يشمل قناة الأذن، شائعاً من السباحة أو الرطوبة. الالتهابات المتكررة أو المزمنة قد تسبب فقدان سمع أو ثقب طبلة أو كوليستياتوما تتطلب تدخلاً جراحياً.",
    },
    symptoms: [
      { en: "Ear pain or pulling at the ear in children", ar: "ألم أذني أو سحب الأذن عند الأطفال" },
      { en: "Ear discharge (otorrhoea)", ar: "إفرازات من الأذن" },
      { en: "Hearing difficulty or muffled hearing", ar: "صعوبة سمع أو سمع مكتوم" },
      { en: "Fever in acute otitis media", ar: "حمى في التهاب الأذن الوسطى الحاد" },
      { en: "Itching and canal swelling in otitis externa", ar: "حكة وتورم القناة في التهاب الأذن الخارجية" },
    ],
    benefits: [
      { en: "Rapid relief of pain and infection", ar: "راحة سريعة من الألم والعدوى" },
      { en: "Prevention of hearing loss and complications", ar: "منع فقدان السمع والمضاعفات" },
      { en: "Ventilation tube placement for recurrent cases", ar: "وضع أنابيب تهوية للحالات المتكررة" },
      { en: "Expert management of chronic suppurative otitis media", ar: "إدارة متخصصة لالتهاب الأذن الوسطى القيحي المزمن" },
    ],
    procedure: {
      en: "Acute infections are treated with antibiotics, analgesics, and topical drops as appropriate. Prof. Khairy performs myringotomy with ventilation tube insertion for recurrent otitis media and tympanomastoidectomy for cholesteatoma or chronic disease.",
      ar: "تُعالج الالتهابات الحادة بمضادات حيوية ومسكنات وقطرات موضعية حسب الحاجة. يجري الأستاذ الدكتور خيري شق الطبلة مع إدخال أنبوب تهوية لالتهاب الأذن الوسطى المتكرر واستئصال الطبلة والخشاء لكوليستياتوما أو المرض المزمن.",
    },
    recovery: {
      en: "Acute otitis media typically resolves within forty-eight to seventy-two hours of antibiotics. Ventilation tube procedures allow same-day discharge. Mastoid surgery recovery takes one to two weeks with ear precautions.",
      ar: "التهاب الأذن الوسطى الحاد يتحسن عادة خلال ثمانية وأربعين إلى اثنتين وسبعين ساعة من المضادات. إجراءات أنابيب التهوية تسمح بالخروج في نفس اليوم. تعافي جراحة الخشاء يستغرق أسبوعاً إلى أسبوعين مع احتياطات أذنية.",
    },
    faqs: [
      {
        question: { en: "Do all ear infections need antibiotics?", ar: "هل كل التهابات الأذن تحتاج مضادات حيوية؟" },
        answer: {
          en: "Not all cases require antibiotics. Prof. Khairy follows evidence-based guidelines, prescribing antibiotics for moderate to severe acute otitis media while observing mild cases when appropriate.",
          ar: "ليست كل الحالات تحتاج مضادات حيوية. يتبع الأستاذ الدكتور خيري إرشادات قائمة على الأدلة، ويوصف المضادات للتهاب الأذن الوسطى الحاد المتوسط إلى الشديد مع مراقبة الحالات الخفيفة عند المناسب.",
        },
      },
      {
        question: { en: "What are grommets (ventilation tubes)?", ar: "ما هي أنابيب التهوية؟" },
        answer: {
          en: "Grommets are tiny tubes placed in the eardrum to ventilate the middle ear and drain fluid. They typically extrude naturally within six to eighteen months.",
          ar: "أنابيب التهوية أنابيب صغيرة توضع في الطبلة لتهوية الأذن الوسطى وتصريف السوائل. تخرج طبيعياً عادة خلال ستة إلى ثمانية عشر شهراً.",
        },
      },
      {
        question: { en: "Can adults get ear infections?", ar: "هل يصاب البالغون بالتهاب الأذن؟" },
        answer: {
          en: "Yes, adults develop otitis media and externa, especially with Eustachian tube dysfunction, swimming, or diabetes. Chronic infections in adults warrant thorough ENT evaluation.",
          ar: "نعم، يصاب البالغون بالتهاب الأذن الوسطى والخارجية، خاصة مع خلل قناة استاكيوس أو السباحة أو السكري. الالتهابات المزمنة عند البالغين تستدعي تقييماً أنفياً وأذنياً وحنجرياً شاملاً.",
        },
      },
    ],
    relatedSlugs: ["hearing-loss", "tinnitus", "vertigo"],
    relatedBlogSlugs: ["ventilation-tubes-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "vertigo",
    h1: {
      en: "Vertigo and Dizziness Treatment",
      ar: "علاج الدوار والدوخة",
    },
    intro: {
      en: "Vertigo is a spinning sensation often caused by inner ear disorders. Prof. Dr. Khairy specialises in diagnosing and treating vestibular conditions including BPPV, Ménière's disease, and vestibular neuritis.",
      ar: "الدوار إحساس بالدوران غالباً بسبب اضطرابات الأذن الداخلية. يتخصص الأستاذ الدكتور خيري في تشخيص وعلاج حالات الاتزان بما فيها BPPV ومرض مينيير والتهاب العصب الدهليزي.",
    },
    overview: {
      en: "The vestibular system in the inner ear controls balance. When disrupted, patients experience spinning dizziness, nausea, and unsteadiness. Accurate diagnosis through history, examination, and vestibular testing guides targeted treatment ranging from repositioning manoeuvres to medication or surgery.",
      ar: "الجهاز الدهليزي في الأذن الداخلية يتحكم في التوازن. عند اضطرابه، يشعر المرضى بدوار دوار وغثيان وعدم ثبات. التشخيص الدقيق عبر التاريخ والفحص واختبارات الاتزان يوجه علاجاً مستهدفاً من مناورات إعادة التموضع إلى أدوية أو جراحة.",
    },
    symptoms: [
      { en: "Sensation of spinning or room movement", ar: "إحساس بالدوران أو تحرك الغرفة" },
      { en: "Nausea and vomiting", ar: "غثيان وقيء" },
      { en: "Unsteadiness when walking", ar: "عدم ثبات عند المشي" },
      { en: "Hearing loss or tinnitus with vertigo", ar: "فقدان سمع أو طنين مع الدوار" },
      { en: "Vertigo triggered by head movement", ar: "دوار يُثار بحركة الرأس" },
    ],
    benefits: [
      { en: "Precise diagnosis of vestibular disorder type", ar: "تشخيص دقيق لنوع اضطراب الاتزان" },
      { en: "Effective Epley manoeuvre for BPPV", ar: "مناورة إبلي فعالة لـ BPPV" },
      { en: "Medical management of Ménière's and neuritis", ar: "إدارة طبية لمينيير والتهاب العصب الدهليزي" },
      { en: "Reduced fall risk and restored daily function", ar: "تقليل خطر السقوط واستعادة الوظيفة اليومية" },
    ],
    procedure: {
      en: "BPPV is treated with canalith repositioning manoeuvres in the clinic. Ménière's disease may require dietary changes, diuretics, intratympanic injections, or vestibular surgery. Prof. Khairy performs videonystagmography and clinical tests to localise the affected ear.",
      ar: "يُعالج BPPV بمناورات إعادة تموضع الحبيبات في العيادة. مرض مينيير قد يتطلب تغييرات غذائية ومدرات بول أو حقن داخل الطبلة أو جراحة دهليزية. يجري الأستاذ الدكتور خيري تسجيل رأي العين والاختبارات السريرية لتحديد الأذن المصابة.",
    },
    recovery: {
      en: "BPPV often resolves after one to two repositioning sessions. Vestibular neuritis improves over days to weeks with vestibular rehabilitation. Ménière's disease requires long-term management with periodic follow-up.",
      ar: "BPPV يتحسن غالباً بعد جلسة إلى جلستين إعادة تموضع. التهاب العصب الدهليزي يتحسن خلال أيام إلى أسابيع مع إعادة تأهيل الاتزان. مرض مينيير يتطلب إدارة طويلة المدى مع متابعة دورية.",
    },
    faqs: [
      {
        question: { en: "What is BPPV?", ar: "ما هو BPPV؟" },
        answer: {
          en: "Benign paroxysmal positional vertigo occurs when calcium crystals dislodge into the semicircular canals, causing brief intense spinning with head movement. It is highly treatable with repositioning manoeuvres.",
          ar: "الدوار الوضعي الحميد النوبي يحدث عندما تتخلص بلورات الكالسيوم في القنوات نصف الدائرية، مسببة دوراناً شديداً قصيراً مع حركة الرأس. قابل للعلاج بدرجة عالية بمناورات إعادة التموضع.",
        },
      },
      {
        question: { en: "Is vertigo the same as dizziness?", ar: "هل الدوار نفس الدوخة؟" },
        answer: {
          en: "Vertigo specifically means a spinning sensation, while dizziness is a broader term including lightheadedness and unsteadiness. Distinguishing between them helps identify the correct cause.",
          ar: "الدوار يعني تحديداً إحساساً بالدوران، بينما الدوخة مصطلح أوسع يشمل الدوار الخفيف وعدم الثبات. التمييز بينهما يساعد في تحديد السبب الصحيح.",
        },
      },
      {
        question: { en: "When is vertigo an emergency?", ar: "متى يكون الدوار حالة طوارئ؟" },
        answer: {
          en: "Sudden vertigo with severe headache, double vision, weakness, or speech difficulty may indicate a stroke and requires immediate emergency care.",
          ar: "الدوار المفاجئ مع صداع شديد أو رؤية مزدوجة أو ضعف أو صعوبة كلام قد يشير لسكتة ويتطلب رعاية طوارئ فورية.",
        },
      },
    ],
    relatedSlugs: ["tinnitus", "hearing-loss", "ear-infection"],
    relatedBlogSlugs: ["ventilation-tubes-guide"],
    showBeforeAfterLink: false,
  },
  {
    slug: "tonsillectomy",
    h1: {
      en: "Tonsillectomy — Indications and Steps",
      ar: "استئصال اللوزتين — دواعي وخطوات",
    },
    intro: {
      en: "Tonsillectomy removes the palatine tonsils to treat recurrent infections, chronic tonsillitis, or obstructive sleep symptoms. Prof. Dr. Khairy performs tonsil surgery for children and adults using modern techniques in Cairo and Zagazig.",
      ar: "استئصال اللوزتين يزيل اللوزتين الحنكيتين لعلاج الالتهابات المتكررة أو التهاب اللوز المزمن أو أعراض انسداد النوم. يجري الأستاذ الدكتور خيري جراحة اللوز للأطفال والبالغين بتقنيات حديثة في القاهرة والزقازيق.",
    },
    overview: {
      en: "The tonsils are lymphoid tissue at the back of the throat that can become chronically infected or enlarged. Indications for surgery include seven or more strep infections per year, sleep-disordered breathing, or peritonsillar abscess history. Prof. Khairy evaluates each case against established clinical criteria.",
      ar: "اللوزتان نسيج لمفاوي في مؤخرة الحلق قد يصاب بالتهاب مزمن أو تضخم. دواعي الجراحة تشمل سبع عدوى ستربتوكوك أو أكثر سنوياً أو اضطراب تنفس النوم أو تاريخ خراج حول اللوز. يقيّم الأستاذ الدكتور خيري كل حالة وفق معايير سريرية راسخة.",
    },
    symptoms: [
      { en: "Recurrent sore throat and tonsillitis", ar: "التهاب حلق ولوز متكرر" },
      { en: "Enlarged tonsils causing airway obstruction", ar: "لوزتان متضخمتان تسببان انسداد المجرى الهوائي" },
      { en: "Difficulty swallowing solid foods", ar: "صعوبة بلع الأطعمة الصلبة" },
      { en: "Snoring and sleep apnoea in children", ar: "شخير وانقطاع نفس النوم عند الأطفال" },
      { en: "Chronic bad breath from tonsil crypts", ar: "رائحة فم كريهة مزمنة من تجاويف اللوز" },
    ],
    benefits: [
      { en: "Elimination of recurrent throat infections", ar: "القضاء على التهابات الحلق المتكررة" },
      { en: "Improved breathing and sleep quality", ar: "تحسين التنفس وجودة النوم" },
      { en: "Reduced antibiotic use long-term", ar: "تقليل استخدام المضادات طويل المدى" },
      { en: "Modern techniques minimising post-operative pain", ar: "تقنيات حديثة تقلل الألم بعد العملية" },
    ],
    procedure: {
      en: "Tonsillectomy is performed under general anaesthesia using coblation, electrocautery, or cold steel dissection. Prof. Khairy may combine adenoidectomy when adenoid hypertrophy contributes to obstruction. The procedure typically takes thirty to forty-five minutes.",
      ar: "يُجرى استئصال اللوز تحت تخدير عام باستخدام الكوبليشن أو الكي أو تشريح بالأدوات الباردة. قد يجمع الأستاذ الدكتور خيري استئصال اللحمية عندما يساهم تضخمها في الانسداد. تستغرق العملية عادة ثلاثين إلى خمس وأربعين دقيقة.",
    },
    recovery: {
      en: "Throat pain peaks around days five to seven and improves over two weeks. A soft diet and adequate hydration are essential. Most children return to school after ten to fourteen days; adults may need similar recovery time.",
      ar: "يبلغ ألم الحلق ذروته حوالي اليوم الخامس إلى السابع ويتحسن خلال أسبوعين. النظام الغذائي اللين والترطيب الكافي ضروريان. يعود معظم الأطفال للمدرسة بعد عشرة إلى أربعة عشر يوماً؛ البالغون قد يحتاجون وقتاً مماثلاً.",
    },
    faqs: [
      {
        question: { en: "At what age can tonsillectomy be performed?", ar: "في أي عمر يمكن إجراء استئصال اللوز؟" },
        answer: {
          en: "Tonsillectomy is commonly performed after age three when infections become recurrent. There is no upper age limit for appropriately indicated cases.",
          ar: "يُجرى استئصال اللوز عادة بعد سن الثالثة عندما تصبح الالتهابات متكررة. لا حد أعلى للعمر للحالات المُشار إليها بشكل مناسب.",
        },
      },
      {
        question: { en: "Does removing tonsils weaken immunity?", ar: "هل إزالة اللوز تضعف المناعة؟" },
        answer: {
          en: "Tonsils are one of many immune tissues in the body. Removing chronically diseased tonsils does not significantly impair overall immune function.",
          ar: "اللوزتان من بين أنسجة مناعية عديدة في الجسم. إزالة اللوز المريض مزنياً لا تضعف بشكل كبير الوظيفة المناعية الكلية.",
        },
      },
      {
        question: { en: "How painful is tonsillectomy in adults?", ar: "ما مدى ألم استئصال اللوز عند البالغين؟" },
        answer: {
          en: "Adult tonsillectomy is generally more painful than in children due to thicker scar tissue. Pain is managed with prescribed analgesics and typically resolves within two weeks.",
          ar: "استئصال اللوز عند البالغين عادة أكثر ألماً من الأطفال بسبب نسيج ندبي أسمك. يُدار الألم بمسكنات موصوفة ويتحسن عادة خلال أسبوعين.",
        },
      },
    ],
    relatedSlugs: ["adenoidectomy", "snoring", "sleep-apnea"],
    relatedBlogSlugs: ["child-tonsillectomy"],
    showBeforeAfterLink: false,
  },
  {
    slug: "adenoidectomy",
    h1: {
      en: "Adenoidectomy in Children",
      ar: "إزالة الغدد الأدينية عند الأطفال",
    },
    intro: {
      en: "Adenoidectomy removes enlarged adenoids that block nasal breathing and contribute to ear and sleep problems in children. Prof. Dr. Khairy frequently performs this procedure alone or combined with tonsillectomy.",
      ar: "استئصال اللحمية يزيل الغدد الأدينية المتضخمة التي تعيق التنفس الأنفي وتساهم في مشكلات الأذن والنوم عند الأطفال. يجري الأستاذ الدكتور خيري هذا الإجراء كثيراً منفرداً أو مع استئصال اللوز.",
    },
    overview: {
      en: "Adenoids are lymphoid tissue at the back of the nasal cavity that naturally shrink during adolescence. When persistently enlarged, they cause mouth breathing, snoring, recurrent ear infections, and chronic nasal discharge. Surgical removal restores nasal airflow and reduces middle ear disease.",
      ar: "اللحمية نسيج لمفاوي في مؤخرة التجويف الأنفي تتقلص طبيعياً خلال المراهقة. عند التضخم المستمر، تسبب التنفس من الفم والشخير والتهابات أذن متكررة وإفرازات أنفية مزمنة. الإزالة الجراحية تستعيد تدفق الهواء الأنفي وتقلل أمراض الأذن الوسطى.",
    },
    symptoms: [
      { en: "Chronic mouth breathing", ar: "تنفس مزمن من الفم" },
      { en: "Nasal-sounding speech (rhinolalia)", ar: "كلام أنفي الصوت" },
      { en: "Snoring and restless sleep", ar: "شخير ونوم مضطرب" },
      { en: "Recurrent otitis media or fluid in ears", ar: "التهاب أذن وسطى متكرر أو سوائل في الأذن" },
      { en: "Persistent nasal discharge", ar: "إفرازات أنفية مستمرة" },
    ],
    benefits: [
      { en: "Restored nasal breathing in children", ar: "استعادة التنفس الأنفي عند الأطفال" },
      { en: "Reduced ear infections and hearing issues", ar: "تقليل التهابات الأذن ومشكلات السمع" },
      { en: "Improved sleep and daytime behaviour", ar: "تحسين النوم والسلوك نهاراً" },
      { en: "Quick outpatient procedure under general anaesthesia", ar: "إجراء خارجي سريع تحت تخدير عام" },
    ],
    procedure: {
      en: "Adenoidectomy is performed through the mouth using a mirror and curette or powered suction device under general anaesthesia. Prof. Khairy assesses adenoid size with nasal endoscopy before surgery and combines tonsillectomy when both tissues are enlarged.",
      ar: "يُجرى استئصال اللحمية عبر الفم بمرآة وكاشطة أو جهاز شفط آلي تحت تخدير عام. يقيّم الأستاذ الدكتور خيري حجم اللحمية بمنظار أنفي قبل الجراحة ويجمع استئصال اللوز عند تضخم كلا النسيجين.",
    },
    recovery: {
      en: "Recovery is typically faster than tonsillectomy alone, with mild throat discomfort for three to five days. Children resume normal diet and activity within one week. Nasal breathing improvement is often noticeable within days.",
      ar: "التعافي عادة أسرع من استئصال اللوز وحده، مع انزعاج حلق خفيف لثلاثة إلى خمسة أيام. يستأنف الأطفال النظام الغذائي والنشاط خلال أسبوع. تحسن التنفس الأنفي غالباً ملحوظ خلال أيام.",
    },
    faqs: [
      {
        question: { en: "At what age are adenoids removed?", ar: "في أي عمر تُزال اللحمية؟" },
        answer: {
          en: "Adenoidectomy is most common between ages two and seven when enlargement causes symptoms. The procedure is considered when medical management fails.",
          ar: "استئصال اللحمية الأكثر شيوعاً بين سنين وسبع سنوات عندما يسبب التضخم أعراضاً. يُنظر للإجراء عند فشل الإدارة الطبية.",
        },
      },
      {
        question: { en: "Will adenoids grow back?", ar: "هل تنمو اللحمية مرة أخرى؟" },
        answer: {
          en: "Regrowth is uncommon after complete adenoidectomy. Residual tissue may regrow in a small percentage of cases, occasionally requiring revision.",
          ar: "إعادة النمو نادرة بعد استئصال اللحمية الكامل. قد ينمو نسيج متبقي في نسبة صغيرة من الحالات، وأحياناً يتطلب تصحيحاً.",
        },
      },
      {
        question: { en: "Is adenoidectomy always done with tonsillectomy?", ar: "هل يُجرى استئصال اللحمية دائماً مع اللوز؟" },
        answer: {
          en: "Not always. Prof. Khairy recommends combined surgery when both tonsils and adenoids are enlarged, but adenoidectomy alone is appropriate when only adenoid hypertrophy causes symptoms.",
          ar: "ليس دائماً. يوصي الأستاذ الدكتور خيري بالجراحة المركبة عند تضخم اللوز واللحمية معاً، لكن استئصال اللحمية وحده مناسب عندما يسبب تضخم اللحمية فقط الأعراض.",
        },
      },
    ],
    relatedSlugs: ["tonsillectomy", "snoring", "ear-infection"],
    relatedBlogSlugs: ["child-tonsillectomy", "ventilation-tubes-guide", "adenoids-affect-hearing"],
    showBeforeAfterLink: false,
  },
  {
    slug: "hoarseness",
    h1: {
      en: "Hoarseness and Laryngitis Treatment",
      ar: "علاج بحة الصوت والتهاب الحنجرة",
    },
    intro: {
      en: "Hoarseness is a change in voice quality often caused by laryngeal inflammation, vocal cord lesions, or voice misuse. Prof. Dr. Khairy evaluates voice disorders with laryngoscopy and provides medical and surgical treatment.",
      ar: "بحة الصوت تغير في جودة الصوت غالباً بسبب التهاب الحنجرة أو آفات الحبال الصوتية أو إساءة استخدام الصوت. يقيّم الأستاذ الدكتور خيري اضطرابات الصوت بتنظير الحنجرة ويقدم علاجاً طبياً وجراحياً.",
    },
    overview: {
      en: "Acute laryngitis from viral infection typically resolves with voice rest and hydration. Persistent hoarseness beyond three weeks requires laryngoscopic examination to exclude vocal cord nodules, polyps, cysts, or rarely malignancy. Prof. Khairy uses flexible or rigid laryngoscopy for detailed vocal cord assessment.",
      ar: "التهاب الحنجرة الحاد من عدوى فيروسية يتحسن عادة براحة الصوت والترطيب. البحة المستمرة أكثر من ثلاثة أسابيع تتطلب فحصاً بتنظير الحنجرة لاستبعاد عقيدات أو زوائد أو أكياس حبال صوتية أو نادراً سرطان. يستخدم الأستاذ الدكتور خيري تنظير حنجرة مرناً أو صلباً لتقييم مفصل للحبال الصوتية.",
    },
    symptoms: [
      { en: "Raspy, breathy, or strained voice", ar: "صوت أجش أو نفاث أو متوتر" },
      { en: "Voice fatigue after speaking", ar: "إرهاق صوتي بعد الكلام" },
      { en: "Reduced vocal range", ar: "تقلص المدى الصوتي" },
      { en: "Throat clearing or discomfort", ar: "تنحنح أو انزعاج حلقي" },
      { en: "Pain when speaking in acute laryngitis", ar: "ألم عند الكلام في التهاب الحنجرة الحاد" },
    ],
    benefits: [
      { en: "Early detection of vocal cord pathology", ar: "كشف مبكر لأمراض الحبال الصوتية" },
      { en: "Voice rest and therapy guidance", ar: "توجيه لراحة الصوت والعلاج" },
      { en: "Microlaryngeal surgery for nodules and polyps", ar: "جراحة مجهرية حنجرة للعقيدات والزوائد" },
      { en: "Restored professional and daily voice function", ar: "استعادة وظيفة الصوت المهنية واليومية" },
    ],
    procedure: {
      en: "Initial management includes voice rest, hydration, and treating reflux or allergy if present. Prof. Khairy performs microlaryngeal surgery under microscopy for vocal cord nodules, polyps, or cysts that do not respond to conservative therapy.",
      ar: "تشمل الإدارة الأولية راحة الصوت والترطيب وعلاج الارتجاع أو الحساسية إن وُجدت. يجري الأستاذ الدكتور خيري جراحة مجهرية حنجرة تحت المجهر للعقيدات أو الزوائد أو الأكياس الحبالية التي لا تستجيب للعلاج المحافظ.",
    },
    recovery: {
      en: "Acute laryngitis improves within one to two weeks with voice rest. Post-microlaryngeal surgery requires strict voice rest for one week followed by gradual voice rehabilitation over several weeks.",
      ar: "التهاب الحنجرة الحاد يتحسن خلال أسبوع إلى أسبوعين مع راحة الصوت. بعد الجراحة المجهرية الحنجرة تتطلب راحة صوت صارمة لأسبوع ثم إعادة تأهيل صوتي تدريجي خلال عدة أسابيع.",
    },
    faqs: [
      {
        question: { en: "When should I see a doctor for hoarseness?", ar: "متى أراجع طبيباً للبحة؟" },
        answer: {
          en: "Hoarseness lasting more than three weeks, accompanied by difficulty swallowing, ear pain, or weight loss warrants urgent laryngoscopic evaluation.",
          ar: "البحة المستمرة أكثر من ثلاثة أسابيع، المصحوبة بصعوبة بلع أو ألم أذني أو فقدان وزن، تستدعي تقييماً عاجلاً بتنظير الحنجرة.",
        },
      },
      {
        question: { en: "Can acid reflux cause hoarseness?", ar: "هل يسبب ارتجاع المريء بحة الصوت؟" },
        answer: {
          en: "Laryngopharyngeal reflux is a common cause of chronic hoarseness. Stomach acid irritating the larynx can cause voice changes without typical heartburn symptoms.",
          ar: "ارتجاع البلعوم الحنجري سبب شائع للبحة المزمنة. حمض المعدة المهيج للحنجرة قد يسبب تغيرات صوتية دون أعراض حرقة معتادة.",
        },
      },
      {
        question: { en: "What are vocal cord nodules?", ar: "ما هي العقيدات الحبالية؟" },
        answer: {
          en: "Vocal cord nodules are callous-like growths from voice overuse, common in teachers and singers. They often improve with voice therapy; surgery is reserved for persistent cases.",
          ar: "العقيدات الحبالية نتوءات شبيهة بالجلد الصلب من إفراط استخدام الصوت، شائعة عند المعلمين والمغنين. تتحسن غالباً بعلاج الصوت؛ الجراحة محجوزة للحالات المستمرة.",
        },
      },
    ],
    relatedSlugs: ["swallowing-disorders", "tonsillectomy"],
    relatedBlogSlugs: ["child-tonsillectomy"],
    showBeforeAfterLink: false,
  },
  {
    slug: "swallowing-disorders",
    h1: {
      en: "Swallowing Disorders Treatment",
      ar: "علاج صعوبة البلع",
    },
    intro: {
      en: "Swallowing disorders (dysphagia) affect the ability to move food and liquid safely from mouth to stomach. Prof. Dr. Khairy diagnoses and treats oropharyngeal and oesophageal causes of dysphagia in adults.",
      ar: "اضطرابات البلع (عسر البلع) تؤثر على القدرة على نقل الطعام والسوائل بأمان من الفم للمعدة. يشخص الأستاذ الدكتور خيري ويعالج أسباب عسر البلع البلعومية والمريئية عند البالغين.",
    },
    overview: {
      en: "Dysphagia may result from neurological conditions, post-surgical scarring, reflux, or structural lesions in the throat or oesophagus. Evaluation includes fibreoptic endoscopic evaluation of swallowing (FEES) and referral for imaging or GI evaluation when needed. Early assessment prevents aspiration pneumonia.",
      ar: "قد ينشأ عسر البلع عن حالات عصبية أو ندوب بعد الجراحة أو ارتجاع أو آفات هيكلية في الحلق أو المريء. يشمل التقييم تنظير بلع بألياف بصرية وإحالة للتصوير أو تقييم جهاز هضمي عند الحاجة. التقييم المبكر يمنع ذات الرئة الاستنشاقية.",
    },
    symptoms: [
      { en: "Coughing or choking when eating or drinking", ar: "سعال أو اختناق عند الأكل أو الشرب" },
      { en: "Sensation of food stuck in throat", ar: "إحساس بعالق طعام في الحلق" },
      { en: "Drooling or difficulty managing saliva", ar: "سيلان لعاب أو صعوبة التحكم باللعاب" },
      { en: "Weight loss from reduced oral intake", ar: "فقدان وزن من قلة التناول الفموي" },
      { en: "Recurrent chest infections from aspiration", ar: "التهابات صدرية متكررة من الاستنشاق" },
    ],
    benefits: [
      { en: "Identification of aspiration risk", ar: "تحديد خطر الاستنشاق" },
      { en: "Targeted treatment of structural throat lesions", ar: "علاج مستهدف لآفات الحلق الهيكلية" },
      { en: "Coordination with speech therapy and diet modification", ar: "تنسيق مع علاج النطق وتعديل النظام الغذائي" },
      { en: "Prevention of malnutrition and pneumonia", ar: "منع سوء التغذية والالتهاب الرئوي" },
    ],
    procedure: {
      en: "Prof. Khairy performs laryngoscopy and FEES to assess swallowing mechanics. Surgical options include dilatation of oesophageal strictures, removal of Zenker's diverticulum, or treatment of laryngeal pathology. Multidisciplinary referral ensures comprehensive care.",
      ar: "يجري الأستاذ الدكتور خيري تنظير الحنجرة وFEES لتقييم آلية البلع. الخيارات الجراحية تشمل توسيع تضيقات المريء أو إزالة زينكر أو علاج أمراض الحنجرة. الإحالة متعددة التخصصات تضمن رعاية شاملة.",
    },
    recovery: {
      en: "Recovery depends on the underlying cause. Post-dilatation patients resume soft diet within days. Neurological dysphagia requires ongoing swallowing therapy and dietary modifications with regular reassessment.",
      ar: "التعافي يعتمد على السبب الكامن. مرضى ما بعد التوسيع يستأنفون نظاماً غذائياً ليناً خلال أيام. عسر البلع العصبي يتطلب علاج بلع مستمر وتعديلات غذائية مع إعادة تقييم منتظمة.",
    },
    faqs: [
      {
        question: { en: "What is aspiration?", ar: "ما هو الاستنشاق؟" },
        answer: {
          en: "Aspiration occurs when food or liquid enters the airway instead of the oesophagus, potentially causing pneumonia. It is a serious complication of untreated dysphagia.",
          ar: "الاستنشاق يحدث عندما يدخل الطعام أو السائل للمجرى الهوائي بدل المريء، مما قد يسبب ذات رئة. مضاعفة خطيرة لعسر البلع غير المعالج.",
        },
      },
      {
        question: { en: "Can GERD cause swallowing problems?", ar: "هل يسبب ارتجاع المريء مشاكل بلع؟" },
        answer: {
          en: "Yes, chronic acid reflux can cause oesophageal inflammation and strictures that narrow the passage. Anti-reflux medication and sometimes dilatation improve swallowing.",
          ar: "نعم، ارتجاع الحمض المزمن قد يسبب التهاب مريئي وتضيقات تضيق الممر. أدوية مضادة للارتجاع وأحياناً التوسيع يحسنان البلع.",
        },
      },
      {
        question: { en: "What is FEES?", ar: "ما هو FEES؟" },
        answer: {
          en: "Fibreoptic Endoscopic Evaluation of Swallowing uses a thin camera to observe the throat during swallowing, identifying aspiration and residue without radiation exposure.",
          ar: "تقييم البلع التنظيري بالألياف يستخدم كاميرا رفيعة لمراقبة الحلق أثناء البلع، محدداً الاستنشاق والبقايا دون تعرض للإشعاع.",
        },
      },
    ],
    relatedSlugs: ["hoarseness", "tonsillectomy"],
    relatedBlogSlugs: ["child-tonsillectomy"],
    showBeforeAfterLink: false,
  },
  {
    slug: "snoring",
    h1: {
      en: "Surgical and Non-Surgical Snoring Treatment",
      ar: "علاج الشخير جراحياً وغير جراحياً",
    },
    intro: {
      en: "Snoring affects sleep quality for both the patient and their partner and may signal underlying airway obstruction. Prof. Dr. Khairy offers comprehensive evaluation and multimodal snoring treatment in Egypt.",
      ar: "الشخير يؤثر على جودة نوم المريض وشريكه وقد يشير لانسداد مجرى هوائي كامن. يقدم الأستاذ الدكتور خيري تقييماً شاملاً وعلاجاً متعدد الوسائل للشخير في مصر.",
    },
    overview: {
      en: "Snoring results from vibration of relaxed tissues in the nose, palate, or tongue base during sleep. Causes include nasal obstruction, elongated uvula, floppy palate, and tongue base enlargement. Treatment ranges from lifestyle changes and nasal surgery to palate procedures.",
      ar: "ينتج الشخير من اهتزاز الأنسجة المرتخية في الأنف أو الحنك أو قاعدة اللسان أثناء النوم. الأسباب تشمل انسداد الأنف واللهاة المطولة والحنك الرخو وتضخم قاعدة اللسان. يتراوح العلاج من تغييرات نمط الحياة وجراحة الأنف إلى إجراءات الحنك.",
    },
    symptoms: [
      { en: "Loud habitual snoring every night", ar: "شخير عالٍ ومتكرر كل ليلة" },
      { en: "Partner disturbed by snoring noise", ar: "إزعاج الشريك بضوضاء الشخير" },
      { en: "Dry mouth on waking", ar: "جفاف الفم عند الاستيقاظ" },
      { en: "Daytime fatigue despite adequate sleep hours", ar: "إرهاق نهاري رغم ساعات نوم كافية" },
      { en: "Gasping or choking sounds during sleep", ar: "أصوات شهيق أو اختناق أثناء النوم" },
    ],
    benefits: [
      { en: "Quieter sleep for patient and family", ar: "نوم أكثر هدوءاً للمريض والعائلة" },
      { en: "Identification of co-existing sleep apnoea", ar: "تحديد انقطاع النوم المصاحب" },
      { en: "Nasal and palatal surgical options", ar: "خيارات جراحية أنفية وحنكية" },
      { en: "Improved daytime alertness and energy", ar: "تحسين اليقظة والطاقة نهاراً" },
    ],
    procedure: {
      en: "Evaluation includes nasal endoscopy and sleep history assessment. Prof. Khairy treats nasal causes with septoplasty or turbinate reduction and palatal snoring with uvulopalatopharyngoplasty (UPPP) or radiofrequency. A sleep study is recommended when apnoea is suspected.",
      ar: "يشمل التقييم منظاراً أنفياً وتقييم تاريخ النوم. يعالج الأستاذ الدكتور خيري أسباب الأنف بتصحيح الحاجز أو تصغير المحارات وشخير الحنك بـ UPPP أو التردد. يُوصى بدراسة نوم عند الاشتباه بانقطاع النفس.",
    },
    recovery: {
      en: "Nasal procedures recover within one to two weeks. UPPP causes throat discomfort for ten to fourteen days with a soft diet. Snoring improvement is often noticeable within weeks of nasal surgery.",
      ar: "إجراءات الأنف تتعافى خلال أسبوع إلى أسبوعين. UPPP يسبب انزعاج حلقي لعشرة إلى أربعة عشر يوماً مع نظام غذائي لين. تحسن الشخير غالباً ملحوظ خلال أسابيع من جراحة الأنف.",
    },
    faqs: [
      {
        question: { en: "Is snoring always sleep apnoea?", ar: "هل الشخير دائماً انقطاع نفس النوم؟" },
        answer: {
          en: "No, primary snoring occurs without breathing pauses or oxygen drops. However, loud snoring warrants evaluation to exclude obstructive sleep apnoea.",
          ar: "لا، الشخير الأولي يحدث دون توقف تنفس أو انخفاض أكسجين. لكن الشخير العالي يستدعي تقييماً لاستبعاد انقطاع النفس الانسدادي أثناء النوم.",
        },
      },
      {
        question: { en: "Can losing weight reduce snoring?", ar: "هل فقدان الوزن يقلل الشخير؟" },
        answer: {
          en: "Yes, weight loss reduces fatty tissue around the airway and is an effective first step for overweight snorers, though structural causes may still need surgical treatment.",
          ar: "نعم، فقدان الوزن يقلل الأنسجة الدهنية حول المجرى الهوائي وخطوة أولى فعالة لمن يعانون من زيادة الوزن، رغم أن الأسباب الهيكلية قد تتطلب علاجاً جراحياً.",
        },
      },
      {
        question: { en: "What is UPPP?", ar: "ما هو UPPP؟" },
        answer: {
          en: "Uvulopalatopharyngoplasty trims the uvula and redundant palate tissue to widen the airway. It is effective for palatal snoring and mild to moderate sleep apnoea.",
          ar: "استئصال اللهاة والبلعوم والحنك يقلم اللهاة وأنسجة الحنك الزائدة لتوسيع المجرى الهوائي. فعال للشخير الحنكي وانقطاع النفس الخفيف إلى المتوسط.",
        },
      },
    ],
    relatedSlugs: ["sleep-apnea", "nasal-obstruction", "septoplasty"],
    relatedBlogSlugs: ["snoring-vs-sleep-apnea", "deviated-septum-signs", "is-snoring-dangerous"],
    showBeforeAfterLink: false,
  },
  {
    slug: "sleep-apnea",
    h1: {
      en: "Sleep Apnea Treatment",
      ar: "علاج توقف التنفس أثناء النوم",
    },
    intro: {
      en: "Obstructive sleep apnoea (OSA) causes repeated breathing pauses during sleep, leading to serious health risks. Prof. Dr. Khairy provides comprehensive diagnosis and surgical or CPAP-guided treatment for sleep apnoea patients.",
      ar: "انقطاع النفس الانسدادي أثناء النوم يسبب توقفات تنفس متكررة أثناء النوم، مما يؤدي لمخاطر صحية خطيرة. يقدم الأستاذ الدكتور خيري تشخيصاً شاملاً وعلاجاً جراحياً أو موجهاً بـ CPAP لمرضى انقطاع النفس النومي.",
    },
    overview: {
      en: "OSA occurs when throat muscles relax and collapse the airway during sleep, causing oxygen desaturation and sleep fragmentation. Risk factors include obesity, nasal obstruction, enlarged tonsils, and retrognathia. Untreated OSA increases risk of hypertension, heart disease, stroke, and daytime accidents.",
      ar: "يحدث انقطاع النفس الانسدادي عندما ترتخي عضلات الحلق وتنهار المجرى الهوائي أثناء النوم، مسببة انخفاض الأكسجين وتفتت النوم. عوامل الخطر تشمل السمنة وانسداد الأنف وتضخم اللوز وصغر الفك السفلي. انقطاع النفس غير المعالج يزيد خطر ارتفاع الضغط وأمراض القلب والسكتة والحوادث نهاراً.",
    },
    symptoms: [
      { en: "Witnessed breathing pauses during sleep", ar: "توقف تنفس ملحوظ أثناء النوم" },
      { en: "Loud snoring with gasping arousals", ar: "شخير عالٍ مع استيقاظ بشهيق" },
      { en: "Excessive daytime sleepiness", ar: "نعاس نهاري مفرط" },
      { en: "Morning headaches", ar: "صداع صباحي" },
      { en: "Difficulty concentrating and irritability", ar: "صعوبة التركيز والتهيج" },
    ],
    benefits: [
      { en: "Reduced cardiovascular and stroke risk", ar: "تقليل خطر القلب والأوعية والسكتة" },
      { en: "Improved energy, mood, and cognitive function", ar: "تحسين الطاقة والمزاج والوظيفة الإدراكية" },
      { en: "Surgical and CPAP treatment options", ar: "خيارات علاج جراحية وCPAP" },
      { en: "Multidisciplinary sleep study coordination", ar: "تنسيق دراسة نوم متعددة التخصصات" },
    ],
    procedure: {
      en: "Diagnosis begins with polysomnography (sleep study) to measure apnoea severity. Prof. Khairy recommends CPAP for moderate to severe OSA and considers UPPP, nasal surgery, or tongue base reduction for anatomical obstruction when CPAP is not tolerated.",
      ar: "يبدأ التشخيص بتخطيط النوم (دراسة النوم) لقياس شدة انقطاع النفس. يوصي الأستاذ الدكتور خيري بـ CPAP للانقطاع المتوسط إلى الشديد وينظر لـ UPPP أو جراحة الأنف أو تصغير قاعدة اللسان للانسداد التشريحي عند عدم تحمل CPAP.",
    },
    recovery: {
      en: "CPAP provides immediate benefit without surgical recovery. Surgical recovery varies by procedure — nasal surgery two weeks, UPPP two to three weeks. Sleep study follow-up confirms treatment effectiveness.",
      ar: "CPAP يوفر فائدة فورية دون تعافٍ جراحي. التعافي الجراحي يختلف حسب الإجراء — جراحة الأنف أسبوعان، UPPP أسبوعان إلى ثلاثة. متابعة دراسة النوم تؤكد فعالية العلاج.",
    },
    faqs: [
      {
        question: { en: "What is CPAP?", ar: "ما هو CPAP؟" },
        answer: {
          en: "Continuous Positive Airway Pressure delivers pressurised air through a mask to keep the airway open during sleep. It is the gold standard treatment for moderate to severe OSA.",
          ar: "الضغط الهوائي الإيجابي المستمر يوصل هواء مضغوطاً عبر قناع لإبقاء المجرى الهوائي مفتوحاً أثناء النوم. العلاج المعياري الذهبي للانقطاع المتوسط إلى الشديد.",
        },
      },
      {
        question: { en: "Can sleep apnoea be cured with surgery?", ar: "هل يمكن شفاء انقطاع النفس بالجراحة؟" },
        answer: {
          en: "Surgery can significantly reduce apnoea events in selected patients with clear anatomical obstruction. Success depends on obstruction site, body weight, and apnoea severity.",
          ar: "الجراحة قد تقلل بشكل كبير نوبات الانقطاع لمرضى مختارين بانسداد تشريحي واضح. النجاح يعتمد على موقع الانسداد والوزن وشدة الانقطاع.",
        },
      },
      {
        question: { en: "Is sleep apnoea dangerous?", ar: "هل انقطاع النفس النومي خطير؟" },
        answer: {
          en: "Yes, untreated OSA significantly increases risk of high blood pressure, heart attack, stroke, diabetes, and motor vehicle accidents from daytime sleepiness.",
          ar: "نعم، انقطاع النفس غير المعالج يزيد بشكل كبير خطر ارتفاع الضغط والنوبة القلبية والسكتة والسكري وحوادث المركبات من النعاس النهاري.",
        },
      },
    ],
    relatedSlugs: ["snoring", "nasal-obstruction", "tonsillectomy"],
    relatedBlogSlugs: ["snoring-vs-sleep-apnea"],
    showBeforeAfterLink: false,
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export const serviceSlugs: string[] = servicePages.map((p) => p.slug);
