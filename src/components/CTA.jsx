function CTA() {
  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Bring your system to life with UTSPL</h2>
              <p className="mt-3 text-white/70">Tell us about your project and we’ll craft a tailored, end-to-end solution.</p>
              <ul className="mt-6 space-y-2 text-white/70 text-sm">
                <li>• Response within 24 hours</li>
                <li>• NDA-ready for confidential projects</li>
                <li>• On-site commissioning available</li>
              </ul>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Name" />
                <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Company" />
              </div>
              <input className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Email" />
              <textarea rows="4" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Project details" />
              <button type="button" className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-3 font-semibold text-black shadow hover:shadow-lg hover:scale-[1.02] transition">Send request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
