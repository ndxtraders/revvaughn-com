import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Inner Circle — Rev Vaughn',
  description:
    'A community for founder-led brands building revenue systems with AI. Human for trust. AI for scale.',
}

const PILLARS = [
  {
    n: '01',
    title: 'Strategic Foundations',
    body:
      'Clarify your category, positioning, and offer before you scale. The wrong foundation multiplies the wrong results.',
  },
  {
    n: '02',
    title: 'Messaging Systems',
    body:
      'Translate your expertise into words that convert — ICP, hooks, proof, and objection stacks that work across channels.',
  },
  {
    n: '03',
    title: 'GTM Execution',
    body:
      'Assemble the system: traffic, opt-in, nurture, sales, onboarding. Measure what matters. Fix what breaks.',
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
              Human for trust. AI for scale.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              A community for founder-led brands building revenue systems that turn attention into
              qualified pipeline — without losing the founder&rsquo;s voice, craft, or point of view. 
                Contact me to get Membership details, pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://revvaughn.com/ai-inner-circle" external variant="primary">
                Learn More
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
                Founders are being told to &ldquo;just use AI.&rdquo; That&rsquo;s not a strategy.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Most founder-led brands are stuck between two extremes: manual labor that
                can&rsquo;t scale, or AI slop that erodes trust. Both kill pipeline.
              </p>
              <p>
                The Inner Circle is where we architect the middle path — systems where the founder
                remains the voice of the brand, and AI does the heavy lifting behind the scenes.
              </p>
              <p>
                You&rsquo;ll work through diagnostics, frameworks, and peer review with operators
                building the same thing you are.
              </p>
            </div>
          </div>
        </Section>

        {/* Three pillars */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">The three pillars</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              What we build inside the circle.
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
                Founder-led brands doing $1M–$20M.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              <li className="border-b border-rule pb-4">
                You&rsquo;re the face of the brand — and the bottleneck.
              </li>
              <li className="border-b border-rule pb-4">
                You&rsquo;ve spent on agencies and courses that didn&rsquo;t move revenue.
              </li>
              <li className="border-b border-rule pb-4">
                You want a system, not a list of tactics.
              </li>
              <li className="pb-4">
                You&rsquo;re willing to be coached — and to do the work.
              </li>
            </ul>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Inside the circle, you&rsquo;ll stop guessing.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              Contact me to get Membership details, pricing.
            </p>
            <Button href="https://revvaughn.com/ai-inner-circle" external variant="primary">
              Learn More
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
