"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Share2, Globe, Play, ExternalLink, BookMarked, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { doctorProfile } from "@/lib/data/doctor";
import { clinics } from "@/lib/data/clinics";

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  const { t, lang } = useLanguage();

  const quickLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/videos", label: t.nav.videos },
    { href: "/conferences", label: t.nav.conferences },
    { href: "/blog", label: t.nav.blog },
    { href: "/workshop", label: t.nav.workshop },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              {logoError ? (
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center shadow-md"
                  style={{ background: "var(--petrol-900)" }}
                >
                  <span className="text-white font-bold text-2xl">RK</span>
                </div>
              ) : (
                <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/logo.jpg"
                    alt={t.common.logoAlt}
                    fill
                    sizes="80px"
                    className="object-cover"
                    onError={() => setLogoError(true)}
                  />
                </div>
              )}
              <div>
                <p className="font-bold text-white text-sm">{t.hero.name}</p>
                <p className="text-xs text-amber-500">{t.footer.tagline}</p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex items-center gap-3">
              {[
                { icon: Share2, label: t.footer.social.twitter },
                { icon: Globe, label: t.footer.social.linkedin },
                { icon: Play, label: t.footer.social.youtube },
                { icon: BookMarked, label: t.footer.social.researchgate },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--gold-600)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="bullet-sm" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.specialties}</h3>
            <ul className="space-y-2.5">
              {doctorProfile.specializations.map((s) => (
                <li key={s.en} className="text-sm text-slate-400 flex items-center gap-1.5">
                  <span className="bullet-sm" />
                  {s[lang]}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t.footer.contact}</h3>
            <ul className="space-y-4">
              {clinics.map((clinic) => (
                <li key={clinic.id} className="flex items-start gap-3">
                  <MapPin size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">{clinic.branch[lang]}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{clinic.address[lang]}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-500 shrink-0" />
                <a href="tel:01124427427" className="text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  01124427427
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/201124427427"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors"
              >
                <MessageCircle size={14} />
                {t.nav.bookWhatsApp}
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="site-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} {t.hero.name}. {t.footer.copyright}</p>
          <p className="text-xs text-slate-400">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
