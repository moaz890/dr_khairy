"use client";

import Link from "next/link";
import { MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { clinics } from "@/lib/data/clinics";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import PageHero from "@/components/public/PageHero";
import { whatsappUrl } from "@/lib/constants/whatsapp";

export default function ContactPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHero label={t.contact.label} title={t.contact.heading} description={t.contact.subheading} />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs items={[{ label: { en: "Contact", ar: "اتصل بنا" } }]} />
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {clinics.map((clinic) => (
              <div key={clinic.id} className="card-premium p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">{clinic.branch[lang]}</h2>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-amber-600 mt-0.5 shrink-0" />
                    <span>{clinic.address[lang]}</span>
                  </li>
                  {clinic.hours && (
                    <li className="flex items-start gap-3">
                      <Clock size={16} className="text-cyan-700 mt-0.5 shrink-0" />
                      <span>{clinic.hours[lang]}</span>
                    </li>
                  )}
                  <li className="flex items-center gap-3">
                    <Phone size={16} className="text-cyan-700 shrink-0" />
                    <a href={`tel:${clinic.phone}`} className="hover:text-cyan-800 transition-colors">
                      {clinic.phone}
                    </a>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={clinic.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-book text-sm"
                  >
                    <MessageCircle size={16} />
                    {t.nav.bookWhatsApp}
                  </a>
                  <Link
                    href={`/clinics/${clinic.slug}`}
                    className="btn-outline text-sm"
                  >
                    {t.clinicsPage.viewClinic}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="card-premium p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{t.contact.ctaTitle}</h2>
            <p className="text-slate-600 mb-6 max-w-lg mx-auto">{t.contact.ctaDesc}</p>
            <a
              href={whatsappUrl("contact")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book inline-flex"
            >
              <MessageCircle size={18} />
              {t.nav.bookWhatsApp}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
