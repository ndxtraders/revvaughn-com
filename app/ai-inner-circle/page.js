import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'AI Inner Circle | Rev Vaughn',
  description:
    'Where founder-led brands build revenue systems that actually scale. Your voice. AI doing the work.',
}

const CLIENTS = [
  'Grant Cardone',
  '10X Health',
  'Cardone Ventures',
  'SquadUp Summit',
  '10X Business Coach',
  'Heather Rae Essentials',
  'CardoMax',
  'Copy Chief',
  'Email Copy Academy',
  'VestRight',
  'Allied Development',
  'Remix Your Business',
  'REVIVX',
  'Get More Math',
  'SpaSurge',
  'Zenpreneurs',
  '10X GrowthCon',
  '10X Health UK',
  'IV Academy',
  '10X Roofing',
  '10X Home Services',
  '10X DECODE',
]

const WINS = [
  {
    result: '$1M+ in sales',
    detail: 'Created the control campaign for Grant Cardone’s 10X Business Coach.',
  },
  {
    result: '$6.57M total',
    detail: 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.',
  },
  {
    result: '$20M+ annually',
    detail: 'Helped grow martech company Front Porch from startup to scale.',
  },
  {
    result: '26 countries',
    detail: 'Led an online ad network with clients across 26 countries.',
  },
  {
    result: '144% more booked calls',
    detail: 'CPL reduced below goal. Booked calls rose 144% with 30% conversion rates across Cardone Ventures portfolio.',
  },
  {
    result: 'Sold out in 48 hours',
    detail: 'First launch sold out in 48 hours, driven by email and social media for HRE Beauty.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I’ve brought Rev in on million-dollar campaign launches, hired him for my 7-figure marketing agency, and seen firsthand what happens when real, A-level copy hits the page. Getting time on Rev’s calendar is rare. If he’s available, take it. Most people won’t get the chance. If you do, don’t walk… run.",
    name: 'Garen Mazon',
    title: 'Co-Founder, SpaSurge',
    org: '#1 Spa Marketing Agency',
  },
  {
    quote:
      'Rev Vaughn is that ultra-rare copywriter who practically cannot fail. That’s because he has not only mastered the craft, but he also deeply understands people and what drives their desires. Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy Chief.',
    name: 'Kevin Rogers',
    title: 'Founder, Copy Chief',
    org: '#1 Copywriting Community',
  },
  {
    quote:
      'Knocked it out of the park. Exceeded our sales goal. I fully endorse Rev. Kevin Rogers and I hired him to redo our Email Copy Academy funnel, and Rev knocked it out of the park. We even exceeded our sales goal. I was blown away by how well it did.',
    name: 'Chris Orzechowski',
    title: 'Creator, Email Copy Academy',
    org: '#1 Email Marketing Program',
  },
  {
    quote:
      'Our first launch sold out in only 48 hours, driven by email and social media. I had the opportunity to work with Rev on several of our consumer brands, including HRE Beauty and CardoMax. His ability to blend strategy, creative execution, and data made a measurable difference in how those brands grew.',
    name: 'Lisa De Rosa',
    title: 'Director, Corporate Partnerships',
    org: 'Cardone Ventures',
  },
  {
    quote:
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev’s work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands. I confidently recommend Rev for any role requiring strategic marketing leadership, copy expertise, and proven results.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships',
    org: 'Cardone Ventures',
  },
  {
    quote:
      "Listen to his training, and you’ll make more money TODAY! I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn’t matter what industry you’re in — listen to his training, and you’ll make more money TODAY.",
    name: 'Jimmy Parent',
    title: 'Persuasion Scientist',
    org: '',
  },
]

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
      'Build the full system. Traffic, opt-in, nurture, sales, onboarding. Track what moves revenue.',
  },
]

const CADENCE = [
  { stat: '2', label: 'Workshops every month. Live and recorded.' },
  { stat: '1', label: 'New skill every Tuesday. Use it that same day.' },
  { stat: 'Weekly', label: 'Friday Q&A with Rev' },
  { stat: 'Daily', label: 'Direct access to Rev inside the community.' },
]

const MONTHS = [
  {
    n: '01',
    theme: 'Strategic Foundations',
    body: 'You set the foundation. Voice, offer, and market locked in before you build a single piece of content.',
    skills: ['Brand Voice Architect', 'Market Intelligence Research', 'Idea Pressure Tester', 'Sell Before You Build'],
  },
  {
    n: '02',
    theme: 'Messaging Systems',
    body: 'You write copy that converts. Offer design, sales pages, and messaging that does the selling for you.',
    skills: ['Offer Creation', 'Copywriting', 'Copy Editing', 'AI Check to avoid AI slop'],
  },
  {
    n: '03',
    theme: 'Content Engine',
    body: 'You show up consistently. LinkedIn profile optimized, posts ghostwritten, content repurposed across channels.',
    skills: ['LinkedIn Profile Architect', 'LinkedIn Ghostwriter', 'Content Repurposing', 'Hook Creator'],
  },
  {
    n: '04',
    theme: 'Email & Lead Generation',
    body: 'Your pipeline runs without you. Lead magnet, email sequence, and LinkedIn outreach all connected.',
    skills: ['Lead Magnet Designer', 'Email Sequence', 'LinkedIn Content Engine', 'LinkedIn Carousel Builder'],
  },
  {
    n: '05',
    theme: 'Research & Conversion',
    body: 'You grow with data. Market research, pricing, cold outreach, and page fixes that move revenue.',
    skills: ['Deep Market Research', 'Pricing Strategy', 'Email Outreach', 'Conversion Rate Optimization'],
  },
  {
    n: '06',
    theme: 'Advanced Operations',
    body: 'You operate like a full team. Advanced prompts, Go-To-Market teardowns, and a complete rebuild.',
    skills: ['Engineer Any Prompt', 'Go-To-Market Teardown', 'Go-To-Market Rebuild', 'AI Business Coach'],
  },
]

export default function AIInnerCirclePage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="max-w-prose">
            <div className="eyebrow mb-6">AI Inner Circle</div>
            <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
              Your human voice sells it. AI scales it.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              A private Skool community for founder-led brands building revenue systems with AI &mdash; without losing your voice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://revvaughn.com/contact" external variant="primary">
                Join the Waitlist
              </Button>
            </div>
          </div>
        </Section>

        {/* 2. CLIENTS STRIP */}
        <section className="bg-paper-grey border-y border-rule py-12">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-h3 font-semibold text-ink mb-6 text-center">Selected Clients &amp; Business Launches</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-ink-soft">
              {CLIENTS.map((c) => (
                <span key={c} className="whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY IT EXISTS */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Why it exists</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                &ldquo;Just use AI&rdquo; is not a growth strategy.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Every week, I see founders doing $1M to $20M in revenue, stuck in one of two places.
                Either they&rsquo;re doing everything themselves and can&rsquo;t keep up. Or they&rsquo;re
                using AI and creating &ldquo;AI Slop&rdquo; their audience ignores.
              </p>
              <p>Both cost pipeline. Both waste time.</p>
              <p>
                The Inner Circle is where we build the middle ground. You keep control of your voice
                and your brand. AI handles the execution. And you work alongside other operators
                solving the same problem.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. THREE PILLARS */}
        <Section bg="grey" width="content">
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

        {/* 5. WHO IT'S FOR */}
        <Section bg="greyDark" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Who it&rsquo;s for</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Founder-led brands doing $1M to $20M.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              <li className="border-b border-rule pb-4">You are the face and voice of the brand. That&rsquo;s your advantage and your constraint.</li>
              <li className="border-b border-rule pb-4">You&rsquo;ve paid agencies and bought courses. Revenue didn&rsquo;t move.</li>
              <li className="border-b border-rule pb-4">You need a system that compounds. Not another list of tactics.</li>
              <li className="pb-4">You&rsquo;re ready to be coached. And to put in the work.</li>
            </ul>
          </div>
        </Section>

        {/* 6. SELECTED WINS */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-12">
            <p className="eyebrow mb-4">Selected Wins</p>
            <h2 className="text-h1 font-semibold text-ink leading-tight">
              A few cool things I&rsquo;ve done.
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {WINS.map((w) => (
              <li key={w.result} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink-soft leading-relaxed">
                  <span className="text-ink font-semibold">{w.result}</span> &mdash; {w.detail}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 7. CURRICULUM */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-12">
            <div className="eyebrow mb-4">Inside the membership</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              One tool a week. A full system by month six.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {CADENCE.map((c) => (
              <div key={c.label} className="border-t-2 border-accent pt-4">
                <div className="text-h2 font-semibold text-ink mb-2">{c.stat}</div>
                <div className="text-body text-ink-muted">{c.label}</div>
              </div>
            ))}
          </div>
          <div className="eyebrow mb-8">The 6-month curriculum</div>
          <div className="grid md:grid-cols-3 gap-10">
            {MONTHS.map((m) => (
              <div key={m.n} className="border-t border-ink pt-6">
                <div className="text-small font-medium text-accent mb-3">{m.n}</div>
                <h3 className="text-h3 font-semibold text-ink mb-3">{m.theme}</h3>
                <p className="text-body text-ink-muted mb-4">{m.body}</p>
                <ul className="space-y-1">
                  {m.skills.map((s) => (
                    <li key={s} className="text-small text-ink-faint">
                      <span className="text-accent mr-2">&ndash;</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* 8. TESTIMONIALS */}
        <Section bg="paper" width="wide">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">What the Experts Say</p>
            <h2 className="text-h1 font-semibold">Selected endorsements.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-muted">{t.title}</div>
                  {t.org && <div className="text-ink-faint">{t.org}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* 9. PRICING */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Join the Inner Circle</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Stop guessing. Start building.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">

            {/* Option 1 — Community */}
            <div className="border border-rule bg-paper p-8 flex flex-col">
              <div className="eyebrow mb-4">Community</div>
              <h3 className="text-h2 font-semibold text-ink mb-2">AI Inner Circle</h3>
              <div className="text-display font-semibold text-ink mb-1">$47</div>
              <div className="text-small text-ink-muted mb-8">per month</div>
              <ul className="space-y-3 text-body text-ink-soft mb-10 flex-1">
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Full 6-month curriculum (one skill per week)</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>2 live workshops per month</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Friday Q&amp;A with Rev</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Daily community access</li>
              </ul>
              <Button href="https://revvaughn.com/contact" external variant="primary">
                Join the Community
              </Button>
            </div>

            {/* Option 2 — Coaching */}
            <div className="border-2 border-accent bg-paper p-8 flex flex-col">
              <div className="eyebrow mb-4">Community + Coaching</div>
              <h3 className="text-h2 font-semibold text-ink mb-2">AI Inner Circle + 1:1</h3>
              <div className="text-display font-semibold text-ink mb-1">$800</div>
              <div className="text-small text-ink-muted mb-8">per month</div>
              <ul className="space-y-3 text-body text-ink-soft mb-10 flex-1">
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Everything in Community</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Weekly 1:1 coaching call with Rev</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Direct access to Rev</li>
                <li className="flex gap-3"><span className="text-accent mt-1">–</span>Priority review of your copy and systems</li>
              </ul>
              <Button href="https://revvaughn.com/contact" external variant="primary">
                Apply for Coaching
              </Button>
            </div>

          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
