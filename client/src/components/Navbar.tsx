import { useEffect, useState } from 'react';

const sections = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled ? 'bg-slate-100/95 backdrop-blur border-b border-slate-200' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-semibold tracking-tight text-slate-800">Shivam Ray</a>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-slate-300 bg-white"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.href}>
              <a href={s.href} className="text-slate-900/80 hover:text-indigo-500 transition-colors font-medium">{s.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <ul className="md:hidden mx-auto max-w-6xl px-4 pb-4 grid gap-2 text-sm">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="block rounded-md border border-slate-200 px-3 py-2 text-slate-900/80 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white"
                onClick={() => setIsOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}


