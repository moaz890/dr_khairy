"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-stretch shrink-0 rounded-xl border p-0.5 transition-all duration-200",
        dark
          ? "border-white/20 bg-white/5"
          : "border-slate-200 bg-slate-50"
      )}
    >
      <button
        onClick={() => setLang("en")}
        className={cn(
          "inline-flex items-center justify-center min-w-[2.75rem] h-9 rounded-lg transition-all duration-200",
          lang === "en"
            ? "bg-amber-700 text-white"
            : dark
            ? "text-white/60 hover:text-white hover:bg-white/10"
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
        )}
        aria-label={t.common.switchToEn}
      >
        <span className="text-lg leading-none select-none" role="img" aria-hidden="true">🇬🇧</span>
      </button>
      <button
        onClick={() => setLang("ar")}
        className={cn(
          "inline-flex items-center justify-center min-w-[2.75rem] h-9 rounded-lg transition-all duration-200",
          lang === "ar"
            ? "bg-amber-700 text-white"
            : dark
            ? "text-white/60 hover:text-white hover:bg-white/10"
            : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
        )}
        aria-label={t.common.switchToAr}
      >
        <span className="text-lg leading-none select-none" role="img" aria-hidden="true">🇪🇬</span>
      </button>
    </div>
  );
}
