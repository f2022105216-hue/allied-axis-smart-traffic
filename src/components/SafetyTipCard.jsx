import { motion } from 'framer-motion'
import { ArrowRight, Bike, Footprints, Gauge, ShieldCheck, Smartphone } from 'lucide-react'

const iconMap = {
  ShieldCheck,
  Gauge,
  Bike,
  ArrowRight,
  Footprints,
  Smartphone,
}

function SafetyTipCard({ title, description, category, icon }) {
  const Icon = iconMap[icon] || ShieldCheck

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
    >
      <div className="mb-4 inline-flex rounded-xl bg-emerald-500/15 p-3 text-emerald-300 ring-1 ring-emerald-400/40">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-emerald-300">{category}</p>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </motion.article>
  )
}

export default SafetyTipCard
