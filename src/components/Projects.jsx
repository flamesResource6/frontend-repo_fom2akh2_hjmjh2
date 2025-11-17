import { motion } from 'framer-motion';

function ProjectCard({ title, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
    >
      <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10" />
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs text-white/70 rounded-full border border-white/10 px-2 py-1">{t}</span>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  const data = [
    { title: 'Robotic Packaging Line', tags: ['PLC', 'SCADA', 'Robotics'] },
    { title: 'Smart Power Distribution', tags: ['Switchgear', 'Monitoring'] },
    { title: 'Automated Test Bench', tags: ['HMI', 'Sensors', 'DAQ'] },
  ];

  return (
    <section id="projects" className="relative bg-zinc-950 text-white py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-amber-500 font-semibold text-sm">Case studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2">Selected projects</h2>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {data.map((p) => (
            <ProjectCard key={p.title} title={p.title} tags={p.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
