import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-800">Contact</h2>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <form
          className="rounded-lg border border-slate-200 bg-white p-6 animate-fadeInUp shadow-sm"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            const payload = {
              name: String(formData.get('name') || ''),
              email: String(formData.get('email') || ''),
              message: String(formData.get('message') || ''),
            };
            try {
              const res = await fetch((import.meta.env.VITE_API_BASE || 'http://localhost:4000') + '/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });
              if (res.ok) {
                alert('Message sent!');
                form.reset();
              } else {
                alert('Failed to send message');
              }
            } catch (err) {
              alert('Network error');
            }
          }}
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-900">Name</label>
              <input name="name" className="mt-1 w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white text-slate-900" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Email</label>
              <input name="email" type="email" className="mt-1 w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white text-slate-900" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900">Message</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-md border border-slate-300 p-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white text-slate-900" placeholder="Hello!"></textarea>
            </div>
            <button className="rounded-md bg-slate-800 px-4 py-2 text-white text-sm w-fit font-medium hover:bg-slate-900 transition-all shadow-md hover:shadow-lg">Send Message</button>
          </div>
        </form>
        <div className="animate-fadeInUp">
          <p className="text-slate-900/80">Feel free to reach out on social media or email.</p>
          <div className="mt-4 flex items-center gap-4">
            <a href="https://www.linkedin.com/in/shivam-ray-92652328b/" target="_blank" aria-label="LinkedIn" className="p-2 rounded-full border border-slate-300 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white">
              <SiLinkedin className="h-5 w-5 text-indigo-500" />
            </a>
            <a href="https://github.com/shivam58rai" target="_blank" aria-label="GitHub" className="p-2 rounded-full border border-slate-300 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white">
              <SiGithub className="h-5 w-5 text-indigo-500" />
            </a>
            <a href="mailto:you@example.com" aria-label="Email" className="p-2 rounded-full border border-slate-300 hover:bg-indigo-50 hover:border-indigo-500 transition-all bg-white">
              <span className="text-indigo-500">@</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


