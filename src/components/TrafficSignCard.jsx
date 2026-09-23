import { motion } from 'framer-motion'

function TrafficSignCard({ name, meaning, type, symbol, color }) {
  const colorClasses = {
    red: 'border-red-400/40 bg-red-500/10 text-red-200',
    blue: 'border-blue-400/40 bg-blue-500/10 text-blue-200',
    amber: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
    green: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6, rotateX: 2 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/20"
    >
      <div className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border text-3xl font-black ${colorClasses[color]}`}>
        {symbol}
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
            {type}
          </span>
        </div>
        <p className="text-sm leading-6 text-slate-300">{meaning}</p>
      </div>
    </motion.article>
  )
}

export default TrafficSignCard
