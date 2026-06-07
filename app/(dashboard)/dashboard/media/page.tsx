"use client";

import { useState } from "react";
import { Upload, X, CheckCircle, Film, Image, Tag, AlignLeft, FolderOpen, Plus } from "lucide-react";

const categories = ["Patient Education", "Media Appearances", "Quick Tips", "Conference Talks", "Workshop Recordings"];

const initialUploads = [
  { id: "u1", title: "IFOS 2024 — FESS Keynote Recording", category: "Conference Talks", type: "video", size: "2.4 GB", status: "complete", date: "2024-06-22" },
  { id: "u2", title: "Understanding Chronic Sinusitis — Patient Guide", category: "Patient Education", type: "video", size: "845 MB", status: "complete", date: "2024-06-01" },
  { id: "u3", title: "Workshop Day 1 Highlights", category: "Workshop Recordings", type: "video", size: "1.1 GB", status: "processing", date: "2024-05-28" },
];

export default function MediaUploaderPage() {
  const [dragging, setDragging] = useState(false);
  const [form, setForm] = useState({ title: "", description: "", category: categories[0] });
  const [uploads, setUploads] = useState(initialUploads);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragging(true); };
  const handleDragLeave = () => setDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    // In production: handle file upload
    alert("File dropped! Integrate with storage provider (S3 / Cloudinary).");
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Media Uploader</h1>
        <p className="text-slate-500 text-sm mt-1">Upload videos, workshop flyers, and media files to the library.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Zone */}
        <div className="space-y-5">
          {/* Drag-and-drop area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-300 cursor-pointer ${
              dragging
                ? "border-cyan-900 bg-cyan-50"
                : "border-slate-300 bg-white hover:border-blue-400 hover:bg-slate-50"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mx-auto mb-4">
              <Upload size={28} className="text-cyan-900" />
            </div>
            <p className="font-bold text-slate-900 mb-1">Drag & drop your files here</p>
            <p className="text-slate-400 text-sm mb-4">MP4, MOV, PDF, JPG — up to 5 GB</p>
            <label className="btn-primary cursor-pointer">
              <FolderOpen size={16} />
              Browse Files
              <input type="file" className="hidden" multiple accept="video/*,image/*,.pdf" />
            </label>
          </div>

          {/* Metadata form */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Tag size={16} className="text-primary" />
              File Metadata
            </h3>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Title *</label>
              <input
                className="input-field"
                placeholder="e.g., FESS Patient Education — 2024"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Category *</label>
              <select
                className="input-field"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                <AlignLeft size={13} />
                Description
              </label>
              <textarea
                className="input-field resize-none"
                rows={3}
                placeholder="Brief description of the content..."
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>

            <button className="btn-gold w-full justify-center">
              <Plus size={16} />
              Upload & Publish
            </button>
          </div>
        </div>

        {/* Uploaded Files List */}
        <div>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Uploaded Media</h3>
              <span className="badge-slate">{uploads.length} files</span>
            </div>
            <div className="divide-y divide-slate-100">
              {uploads.map((file) => (
                <div key={file.id} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                    {file.type === "video" ? <Film size={18} className="text-cyan-900" /> : <Image size={18} className="text-cyan-900" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">{file.title}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="badge-gold text-xs">{file.category}</span>
                      <span className="text-xs text-slate-400">{file.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.status === "complete" ? (
                      <CheckCircle size={16} className="text-emerald-500" />
                    ) : (
                      <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
                    )}
                    <button
                      onClick={() => setUploads(uploads.filter((u) => u.id !== file.id))}
                      className="text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <X size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
