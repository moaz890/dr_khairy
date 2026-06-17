import type { EnrichedMap } from "./types";

const cta = {
  en: "Prof. Dr. Mohammed Rabea Khairy treats throat and tonsil conditions for adults and children in New Cairo and Zagazig. Book via WhatsApp.",
  ar: "يعالج أ.د. محمد ربيع خيري حالات الحنجرة واللوز للكبار والأطفال في التجمع الخامس والزقازيق. احجز عبر واتساب.",
};

export const throatConditionsEnrichment: EnrichedMap = {
  "adult-tonsillectomy": {
    excerpt: {
      en: "Tonsillectomy in adults is less common than in children but effective for recurrent infection or obstructive tonsils. Know recovery and risks.",
      ar: "استئصال اللوزتين عند الكبار أقل شيوعاً من الأطفال لكنه فعال للعدوى المتكررة أو اللوز المسبب للانسداد. اعرف التعافي والمخاطر.",
    },
    body: [
      {
        en: "Indications include recurrent tonsillitis (typically 5–7 episodes yearly), chronic tonsillitis with bad breath, peritonsillar abscess history, or sleep-disordered breathing from large tonsils.",
        ar: "المؤشرات تشمل التهاب لوز متكرر (عادة ٥–٧ نوبات سنوياً) أو التهاب مزمن برائحة فم كريهة أو تاريخ خراج لوزي أو اضطراب تنفس من لوز كبير.",
      },
      {
        en: "Adult recovery is often more painful than paediatric — plan 10–14 days off work. Hydration, soft diet, and prescribed pain control are critical.",
        ar: "تعافي الكبار غالباً أكثر ألماً من الأطفال — خطط لـ ١٠–١٤ يوماً بعيداً عن العمل. الترطيب والنظام اللين والمسكنات الموصوفة حاسمة.",
      },
      {
        en: "Bleeding risk peaks around day 7–10 when slough separates. Seek urgent care for brisk bleeding — rare but serious.",
        ar: "خطر النزيف يبلغ ذروته حوالي يوم ٧–١٠ عند انفصال القشور. اطلب رعاية عاجلة لنزيف شديد — نادر لكن خطير.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "adenoids-children": {
    excerpt: {
      en: "Enlarged adenoids cause mouth breathing, snoring, and ear problems in children. Learn symptoms, medical options, and adenoidectomy timing.",
      ar: "اللوز العائلي المتضخم يسبب تنفساً من الفم وشخيراً ومشاكل أذن عند الأطفال. تعرّف الأعراض والخيارات الدوائية وتوقيت استئصال اللحمية.",
    },
    body: [
      {
        en: "Adenoids sit behind the nose. Hypertrophy blocks nasal breathing, alters facial growth patterns, and contributes to otitis media with effusion.",
        ar: "اللوز العائلي خلف الأنف. التضخم يحجب التنفس الأنفي ويغيّر أنماط نمو الوجه ويساهم في التهاب أذن وسطى مع انصباب.",
      },
      {
        en: "Trial of nasal steroids and allergy control may shrink adenoids in mild cases. Surgery is considered for persistent obstruction, sleep apnoea signs, or recurrent ear fluid.",
        ar: "تجربة ستيرويدات أنفية وضبط الحساسية قد تصغّر اللحمية في الحالات الخفيفة. تُفكر الجراحة للانسداد المستمر أو علامات انقطاع النفس أو سائل أذني متكرر.",
      },
      {
        en: "Adenoidectomy is often combined with grommets or tonsillectomy when multiple issues coexist. Same-day discharge is usual.",
        ar: "غالباً يُجمع استئصال اللحمية مع أنابيب تهوية أو لوزتين عند تعدد المشاكل. الخروج في نفس اليوم معتاد.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "persistent-hoarseness": {
    excerpt: {
      en: "Hoarseness lasting more than three weeks needs ENT evaluation. Early laryngoscopy rules out serious causes and speeds treatment.",
      ar: "البحة لأكثر من ثلاثة أسابيع تحتاج تقييماً ENT. تنظير الحنجرة المبكر يستبعد أسباباً خطيرة ويسرّع العلاج.",
    },
    body: [
      {
        en: "Common benign causes include laryngitis, voice overuse, reflux, and smoking. Persistent hoarseness in smokers or over age 50 requires exclusion of laryngeal pathology.",
        ar: "الأسباب الحميدة الشائعة تشمل التهاب حنجرة وإجهاد صوت وارتجاع وتدخين. البحة المستمرة لدى المدخنين أو فوق ٥٠ تتطلب استبعاد أمراض الحنجرة.",
      },
      {
        en: "Flexible nasolaryngoscopy views the vocal cords in clinic — quick and well tolerated. Vocal nodules, polyps, cysts, and rarely cancer are identified.",
        ar: "تنظير الحنجرة المرن يرى الحبال الصوتية في العيادة — سريع ومتحمل جيداً. يُحدد العقد والزوائد والأكياس ونادراً السرطان.",
      },
      {
        en: "Voice rest, reflux control, speech therapy, and microsurgery treat most conditions. Do not ignore hoarseness beyond three weeks.",
        ar: "راحة الصوت وضبط الارتجاع وعلاج النطق وجراحة مجهرية تعالج معظم الحالات. لا تتجاهل البحة أكثر من ثلاثة أسابيع.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
  "swallowing-difficulty-causes": {
    excerpt: {
      en: "Difficulty swallowing (dysphagia) may affect solids, liquids, or both. Causes range from reflux to neurological disease — evaluation matters.",
      ar: "صعوبة البلع قد تصيب الصلبات أو السوائل أو كليهما. الأسباب من الارتجاع إلى أمراض عصبية — التقييم مهم.",
    },
    body: [
      {
        en: "Oropharyngeal dysphagia — choking, coughing with meals — suggests throat or neuromuscular issues. Oesophageal dysphagia feels like food sticks in the chest.",
        ar: "عسر البلع البلعومي — اختناق وسعال مع الوجبات — يشير لمشاكل حنجرة أو عضلية عصبية. عسر البلع المريئي يشعر بأن الطعام عالق في الصدر.",
      },
      {
        en: "Red flags: weight loss, drooling, blood, or progressive worsening. Urgent ENT and sometimes GI evaluation with imaging or endoscopy is required.",
        ar: "تحذيرات: فقدان وزن أو سيلان لعاب أو دم أو تدهور تدريجي. تقييم ENT عاجل وأحياناً جهاز هضمي مع تصوير أو منظار مطلوب.",
      },
      {
        en: "Reflux, strictures, Zenker's diverticulum, and thyroid enlargement are ENT-related causes. Treatment is tailored after pinpointing the level of dysfunction.",
        ar: "الارتجاع والتضيق وقرحة زينكر وتضخم الغدة الدرقية أسباب ENT. العلاج يُخصص بعد تحديد مستوى الخلل.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 9,
  },
  "acute-vs-chronic-laryngitis": {
    excerpt: {
      en: "Acute laryngitis lasts days; chronic persists weeks. Different causes — infection, voice strain, reflux, smoking — need different management.",
      ar: "التهاب الحنجرة الحاد يستمر أياماً؛ المزمن أسابيع. أسباب مختلفة — عدوى وإجهاد صوت وارتجاع وتدخين — تحتاج إدارة مختلفة.",
    },
    body: [
      {
        en: "Acute viral laryngitis follows colds — hoarse voice, throat discomfort, resolves in 1–2 weeks with hydration and voice rest.",
        ar: "التهاب الحنجرة الفيروسي الحاد يتبع البرد — صوت أجش وألم حلق يتحسن في ١–٢ أسبوع مع ترطيب وراحة صوت.",
      },
      {
        en: "Chronic laryngitis lasts over three weeks — investigate reflux laryngitis, smoking, alcohol, inhaler use, and occupational irritants.",
        ar: "التهاب الحنجرة المزمن يستمر أكثر من ثلاثة أسابيع — افحص التهاب الحنجرة الارتجاعي والتدخين والكحول واستخدام البخاخات والمهيجات المهنية.",
      },
      {
        en: "Laryngoscopy distinguishes inflammation from structural lesions. PPI therapy, lifestyle change, and voice therapy treat many chronic cases without surgery.",
        ar: "تنظير الحنجرة يميز الالتهاب عن الآفات الهيكلية. مثبطات مضخة البروتون وتغيير نمط الحياة وعلاج الصوت يعالج كثيراً من الحالات المزمنة دون جراحة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "adenoids-affect-hearing": {
    excerpt: {
      en: "Enlarged adenoids block the Eustachian tube and cause middle ear fluid — a common cause of hearing loss and recurrent ear infections in children.",
      ar: "اللحمية المتضخمة تعيق قناة استاكيوس وتسبب سوائل في الأذن الوسطى — سبب شائع لضعف السمع والتهابات الأذن المتكررة عند الأطفال.",
    },
    body: [
      {
        en: "Adenoids sit at the back of the nasal cavity near the Eustachian tube opening. When enlarged from chronic infection or allergy, they physically obstruct the tube that ventilates the middle ear.",
        ar: "اللحمية في مؤخرة التجويف الأنفي قرب فتحة قناة استاكيوس. عند التضخم من عدوى مزمنة أو حساسية، تعيق أنبوب تهوية الأذن الوسطى.",
      },
      {
        en: "Blocked ventilation traps fluid behind the eardrum (otitis media with effusion). Children may not complain — parents notice TV volume increasing, inattention, or speech delay. Audiometry confirms conductive hearing loss.",
        ar: "انسداد التهوية يحبس سوائل خلف الطبلة (التهاب أذن وسطى مع تجمع). قد لا يشكو الأطفال — يلاحظ الآباء رفع صوت التلفزيون أو ضعف انتباه أو تأخر كلام. تخطيط السمع يؤكد ضعفاً توصيلياً.",
      },
      {
        en: "Adenoidectomy restores Eustachian tube function in most cases. Ventilation tubes may be placed simultaneously if fluid is persistent. Hearing typically normalises within weeks of adenoid removal.",
        ar: "استئصال اللحمية يستعيد وظيفة قناة استاكيوس في معظم الحالات. قد توضع أنابيب تهوية معاً إن استمرت السوائل. السمع يعود طبيعياً عادة خلال أسابيع من إزالة اللحمية.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
};
