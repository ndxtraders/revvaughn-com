'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from 'lucide-react'

export default function LeadGenHero() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        sessionStorage.setItem('map_email', email)
        router.push('/map')
      } else {
        const data = await response.json().catch(() => ({}))
        setError(data.error || 'Something went wrong. Please try again.')
        setIsLoading(false)
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-paper border-b border-rule py-section">
      <div className="max-w-content mx-auto px-6 text-center">
        <p className="eyebrow mb-6">Free Diagnostic</p>
        <h2 className="font-sans font-semibold text-display text-ink mb-6 leading-tight max-w-3xl mx-auto">
          Know You Need AI In Your Business But Not Sure Where To Start?
        </h2>
        <p className="text-lead text-ink-muted mb-14 max-w-2xl mx-auto">
          Stop wasting time and money on AI tools, agencies, and automations that
          don&rsquo;t move your business forward.
        </p>
        <div className="max-w-lg mx-auto">
          <p className="text-eyebrow uppercase font-semibold tracking-widest text-accent mb-4">
            Get clarity with the 5-Minute AI Priority Map.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-5 py-3 bg-paper border border-rule text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Starting...
                </>
              ) : (
                <>
                  Start My Map <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          {error && (
            <p className="text-small mt-4 font-medium" style={{ color: '#d9534f' }}>
              {error}
            </p>
          )}
          <p className="text-eyebrow uppercase tracking-widest text-ink-faint mt-4 flex items-center justify-center gap-2">
            <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: '#5cb85c' }} />
            Takes 5 minutes. Zero technical jargon.
          </p>
        </div>
      </div>
    </section>
  )
}
