import { motion } from 'framer-motion'
import { AlertTriangle, CarFront, CircleDashed, Clock3 } from 'lucide-react'

const statusStyles = {
  low: {
    badge: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40',
    icon: <CarFront className="h-5 w-5 text-emerald-300" />,
  },
  moderate: {
    badge: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/40',
    icon: <CircleDashed className="h-5 w-5 text-amber-300" />,
  },
  heavy: {
    badge: 'bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/40',
    icon: <AlertTriangle className="h-5 w-5 text-orange-300" />,
  },
  blocked: {
    badge: 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/40',
    icon: <Clock3 className="h-5 w-5 text-rose-300" />,
  },
}

function TrafficCard({ area, condition, eta, note, status }) {
  const style = statusStyles[status] || statusStyles.moderate

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.45)]"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Area</p>
          <h3 className="mt-1 text-xl font-semibold text-white">{area}</h3>
        </div>
        <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${style.badge}`}>
          {style.icon}
          {condition}
        </div>
      </div>

      <div className="space-y-3 text-sm text-slate-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-slate-400">Est. travel</span>
          <span className="font-semibold text-white">{eta}</span>
        </div>
        <p className="leading-6 text-slate-300">{note}</p>
      </div>
    </motion.article>
  )
}

export default TrafficCard
