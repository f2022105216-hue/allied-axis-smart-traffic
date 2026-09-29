import { motion } from 'framer-motion'
import { CarFront, Shield, Users } from 'lucide-react'
import { safetyTips } from '../data/safetyTips'
import SafetyTipCard from '../components/SafetyTipCard'
import SafetyShortVideo from '../components/SafetyShortVideo'
import PageBackdrop from '../components/PageBackdrop'

function SafetyTips() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="safety" />
      {/* Road Safety Tips Section */}
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Road safety</p>
        <h1 className="mt-3 text-4xl font-black text-white">Practical safety guidance for everyone</h1>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <SafetyShortVideo icon={<CarFront className="h-8 w-8" />} title="Drive defensively" accent="emerald" />
        <SafetyShortVideo icon={<Shield className="h-8 w-8" />} title="Wear your safety gear" accent="cyan" />
        <SafetyShortVideo icon={<Users className="h-8 w-8" />} title="Stay alert together" accent="amber" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {safetyTips.map((tip) => (
          <SafetyTipCard key={tip.id} {...tip} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,#0f172a,#111827)] p-8"
      >
        <h2 className="text-3xl font-bold text-white">Safety reminder</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you are driving, riding, walking, or riding as a passenger, staying alert and following traffic laws helps protect everyone on the road.
        </p>
      </motion.div>
    </div>
  )
}

export default SafetyTips
