"use client";

import SectionPhotoBackground from "./SectionPhotoBackground";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <SectionPhotoBackground variant="hero" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <p className="section-label text-cyan-300 mb-3">{label}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {description && (
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
