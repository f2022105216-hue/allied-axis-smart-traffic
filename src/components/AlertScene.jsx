import { motion } from 'framer-motion'
import { AlertCircle, CarFront, CloudRain, Construction } from 'lucide-react'

function AlertScene({ category, className = 'h-24' }) {
  const sceneType = category.toLowerCase()
  const isAccident = sceneType.includes('accident')
  const isConstruction = sceneType.includes('construction')
  const isCongestion = sceneType.includes('congestion')
  const isWeather = sceneType.includes('weather')
  const isClosure = sceneType.includes('closure')

  return (
    <div className={`relative isolate overflow-hidden rounded-xl border border-slate-700 bg-slate-950 ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#183044_0%,#253c45_48%,#111827_49%,#0b1220_100%)]" />

      {isWeather && (
        <>
          <CloudRain className="absolute left-1/2 top-2 h-9 w-9 -translate-x-1/2 text-sky-200 drop-shadow-[0_0_12px_rgba(125,211,252,0.45)]" />
          {[8, 24, 41, 59, 76, 91].map((left, index) => (
            <motion.span
              key={left}
              className="absolute top-10 h-3 w-0.5 rounded-full bg-sky-200/80"
              style={{ left: `${left}%` }}
              animate={{ y: [0, 24], opacity: [0, 0.9, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: index * 0.14, ease: 'linear' }}
            />
          ))}
        </>
      )}

      {isConstruction && (
        <>
          <Construction className="absolute left-1/2 top-2 h-8 w-8 -translate-x-1/2 text-amber-300" />
          <div className="absolute left-[22%] top-8 flex gap-1.5" aria-hidden="true">
            {[0, 1, 2].map((cone) => (
              <motion.span
                key={cone}
                className="h-0 w-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: cone * 0.15 }}
              />
            ))}
          </div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-[46%] border-t border-white/10 bg-slate-800/90">
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-px border-t border-dashed border-white/45"
          animate={{ x: ['0%', '-18%'] }}
          transition={{ duration: isCongestion ? 5 : 2.5, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {isAccident && (
        <>
          <motion.div
            className="absolute bottom-3 left-[34%] text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.55)]"
            animate={{ x: [0, 18, 18, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.42, 0.75, 1], ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-cyan-400/20" />
          </motion.div>
          <motion.div
            className="absolute bottom-3 right-[34%] rotate-180 text-rose-300 drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]"
            animate={{ x: [0, -16, -16, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.42, 0.75, 1], ease: 'easeInOut' }}
          >
            <CarFront className="h-8 w-8 fill-rose-400/20" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-300"
            animate={{ scale: [0.8, 1.25, 0.8], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          >
            <AlertCircle className="h-6 w-6" />
          </motion.div>
        </>
      )}

      {isCongestion && [0, 1, 2].map((car) => (
        <motion.div
          key={car}
          className={`absolute text-amber-300 ${car === 1 ? 'bottom-3 left-[48%]' : car === 2 ? 'bottom-3 right-[16%]' : 'bottom-3 left-[16%]'}`}
          animate={{ x: [0, 10, 2, 0] }}
          transition={{ duration: 3 + car * 0.5, repeat: Infinity, delay: car * 0.35, ease: 'easeInOut' }}
        >
          <CarFront className="h-7 w-7 fill-amber-400/20" />
        </motion.div>
      ))}

      {isWeather && (
        <motion.div
          className="absolute bottom-3 left-[42%] text-sky-300"
          animate={{ x: [0, 22, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CarFront className="h-7 w-7 fill-sky-400/20" />
        </motion.div>
      )}

      {isConstruction && (
        <motion.div
          className="absolute bottom-3 right-[18%] text-cyan-300"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CarFront className="h-7 w-7 fill-cyan-400/20" />
        </motion.div>
      )}

      {isClosure && (
        <>
          <motion.div
            className="absolute inset-x-[24%] bottom-5 h-3 overflow-hidden rounded-sm border border-rose-200/50 bg-rose-500 shadow-[0_0_14px_rgba(244,63,94,0.35)]"
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            <div className="h-full w-full bg-[repeating-linear-gradient(125deg,transparent_0_8px,rgba(255,255,255,0.85)_8px_13px)]" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-2 -translate-x-1/2 text-rose-300"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            <AlertCircle className="h-7 w-7" />
          </motion.div>
        </>
      )}
    </div>
  )
}

export default AlertScene