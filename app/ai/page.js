'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OUTCOMES = [
  {
    heading: 'See where your business is at a breaking point',
    body: 'Answer 15 questions across 5 business pillars. A live heatmap updates as you answer.',
  },
  {
    heading: 'Get a specific AI fix for every bottleneck you flag',
    body: 'Every breaking point comes with a precise AI solution. You leave knowing what to build and why.',
  },
  {
    heading: 'Download a full PDF report of your results',
    body: 'Your pillar breakdown, priority map, and breaking point recommendations, formatted and ready to share with your team.',
  },
]

export default function AIPriorityMapPage() {
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
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-paper border-b border-rule py-section">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left — copy + form */}
              <div>
                <p className="eyebrow mb-6">Free Diagnostic · 5 Minutes</p>
                <h1 className="font-sans font-semibold text-display text-ink mb-6 leading-tight">
                  Find exactly where AI will move your business forward
                </h1>
                <p className="text-lead text-ink-muted mb-10">
                  15 questions across 5 pillars. A live heatmap. Specific AI fixes for every
                  breaking point — plus a downloadable PDF report of your results.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mb-4">
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
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
                  <p className="text-small mb-4 font-medium" style={{ color: '#d9534f' }}>
                    {error}
                  </p>
                )}

                <p className="text-small text-ink-faint">
                  Takes 5 minutes &nbsp;·&nbsp; Zero technical jargon &nbsp;·&nbsp; PDF results included
                </p>
              </div>

              {/* Right — preview image */}
              <div className="hidden md:block">
                <div className="border border-rule overflow-hidden shadow-sm">
                  <Image
                    src="/ai-priority-map-preview.png"
                    alt="Sample AI Priority Map results showing pillar breakdown and heatmap"
                    width={600}
                    height={480}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-small text-ink-faint mt-3 text-center">
                  Sample results — your map updates live as you answer
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="bg-paper-grey border-b border-rule py-section">
          <div className="max-w-content mx-auto px-6">
            <p className="eyebrow mb-12 text-center">What You Get</p>
            <div className="grid md:grid-cols-3 gap-10">
              {OUTCOMES.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#5cb85c' }} />
                  <h3 className="font-sans font-semibold text-h3 text-ink leading-snug">
                    {item.heading}
                  </h3>
                  <p className="text-body text-ink-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility */}
        <section className="bg-paper py-section">
          <div className="max-w-prose mx-auto px-6 text-center">
            <p className="text-lead text-ink mb-6 leading-relaxed">
              Built by a fractional CMO who&rsquo;s diagnosed revenue systems for
              7–9 figure founder brands and teams across 26 countries.
            </p>
            <p className="text-body text-ink-muted mb-10">
              Uses my proprietary diagnostic framework
              condensed into a 5-minute self-assessment.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
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
            <p className="text-small text-ink-faint">
              Takes 5 minutes &nbsp;·&nbsp; Zero technical jargon &nbsp;·&nbsp; PDF results included
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
