type T = { en: string; ar: string };

export interface Differentiator {
  id: string;
  icon: string;
  title: T;
  description: T;
}

export const differentiators: Differentiator[] = [
  {
    id: "functional-cosmetic",
    icon: "🫁",
    title: {
      en: "Functional + Cosmetic Combined",
      ar: "جمال وظيفي معاً",
    },
    description: {
      en: "Beauty and breathing are never traded off. Every rhinoplasty plan preserves or improves nasal airflow.",
      ar: "لا نضحي بالتنفس من أجل الجمال. كل خطة تجميل أنف تحافظ على تدفق الهواء أو تحسّنه.",
    },
  },
  {
    id: "professor",
    icon: "🎓",
    title: {
      en: "Professor-Level Authority",
      ar: "خبرة أستاذ جامعي",
    },
    description: {
      en: "Full professor at Cairo University Faculty of Medicine — academic rigour meets surgical precision.",
      ar: "أستاذ بكلية الطب جامعة القاهرة — دقة أكاديمية مع مهارة جراحية.",
    },
  },
  {
    id: "natural-results",
    icon: "✨",
    title: {
      en: "Natural Results Philosophy",
      ar: "نتائج طبيعية",
    },
    description: {
      en: "Proportionate, harmonious outcomes tailored to your facial features — never overdone.",
      ar: "نتائج متناسقة مع ملامح وجهك — بعيداً عن المبالغة.",
    },
  },
  {
    id: "revision",
    icon: "🔧",
    title: {
      en: "Revision Specialist",
      ar: "متخصص تصحيح العمليات",
    },
    description: {
      en: "Expert correction of previous rhinoplasties — restoring function and natural appearance.",
      ar: "خبرة في تصحيح عمليات الأنف السابقة — استعادة الوظيفة والمظهر الطبيعي.",
    },
  },
  {
    id: "thick-skin",
    icon: "👃",
    title: {
      en: "Thick-Skin Nose Expertise",
      ar: "خبرة الجلد السميك",
    },
    description: {
      en: "Specialized techniques for thick nasal skin — defined tips with lasting structural support.",
      ar: "تقنيات متخصصة للجلد الأنفي السميك — مقدمة محددة بدعم هيكلي دائم.",
    },
  },
  {
    id: "dual-city",
    icon: "📍",
    title: {
      en: "Dual-City Presence",
      ar: "عيادتان في القاهرة والزقازيق",
    },
    description: {
      en: "Clinics in New Cairo (5th Settlement) and Zagazig — accessible care across Egypt.",
      ar: "عيادات في التجمع الخامس والزقازيق — رعاية متاحة في أنحاء مصر.",
    },
  },
];
