import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { alerts } from '../data/alerts'
import AlertCard from '../components/AlertCard'

function Alerts() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(alerts.map((item) => item.category))]

  const filteredAlerts = useMemo(() => {
    if (selectedCategory === 'All') return alerts
    return alerts.filter((alert) => alert.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Alerts Section */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Alerts</p>
          <h1 className="mt-3 text-4xl font-black text-white">Traffic alerts overview</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {filteredAlerts.map((alert) => (
          <AlertCard key={alert.id} {...alert} />
        ))}
      </motion.div>
    </div>
  )
}

export default Alerts
