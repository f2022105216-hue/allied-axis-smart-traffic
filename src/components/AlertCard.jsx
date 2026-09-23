import { motion } from 'framer-motion'
import { AlertCircle, Clock3, MapPin } from 'lucide-react'

function AlertCard({ title, location, time, category, description, severity }) {
  const severityClass =
    severity === 'High'
      ? 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/40'
      : 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/40'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">{category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${severityClass}`}>
          {severity}
        </span>
      </div>

      <div className="space-y-3 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-emerald-300" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-emerald-300" />
          <span>{time}</span>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
        <p className="text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </motion.article>
  )
}

export default AlertCard
