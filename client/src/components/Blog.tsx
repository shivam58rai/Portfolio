import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/api';

type BlogPost = { title: string; summary: string; url: string };

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJson<BlogPost[]>('/api/blog').then(setPosts).catch((e) => setError(e.message));
  }, []);

  return (
    <section id="blog" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Blog</h2>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {posts.map((p) => (
          <a key={p.title} href={p.url} target="_blank" className="rounded-lg border border-slate-200 bg-white p-6 text-slate-900 animate-fadeInUp hover:shadow-md hover:border-indigo-500 transition-all">
            <p className="font-medium text-slate-900">{p.title}</p>
            <p className="text-sm text-slate-900/70 mt-1">{p.summary}</p>
          </a>
        ))}
        {posts.length === 0 && !error && (
          <div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-900/70 animate-fadeInUp">Coming soon.</div>
        )}
      </div>
    </section>
  );
}


