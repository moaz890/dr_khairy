import { whatsappUrl } from "@/lib/constants/whatsapp";

export interface Clinic {
  id: string;
  slug: string;
  branch: { en: string; ar: string };
  address: { en: string; ar: string };
  phone: string;
  whatsapp: string;
  mapsUrl?: string;
  hours?: { en: string; ar: string };
}

export const clinics: Clinic[] = [
  {
    id: "c1",
    slug: "cairo-fifth-settlement",
    branch: { en: "Fifth Settlement (New Cairo)", ar: "التجمع الخامس" },
    address: {
      en: "Cairo Medical Center, next to Al-Shifa Hospital, 5th Settlement, New Cairo",
      ar: "كايرو مديكال سنتر، بجوار مستشفى الشفا، التجمع الخامس، القاهرة الجديدة",
    },
    phone: "01124427427",
    whatsapp: whatsappUrl("clinic-cairo"),
    mapsUrl: "https://maps.app.goo.gl/4sMY2848a4LWLkwZ9",
    hours: {
      en: "Saturday – Thursday, 4:00 PM – 9:00 PM",
      ar: "السبت – الخميس، ٤:٠٠ مساءً – ٩:٠٠ مساءً",
    },
  },
  {
    id: "c2",
    slug: "zagazig",
    branch: { en: "Zagazig", ar: "الزقازيق" },
    address: {
      en: "Al-Sagha Square, Al-Kobri Al-Alawi St., opposite Wadea Anton, Zagazig",
      ar: "ميدان الصاغة، أول الكوبري العلوي، أمام وديع انطوان، الزقازيق",
    },
    phone: "01124427427",
    whatsapp: whatsappUrl("clinic-zagazig"),
    mapsUrl: "https://maps.app.goo.gl/Go7TWfmnUhvyy9Fv6",
    hours: {
      en: "Saturday – Thursday, 4:00 PM – 9:00 PM",
      ar: "السبت – الخميس، ٤:٠٠ مساءً – ٩:٠٠ مساءً",
    },
  },
];

export function getClinicBySlug(slug: string): Clinic | undefined {
  return clinics.find((c) => c.slug === slug);
}
