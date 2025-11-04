export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 grid items-center gap-10 md:grid-cols-2">
        <div className="animate-fadeInUp">
          <p className="text-sm tracking-wide text-indigo-500 font-medium">Hello, I am</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight text-slate-800">Shivam Ray</h1>
          <p className="mt-2 text-lg md:text-xl font-medium text-slate-900">Full Stack Web Developer</p>
          <p className="mt-4 text-slate-900/80 leading-relaxed">
            I build modern, accessible, and performant web apps with clear structure and clean UI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/resume/Shiva_Resume.pdf" download className="rounded-md bg-slate-800 text-white px-4 py-2 text-sm font-medium hover:bg-slate-900 transition-all shadow-md hover:shadow-lg">
              Download Resume
            </a>
            <a href="#contact" className="rounded-md border-2 border-indigo-500 text-indigo-500 px-4 py-2 text-sm font-medium hover:bg-indigo-50 transition-all">
              Contact Me
            </a>
          </div>
        </div>
        <div className="justify-self-center animate-fadeIn">
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-white">
            <img 
              src="https://media.licdn.com/dms/image/profile-displayphoto-shrink_400_400/0/your-linkedin-image-url" 
              alt="Shivam Ray" 
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if LinkedIn image fails to load
                e.currentTarget.src = "/profile-placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}


