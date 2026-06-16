import type { EnrichedMap } from "./types";

const cta = {
  en: "Prof. Dr. Mohammed Rabea Khairy provides comprehensive ear and hearing care in New Cairo and Zagazig. Book an ENT consultation via WhatsApp.",
  ar: "يقدّم أ.د. محمد ربيع خيري رعاية شاملة للأذن والسمع في التجمع الخامس والزقازيق. احجز استشارة ENT عبر واتساب.",
};

export const earConditionsEnrichment: EnrichedMap = {
  "tinnitus-causes-treatment": {
    excerpt: {
      en: "Tinnitus — ringing or buzzing in the ears — has many causes from hearing loss to ear wax. Learn evaluation steps and treatment options.",
      ar: "طنين الأذن — رنين أو طنين — له أسباب متعددة من ضعف السمع إلى شمع الأذن. تعرّف خطوات التقييم وخيارات العلاج.",
    },
    body: [
      {
        en: "Tinnitus is a symptom, not a disease. Common causes include noise exposure, age-related hearing loss, ear infections, wax impaction, and TMJ disorders.",
        ar: "الطنين عرض وليس مرضاً. الأسباب الشائعة تشمل التعرض للضوضاء وضعف السمع العمري والتهابات الأذن وانسداد الشمع واضطرابات المفصل الفكي.",
      },
      {
        en: "Evaluation includes otoscopy, hearing test (audiogram), and sometimes MRI if pulsatile or one-sided tinnitus suggests a structural lesion.",
        ar: "يشمل التقييم تنظير الأذن وفحص السمع (أوديوجرام) وأحياناً رنيناً إن كان الطنين نابضاً أو أحادي الجانب مما يشير لآفة هيكلية.",
      },
      {
        en: "Treatment targets the cause when possible — wax removal, hearing aids, sound therapy, and counselling. No single pill cures all tinnitus.",
        ar: "يعالج السبب عند الإمكان — إزالة الشمع وسماعات وفعل العلاج الصوتي والإرشاد. لا حبة واحدة تشفي كل الطنين.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "sudden-hearing-loss": {
    excerpt: {
      en: "Sudden sensorineural hearing loss is a medical emergency. Seek ENT care within 72 hours for the best chance of recovery.",
      ar: "ضعف السمع العصبي المفاجئ طارئ طبي. اطلب رعاية ENT خلال ٧٢ ساعة لأفضل فرصة للتعافي.",
    },
    body: [
      {
        en: "Patients notice rapid drop in hearing over hours to days, often one ear, sometimes with tinnitus or vertigo. Do not wait — early steroids and antiviral therapy improve outcomes.",
        ar: "يلاحظ المرضى هبوطاً سريعاً في السمع خلال ساعات إلى أيام، غالباً أذناً واحدة، أحياناً مع طنين أو دوار. لا تنتظر — الستيرويدات المبكرة والعلاج المضاد للفيروسات تحسّن النتائج.",
      },
      {
        en: "Urgent audiogram confirms sensorineural loss. MRI rules out rare causes like acoustic neuroma. Blood tests may check vascular or autoimmune factors.",
        ar: "أوديوجرام عاجل يؤكد ضعف السمع العصبي. الرنين يستبعد أسباباً نادرة مثل الورم العصبي السمعي. تحاليل دم قد تفحص عوامل وعائية أو مناعية.",
      },
      {
        en: "Recovery varies — some regain full hearing, others partial improvement. Delay beyond two weeks reduces treatment success significantly.",
        ar: "التعافي يختلف — البعض يستعيد السمع كاملاً وآخرون تحسناً جزئياً. التأخير أكثر من أسبوعين يقلل نجاح العلاج بشكل كبير.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "otitis-media-adults-children": {
    excerpt: {
      en: "Middle ear infection causes pain, fever, and hearing loss in children and adults. Know when antibiotics help and when grommets are needed.",
      ar: "التهاب الأذن الوسطى يسبب ألماً وحمى وضعف سمع عند الأطفال والكبار. اعرف متى تفيد المضادات ومتى تُحتاج أنابيب التهوية.",
    },
    body: [
      {
        en: "Acute otitis media is common in children after colds — ear pain, irritability, and fever are typical. Many mild cases resolve without antibiotics under medical guidance.",
        ar: "التهاب الأذن الوسطى الحاد شائع عند الأطفال بعد البرد — ألم أذن وعصبية وحمى نموذجية. كثير من الحالات الخفيفة تتحسن دون مضادات بإرشاد طبي.",
      },
      {
        en: "Recurrent infections or persistent fluid (otitis media with effusion) may require ventilation tubes (grommets) to drain fluid and restore hearing.",
        ar: "الالتهابات المتكررة أو السائل المستمر قد يتطلب أنابيب تهوية لتصريف السائل واستعادة السمع.",
      },
      {
        en: "Adults with otitis media need evaluation for eustachian tube dysfunction, sinus disease, or smoking-related factors. Chronic ear disease risks perforation.",
        ar: "البالغون مع التهاب الأذن الوسطى يحتاجون تقييماً لخلل قناة أوستاش أو مرض الجيوب أو عوامل التدخين. المرض الأذني المزمن يخاطر بثقب الطبلة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "inner-ear-vertigo": {
    excerpt: {
      en: "Vertigo from inner ear disorders causes spinning sensation and imbalance. BPPV, Ménière's, and vestibular neuritis are common — and treatable.",
      ar: "دوار الأذن الداخلية يسبب إحساساً بالدوران وعدم توازن. BPPV ومنيير والتهاب العصب الدهليزي شائعة — وقابلة للعلاج.",
    },
    body: [
      {
        en: "Benign paroxysmal positional vertigo (BPPV) triggers brief spinning with head movement — treated with repositioning manoeuvres in clinic.",
        ar: "دوار الوضعة الحميد يسبب دوراناً قصيراً مع حركة الرأس — يُعالج بمناورات إعادة التوضع في العيادة.",
      },
      {
        en: "Vestibular neuritis causes sudden prolonged vertigo after viral illness — steroids and vestibular rehabilitation speed recovery.",
        ar: "التهاب العصب الدهليزي يسبب دواراً مفاجئاً مطولاً بعد مرض فيروسي — الستيرويدات وإعادة التأهيل الدهليزي تسرّع التعافي.",
      },
      {
        en: "Ménière's disease involves episodic vertigo, hearing fluctuation, tinnitus, and fullness — managed with diet, medication, and sometimes surgery.",
        ar: "مرض منيير ينطوي على دوار نوبي وتقلب سمع وطنين وامتلاء — يُدار بالنظام والدواء وأحياناً الجراحة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 9,
  },
  "eustachian-tube-dysfunction": {
    excerpt: {
      en: "Blocked eustachian tubes cause ear pressure, popping, and muffled hearing — especially after flights or colds. Learn causes and relief strategies.",
      ar: "انسداد قناة أوستاش يسبب ضغط أذن وطقطقة وسمعاً مكتوماً — خاصة بعد الطيران أو البرد. تعرّف الأسباب واستراتيجيات التخفيف.",
    },
    body: [
      {
        en: "The eustachian tube ventilates the middle ear. Dysfunction from allergy, sinusitis, or swelling prevents pressure equalisation.",
        ar: "قناة أوستاش تهوي الأذن الوسطى. الخلل من الحساسية أو التهاب الجيوب أو التورم يمنع توازن الضغط.",
      },
      {
        en: "Yawning, swallowing, and Valsalva may help briefly. Treating nasal inflammation with sprays and treating underlying sinus or allergy disease is essential.",
        ar: "التثاؤب والبلع وفالسالفا قد يساعدان مؤقتاً. علاج الالتهاب الأنفي بالبخاخات وعلاج الجيوب أو الحساسية الأساسي ضروري.",
      },
      {
        en: "Persistent dysfunction in children may link to adenoid enlargement. Adults with chronic symptoms need full ENT assessment.",
        ar: "الخلل المستمر عند الأطفال قد يرتبط بتضخم اللحمية. البالغون بأعراض مزمنة يحتاجون تقييماً ENT كاملاً.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "when-to-see-ent": {
    excerpt: {
      en: "Ear, nose, and throat symptoms often overlap. Here are clear signs you should see an ENT specialist rather than self-treating.",
      ar: "أعراض الأذن والأنف والحنجرة تتداخل غالباً. إليك علامات واضحة لزيارة أخصائي ENT بدلاً من العلاج الذاتي.",
    },
    body: [
      {
        en: "See an ENT for hearing loss, persistent tinnitus, recurrent ear infections, sudden vertigo, or ear discharge lasting more than a few days.",
        ar: "راجع ENT لضعف السمع أو طنين مستمر أو التهابات أذن متكررة أو دوار مفاجئ أو إفرازات أذن أكثر من أيام قليلة.",
      },
      {
        en: "Nasal symptoms warrant referral for blockage unresponsive to sprays for weeks, repeated nosebleeds, loss of smell, facial pain, or suspected polyps.",
        ar: "أعراض الأنف تستدعي إحالة للانسداد غير المستجيب للبخاخات لأسابيع أو نزيف متكرر أو فقدان شم أو ألم وجهي أو اشتباه زوائد.",
      },
      {
        en: "Throat red flags include hoarseness over 3 weeks, difficulty swallowing, neck lumps, or snoring with witnessed breathing pauses during sleep.",
        ar: "تحذيرات الحنجرة تشمل بحة أكثر من ٣ أسابيع أو صعوبة بلع أو كتل رقبة أو شخير مع توقف تنفس ملحوظ أثناء النوم.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "ear-pressure-causes": {
    excerpt: {
      en: "Fullness or pressure in the ear feels uncomfortable and affects hearing. Common causes include eustachian dysfunction, wax, and sinus disease.",
      ar: "الامتلاء أو الضغط في الأذن مزعج ويؤثر على السمع. الأسباب الشائعة تشمل خلل أوستاش والشمع ومرض الجيوب.",
    },
    body: [
      {
        en: "Eustachian tube blockage is the leading cause — often bilateral with allergy or sinusitis. Unilateral persistent pressure needs examination to exclude fluid or rare tumours.",
        ar: "انسداد قناة أوستاش السبب الرئيسي — غالباً ثنائي مع حساسية أو التهاب جيوب. ضغط أحادي مستمر يحتاج فحصاً لاستبعاد سائل أو أورام نادرة.",
      },
      {
        en: "Wax impaction creates similar fullness — never use cotton buds deep in the canal. Professional microsuction is safest.",
        ar: "انسداد الشمع يخلق امتلاءً مشابهاً — لا تستخدم أعواد قطنية عميقة في القناة. الشفط المهني الأكثر أماناً.",
      },
      {
        en: "Flying and diving change pressure — autoinflation techniques and decongestants help when tubes function poorly. Treat nasal disease before travel if prone to barotrauma.",
        ar: "الطيران والغوص يغيّران الضغط — تقنيات التنفيس ومزيلات الاحتقان تساعد عند ضعف القناة. عالج مرض الأنف قبل السفر إن كنت عرضة لإصابة الضغط.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
};
