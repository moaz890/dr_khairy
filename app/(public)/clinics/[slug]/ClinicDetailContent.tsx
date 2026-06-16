"use client";

import Link from "next/link";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { getClinicBySlug } from "@/lib/data/clinics";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import PageHero from "@/components/public/PageHero";
import ContactCTA from "@/components/public/ContactCTA";

interface ClinicDetailPageProps {
  slug: string;
}

export default function ClinicDetailContent({ slug }: ClinicDetailPageProps) {
  const { t, lang } = useLanguage();
  const clinic = getClinicBySlug(slug);

  if (!clinic) return null;

  return (
    <>
      <PageHero
        label={t.clinics.label}
        title={clinic.branch[lang]}
        description={clinic.address[lang]}
      />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: { en: "Clinics", ar: "العيادات" }, href: "/clinics" },
              { label: clinic.branch },
            ]}
          />
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container max-w-3xl">
          <div className="card-premium p-8 mb-8">
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="text-amber-600 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{t.clinicsPage.address}</p>
                  <p>{clinic.address[lang]}</p>
                </div>
              </li>
              {clinic.hours && (
                <li className="flex items-start gap-3 text-slate-600">
                  <Clock size={18} className="text-cyan-700 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">{t.clinicsPage.hours}</p>
                    <p>{clinic.hours[lang]}</p>
                  </div>
                </li>
              )}
              <li className="flex items-center gap-3 text-slate-600">
                <Phone size={18} className="text-cyan-700 shrink-0" />
                <a href={`tel:${clinic.phone}`} className="hover:text-cyan-800 transition-colors">
                  {clinic.phone}
                </a>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book"
              >
                <MessageCircle size={18} />
                {t.nav.bookWhatsApp}
              </a>
              {clinic.mapsUrl && (
                <a
                  href={clinic.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {t.clinics.getDirections}
                </a>
              )}
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">{t.clinicsPage.detailDesc}</p>

          <div className="mb-8">
            <Link href="/services" className="text-cyan-900 font-medium hover:text-primary transition-colors">
              {t.clinicsPage.viewServices} →
            </Link>
          </div>

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
