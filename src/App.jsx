import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppSplash from './components/AppSplash'
import Home from './pages/Home'
import Traffic from './pages/Traffic'
import Alerts from './pages/Alerts'
import TrafficRules from './pages/TrafficRules'
import TrafficSigns from './pages/TrafficSigns'
import SafetyTips from './pages/SafetyTips'
import Emergency from './pages/Emergency'
import ReportIssue from './pages/ReportIssue'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Router>
      <AnimatePresence>{isLoading && <AppSplash />}</AnimatePresence>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traffic" element={<Traffic />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/traffic-rules" element={<TrafficRules />} />
            <Route path="/traffic-signs" element={<TrafficSigns />} />
            <Route path="/safety-tips" element={<SafetyTips />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App