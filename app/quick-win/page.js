import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Quick Win — Rev Vaughn',
  description:
    'A focused diagnostic sprint for founder-led brands. Find the leak in your revenue system and fix the highest-leverage point.',
}

export default function QuickWinPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">Program · Diagnostic Sprint</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              Find the leak. Fix the highest-leverage point.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              A focused sprint for founder-led brands that need clarity on where revenue is
              actually breaking — before spending another dollar on traffic, tools, or team.
            </p>
            <Button href="#" variant="primary">
              Learn More
            </Button>
          </div>
        </Section>

        {/* Problem */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The Problem</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                You&rsquo;re busy. Revenue isn&rsquo;t compounding.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Traffic is fine. The calendar is full. Proposals go out. But pipeline feels
                stuck — and you can&rsquo;t tell if the issue is the offer, the messaging, the
                sales process, or the system behind it.
              </p>
              <p>
                Every advisor has a different opinion. Every tool promises to be the fix. You&rsquo;ve
                already tried most of them.
              </p>
            </div>
          </div>
        </Section>

        {/* Agitate */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why it matters</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Guessing is the most expensive line item on your P&amp;L.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Every month you operate on assumption, you pay for it — in wasted ad spend,
                wasted founder hours, and sales cycles that stall at the exact same point.
              </p>
              <p>
                Worse: the longer the system stays broken, the more tactics pile on top of it.
                New funnel. New tool. New hire. The leak is still there, just buried deeper.
              </p>
              <p>
                Most founders don&rsquo;t need more effort. They need a clean diagnosis.
              </p>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">The Sprint</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              A short, structured engagement to surface the single highest-leverage fix.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Audit</h3>
              <p className="text-body text-ink-muted">
                We map your current revenue system end-to-end — offer, messaging, funnel, sales
                motion, data.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Diagnose</h3>
              <p className="text-body text-ink-muted">
                We identify the bottleneck — the one constraint costing you the most pipeline
                right now.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Prescribe</h3>
              <p className="text-body text-ink-muted">
                You leave with a prioritized action plan — what to fix first, what to ignore, and
                what to measure.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Stop guessing. Start operating on evidence.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              The full scope, timeline, and investment are in the program doc.
            </p>
            <Button href="#" variant="primary">
              Learn More
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
