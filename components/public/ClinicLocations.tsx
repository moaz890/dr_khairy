"use client";

import { MapPin, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { clinics } from "@/lib/data/clinics";

export default function ClinicLocations() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="clinic-locations"
      className="bg-surgery-section relative py-20 px-4 overflow-hidden"
    >
      <div className="site-container">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-3">
            {t.clinics.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.clinics.heading}
          </h2>
          <div className="w-16 h-1 bg-amber-700 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-full mb-4">
                {clinic.branch[lang]}
              </span>
              <div className="flex items-start gap-3 mb-5">
                <MapPin size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {clinic.address[lang]}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={clinic.mapsUrl}
                  className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                  {t.clinics.getDirections}
                </a>
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                  <MessageCircle size={14} />
                  {t.clinics.bookWhatsApp}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-3">
            {t.clinics.phone}
          </p>
          <a
            href="tel:01124427427"
            className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-white hover:text-cyan-200 transition-colors mb-6"
          >
            <Phone size={28} className="text-amber-500" />
            01124427427
          </a>
          <div>
            <a
              href="https://wa.me/201124427427"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book"
            >
              <MessageCircle size={18} />
              {t.nav.bookAppointment}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
