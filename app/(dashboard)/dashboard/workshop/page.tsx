"use client";

import { useState } from "react";
import { upcomingWorkshop } from "@/lib/data/workshop";
import { Calendar, Users, HelpCircle, CheckCircle, X, Plus, Eye, EyeOff } from "lucide-react";

const mockQuestions = [
  { id: "q1", question: "What are your criteria for recommending FESS versus continued medical therapy in chronic rhinosinusitis?", approved: false, date: "2026-06-01" },
  { id: "q2", question: "In your experience, what is the optimal approach for primary vs revision rhinoplasty in patients with deviated septum?", approved: true, date: "2026-06-03" },
  { id: "q3", question: "When do you recommend surgical intervention for pediatric snoring versus watchful waiting?", approved: false, date: "2026-06-05" },
  { id: "q4", question: "What is your protocol for ventilation tube follow-up in children with recurrent otitis media?", approved: true, date: "2026-06-06" },
];

export default function WorkshopManagerPage() {
  const ws = upcomingWorkshop;
  const [countdownActive, setCountdownActive] = useState(true);
  const [registrationsOpen, setRegistrationsOpen] = useState(true);
  const [questions, setQuestions] = useState(mockQuestions);

  const toggleApprove = (id: string) => {
    setQuestions(questions.map((q) => q.id === id ? { ...q, approved: !q.approved } : q));
  };

  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const filled = Math.round((ws.registeredCount / ws.capacity) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Workshop Manager</h1>
        <p className="text-slate-500 text-sm mt-1">Manage upcoming workshops, toggle timers, and review submitted questions.</p>
      </div>

      {/* Workshop overview card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
          <div>
            <h2 className="font-bold text-slate-900 text-lg">{ws.title.en}</h2>
            <p className="text-slate-500 text-sm mt-0.5">{ws.displayDate.en} · {ws.location.en}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Countdown Timer", state: countdownActive, toggle: () => setCountdownActive(!countdownActive) },
              { label: "Registrations Open", state: registrationsOpen, toggle: () => setRegistrationsOpen(!registrationsOpen) },
            ].map(({ label, state, toggle }) => (
              <button
                key={label}
                onClick={toggle}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                  state ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-slate-50 text-slate-500 border-slate-200"
                }`}
              >
                {state ? <Eye size={14} /> : <EyeOff size={14} />}
                {label}: {state ? "On" : "Off"}
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          {[
            { label: "Registered", value: ws.registeredCount, icon: Users, color: "text-cyan-900" },
            { label: "Capacity", value: ws.capacity, icon: Users, color: "text-slate-600" },
            { label: "CME Credits", value: ws.cme, icon: CheckCircle, color: "text-primary" },
            { label: "Faculty", value: ws.speakers.length, icon: Users, color: "text-emerald-600" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-slate-50 rounded-xl p-3 text-center">
              <Icon size={16} className={`${color} mx-auto mb-1.5`} />
              <p className="text-xl font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Capacity bar */}
        <div>
          <div className="flex justify-between text-xs text-slate-500 mb-1.5">
            <span>Capacity filled</span>
            <span>{filled}% ({ws.registeredCount}/{ws.capacity})</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-900 to-amber-700 rounded-full transition-all"
              style={{ width: `${filled}%` }}
            />
          </div>
        </div>
      </div>

      {/* Add New Workshop button */}
      <div className="flex justify-end">
        <button className="btn-primary">
          <Plus size={16} />
          Add New Workshop / Event
        </button>
      </div>

      {/* Q&A Management */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle size={18} className="text-primary" />
            <h2 className="font-bold text-slate-900">Anonymous Clinical Questions</h2>
          </div>
          <div className="flex gap-2">
            <span className="badge-slate">{questions.length} total</span>
            <span className="badge-gold">{questions.filter(q => q.approved).length} approved</span>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {questions.map((q) => (
            <div key={q.id} className="px-6 py-4 flex items-start gap-4">
              <div className="flex-1">
                <p className="text-sm text-slate-800 leading-relaxed">{q.question}</p>
                <p className="text-xs text-slate-400 mt-1">Submitted: {new Date(q.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => toggleApprove(q.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    q.approved
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100"
                      : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <CheckCircle size={12} />
                  {q.approved ? "Approved" : "Approve"}
                </button>
                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="p-1.5 text-slate-300 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
