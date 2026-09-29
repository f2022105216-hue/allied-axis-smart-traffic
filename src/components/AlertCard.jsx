import { motion } from 'framer-motion'
import { AlertCircle, Clock3, MapPin } from 'lucide-react'
import AlertScene from './AlertScene'

function AlertCard({ title, location, time, category, description, severity }) {
  const severityClass =
    severity === 'High'
      ? 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/40'
      : 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/40'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02, rotateX: 3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.5)]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-rose-500/10 opacity-60"
        animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">{category}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
          </div>
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${severityClass}`}
          >
            {severity}
          </motion.span>
        </div>

        <div className="mb-4"><AlertScene category={category} /></div>

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
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}>
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
          </motion.div>
          <p className="text-sm leading-6 text-slate-300">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default AlertCard
