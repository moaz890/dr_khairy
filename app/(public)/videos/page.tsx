"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { videos, videoCategoryKeys, type VideoCategoryKey } from "@/lib/data/videos";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState<VideoCategoryKey>("all");
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);
  const { t, lang } = useLanguage();

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";

  return (
    <>
      {/* Header */}
      <section className="bg-hero-section relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.videos.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.videos.heading}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.videos.subheading}</p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-slate">
        <div className="site-container">
          {/* Category Filters */}
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

          {/* Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video) => (
              <div
                key={video.id}
                className="video-card group"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
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

                {/* Info */}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Player area */}
            <div
              className={`relative h-72 bg-gradient-to-br ${selectedVideo.thumbnailGradient} flex items-center justify-center`}
            >
              <div className="text-center text-white/80">
                <Play size={48} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm font-medium">{t.videos.playerNote}</p>
                {selectedVideo.youtubeId && (
                  <p className="text-xs opacity-60 mt-1 font-mono">
                    {t.videos.youtubeId}: {selectedVideo.youtubeId}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
                aria-label={t.common.close}
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="font-bold text-slate-900 text-lg leading-snug">{selectedVideo.title[lang]}</h2>
                <span className="badge-gold shrink-0">{t.videos.categories[selectedVideo.category]}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{selectedVideo.description[lang]}</p>
              <div className="flex items-center gap-4 text-xs text-caption">
                <span>{selectedVideo.views} {t.common.views}</span>
                <span>•</span>
                <span>{selectedVideo.duration}</span>
                <span>•</span>
                <span>
                  {new Date(selectedVideo.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
