import { motion } from 'framer-motion'
import { CarFront, Footprints, Gauge, TriangleAlert } from 'lucide-react'

function TrafficSignScene({ name }) {
  return (
    <div className="relative mb-4 h-20 overflow-hidden rounded-xl border border-slate-700/80 bg-[linear-gradient(180deg,#193448_0%,#23424c_48%,#111827_49%,#0b1220_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-7 border-t border-white/10 bg-slate-800/90">
        <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/40" />
      </div>

      {name === 'Stop' && (
        <>
          <motion.div
            className="absolute bottom-2 left-[23%] text-red-200"
            animate={{ x: [0, 34, 34, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.55, 0.8, 1], ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-red-400/20" />
          </motion.div>
          <motion.span
            className="absolute bottom-2 left-[58%] h-8 border-l-2 border-red-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </>
      )}

      {name === 'Speed Limit' && (
        <>
          <Gauge className="absolute right-4 top-2 h-7 w-7 text-blue-200" />
          <motion.div
            className="absolute right-[1.8rem] top-3 h-3 w-0.5 origin-bottom rounded-full bg-amber-300"
            animate={{ rotate: [-48, 4, -30] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-2 left-[15%] text-blue-200"
            animate={{ x: [0, 80, 24, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-7 w-7 fill-blue-400/20" />
          </motion.div>
        </>
      )}

      {name === 'School Crossing' && (
        <>
          <TriangleAlert className="absolute right-4 top-2 h-7 w-7 text-amber-200" />
          <motion.div
            className="absolute bottom-2 left-[28%] flex text-amber-200"
            animate={{ x: [0, 42, 42, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.48, 0.8, 1], ease: 'easeInOut' }}
          >
            <Footprints className="h-7 w-7" />
          </motion.div>
          <motion.div
            className="absolute bottom-2 right-[16%] text-rose-200"
            animate={{ x: [0, 16, 16, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, times: [0, 0.48, 0.8, 1], ease: 'easeInOut' }}
          >
            <CarFront className="h-7 w-7 fill-rose-400/20" />
          </motion.div>
        </>
      )}

      {name === 'No Parking' && (
        <>
          <div className="absolute right-5 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-rose-300 text-sm font-black text-rose-100">P</div>
          <motion.div
            className="absolute right-[1.15rem] top-[1.05rem] h-0.5 w-10 rotate-[-45deg] bg-rose-300"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-2 left-[14%] text-cyan-200"
            animate={{ x: [0, 100, 100] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-7 w-7 fill-cyan-400/20" />
          </motion.div>
        </>
      )}

      {name === 'Roundabout' && (
        <>
          <motion.div
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-emerald-200/80"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute left-[calc(50%-0.875rem)] top-[calc(50%-0.875rem)] text-emerald-200"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          >
            <CarFront className="h-7 w-7" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">YIELD & CIRCLE</span>
        </>
      )}

      {name === 'Pedestrian Crossing' && (
        <>
          <div className="absolute bottom-2 left-[35%] flex h-5 gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((stripe) => <span key={stripe} className="h-full w-2 bg-white/75" />)}
          </div>
          <motion.div
            className="absolute bottom-2 left-[14%] text-rose-200"
            animate={{ x: [0, 15, 15, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: 'easeInOut' }}
          >
            <CarFront className="h-7 w-7 fill-rose-400/20" />
          </motion.div>
          <motion.div
            className="absolute bottom-2 left-[43%] text-amber-200"
            animate={{ x: [0, 34, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Footprints className="h-6 w-6" />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default TrafficSignScene