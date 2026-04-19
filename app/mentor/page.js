import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Mentor Program — Rev Vaughn',
  description:
    '1:1 mentorship for founder-operators building the revenue system themselves. Direct access, sharp feedback, compounding reps.',
}

export default function MentorPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">Program · 1:1 Mentorship</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              You&rsquo;re building it yourself. You still need a sparring partner.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              1:1 mentorship for founder-operators doing the work — writing the copy, running the
              funnel, closing the deals — and who need a sharper thinking partner in the room.
            </p>
            <Button href="https://docs.google.com/document/d/1prAsSeJHWxznyWPqZ467mUCMULQ2FeB_anCGcAhbcZQ/edit?usp=sharing" external variant="primary">
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
                Founders learn in public. They pay for it in private.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                You&rsquo;re consuming every newsletter, podcast, and course you can find. You&rsquo;re
                implementing as fast as you can. But there&rsquo;s no one in your corner pressure-testing
                the decisions before you ship them.
              </p>
              <p>
                Peers are supportive. Forums are noisy. Neither is a substitute for a mentor who
                has built the thing you&rsquo;re building.
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
                Lone-wolf building has a ceiling. You&rsquo;re hitting it.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                The difference between a six-figure operator and a seven-figure one usually
                isn&rsquo;t effort — it&rsquo;s the quality of the decisions made at the inflection
                points. Offer, positioning, pricing, promise.
              </p>
              <p>
                Those decisions get made faster — and better — with a mentor who&rsquo;s already
                made them. And already paid the tuition for getting them wrong.
              </p>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">How It Works</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Direct access. Sharp feedback. Compounding reps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Private Working Sessions</h3>
              <p className="text-body text-ink-muted">
                We meet on a regular cadence to pressure-test strategy, unblock decisions, and
                review what you&rsquo;re building.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Async Feedback</h3>
              <p className="text-body text-ink-muted">
                Between sessions, send me your copy, funnels, pricing, and offers. I mark them up
                like I would my own.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">Frameworks &amp; Archive</h3>
              <p className="text-body text-ink-muted">
                Access to the playbooks, templates, and diagnostics I use inside paid engagements.
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
                Founders who do the work and want a sharper corner.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              <li className="border-b border-rule pb-4">
                You&rsquo;re the operator — you don&rsquo;t need someone to do it for you.
              </li>
              <li className="border-b border-rule pb-4">
                You&rsquo;d rather be told the truth than be told what you want to hear.
              </li>
              <li className="border-b border-rule pb-4">
                You&rsquo;re building something you care about — and you want to get it right.
              </li>
              <li className="pb-4">
                You&rsquo;ll use the access. Mentorship only works for founders who actually show up.
              </li>
            </ul>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="grey" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Better decisions, faster. That&rsquo;s the whole job.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              Structure, cadence, and investment are detailed in the program doc.
            </p>
            <Button href="https://docs.google.com/document/d/1prAsSeJHWxznyWPqZ467mUCMULQ2FeB_anCGcAhbcZQ/edit?usp=sharing" external variant="primary">
              Learn More
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
