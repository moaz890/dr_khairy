"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/videos", label: t.nav.videos },
    { href: "/conferences", label: t.nav.conferences },
    { href: "/blog", label: t.nav.blog },
    { href: "/testimonials", label: t.nav.testimonials },
    { href: "/workshop", label: t.nav.workshop },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {logoError ? (
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center shadow-md group-hover:opacity-80 transition-opacity"
                style={{ background: "var(--petrol-900)" }}
              >
                <span className="text-white font-bold text-2xl">RK</span>
              </div>
            ) : (
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-md group-hover:opacity-80 transition-opacity">
                <Image
                  src="/logo.jpg"
                  alt={t.common.logoAlt}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            )}
            <div className="hidden sm:block max-w-[11rem] md:max-w-[13rem] lg:max-w-none lg:min-w-0">
              <p
                className={cn(
                  "font-bold text-sm leading-tight transition-colors duration-300 truncate",
                  scrolled ? "text-slate-900" : "text-white"
                )}
              >
                {t.hero.name}
              </p>
              <p
                className={cn(
                  "text-xs transition-colors duration-300 line-clamp-1",
                  scrolled ? "text-primary" : "text-cyan-300"
                )}
              >
                {t.hero.navTitle}
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-transparent",
                    isActive
                      ? scrolled
                        ? "text-amber-600 font-semibold border-b-2 border-amber-600 pb-0.5"
                        : "text-amber-400 font-semibold border-b-2 border-amber-400 pb-0.5"
                      : scrolled
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                        : "text-cyan-100 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA + Language Switcher */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher dark={!scrolled} />
            <a
              href="https://wa.me/201124427427"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2.5 px-5 rounded-lg"
            >
              <MessageCircle size={18} />
              {t.nav.bookWhatsApp}
            </a>
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-nav" className="lg:hidden bg-white border-t border-slate-200 shadow-xl animate-slide-up">
          <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent",
                    isActive
                      ? "text-amber-600 font-semibold border-b-2 border-amber-600 pb-0.5"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3 mt-3">
              <LanguageSwitcher />
              <a
                href="https://wa.me/201124427427"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 justify-center py-3 text-sm"
                onClick={() => setMobileOpen(false)}
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
