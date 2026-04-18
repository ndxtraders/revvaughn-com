'use client'

import { useState } from 'react'

const ACCESS_KEY = '98c35a7d-2e61-47d3-b1b7-8c1943efa0af'

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    const formData = new FormData(event.target)
    formData.append('access_key', ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        window.location.href = '/thank-you'
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
        setSubmitting(false)
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-5 py-3 bg-paper border border-rule text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors'
  const labelClass = 'block text-small font-medium text-ink mb-2'

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot for spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {/* Email subject + from name for nicer inbox formatting */}
      <input type="hidden" name="subject" value="New contact form submission — revvaughn.com" />
      <input type="hidden" name="from_name" value="revvaughn.com Contact Form" />

      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-accent">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          required
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="website" className={labelClass}>
          Website URL <span className="text-accent">*</span>
        </label>
        <input
          id="website"
          type="url"
          name="website"
          required
          placeholder="https://"
          autoComplete="url"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can I help? <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClass}
        />
      </div>

      {error && (
        <div className="border border-rule bg-paper-grey px-4 py-3 text-small text-ink">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="px-8 py-3 bg-ink text-paper hover:bg-accent transition-colors font-medium tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? 'Sending…' : "Let's Connect"}
      </button>
    </form>
  )
}
