import { motion } from 'framer-motion'
import { CarFront } from 'lucide-react'

function TrafficSafetyVideo() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-5 shadow-2xl shadow-slate-950/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.18),_transparent_45%)]" />
      <div className="relative space-y-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
          <span>Live flow</span>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-emerald-300">Safe</span>
        </div>

        <div className="relative h-44 overflow-hidden rounded-2xl border border-slate-700 bg-[linear-gradient(180deg,#111827,#0b1220)]">
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-emerald-500/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-3 h-[2px] bg-emerald-400/40" />

          {[0, 1, 2, 3].map((line) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: [0.2, 1, 0.2], x: ['-10%', '10%', '-10%'] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: line * 0.3 }}
              className="absolute bottom-8 h-1 w-24 rounded-full bg-emerald-300/80"
              style={{ left: `${12 + line * 18}%` }}
            />
          ))}

          <motion.div
            animate={{ x: [0, 180, 0], y: [0, -18, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-4 left-4 text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.45)]"
          >
            <CarFront className="h-12 w-12 fill-cyan-400/25" />
          </motion.div>

          <motion.div
            animate={{ x: [0, -180, 0], y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-11 right-8 text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.45)]"
          >
            <CarFront className="h-10 w-10 fill-emerald-400/25" />
          </motion.div>

          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="absolute left-1/2 top-5 h-10 w-10 -translate-x-1/2 rounded-full border border-amber-400/50 bg-amber-500/10"
          />
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm text-slate-300">
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
            <p className="text-slate-400">Flow</p>
            <p className="mt-1 font-semibold text-emerald-300">92%</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
            <p className="text-slate-400">Alerts</p>
            <p className="mt-1 font-semibold text-amber-300">4</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
            <p className="text-slate-400">Safety</p>
            <p className="mt-1 font-semibold text-cyan-300">High</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficSafetyVideo
