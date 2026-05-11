import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Button from './components/Button'
import EmailForm from './components/EmailForm'
import HeroWithImage from './components/HeroWithImage'

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
      "Listen to his training, and you'll make more money TODAY! I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn't matter what industry you're in — listen to his training, and you'll make more money TODAY. You're amazeballs Rev!",
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
        <HeroWithImage />

        {/* 2. AUTHORITY STRIP */}
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

        {/* 3. SELECTED WINS */}
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

        {/* 4. TESTIMONIALS */}
        <Section bg="grey" width="wide">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">What the Experts Say</p>
            <h2 className="text-h1 font-semibold">Selected endorsements.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-14">
            {TESTIMONIALS.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-6 leading-relaxed">"{t.quote}"</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-ink-muted">{t.title}</div>
                  {t.org && <div className="text-ink-faint">{t.org}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* 5. POSITIONING */}
        <Section bg="paper" width="prose">
          <p className="eyebrow mb-6">The Work</p>
          <p className="text-h2 font-light text-ink leading-tight">
            I help founder-led brands diagnose revenue leaks and architect the systems that fix it
          </p>
        </Section>

        {/* 6. WHAT I DO */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">AI Growth Systems</p>
            <h2 className="text-h1 font-semibold mb-6">Human for trust. AI for scale.</h2>
            <p className="text-lead text-ink-muted">
              Most founders have a bottleneck. Adding AI before fixing it only makes it worse. I fix the system first, then scale it.
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
                Messaging, funnel, and conversion logic that compound over time. Grow Assets, don't chase algorithms.
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
                The AI Inner Circle is a trust-first system for founder-led brands to scale execution without losing voice or quality. Three pillars. One outcome: you're no longer the growth bottleneck.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">Strategic Foundations</div>
                  <p className="text-small text-ink-muted">Remove the upstream bottlenecks — offer, positioning, messaging — before AI scales the wrong thing.</p>
                </div>
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">Messaging Systems</div>
                  <p className="text-small text-ink-muted">Turn founder insight into scalable, trust-building assets without losing your voice.</p>
                </div>
                <div className="border-t-2 border-accent pt-4">
                  <div className="text-small font-semibold mb-2">GTM Execution</div>
                  <p className="text-small text-ink-muted">Remove the downstream bottlenecks. Ship campaigns and workflows with less friction.</p>
                </div>
              </div>
              <p className="text-body italic text-ink-muted mb-8">Human for Trust. AI for Scale.</p>
              <Button href="/ai-inner-circle" variant="primary">Learn More</Button>
            </div>
          </div>
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
                Most revenue problems don't come from a lack of leads or effort. They come from breakdowns inside the funnel. That's where I work.
              </h2>
              <div className="space-y-5 text-body text-ink-muted">
                <p>
                  I help founders fix funnel leaks, sharpen messaging, and close the gap between marketing and sales. My approach combines strategy, psychology, and execution... supported by AI where it adds leverage.
                </p>
                <p>
                  After 25 years building businesses across six countries, I now help founders and leadership teams create revenue systems that convert more consistently and scale more predictably.
                </p>
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
              Each briefing covers one real bottleneck I'm seeing in the field and reveals how founders diagnose it, how they fix it, and what AI actually does (and doesn't do) in the solution. Delivered when I have something worth saying.
            </p>
            <EmailForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
