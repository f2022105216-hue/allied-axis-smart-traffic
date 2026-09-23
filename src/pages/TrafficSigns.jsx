import { motion } from 'framer-motion'
import { trafficSigns } from '../data/trafficSigns'
import TrafficSignCard from '../components/TrafficSignCard'

function TrafficSigns() {
  const groupedSigns = {
    Warning: trafficSigns.filter((sign) => sign.type === 'Warning'),
    Regulatory: trafficSigns.filter((sign) => sign.type === 'Regulatory'),
    Informational: trafficSigns.filter((sign) => sign.type === 'Informational'),
    Mandatory: trafficSigns.filter((sign) => sign.type === 'Mandatory'),
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Traffic Signs Section */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic signs</p>
        <h1 className="mt-3 text-4xl font-black text-white">Common signs and their meanings</h1>
      </div>

      <div className="space-y-10">
        {Object.entries(groupedSigns).map(([group, signs]) => (
          signs.length > 0 && (
            <motion.section
              key={group}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <h2 className="mb-6 text-2xl font-bold text-white">{group}</h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {signs.map((sign) => (
                  <TrafficSignCard key={`${group}-${sign.name}`} {...sign} />
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
