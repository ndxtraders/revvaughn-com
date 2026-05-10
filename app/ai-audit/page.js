import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Audit — Rev Vaughn',
  description:
    'A customized AI implementation roadmap for founder-led brands. 6-10 hours of deep-work synthesis to find the exact tools, sequence, and integrations that fit your business.',
  openGraph: {
    title: 'AI Audit — Rev Vaughn',
    description:
      'A customized AI implementation roadmap for founder-led brands. Find the exact AI tools and sequence that fit your business.',
    url: 'https://revvaughn.com/ai-audit',
    siteName: 'Rev Vaughn',
    type: 'website',
  },
}

export default function AIAuditPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">Program &middot; AI Audit</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
                Your Customized AI Implementation Roadmap
              </h1>
              <p className="text-lead text-ink-muted mb-10">
                I spend 6&ndash;10 hours deep-diving into your specific processes to find the
                exact AI tools, sequence, and integrations that fit your business. You get
                an Action Plan you can execute.
              </p>
              <Button href="https://checkout.mailerlite.com/checkout/18357" external variant="primary">
                Book Your AI Audit
              </Button>
              <p className="text-small text-ink-faint mt-3">
                Your order will be processed by Stripe via a secure MailerLite checkout form.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Turn Red Zones into Green Assets.png"
                alt="Turn Red Zones into Green Assets"
                width={500}
                height={500}
                className="w-full h-auto max-w-sm md:max-w-full"
              />
            </div>
          </div>
        </Section>

        {/* Problem */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The Problem</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                If you know you need AI and don&rsquo;t know where to start...
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Most founders fall into one of two traps. The first is the Shiny Object Trap:
                buying subscriptions to five different AI tools that collect digital dust because
                they don&rsquo;t solve a real bottleneck. The second is Analysis Paralysis: doing
                nothing because the landscape moves too fast, while competitors quietly automate
                their lead flow and operations.
              </p>
              <p>
                If your AI Priority Map showed Red Zones, you don&rsquo;t need more information.
                You need a roadmap.
              </p>
            </div>
          </div>
        </Section>

        {/* Agitate */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why It Matters</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Every week without a system costs you 5&ndash;10 hours of founder time.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Get AI leverage working for you. The manual
                processes, the copy-paste workflows, the decisions that wait on your approval
               are compounding costs, not one-time inconveniences.
              </p>
              <p>
                The AI Audit is a surgical strike on your business friction. I find the
                low-effort, high-reward combinations that move the needle immediately. The goal:
                get 5 to 10 hours back per week.
              </p>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">The Process</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Three phases. One clear roadmap.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">01</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                Discovery &amp; Diagnostic
              </h3>
              <p className="text-body text-ink-muted">
                A 60&ndash;90 minute deep-dive call. I analyze your current tech stack and team workflows 
               and find the bottlenecks and leaks that are currently
                invisible to you. We identify exactly what and where they are.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">02</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                Deep-Work Synthesis
              </h3>
              <p className="text-body text-ink-muted">
                I take 6&ndash;10 hours behind the scenes to build your customized roadmap.
                I evaluate which AI agents, LLMs, or automated workflows fit your actual budget
                and skill level. No over-engineering. Only what works.
              </p>
            </div>
            <div className="border-t border-ink pt-6">
              <div className="text-small font-medium text-accent mb-3">03</div>
              <h3 className="text-h3 font-semibold text-ink mb-3">
                Roadmap Presentation
              </h3>
              <p className="text-body text-ink-muted">
                A 60&ndash;90 minute session where I present your finished AI Implementation
                Roadmap. Which tools to use, the exact sequence of implementation, and how to
                integrate without breaking your team&rsquo;s Human-First touch.
              </p>
            </div>
          </div>
        </Section>

        {/* Deliverable */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The Deliverable</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                A plan you can act on immediately.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                At the end of this process, you have a finished AI Implementation Roadmap.
                Implement it yourself &mdash; you have the instructions. Hand it to your team
                &mdash; they have the tech stack and the reasoning. Or hire me to execute it
                if you want it done right, right now.
              </p>
              <p>
                This is your action plan. A
                prioritized path with specific tools, specific sequences, and specific
                integration steps.
              </p>
            </div>
          </div>
        </Section>

        {/* Investment */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The Investment</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                $600
              </h2>
              <p className="text-body text-ink-muted mt-4">
                Founder&rsquo;s Early-Access Pricing
              </p>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Founder&rsquo;s early access special pricing is based on my current capacity. To maintain the
                6&ndash;10 hours of manual attention I give to every audit, this price will
                be increasing very soon. If you leave and come back later, it will likely be higher.
              </p>
              <p>
                The audit pays for itself when it eliminates a single wasted tool subscription
                or recovers a few hours of your week. Most founders see both in the first month.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Turn your <span style={{color:'#990000'}}>Red Zones</span> into <span style={{color:'#83B14E'}}>Green Assets</span>
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              Stop experimenting. Start executing with a clear, prioritized roadmap built
              for your specific business.
            </p>
            <Button href="https://checkout.mailerlite.com/checkout/18357" external variant="primary">
              Book Your AI Audit
            </Button>
            <p className="text-small text-ink-faint mt-3">
              Your order will be processed by Stripe via a secure MailerLite checkout form.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
