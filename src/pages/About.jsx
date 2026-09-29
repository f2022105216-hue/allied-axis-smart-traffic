import { motion } from 'framer-motion'
import PageBackdrop from '../components/PageBackdrop'
import AboutScene from '../components/AboutScene'

function About() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="default" />
      {/* About Section */}
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">About</p>
        <h1 className="mt-3 text-4xl font-black text-white">Mission for safer roads and smarter mobility</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8"
        >
          <AboutScene variant="purpose" />
          <h2 className="text-2xl font-bold text-white">Our purpose</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Smart Traffic & Road Safety aims to make road awareness more practical, visible, and actionable. Through clear information, emergency access, and traffic guidance, we want to reduce confusion and encourage safer habits for drivers, riders, and pedestrians.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08 }}
          className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8"
        >
          <AboutScene variant="mission" />
          <h2 className="text-2xl font-bold text-white">Our mission</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            To support safer roads by sharing actionable warnings, daily traffic awareness, and practical education that helps people make better decisions before they travel.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-10 rounded-[2rem] border border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(15,23,42,0.9))] p-8"
      >
        <AboutScene variant="vision" />
        <h2 className="text-2xl font-bold text-white">Vision</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
          A future where roads are smarter, drivers are better informed, and every commuter can move with confidence because safety is built into every decision.
        </p>
      </motion.div>
    </div>
  )
}

export default About
