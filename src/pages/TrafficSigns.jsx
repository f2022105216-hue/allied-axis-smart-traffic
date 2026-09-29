import { motion } from 'framer-motion'
import { trafficSigns } from '../data/trafficSigns'
import TrafficSignCard from '../components/TrafficSignCard'
import PageBackdrop from '../components/PageBackdrop'

function TrafficSigns() {
  const groupedSigns = {
    Warning: trafficSigns.filter((sign) => sign.type === 'Warning'),
    Regulatory: trafficSigns.filter((sign) => sign.type === 'Regulatory'),
    Informational: trafficSigns.filter((sign) => sign.type === 'Informational'),
    Mandatory: trafficSigns.filter((sign) => sign.type === 'Mandatory'),
  }

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="traffic" />

      {/* Header reveal: this creates a smoother page intro before the section content appears. */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="mb-10"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic signs</p>
        <h1 className="mt-3 text-4xl font-black text-white">Common signs and their meanings</h1>
      </motion.div>

      {/* Category reveal: each sign group fades and slides in as the user scrolls, creating a more polished dashboard feel. */}
      <div className="space-y-10">
        {Object.entries(groupedSigns).map(([group, signs], groupIndex) => (
          signs.length > 0 && (
            <motion.section
              key={group}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.3)]"
            >
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * groupIndex }}
                className="mb-6 text-2xl font-bold text-white"
              >
                {group}
              </motion.h2>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {signs.map((sign, index) => (
                  <TrafficSignCard key={`${group}-${sign.name}`} {...sign} index={index} />
                ))}
              </div>
            </motion.section>
          )
        ))}
      </div>
    </div>
  )
}

export default TrafficSigns
