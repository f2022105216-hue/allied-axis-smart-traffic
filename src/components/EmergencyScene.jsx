import { motion } from 'framer-motion'
import { Ambulance, CarFront, Flame, Phone, ShieldAlert } from 'lucide-react'

function EmergencyScene({ service }) {
  return (
    <div className="relative mb-4 h-24 overflow-hidden rounded-xl border border-slate-700 bg-[linear-gradient(180deg,#193448_0%,#23424c_48%,#111827_49%,#0b1220_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-7 border-t border-white/10 bg-slate-800/90">
        <motion.div
          className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/40"
          animate={{ x: ['0%', '-20%'] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {service === 'Police' && (
        <>
          <motion.div
            className="absolute bottom-2 left-[38%] text-slate-100"
            animate={{ x: [0, 14, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-9 w-9" />
          </motion.div>
          <ShieldAlert className="absolute right-5 top-3 h-7 w-7 text-blue-200" />
          <motion.span className="absolute bottom-9 left-[47%] h-2 w-3 rounded-full bg-red-400 shadow-[0_0_14px_rgba(248,113,113,0.9)]" animate={{ opacity: [0.15, 1, 0.15] }} transition={{ duration: 0.55, repeat: Infinity }} />
          <motion.span className="absolute bottom-9 left-[53%] h-2 w-3 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.9)]" animate={{ opacity: [1, 0.15, 1] }} transition={{ duration: 0.55, repeat: Infinity }} />
        </>
      )}

      {service === 'Ambulance' && (
        <>
          <motion.div
            className="absolute bottom-2 left-[18%] text-rose-200 drop-shadow-[0_0_10px_rgba(251,113,133,0.4)]"
            animate={{ x: [0, 46, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Ambulance className="h-10 w-10" />
          </motion.div>
          <motion.div
            className="absolute right-5 top-3 rounded-full bg-rose-400/15 p-2 text-rose-200"
            animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <span className="text-lg font-black leading-none">+</span>
          </motion.div>
        </>
      )}

      {service === 'Fire Service' && (
        <>
          {[0, 1, 2].map((flame) => (
            <motion.div
              key={flame}
              className="absolute bottom-2 text-orange-300"
              style={{ left: `${38 + flame * 8}%` }}
              animate={{ y: [0, -8 - flame * 2, 0], scale: [0.85, 1.15, 0.85], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 0.9 + flame * 0.15, repeat: Infinity, delay: flame * 0.18 }}
            >
              <Flame className="h-8 w-8 fill-orange-400/30" />
            </motion.div>
          ))}
          <motion.div
            className="absolute right-5 top-3 text-rose-200"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8" />
          </motion.div>
        </>
      )}

      {service === 'Traffic Helpline' && (
        <>
          <motion.div
            className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full border border-emerald-300/40 bg-emerald-400/10 p-2 text-emerald-200"
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <Phone className="h-7 w-7" />
          </motion.div>
          {[0, 1, 2].map((wave) => (
            <motion.span
              key={wave}
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/60"
              animate={{ scale: [0.8, 2.2], opacity: [0.7, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: wave * 0.8, ease: 'easeOut' }}
            />
          ))}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400/15 px-2 py-1 text-[9px] font-bold tracking-wider text-emerald-200">ROAD ASSISTANCE</span>
        </>
      )}
    </div>
  )
}

export default EmergencyScene