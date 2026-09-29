import { motion } from 'framer-motion'
import { Ambulance, Bike, BusFront, CarFront, Truck } from 'lucide-react'

const variants = {
  default: {
    glow: 'from-emerald-500/20 via-cyan-500/10 to-slate-900/0',
    accent: 'bg-emerald-400/10',
    ring: 'border-emerald-300/20',
  },
  traffic: {
    glow: 'from-emerald-500/25 via-cyan-500/10 to-slate-900/0',
    accent: 'bg-cyan-400/10',
    ring: 'border-cyan-300/20',
  },
  alert: {
    glow: 'from-amber-500/25 via-orange-500/10 to-slate-900/0',
    accent: 'bg-amber-400/10',
    ring: 'border-amber-300/20',
  },
  safety: {
    glow: 'from-violet-500/25 via-emerald-500/10 to-slate-900/0',
    accent: 'bg-violet-400/10',
    ring: 'border-violet-300/20',
  },
  emergency: {
    glow: 'from-red-500/25 via-rose-500/10 to-slate-900/0',
    accent: 'bg-red-400/10',
    ring: 'border-red-300/20',
  },
}

function PageBackdrop({ variant = 'default' }) {
  const palette = variants[variant] || variants.default
  const Vehicle = {
    default: CarFront,
    traffic: BusFront,
    alert: Ambulance,
    safety: Bike,
    emergency: Truck,
  }[variant] || CarFront

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br ${palette.glow} blur-3xl`}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className={`absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-bl ${palette.glow} blur-3xl`}
        animate={{ x: [0, -35, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.15),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-14 mx-auto h-28 w-[90%] max-w-6xl rounded-[2rem] border border-white/5 bg-slate-900/30 backdrop-blur-[1px]" />
      <div className="traffic-road absolute inset-x-0 bottom-14 mx-auto h-28 w-[86%] max-w-5xl">
        <motion.div
          className={`absolute bottom-9 left-8 z-10 ${palette.accent}`}
          animate={{ x: ['0%', '72%', '0%'], y: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Vehicle className="h-8 w-8 drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]" />
        </motion.div>
        <motion.div
          className={`absolute inset-x-0 bottom-0 h-0.5 ${palette.accent}`}
          animate={{ x: ['-5%', '5%', '-5%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        {[0, 1, 2, 3, 4, 5, 6].map((line) => (
          <motion.div
            key={line}
            className={`absolute bottom-5 h-2 w-20 rounded-full ${palette.accent}`}
            style={{ left: `${line * 14}%` }}
            animate={{ opacity: [0.3, 1, 0.3], x: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: line * 0.2 }}
          />
        ))}
      </div>
    </div>
  )
}

export default PageBackdrop
