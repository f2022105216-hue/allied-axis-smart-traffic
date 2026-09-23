import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { motion } from 'framer-motion'
import { trafficData } from '../data/trafficData'
import TrafficCard from '../components/TrafficCard'

function Traffic() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const filteredTraffic = useMemo(() => {
    return trafficData.filter((item) => {
      const matchesQuery = item.area.toLowerCase().includes(query.toLowerCase())
      const matchesFilter = filter === 'All' || item.condition === filter
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  const statusFilters = ['All', 'Low', 'Moderate', 'Heavy', 'Blocked']

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              <SlidersHorizontal className="h-4 w-4 text-emerald-300" />
              Filters
            </div>
            {statusFilters.map((statusOption) => (
              <button
                key={statusOption}
                type="button"
                onClick={() => setFilter(statusOption)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  filter === statusOption
                    ? 'bg-emerald-500 text-slate-950'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {statusOption}
              </button>
            ))}
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
