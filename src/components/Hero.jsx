import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xXD1hOqciVNtJX50/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-36 pb-20 grid lg:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
              Powering Industry 4.0
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight">
              UTSPL — Electromechanical Engineering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"> Designed for performance.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              We design, build, and maintain advanced electromechanical systems with precision — from automation panels and PLC integration to industrial robotics and smart power solutions.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 font-semibold text-black shadow hover:shadow-lg hover:scale-[1.02] transition">Request a proposal</a>
              <a href="#projects" className="rounded-xl border border-white/15 px-5 py-3 text-white/80 hover:text-white hover:bg-white/5 transition">See our work</a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-white/60">
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
                <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20" />
              </div>
              <p className="text-sm">Trusted by manufacturers, utilities, and startups</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-2xl bg-white/5 border border-white/10" />
                <div className="rounded-2xl bg-white/5 border border-white/10" />
                <div className="rounded-2xl bg-white/5 border border-white/10" />
                <div className="rounded-2xl bg-white/5 border border-white/10" />
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 blur-xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
