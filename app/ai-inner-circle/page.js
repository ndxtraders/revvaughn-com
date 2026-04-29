import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Inner Circle | Rev Vaughn',
  description:
    'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.',
}

const PILLARS = [
  {
    n: '01',
    title: 'Strategic Foundations',
    body:
      'Lock in your category, positioning, and offer first. If the foundation is wrong, everything you build on top of it breaks faster.',
  },
  {
    n: '02',
    title: 'Messaging Systems',
    body:
      'Turn what you know into words that sell. ICP clarity, hooks, proof stacks, and objection handling that works in every channel.',
  },
  {
    n: '03',
    title: 'GTM Execution',
    body:
      'Build the full system. Traffic, opt-in, nurture, sales, onboarding. Track what moves revenue. Cut what doesn&rsquo;t.',
  },
]

export default function AIInnerCirclePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">AI Inner Circle</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              Your human voice sells it. AI scales it.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              A working group for founder-led brands that need revenue systems, not more content ideas.
              You stay the voice. AI does the production. Pipeline grows without burning you out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://revvaughn.com/contact" external variant="primary">
                Get Membership Details
              </Button>
              <Button href="/#briefings" variant="ghost">
                Get the Briefings
              </Button>
            </div>
          </div>
        </Section>

        {/* Why it exists */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why it exists</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                &ldquo;Just use AI&rdquo; is not a growth strategy.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Here&rsquo;s what I see every week. Founders doing $1M to $20M in revenue, stuck
                in one of two places. Either they&rsquo;re writing everything themselves and can&rsquo;t
                keep up. Or they&rsquo;re using AI and publishing content their audience ignores.
              </p>
              <p>
                Both cost pipeline. Both waste time.
              </p>
              <p>
                The Inner Circle is where we build the middle ground. You keep control of your voice
                and your brand. AI handles the execution. And you work alongside other operators
                solving the same problem.
              </p>
            </div>
          </div>
        </Section>

        {/* Three pillars */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">The three pillars</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              What we build together.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {PILLARS.map((p) => (
              <div key={p.n} className="border-t border-ink pt-6">
                <div className="text-small font-medium text-accent mb-3">{p.n}</div>
                <h3 className="text-h3 font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-body text-ink-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Who it's for */}
        <Section bg="greyDark" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Who it&rsquo;s for</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Founder-led brands doing $1M to $20M.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              <li className="border-b border-rule pb-4">
                You are the brand. That&rsquo;s your advantage and your constraint.
              </li>
              <li className="border-b border-rule pb-4">
                You&rsquo;ve paid agencies and bought courses. Revenue didn&rsquo;t move.
              </li>
              <li className="border-b border-rule pb-4">
                You need a system that compounds. Not another list of tactics.
              </li>
              <li className="pb-4">
                You&rsquo;re ready to be coached. And to put in the work.
              </li>
            </ul>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Stop guessing. Start building.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              Reach out for membership details and pricing.
            </p>
            <Button href="https://revvaughn.com/contact" external variant="primary">
              Get Membership Details
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
