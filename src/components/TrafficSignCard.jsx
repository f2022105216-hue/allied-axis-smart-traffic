import { motion } from 'framer-motion'
import TrafficSignScene from './TrafficSignScene'

function TrafficSignCard({ name, meaning, type, symbol, color, index = 0 }) {
  const colorClasses = {
    red: 'border-red-400/40 bg-red-500/10 text-red-200',
    blue: 'border-blue-400/40 bg-blue-500/10 text-blue-200',
    amber: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
    green: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28, rotateX: 8, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -10, rotateX: 5, rotateY: -4, scale: 1.03 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_18px_50px_rgba(2,6,23,0.4)]"
    >
      {/* Glow layer: adds a soft moving light behind the card to create a subtle live dashboard effect. */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12), transparent 35%)',
        }}
        animate={{ x: [0, 12, 0], y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <TrafficSignScene name={name} />

        <motion.div
          animate={{ y: [0, -3, 0], rotate: name === 'Roundabout' ? [0, 8, 0] : [0, 0, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border text-3xl font-black shadow-[0_0_20px_rgba(15,23,42,0.2)] ${colorClasses[color]}`}
        >
          {symbol}
        </motion.div>

        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">
              {type}
            </span>
          </div>
          <p className="text-sm leading-6 text-slate-300">{meaning}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default TrafficSignCard
