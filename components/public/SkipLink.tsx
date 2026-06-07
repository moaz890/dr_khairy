"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SkipLink() {
  const { t } = useLanguage();
  return (
    <a href="#main-content" className="skip-link">
      {t.common.skipToContent}
    </a>
  );
}
