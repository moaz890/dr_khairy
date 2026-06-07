import DashboardSidebar from "@/components/dashboard/Sidebar";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50">
        <DashboardSidebar />
        <div className="pl-64">
          <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-30">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Admin Panel</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>
          </header>
          <main className="p-8">{children}</main>
        </div>
      </div>
    </LanguageProvider>
  );
}

