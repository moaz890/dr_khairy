import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import LoginNavbar from "@/components/auth/LoginNavbar";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-hero-section">
        <div className="absolute inset-0 bg-slate-950/20" aria-hidden="true" />
        <LoginNavbar />
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-12 pt-28 sm:pt-32">
          {children}
        </div>
      </div>
    </LanguageProvider>
  );
}
