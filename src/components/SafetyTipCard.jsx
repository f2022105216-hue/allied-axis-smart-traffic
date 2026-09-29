import { motion } from 'framer-motion'
import SafetyTipScene from './SafetyTipScene'

function SafetyTipCard({ title, description, category }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      whileHover={{ y: -8, rotateX: 4, scale: 1.01 }}
      transition={{ duration: 0.42, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.4)]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <SafetyTipScene title={title} />
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-emerald-300">{category}</p>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </motion.article>
  )
}

export default SafetyTipCard
