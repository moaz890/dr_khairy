import type { EnrichedMap } from "./types";

const cta = {
  en: "Prof. Dr. Mohammed Rabea Khairy specialises in endoscopic sinus surgery and medical sinus care in New Cairo and Zagazig. Contact us via WhatsApp for evaluation.",
  ar: "يتخصص أ.د. محمد ربيع خيري في جراحة الجيوب بالمنظار والعلاج الدوائي في التجمع الخامس والزقازيق. تواصل عبر واتساب للتقييم.",
};

export const sinusitisEnrichment: EnrichedMap = {
  "chronic-sinusitis-symptoms": {
    excerpt: {
      en: "Chronic sinusitis lasts 12+ weeks with facial pressure, discoloured drainage, and reduced smell. Recognise symptoms early for proper treatment.",
      ar: "التهاب الجيوب المزمن يستمر ١٢+ أسبوعاً مع ضغط وجهي وإفرازات ملونة وضعف شم. تعرّف الأعراض مبكراً للعلاج السليم.",
    },
    body: [
      {
        en: "Symptoms include nasal congestion, thick post-nasal drip, headache, fatigue, cough, and reduced sense of smell. Bad breath and dental pain may occur.",
        ar: "تشمل الأعراض احتقان الأنف وإفرازات خلفية لزجة وصداعاً وإرهاقاً وسعالاً وضعف الشم. قد يحدث رائحة فم كريهة وألم أسنان.",
      },
      {
        en: "Triggers include allergy, anatomical blockage, immune issues, or previous infections. CT scan confirms which sinuses are involved.",
        ar: "المحفزات تشمل الحساسية والانسداد التشريحي ومشاكل مناعة أو عدوى سابقة. الأشعة المقطعية تؤكد الجيوب المتأثرة.",
      },
      {
        en: "Long-term nasal steroids, saline irrigation, and treating allergy form the medical backbone. Antibiotics are used selectively when bacterial infection is proven.",
        ar: "ستيرويدات أنفية طويلة وغسول ملحي وعلاج الحساسية عمود العلاج الدوائي. المضادات تُستخدم انتقائياً عند ثبوت عدوى بكتيرية.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "nasal-polyps-causes": {
    excerpt: {
      en: "Nasal polyps are soft growths that block sinuses and reduce smell. Learn causes, medical treatment, and when surgery is needed.",
      ar: "الزوائد الأنفية نموات رخوة تسد الجيوب وتقلل الشم. تعرّف الأسباب والعلاج الدوائي ومتى تُحتاج الجراحة.",
    },
    body: [
      {
        en: "Polyps often link to allergy, asthma, aspirin sensitivity, or chronic inflammation. They appear as pale, grape-like masses on endoscopy.",
        ar: "ترتبط الزوائد غالباً بالحساسية والربو وحساسية الأسبرين أو الالتهاب المزمن. تظهر ككتل شاحبة شبيهة بالعنب في المنظار.",
      },
      {
        en: "Intranasal steroids and short oral steroid bursts shrink polyps. Biologic therapies are emerging for severe polyp disease resistant to standard care.",
        ar: "الستيرويدات الأنفية وجرعات ستيرويد فموية قصيرة تصغّر الزوائد. العلاجات البيولوجية تظهر لحالات زوائد شديدة مقاومة للعلاج المعتاد.",
      },
      {
        en: "FESS removes polyps and opens sinus drainage pathways. Recurrence is possible — long-term spray maintenance reduces relapse rates.",
        ar: "FESS يزيل الزوائد ويفتح مسارات تصريف الجيوب. النكس ممكن — الصيانة بالبخاخات طويلة المدى تقلل الانتكاس.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "sinus-headache-vs-normal": {
    excerpt: {
      en: "Sinus headache feels like pressure around the cheeks and forehead — but not every headache is sinus-related. Learn how to tell the difference.",
      ar: "صداع الجيوب يشبه ضغطاً حول الخدين والجبهة — لكن ليس كل صداع مرتبطاً بالجيوب. تعرّف كيف تميز الفرق.",
    },
    body: [
      {
        en: "True sinus headache accompanies purulent nasal discharge, facial tenderness, fever, and worsening with bending forward. It often follows a cold that does not improve.",
        ar: "صداع الجيوب الحقيقي يصاحبه إفرازات أنفية صديدية وألم وجهي وحمى وسوء عند الانحناء. غالباً يتبع برداً لا يتحسن.",
      },
      {
        en: "Migraine and tension headaches are frequently mislabelled as sinus pain. Migraine may cause nasal congestion without infection — treating infection will not help.",
        ar: "الصداع النصفي والتوتر يُصنّفان خطأ كألم جيوب. الصداع النصفي قد يسبب احتقاناً دون عدوى — علاج العدوى لن يفيد.",
      },
      {
        en: "If symptoms persist beyond 10 days with coloured mucus and facial pain, ENT review and imaging clarify the diagnosis.",
        ar: "إن استمرت الأعراض أكثر من ١٠ أيام مع مخاط ملون وألم وجهي، مراجعة ENT والتصوير يوضحان التشخيص.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "when-sinus-surgery-needed": {
    excerpt: {
      en: "Sinus surgery is considered when medical therapy fails for chronic or recurrent sinusitis. Understand the criteria and what FESS achieves.",
      ar: "تُفكر جراحة الجيوب عند فشل العلاج الدوائي للتهاب مزمن أو متكرر. افهم المعايير وما تحققه FESS.",
    },
    body: [
      {
        en: "Indications include chronic sinusitis despite 3+ months of appropriate medical care, nasal polyps, fungal sinus disease, or complications like mucocele.",
        ar: "المؤشرات تشمل التهاب جيوب مزمن رغم ٣+ أشهر علاج مناسب، وزوائد أنفية، أو مرض فطري، أو مضاعفات مثل مخويلة.",
      },
      {
        en: "FESS widens natural ostia and removes diseased tissue under endoscopic guidance — no facial scars. It restores ventilation and allows sprays to reach sinuses.",
        ar: "FESS يوسع الفتحات الطبيعية ويزيل الأنسجة المريضة بتوجيه منظاري — دون ندوب وجهية. يعيد التهوية ويسمح للبخاخات بالوصول للجيوب.",
      },
      {
        en: "Balloon sinuplasty suits selected cases with isolated ostial narrowing. Your surgeon matches technique to CT anatomy.",
        ar: "توسيع الجيوب بالبالون يناسب حالات مختارة بضيق معزول في الفتحة. يطابق جراحك التقنية لتشريح الأشعة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 9,
  },
  "sinusitis-smell-recovery": {
    excerpt: {
      en: "Loss of smell with sinusitis is distressing but often reversible. Learn why it happens and how treatment — medical or surgical — restores olfaction.",
      ar: "فقدان الشم مع التهاب الجيوب مزعج لكنه غالباً قابل للعكس. تعرّف السبب وكيف يعيد العلاج الدوائي أو الجراحي الشم.",
    },
    body: [
      {
        en: "Inflammation and polyps block odor molecules from reaching olfactory receptors at the skull base. Chronic obstruction can dull smell over time.",
        ar: "الالتهاب والزوائد تحجب جزيئات الرائحة عن مستقبلات الشم عند قاعدة الجمجمة. الانسداد المزمن قد يخفف الشم مع الوقت.",
      },
      {
        en: "Treating infection, reducing polyps with steroids, and opening sinuses surgically often improve smell within weeks to months.",
        ar: "علاج العدوى وتصغير الزوائد بالستيرويدات وفتح الجيوب جراحياً غالباً يحسّن الشم خلال أسابيع إلى أشهر.",
      },
      {
        en: "Persistent anosmia after prolonged disease warrants specialist smell testing and MRI to exclude other causes.",
        ar: "انعدام الشم المستمر بعد مرض طويل يستدعي فحص شم متخصص ورنيناً لاستبعاد أسباب أخرى.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "allergic-rhinitis-surgery-vs-medical": {
    excerpt: {
      en: "Allergic rhinitis is primarily medical — but surgery helps when anatomy blocks sprays from working. Compare roles of allergy care and ENT surgery.",
      ar: "التهاب الأنف التحسسي علاجه أساساً دوائي — لكن الجراحة تفيد عندما يمنع التشريح البخاخات من العمل. قارن دور رعاية الحساسية وجراحة ENT.",
    },
    body: [
      {
        en: "Antihistamines, nasal steroids, allergen avoidance, and immunotherapy control most allergic rhinitis. Surgery does not cure allergy itself.",
        ar: "مضادات الهيستامين والستيرويدات الأنفية وتجنب المسببات والعلاج المناعي يتحكم في معظم التهاب الأنف التحسسي. الجراحة لا تشفي الحساسية ذاتها.",
      },
      {
        en: "Septal deviation, polyps, or turbinate hypertrophy prevent sprays reaching the nose — correcting anatomy improves medical effectiveness.",
        ar: "انحراف الحاجز أو الزوائد أو تضخم الحطم يمنع البخاخات من الوصول — تصحيح التشريح يحسّن فعالية العلاج الدوائي.",
      },
      {
        en: "Combined allergy management plus targeted surgery delivers the best long-term relief for patients with mixed allergic and structural disease.",
        ar: "إدارة الحساسية مع جراحة موجهة تقدم أفضل راحة طويلة المدى لمرضى المرض التحسسي والهيكلي المختلط.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "acute-vs-chronic-sinusitis": {
    excerpt: {
      en: "Acute sinusitis lasts up to 4 weeks; chronic persists 12+ weeks. Different timelines mean different treatments — antibiotics are not always needed.",
      ar: "التهاب الجيوب الحاد يستمر حتى ٤ أسابيع؛ المزمن يستمر ١٢+ أسبوعاً. جداول زمنية مختلفة تعني علاجاً مختلفاً — المضادات ليست دائماً ضرورية.",
    },
    body: [
      {
        en: "Acute viral sinusitis follows a cold — green mucus alone does not require antibiotics. Bacterial infection is suspected if symptoms worsen after initial improvement or last beyond 10 days with high fever and facial pain.",
        ar: "التهاب الجيوب الفيروسي الحاد يتبع البرد — المخاط الأخضر وحده لا يستدعي مضادات. يُشك في عدوى بكتيرية إن ساءت الأعراض بعد تحسن أولي أو استمرت أكثر من ١٠ أيام مع حمى عالية وألم وجهي.",
      },
      {
        en: "Chronic sinusitis involves ongoing inflammation — often with polyps or anatomical factors. Prolonged antibiotics without addressing inflammation rarely succeed.",
        ar: "التهاب الجيوب المزمن ينطوي على التهاب مستمر — غالباً مع زوائد أو عوامل تشريحية. مضادات طويلة دون معالجة الالتهاب نادراً ما تنجح.",
      },
      {
        en: "Saline irrigation benefits both forms. ENT follow-up prevents acute episodes from becoming chronic.",
        ar: "الغسول الملحي يفيد الشكلين. متابعة ENT تمنع تحول النوبات الحادة إلى مزمنة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
};
