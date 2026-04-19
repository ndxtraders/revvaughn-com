import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Growth-As-A-Service — Rev Vaughn',
  description:
    'A fractional GTM partnership for founder-led brands. We architect and operate the revenue system with you — not just advise on it.',
}

const FAQS = [
  {
    q: 'What is Growth-as-a-Service?',
    a: 'Growth-as-a-Service is an ongoing engagement where I take responsibility for identifying, prioritizing, and removing the bottlenecks slowing your revenue. Instead of isolated tactics, you get continuous strategy, execution oversight, and optimization. Best fit: businesses with traction that feel stuck, inconsistent, or inefficient.',
  },
  {
    q: 'How is it different from a marketing agency?',
    a: 'Agencies deliver tactics — ads, SEO, content, funnels. Growth-as-a-Service owns the growth challenge itself: diagnosing what is blocking revenue, deciding what to work on (and what to ignore), and coordinating strategy and execution against a number. You are not buying outputs. You are buying clarity, speed, and results.',
  },
  {
    q: 'Is this the same as a fractional CMO?',
    a: 'It includes fractional CMO-level thinking, but it is more execution-oriented. A fractional CMO usually focuses on leadership, planning, and team direction. Growth-as-a-Service focuses on rapid diagnosis, ruthless prioritization, removing blockers, and improving conversion. For most clients, it functions like a hands-on revenue strategist embedded in the business.',
  },
  {
    q: 'Who is it best for?',
    a: 'Founders and operators of established businesses doing 7- to 9-figure revenue, where the team is doing the work but not seeing proportional results. If you are pre-revenue or just starting out, this is not the right fit.',
  },
  {
    q: 'What does it typically include?',
    a: 'Engagements are customized, but commonly include growth diagnosis and prioritization, funnel and conversion optimization, messaging and positioning refinement, marketing strategy and execution guidance, and ongoing performance review. The focus is always on the next biggest growth lever.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most clients gain clarity and direction in the first few weeks as the highest-leverage bottlenecks are surfaced. Measurable improvements follow as those bottlenecks are removed. The long-term goal is sustainable, compounding growth — not a one-time spike.',
  },
]

const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function GrowthAsAServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">Program · Fractional GTM</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              A revenue system, built and operated with you.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              An embedded partnership for founder-led brands that need more than advice. We sit
              inside the business, architect the GTM system, and run it alongside your team until
              it compounds.
            </p>
            <Button href="https://docs.google.com/document/d/1v_764Nc9JfAsrEQLV7vnv3byJuA0yz5tsv8AWBSLTr8/edit?usp=sharing" external variant="primary">
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
                Consultants hand you a deck. Agencies hand you a bill.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                You&rsquo;ve hired strategists who disappear after the workshop. You&rsquo;ve hired
                agencies who treat your brand like a template. Both leave you with the same
                problem: nobody is accountable for the number.
              </p>
              <p>
                Meanwhile, you&rsquo;re still the Chief Everything Officer — running sales, approving
                copy, fixing the funnel at 11pm.
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
                The founder tax compounds. Quietly. Expensively.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Every week the system stays in your head is another week it can&rsquo;t be hired
                against, optimized, or scaled. Your best leverage is trapped between your ears.
              </p>
              <p>
                You don&rsquo;t need another vendor. You need an operator who will build the machine
                and run it with you — so you can finally work on the business instead of inside it.
              </p>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">How It Works</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Architect. Operate. Optimize.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Architect</h3>
              <p className="text-body text-ink-muted">
                We design the full revenue system: positioning, offer, funnel, sales motion,
                measurement. Nothing left to guesswork.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Operate</h3>
              <p className="text-body text-ink-muted">
                We run the system alongside your team. Campaigns ship. Pipeline moves. Feedback
                loops close in days, not quarters.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Optimize</h3>
              <p className="text-body text-ink-muted">
                We instrument what matters, kill what doesn&rsquo;t, and compound the few inputs
                that drive the outcome.
              </p>
            </div>
          </div>
        </Section>

        {/* Who it's for */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Who it&rsquo;s for</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Founder-led brands ready for an operator, not an advisor.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              <li className="border-b border-rule pb-4">
                You have product-market fit but the growth engine is held together by hustle.
              </li>
              <li className="border-b border-rule pb-4">
                You want a partner accountable to the number, not to the deck.
              </li>
              <li className="border-b border-rule pb-4">
                You&rsquo;re willing to share the steering wheel to get the outcome.
              </li>
              <li className="pb-4">
                You&rsquo;re building for the next stage — not patching the current one.
              </li>
            </ul>
          </div>
        </Section>

        {/* FAQ */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-12">
            <div className="eyebrow mb-4">Frequently Asked Questions</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              What founders ask before saying yes.
            </h2>
          </div>
          <div className="space-y-10">
            {FAQS.map((f, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <h3 className="text-h3 font-semibold text-ink leading-snug mb-3">{f.q}</h3>
                <p className="text-body text-ink-soft leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
          />
        </Section>

        {/* CTA */}
        <Section bg="grey" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Your revenue system deserves an operator.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              The engagement structure, scope, and investment are detailed in the program doc.
            </p>
            <Button href="https://docs.google.com/document/d/1v_764Nc9JfAsrEQLV7vnv3byJuA0yz5tsv8AWBSLTr8/edit?usp=sharing" external variant="primary">
              Learn More
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
