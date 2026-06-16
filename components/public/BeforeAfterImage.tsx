"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { BeforeAfterCase } from "@/lib/data/before-after";

interface BeforeAfterImageProps {
  item: BeforeAfterCase;
  className?: string;
}

export default function BeforeAfterImage({ item, className = "h-56" }: BeforeAfterImageProps) {
  const { lang, t } = useLanguage();
  const alt = item.alt[lang];

  if (item.beforeImage && item.afterImage) {
    return (
      <div className={`grid grid-cols-2 gap-0 ${className}`}>
        <div className="relative">
          <Image
            src={item.beforeImage}
            alt={`${alt} — ${t.beforeAfter.before}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 300px"
          />
          <span className="absolute bottom-2 start-2 text-xs font-semibold bg-black/60 text-white px-2 py-0.5 rounded">
            {t.beforeAfter.before}
          </span>
        </div>
        <div className="relative">
          <Image
            src={item.afterImage}
            alt={`${alt} — ${t.beforeAfter.after}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 300px"
          />
          <span className="absolute bottom-2 start-2 text-xs font-semibold bg-black/60 text-white px-2 py-0.5 rounded">
            {t.beforeAfter.after}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-gradient-to-br ${item.gradientClass} flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <span className="relative text-white/90 text-xs font-semibold uppercase tracking-wider bg-black/40 px-3 py-1 rounded-full">
        {t.beforeAfter.placeholder}
      </span>
    </div>
  );
}
