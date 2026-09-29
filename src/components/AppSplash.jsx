import { motion } from 'framer-motion'
import { CarFront, ShieldCheck } from 'lucide-react'

function AppSplash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_40%,#111827_100%)]" />

      {[0, 1, 2, 3].map((item) => (
        <motion.div
          key={item}
          aria-hidden="true"
          className="absolute h-52 w-52 rounded-full border border-emerald-400/20 bg-emerald-500/5 shadow-[0_0_60px_rgba(16,185,129,0.18)] blur-3xl"
          style={{
            top: `${10 + item * 18}%`,
            left: `${7 + item * 21}%`,
          }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4.8 + item, repeat: Infinity, ease: 'easeInOut', delay: item * 0.3 }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0, filter: 'blur(8px)' }}
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.58, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center gap-5"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-emerald-400/40 bg-emerald-500/10 shadow-[0_0_40px_rgba(16,185,129,0.2)] backdrop-blur-sm">
          <ShieldCheck className="h-12 w-12 text-emerald-300" />
        </div>

        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-emerald-300">Allied Axis</p>
          <h2 className="text-5xl font-black tracking-tight text-white md:text-6xl">Traffic Safety</h2>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <motion.div animate={{ x: [-18, 26, -18] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}>
            <CarFront className="h-8 w-8 text-emerald-300" />
          </motion.div>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.9, 1.5, 0.9] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.2 }}
                className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.7)]"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
      <motion.div
        className="absolute inset-x-0 bottom-16 mx-auto h-[2px] w-[70%] max-w-5xl bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
        animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.7, 1, 0.7] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

export default AppSplash
