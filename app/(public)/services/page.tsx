"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Activity, Stethoscope, Heart, ChevronRight, AlertCircle } from "lucide-react";
import { serviceCategories, type ServiceCategory, type Condition } from "@/lib/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ElementType> = { Activity, Stethoscope, Heart };

function ConditionAccordion({ condition }: { condition: Condition }) {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLanguage();

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button
        className="w-full text-start flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-3 text-start">
          <div className="w-2 h-2 rounded-full bg-amber-600 mt-2 shrink-0" />
          <div className="min-w-0 flex-1">
            <span className="font-semibold text-slate-900 block text-start">{condition.name[lang]}</span>
            <span className="text-sm text-slate-500 line-clamp-1 text-start">{condition.description[lang]}</span>
          </div>
        </div>
        {open ? <ChevronUp size={18} className="text-cyan-700 shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-slate-100 animate-fade-in">
          {/* Symptoms */}
          <div className="mt-4 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={14} className="text-amber-600" />
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{t.services.symptoms}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {condition.symptoms.map((sym, i) => (
                <span key={i} className="badge-slate text-xs">{sym[lang]}</span>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">{t.services.approach}</p>
          <div className="space-y-3">
            {condition.treatments.map((tr, i) => (
              <div key={i} className="rounded-xl border p-4" style={{ backgroundColor: "color-mix(in srgb, var(--petrol-900) 6%, white)", borderColor: "color-mix(in srgb, var(--petrol-900) 20%, white)" }}>
                <div className="flex items-start gap-2 mb-2">
                  <ChevronRight size={14} className="mt-0.5 shrink-0" style={{ color: "var(--petrol-900)" }} />
                  <h4 className="font-bold text-sm" style={{ color: "var(--petrol-900)" }}>{tr.name[lang]}</h4>
                </div>
                <p className="text-slate-600 text-xs mb-2 ms-5">{tr.description[lang]}</p>
                <div className="ms-5 bg-white rounded-lg p-3 border border-slate-200">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{t.services.protocol}</p>
                  <p className="text-slate-700 text-xs leading-relaxed">{tr.approach[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);
  const { t, lang } = useLanguage();

  const activeCategory = serviceCategories.find((c) => c.id === activeTab) as ServiceCategory;

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--petrol-950) 0%, var(--petrol-900) 100%)" }}>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10 bg-amber-500 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="section-label text-cyan-300 mb-3">{t.services.label}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.services.heading}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t.services.subheading}</p>
        </div>
      </section>

      <section className="section-slate">
        <div className="site-container">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {serviceCategories.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Activity;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn("flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200", activeTab === cat.id ? "text-white shadow-lg" : "bg-white text-slate-600 border border-slate-200 hover:border-cyan-300 hover:text-cyan-900")}
                  style={activeTab === cat.id ? { backgroundColor: "var(--petrol-900)" } : undefined}
                >
                  <Icon size={16} />
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Category Description */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">{activeCategory.label[lang]}</h2>
            <div className="gold-divider mb-3" />
            <p className="text-slate-500 text-base max-w-xl mx-auto">{activeCategory.description[lang]}</p>
          </div>

          {/* Accordion */}
          <div className="max-w-3xl mx-auto space-y-4">
            {activeCategory.conditions.map((condition) => (
              <ConditionAccordion key={condition.id} condition={condition} />
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="rounded-2xl p-6 text-white flex flex-col sm:flex-row items-start sm:items-center gap-5" style={{ backgroundColor: "var(--petrol-900)" }}>
              <div className="flex-1">
                <p className="font-bold text-lg mb-1">{t.services.noCondition}</p>
                <p className="text-cyan-100 text-sm">{t.services.noConditionDesc}</p>
              </div>
              <a href="https://wa.me/201124427427" target="_blank" rel="noopener noreferrer" className="btn-gold shrink-0 whitespace-nowrap">{t.services.book}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
