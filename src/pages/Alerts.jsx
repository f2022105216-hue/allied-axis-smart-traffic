import { useMemo, useState } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { alerts } from '../data/alerts'
import AlertCard from '../components/AlertCard'
import AlertShortVideo from '../components/AlertShortVideo'
import PageBackdrop from '../components/PageBackdrop'

function Alerts() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ['All', ...new Set(alerts.map((item) => item.category))]

  const filteredAlerts = useMemo(() => {
    if (selectedCategory === 'All') return alerts
    return alerts.filter((alert) => alert.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="alert" />
      {/* Alerts Section */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Alerts</p>
          <h1 className="mt-3 text-4xl font-black text-white">Traffic alerts overview</h1>
        </div>
        <div className="relative self-start md:self-auto">
          <button
            type="button"
            aria-expanded={isFilterOpen}
            aria-haspopup="menu"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] transition hover:border-emerald-400/60"
          >
            <SlidersHorizontal className="h-4 w-4 text-emerald-300" />
            <span>{selectedCategory === 'All' ? 'Filters' : selectedCategory}</span>
            <ChevronDown
              className={`h-4 w-4 text-slate-300 transition-transform duration-200 ${
                isFilterOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              role="menu"
              className="absolute right-0 top-full z-20 mt-2 w-52 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-[0_18px_40px_rgba(2,6,23,0.65)]"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="menuitem"
                  onClick={() => {
                    setSelectedCategory(category)
                    setIsFilterOpen(false)
                  }}
                  className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition ${
                    selectedCategory === category
                      ? 'bg-emerald-500/12 text-emerald-200'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>{category}</span>
                  {selectedCategory === category && <span className="text-xs text-emerald-300">✓</span>}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <AlertShortVideo title="Road closure warning" category="Road Closure" severity="High" accent="amber" />
        <AlertShortVideo title="Weather slowdown" category="Weather" severity="Moderate" accent="cyan" />
        <AlertShortVideo title="Accident hotspot" category="Accident" severity="Critical" accent="red" />
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
