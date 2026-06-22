"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle, MapPin } from "lucide-react";
import type { LocalPage } from "@/lib/data/local-pages";
import { getClinicBySlug } from "@/lib/data/clinics";
import { getServiceBySlug } from "@/lib/data/service-pages";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Breadcrumbs from "./Breadcrumbs";
import PageHero from "./PageHero";
import ContactCTA from "./ContactCTA";
import { getServicePath } from "@/lib/seo";

interface LocalPageContentProps {
  page: LocalPage;
}

export default function LocalPageContent({ page }: LocalPageContentProps) {
  const { t, lang } = useLanguage();
  const clinic = getClinicBySlug(page.clinicSlug);
  const primaryService = getServiceBySlug(page.primaryServiceSlug);

  const relatedServices = page.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  const relatedPosts = page.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const cityLabel =
    page.city === "cairo"
      ? { en: "Cairo", ar: "القاهرة" }
      : { en: "Zagazig", ar: "الزقازيق" };

  return (
    <>
      <PageHero label={cityLabel[lang]} title={page.h1[lang]} description={page.intro[lang]} />

      <section className="section-white py-8">
        <div className="site-container">
          <Breadcrumbs
            items={[
              { label: { en: "Clinics", ar: "العيادات" }, href: "/clinics" },
              ...(clinic
                ? [{ label: clinic.branch, href: `/clinics/${clinic.slug}` }]
                : []),
              { label: page.h1 },
            ]}
          />
        </div>
      </section>

      <section className="section-slate pb-8">
        <div className="site-container max-w-4xl">
          {clinic && (
            <div className="card-premium p-6 mb-10 flex items-start gap-3">
              <MapPin size={20} className="text-amber-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-slate-900 mb-1">{clinic.branch[lang]}</p>
                <p className="text-sm text-slate-600 mb-3">{clinic.address[lang]}</p>
                <Link
                  href={`/clinics/${clinic.slug}`}
                  className="text-sm text-cyan-900 font-medium hover:text-primary transition-colors"
                >
                  {t.localPage.viewClinicDetails}
                  <ArrowRight size={14} className="inline ms-1 rtl-flip" />
                </Link>
              </div>
            </div>
          )}

          <div className="space-y-10 mb-12">
            {page.sections.map((section) => (
              <div key={section.heading.en}>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{section.heading[lang]}</h2>
                <p className="text-slate-600 leading-relaxed">{section.body[lang]}</p>
              </div>
            ))}
          </div>

          {primaryService && (
            <div className="mb-12">
              <Link
                href={getServicePath(primaryService.slug)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-900 text-white font-medium hover:bg-cyan-800 transition-colors"
              >
                {t.localPage.learnMoreAbout} {primaryService.h1[lang]}
                <ArrowRight size={16} className="rtl-flip" />
              </Link>
            </div>
          )}

          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle size={20} className="text-amber-600" />
              <h2 className="text-xl font-bold text-slate-900">{t.servicePage.faq}</h2>
            </div>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
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
                    key={rel!.slug}
                    href={getServicePath(rel!.slug)}
                    className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 transition-colors"
                  >
                    {rel!.h1[lang]}
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

          <ContactCTA variant="compact" />
        </div>
      </section>
    </>
  );
}
