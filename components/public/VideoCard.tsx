"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { Video } from "@/lib/data/videos";
import { youtubeThumbnail } from "@/lib/constants/youtube";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
  thumbnailHeight?: "sm" | "md";
  className?: string;
}

export default function VideoCard({
  video,
  onPlay,
  thumbnailHeight = "md",
  className,
}: VideoCardProps) {
  const { t, lang } = useLanguage();
  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";
  const heightClass = thumbnailHeight === "sm" ? "h-48" : "h-52";

  const handleClick = () => {
    if (video.youtubeId) {
      onPlay(video);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn("video-card group", !video.youtubeId && "opacity-75", className)}
      aria-label={video.title[lang]}
    >
      <div className={cn("relative overflow-hidden", heightClass)}>
        {video.youtubeId ? (
          <>
            <Image
              src={youtubeThumbnail(video.youtubeId)}
              alt={video.title[lang]}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="video-overlay" />
          </>
        ) : (
          <div className={cn("absolute inset-0 bg-gradient-to-br", video.thumbnailGradient)}>
            <div className="video-overlay" />
          </div>
        )}

        <div className="play-btn">
          <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
            <Play size={26} className="text-white ms-1 fill-white" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10">
          <span className="badge-gold text-xs">{t.videos.categories[video.category]}</span>
          <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-lg font-mono">
            {video.duration}
          </span>
        </div>
      </div>

      <div className={cn(thumbnailHeight === "sm" ? "p-4" : "p-5")}>
        <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-cyan-800 transition-colors">
          {video.title[lang]}
        </h3>
        <div className="flex items-center justify-between text-xs text-caption">
          <span>
            {video.views} {t.common.views}
          </span>
          <span>
            {new Date(video.date).toLocaleDateString(dateLocale, {
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </article>
  );
}
