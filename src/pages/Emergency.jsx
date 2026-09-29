import { motion } from 'framer-motion'
import { Ambulance, Flame, Phone, ShieldAlert } from 'lucide-react'
import PageBackdrop from '../components/PageBackdrop'
import EmergencyScene from '../components/EmergencyScene'

const emergencyServices = [
  { name: 'Police', number: '100', description: 'For emergencies, safety concerns, and road incidents.', icon: ShieldAlert },
  { name: 'Ambulance', number: '108', description: 'Medical assistance and emergency transport.', icon: Ambulance },
  { name: 'Fire Service', number: '101', description: 'Fire hazards, accidents, and urgent rescue support.', icon: Flame },
  { name: 'Traffic Helpline', number: '103', description: 'Road assistance and traffic management guidance.', icon: Phone },
]

function Emergency() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="emergency" />
      {/* Emergency Contacts Section */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Emergency</p>
        <h1 className="mt-3 text-4xl font-black text-white">Important emergency contact numbers</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {emergencyServices.map((service, index) => {
          const Icon = service.icon
          return (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"
            >
              <EmergencyScene service={service.name} />
              <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-3 text-emerald-300 ring-1 ring-emerald-400/30">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">{service.name}</h2>
              <p className="mt-4 text-3xl font-black text-emerald-300">{service.number}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              <a href={`tel:${service.number}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Call now
              </a>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}

export default Emergency
