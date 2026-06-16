"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { whatsappUrl } from "@/lib/constants/whatsapp";
import SectionPhotoBackground from "@/components/public/SectionPhotoBackground";

interface ContactCTAProps {
  variant?: "default" | "compact";
}

export default function ContactCTA({ variant = "default" }: ContactCTAProps) {
  const { t } = useLanguage();

  if (variant === "compact") {
    return (
      <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1">
          <p className="font-semibold text-slate-900 mb-1">{t.contact.ctaTitle}</p>
          <p className="text-sm text-slate-500">{t.contact.ctaDesc}</p>
        </div>
        <a
          href={whatsappUrl("contact-cta")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-book shrink-0 whitespace-nowrap"
        >
          <MessageCircle size={18} />
          {t.nav.bookWhatsApp}
        </a>
      </div>
    );
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <SectionPhotoBackground variant="surgery" />
      <div className="relative site-container text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.contact.ctaTitle}</h2>
        <p className="text-slate-300 text-base mb-8 max-w-xl mx-auto">{t.contact.ctaDesc}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={whatsappUrl("contact-cta-banner")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book"
          >
            <MessageCircle size={18} />
            {t.nav.bookWhatsApp}
          </a>
          <a
            href="tel:01124427427"
            className="btn-outline border-white/30 text-white hover:bg-white hover:text-cyan-900"
          >
            <Phone size={18} />
            01124427427
          </a>
          <Link
            href="/contact"
            className="btn-outline border-white/30 text-white hover:bg-white hover:text-cyan-900"
          >
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
