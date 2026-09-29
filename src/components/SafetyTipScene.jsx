import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Bike,
  CarFront,
  Footprints,
  HardHat,
  Smartphone,
  TriangleAlert,
} from 'lucide-react'

function SafetyTipScene({ title }) {
  const topic = title.toLowerCase()

  return (
    <div className="relative mb-4 h-24 overflow-hidden rounded-xl border border-slate-700 bg-[linear-gradient(180deg,#173044_0%,#23424c_48%,#111827_49%,#0b1220_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-8 border-t border-white/10 bg-slate-800/90">
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/40" />
      </div>

      {topic.includes('buckle') && (
        <>
          <CarFront className="absolute bottom-2 left-[40%] h-9 w-9 text-emerald-200" />
          <motion.div
            className="absolute left-[47%] top-2 h-14 w-1 rotate-[-28deg] rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.6)]"
            animate={{ rotate: [-30, -24, -30] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1/2 top-8 h-3 w-3 rounded-sm border border-amber-100 bg-amber-400"
            animate={{ scale: [0.9, 1.15, 0.9] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          />
          <span className="absolute left-3 top-3 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">CLICK TO SECURE</span>
        </>
      )}

      {topic.includes('distance') && (
        <>
          <CarFront className="absolute bottom-2 left-[18%] h-8 w-8 text-emerald-200" />
          <CarFront className="absolute bottom-2 right-[18%] h-8 w-8 rotate-180 text-cyan-200" />
          <motion.div
            className="absolute bottom-7 left-1/2 h-0 w-16 -translate-x-1/2 border-t-2 border-dashed border-emerald-300"
            animate={{ width: [42, 66, 42], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <span className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">ROOM TO BRAKE</span>
        </>
      )}

      {topic.includes('helmet') && (
        <>
          <motion.div
            className="absolute bottom-2 left-[38%] text-cyan-200"
            animate={{ x: [0, 28, 0], y: [0, -1, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Bike className="h-9 w-9" />
          </motion.div>
          <motion.div
            className="absolute left-[43%] top-2 rounded-t-full border-2 border-amber-200 bg-amber-300/25 px-2 py-1 text-amber-100"
            animate={{ y: [0, 4, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          >
            <HardHat className="h-5 w-5" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-cyan-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-cyan-200">CERTIFIED HELMET</span>
        </>
      )}

      {topic.includes('signals') && (
        <>
          <motion.div
            className="absolute bottom-2 left-[35%] text-cyan-200"
            animate={{ x: [0, 32, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="absolute left-[31%] top-7 text-amber-300"
            animate={{ opacity: [0.15, 1, 0.15], x: [0, 5, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          >
            <ArrowUpRight className="h-6 w-6" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-amber-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-amber-200">SIGNAL EARLY</span>
        </>
      )}

      {topic.includes('pedestrian') && (
        <>
          <div className="absolute bottom-2 left-[34%] flex h-5 gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((stripe) => <span key={stripe} className="h-full w-2 bg-white/75" />)}
          </div>
          <CarFront className="absolute bottom-2 left-[12%] h-7 w-7 text-rose-200" />
          <motion.div
            className="absolute bottom-2 left-[40%] text-amber-200"
            animate={{ x: [0, 28, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Footprints className="h-6 w-6" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-amber-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-amber-200">LOOK BOTH WAYS</span>
        </>
      )}

      {topic.includes('mobile') && (
        <>
          <CarFront className="absolute bottom-2 left-[18%] h-8 w-8 text-cyan-200" />
          <motion.div
            className="absolute right-[28%] top-2 rounded-lg border border-rose-200 bg-rose-500/20 p-1.5 text-rose-200"
            animate={{ x: [-2, 2, -2], rotate: [-4, 4, -4] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          >
            <Smartphone className="h-6 w-6" />
          </motion.div>
          <motion.div
            className="absolute right-[18%] top-3"
            animate={{ scale: [0.85, 1.2, 0.85], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <TriangleAlert className="h-5 w-5 text-rose-300" />
          </motion.div>
          <span className="absolute left-3 top-3 rounded-full bg-rose-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-rose-200">EYES ON THE ROAD</span>
        </>
      )}
    </div>
  )
}

export default SafetyTipScene