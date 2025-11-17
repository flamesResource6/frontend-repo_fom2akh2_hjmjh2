import { Menu, PlugZap, Wrench, CircuitBoard } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center ring-1 ring-white/20 shadow-inner">
                <PlugZap className="h-5 w-5 text-black" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide text-base">UTSPL</p>
                <p className="text-xs text-white/60">Electro-Mechanical</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
              <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
              <a href="#about" className="text-white/80 hover:text-white transition">About</a>
              <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2 text-sm font-semibold text-black shadow hover:shadow-lg hover:scale-[1.02] transition">
                <Wrench className="h-4 w-4" />
                Get a Quote
              </a>
              <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/80 hover:text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
