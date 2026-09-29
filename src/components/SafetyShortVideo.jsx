import { motion } from 'framer-motion'

function SafetyShortVideo({ icon, title, accent = 'emerald' }) {
  const accentClass = {
    emerald: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
    amber: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
    cyan: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200',
  }[accent]

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
      <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border ${accentClass}`}>
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="relative h-12 overflow-hidden rounded-xl border border-slate-700 bg-slate-950/70">
          <motion.div
            className="absolute inset-y-2 left-0 w-10 rounded-full bg-gradient-to-r from-emerald-400/60 to-cyan-400/30"
            animate={{ x: ['0%', '130%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-y-0 left-0 w-[30%] rounded-r-full bg-emerald-400/20"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  )
}

export default SafetyShortVideo
