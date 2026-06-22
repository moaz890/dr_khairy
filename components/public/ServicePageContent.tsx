"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, HelpCircle } from "lucide-react";
import type { ServicePage } from "@/lib/data/service-pages";
import { getServiceBySlug } from "@/lib/data/service-pages";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "./Breadcrumbs";
import { getServicePath } from "@/lib/seo";
import PageHero from "./PageHero";
import ContactCTA from "./ContactCTA";

interface ServicePageContentProps {
  service: ServicePage;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  const { t, lang } = useLanguage();

  const relatedServices = service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as ServicePage[];

  const relatedPosts = service.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero label={t.servicePage.label} title={service.h1[lang]} description={service.intro[lang]} />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: { en: "Services", ar: "الخدمات" }, href: "/services" },
              { label: service.h1 },
            ]}
          />
        </div>
      </section>

      <section className="section-slate pb-8">
        <div className="site-container max-w-4xl">
          <p className="text-slate-600 leading-relaxed text-lg mb-10">{service.overview[lang]}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-premium p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">{t.servicePage.symptoms}</h2>
              <ul className="space-y-2.5">
                {service.symptoms.map((sym) => (
                  <li key={sym.en} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                    {sym[lang]}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-premium p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-4">{t.servicePage.benefits}</h2>
              <ul className="space-y-2.5">
                {service.benefits.map((ben) => (
                  <li key={ben.en} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-cyan-700 mt-0.5 shrink-0" />
                    {ben[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{t.servicePage.procedure}</h2>
              <p className="text-slate-600 leading-relaxed">{service.procedure[lang]}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">{t.servicePage.recovery}</h2>
              <p className="text-slate-600 leading-relaxed">{service.recovery[lang]}</p>
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={20} className="text-amber-600" />
              <h2 className="text-xl font-bold text-slate-900">{t.servicePage.faq}</h2>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question.en}
                  className="group card-premium p-5 open:ring-2 open:ring-cyan-100"
                >
                  <summary className="font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                    {faq.question[lang]}
                    <ArrowRight
                      size={16}
                      className="text-slate-400 group-open:rotate-90 transition-transform rtl-flip shrink-0"
                    />
                  </summary>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">{faq.answer[lang]}</p>
                </details>
              ))}
            </div>
          </div>

          {relatedServices.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-bold text-slate-900 mb-4">{t.servicePage.relatedServices}</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={getServicePath(rel.slug)}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 transition-colors"
                  >
                    {rel.h1[lang]}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-bold text-slate-900 mb-4">{t.servicePage.relatedArticles}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card-premium p-5 group hover:border-cyan-300 transition-colors"
                  >
                    <h3 className="font-semibold text-slate-900 text-sm mb-2 group-hover:text-cyan-800 transition-colors line-clamp-2">
                      {post.title[lang]}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{post.excerpt[lang]}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {service.showBeforeAfterLink && (
            <div className="mb-12">
              <Link
                href="/before-after"
                className="inline-flex items-center gap-2 text-cyan-900 font-medium hover:text-primary transition-colors"
              >
                {t.servicePage.viewBeforeAfter}
                <ArrowRight size={16} className="rtl-flip" />
              </Link>
            </div>
          )}

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
