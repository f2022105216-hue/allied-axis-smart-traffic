import { motion } from 'framer-motion'
import {
  ArrowLeftRight,
  CarFront,
  CloudRain,
  Eye,
  Gauge,
  MoonStar,
  ShieldCheck,
  TriangleAlert,
} from 'lucide-react'

const sceneTypes = {
  Driving: ['control', 'indicator', 'tailgating'],
  Speed: ['limit', 'weather', 'conditions'],
  Parking: ['designated', 'restricted', 'intersection'],
  Safety: ['following', 'alert', 'blind-spot'],
}

function TrafficRuleScene({ category, index }) {
  const sceneType = sceneTypes[category]?.[index]

  return (
    <div className="relative h-32 overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(180deg,#173044_0%,#203b46_48%,#111827_49%,#0b1220_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-12 border-t border-white/10 bg-slate-800/90">
        <motion.div
          className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/40"
          animate={{ x: ['0%', '-20%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {sceneType === 'limit' && (
        <>
          <div className="absolute right-7 top-3 flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-rose-300 bg-white text-sm font-black text-slate-900 shadow-[0_0_14px_rgba(251,113,133,0.4)]">30</div>
          <motion.div
            className="absolute bottom-3 left-[22%] text-cyan-200"
            animate={{ x: [0, 32, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-cyan-400/20" />
          </motion.div>
          <span className="absolute left-3 top-3 rounded-full bg-rose-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-rose-200">SCHOOL ZONE</span>
        </>
      )}

      {sceneType === 'control' && (
        <>
          <ShieldCheck className="absolute right-5 top-3 h-7 w-7 text-emerald-300" />
          <motion.div
            className="absolute bottom-3 left-8 text-emerald-200 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]"
            animate={{ x: [0, 25, 0], rotate: [0, -3, 3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-9 w-9 fill-emerald-400/20" />
          </motion.div>
          <span className="absolute left-3 top-3 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">STEADY CONTROL</span>
        </>
      )}

      {sceneType === 'indicator' && (
        <>
          <motion.div
            className="absolute bottom-3 left-[28%] text-cyan-200"
            animate={{ x: [0, 38, 38, 0], y: [0, -5, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-9 w-9 fill-cyan-400/20" />
          </motion.div>
          <motion.div
            className="absolute left-[24%] top-8 text-amber-300"
            animate={{ opacity: [0.2, 1, 0.2], x: [0, 10, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          >
            <ArrowLeftRight className="h-7 w-7" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-amber-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-amber-200">SIGNAL FIRST</span>
        </>
      )}

      {sceneType === 'tailgating' && (
        <>
          <CarFront className="absolute bottom-3 left-[24%] h-8 w-8 text-cyan-200" />
          <CarFront className="absolute bottom-3 right-[24%] h-8 w-8 rotate-180 text-amber-200" />
          <motion.div
            className="absolute bottom-7 left-1/2 h-0 w-12 -translate-x-1/2 border-t-2 border-dashed border-emerald-300"
            animate={{ width: [36, 52, 36], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">SAFE GAP</span>
        </>
      )}

      {sceneType === 'weather' && (
        <>
          <CloudRain className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 text-sky-200" />
          {[12, 28, 45, 63, 79, 92].map((left, drop) => (
            <motion.span
              key={left}
              className="absolute top-9 h-3 w-0.5 rounded-full bg-sky-200/80"
              style={{ left: `${left}%` }}
              animate={{ y: [0, 24], opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: drop * 0.12, ease: 'linear' }}
            />
          ))}
          <motion.div
            className="absolute bottom-3 left-[40%] text-sky-300"
            animate={{ x: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-sky-400/20" />
          </motion.div>
          <span className="absolute right-3 top-3 rounded-full bg-sky-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-sky-200">SLOW DOWN</span>
        </>
      )}

      {sceneType === 'conditions' && (
        <>
          <Gauge className="absolute right-5 top-3 h-8 w-8 text-cyan-200" />
          <motion.div
            className="absolute right-9 top-[1.15rem] h-4 w-0.5 origin-bottom rounded-full bg-amber-300"
            animate={{ rotate: [-55, 42, -25] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-3 left-[22%] text-cyan-200"
            animate={{ x: [0, 36, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-cyan-400/20" />
          </motion.div>
          <span className="absolute left-3 top-3 rounded-full bg-cyan-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-cyan-200">MATCH YOUR SPEED</span>
        </>
      )}

      {sceneType === 'designated' && (
        <>
          <motion.div
            className="absolute inset-x-0 top-0 flex h-5 items-center justify-center bg-rose-500/80 text-[8px] font-bold tracking-wider text-white"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            EMERGENCY ROUTE - KEEP CLEAR
          </motion.div>
          <div className="absolute right-5 bottom-2 h-9 w-12 rounded border-2 border-dashed border-emerald-200/80" />
          <motion.div
            className="absolute bottom-3 left-7 text-emerald-200"
            animate={{ x: [0, 95, 95], y: [0, 0, -1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-7 w-7 fill-emerald-400/20" />
          </motion.div>
          <span className="absolute left-3 top-7 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">PARK IN MARKED BAYS</span>
        </>
      )}

      {sceneType === 'restricted' && (
        <>
          <div className="absolute right-5 top-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-rose-300 text-lg font-black text-rose-200">P</div>
          <motion.div
            className="absolute right-[1.4rem] top-[1.55rem] h-0.5 w-10 rotate-[-45deg] bg-rose-300"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-3 left-8 text-rose-200"
            animate={{ x: [0, 28, 70], opacity: [1, 1, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-rose-400/20" />
          </motion.div>
          <span className="absolute left-3 top-3 rounded-full bg-rose-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-rose-200">KEEP CLEAR</span>
        </>
      )}

      {sceneType === 'intersection' && (
        <>
          <div className="absolute left-1/2 top-0 h-full w-12 -translate-x-1/2 border-x border-white/15 bg-slate-800/70" />
          <motion.div
            className="absolute bottom-3 left-[24%] text-violet-200"
            animate={{ x: [0, 44, 44] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-violet-400/20" />
          </motion.div>
          <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded border border-amber-300/70 bg-amber-300/10" />
          <span className="absolute right-2 top-2 rounded-full bg-violet-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-violet-200">CLEAR THE CORNER</span>
        </>
      )}

      {sceneType === 'following' && (
        <>
          <CarFront className="absolute bottom-3 left-[22%] h-8 w-8 text-emerald-200" />
          <CarFront className="absolute bottom-3 right-[22%] h-8 w-8 rotate-180 text-cyan-200" />
          <motion.div
            className="absolute bottom-7 left-1/2 h-0 w-14 -translate-x-1/2 border-t-2 border-dashed border-emerald-300"
            animate={{ width: [44, 62, 44] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <ShieldCheck className="absolute left-1/2 top-3 h-6 w-6 -translate-x-1/2 text-emerald-300" />
        </>
      )}

      {sceneType === 'alert' && (
        <>
          <MoonStar className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 text-indigo-200" />
          <motion.div
            className="absolute left-1/2 top-2 h-9 w-9 -translate-x-1/2 rounded-full border border-rose-300"
            animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.25, 0.8, 0.25] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          <TriangleAlert className="absolute right-5 top-3 h-7 w-7 text-rose-300" />
          <span className="absolute left-1/2 top-12 -translate-x-1/2 rounded-full bg-rose-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-rose-200">REST BEFORE DRIVING</span>
          <CarFront className="absolute bottom-3 left-1/2 h-7 w-7 -translate-x-1/2 text-slate-300/70" />
        </>
      )}

      {sceneType === 'blind-spot' && (
        <>
          <CarFront className="absolute bottom-2 left-1/2 h-9 w-9 -translate-x-1/2 text-cyan-200" />
          <motion.div
            className="absolute bottom-3 left-[28%] h-7 w-8 rounded-full border border-amber-300/80 bg-amber-300/10"
            animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-3 right-[28%] h-7 w-8 rounded-full border border-amber-300/80 bg-amber-300/10"
            animate={{ scale: [1.15, 0.85, 1.15], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <Eye className="absolute left-1/2 top-2 h-6 w-6 -translate-x-1/2 text-amber-200" />
          <ArrowLeftRight className="absolute left-1/2 top-8 h-5 w-5 -translate-x-1/2 text-amber-200" />
        </>
      )}
    </div>
  )
}

export default TrafficRuleScene