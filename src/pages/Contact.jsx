import { useState } from 'react'
import { motion } from 'framer-motion'
import { Toaster, toast } from 'sonner'
import 'sonner/dist/styles.css'
import FormSuccessToastIcon from '../components/FormSuccessToastIcon'
import PageBackdrop from '../components/PageBackdrop'
import ContactScene from '../components/ContactScene'

const initialData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) newErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!formData.message.trim()) newErrors.message = 'Message is required.'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData(initialData)
      toast.success('Message sent!', {
        description: 'Thanks for contacting us. We will get back to you soon.',
        duration: 5000,
        closeButton: true,
        icon: <FormSuccessToastIcon />,
        style: {
          background: '#081b2a',
          border: '1px solid rgba(16, 185, 129, 0.6)',
          color: '#ecfeff',
          borderRadius: '18px',
          boxShadow: '0 12px 30px rgba(16, 185, 129, 0.28)',
          padding: '14px 16px',
        },
        className: 'sonner-form-toast',
      })
    }
  }

  return (
    <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Toaster richColors closeButton position="top-center" />
      <PageBackdrop variant="default" />
      {/* Contact Section */}
      <div className="mb-10 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Contact</p>
        <h1 className="mt-3 text-4xl font-black text-white">We’d love to hear from you</h1>
      </div>

      <ContactScene />

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 sm:p-8"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input name="name" value={formData.name} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.name && <p className="mt-2 text-sm text-rose-300">{errors.name}</p>}
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.email && <p className="mt-2 text-sm text-rose-300">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Subject</label>
            <input name="subject" value={formData.subject} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.subject && <p className="mt-2 text-sm text-rose-300">{errors.subject}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.message && <p className="mt-2 text-sm text-rose-300">{errors.message}</p>}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
            Send Message
          </button>

          {submitted && (
            <div className="inline-success-badge">
              Your message has been sent successfully.
            </div>
          )}
        </div>
      </motion.form>
    </div>
  )
}

export default Contact
