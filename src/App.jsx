import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CTA />
      </main>
      <footer className="bg-black border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} UTSPL — United Tech Systems Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
