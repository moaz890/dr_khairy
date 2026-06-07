"use client";

import { useEffect, useState } from "react";
import { Calendar, MapPin, Award, Clock, Globe, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { upcomingWorkshop } from "@/lib/data/workshop";
import { clinics } from "@/lib/data/clinics";
import { getTimeUntil } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function CountdownTimer({ targetDate }: { targetDate: string }) {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState(getTimeUntil(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeUntil(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: t.workshop.days,    value: timeLeft.days },
    { label: t.workshop.hours,   value: timeLeft.hours },
    { label: t.workshop.minutes, value: timeLeft.minutes },
    { label: t.workshop.seconds, value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-box min-w-[80px]">
          <p className="text-3xl md:text-4xl font-bold text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </p>
          <p className="text-cyan-300 text-xs mt-1 uppercase tracking-widest">{label}</p>
        </div>
      ))}
    </div>
  );
}

function BookingPanel() {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-5">
      <p className="text-slate-600 text-sm leading-relaxed">{t.workshop.bookClinicDesc}</p>
      <a
        href="https://wa.me/201124427427"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full justify-center py-3.5"
      >
        <MessageCircle size={18} />
        {t.nav.bookWhatsApp}
      </a>
      <a
        href="tel:01124427427"
        className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-cyan-900 border-2 border-cyan-900 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
      >
        <Phone size={16} />
        01124427427
      </a>
      <div className="pt-4 border-t border-slate-100 space-y-4">
        <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{t.clinics.heading}</p>
        {clinics.map((clinic) => (
          <div key={clinic.id} className="text-sm">
            <p className="font-semibold text-slate-900">{clinic.branch[lang]}</p>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{clinic.address[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WorkshopPage() {
  const ws = upcomingWorkshop;
  const { t, lang } = useLanguage();
  const filled = Math.round((ws.registeredCount / ws.capacity) * 100);

  return (
    <>
      {/* Hero with countdown */}
      <section
        className="relative pt-28 sm:pt-32 lg:pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 opacity-10 bg-amber-500 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10 bg-cyan-400 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/20 border border-amber-700/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              {t.workshop.eventLabel} — {ws.displayDate[lang]}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{ws.title[lang]}</h1>
          <p className="text-cyan-200 text-lg mb-8">{ws.subtitle[lang]}</p>

          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400 mb-10">
            <span className="flex items-center gap-2"><MapPin size={14} className="text-amber-500" /> {ws.location[lang]}</span>
            <span className="flex items-center gap-2"><Globe size={14} className="text-amber-500" /> {t.workshop.format[ws.format as keyof typeof t.workshop.format] || ws.format}</span>
            <span className="flex items-center gap-2"><Award size={14} className="text-amber-500" /> {ws.cme} {t.workshop.cme}</span>
          </div>

          <p className="text-caption-on-dark uppercase tracking-widest mb-6">{t.workshop.countdownStarts}</p>
          <CountdownTimer targetDate={ws.date} />

          <div className="max-w-sm mx-auto mt-10">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>{ws.registeredCount} {t.workshop.seatsRegistered}</span>
              <span>{ws.capacity - ws.registeredCount} {t.workshop.seatsRemaining}</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all"
                style={{ width: `${filled}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <section className="section-slate">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.workshop.about}</h2>
                <div className="gold-divider-left mb-5" />
                <p className="text-slate-600 leading-relaxed mb-6">{ws.description[lang]}</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Calendar, text: ws.displayDate[lang] },
                    { icon: Clock, text: `${t.workshop.registrationLabel}: ${ws.registrationDeadline[lang]}` },
                    { icon: Award, text: `${t.workshop.feeLabel}: ${ws.fee[lang]}` },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200">
                      <Icon size={15} className="text-primary" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.workshop.topics}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {ws.topics.map((topic) => (
                    <div key={topic.en} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200">
                      <ChevronRight size={14} className="text-amber-600 shrink-0 rtl-flip" />
                      <span className="text-sm text-slate-700">{topic[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.workshop.faculty}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ws.speakers.map((speaker, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0"
                        style={{ backgroundColor: "color-mix(in srgb, var(--petrol-900) 15%, white)", color: "var(--petrol-900)" }}
                      >
                        {speaker.name[lang].split(" ").pop()![0]}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{speaker.name[lang]}</p>
                        <p className="text-slate-500 text-xs leading-snug">{speaker.title[lang]}</p>
                        <span className="badge-slate text-xs mt-1 inline-block">{speaker.country[lang]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{t.workshop.agenda}</h3>
                <div className="space-y-2">
                  {ws.agenda.map((item, i) => (
                    <div key={i} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-4">
                      <div className="text-sm font-bold text-primary w-12 shrink-0">{item.time}</div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-900">{item.title[lang]}</p>
                        {item.speaker[lang] && (
                          <p className="text-xs text-slate-500 mt-0.5">{item.speaker[lang]}</p>
                        )}
                      </div>
                      <div className="text-xs text-caption shrink-0">{item.duration[lang]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
                <div className="p-5 text-white" style={{ backgroundColor: "var(--petrol-900)" }}>
                  <h3 className="font-bold text-lg">{t.workshop.bookClinic}</h3>
                  <p className="text-cyan-200 text-xs mt-1">{t.workshop.registration.subtitle}</p>
                </div>
                <div className="p-5">
                  <BookingPanel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
