"use client";

import { MapPin, Calendar, Globe, Award, Mic, Users, BookMarked } from "lucide-react";
import { conferences, conferenceRoles } from "@/lib/data/conferences";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const roleIcons: Record<string, React.ElementType> = {
  keynote: Mic,
  "invited-speaker": Globe,
  panelist: Users,
  "workshop-chair": BookMarked,
};

const roleColors: Record<string, string> = {
  keynote: "bg-cyan-900 text-white",
  "invited-speaker": "bg-amber-100 text-amber-800",
  panelist: "bg-slate-100 text-slate-700",
  "workshop-chair": "bg-emerald-100 text-emerald-800",
};

const stats = [
  { value: "60+", key: "countries" as const, icon: Globe },
  { value: "200+", key: "appearances" as const, icon: Mic },
  { value: "12,000+", key: "physicians" as const, icon: Users },
  { value: "2022–2026", key: "span" as const, icon: Calendar },
];

export default function ConferencesPage() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Header */}
      <section className="bg-hero-section relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.conferences.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.conferences.heading}</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">{t.conferences.subheading}</p>
        </div>
      </section>

      {/* Global Stats */}
      <section className="section-white py-14">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, key, icon: Icon }) => (
              <div key={key} className="card-stat group">
                <Icon size={22} className="text-primary mx-auto mb-3 group-hover:text-cyan-900 transition-colors" />
                <p className="text-2xl font-bold text-slate-900 mb-1">{value}</p>
                <p className="text-sm text-slate-500">{t.conferences.stats[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences Grid */}
      <section className="section-slate">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="section-label mb-3">{t.conferences.recordLabel}</p>
            <h2 className="section-heading mb-4">{t.conferences.recordHeading}</h2>
            <div className="gold-divider" />
          </div>

          {/* Role Legend */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {conferenceRoles.map((role) => {
              const Icon = roleIcons[role];
              return (
                <div
                  key={role}
                  className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium", roleColors[role])}
                >
                  <Icon size={12} />
                  {t.conferences.roles[role]}
                </div>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf) => {
              const Icon = roleIcons[conf.role];
              const color = roleColors[conf.role];
              return (
                <div key={conf.id} className="card-premium p-6 flex flex-col gap-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl">{conf.flag}</div>
                    <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium", color)}>
                      <Icon size={10} />
                      {t.conferences.roles[conf.role]}
                    </div>
                  </div>

                  {/* Conference name */}
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-tight mb-1">{conf.name[lang]}</h3>
                    <p className="text-xs text-primary font-medium">{conf.organizer[lang]}</p>
                  </div>

                  {/* Topic */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{t.conferences.topic}</p>
                    <p className="text-sm text-slate-800 font-medium leading-snug">{conf.topic[lang]}</p>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed">{conf.description[lang]}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-caption">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} />
                      {conf.city[lang]}, {conf.country[lang]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} />
                      {conf.month[lang]} {conf.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invite CTA */}
      <section className="section-petrol text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Award size={40} className="text-amber-500 mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-4">{t.conferences.inviteTitle}</h2>
          <p className="text-slate-400 text-lg mb-8">{t.conferences.inviteDesc}</p>
          <a
            href="mailto:appointments@drrabiekhairy.com?subject=Conference Invitation"
            className="btn-gold"
          >
            {t.conferences.inviteCTA}
          </a>
        </div>
      </section>
    </>
  );
}
