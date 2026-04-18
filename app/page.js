'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      console.log('Email submitted:', email)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#0f172a', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
      {/* HERO */}
      <section style={{ padding: '5rem 1.5rem 3rem', maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          {/* Headshot */}
          <div style={{ width: '12rem', height: '12rem', position: 'relative', flexShrink: 0 }}>
            <Image
              src="/headshot-4.png"
              alt="Rev Vaughn"
              fill
              priority
              style={{ borderRadius: '1rem', objectFit: 'cover', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
          </div>

          {/* Hero Copy */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#2563eb', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '1rem' }}>
              GTM Strategist & Direct Response Operator
            </p>
            <h1 style={{ fontSize: '2rem', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Turn traffic into predictable revenue
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#475569', lineHeight: '1.6', marginBottom: '2rem' }}>
              If growth feels harder than it should, the problem isn't more traffic. It's misalignment across your message, funnel, and conversion system.
            </p>
            <a
              href="#briefing"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#1e293b',
                color: '#ffffff',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                textAlign: 'center',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#334155'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1e293b'}
            >
              Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <div style={{ backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
        Worked with Grant Cardone, Cardone Ventures, 10X Health, and Copy Chief.
      </div>

      {/* AI INNER CIRCLE */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '56rem', margin: '0 auto', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '5rem', height: '5rem', position: 'relative' }}>
            <Image
              src="/ai-inner-circle-logo.jpg"
              alt="AI Inner Circle"
              fill
              style={{ borderRadius: '9999px', objectFit: 'cover', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </div>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem' }}>
          Stop being the bottleneck.
        </h2>
        <p style={{ textAlign: 'center', color: '#475569', maxWidth: '28rem', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          The <strong>AI Inner Circle</strong> is a trust-first system built to remove execution bottlenecks without losing your voice or quality.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <p style={{ fontWeight: '600', color: '#1e293b' }}>
              <strong>Strategic Foundations:</strong> Clear upstream bottlenecks.
            </p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <p style={{ fontWeight: '600', color: '#1e293b' }}>
              <strong>Messaging Systems:</strong> Capture founder insight at scale.
            </p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.75rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <p style={{ fontWeight: '600', color: '#1e293b' }}>
              <strong>GTM Execution:</strong> Deploy workflows for momentum.
            </p>
          </div>
        </div>
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#64748b' }}>
          Human for Trust, AI for Scale.
        </p>
      </section>

      {/* OPT-IN */}
      <section id="briefing" style={{ padding: '5rem 1.5rem', backgroundColor: '#1e293b', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '28rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Strategic Briefings</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem' }}>
            Practical breakdowns on revenue, positioning, and AI execution.
          </p>

          {subscribed ? (
            <div style={{ padding: '1rem', backgroundColor: '#16a34a', borderRadius: '0.5rem', color: '#ffffff', fontWeight: '600' }}>
              ✓ Thanks! Check your email.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  padding: '1rem 1.25rem',
                  borderRadius: '0.5rem',
                  backgroundColor: '#334155',
                  border: '1px solid #475569',
                  color: '#ffffff',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                Get Updates & News
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div style={{ position: 'fixed', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', zIndex: 50, display: 'none' }}>
        <a
          href="#briefing"
          style={{
            display: 'block',
            width: '100%',
            padding: '1rem',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '9999px',
            textAlign: 'center',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            textDecoration: 'none',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#334155'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#1e293b'}
        >
          Let's Talk
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div:last-child {
            display: block !important;
          }
        }
      `}</style>
    </main>
  )
}
