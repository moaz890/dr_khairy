"use client";

import { GraduationCap, Briefcase, Award, Trophy } from "lucide-react";
import { timelineItems } from "@/lib/data/timeline";
import { doctorProfile } from "@/lib/data/doctor";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const typeConfig = {
  education:     { icon: GraduationCap, color: "bg-cyan-900" },
  position:      { icon: Briefcase,     color: "bg-amber-700" },
  certification: { icon: Award,         color: "bg-emerald-700" },
  achievement:   { icon: Trophy,        color: "bg-purple-700" },
};

export default function AboutPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-amber-500 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.about.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.hero.name}</h1>
          <p className="text-cyan-200 text-lg font-medium mb-6">{t.hero.title}</p>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">{t.hero.description}</p>
        </div>
      </section>

      {/* Full Bio */}
      <section className="section-slate">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <p className="section-label mb-3">{t.about.label}</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.about.sectionHeading}</h2>
              <div className="gold-divider-left mb-6" />
              {doctorProfile.longBio[lang].split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
              ))}
            </div>

            {/* Specializations sidebar */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
                <p className="font-bold text-slate-900 mb-4">{t.about.expertise}</p>
                <ul className="space-y-3">
                  {doctorProfile.specializations.map((spec) => (
                    <li key={spec.en} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "color-mix(in srgb, var(--gold-600) 15%, white)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--gold-600)" }} />
                      </span>
                      {spec[lang]}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{t.about.affiliation}</span>
                    <span className="text-slate-900 font-medium text-right text-xs">{doctorProfile.affiliation[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">{t.about.timelineLabel}</p>
            <h2 className="section-heading mb-4">{t.about.timelineHeading}</h2>
            <div className="gold-divider" />
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {Object.entries(typeConfig).map(([key, { icon: Icon, color }]) => (
              <div key={key} className="flex items-center gap-2 text-sm text-slate-600">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", color)}>
                  <Icon size={12} className="text-white" />
                </div>
                {t.about.timelineTypes[key as keyof typeof t.about.timelineTypes]}
              </div>
            ))}
          </div>

          {/* Timeline Items */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2" style={{ background: "linear-gradient(to bottom, var(--petrol-900), var(--gold-600), var(--petrol-900))" }} />

            <div className="space-y-10">
              {timelineItems.map((item, index) => {
                const { icon: Icon, color } = typeConfig[item.type];
                const isLeft = index % 2 === 0;

                return (
                  <div key={item.id} className={cn("relative flex items-start md:items-center gap-6", isLeft ? "md:flex-row" : "md:flex-row-reverse")}>
                    {/* Card */}
                    <div className={cn("flex-1 ml-10 md:ml-0", isLeft ? "md:text-right" : "md:text-left")}>
                      <div className={cn("bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5", isLeft ? "md:mr-8" : "md:ml-8")}>
                        <div className={cn("flex items-center gap-2 mb-2", isLeft ? "md:justify-end" : "")}>
                          <span className="badge-petrol text-xs">{item.year}</span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-0.5">{item.title[lang]}</h3>
                        <p className="text-primary font-medium text-sm mb-1">{item.institution[lang]}</p>
                        <p className="text-caption mb-2">{item.location[lang]}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.description[lang]}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className={cn("w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center", color)}>
                        <Icon size={14} className="text-white" />
                      </div>
                    </div>

                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
