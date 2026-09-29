import { motion } from 'framer-motion'
import { Mail, MessageCircle, MessagesSquare, Send } from 'lucide-react'

function ContactScene() {
  return (
    <div className="relative mb-8 h-36 overflow-hidden rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,rgba(15,23,42,0.92),rgba(8,47,54,0.7),rgba(15,23,42,0.92))]">
      <div className="absolute inset-x-[12%] top-1/2 border-t border-dashed border-emerald-300/35" />

      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 text-emerald-200">
        <div className="rounded-xl border border-emerald-300/30 bg-emerald-400/10 p-3">
          <Mail className="h-7 w-7" />
        </div>
        <span className="mt-2 block text-center text-[9px] font-bold tracking-[0.15em] text-emerald-100">YOUR MESSAGE</span>
      </div>

      <motion.div
        className="absolute left-[29%] top-1/2 -translate-y-1/2 text-cyan-200"
        animate={{ x: ['0%', '420%', '0%'], y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Send className="h-6 w-6 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-1/2 -translate-y-1/2 text-cyan-200"
        animate={{ scale: [0.96, 1.06, 0.96] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3">
          <MessagesSquare className="h-7 w-7" />
          <motion.span
            className="absolute -right-1 -top-1 text-emerald-300"
            animate={{ scale: [0.7, 1.15, 0.7], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <MessageCircle className="h-4 w-4 fill-emerald-400/20" />
          </motion.span>
        </div>
        <span className="mt-2 block text-center text-[9px] font-bold tracking-[0.15em] text-cyan-100">SUPPORT TEAM</span>
      </motion.div>
    </div>
  )
}

export default ContactScene