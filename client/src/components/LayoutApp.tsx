import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Certifications from './Certifications';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

export default function LayoutApp() {
  return (
    <div className="bg-white text-zinc-900">
      <Navbar />
      <main className="pt-2">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


