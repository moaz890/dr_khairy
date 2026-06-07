"use client";

import { Volume2, Play, Quote, Star, ShieldCheck } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const typeConfig = {
  video: { icon: Play,    bg: "bg-cyan-900" },
  audio: { icon: Volume2, bg: "bg-amber-700" },
  text:  { icon: Quote,   bg: "bg-emerald-700" },
};

const typeLabels = {
  video: "typeVideo",
  audio: "typeAudio",
  text: "typeText",
} as const;

export default function TestimonialsPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Header */}
      <section
        className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10 bg-amber-500 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.testimonials.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.testimonials.heading}</h1>
        </div>
      </section>

      {/* Privacy Notice */}
      <div className="bg-cyan-50 border-b border-cyan-200 py-3 px-4">
        <div className="site-container flex items-center gap-2 text-sm text-cyan-800">
          <ShieldCheck size={15} className="shrink-0" style={{ color: "var(--petrol-700)" }} />
          {t.testimonials.privacyNote}
        </div>
      </div>

      {/* Testimonials Grid */}
      <section className="section-slate">
        <div className="site-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => {
              const { icon: TypeIcon, bg } = typeConfig[item.type as keyof typeof typeConfig] || typeConfig.text;
              const labelKey = typeLabels[item.type as keyof typeof typeLabels] || "typeText";
              return (
                <div key={item.id} className="card-premium p-6 flex flex-col gap-4">
                  {/* Type badge + Stars */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white ${bg}`}>
                      <TypeIcon size={11} />
                      {t.testimonials[labelKey]}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>

                  {/* Video/Audio thumbnail */}
                  {item.type !== "text" && (
                    <div
                      className={`relative h-28 ${bg} rounded-xl overflow-hidden flex items-center justify-center cursor-pointer group`}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all">
                        <TypeIcon size={18} className="text-white" />
                      </div>
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-slate-600 text-sm leading-relaxed italic">
                    &ldquo;{item.quote[lang]}&rdquo;
                  </blockquote>

                  {/* Outcome */}
                  {item.outcome && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                      <p className="text-xs text-emerald-700 font-semibold uppercase tracking-wider mb-1">{t.testimonials.outcome}</p>
                      <p className="text-xs text-emerald-800">{item.outcome[lang]}</p>
                    </div>
                  )}

                  {/* Condition badges */}
                  {item.conditions && (
                    <div className="flex flex-wrap gap-2">
                      {item.conditions.map((c) => (
                        <span key={c.en} className="badge-slate text-xs">{c[lang]}</span>
                      ))}
                    </div>
                  )}

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ backgroundColor: "var(--petrol-900)" }}
                    >
                      {item.name[0]}
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold text-sm">{item.name}</p>
                      <p className="text-caption">{item.location[lang]} · {item.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Share CTA */}
          <div
            className="mt-16 rounded-2xl p-8 text-center text-white"
            style={{ backgroundColor: "var(--petrol-900)" }}
          >
            <h3 className="text-xl font-bold mb-2">{t.testimonials.share}</h3>
            <p className="text-cyan-200 text-sm mb-5">
              {t.testimonials.shareDesc}
            </p>
            <a
              href="mailto:appointments@drrabiekhairy.com?subject=My Story"
              className="btn-gold"
            >
              {t.testimonials.share}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
