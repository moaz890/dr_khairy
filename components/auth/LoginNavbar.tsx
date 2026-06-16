"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/public/LanguageSwitcher";

export default function LoginNavbar() {
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
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-slate-950/35 backdrop-blur-md border-b border-white/10">
      <nav className="w-full px-6 sm:px-8 lg:px-12 xl:px-16" aria-label={t.common.mainNav}>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            {logoError ? (
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: "var(--petrol-900)" }}
              >
                <span className="text-white font-bold text-xl">RK</span>
              </div>
            ) : (
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/logo.jpg"
                  alt={t.common.logoAlt}
                  fill
                  sizes="64px"
                  className="object-cover"
                  onError={() => setLogoError(true)}
                  priority
                />
              </div>
            )}
            <div className="hidden sm:block max-w-[11rem] md:max-w-[13rem]">
              <p className="font-bold text-sm leading-tight text-white truncate">
                {t.hero.name}
              </p>
              <p className="text-xs text-cyan-200/80 line-clamp-1">{t.hero.navTitle}</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/75 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher dark />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label={t.common.toggleNav}
            aria-expanded={mobileOpen}
            aria-controls="login-mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="login-mobile-nav"
          className="lg:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-md"
        >
          <div className="w-full px-6 sm:px-8 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 mt-3">
              <LanguageSwitcher dark />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
