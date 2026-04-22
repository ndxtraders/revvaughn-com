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
      </main>
      <Footer />
    </>
  )
}
