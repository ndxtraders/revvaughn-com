import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Leverage — Rev Vaughn',
  description:
    'Four ways to turn AI into real leverage for your founder-led business — from a free 5-minute assessment to a custom roadmap, an ongoing membership, and an AI that thinks like you.',
  openGraph: {
    title: 'AI Leverage — Rev Vaughn',
    description:
      'From a free 5-minute assessment to an AI that thinks like you — the full path to making AI actually work for your business.',
    url: 'https://revvaughn.com/ai-leverage',
    siteName: 'Rev Vaughn',
    type: 'website',
  },
}

// Each offer is a lightly reworded variation of its source page hero so the hub
// links out without duplicating the original copy verbatim (duplicate-content safe).
const OFFERS = [
  {
    eyebrow: 'Start here · Free assessment',
    title: 'Find out where AI gives you the biggest win',
    body:
      'Take a free 5-minute assessment. Twelve questions across four pillars of your business surface a live heatmap of your bottlenecks — plus a specific AI fix for each one and a downloadable report you can hand to your team.',
    cta: 'Start the Free Assessment',
    href: '/ai',
    note: 'Free · 5 minutes · PDF results included',
    img: '/ai-priority-map-preview-v2.png',
    imgAlt: 'Sample AI Priority Map results showing a pillar breakdown and heatmap',
    w: 600,
    h: 480,
    imgClass: 'max-w-md border border-rule shadow-sm',
  },
  {
    eyebrow: 'Go deeper · Done-with-you roadmap',
    title: 'Get a roadmap built for your exact business',
    body:
      'Once you know where the friction is, I go deeper. Six to eight hours of hands-on analysis turns your bottlenecks into a prioritized AI implementation plan — the precise tools, the sequence, and the integrations that fit how you actually operate.',
    cta: 'Explore the AI Audit',
    href: '/ai-audit',
    note: 'Founder’s early-access pricing',
    img: '/Turn Red Zones into Green Assets.png',
    imgAlt: 'Turn red zones into green assets',
    w: 500,
    h: 500,
    imgClass: 'max-w-sm',
  },
  {
    eyebrow: 'Stay sharp · Membership & coaching',
    title: 'Keep your voice. Let AI carry the workload.',
    body:
      'A private community and 1:1 coaching for founder-led brands building GTM and revenue systems with AI. A new department of AI Assistants each month, live workshops, and a Friday Q&A — so the execution that used to slow you down finally runs without you.',
    cta: 'Join AI Inner Circle',
    href: '/ai-inner-circle',
    note: 'From $199/month',
    img: '/AI-Inner-Circle-Logo-940.jpg',
    imgAlt: 'AI Inner Circle',
    w: 240,
    h: 240,
    imgClass: 'max-w-[220px]',
  },
  {
    eyebrow: 'Build it yourself · Workshop',
    title: 'Build an AI that thinks like you',
    body:
      'In one on-demand workshop, set up a version of Claude that knows your business, your clients, and your voice — and stops handing you generic answers. Two to three hours, no tech skills required, and it gets sharper every time you use it.',
    cta: 'See the AI Brain Workshop',
    href: '/ai-brain',
    note: '$99 · on-demand · live Q&A on Friday',
    img: '/Rev-Vaughn-800.jpg',
    imgAlt: 'Rev Vaughn',
    w: 400,
    h: 500,
    imgClass: 'max-w-xs grayscale',
  },
]

export default function AILeveragePage() {
  return (
    <>
      <Header />
      <main>

        {/* Intro hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">AI Leverage</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              Four ways to turn AI into real leverage.
            </h1>
            <p className="text-lead text-ink-muted">
              From a free 5-minute assessment to an AI that thinks like you, here’s the full path to
              making AI actually work for your founder-led business. Start wherever you are.
            </p>
          </div>
        </Section>

        {/* Offer sections — alternating background and image side */}
        {OFFERS.map((o, i) => {
          const imgFirst = i % 2 === 1
          return (
            <Section key={o.href} bg={i % 2 === 0 ? 'grey' : 'paper'} width="content">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={imgFirst ? 'md:order-last' : ''}>
                  <div className="eyebrow mb-4">{o.eyebrow}</div>
                  <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">{o.title}</h2>
                  <p className="text-body text-ink-soft mb-8">{o.body}</p>
                  <Button href={o.href} variant="primary">
                    {o.cta}
                  </Button>
                  {o.note && <p className="text-small text-ink-faint mt-3">{o.note}</p>}
                </div>
                <div className={`flex justify-center ${imgFirst ? 'md:order-first' : ''}`}>
                  <Image
                    src={o.img}
                    alt={o.imgAlt}
                    width={o.w}
                    height={o.h}
                    className={`w-full h-auto ${o.imgClass}`}
                  />
                </div>
              </div>
            </Section>
          )
        })}

      </main>
      <Footer />
    </>
  )
}
