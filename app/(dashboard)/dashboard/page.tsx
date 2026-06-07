import type { Metadata } from "next";
import {
  Users,
  Play,
  Calendar,
  TrendingUp,
  Eye,
  Globe,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard — Dr. Khairy Admin",
};

const kpis = [
  {
    title: "Monthly Website Visitors",
    value: "28,450",
    change: "+12.4%",
    trend: "up",
    icon: Users,
    color: "text-cyan-900",
    bg: "bg-cyan-50",
    sub: "vs. last month",
  },
  {
    title: "Total Video Watch Time",
    value: "6,842 hrs",
    change: "+8.1%",
    trend: "up",
    icon: Play,
    color: "text-primary",
    bg: "bg-cyan-50",
    sub: "This month",
  },
  {
    title: "Workshop Registrations",
    value: "187 / 300",
    change: "+34 this week",
    trend: "up",
    icon: Calendar,
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    sub: "62% capacity filled",
  },
  {
    title: "Global Page Reach",
    value: "60+ Countries",
    change: "4 new this month",
    trend: "up",
    icon: Globe,
    color: "text-purple-700",
    bg: "bg-purple-50",
    sub: "Unique visitor countries",
  },
];

const recentActivity = [
  { action: "New workshop registration", user: "Dr. A. Hassan", time: "2 min ago", type: "register" },
  { action: "Video uploaded", user: "Admin", time: "1 hour ago", type: "upload" },
  { action: "Blog post published", user: "Prof. Khairy", time: "3 hours ago", type: "blog" },
  { action: "New inquiry received", user: "Anonymous Patient", time: "5 hours ago", type: "inquiry" },
  { action: "Workshop registration", user: "Dr. M. Salem", time: "Yesterday", type: "register" },
  { action: "Conference entry added", user: "Admin", time: "2 days ago", type: "conference" },
];

const topVideos = [
  { title: "Snoring vs Sleep Apnea — Prof. Khairy Explains", views: "287K", duration: "7:55", trend: "up" },
  { title: "Understanding Chronic Sinusitis — Surgical Solutions", views: "98K", duration: "16:24", trend: "up" },
  { title: "Rhinoplasty in 5 Minutes — What Happens in the OR", views: "214K", duration: "5:18", trend: "down" },
  { title: "Rhinoplasty Recovery Timeline — Day by Day", views: "195K", duration: "8:30", trend: "up" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Analytics Overview</h1>
        <p className="text-slate-500 text-sm mt-1">Your platform&apos;s digital reach at a glance — updated in real time.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div key={kpi.title} className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${kpi.bg} flex items-center justify-center`}>
                  <Icon size={20} className={kpi.color} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-medium ${kpi.trend === "up" ? "text-emerald-600" : "text-red-500"}`}>
                  {kpi.trend === "up" ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {kpi.change}
                </div>
              </div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{kpi.value}</p>
              <p className="text-sm font-medium text-slate-700 mb-0.5">{kpi.title}</p>
              <p className="text-xs text-slate-400">{kpi.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Two-column below */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900">Recent Activity</h2>
            <Activity size={16} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full shrink-0 ${
                  item.type === "register" ? "bg-cyan-500" :
                  item.type === "upload" ? "bg-amber-500" :
                  item.type === "blog" ? "bg-emerald-500" :
                  "bg-slate-300"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800">{item.action}</p>
                  <p className="text-xs text-slate-400">{item.user}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
                  <Clock size={10} />
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Videos */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-slate-900">Top Performing Videos</h2>
            <Eye size={16} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {topVideos.map((video, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-slate-400 text-sm font-medium w-5 text-center">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-800 font-medium truncate">{video.title}</p>
                  <p className="text-xs text-slate-400">{video.duration}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${video.trend === "up" ? "text-cyan-900" : "text-slate-500"}`}>
                  {video.views}
                  {video.trend === "up" ? <TrendingUp size={13} className="text-emerald-500" /> : <ArrowDownRight size={13} className="text-red-400" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick action cards */}
      <div className="grid sm:grid-cols-3 gap-5">
        {[
          { href: "/dashboard/media", label: "Upload New Video", desc: "Add to video library", color: "bg-cyan-900", icon: Play },
          { href: "/dashboard/workshop", label: "Manage Workshop", desc: "Edit agenda, view Q&A", color: "bg-primary", icon: Calendar },
          { href: "/dashboard/blog", label: "Publish Article", desc: "Write or update blog post", color: "bg-emerald-700", icon: Activity },
        ].map(({ href, label, desc, color, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className={`${color} rounded-2xl p-5 text-white hover:opacity-90 transition-opacity flex items-center gap-4`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <Icon size={22} />
            </div>
            <div>
              <p className="font-bold">{label}</p>
              <p className="text-white/70 text-xs mt-0.5">{desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
