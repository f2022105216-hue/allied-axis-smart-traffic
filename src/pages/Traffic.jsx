import { useMemo, useState } from 'react'
import { ChevronDown, Search, SlidersHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { trafficData } from '../data/trafficData'
import TrafficCard from '../components/TrafficCard'
import PageBackdrop from '../components/PageBackdrop'

function Traffic() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredTraffic = useMemo(() => {
    return trafficData.filter((item) => {
      const matchesQuery = item.area.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'All' || item.condition === filter
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  const statusFilters = ['All', 'Low', 'Moderate', 'Heavy', 'Blocked']

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="traffic" />
      {/* Traffic Dashboard Section */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic dashboard</p>
        <h1 className="mt-3 text-4xl font-black text-white">Traffic conditions by area</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-300">
          This dashboard uses static demo traffic information for planning and awareness purposes.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
      >
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search area name"
              className="w-full rounded-full border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none ring-0 transition focus:border-emerald-400"
            />
          </label>

          <div className="relative flex items-center">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] transition hover:border-emerald-400/60"
              >
                <SlidersHorizontal className="h-4 w-4 text-emerald-300" />
                <span>Filters</span>
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
                  className="absolute left-0 top-full z-20 mt-2 w-44 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 shadow-[0_18px_40px_rgba(2,6,23,0.65)]"
                >
                  {statusFilters.map((statusOption) => (
                    <button
                      key={statusOption}
                      type="button"
                      onClick={() => {
                        setFilter(statusOption)
                        setIsFilterOpen(false)
                      }}
                      className={`flex w-full items-center justify-between px-3 py-2.5 text-left text-sm transition ${
                        filter === statusOption
                          ? 'bg-emerald-500/12 text-emerald-200'
                          : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{statusOption}</span>
                      {filter === statusOption && <span className="text-xs text-emerald-300">✓</span>}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredTraffic.length > 0 ? (
          filteredTraffic.map((item) => <TrafficCard key={item.area} {...item} />)
        ) : (
          <div className="col-span-full rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-10 text-center text-slate-300">
            No matching traffic area found.
          </div>
        )}
      </div>
    </div>
  )
}

export default Traffic
