import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-300">Allied Axis</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Smart Traffic Safety</h3>
          </div>
          <p className="text-sm leading-7 text-slate-400">
            Building safer roads through awareness, faster emergency response, and clearer traffic communication.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/traffic" className="hover:text-white">Traffic Dashboard</Link></li>
            <li><Link to="/alerts" className="hover:text-white">Traffic Alerts</Link></li>
            <li><Link to="/traffic-rules" className="hover:text-white">Traffic Rules</Link></li>
            <li><Link to="/report-issue" className="hover:text-white">Report an Issue</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Safety Hub</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/traffic-signs" className="hover:text-white">Traffic Signs</Link></li>
            <li><Link to="/safety-tips" className="hover:text-white">Road Safety Tips</Link></li>
            <li><Link to="/emergency" className="hover:text-white">Emergency Contacts</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Contact</h4>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 text-emerald-300" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 text-emerald-300" />
              <span>support@alliedaxis.safe</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 text-emerald-300" />
              <span>Road Safety Center, City Hub</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:px-8">
          <p>© 2026 Allied Axis. All rights reserved.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200">
            Talk to our safety team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
