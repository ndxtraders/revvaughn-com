'use client'

import { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // Placeholder — wire to MailerLite/provider later
    console.log('Subscribed:', email)
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  if (status === 'success') {
    return (
      <div className="bg-accent-soft border border-accent px-6 py-4 text-ink">
        Thanks. Check your inbox for a confirmation.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-3 bg-paper border border-rule text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-ink text-paper hover:bg-accent transition-colors font-medium tracking-wide"
      >
        Send Me the Briefings
      </button>
    </form>
  )
}
