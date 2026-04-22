import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

export const metadata = {
  title: 'DISC Voice — AI Writing That Sounds Human | Rev Vaughn',
  description:
    'Stop sending AI sludge to your market. Download the DISC Voice to leveage AI and scale your content while maintaining human trust.',
}

const DELIVERABLES = [
  {
    name: 'The DISC Voice Skill',
    desc: 'A plug-and-play Claude skill that installs five distinct behavioral voices into your AI workflow.',
  },
  {
    name: 'The DISC Voice Mini-Brief Template',
    desc: 'Line up your offer, audience, and identity using a simplified version of the strategic framework I use to build $100M campaigns.',
  },
  {
    name: 'The DISC Voice Workshop',
    desc: 'A 15-minute walkthrough showing you how to install the engine and move from "behavioral frameworks" to "identity replication."',
  },
]

export default function VoicePage() {
  return (
    <>
      {/* MailerLite Universal */}
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1848446');
        `}
      </Script>

      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Free Resource</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            AI writing that sounds human (Not robotic)
          </h1>
          <p className="text-lead text-ink-muted leading-relaxed">
            Stop sending &ldquo;AI sludge&rdquo; to your market. Download the DISC Voice.
            Scale content while maintaining human trust.
          </p>
        </Section>

        {/* What you're getting */}
        <Section bg="grey" width="prose">
          <div className="eyebrow mb-4">What you&rsquo;re getting</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            Three assets. One install.
          </h2>
          <div className="space-y-8">
            {DELIVERABLES.map((item, i) => (
              <div key={i} className="border-l-2 border-accent pl-6">
                <h3 className="text-h3 font-semibold text-ink leading-snug mb-3">
                  {item.name}
                </h3>
                <p className="text-body text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Form */}
        <Section bg="paper" width="prose">
          <div className="border border-rule bg-paper-grey p-8 md:p-10">
            <div className="eyebrow mb-4">Get Access</div>
            <h2 className="text-h2 font-semibold tracking-tight text-ink mb-3">
              Where should I send your Voice assets?
            </h2>
            <p className="text-body text-ink-muted mb-8">
              Drop your name and best email. I&rsquo;ll send the install link and workshop
              access straight to your inbox.
            </p>
            {/* MailerLite embedded form */}
            <div className="ml-embedded" data-form="a7c3DI"></div>
          </div>
        </Section>

        {/* Authority Footer */}
        <Section bg="grey" width="prose">
          <p className="text-body text-ink-soft leading-relaxed italic">
            Based on the approach used by Rev Vaughn to generate over{' '}
            <span className="font-semibold text-ink not-italic">$100M+</span> in
            collective revenue.
          </p>
        </Section>
      </main>
      <Footer />
    </>
  )
}
