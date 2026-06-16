"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { siteConfig } from "@/lib/seo/config";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: { en: string; ar: string };
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const { lang, t } = useLanguage();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t.nav.home,
        item: siteConfig.url,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label[lang],
        ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label={t.common.breadcrumb} className={cn("text-sm", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
          <li>
            <Link
              href="/"
              className="inline-flex items-center gap-1 hover:text-cyan-800 transition-colors"
            >
              <Home size={14} />
              <span className="sr-only sm:not-sr-only">{t.nav.home}</span>
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight size={14} className="text-slate-300 rtl-flip shrink-0" />
              {item.href && i < items.length - 1 ? (
                <Link href={item.href} className="hover:text-cyan-800 transition-colors">
                  {item.label[lang]}
                </Link>
              ) : (
                <span className="text-slate-700 font-medium">{item.label[lang]}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
