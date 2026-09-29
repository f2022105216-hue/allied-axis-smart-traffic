import { motion } from 'framer-motion'
import { AlertTriangle, CarFront, CircleDashed, Clock3 } from 'lucide-react'

const statusStyles = {
  low: {
    badge: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40',
    icon: <CarFront className="h-5 w-5 text-emerald-300" />,
    flowColor: '#34d399',
    flowWidth: '34%',
    flowDuration: 3.8,
  },
  moderate: {
    badge: 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/40',
    icon: <CircleDashed className="h-5 w-5 text-amber-300" />,
    flowColor: '#fbbf24',
    flowWidth: '56%',
    flowDuration: 2.7,
  },
  heavy: {
    badge: 'bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/40',
    icon: <AlertTriangle className="h-5 w-5 text-orange-300" />,
    flowColor: '#fb923c',
    flowWidth: '82%',
    flowDuration: 1.5,
  },
  blocked: {
    badge: 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-400/40',
    icon: <Clock3 className="h-5 w-5 text-rose-300" />,
    flowColor: '#f87171',
    flowWidth: '100%',
  },
}

function TrafficCard({ area, condition, eta, note, status, image }) {
  const style = statusStyles[status] || statusStyles.moderate

  const scene = (
    <div className="relative h-28 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900">
      {image && (
        <img
          src={image}
          alt={`${area} area`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/20 to-slate-950/75" />
      <motion.div
        aria-label={`${condition} traffic flow`}
        className="absolute bottom-0 left-0 h-1 origin-left rounded-r-full"
        style={{ width: style.flowWidth, backgroundColor: style.flowColor, boxShadow: `0 0 12px ${style.flowColor}` }}
        animate={status === 'blocked' ? { opacity: 1 } : { opacity: [0.55, 1, 0.55] }}
        transition={{ duration: style.flowDuration || 1, repeat: status === 'blocked' ? 0 : Infinity, ease: 'easeInOut' }}
      >
      </motion.div>
      <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-slate-950/65 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {condition} traffic
      </div>
    </div>
  )

  return (
    <motion.article
      initial={{ opacity: 0, y: 26, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.45)]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
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

        <div className="mb-4">{scene}</div>

        <div className="space-y-3 text-sm text-slate-300">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-slate-400">Est. travel</span>
            <span className="font-semibold text-white">{eta}</span>
          </div>
          <p className="leading-6 text-slate-300">{note}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default TrafficCard
