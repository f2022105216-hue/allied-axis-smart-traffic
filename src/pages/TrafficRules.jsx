import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const ruleCategories = {
  Driving: [
    'Always keep both hands on the wheel and maintain control of the vehicle.',
    'Use indicators before turning or changing lanes.',
    'Avoid aggressive driving and tailgating in dense traffic.',
  ],
  Speed: [
    'Follow posted speed limits, especially near schools and residential areas.',
    'Reduce speed during bad weather and poor lighting conditions.',
    'Adapt your speed to road and traffic conditions at all times.',
  ],
  Signals: [
    'Stop fully at red lights and wait for the green signal.',
    'Check both directions before crossing or turning at intersections.',
    'Respond quickly to pedestrian crossing signals and flashing lights.',
  ],
  Parking: [
    'Park only in designated spaces and avoid blocking emergency routes.',
    'Never leave the vehicle in restricted or no-parking areas.',
    'Use hazard lights when required and maintain safe distances from intersections.',
  ],
  Safety: [
    'Keep a safe following distance to avoid sudden collisions.',
    'Never drive under the influence of alcohol or drowsiness.',
    'Check mirrors and blind spots before maneuvering the vehicle.',
  ],
}

function TrafficRules() {
  const [search, setSearch] = useState('')

  const visibleRules = useMemo(() => {
    const term = search.toLowerCase()
    return Object.entries(ruleCategories).map(([category, items]) => ({
      category,
      items: items.filter((item) => item.toLowerCase().includes(term)),
    }))
  }, [search])

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Traffic Rules Section */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic rules</p>
        <h1 className="mt-3 text-4xl font-black text-white">Road rules and safe driving basics</h1>
      </div>

      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search traffic rule"
          className="w-full rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
        />
      </div>

      <div className="space-y-8">
        {visibleRules.map(({ category, items }) => (
          items.length > 0 && (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <h2 className="mb-5 text-2xl font-bold text-white">{category}</h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item, idx) => (
                  <div key={`${category}-${idx}`} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-slate-300">
                    <p className="text-sm leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )
        ))}
      </div>
    </div>
  )
}

export default TrafficRules
