"use client";

import { useState } from "react";
import { blogPosts, mythFacts, blogCategoryKeys, type BlogCategoryKey } from "@/lib/data/blog";
import { Plus, Edit, Trash2, Eye, EyeOff, Check, X, FileText, Tag, ChevronDown, ChevronUp } from "lucide-react";

type BlogPostCategory = Exclude<BlogCategoryKey, "all">;

const statuses = ["published", "draft"] as const;

export default function BlogCMSPage() {
  const [posts, setPosts] = useState(
    blogPosts.map((p) => ({ ...p, status: p.featured ? "published" : "draft" as "published" | "draft" }))
  );
  const [myths, setMyths] = useState(mythFacts);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<{ title: string; category: BlogPostCategory; excerpt: string; content: string }>({
    title: "",
    category: blogCategoryKeys[1] as BlogPostCategory,
    excerpt: "",
    content: "",
  });

  const toggleStatus = (id: string) => {
    setPosts(posts.map((p) =>
      p.id === id ? { ...p, status: p.status === "published" ? "draft" : "published" } : p
    ));
  };

  const deletePost = (id: string) => setPosts(posts.filter((p) => p.id !== id));

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Blog & Content CMS</h1>
          <p className="text-slate-500 text-sm mt-1">Publish articles, manage categories, and update Myth vs. Fact items.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="btn-primary">
          <Plus size={16} />
          New Article
        </button>
      </div>

      {/* Quick Publish Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 animate-slide-up">
          <h3 className="font-bold text-slate-900 mb-5 flex items-center gap-2">
            <FileText size={18} className="text-primary" />
            New Article
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Title *</label>
              <input
                className="input-field"
                placeholder="Article title..."
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Category *</label>
              <select
                className="input-field"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as BlogPostCategory })}
              >
                {blogCategoryKeys.slice(1).map((cat) => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Excerpt</label>
            <textarea
              className="input-field resize-none"
              rows={2}
              placeholder="Brief summary..."
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            />
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Content</label>
            <textarea
              className="input-field resize-none"
              rows={6}
              placeholder="Write your article content here..."
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            />
          </div>
          <div className="flex gap-3">
            <button
              className="btn-primary"
              onClick={() => {
                if (form.title) {
                  setPosts([{
                    id: `b${Date.now()}`,
                    title: { en: form.title, ar: form.title },
                    excerpt: { en: form.excerpt, ar: form.excerpt },
                    category: form.category,
                    date: new Date().toISOString().split("T")[0],
                    readMinutes: 5,
                    featured: false,
                    gradientClass: "from-cyan-800 to-cyan-700",
                    status: "published",
                  }, ...posts]);
                  setForm({ title: "", category: blogCategoryKeys[1] as BlogPostCategory, excerpt: "", content: "" });
                  setShowForm(false);
                }
              }}
            >
              <Check size={16} />
              Publish Article
            </button>
            <button className="btn-ghost" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Articles Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <h2 className="font-bold text-slate-900">All Articles</h2>
          <div className="flex gap-2">
            <span className="badge-navy">{posts.filter(p => p.status === "published").length} Published</span>
            <span className="badge-slate">{posts.filter(p => p.status === "draft").length} Drafts</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900 line-clamp-1">{post.title.en}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{post.readMinutes} min read</p>
                  </td>
                  <td className="px-4 py-4">
                    <span className="badge-gold text-xs">{post.category}</span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`badge text-xs ${post.status === "published" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-xs text-slate-400">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => toggleStatus(post.id)}
                        className="p-1.5 text-slate-400 hover:text-cyan-900 transition-colors rounded-lg hover:bg-cyan-50"
                        title={post.status === "published" ? "Unpublish" : "Publish"}
                      >
                        {post.status === "published" ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors rounded-lg hover:bg-cyan-50" title="Edit">
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => deletePost(post.id)}
                        className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Myth vs. Fact Manager */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-2">
          <Tag size={16} className="text-primary" />
          <h2 className="font-bold text-slate-900">Myth vs. Fact Items</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {myths.map((item) => (
            <div key={item.id} className="px-6 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">Myth</p>
                  <p className="text-sm text-slate-800 mb-2">{item.myth.en}</p>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-1">Fact</p>
                  <p className="text-sm text-slate-600">{item.fact.en}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="p-1.5 text-slate-400 hover:text-amber-700 transition-colors rounded-lg hover:bg-amber-50" title="Edit">
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => setMyths(myths.filter((m) => m.id !== item.id))}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                    title="Delete"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-slate-100">
          <button className="btn-outline text-sm py-2">
            <Plus size={14} />
            Add New Myth vs. Fact
          </button>
        </div>
      </div>
    </div>
  );
}
