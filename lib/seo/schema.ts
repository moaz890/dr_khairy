import { clinics } from "@/lib/data/clinics";
import { doctorProfile } from "@/lib/data/doctor";
import type { ServiceFaq } from "@/lib/data/service-pages";
import { siteConfig } from "./config";

type Lang = "ar" | "en";

export function buildFaqPageSchema(
  faqs: ServiceFaq[],
  lang: Lang = "ar"
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[lang],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[lang],
      },
    })),
  };
}

export function buildLocalBusinessSchema(): Record<string, unknown>[] {
  return clinics.map((clinic) => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `${siteConfig.name.ar} — ${clinic.branch.ar}`,
    alternateName: `${siteConfig.name.en} — ${clinic.branch.en}`,
    description: siteConfig.defaultDescription.ar,
    url: `${siteConfig.url}/clinics/${clinic.slug}`,
    telephone: clinic.phone,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.ar,
      addressLocality: clinic.slug === "zagazig" ? "Zagazig" : "New Cairo",
      addressRegion: clinic.slug === "zagazig" ? "Sharqia" : "Cairo",
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.slug === "zagazig" ? 30.5877 : 30.0131,
      longitude: clinic.slug === "zagazig" ? 31.5020 : 31.4913,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "16:00",
        closes: "21:00",
      },
    ],
    medicalSpecialty: [
      "Otolaryngologic",
      "PlasticSurgery",
    ],
    sameAs: [
      doctorProfile.socials.facebook,
      doctorProfile.socials.instagram,
      doctorProfile.socials.youtube,
      doctorProfile.socials.tiktok,
    ],
  }));
}

export function buildPhysicianSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctorProfile.name.ar,
    alternateName: doctorProfile.name.en,
    description: doctorProfile.shortBio.ar,
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: doctorProfile.phone,
    medicalSpecialty: [
      "Otolaryngology",
      "Rhinoplasty",
      "Endoscopic Sinus Surgery",
    ],
    knowsAbout: [
      "Functional Rhinoplasty",
      "Septoplasty",
      "FESS",
      "Tonsillectomy",
      "Sleep Apnea",
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctorProfile.affiliation.ar,
      url: siteConfig.url,
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Cairo University Faculty of Medicine",
    },
    address: clinics.map((clinic) => ({
      "@type": "PostalAddress",
      streetAddress: clinic.address.en,
      addressLocality: clinic.branch.en,
      addressCountry: "EG",
    })),
    sameAs: [
      doctorProfile.socials.facebook,
      doctorProfile.socials.instagram,
      doctorProfile.socials.youtube,
      doctorProfile.socials.tiktok,
    ],
  };
}

export function buildArticleSchema(options: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    url: options.url,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: {
      "@type": "Physician",
      name: doctorProfile.name.en,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: siteConfig.name.en,
      url: siteConfig.url,
    },
  };
}

export function buildMedicalWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: options.name,
    description: options.description,
    url: options.url,
    author: {
      "@type": "Physician",
      name: doctorProfile.name.en,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: siteConfig.name.en,
      url: siteConfig.url,
    },
  };
}
