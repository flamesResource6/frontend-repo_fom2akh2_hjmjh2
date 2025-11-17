import { Cpu, Settings, PanelTopOpen, Cable, ShieldCheck, Zap } from 'lucide-react';

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition relative overflow-hidden">
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition" />
      <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-black shadow">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function Services() {
  const items = [
    { icon: Cpu, title: 'Automation & Controls', desc: 'PLC/SCADA, HMI, robotics integration, and custom control panels.' },
    { icon: PanelTopOpen, title: 'Power Systems', desc: 'Switchgear, LV/MV distribution, UPS, and energy optimization.' },
    { icon: Cable, title: 'Industrial Wiring', desc: 'Panel wiring, cable tray, harnessing, and on-site commissioning.' },
    { icon: Settings, title: 'Maintenance & Retrofits', desc: 'Preventive maintenance, retrofitting, and system upgrades.' },
    { icon: ShieldCheck, title: 'Safety & Compliance', desc: 'Arc-flash studies, grounding, and standards compliance.' },
    { icon: Zap, title: 'Rapid Prototyping', desc: 'From concept to shop-floor ready assemblies.' },
  ];

  return (
    <section id="services" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-amber-500 font-semibold text-sm">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">End-to-end electromechanical services</h2>
          </div>
          <p className="hidden md:block max-w-xl text-white/70 text-sm">
            From design and engineering to assembly, installation and lifecycle support — we deliver reliable, efficient systems built for modern industry.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <ServiceCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
