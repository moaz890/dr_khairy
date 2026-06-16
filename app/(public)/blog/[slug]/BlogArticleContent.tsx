"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { getServiceBySlug } from "@/lib/data/service-pages";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "@/components/public/Breadcrumbs";
import ContactCTA from "@/components/public/ContactCTA";

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
      <section className="bg-hero-section relative pt-32 pb-16 overflow-hidden">
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

          {primaryService && (
            <div className="card-premium p-6 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {t.blogArticle.relatedService}
              </p>
              <Link
                href={`/services/${primaryService.slug}`}
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
                        href={`/services/${svc.slug}`}
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

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
