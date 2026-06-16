"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import type { BeforeAfterVideo } from "@/lib/data/before-after-videos";
import { youtubeThumbnail } from "@/lib/constants/youtube";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

interface BeforeAfterVideoCardProps {
  video: BeforeAfterVideo;
  onPlay: (video: BeforeAfterVideo) => void;
  className?: string;
}

const categoryLabels = {
  rhinoplasty: { en: "Rhinoplasty", ar: "تجميل الأنف" },
  functional: { en: "Functional", ar: "وظيفي" },
  revision: { en: "Revision", ar: "تصحيح" },
} as const;

export default function BeforeAfterVideoCard({
  video,
  onPlay,
  className,
}: BeforeAfterVideoCardProps) {
  const { lang } = useLanguage();

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onPlay(video)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onPlay(video);
        }
      }}
      className={cn("video-card group", className)}
      aria-label={video.alt[lang]}
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={youtubeThumbnail(video.youtubeId)}
          alt={video.alt[lang]}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="video-overlay" />
        <div className="play-btn">
          <div className="w-16 h-16 rounded-full bg-black/45 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
            <Play size={26} className="text-white ms-1 fill-white" />
          </div>
        </div>
        <span className="absolute top-3 start-3 z-10 badge-gold text-xs">
          {categoryLabels[video.category][lang]}
        </span>
      </div>
      <div className="p-5">
        <h2 className="font-bold text-slate-900 text-sm leading-snug mb-1 line-clamp-2 group-hover:text-cyan-800 transition-colors">
          {video.title[lang]}
        </h2>
        <p className="text-sm text-slate-500 line-clamp-2">{video.description[lang]}</p>
      </div>
    </article>
  );
}
