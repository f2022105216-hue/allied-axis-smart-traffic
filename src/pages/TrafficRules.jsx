import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageBackdrop from '../components/PageBackdrop'
import TrafficRuleScene from '../components/TrafficRuleScene'

const ruleCategories = {
  Driving: [
    'Always keep both hands on the wheel and maintain control of the vehicle.',
    'Use indicators before turning or changing lanes.',
    'Avoid aggressive driving and tailgating in dense traffic.',
  ],
  Speed: [
    'Follow posted speed limits, especially near schools and residential areas.',
    'Reduce speed during bad weather and poor lighting conditions.',
    'Adapt your speed to road and traffic conditions at all times.',
  ],
  Signals: [
    'Stop fully at red lights and wait for the green signal.',
    'Check both directions before crossing or turning at intersections.',
    'Respond quickly to pedestrian crossing signals and flashing lights.',
  ],
  Parking: [
    'Park only in designated spaces and avoid blocking emergency routes.',
    'Never leave the vehicle in restricted or no-parking areas.',
    'Use hazard lights when required and maintain safe distances from intersections.',
  ],
  Safety: [
    'Keep a safe following distance to avoid sudden collisions.',
    'Never drive under the influence of alcohol or drowsiness.',
    'Check mirrors and blind spots before maneuvering the vehicle.',
  ],
}

const sceneDetails = {
  Driving: [
    { title: 'Stay in control', description: 'Keep both hands on the wheel and steer smoothly.' },
    { title: 'Signal before you move', description: 'Let nearby drivers know before you turn or change lanes.' },
    { title: 'Leave a safe gap', description: 'Give the vehicle ahead enough room to brake.' },
  ],
  Speed: [
    { title: 'Watch the posted limit', description: 'Slow down near schools and residential streets.' },
    { title: 'Slow for poor conditions', description: 'Rain and low light reduce grip and visibility.' },
    { title: 'Match the road', description: 'Adjust your speed to traffic and the surface.' },
  ],
  Signals: [
    { title: 'Stop at red', description: 'Wait behind the stop line until the signal turns green.' },
    { title: 'Check both directions', description: 'Look for cross-traffic before you turn or cross.' },
    { title: 'Give pedestrians time', description: 'Obey crossing signals and let people clear the road.' },
  ],
  Parking: [
    { title: 'Keep access clear', description: 'Never block emergency lanes or entrances.' },
    { title: 'Check parking signs', description: 'Keep restricted and no-parking zones open.' },
    { title: 'Leave room around you', description: 'Keep a safe distance from corners and crossings.' },
  ],
  Safety: [
    { title: 'Keep a following distance', description: 'Leave room to brake without a sudden stop.' },
    { title: 'Drive alert', description: 'Never drive under the influence or while drowsy.' },
    { title: 'Check your blind spot', description: 'Look over your shoulder before changing position.' },
  ],
}

function TrafficRules() {
  const [search, setSearch] = useState('')

  const visibleRules = useMemo(() => {
    const term = search.toLowerCase()
    return Object.entries(ruleCategories).map(([category, items]) => ({
      category,
      items: items
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => item.toLowerCase().includes(term)),
    }))
  }, [search])

  const getRuleAccent = (category) => {
    const accents = {
      Driving: 'emerald',
      Speed: 'cyan',
      Signals: 'amber',
      Parking: 'violet',
      Safety: 'rose',
    }

    return accents[category] || 'emerald'
  }

  // Driving safety animation: moving car, seat-belt line, and speed-limit sign.
  const DrivingSafetyScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.25),_rgba(15,23,42,0.85))]">
      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <div className="absolute inset-x-4 bottom-5 h-[2px] rounded-full bg-white/55" />
      <div className="absolute inset-x-4 bottom-6 h-[2px] rounded-full bg-white/30" />

      <motion.div
        className="absolute right-3 top-2 flex h-8 w-8 items-center justify-center rounded-md border border-amber-200/80 bg-amber-300/20 text-[9px] font-black text-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.4)]"
        animate={{ rotate: [0, 12, -10, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        60
      </motion.div>

      <motion.div
        className="absolute left-4 bottom-6 h-3 w-12 rounded-full bg-slate-200/90 shadow-[0_0_18px_rgba(255,255,255,0.3)]"
        animate={{ x: ['0%', '210%', '0%'] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-x-1 top-1 h-1 rounded-full bg-emerald-400/80" />
        <div className="absolute left-1 top-0 h-3 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-1 top-0 h-3 w-2 rounded-full bg-slate-800" />
      </motion.div>

      <motion.div
        className="absolute left-2 bottom-4 h-4 w-8 rounded-[8px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '220%', '0%'] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-x-2 top-0 h-2 rounded-full bg-slate-300" />
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>
    </div>
  )

  // Speed-safety animation: faster moving traffic marker and pace indicator.
  const SpeedScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.18),_transparent_60%),linear-gradient(180deg,_rgba(15,23,42,0.28),_rgba(15,23,42,0.86))]">
      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <div className="absolute inset-x-0 bottom-6 h-[2px] bg-white/45" />

      <motion.div
        className="absolute right-3 top-2 flex h-8 w-10 items-center justify-center rounded-md border border-cyan-200/80 bg-cyan-400/10 text-[9px] font-black text-cyan-100 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
        animate={{ rotate: [0, 8, -6, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        30
      </motion.div>

      <motion.div
        className="absolute left-4 bottom-5 h-5 w-10 rounded-[9px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '190%', '0%'], rotate: [0, 1.5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-x-2 top-0 h-2 rounded-full bg-slate-300" />
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>

      <motion.div
        className="absolute left-3 top-3 h-2 w-12 rounded-full bg-white/75"
        animate={{ opacity: [0.25, 1, 0.25], width: ['10%', '68%', '10%'] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )

  // Traffic signal animation: red -> yellow -> green cycle with a stopping and moving car.
  const TrafficSignalScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.28),_rgba(15,23,42,0.8))]">
      <div className="absolute left-4 top-3 bottom-3 w-3 rounded-full bg-slate-900/80" />
      <div className="absolute left-2.5 top-4 h-14 w-7 rounded-xl border border-slate-700 bg-slate-950/70 p-1">
        <motion.div
          className="absolute left-1 top-1 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.85)]"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1 top-5 h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
          animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.div
          className="absolute left-1 bottom-1 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
          animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        />
      </div>

      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <motion.div
        className="absolute left-16 bottom-5 h-4 w-9 rounded-[8px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '140%', '0%'], opacity: [1, 1, 1] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-1 top-0 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-1 top-0 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>
    </div>
  )

  // Pedestrian safety animation: zebra crossing and person moving across while the car waits.
  const PedestrianSafetyScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.15),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.25),_rgba(15,23,42,0.86))]">
      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <div className="absolute inset-x-2 bottom-5 flex h-4 items-center gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-3 w-3 rounded-sm bg-white/80" />
        ))}
      </div>

      <motion.div
        className="absolute left-2 bottom-5 h-5 w-8 rounded-[8px] border border-white/70 bg-slate-100/95"
        animate={{ x: [0, 0, 0], opacity: [1, 1, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-1 top-0 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-1 top-0 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>

      <motion.div
        className="absolute left-12 bottom-8 flex items-end gap-1"
        animate={{ x: ['0%', '90%', '0%'], y: [0, -1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-3 w-2 rounded-full bg-amber-200" />
        <div className="h-5 w-3 rounded-full bg-rose-300" />
        <div className="h-3 w-2 rounded-full bg-rose-200" />
      </motion.div>
    </div>
  )

  // Parking safety animation: car sliding into a marked parking bay.
  const ParkingSafetyScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(167,139,250,0.12),_transparent_58%),linear-gradient(180deg,_rgba(15,23,42,0.3),_rgba(15,23,42,0.86))]">
      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <div className="absolute right-4 bottom-6 h-10 w-12 rounded-md border-2 border-dashed border-violet-200/80" />
      <div className="absolute left-3 bottom-5 h-4 w-8 rounded-[8px] border border-white/70 bg-slate-100/95" />

      <motion.div
        className="absolute left-2 bottom-5 h-5 w-10 rounded-[9px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '120%', '120%'], y: [0, 0, -2] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-x-2 top-0 h-2 rounded-full bg-slate-300" />
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>
    </div>
  )

  // Final road-safety scene: mixed vehicles, traffic signal, and pedestrian crossing for a full safety briefing.
  const FinalRoadSafetyScene = () => (
    <div className="relative h-32 overflow-hidden rounded-xl bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.25),_rgba(15,23,42,0.85))]">
      <div className="absolute inset-x-0 bottom-2 h-2 rounded-full bg-slate-700/80" />
      <div className="absolute inset-x-4 bottom-5 h-[2px] rounded-full bg-white/50" />
      <div className="absolute left-4 top-2 h-12 w-3 rounded-full bg-slate-900/80" />
      <div className="absolute left-2.5 top-3 h-10 w-5 rounded-lg border border-slate-700 bg-slate-950/70 p-1">
        <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-red-500 opacity-60" />
        <div className="absolute left-1 top-4 h-2 w-2 rounded-full bg-yellow-400 opacity-100" />
        <div className="absolute left-1 bottom-1 h-2 w-2 rounded-full bg-emerald-400 opacity-50" />
      </div>

      <motion.div
        className="absolute left-8 bottom-5 h-4 w-8 rounded-[8px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '80%', '0%'] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-5 h-4 w-8 rounded-[8px] border border-white/70 bg-slate-100/95"
        animate={{ x: ['0%', '-90%', '0%'] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
        <div className="absolute right-0 top-2 h-2 w-2 rounded-full bg-slate-800" />
      </motion.div>

      <motion.div
        className="absolute right-12 top-5 flex items-end gap-1"
        animate={{ x: ['0%', '-70%', '0%'], y: [0, -2, 0] }}
        transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-2 w-2 rounded-full bg-amber-200" />
        <div className="h-5 w-3 rounded-full bg-rose-300" />
        <div className="h-3 w-2 rounded-full bg-rose-200" />
      </motion.div>
    </div>
  )

  const getSceneForRule = (category, index) => {
    if (category === 'Driving' && index === 0) return <DrivingSafetyScene />
    if (category === 'Speed' && index === 0) return <SpeedScene />
    if (category === 'Signals' && index === 0) return <TrafficSignalScene />
    if (category === 'Signals' && index === 1) return <FinalRoadSafetyScene />
    if (category === 'Signals' && index === 2) return <PedestrianSafetyScene />
    if (category === 'Parking' && index === 0) return <ParkingSafetyScene />
    return <TrafficRuleScene category={category} index={index} />
  }

  return (
    <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageBackdrop variant="rules" />

      {/* Header intro: reveals the section smoothly before the rules cards appear. */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-10"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic rules</p>
        <h1 className="mt-3 text-4xl font-black text-white">Road rules and safe driving basics</h1>
      </motion.div>

      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search traffic rule"
          className="w-full rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-emerald-400"
        />
      </div>

      <div className="space-y-8">
        {visibleRules.map(({ category, items }, sectionIndex) => (
          items.length > 0 && (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: sectionIndex * 0.08, ease: 'easeOut' }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
            >
              <h2 className="mb-5 text-2xl font-bold text-white">{category}</h2>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map(({ item, index }) => {
                  const accent = getRuleAccent(category)
                  const accentClasses = {
                    emerald: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-200',
                    cyan: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200',
                    amber: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
                    violet: 'border-violet-400/40 bg-violet-500/10 text-violet-200',
                    rose: 'border-rose-400/40 bg-rose-500/10 text-rose-200',
                  }

                  const scene = getSceneForRule(category, index)
                  const sceneDetail = sceneDetails[category][index]

                  return (
                    <motion.div
                      key={`${category}-${index}`}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: index * 0.08, ease: 'easeOut' }}
                      whileHover={{ y: -3 }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-300 shadow-[0_12px_40px_rgba(2,6,23,0.35)]"
                    >
                      <div className={`mb-4 overflow-hidden rounded-xl border p-3 ${accentClasses[accent]}`}>
                        {scene}
                      </div>

                      <div className="mb-3">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white">{sceneDetail.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{sceneDetail.description}</p>
                      </div>
                      <p className="text-sm leading-7">{item}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.section>
          )
        ))}
      </div>
    </div>
  )
}

export default TrafficRules
