import { useState } from 'react'

const initialData = {
  name: '',
  email: '',
  issueType: 'Road Hazard',
  location: '',
  description: '',
  image: '',
}

function ReportIssue() {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) newErrors.email = 'Email is required.'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email.'
    if (!formData.location.trim()) newErrors.location = 'Location is required.'
    if (!formData.description.trim()) newErrors.description = 'Description is required.'

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
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Report an Issue Section */}
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Report an issue</p>
        <h1 className="mt-3 text-4xl font-black text-white">Share road safety concerns</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-300">
          This is a frontend-only reporting form for demo purposes. It validates the input and shows a success message after submission.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30 sm:p-8">
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

          <div>
            <label className="mb-2 block text-sm text-slate-300">Issue Type</label>
            <select name="issueType" value={formData.issueType} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400">
              <option>Road Hazard</option>
              <option>Traffic Jam</option>
              <option>Accident</option>
              <option>Broken Signal</option>
              <option>Streetlight Issue</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Location</label>
            <input name="location" value={formData.location} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.location && <p className="mt-2 text-sm text-rose-300">{errors.location}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Description</label>
            <textarea name="description" rows="5" value={formData.description} onChange={handleChange} className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
            {errors.description && <p className="mt-2 text-sm text-rose-300">{errors.description}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Optional Image</label>
            <input name="image" type="text" value={formData.image} onChange={handleChange} placeholder="Paste image URL or leave blank" className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-emerald-400" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
            Submit Report
          </button>

          {submitted && (
            <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              Your issue report has been submitted successfully.
            </div>
          )}
        </div>
      </form>
    </div>
  )
}

export default ReportIssue
