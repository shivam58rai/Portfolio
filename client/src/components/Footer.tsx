export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-900/70 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Shivam Ray</span>
        <span>Built with React & Tailwind CSS</span>
      </div>
    </footer>
  );
}


