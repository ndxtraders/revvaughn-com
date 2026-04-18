import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Button from './components/Button'
import EmailForm from './components/EmailForm'

const CLIENTS = [
  'Grant Cardone',
  'Cardone Ventures',
  '10X Health',
  'VestRight',
  'Allied Development',
  'Copy Chief',
  'SquadUp Summit',
  '10X Business Coach',
  'Heather Rae Essentials',
  'Front Porch',
  'Email Copy Academy',
  'SpaSurge',
  'CardoMax',
  'Remix Your Business',
  'Zenpreneurs',
  '10X GrowthCon',
  '10X Health UK',
  'IV Academy',
  '10X Roofing',
  '10X Home Services',
  '10X DECODE',
  'REVIVX',
]

const TESTIMONIALS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches, hired him for my 7-figure marketing agency, and seen firsthand what happens when real, A-level copy hits the page. Getting time on Rev's calendar is rare. If he's available, take it. Most people won't get the chance. If you do, don't walk... run.",
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
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev’s work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands. Rev managed complex, multi-brand campaigns across the Cardone Ventures portfolio, including 10X Health, REVIV X, CardoMax, IV Academy, and HRE Beauty. I confidently recommend Rev for any role requiring strategic marketing leadership, copy expertise, and proven results.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships',
    org: 'Cardone Ventures',
  },
  {
    quote:
      "Listen to his training, and you'll make more money TODAY. I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn't matter what industry you're in — listen to his training, and you'll make more money TODAY. You're amazeballs Rev!",
    name: 'Jimmy Parent',
    title: 'Persuasion Scientist',
    org: '',
  },
]

const CREDENTIALS = [
  { name: 'Stanford University', detail: 'Advanced Project Management' },
  { name: 'HubSpot', detail: 'Certified Sales Enablement' },
  { name: 'Growthworks', detail: 'Certified Consultant' },
  { name: 'DigitalMarketer', detail: '9 Full-Stack Marketer Certifications' },
]

const PROGRAMS = [
  {
    name: 'Quick Win Consult',
    line: 'A 60-minute diagnostic to find the hidden bottleneck in your funnel.',
    href: '/quick-win',
  },
  {
    name: 'Growth-As-A-Service',
    line: 'Fractional CMO-level leadership and revenue system execution for 7–9 figure brands.',
    href: '/growth-as-a-service',
  },
  {
    name: 'The Mentor Program',
    line: 'Private 1:1 mentorship for founders serious about building owned distribution. Only 2 spots.',
    href: '/mentor',
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. HERO */}
        <Section bg="paper" width="content" className="pt-24 md:pt-28">
          <div className="max-w-prose">
            <p className="eyebrow mb-6">GTM Strategy · Revenue Systems · AI Leverage</p>
            <h1 className="font-sans font-semibold text-display mb-6 text-ink">
              GTM strategy and revenue growth systems for founder-led brands.
            </h1>
            <p className="text-lead text-ink-muted mb-10">
              Most founders don’t have a traffic problem. They have a bottleneck problem — and AI makes it worse when it’s bolted onto a broken system. I help you fix the system first, then scale it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#programs" variant="primary">See My Work</Button>
              <Button href="#briefings" variant="secondary">Subscribe to Briefings</Button>
            </div>
          </div>
        </Section>

        {/* 2. AUTHORITY STRIP */}
        <section className="bg-paper-grey border-y border-rule py-12">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-h3 font-semibold text-ink mb-6 text-center">Selected Clients &amp; Projects</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-ink-soft">
              {CLIENTS.map((c) => (
                <span key={c} className="whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. POSITIONING */}
        <Section bg="paper" width="prose">
          <p className="eyebrow mb-6">The Work</p>
          <p className="text-h2 font-light text-ink leading-tight">
            I help founder-led brands diagnose where revenue leaks, architect the system that fixes it, and operate it until it compounds.
          </p>
        </Section>

        {/* 4. WHAT I DO */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">AI Growth Systems</p>
            <h2 className="text-h1 font-semibold mb-6">Human for trust. AI for scale.</h2>
            <p className="text-lead text-ink-muted">
              Most founders don’t have a traffic problem. They have a bottleneck problem — and AI makes it worse when it’s bolted onto a broken system. I build revenue systems where AI amplifies trust instead of eroding it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="eyebrow mb-3">01 / Diagnose</div>
              <h3 className="text-h3 font-semibold mb-3">Find the real bottleneck</h3>
              <p className="text-body text-ink-muted">
                Not vanity metrics. Not tactics. The actual structural break between traffic, message, and conversion.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">02 / Architect</div>
              <h3 className="text-h3 font-semibold mb-3">Design the system</h3>
              <p className="text-body text-ink-muted">
                Messaging, funnel, and conversion logic that compound over time. Owned distribution, not rented attention.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">03 / Operate</div>
              <h3 className="text-h3 font-semibold mb-3">Run it with leverage</h3>
              <p className="text-body text-ink-muted">
                AI where it adds leverage. Humans where trust matters. Weekly iteration until growth is predictable.
              </p>
            </div>
          </div>
        </Section>

        {/* 5. PROGRAMS */}
        <Section bg="paper" width="content" id="programs">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">Programs</p>
            <h2 className="text-h1 font-semibold">Three ways to work together.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PROGRAMS.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="group border border-rule bg-paper p-8 hover:border-ink transition-colors flex flex-col"
              >
                <h3 className="text-h3 font-semibold mb-3 text-ink group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="text-body text-ink-muted mb-8 flex-1">{p.line}</p>
                <span className="text-small font-medium text-ink group-hover:text-accent transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* 6. AI INNER CIRCLE */}
        <Section bg="grey" width="content" id="ai-inner-circle">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="w-40 h-40 md:w-48 md:h-48 relative mb-6">
                <Image
                  src="/ai-inner-circle-logo.jpg"
                  alt="AI Inner Circle"
                  fill
                  sizes="192px"
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="eyebrow mb-3">Community</div>
              <div className="text-h3 font-semibold">AI Inner Circle</div>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-h1 font-semibold mb-6 leading-tight">
                Stop being the bottleneck in your own company.
              </h2>
              <p className="text-lead text-ink-muted mb-8">
                The AI Inner Circle is a trust-first system for founder-led brands to scale execution without losing voice or quality. Three pillars. One outcome: you’re no longer the bottleneck.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">Strategic Foundations</div>
                  <p className="text-small text-ink-muted">Clear upstream bottlenecks before they compound.</p>
                </div>
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">Messaging Systems</div>
                  <p className="text-small text-ink-muted">Capture founder insight at scale without flattening it.</p>
                </div>
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">GTM Execution</div>
                  <p className="text-small text-ink-muted">Deploy workflows that create momentum, not busywork.</p>
                </div>
              </div>
              <p className="text-body italic text-ink-muted mb-8">Human for Trust. AI for Scale.</p>
              <Button href="/ai-inner-circle" variant="primary">Learn More</Button>
            </div>
          </div>
        </Section>

        {/* 7. INFLUENTIAL FOUNDER TEASER */}
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

            <Button href="#" external variant="accent">Read Part 1 →</Button>
          </div>
        </Section>

        {/* 8. TESTIMONIALS */}
        <Section bg="grey" width="wide">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">What the Experts Say</p>
            <h2 className="text-h1 font-semibold">Selected endorsements.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-6 leading-relaxed">“{t.quote}”</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-muted">{t.title}</div>
                  {t.org && <div className="text-ink-faint">{t.org}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* 8b. SELECTED WINS */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-12">
            <p className="eyebrow mb-4">Selected Wins</p>
            <h2 className="text-h1 font-semibold text-ink leading-tight">
              A few cool things I&rsquo;ve done.
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Created the control campaign for Grant Cardone&rsquo;s 10X Business Coach
                (<span className="text-ink font-semibold">$1M+ in sales</span>).
              </p>
            </li>
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Converted <span className="text-ink font-semibold">40%+ of prospects</span> to
                buyers for the new SquadUp Summit event
                (<span className="text-ink font-semibold">$6.57M total</span>).
              </p>
            </li>
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Helped grow martech company Front Porch from startup to
                <span className="text-ink font-semibold"> $20M+ annually</span>.
              </p>
            </li>
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Led an online ad network with clients in
                <span className="text-ink font-semibold"> 26 countries</span>.
              </p>
            </li>
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Launched <span className="text-ink font-semibold">more than a dozen businesses</span>{' '}
                in Japan, Korea, Taiwan, China, the UK, and the US.
              </p>
            </li>
            <li className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink-soft leading-relaxed">
                Introduced <span className="text-ink font-semibold">thousands of products and
                services</span> into new markets.
              </p>
            </li>
          </ul>
        </Section>

        {/* 9. CREDENTIALS */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-8 text-center">Credentials</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CREDENTIALS.map((c) => (
              <div key={c.name} className="border border-rule p-6">
                <div className="font-semibold text-ink mb-1">{c.name}</div>
                <div className="text-small text-ink-muted">{c.detail}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 10. ABOUT */}
        <Section bg="grey" width="content" id="about">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] relative w-full max-w-xs">
                <Image
                  src="/headshot-4.png"
                  alt="Rev Vaughn"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">About</p>
              <h2 className="text-h1 font-semibold mb-6 leading-tight">
                Most revenue problems don’t come from a lack of leads or effort. They come from breakdowns inside the funnel. That’s where I work.
              </h2>
              <div className="space-y-5 text-body text-ink-muted">
                <p>
                  I help established businesses fix funnel leaks, sharpen messaging, and close the gap between marketing and sales. My approach combines strategy, psychology, and execution — supported by AI where it adds leverage.
                </p>
                <p>
                  After 25 years building businesses across six countries, I now help founders and leadership teams create revenue systems that convert more consistently and scale more predictably.
                </p>
                <p className="text-ink">A few things I’ve done:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li>• Created the control campaign for Grant Cardone’s 10X Business Coach ($1M+ in sales)</li>
                  <li>• Converted 40%+ of prospects to buyers for the SquadUp Summit event ($6.57M total)</li>
                  <li>• Helped grow martech company FrontPorch from startup to $20M+ annually</li>
                  <li>• Led an online ad network with clients in 26 countries</li>
                  <li>• Launched more than a dozen businesses in Japan, Korea, Taiwan, China, the UK, and the US</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* 11. BRIEFINGS */}
        <Section bg="paper" width="content" id="briefings">
          <div className="max-w-prose">
            <p className="eyebrow mb-6">The Briefings</p>
            <h2 className="text-h1 font-semibold mb-6 leading-tight">
              Short, direct breakdowns for founders building revenue systems.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              No fluff. No recycled LinkedIn takes. Each briefing covers one real bottleneck I’m seeing in the field — how founders diagnose it, how they fix it, and what AI actually does (and doesn’t do) in the solution. Delivered when I have something worth saying.
            </p>
            <EmailForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
