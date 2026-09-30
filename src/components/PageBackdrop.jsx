import { motion } from 'framer-motion'
import { Ambulance, Bike, BusFront, CarFront, ShieldCheck, Siren, TrafficCone, TriangleAlert } from 'lucide-react'

const variants = {
  default: {
    color: '16, 185, 129',
    accent: 'text-emerald-300/25',
    Icon: CarFront,
  },
  traffic: {
    color: '6, 182, 212',
    accent: 'text-cyan-300/25',
    Icon: BusFront,
  },
  alert: {
    color: '245, 158, 11',
    accent: 'text-amber-300/25',
    Icon: Ambulance,
  },
  safety: {
    color: '16, 185, 129',
    accent: 'text-emerald-300/25',
    Icon: Bike,
  },
  emergency: {
    color: '239, 68, 68',
    accent: 'text-red-300/25',
    Icon: Siren,
  },
  rules: {
    color: '14, 165, 233',
    accent: 'text-sky-300/25',
    Icon: ShieldCheck,
  },
  signs: {
    color: '245, 158, 11',
    accent: 'text-amber-300/25',
    Icon: TrafficCone,
  },
  report: {
    color: '249, 115, 22',
    accent: 'text-orange-300/25',
    Icon: TriangleAlert,
  },
}

function PageBackdrop({ variant = 'default' }) {
  const theme = variants[variant] || variants.default
  const SceneIcon = theme.Icon

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 88% 8%, rgba(${theme.color}, 0.11), transparent 42%), radial-gradient(ellipse at 8% 78%, rgba(${theme.color}, 0.06), transparent 38%)`,
        }}
      />
      <div className="absolute inset-x-[12%] bottom-16 h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent" />
      <motion.div
        className={`absolute bottom-[3.75rem] right-[18%] ${theme.accent}`}
        animate={{ opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
      >
        <SceneIcon className="h-5 w-5" />
      </motion.div>
    </div>
  )
}

export default PageBackdrop
