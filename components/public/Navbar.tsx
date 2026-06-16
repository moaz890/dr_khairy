"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { serviceNavGroups } from "@/lib/data/navigation";
import { whatsappUrl } from "@/lib/constants/whatsapp";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { t, lang } = useLanguage();

  const navLinks = [
    { href: "/blog", label: t.nav.blog },
    { href: "/before-after", label: t.nav.beforeAfter },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 pt-4 sm:pt-5 lg:pt-6",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80"
          : "bg-transparent"
      )}
    >
      <nav className="w-full px-6 sm:px-8 lg:px-12 xl:px-16" aria-label={t.common.mainNav}>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {logoError ? (
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center shadow-md group-hover:opacity-80 transition-opacity"
                style={{ background: "var(--petrol-900)" }}
              >
                <span className="text-white font-bold text-2xl">RK</span>
              </div>
            ) : (
              <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md group-hover:opacity-80 transition-opacity">
                <Image
                  src="/logo.jpg"
                  alt={t.common.logoAlt}
                  fill
                  sizes="80px"
                  className="object-cover"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            )}
            <div className="hidden sm:block max-w-[11rem] md:max-w-[13rem] lg:max-w-none lg:min-w-0">
              <p
                className={cn(
                  "font-bold text-sm leading-tight transition-colors duration-300 truncate",
                  scrolled ? "text-slate-900" : "text-slate-600"
                )}
              >
                {t.hero.name}
              </p>
              <p
                className={cn(
                  "text-xs transition-colors duration-300 line-clamp-1",
                  scrolled ? "text-slate-600" : "text-slate-400"
                )}
              >
                {t.hero.navTitle}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  isServicesActive
                    ? scrolled
                      ? "text-amber-600 font-semibold"
                      : "text-amber-400 font-semibold"
                    : scrolled
                      ? "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      : "text-slate-500 hover:text-slate-700 hover:bg-white/10"
                )}
                aria-expanded={servicesOpen}
              >
                {t.nav.services}
                <ChevronDown
                  size={14}
                  className={cn("transition-transform", servicesOpen && "rotate-180")}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full start-0 mt-2 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-2 gap-6 animate-slide-up">
                  {serviceNavGroups.map((group) => (
                    <div key={group.id}>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                        {group.label[lang]}
                      </p>
                      <ul className="space-y-1.5">
                        {group.links.map((link) => (
                          <li key={link.slug}>
                            <Link
                              href={`/services/${link.slug}`}
                              className="text-sm text-slate-700 hover:text-cyan-800 hover:bg-cyan-50 px-2 py-1.5 rounded-lg block transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {link.label[lang]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-3 border-t border-slate-100">
                    <Link
                      href="/services"
                      className="text-sm font-medium text-cyan-900 hover:text-primary transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {t.home.viewAllServices} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? scrolled
                        ? "text-amber-600 font-semibold"
                        : "text-amber-400 font-semibold"
                      : scrolled
                        ? "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                        : "text-slate-500 hover:text-slate-700 hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher dark={!scrolled} />
            <a
              href={whatsappUrl("navbar")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-book text-sm py-2.5 px-5"
            >
              <MessageCircle size={18} />
              {t.nav.bookWhatsApp}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors duration-200",
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            aria-label={t.common.toggleNav}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden bg-white border-t border-slate-200 shadow-xl animate-slide-up max-h-[80vh] overflow-y-auto">
          <div className="w-full px-6 py-4 space-y-1">
            <p className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t.nav.services}
            </p>
            {serviceNavGroups.map((group) => (
              <div key={group.id} className="mb-3">
                <p className="px-4 py-1 text-xs font-semibold text-slate-500">{group.label[lang]}</p>
                {group.links.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/services/${link.slug}`}
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-lg"
                  >
                    {link.label[lang]}
                  </Link>
                ))}
              </div>
            ))}
            <Link href="/services" className="block px-4 py-2 text-sm font-medium text-cyan-900">
              {t.home.viewAllServices}
            </Link>

            <div className="border-t border-slate-100 my-3 pt-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href={whatsappUrl("navbar")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book flex-1 justify-center py-3 text-sm"
              >
                <MessageCircle size={18} />
                {t.nav.bookWhatsApp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
