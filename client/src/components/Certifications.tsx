export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Certifications</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 animate-fadeInUp">
        <div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md hover:border-indigo-500 transition-all">
          <p className="font-medium text-slate-900">Certificate Title (Placeholder)</p>
          <p className="text-sm text-slate-900/70">Issuing Organization • Year</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-md hover:border-indigo-500 transition-all">
          <p className="font-medium text-slate-900">More certificates coming soon</p>
          <p className="text-sm text-slate-900/70">Placeholder</p>
        </div>
      </div>
    </section>
  );
}


