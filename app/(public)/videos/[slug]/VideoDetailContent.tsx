"use client";

import Link from "next/link";
import { Play } from "lucide-react";
import { getVideoBySlug } from "@/lib/data/videos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import ContactCTA from "@/components/public/ContactCTA";
import YouTubeEmbed from "@/components/public/YouTubeEmbed";
import SectionPhotoBackground from "@/components/public/SectionPhotoBackground";

interface VideoDetailContentProps {
  slug: string;
}

export default function VideoDetailContent({ slug }: VideoDetailContentProps) {
  const { t, lang } = useLanguage();
  const video = getVideoBySlug(slug);

  if (!video) return null;

  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SectionPhotoBackground variant="hero" />
        <div className="relative site-container max-w-4xl">
          <span className="badge-gold text-xs mb-4 inline-block">
            {t.videos.categories[video.category]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{video.title[lang]}</h1>
          <p className="text-slate-400 text-sm">
            {video.duration} • {video.views} {t.common.views} •{" "}
            {new Date(video.date).toLocaleDateString(dateLocale, {
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="section-white py-8">
        <div className="site-container max-w-4xl">
          <Breadcrumbs
            items={[
              { label: { en: "Videos", ar: "الفيديوهات" }, href: "/videos" },
              { label: video.title },
            ]}
          />
        </div>
      </section>

      <section className="section-slate pb-16">
        <div className="site-container max-w-4xl">
          {video.youtubeId ? (
            <YouTubeEmbed videoId={video.youtubeId} title={video.title[lang]} />
          ) : (
            <div
              className={`aspect-video rounded-2xl bg-gradient-to-br ${video.thumbnailGradient} flex flex-col items-center justify-center mb-8 border border-slate-200 shadow-lg`}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center mb-4">
                <Play size={32} className="text-white ms-1" />
              </div>
              <p className="text-white/80 text-sm">{t.videos.playerNote}</p>
            </div>
          )}

          <p className="text-slate-600 leading-relaxed mb-10 mt-8">{video.description[lang]}</p>

          <div className="mb-8">
            <Link href="/videos" className="text-cyan-900 font-medium hover:text-primary transition-colors">
              ← {t.videos.backToLibrary}
            </Link>
          </div>

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
