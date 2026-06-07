export interface Clinic {
  id: string;
  branch: { en: string; ar: string };
  address: { en: string; ar: string };
  phone: string;
  whatsapp: string;
  mapsUrl?: string;
}

export const clinics: Clinic[] = [
  {
    id: "c1",
    branch: { en: "Fifth Settlement (New Cairo)", ar: "التجمع الخامس" },
    address: {
      en: "Cairo Medical Center, next to Al-Shifa Hospital, 5th Settlement, New Cairo",
      ar: "كايرو مديكال سنتر، بجوار مستشفى الشفا، التجمع الخامس، القاهرة الجديدة",
    },
    phone: "01124427427",
    whatsapp: "https://wa.me/201124427427",
    mapsUrl: "#",
  },
  {
    id: "c2",
    branch: { en: "Zagazig", ar: "الزقازيق" },
    address: {
      en: "Al-Sagha Square, Al-Kobri Al-Alawi St., opposite Wadea Anton, Zagazig",
      ar: "ميدان الصاغة، أول الكوبري العلوي، أمام وديع انطوان، الزقازيق",
    },
    phone: "01124427427",
    whatsapp: "https://wa.me/201124427427",
    mapsUrl: "#",
  },
];
