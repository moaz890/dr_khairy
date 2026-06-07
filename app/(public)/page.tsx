"use client";

import Link from "next/link";
import {
  Calendar,
  Globe,
  Users,
  BookOpen,
  Play,
  ArrowRight,
  Award,
  ChevronRight,
  Stethoscope,
  Star,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { doctorProfile } from "@/lib/data/doctor";
import { serviceCategories } from "@/lib/data/services";
import { videos } from "@/lib/data/videos";
import { testimonials } from "@/lib/data/testimonials";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const statIcons: Record<string, React.ElementType> = {
  Calendar,
  Globe,
  Users,
  BookOpen,
};

export default function HomePage() {
  const { t, lang } = useLanguage();
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden pt-28 sm:pt-32 lg:pt-36"
        style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 50%, var(--petrol-950) 100%)" }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 bg-amber-500 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 bg-blue-400 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 bg-white blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative site-container w-full flex items-center justify-center min-h-[calc(100vh-6rem)] py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="animate-fade-in text-start">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  {t.hero.affiliation}
                </span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  background: "linear-gradient(90deg, #d4af37, #b45309)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t.hero.name}
              </h1>

              <p className="text-cyan-200 text-lg md:text-xl font-medium mb-4">
                {t.hero.title}
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-xl">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/201124427427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <MessageCircle size={18} />
                  {t.hero.registerCTA}
                </a>
                <Link href="/services" className="btn-outline border-white/30 text-white hover:bg-white hover:text-cyan-900">
                  <Stethoscope size={18} />
                  {t.hero.servicesCTA}
                </Link>
              </div>

              {/* Quick trust indicators */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[t.hero.badges.ent, t.hero.badges.rhinoplasty, t.hero.badges.professor].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-slate-300 text-sm">
                    <CheckCircle size={14} className="text-amber-500 shrink-0" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Video Placeholder + Floating Card */}
            <div className="relative animate-fade-in mx-auto w-full max-w-xl lg:max-w-none" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-video bg-slate-800">
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #1e293b 0%, var(--petrol-950) 100%)" }}
                >
                  <button
                    type="button"
                    className="w-20 h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center mb-4 cursor-pointer hover:bg-white/20 transition-all duration-300 group animate-float"
                    aria-label={t.common.playVideo}
                  >
                    <Play size={30} className="text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-white/80 text-sm">{t.hero.featuredInterview}</p>
                  <p className="text-caption-on-dark mt-1">{t.hero.videoLoading}</p>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <p className="text-white text-xs font-medium">🎬 {t.hero.videoLabel}</p>
                  <p className="text-caption-on-dark mt-0.5">16:24 • 98K {t.common.views}</p>
                </div>
              </div>

              {/* Floating CTA Card — desktop only to avoid mobile overflow */}
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 w-56 border border-slate-100 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Calendar size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{t.hero.ctaCard.title}</p>
                    <p className="text-slate-500 text-xs">{t.hero.ctaCard.available}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-xs mb-3 leading-relaxed">{t.hero.ctaCard.desc}</p>
                <a
                  href="https://wa.me/201124427427"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-cyan-900 text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-cyan-800 transition-colors flex items-center justify-center gap-1.5"
                >
                  {t.hero.ctaCard.book}
                  <ArrowRight size={12} />
                </a>
              </div>

              {/* Floating Stats Badge — desktop only */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-amber-700 rounded-2xl shadow-xl p-4 text-white animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-amber-50 text-xs">{t.hero.ctaCard.conferences}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-caption-on-dark">{t.common.scrollExplore}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section id="stats" className="section-white py-16">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorProfile.stats.map((stat, i) => {
              const Icon = statIcons[stat.icon] || Star;
              return (
                <div
                  key={stat.label.en}
                  className="card-stat group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-900 transition-colors duration-300">
                    <Icon
                      size={24}
                      className="text-cyan-900 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label[lang]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section id="about-preview" className="section-slate">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">{t.about.label}</p>
              <h2 className="section-heading mb-6">
                {t.about.sectionHeading}
              </h2>
              <div className="gold-divider-left mb-6" />
              <p className="text-slate-600 leading-relaxed mb-8">
                {doctorProfile.shortBio[lang]}
              </p>
              <Link href="/about" className="btn-primary">
                {t.about.readMore} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Specializations grid */}
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">{t.about.expertise}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctorProfile.specializations.map((spec) => (
                  <div
                    key={spec.en}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50 transition-all duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                    <span className="text-sm text-slate-700">{spec[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section id="services-preview" className="section-white">
        <div className="site-container text-center mb-12">
          <p className="section-label mb-3">{t.services.label}</p>
          <h2 className="section-heading mb-4">{t.services.heading}</h2>
          <div className="gold-divider mb-4" />
          <p className="section-sub">
            {t.services.subheading}
          </p>
        </div>

        <div className="site-container">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {serviceCategories.slice(0, 3).map((service) => (
              <div key={service.id} className="card-premium p-6">
                <div className="text-4xl mb-4">
                  {service.id === "ent-surgery" ? "👃" : service.id === "rhinoplasty" ? "✨" : service.id === "snoring-breathing" ? "😴" : "🩺"}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.label[lang]}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{service.description[lang]}</p>
                <div className="space-y-2">
                  {service.conditions.slice(0, 3).map((c) => (
                    <div key={c.id} className="flex items-center gap-2 text-xs text-slate-600">
                      <ChevronRight size={12} className="text-amber-600" />
                      {c.name[lang]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-outline">
              {t.home.viewAllServices} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA BANNER ── */}
      <section
        id="booking-cta"
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 bg-amber-500 blur-3xl" />
        </div>
        <div className="relative site-container text-center">
          <div className="inline-flex items-center gap-2 bg-amber-700/20 border border-amber-700/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              {t.clinics.label}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t.clinics.heading}
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            {t.home.bookingDesc}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/201124427427"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={18} />
              {t.nav.bookWhatsApp}
            </a>
            <a
              href="tel:01124427427"
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-cyan-900"
            >
              01124427427
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEOS PREVIEW ── */}
      <section id="videos-preview" className="section-slate">
        <div className="site-container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-label mb-2">{t.videos.label}</p>
              <h2 className="text-2xl font-bold text-slate-900">{t.home.featuredVideos}</h2>
            </div>
            <Link href="/videos" className="text-cyan-900 text-sm font-medium hover:text-primary flex items-center gap-1 transition-colors">
              {t.common.viewAll} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.slice(0, 3).map((video) => (
              <div key={video.id} className="video-card group">
                <div className={`relative h-48 bg-gradient-to-br ${video.thumbnailGradient} flex items-center justify-center`}>
                  <div className="video-overlay" />
                  <div className="play-btn">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center">
                      <Play size={22} className="text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="badge-gold text-xs">{t.videos.categories[video.category]}</span>
                    <span className="bg-black/50 text-white text-xs px-2 py-0.5 rounded">{video.duration}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug mb-1 line-clamp-2">{video.title[lang]}</h3>
                  <p className="text-caption">{video.views} {t.common.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ── */}
      <section id="testimonials-preview" className="section-white">
        <div className="site-container">
          <div className="text-center mb-12">
            <p className="section-label mb-3">{t.testimonials.label}</p>
            <h2 className="section-heading mb-4">{t.testimonials.heading}</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {testimonials.slice(0, 3).map((item) => (
              <div key={item.id} className="card-premium p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">&ldquo;{item.quote[lang]}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 font-bold text-sm">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">{item.name}</p>
                    <p className="text-caption">{item.location[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="btn-outline">
              {t.home.readAllTestimonials} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
