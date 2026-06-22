"use client";

import Link from "next/link";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { getServiceBySlug } from "@/lib/data/service-pages";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import ContactCTA from "@/components/public/ContactCTA";
import SectionPhotoBackground from "@/components/public/SectionPhotoBackground";
import { getServicePath } from "@/lib/seo";

interface BlogArticleContentProps {
  slug: string;
}

export default function BlogArticleContent({ slug }: BlogArticleContentProps) {
  const { t, lang } = useLanguage();
  const post = getBlogPostBySlug(slug);

  if (!post) return null;

  const dateLocale = lang === "ar" ? "ar-EG" : "en-US";
  const primaryService = post.primaryServiceSlug
    ? getServiceBySlug(post.primaryServiceSlug)
    : undefined;
  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter(Boolean);
  const relatedPosts = post.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter(Boolean);

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SectionPhotoBackground variant="hero" />
        <div className="relative site-container max-w-3xl">
          <span className="badge-gold text-xs mb-4 inline-block">
            {t.blog.categories[post.category]}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title[lang]}</h1>
          <p className="text-slate-400 flex items-center gap-3 text-sm">
            <Clock size={14} />
            {post.readMinutes} {t.blog.minRead}
            <span>•</span>
            {new Date(post.date).toLocaleDateString(dateLocale, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="section-white py-8">
        <div className="site-container max-w-3xl">
          <Breadcrumbs
            items={[
              { label: { en: "Blog", ar: "المدونة" }, href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>
      </section>

      <section className="section-slate pb-16">
        <div className="site-container max-w-3xl">
          <p className="text-lg text-slate-600 leading-relaxed mb-8 border-s-4 border-cyan-900 ps-4">
            {post.excerpt[lang]}
          </p>

          <div className="prose prose-slate max-w-none space-y-6 mb-12">
            {post.body.map((para) => (
              <p key={para.en} className="text-slate-600 leading-relaxed">
                {para[lang]}
              </p>
            ))}
          </div>

          {/* E-E-A-T Medical Review & Author Block */}
          <div className="border-t border-b border-slate-200 py-8 my-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-cyan-900 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                MR
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="bg-cyan-50 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-cyan-100">
                    {lang === "ar" ? "كاتب ومراجع طبي معتمد" : "Verified Medical Author"}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {lang === "ar" ? "أ.د. محمد ربيع خيري" : "Prof. Dr. Mohammed Rabea Khairy"}
                </h4>
                <p className="text-slate-500 text-sm mb-3">
                  {lang === "ar" 
                    ? "أستاذ بكلية الطب - جامعة القاهرة | استشاري جراحات الأنف والأذن وتجميل الأنف" 
                    : "Professor of Medicine - Cairo University | Consultant ENT & Rhinoplasty Surgeon"}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {lang === "ar"
                    ? "تمت مراجعة وكتابة هذا المحتوى الطبي بدقة بالاستناد إلى التوصيات والبروتوكولات السريرية المعتمدة لضمان توفير معلومات صحية دقيقة وموثوقة."
                    : "This medical content has been carefully authored and reviewed based on evidence-based clinical guidelines to ensure accurate and reliable health information."}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm font-semibold">
                  <Link href="/about" className="text-cyan-800 hover:text-cyan-950 transition-colors inline-flex items-center gap-1">
                    {lang === "ar" ? "السيرة الذاتية المهنية" : "Professional Biography"} &rarr;
                  </Link>
                  <Link href="/testimonials" className="text-cyan-800 hover:text-cyan-950 transition-colors inline-flex items-center gap-1">
                    {lang === "ar" ? "آراء وتقييمات المرضى" : "Patient Reviews"}
                  </Link>
                  <Link href="/before-after" className="text-cyan-800 hover:text-cyan-950 transition-colors inline-flex items-center gap-1">
                    {lang === "ar" ? "معرض الحالات قبل وبعد" : "Before & After Gallery"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Reputation & Social Channels */}
            <div className="mt-6 pt-6 border-t border-dashed border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">
                {lang === "ar" ? "القنوات المهنية المعتمدة:" : "Verified Audited Channels:"}
              </span>
              <div className="flex gap-4 text-slate-600 text-sm font-medium">
                <a href="https://www.facebook.com/nosejob.rhinoplasty" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-850 transition-colors">
                  {lang === "ar" ? "فيسبوك" : "Facebook"}
                </a>
                <a href="https://www.instagram.com/dr_mohamed_rabea" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-850 transition-colors">
                  {lang === "ar" ? "انستغرام" : "Instagram"}
                </a>
                <a href="https://www.youtube.com/@mohamedrabea1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-850 transition-colors">
                  {lang === "ar" ? "يوتيوب" : "YouTube"}
                </a>
              </div>
            </div>
          </div>

          {primaryService && (
            <div className="card-premium p-6 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {t.blogArticle.relatedService}
              </p>
              <Link
                href={getServicePath(primaryService.slug)}
                className="text-lg font-bold text-cyan-900 hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                {primaryService.h1[lang]}
                <ArrowRight size={16} className="rtl-flip" />
              </Link>
            </div>
          )}

          {relatedServices.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                {t.blogArticle.moreServices}
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map(
                  (svc) =>
                    svc && (
                      <Link
                        key={svc.slug}
                        href={getServicePath(svc.slug)}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 hover:border-cyan-300 transition-colors"
                      >
                        {svc.h1[lang]}
                      </Link>
                    )
                )}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">
                {t.blogArticle.relatedArticles}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map(
                  (rel) =>
                    rel && (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="card-premium p-4 group hover:border-cyan-300 transition-colors"
                      >
                        <h3 className="font-semibold text-sm text-slate-900 group-hover:text-cyan-800 line-clamp-2">
                          {rel.title[lang]}
                        </h3>
                      </Link>
                    )
                )}
              </div>
            </div>
          )}

          {post.faqs && post.faqs.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle size={20} className="text-amber-600 animate-pulse" />
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === "ar" ? "الأسئلة الشائعة والإجابات الطبية" : "Frequently Asked Questions & Answers"}
                </h2>
              </div>
              <div className="space-y-4">
                {post.faqs.map((faq) => (
                  <details
                    key={faq.question.en}
                    className="group card-premium p-5 open:ring-2 open:ring-cyan-100 transition-all duration-300"
                  >
                    <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                      {faq.question[lang]}
                      <ArrowRight
                        size={16}
                        className="text-slate-400 group-open:rotate-90 transition-transform rtl-flip shrink-0"
                      />
                    </summary>
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed whitespace-pre-line">{faq.answer[lang]}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
