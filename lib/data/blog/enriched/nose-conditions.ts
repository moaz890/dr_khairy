import type { EnrichedMap } from "./types";

const cta = {
  en: "Prof. Dr. Mohammed Rabea Khairy evaluates nasal obstruction and septal deviation at clinics in New Cairo and Zagazig. Book a consultation via WhatsApp.",
  ar: "يقيّم أ.د. محمد ربيع خيري انسداد الأنف وانحراف الحاجز في عيادات التجمع الخامس والزقازيق. احجز استشارة عبر واتساب.",
};

export const noseConditionsEnrichment: EnrichedMap = {
  "do-i-need-septoplasty": {
    excerpt: {
      en: "Not every deviated septum needs surgery. Learn the symptoms that justify septoplasty and when medical treatment is enough.",
      ar: "ليس كل انحراف في الحاجز يحتاج جراحة. تعرّف الأعراض التي تبرر عملية الحاجز ومتى يكفي العلاج الدوائي.",
    },
    body: [
      {
        en: "Septoplasty is considered when deviation causes persistent one-sided blockage, recurrent sinus infections, nosebleeds, or snoring despite medical therapy. Mild deviation without symptoms can be monitored.",
        ar: "يُفكر في عملية الحاجز عندما يسبب الانحراف انسداداً مستمراً في جانب واحد أو التهابات جيوب متكررة أو نزيفاً أو شخيراً رغم العلاج الدوائي. الانحراف الخفيف دون أعراض يمكن مراقبته.",
      },
      {
        en: "Examination includes anterior rhinoscopy and often nasal endoscopy. CT imaging may be ordered if sinus disease is suspected.",
        ar: "يشمل الفحص تنظير الأنف الأمامي وغالباً المنظار الأنفي. قد تُطلب أشعة مقطعية إن شُك في مرض الجيوب.",
      },
      {
        en: "Trial of nasal steroids, saline rinses, and allergy control is reasonable before surgery in some cases. Failed conservative care strengthens the case for correction.",
        ar: "تجربة ستيرويدات أنفية وغسول ملحي وضبط الحساسية معقولة قبل الجراحة في بعض الحالات. فشل العلاج التحفظي يقوي مبرر التصحيح.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "septum-deviation-snoring": {
    excerpt: {
      en: "A deviated septum narrows airflow and can worsen snoring. Understand the link and when septal surgery helps sleep quality.",
      ar: "انحراف الحاجز يضيّق تدفق الهواء وقد يفاقم الشخير. افهم العلاقة ومتى تساعد جراحة الحاجز على جودة النوم.",
    },
    body: [
      {
        en: "When the septum blocks one nasal passage, airflow accelerates through the narrower side, vibrating soft tissues and increasing snore intensity. Mouth breathing at night often follows.",
        ar: "عندما يحجب الحاجز ممراً أنفياً، يتسارع تدفق الهواء عبر الجانب الضيق مهتزاً الأنسجة الرخوة وزائداً شدة الشخير. غالباً يليه التنفس من الفم ليلاً.",
      },
      {
        en: "Septoplasty alone may reduce snoring in selected patients but will not cure sleep apnoea if the palate or tongue base is the main obstruction. Sleep study helps clarify.",
        ar: "عملية الحاجز وحدها قد تقلل الشخير لدى مرضى مختارين لكنها لن تشفي انقطاع النفس إن كان الحنك أو قاعدة اللسان هو الانسداد الرئيسي. يساعد تخطيط النوم على التوضيح.",
      },
      {
        en: "Combining septoplasty with turbinate reduction or nasal valve repair addresses multiple levels of blockage for better outcomes.",
        ar: "الجمع بين عملية الحاجز وتقليل الحطم أو إصلاح الصمام الأنفي يعالج مستويات متعددة من الانسداد لنتائج أفضل.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "septoplasty-recovery": {
    excerpt: {
      en: "Septoplasty recovery is usually quicker than full rhinoplasty. Follow these milestones for healing, activity, and when to call your surgeon.",
      ar: "تعافي عملية الحاجز عادة أسرع من تجميل الأنف الكامل. اتبع هذه المحطات للشفاء والنشاط ومتى تتصل بجراحك.",
    },
    body: [
      {
        en: "Internal splints or packing may stay 2–5 days. Expect congestion, mild headache, and blood-tinged drainage early on — normal unless heavy bleeding occurs.",
        ar: "قد تبقى جبائر أو حشو داخلي ٢–٥ أيام. توقع احتقاناً وصداعاً خفيفاً وإفرازات مصبوغة بالدم مبكراً — طبيعي ما لم يحدث نزيف شديد.",
      },
      {
        en: "Avoid blowing your nose forcefully for 1–2 weeks. Saline sprays keep passages moist and speed mucus clearance as swelling subsides.",
        ar: "تجنب نفخ الأنف بقوة لمدة ١–٢ أسبوع. بخاخات الملح تبقي الممرات رطبة وتسرّع إزالة المخاط مع زوال التورم.",
      },
      {
        en: "Most return to work within a week. Strenuous exercise and heavy lifting should wait 2–3 weeks. Breathing improvement continues over 4–6 weeks.",
        ar: "يعود معظم المرضى للعمل خلال أسبوع. الرياضة الشاقة والرفع الثقيل ينتظران ٢–٣ أسابيع. يستمر تحسن التنفس على ٤–٦ أسابيع.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "chronic-nasal-blockage": {
    excerpt: {
      en: "Chronic nasal blockage has many causes — allergy, septal deviation, polyps, or turbinate swelling. Identifying the source guides effective treatment.",
      ar: "لانسداد الأنف المزمن أسباب متعددة — حساسية وانحراف حاجز وزوائد أو تورم حطم. تحديد المصدر يوجه العلاج الفعال.",
    },
    body: [
      {
        en: "Persistent blockage on one side suggests structural causes like septal deviation. Bilateral congestion alternating with seasons points to allergy or rhinitis.",
        ar: "الانسداد المستمر في جانب واحد يشير لأسباب هيكلية مثل انحراف الحاجز. الاحتقان الثنائي المتناوب مع الفصول يشير للحساسية أو التهاب الأنف.",
      },
      {
        en: "Nasal endoscopy reveals polyps, enlarged turbinates, or pus suggesting sinusitis. Allergy testing and CT scan may complete the workup.",
        ar: "يكشف المنظار الأنفي الزوائد أو الحطم المتضخم أو صديداً يشير لالتهاب الجيوب. فحص الحساسية والأشعة المقطعية قد يكملان التقييم.",
      },
      {
        en: "Treatment ranges from sprays and rinses to septoplasty, turbinate reduction, polypectomy, or FESS. Combined medical and surgical plans often work best for chronic cases.",
        ar: "يمتد العلاج من بخاخات وغسولات إلى عملية حاجز وتقليل حطم واستئصال زوائد أو FESS. الخطط الطبية والجراحية المدمجة غالباً الأفضل للحالات المزمنة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "turbinate-hypertrophy": {
    excerpt: {
      en: "Enlarged inferior turbinates are a common cause of nasal congestion. Learn when turbinate reduction is appropriate and which techniques preserve function.",
      ar: "تضخم الحطم السفلي سبب شائع لاحتقان الأنف. تعرّف متى يكون تقليل الحطم مناسباً وأي التقنيات تحافظ على الوظيفة.",
    },
    body: [
      {
        en: "Turbinates warm and humidify air. They swell with allergy, infection, or chronic irritation — causing alternating or constant blockage.",
        ar: "الحطم يدفئ ويرطب الهواء. يتورم مع الحساسية أو العدوى أو التهيج المزمن — مسبباً انسداداً متناوباً أو مستمراً.",
      },
      {
        en: "Medical therapy is first-line: intranasal steroids, antihistamines, and avoiding triggers. Surgery is considered when structure remains enlarged despite months of treatment.",
        ar: "العلاج الدوائي خط أول: ستيرويدات أنفية ومضادات هيستامين وتجنب المحفزات. تُفكر الجراحة عندما يبقى الحطم متضخماً رغم أشهر من العلاج.",
      },
      {
        en: "Submucosal reduction and radiofrequency techniques aim to shrink bulk while preserving mucosa. Over-aggressive resection risks empty nose syndrome — a difficult chronic dryness.",
        ar: "تقليل تحت المخاطية وتقنيات التردد الحراري تستهدف تصغير الحجم مع الحفاظ على المخاط. الاستئصال المفرط يخاطر بمتلازمة الأنف الفارغ — جفاف مزمن صعب.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "septum-vs-turbinate": {
    excerpt: {
      en: "Septal deviation and turbinate hypertrophy both block the nose but need different treatments. Learn how your ENT distinguishes them.",
      ar: "انحراف الحاجز وتضخم الحطم كلاهما يُسد الأنف لكن يحتاج علاجاً مختلفاً. تعرّف كيف يميّزهما أخصائي الأنف والأذن.",
    },
    body: [
      {
        en: "The septum is the midline wall; deviation pushes it into one passage. Turbinates are shelves on the side walls that swell and shrink cyclically.",
        ar: "الحاجز هو الجدار الأوسط؛ الانحراف يدفعه نحو ممر واحد. الحطم رفوف على الجدران الجانبية تتورم وتنكمش دورياً.",
      },
      {
        en: "Fixed one-sided blockage that never alternates favours septal cause. Alternating congestion, worse with allergy season, suggests turbinate or rhinitis contribution.",
        ar: "انسداد ثابت في جانب واحد لا يتناوب يشير إلى سبب حاجزي. احتقان متناوب يزداد مع موسم الحساسية يشير لمساهمة حطم أو التهاب أنف.",
      },
      {
        en: "Both problems often coexist. Surgery may address septoplasty and turbinate reduction in the same session for maximal airflow improvement.",
        ar: "غالباً يتعايش المرضان. قد تعالج الجراحة الحاجز والحطم في جلسة واحدة لأقصى تحسن في تدفق الهواء.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "septum-deviation-children": {
    excerpt: {
      en: "Septal deviation in children may follow injury or natural growth. Know when observation is enough and when surgery is considered.",
      ar: "انحراف الحاجز عند الأطفال قد يتبع إصابة أو نمواً طبيعياً. اعرف متى يكفي المراقبة ومتى تُفكر الجراحة.",
    },
    body: [
      {
        en: "Many children have mild deviation without symptoms. Surgery is reserved for significant blockage affecting sleep, school performance, or recurrent sinus disease.",
        ar: "كثير من الأطفال لديهم انحراف خفيف دون أعراض. تُحجز الجراحة للانسداد المهم المؤثر على النوم أو الأداء الدراسي أو التهابات الجيوب المتكررة.",
      },
      {
        en: "Facial growth continues into the teens. Timing balances benefit against growth — many surgeons prefer waiting until facial maturity for elective septoplasty unless urgent.",
        ar: "نمو الوجه يستمر حتى المراهقة. يوازن التوقيت بين الفائدة والنمو — يفضل كثير من الجراحين الانتظار حتى النضج الوجهي للعمل الاختياري ما لم يكن عاجلاً.",
      },
      {
        en: "Adenoid hypertrophy and allergy mimic septal symptoms in children — full ENT assessment avoids unnecessary surgery.",
        ar: "تضخم اللحمية والحساسية يحاكيان أعراض الحاجز عند الأطفال — تقييم ENT كامل يتجنب جراحة غير ضرورية.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
};
