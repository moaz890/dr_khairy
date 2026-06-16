"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, Loader2, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectTo = searchParams.get("redirect") || "/dashboard";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        setError(data.message ?? t.admin.login.errorGeneric);
        return;
      }

      router.push(redirectTo);
      router.refresh();
    } catch {
      setError(t.admin.login.errorGeneric);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-white/15 bg-slate-950/55 backdrop-blur-xl shadow-2xl p-8 sm:p-10">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-700/90 text-white shadow-lg">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-white">{t.admin.login.title}</h1>
          <p className="mt-2 text-sm text-slate-300">{t.admin.login.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
              {t.admin.login.emailLabel}
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 ps-10 pe-4 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20"
                placeholder={t.admin.login.emailPlaceholder}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
              {t.admin.login.passwordLabel}
            </label>
            <div className="relative">
              <Lock
                size={18}
                className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 py-3 ps-10 pe-4 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20"
                placeholder={t.admin.login.passwordPlaceholder}
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-100"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={cn(
              "flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70",
            )}
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : <Lock size={18} />}
            {loading ? t.admin.login.submitting : t.admin.login.submit}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">{t.admin.login.visitorNote}</p>
      </div>
    </div>
  );
}
