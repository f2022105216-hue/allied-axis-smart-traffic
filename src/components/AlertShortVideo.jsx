import AlertScene from './AlertScene'

function AlertShortVideo({ title, severity, category, accent = 'amber' }) {
  const accentClass = {
    amber: 'border-amber-400/40 bg-amber-500/10 text-amber-200',
    red: 'border-red-400/40 bg-red-500/10 text-red-200',
    cyan: 'border-cyan-400/40 bg-cyan-500/10 text-cyan-200',
  }[accent]

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
      <div className="mb-4 flex items-center justify-between">
        <div className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-[0.18em] ${accentClass}`}>
          {severity}
        </div>
        <span className="h-3 w-3 animate-pulse rounded-full bg-rose-400 shadow-[0_0_18px_rgba(251,113,133,0.7)]" />
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4"><AlertScene category={category} className="h-20 rounded-2xl" /></div>
    </div>
  )
}

export default AlertShortVideo
