import type { EnrichedMap } from "./types";

const cta = {
  en: "Prof. Dr. Mohammed Rabea Khairy evaluates snoring and sleep-disordered breathing in New Cairo and Zagazig. Book a sleep and airway consultation via WhatsApp.",
  ar: "يقيّم أ.د. محمد ربيع خيري الشخير واضطرابات التنفس أثناء النوم في التجمع الخامس والزقازيق. احجز استشارة نوم ومجرى هوائي عبر واتساب.",
};

export const sleepBreathingEnrichment: EnrichedMap = {
  "snoring-treatment-options": {
    excerpt: {
      en: "Snoring has surgical and non-surgical treatments depending on where airflow is blocked — nose, palate, or tongue base.",
      ar: "للشخير علاج جراحي وغير جراحي حسب مكان انسداد تدفق الهواء — الأنف أو الحنك أو قاعدة اللسان.",
    },
    body: [
      {
        en: "Lifestyle measures — weight loss, side sleeping, avoiding alcohol before bed — help mild snoring. Nasal obstruction from septal deviation or polyps should be treated first.",
        ar: "إجراءات نمط الحياة — فقدان وزن والنوم على الجنب وتجنب الكحول قبل النوم — تساعد الشخير الخفيف. انسداد الأنف من حاجز أو زوائد يجب علاجه أولاً.",
      },
      {
        en: "Oral appliances advance the jaw at night for selected patients. CPAP is gold standard when obstructive sleep apnoea is diagnosed.",
        ar: "أجهزة فموية تقدم الفك ليلاً لمرضى مختارين. CPAP المعيار الذهبي عند تشخيص انقطاع النفس الانسدادي.",
      },
      {
        en: "Surgical options include septoplasty, turbinate reduction, uvulopalatopharyngoplasty (UPPP), and tongue base procedures — tailored after sleep endoscopy or drug-induced sleep endoscopy when indicated.",
        ar: "الخيارات الجراحية تشمل عملية حاجز وتقليل حطم وUPPP وإجراءات قاعدة اللسان — تُخصص بعد تنظير نوم أو تنظير نوم محفز دوائياً عند الحاجة.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 9,
  },
  "sleep-apnea-symptoms-risks": {
    excerpt: {
      en: "Obstructive sleep apnoea causes breathing pauses, daytime sleepiness, and long-term heart risk. Recognise symptoms and seek diagnosis.",
      ar: "انقطاع النفس الانسدادي يسبب توقف تنفس ونعاساً نهارياً وخطراً قلبياً طويل المدى. تعرّف الأعراض واطلب التشخيص.",
    },
    body: [
      {
        en: "Symptoms include loud snoring, witnessed apnoeas, gasping at night, morning headaches, poor concentration, and hypertension. Partners often notice pauses first.",
        ar: "الأعراض تشمل شخيراً عالياً وتوقف تنفس ملحوظاً ولهاثاً ليلاً وصداع صباحي وضعف تركيز وارتفاع ضغط. الشركاء غالباً يلاحظون التوقف أولاً.",
      },
      {
        en: "Untreated OSA increases risk of stroke, heart attack, diabetes, and accidents. Severity is graded on sleep study by apnoea-hypopnoea index (AHI).",
        ar: "OSA غير المعالج يزيد خطر السكتة والنوبة القلبية والسكري والحوادث. الشدة تُصنف في تخطيط النوم بمؤشر انقطاع النفس.",
      },
      {
        en: "CPAP remains first-line for moderate-to-severe disease. Weight management, positional therapy, and surgery augment care in selected patients.",
        ar: "CPAP يبقى خط أول للمرض المتوسط إلى الشديد. إدارة الوزن وعلاج الوضعية والجراحة تكمل الرعاية لمرضى مختارين.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 9,
  },
  "septum-deviation-causes-snoring": {
    excerpt: {
      en: "A deviated septum restricts nasal airflow and can directly worsen snoring. Learn the mechanism and when septal surgery helps sleep.",
      ar: "انحراف الحاجز يقيّد تدفق الهواء الأنفي وقد يفاقم الشخير مباشرة. تعرّف الآلية ومتى تساعد جراحة الحاجز على النوم.",
    },
    body: [
      {
        en: "Nasal resistance forces mouth breathing during sleep, collapsing the soft palate and tongue base more easily — amplifying snore volume.",
        ar: "مقاومة الأنف تفرض التنفس من الفم أثناء النوم، مما يسهل انهيار الحنك الرخو وقاعدة اللسان — مضخماً صوت الشخير.",
      },
      {
        en: "Septoplasty improves nasal patency so air enters through the nose, reducing turbulent flow and oral breathing. It works best when deviation is the primary nasal blocker.",
        ar: "عملية الحاجز تحسّن سالكية الأنف ليدخل الهواء عبر الأنف، مما يقلل التدفق المضطرب والتنفس الفموي. الأفضل عندما يكون الانحراف السبب الرئيسي للانسداد.",
      },
      {
        en: "Combine with turbinate treatment if needed. Full sleep evaluation ensures snoring is not masking sleep apnoea requiring CPAP.",
        ar: "اجمع مع علاج الحطم عند الحاجة. تقييم نوم كامل يضمن أن الشخير لا يخفي انقطاع نفس يحتاج CPAP.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 7,
  },
  "is-snoring-dangerous": {
    excerpt: {
      en: "Snoring is not always harmless. Loud habitual snoring with breathing pauses may signal obstructive sleep apnoea — a serious cardiovascular risk.",
      ar: "الشخير ليس دائماً بريئاً. الشخير العالي المتكرر مع توقف التنفس قد يشير لانقطاع النفس الانسدادي — خطر قلبي وعائي خطير.",
    },
    body: [
      {
        en: "Primary snoring occurs without oxygen drops or sleep fragmentation. It disturbs partners but carries lower medical risk. However, loud snoring with witnessed apnoeas, gasping, or daytime sleepiness suggests obstructive sleep apnoea (OSA).",
        ar: "الشخير الأولي يحدث دون انخفاض أكسجين أو تفتت نوم. يزعج الشريك لكنه خطر طبي أقل. لكن الشخير العالي مع انقطاع ملحوظ أو شهيق أو نعاس نهاري يشير لانقطاع النفس الانسدادي.",
      },
      {
        en: "Untreated OSA increases hypertension, atrial fibrillation, stroke, and type 2 diabetes risk. Daytime sleepiness raises motor vehicle accident rates. A sleep study confirms diagnosis and severity.",
        ar: "انقطاع النفس غير المعالج يزيد خطر ارتفاع الضغط والرجفان الأذيني والسكتة والسكري النوع ٢. النعاس النهاري يرفع حوادث المركبات. دراسة النوم تؤكد التشخيص والشدة.",
      },
      {
        en: "Treatment ranges from weight loss and nasal surgery to CPAP and oral appliances. Even simple snoring benefits from nasal obstruction evaluation — septoplasty often reduces snore intensity.",
        ar: "العلاج من فقدان الوزن وجراحة الأنف إلى CPAP والأجهزة الفموية. حتى الشخير البسيط يستفيد من تقييم انسداد الأنف — عملية الحاجز غالباً تقلل شدة الشخير.",
      },
      { en: cta.en, ar: cta.ar },
    ],
    readMinutes: 8,
  },
};
