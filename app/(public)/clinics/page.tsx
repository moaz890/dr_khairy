"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { clinics } from "@/lib/data/clinics";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import PageHero from "@/components/public/PageHero";
import ContactCTA from "@/components/public/ContactCTA";

export default function ClinicsPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHero
        label={t.clinics.label}
        title={t.clinicsPage.heading}
        description={t.clinicsPage.subheading}
      />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs items={[{ label: { en: "Clinics", ar: "العيادات" } }]} />
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container max-w-4xl space-y-6">
          {clinics.map((clinic) => (
            <Link
              key={clinic.id}
              href={`/clinics/${clinic.slug}`}
              className="card-premium p-6 flex flex-col sm:flex-row sm:items-center gap-4 group hover:border-cyan-300 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-cyan-900" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900 group-hover:text-cyan-800 transition-colors">
                  {clinic.branch[lang]}
                </h2>
                <p className="text-sm text-slate-500 mt-1">{clinic.address[lang]}</p>
              </div>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-cyan-800 rtl-flip shrink-0" />
            </Link>
          ))}
          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
