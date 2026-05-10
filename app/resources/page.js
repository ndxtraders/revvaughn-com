import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Resources — Free Tools and Frameworks | Rev Vaughn',
  description:
    'Free frameworks, AI skills, and playbooks Rev Vaughn uses with founder-led brands. Take what is useful.',
}

const RESOURCES = [
  {
    name: 'DISC Voice',
    tagline: 'AI writing that sounds like a human. Not a robot.',
    desc: 'A plug-and-play Claude skill that installs five distinct behavioral voices into your AI workflow. Ships with a mini-brief template and a 15-minute install workshop.',
    cta: 'Get the Voice Skill',
    href: '/voice',
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Free Resources</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            Free tools. Built for operators.
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed">
            The frameworks, AI skills, and playbooks I use with clients. Take what&rsquo;s
            useful. Steal what&rsquo;s great.
          </p>
        </Section>

        {/* Resource list */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">The Library</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-12">
            What&rsquo;s available right now.
          </h2>
          <div className="space-y-10">
            {RESOURCES.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-accent pl-6 md:pl-8"
              >
                <h3 className="text-h2 font-semibold text-ink leading-snug mb-3">
                  {item.name}
                </h3>
                <p className="text-lead text-ink-muted mb-4 leading-relaxed">
                  {item.tagline}
                </p>
                <p className="text-body text-ink-soft leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Button href={item.href} variant="primary">
                  {item.cta}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-body text-ink-faint mt-14 italic">
            New resources added regularly. Check back or grab a briefing to get notified.
          </p>
        </Section>

        {/* The Invisible Founder Research */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <p className="eyebrow mb-6">New Research · Founder-led Brands</p>
            <h2 className="text-h1 font-semibold mb-4 leading-tight">
              The Invisible Founder
            </h2>
            <p className="text-lead text-ink mb-10">
              Over the past few days, I&rsquo;ve shared research on the three ways founders are being systematically erased.
            </p>

            <div className="space-y-8 mb-10">
              <div>
                <div className="text-small font-semibold mb-2">Post 1 — Organic Reach Collapse</div>
                <p className="text-body text-ink-muted">
                  Instagram went from 10–15% reach in 2020 to 2–3% today. Facebook pages with 10K followers reach 137 people per post.
                </p>
              </div>
              <div>
                <div className="text-small font-semibold mb-2">Post 2 — The Paid Media Trap</div>
                <p className="text-body text-ink-muted">
                  iOS 14 broke targeting. ROAS dropped 38% overnight. Costs doubled or tripled. Can&rsquo;t stop paying because organic is dead. Can&rsquo;t sustain paying because costs keep rising.
                </p>
              </div>
              <div>
                <div className="text-small font-semibold mb-2">Post 3 — The Attribution Crisis</div>
                <p className="text-body text-ink-muted">
                  AI Overviews appear in 80% of search queries. Only 47% of top-10 pages get cited. Your ideas spread everywhere. Your name appears nowhere.
                </p>
              </div>
            </div>

            <p className="text-body text-ink mb-8">
              I&rsquo;ve received more requests from Founders for early access than I could have guessed.
            </p>
            <p className="text-body text-ink mb-4 font-medium">Part 1 of the complete research is now live.</p>

            <p className="text-body text-ink-muted mb-4">Inside Part 1:</p>
            <ul className="space-y-2 mb-10 text-body text-ink-muted">
              <li>→ The visibility collapse timeline (2018–2027)</li>
              <li>→ When each structural break happened and why</li>
              <li>→ The data proving this is systematic, not accidental</li>
              <li>→ The turning point and what happens next</li>
              <li>→ What happens if you do nothing (+ the nightmare scenario)</li>
            </ul>

            <p className="text-body text-ink-muted mb-10">
              This connects everything from the last few days with the complete big picture.
            </p>

            <Button href="https://www.linkedin.com/pulse/part-1-invisible-founder-leadsandclients-9g2gc" external variant="accent">Read Part 1 →</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
