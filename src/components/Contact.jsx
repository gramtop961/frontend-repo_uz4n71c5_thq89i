import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      subject: form.get('subject'),
      message: form.get('message'),
    }

    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok) setStatus('Sent! Thank you for reaching out.')
      else setStatus(data?.detail || 'Something went wrong.')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-2xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" required placeholder="Your Name" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <input name="subject" required placeholder="Subject" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <textarea name="message" required placeholder="Your message" rows="5" className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
        <button className="rounded-xl bg-indigo-600 text-white font-semibold px-6 py-3 hover:bg-indigo-700">Send</button>
        {status && <p className="text-sm text-slate-600">{status}</p>}
      </form>
    </section>
  )
}
