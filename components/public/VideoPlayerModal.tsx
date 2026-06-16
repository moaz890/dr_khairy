"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { youtubeEmbedUrl } from "@/lib/constants/youtube";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type PlayableVideo = {
  youtubeId: string;
  title: { en: string; ar: string };
};

interface VideoPlayerModalProps {
  video: PlayableVideo | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  const { lang } = useLanguage();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!video) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, handleKeyDown]);

  if (!video?.youtubeId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={video.title[lang]}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close"
      />

      <div className="relative w-full max-w-4xl z-10">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 end-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
          <div className="aspect-video">
            <iframe
              src={youtubeEmbedUrl(video.youtubeId, true)}
              title={video.title[lang]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        <p className="mt-4 text-white text-sm md:text-base font-medium text-center line-clamp-2">
          {video.title[lang]}
        </p>
      </div>
    </div>
  );
}
