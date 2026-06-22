"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { beforeAfterCases } from "@/lib/data/before-after";
import { getServicePath } from "@/lib/seo";
import { beforeAfterVideos } from "@/lib/data/before-after-videos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import PageHero from "@/components/public/PageHero";
import BeforeAfterImage from "@/components/public/BeforeAfterImage";
import BeforeAfterVideoCard from "@/components/public/BeforeAfterVideoCard";
import VideoPlayerModal from "@/components/public/VideoPlayerModal";
import ContactCTA from "@/components/public/ContactCTA";
import type { BeforeAfterVideo } from "@/lib/data/before-after-videos";

export default function BeforeAfterPage() {
  const { t, lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<BeforeAfterVideo | null>(null);

  return (
    <>
      <PageHero
        label={t.beforeAfter.label}
        title={t.beforeAfter.heading}
        description={t.beforeAfter.subheading}
      />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs items={[{ label: { en: "Before & After", ar: "قبل وبعد" } }]} />
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.beforeAfter.videoHeading}</h2>
            <p className="text-slate-600">{t.beforeAfter.videoSubheading}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {beforeAfterVideos.map((video) => (
              <BeforeAfterVideoCard
                key={video.id}
                video={video}
                onPlay={setActiveVideo}
              />
            ))}
          </div>

          <div className="border-t border-slate-200 pt-12 mb-10">
            <h2 className="text-xl font-bold text-slate-900 text-center mb-2">{t.beforeAfter.photoHeading}</h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">{t.beforeAfter.note}</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {beforeAfterCases.map((item) => (
                <article key={item.id} className="card-premium overflow-hidden group">
                  <BeforeAfterImage item={item} className="h-56" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 mb-2">{item.title[lang]}</h3>
                    <p className="text-sm text-slate-500">{item.description[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">{t.beforeAfter.exploreServices}</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { slug: "rhinoplasty", label: { en: "Rhinoplasty", ar: "تجميل الأنف" } },
                { slug: "functional-rhinoplasty", label: { en: "Functional Rhinoplasty", ar: "تجميل الأنف الوظيفي" } },
                { slug: "revision-rhinoplasty", label: { en: "Revision Rhinoplasty", ar: "تصحيح تجميل الأنف" } },
              ].map((link) => (
                <Link
                  key={link.slug}
                  href={getServicePath(link.slug)}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 transition-colors"
                >
                  {link.label[lang]}
                  <ArrowRight size={14} className="rtl-flip" />
                </Link>
              ))}
            </div>
          </div>

          <ContactCTA variant="compact" />
        </div>
      </section>

      <VideoPlayerModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}
