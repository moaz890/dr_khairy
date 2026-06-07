"use client";

import { useState } from "react";
import { Clock, ArrowRight, X, Check, HelpCircle } from "lucide-react";
import { blogPosts, mythFacts, blogCategoryKeys, type BlogCategoryKey } from "@/lib/data/blog";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

function MythFactCard({ item }: { item: (typeof mythFacts)[0] }) {
  const [revealed, setRevealed] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <div className="card-premium overflow-hidden">
      <div className={cn("p-5 cursor-pointer transition-all duration-500", revealed ? "opacity-60" : "")} onClick={() => !revealed && setRevealed(true)}>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <X size={14} className="text-red-600" />
          </div>
          <div>
            <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">{t.blog.myth}</p>
            <p className="text-slate-800 font-medium text-sm">&ldquo;{item.myth[lang]}&rdquo;</p>
          </div>
        </div>
        {!revealed && (
          <button className="mt-3 text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: "var(--petrol-700)" }}>
            <HelpCircle size={13} />{t.blog.reveal}
          </button>
        )}
      </div>

      {revealed && (
        <div className="p-5 bg-emerald-50 border-t-2 border-emerald-400 animate-slide-up">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-200 flex items-center justify-center shrink-0">
              <Check size={14} className="text-emerald-700" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">{t.blog.fact}</p>
              <p className="text-slate-700 text-sm leading-relaxed">{item.fact[lang]}</p>
            </div>
          </div>
          <button className="mt-3 text-xs text-slate-400 hover:text-slate-600 transition-colors" onClick={() => setRevealed(false)}>
            {t.blog.reset}
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategoryKey>("all");
  const { t, lang } = useLanguage();

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);
  const featured = blogPosts.filter((p) => p.featured);
  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10 bg-amber-500 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.blog.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.blog.heading}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.blog.subheading}</p>
        </div>
      </section>

      {/* Featured Articles */}
      {activeCategory === "all" && (
        <section className="section-white pb-0">
          <div className="site-container">
            <div className="flex items-center gap-3 mb-8">
              <div className="gold-divider-left w-8" />
              <h2 className="text-lg font-bold text-slate-900">{t.blog.featured}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {featured.map((post) => (
                <article key={post.id} className="card-premium overflow-hidden group cursor-pointer">
                  <div className={`h-48 bg-gradient-to-br ${post.gradientClass} relative flex items-end p-5`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="relative">
                      <span className="badge-gold text-xs mb-2 inline-block">{t.blog.categories[post.category]}</span>
                      <h3 className="text-white font-bold text-lg leading-snug line-clamp-2">{post.title[lang]}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt[lang]}</p>
                    <div className="flex items-center justify-between text-xs text-caption">
                      <span className="flex items-center gap-2">
                        <Clock size={11} />
                        {post.readMinutes} {t.blog.minRead}
                      </span>
                      <span className="font-medium flex items-center gap-1 transition-colors" style={{ color: "var(--petrol-900)" }}>
                        {t.blog.readArticle} <ArrowRight size={12} className="rtl-flip" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="section-slate">
        <div className="site-container">
          <div className="flex flex-wrap gap-2 mb-8">
            {blogCategoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn("px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200", activeCategory === cat ? "text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-300")}
                style={activeCategory === cat ? { backgroundColor: "var(--petrol-900)" } : undefined}
              >
                {t.blog.categories[cat]}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <article key={post.id} className="card-premium overflow-hidden group cursor-pointer">
                <div className={`h-36 bg-gradient-to-br ${post.gradientClass} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <div className="absolute top-3 start-3">
                    <span className="badge-gold text-xs">{t.blog.categories[post.category]}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-cyan-800 transition-colors">{post.title[lang]}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt[lang]}</p>
                  <div className="flex items-center justify-between text-xs text-caption">
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readMinutes} {t.blog.minRead}
                    </span>
                    <span>
                      {new Date(post.date).toLocaleDateString(dateLocale, { month: "short", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Myth vs Fact */}
      <section className="section-white">
        <div className="site-container">
          <div className="text-center mb-10">
            <p className="section-label mb-3">{t.blog.widgetLabel}</p>
            <h2 className="section-heading mb-4">{t.blog.mythHeading}</h2>
            <div className="gold-divider mb-4" />
            <p className="section-sub">{t.blog.mythSubheading}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mythFacts.map((item) => <MythFactCard key={item.id} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
