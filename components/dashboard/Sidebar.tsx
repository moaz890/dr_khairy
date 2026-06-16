"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  Calendar,
  FileText,
  Globe,
  Settings,
  LogOut,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/media", label: "Media Uploader", icon: Upload },
  { href: "/dashboard/workshop", label: "Workshop Manager", icon: Calendar },
  { href: "/dashboard/blog", label: "Blog & Content", icon: FileText },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useLanguage();
  const [logoError, setLogoError] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-64 flex flex-col z-40"
      style={{ backgroundColor: "var(--petrol-950)" }}
    >
      <div className="p-5 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-3">
          {logoError ? (
            <div
              className="w-20 h-20 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "var(--gold-600)" }}
            >
              <span className="text-white font-bold text-2xl">RK</span>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
              <Image
                src="/logo.png"
                alt="Prof. Dr. Mohammed Rabea Khairy"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                onError={() => setLogoError(true)}
              />
            </div>
          )}
          <div>
            <p className="text-white font-bold text-sm leading-tight">Prof. Dr. Khairy</p>
            <p className="text-cyan-300 text-xs">Admin Dashboard</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider px-4 mb-3">
          Menu
        </p>
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(isActive ? "sidebar-link-active" : "sidebar-link", "group")}
            >
              <Icon size={18} className="shrink-0" />
              <span className="flex-1">{label}</span>
              {isActive && <ChevronRight size={14} className="opacity-60" />}
            </Link>
          );
        })}

        <div className="pt-6">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider px-4 mb-3">
            General
          </p>
          <Link href="/" className="sidebar-link">
            <Globe size={18} />
            <span>{t.admin.dashboard.viewWebsite}</span>
          </Link>
          <Link href="/dashboard/settings" className="sidebar-link">
            <Settings size={18} />
            <span>Settings</span>
          </Link>
        </div>
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: "var(--gold-600)" }}
          >
            RK
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium truncate">
              Prof. Dr. Mohammed Rabea Khairy
            </p>
            <p className="text-cyan-400 text-xs truncate">Administrator</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="text-cyan-400 hover:text-white transition-colors disabled:opacity-60"
            title={t.admin.dashboard.logoutTitle}
            aria-label={t.admin.dashboard.logout}
          >
            {loggingOut ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <LogOut size={15} />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
