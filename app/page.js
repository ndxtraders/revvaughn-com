'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // TODO: Connect to MailerLite API here
      console.log('Email submitted:', email)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      {/* HERO: The Lottery Test */}
      <section className="px-6 pt-20 pb-12 md:pt-32 md:pb-24 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Headshot */}
          <div className="w-48 h-48 md:w-56 md:h-56 relative shrink-0">
            <Image
              src="/headshot-4.png"
              alt="Rev Vaughn"
              fill
              priority
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>

          {/* Hero Copy */}
          <div className="text-center md:text-left flex-1">
            <p className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
              GTM Strategist & Direct Response Operator
            </p>
            <h1 className="text-h1-mobile md:text-6xl font-black leading-tight mb-6">
              Turn traffic into predictable revenue
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-mobile-body mb-8">
              If growth feels harder than it should, the problem isn't more traffic. It's misalignment across your message, funnel, and conversion system.
            </p>
            <a
              href="#briefing"
              className="inline-block w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-lg text-center shadow-lg hover:bg-slate-800 transition-colors"
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <div className="bg-slate-50 border-y border-slate-100 py-8 px-6 text-center text-sm text-slate-500">
        Worked with Grant Cardone, Cardone Ventures, 10X Health, and Copy Chief.
      </div>

      {/* AI INNER CIRCLE SECTION */}
      <section className="px-6 py-20 max-w-4xl mx-auto border-b border-slate-100">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 relative">
            <Image
              src="/ai-inner-circle-logo.jpg"
              alt="AI Inner Circle"
              fill
              className="rounded-full object-cover shadow-md"
            />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Stop being the bottleneck.
        </h2>
        <p className="text-center text-slate-600 max-w-xl mx-auto mb-12 leading-mobile-body">
          The <strong>AI Inner Circle</strong> is a trust-first system built to remove execution bottlenecks without losing your voice or quality.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-900">
              <strong>Strategic Foundations:</strong> Clear upstream bottlenecks.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-900">
              <strong>Messaging Systems:</strong> Capture founder insight at scale.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-900">
              <strong>GTM Execution:</strong> Deploy workflows for momentum.
            </p>
          </div>
        </div>
        <p className="text-center italic text-slate-500">
          Human for Trust, AI for Scale.
        </p>
      </section>

      {/* OPT-IN: MailerLite Placeholder */}
      <section id="briefing" className="px-6 py-20 bg-slate-900 text-white text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Briefings</h2>
          <p className="text-slate-400 mb-8">
            Practical breakdowns on revenue, positioning, and AI execution.
          </p>

          {subscribed ? (
            <div className="p-4 bg-green-600 rounded-lg text-white font-semibold">
              ✓ Thanks! Check your email.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-5 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
              >
                Get Updates & News
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-6 left-6 right-6 md:hidden z-50">
        <a
          href="#briefing"
          className="block w-full py-4 bg-slate-900 text-white font-bold rounded-full text-center shadow-2xl hover:bg-slate-800 transition-colors"
        >
          Let's Talk
        </a>
      </div>
    </main>
  )
}
