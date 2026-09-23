import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, BellRing, CarFront, MapPinned, ShieldCheck, Siren, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { trafficData } from '../data/trafficData'
import { alerts } from '../data/alerts'
import { safetyTips } from '../data/safetyTips'
import { trafficSigns } from '../data/trafficSigns'
import TrafficCard from '../components/TrafficCard'
import AlertCard from '../components/AlertCard'
import SafetyTipCard from '../components/SafetyTipCard'
import TrafficSignCard from '../components/TrafficSignCard'

function Home() {
  const statusHighlights = [
    { label: 'Live demo zones', value: '24', icon: MapPinned },
    { label: 'Alert notices', value: '18', icon: BellRing },
    { label: 'Road safety tips', value: '45+', icon: ShieldCheck },
    { label: 'Emergency ready', value: '24/7', icon: Siren },
  ]

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_40%,#111827_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 ring-1 ring-emerald-400/40">
              <CarFront className="h-4 w-4" />
              Smarter roads. Safer journeys.
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Smart Traffic & Road Safety for every commute.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Track traffic conditions, stay informed about road alerts, understand key road rules, and keep your journeys safer with clear, reliable guidance.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/traffic"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-emerald-400"
              >
                View Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/report-issue"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                Report Issue
              </Link>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {statusHighlights.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.14 }}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-emerald-500/10 p-2 text-emerald-300 ring-1 ring-emerald-400/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-emerald-500/10 blur-3xl" />
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-emerald-950/30">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">City status</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Current conditions</h2>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-400/40">
                  Safe flow
                </div>
              </div>

              <div className="space-y-4">
                {trafficData.slice(0, 4).map((item) => (
                  <div key={item.area} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                    <div>
                      <p className="text-white">{item.area}</p>
                      <p className="text-sm text-slate-400">{item.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-emerald-300">{item.condition}</p>
                      <p className="text-xs text-slate-400">{item.eta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Traffic Status Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic status</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Live-style traffic overview</h2>
          </div>
          <span className="hidden rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-400 md:inline-flex">
            Demo data
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trafficData.map((item) => (
            <TrafficCard key={item.area} {...item} />
          ))}
        </div>
      </section>

      {/* Alerts Section */}
      <section className="border-y border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Alerts</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Traffic alerts and warnings</h2>
            </div>
            <Link to="/alerts" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
              View all alerts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {alerts.slice(0, 3).map((alert) => (
              <AlertCard key={alert.id} {...alert} />
            ))}
          </div>
        </div>
      </section>

      {/* Road Safety Education */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Safety education</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Road safety tips for drivers and pedestrians</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {safetyTips.map((tip) => (
            <SafetyTipCard key={tip.id} {...tip} />
          ))}
        </div>
      </section>

      {/* Traffic Signs Section */}
      <section className="border-y border-slate-800 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Traffic signs</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Recognize the signs. Stay safe.</h2>
            </div>
            <Link to="/traffic-signs" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
              Explore signs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trafficSigns.map((sign) => (
              <TrafficSignCard key={sign.name} {...sign} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(15,23,42,0.95))] p-8 shadow-2xl shadow-emerald-950/30 sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200">
                <Siren className="h-4 w-4" />
                Emergency response
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Need urgent help or want to report a dangerous road condition?</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-200">
                Quick access to emergency contacts and fast issue reporting can reduce delays during critical situations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/emergency" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
                Emergency Contacts
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/report-issue" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300">
                Report an issue
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
