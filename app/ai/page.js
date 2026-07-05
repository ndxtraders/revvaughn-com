import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const OUTCOMES = [
  {
    heading: 'See where your business is at a breaking point',
    body: 'Find exactly where AI will move your business forward. Answer 12 questions across 4 business pillars.',
  },
  {
    heading: 'Get a specific AI fix for every bottleneck you flag',
    body: 'Every breaking point comes with a precise AI solution. You leave knowing what to build and why.',
  },
  {
    heading: 'Download a full PDF report of your results',
    body: 'Your pillar breakdown, priority map, and recommendations, formatted and ready to share with your team.',
  },
]

export default function AIPriorityMapPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="bg-paper border-b border-rule py-section">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-16 items-center">

              {/* Left — copy + form */}
              <div className="md:col-span-2">
                <p className="eyebrow mb-6">Free Assessment · 5 Minutes</p>
                <h1 className="font-sans font-semibold text-display text-ink mb-6 leading-tight">
                  Win Back 5 to 10 Hours A Week
                </h1>
                <p className="text-lead text-ink-muted mb-10">
                  Answer 12 questions across 4 pillars. You get a live heatmap, specific AI fixes for every
                  breaking point, plus a downloadable report.
                </p>

                <div className="mb-4">
                  <Link
                    href="/map"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent whitespace-nowrap"
                  >
                    Start My Map <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <p className="text-small text-ink-faint">
                  Takes 5 minutes &nbsp;·&nbsp; Zero technical jargon &nbsp;·&nbsp; PDF results included
                </p>
              </div>

              {/* Right — preview image */}
              <div className="hidden md:block">
                <div className="border border-rule overflow-hidden shadow-sm">
                  <Image
                    src="/ai-priority-map-preview-v2.png"
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
              condensed into a 5-minute Assessment.
            </p>
            <div className="flex justify-center mb-4">
              <Link
                href="/map"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-small font-medium tracking-wide transition-all duration-200 bg-ink text-paper border border-ink hover:bg-accent hover:border-accent whitespace-nowrap"
              >
                Start My Map <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
