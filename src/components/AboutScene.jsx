import { motion } from 'framer-motion'
import { ArrowRight, Building2, CarFront, Footprints, MapPin, ShieldCheck, TriangleAlert } from 'lucide-react'

function AboutScene({ variant }) {
  return (
    <div className="relative mb-6 h-36 overflow-hidden rounded-xl border border-slate-700 bg-[linear-gradient(180deg,#173044_0%,#23424c_48%,#111827_49%,#0b1220_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-12 border-t border-white/10 bg-slate-800/90">
        <motion.div
          className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/40"
          animate={{ x: ['0%', '-20%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {variant === 'purpose' && (
        <>
          <motion.div
            className="absolute left-1/2 top-1/2 h-0 w-[58%] -translate-x-1/2 border-t-2 border-dashed border-emerald-300/70"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <Footprints className="absolute left-[18%] top-7 h-8 w-8 text-amber-200" />
          <motion.div
            className="absolute left-1/2 top-6 -translate-x-1/2 text-cyan-200"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <CarFront className="h-9 w-9" />
          </motion.div>
          <motion.div
            className="absolute right-[17%] top-6 text-emerald-200"
            animate={{ scale: [0.92, 1.08, 0.92] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ShieldCheck className="h-9 w-9" />
          </motion.div>
          <span className="absolute inset-x-0 bottom-1 text-center text-[9px] font-bold tracking-[0.16em] text-emerald-100">AWARENESS FOR EVERY ROAD USER</span>
        </>
      )}

      {variant === 'mission' && (
        <>
          <motion.div
            className="absolute left-[12%] top-6 text-amber-200"
            animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <TriangleAlert className="h-8 w-8" />
          </motion.div>
          <div className="absolute left-[33%] right-[20%] top-10 border-t border-dashed border-emerald-200/60" />
          <motion.span
            className="absolute left-[34%] top-[2.35rem] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]"
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute right-[10%] top-6 text-emerald-200"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <MapPin className="h-8 w-8" />
          </motion.div>
          <div className="absolute inset-x-0 top-[4.5rem] flex justify-center gap-2 text-[8px] font-bold tracking-wider">
            <span className="rounded-full bg-amber-400/15 px-2 py-1 text-amber-200">WARN</span>
            <ArrowRight className="h-4 w-4 text-emerald-200" />
            <span className="rounded-full bg-cyan-400/15 px-2 py-1 text-cyan-200">GUIDE</span>
            <ArrowRight className="h-4 w-4 text-emerald-200" />
            <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-emerald-200">ACT</span>
          </div>
        </>
      )}

      {variant === 'vision' && (
        <>
          <Building2 className="absolute bottom-12 left-[17%] h-10 w-10 text-slate-300/80" />
          <Building2 className="absolute bottom-12 right-[17%] h-8 w-8 text-slate-400/70" />
          <motion.div
            className="absolute bottom-2 left-[28%] text-cyan-200"
            animate={{ x: [0, 110, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8" />
          </motion.div>
          <motion.div
            className="absolute bottom-[3.2rem] left-[42%] text-emerald-200"
            animate={{ x: [0, 42, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Footprints className="h-6 w-6" />
          </motion.div>
          <ShieldCheck className="absolute left-1/2 top-3 h-7 w-7 -translate-x-1/2 text-emerald-200 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
          <span className="absolute inset-x-0 bottom-1 text-center text-[9px] font-bold tracking-[0.16em] text-emerald-100">SAFER, CONNECTED MOBILITY</span>
        </>
      )}
    </div>
  )
}

export default AboutScene