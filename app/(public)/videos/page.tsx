"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import { videos, videoCategoryKeys, type VideoCategoryKey } from "@/lib/data/videos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import SectionPhotoBackground from "@/components/public/SectionPhotoBackground";

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategoryKey>("all");
  const { t, lang } = useLanguage();

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <SectionPhotoBackground variant="hero" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.videos.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.videos.heading}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.videos.subheading}</p>
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container">
          <div className="flex flex-wrap gap-3 mb-10">
            {videoCategoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-900"
                )}
                style={activeCategory === cat ? { backgroundColor: "var(--petrol-900)" } : undefined}
              >
                {t.videos.categories[cat]}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <Link
                key={video.id}
                href={`/videos/${video.slug}`}
                className="video-card group"
              >
                <div className={`relative h-52 bg-gradient-to-br ${video.thumbnailGradient} flex items-center justify-center`}>
                  <div className="video-overlay" />
                  <div className="play-btn">
                    <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-xl">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="badge-gold text-xs">{t.videos.categories[video.category]}</span>
                    <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-mono">
                      {video.duration}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-cyan-800 transition-colors">
                    {video.title[lang]}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-caption">
                    <span>{video.views} {t.common.views}</span>
                    <span>
                      {new Date(video.date).toLocaleDateString(dateLocale, {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
