import { useEffect, useState } from 'react';
import { fetchJson } from '../lib/api';

type Project = {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJson<Project[]>('/api/projects').then(setProjects).catch((e) => setError(e.message));
  }, []);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Projects</h2>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-indigo-500 transition-all animate-fadeInUp">
            <div className="relative h-44 w-full bg-slate-100">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-900/70">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="text-xs rounded-full bg-slate-100 px-2 py-1 text-slate-800 border border-slate-200 font-medium">{t}</li>
                ))}
              </ul>
              <div className="mt-4 flex gap-3">
                <a href={p.github} target="_blank" className="text-sm font-medium text-indigo-500 hover:text-indigo-600 underline underline-offset-4 transition-colors">GitHub</a>
                <a href={p.demo} target="_blank" className="text-sm font-medium text-indigo-500 hover:text-indigo-600 underline underline-offset-4 transition-colors">Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


