import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import WaitlistForm from '../components/WaitlistForm'

export const metadata = {
  title: 'AI Inner Circle Membership | Rev Vaughn',
  description:
    'AI Assistants that attract and convert buyers for you. One new Assistant every week, built in your voice. Founder-led B2B membership from Rev Vaughn.',
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

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

// The reader self-selects here, pulled from the AI Priority Map breaking points.
const PAINS = [
  'You reply late. The deal goes cold.',
  'Your best process lives in your head.',
  'You post, and it sounds like everyone else.',
  'Leads come in. Most never hear back.',
  'You know AI should help. You don’t know where to start.',
]

// Onboarding happens in Week 0, before the clock starts. Orchestrator first.
const ONBOARDING = [
  {
    n: '01',
    title: 'Install Your Command Center',
    body: 'Meet Maestro, your AI Chief of Staff, plus memory. Every Assistant you hire plugs into it. You never lose track of a skill again.',
  },
  {
    n: '02',
    title: 'Activate Your AI Brain',
    body: 'Comes pre-loaded. You add your voice, offer, and market. Then every Assistant sounds like you.',
  },
]

const WORKSHOPS = [
  {
    n: '01',
    dept: 'The Offer Desk',
    title: 'The Offer They Can’t Ignore',
    promise: 'Rebuild the offer first. The right buyers feel dumb saying no. Price stops being the objection.',
    skills: [
      ['Sales Council', 'your advisory board'],
      ['Unique Mechanism Builder', 'names what only you do'],
      ['Offer & Pricing Architect', 'rebuilds your packages'],
      ['Objection Tester', 'your toughest prospect'],
    ],
  },
  {
    n: '02',
    dept: 'The Sales Floor',
    title: 'Your First 10 Conversations',
    promise: 'Real buyer conversations on your calendar. No cold email. No ad spend.',
    skills: [
      ['LinkedIn Signal Scraper', 'your scout'],
      ['ICP Match & Prioritizer', 'your list builder'],
      ['Surgical DM Writer', 'your opener'],
      ['AI Slop Killer', 'your editor'],
    ],
  },
  {
    n: '03',
    dept: 'The Media Team',
    title: '30 Minutes to a Month of Content',
    promise: 'Record 30 minutes a week. Show up everywhere in your voice. Get cited by AI search.',
    skills: [
      ['Recording to Content Engine', 'your production studio'],
      ['SEO / GEO Citation Optimizer', 'gets you found and cited'],
      ['LinkedIn Ghostwriter', 'your ghostwriter'],
      ['Content Repurposer', 'your distribution desk'],
    ],
  },
  {
    n: '04',
    dept: 'The Deal Desk',
    title: 'Turn Replies Into Revenue',
    promise: 'Every reply becomes a booked call. Every call gets a proposal, before the buyer cools off.',
    skills: [
      ['Reply Classifier', 'your front desk'],
      ['Follow-up & Reactivation', 'your follow-up rep'],
      ['Discovery Call-Prep', 'your research analyst'],
      ['Proposal & Quote Generator', 'your proposal writer'],
    ],
  },
  {
    n: '05',
    dept: 'The Operations Team',
    title: 'Get Out of the Bottleneck',
    promise: 'Move the routine out of your head. AI Assistants run it. You stop being the ceiling.',
    skills: [
      ['Transcription to SOP', 'your process writer'],
      ['Inbox Triage', 'your gatekeeper'],
      ['Decision & Delegation Memo', 'your delegation officer'],
      ['Team Knowledge Base', 'your company librarian'],
    ],
  },
  {
    n: '06',
    dept: 'Client Success',
    title: 'Run Like a Full Team',
    promise: 'Spot churn before it hits. Get paid on time. Deliver like you have a full ops team.',
    skills: [
      ['Client Health Monitor', 'your account manager'],
      ['Client Reporting Dashboard', 'your reporting analyst'],
      ['Invoice & Payment Chaser', 'your collections desk'],
      ['GTM Teardown & Rebuild', 'your strategy consultant'],
    ],
  },
]

const ORG_CHART = `YOU
 │
 MAESTRO · your Chief of Staff
 │
 ├── 1 · OFFER DESK
 │      Sales Council · Unique Mechanism Builder
 │      Offer & Pricing Architect · Objection Tester
 │
 ├── 2 · SALES FLOOR
 │      LinkedIn Signal Scraper · ICP Match & Prioritizer
 │      Surgical DM Writer · AI Slop Killer
 │
 ├── 3 · MEDIA TEAM
 │      Recording to Content · SEO/GEO Optimizer
 │      LinkedIn Ghostwriter · Content Repurposer
 │
 ├── 4 · DEAL DESK
 │      Reply Classifier · Follow-up & Reactivation
 │      Discovery Call-Prep · Proposal & Quote Generator
 │
 ├── 5 · OPERATIONS
 │      Transcription to SOP · Inbox Triage
 │      Decision & Delegation Memo · Team Knowledge Base
 │
 └── 6 · CLIENT SUCCESS
        Client Health Monitor · Client Reporting Dashboard
        Invoice & Payment Chaser · GTM Teardown & Rebuild`

const INCLUDED = [
  ['One new AI Assistant every week', '24 over six months. Each one fixes a real problem. It drops Tuesday. You use it that day.'],
  ['1–2 live workshops every month', 'The month’s big move, walked through step by step. Live or pre-recorded.'],
  ['Friday Q&A with Rev', 'Bring what you’re stuck on. Get unstuck before the weekend.'],
  ['Daily access inside the community', 'A direct line to Rev and the room, every day.'],
  ['Maestro, your Command Center, set up with you', 'Your AI Chief of Staff and the memory that keep every Assistant stacking up.'],
  ['Templates and prompts you keep', 'They live in your own folder. Leave anytime and the system stays yours.'],
]

const WINS = [
  { result: '144% more booked calls', detail: 'CPL below goal, 30% conversion across the Cardone Ventures portfolio.' },
  { result: '$6.57M total', detail: 'Converted 40%+ of prospects to buyers for the new SquadUp Summit event.' },
  { result: 'Sold out in 48 hours', detail: 'First launch sold out, driven by email and social for HRE Beauty.' },
  { result: '$1M+ in sales', detail: "Built the control campaign for Grant Cardone's 10X Business Coach." },
]

const TESTIMONIALS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches and hired him for my 7-figure marketing agency. If he's available, take it.",
    name: 'Garen Mazon',
    title: 'Co-Founder, SpaSurge',
  },
  {
    quote:
      'Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands.',
    name: 'Joe Bradley',
    title: 'Director, Marketing Partnerships, Cardone Ventures',
  },
]

const FAQ = [
  ['Do I need to be technical?', 'No. You answer a few dropdown questions and the Assistant does the work. If you can send an email, you can run this.'],
  ['Which AI do I need?', 'Claude. That’s the only subscription required. The Assistants are built to run there.'],
  ['How much time per week?', 'Plan on about an hour to install and use the week’s Assistant. That hour buys back far more.'],
  ['Will this work for my B2B service?', 'Yes. It fits founder-led B2B service businesses: coaches, consultants, agencies, done-for-you services.'],
  ['Anything cost extra beyond the $149?', 'Two small, optional things for the outreach month: a paid LinkedIn plan, and a few dollars of pay-as-you-go Apify. No expensive CRM, no cold-email tools.'],
  ['Do I keep the Assistants if I cancel?', 'Yes. They live in your own folder on your own machine. What you build is yours to keep.'],
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function AIInnerCirclePage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">AI Inner Circle Membership</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
                AI Assistants that attract and convert buyers for you.
              </h1>
              <p className="text-lead text-ink-muted mb-4">
                You get the actual skills. One new Assistant drops every week. Each one does real work in your voice.
              </p>
              <p className="text-body text-ink-soft mb-8">
                The difference is simple. <span className="text-ink font-medium">The AI knows you now.</span>
              </p>
              <WaitlistForm buttonLabel="Join the Waitlist" />
              <p className="text-small text-ink-muted mt-4">
                Founding cohort. Enrollment closes <span className="text-ink font-medium">August 1</span>. Founding price is $149 a month. Regular price is $199.{' '}
                <Link href="/map" className="text-accent underline underline-offset-2 hover:no-underline">
                  Not sure yet? Take the 5-minute assessment &rarr;
                </Link>
              </p>
            </div>
            <div className="hidden md:block pt-4">
              <div className="relative aspect-[4/5] w-full border border-rule">
                <Image
                  src="/Rev-Vaughn-800.jpg"
                  alt="Rev Vaughn"
                  fill
                  sizes="320px"
                  className="object-cover grayscale"
                  priority
                />
              </div>
            </div>
          </div>
        </Section>

        {/* Clients strip */}
        <section className="bg-paper-grey border-y border-rule py-12">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-h3 font-semibold text-ink mb-6 text-center">Clients &amp; Campaigns</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-ink-soft">
              {CLIENTS.map((c) => (
                <span key={c} className="whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QUALIFIER */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Is this you?</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                You’re the bottleneck. Everything waits on you.
              </h2>
            </div>
            <ul className="space-y-4 text-body text-ink-soft">
              {PAINS.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-accent mt-1">–</span>{p}
                </li>
              ))}
              <li className="pt-2 text-ink font-medium">Sound familiar? Keep reading.</li>
            </ul>
          </div>
        </Section>

        {/* 4. STAKES */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">The real cost</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            You built a job, not an asset.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose">
            The business runs on you. You step away and it stops. Deals slip when you reply late. Your brand stays
            quiet because you have no time to show up. Good processes never leave your head, so nothing scales past
            you. While you wait, competitors are building the systems that do this work for them.
          </p>
        </Section>

        {/* 5. WHY THE USUAL FIXES FAIL */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">You’ve tried the usual fixes</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            They all break the same way.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">Generic ChatGPT</p>
              <p>You type the same long prompt every time. Then you rewrite what comes back. Every session starts from zero.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Courses</p>
              <p>You finish with notes and a certificate. The work still isn’t built.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Hiring or agencies</p>
              <p>Expensive and slow. Now you manage people instead of doing the work.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">Enterprise stacks (Apollo, HubSpot)</p>
              <p>Big monthly bills. Cold email that burns your domain.</p>
            </div>
          </div>
        </Section>

        {/* 6. THE BIG IDEA */}
        <Section bg="greyDark" width="content">
          <div className="eyebrow mb-4">The idea</div>
          <h2 className="text-display font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Hire AI Assistants that already know you.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Start with the problem. Add the Assistant that solves it. One a week. Each one plugs into the same
            Command Center.
          </p>
          <p className="text-lead text-ink-muted max-w-prose">
            Six months in, they work together. They attract buyers, convert them, deliver, and keep them. The system
            runs without living in your head.
          </p>
        </Section>

        {/* 7. HOW IT WORKS: before/after */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">How it works</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10 max-w-prose">
            What changes when the AI knows you.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border border-rule bg-paper-grey p-6">
              <p className="eyebrow mb-3">Before</p>
              <p className="text-body text-ink-soft mb-3">You type some version of this, every time:</p>
              <p className="text-body text-ink-muted italic">
                “I’m a B2B coach. My clients are founders. Keep it short. No bullet points. Casual, not formal.
                Make it sound like me, not a robot… yada yada.”
              </p>
              <p className="text-body text-ink-soft mt-3">Then you rewrite what comes back. Again and again.</p>
            </div>
            <div className="border-2 border-accent bg-paper p-6">
              <p className="eyebrow mb-3">After</p>
              <p className="text-body text-ink-soft mb-3">You type:</p>
              <p className="text-h3 font-semibold text-ink">/site-content</p>
              <p className="text-body text-ink-soft mt-3">
                You answer a few dropdown questions. The draft comes back in your voice, built for your market. You
                tweak a line or two. You post.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-body text-ink-soft">
            <div>
              <p className="text-ink font-medium mb-1">1. Command Center first</p>
              <p>Your Assistants learn your voice, offer, and market once, up front.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">2. One Assistant every Tuesday</p>
              <p>A new skill drops each week. You use it that same day.</p>
            </div>
            <div>
              <p className="text-ink font-medium mb-1">3. It stacks up</p>
              <p>Each one plugs into the Center. Nothing gets forgotten.</p>
            </div>
          </div>
        </Section>

        {/* 8. THE 6-MONTH JOURNEY */}
        <Section bg="grey" width="wide">
          <div className="max-w-content mx-auto">
            <div className="eyebrow mb-4">The path</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-3">
              A quick win in week one. A full system by month six.
            </h2>
            <p className="text-lead text-ink-muted mb-12 max-w-prose">
              First you set up your Command Center. Then six months, each with one workshop and the Assistants that make it real.
            </p>

            {/* Onboarding */}
            <div className="mb-12">
              <p className="text-small text-ink-muted uppercase tracking-wide mb-4">Start here · Week 0 onboarding</p>
              <div className="grid md:grid-cols-2 gap-6">
                {ONBOARDING.map((o) => (
                  <div key={o.n} className="border border-rule bg-paper p-6">
                    <div className="text-small text-accent font-semibold mb-2">{o.n}</div>
                    <h3 className="text-h3 font-semibold text-ink mb-2">{o.title}</h3>
                    <p className="text-body text-ink-soft">{o.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly workshops */}
            <p className="text-small text-ink-muted uppercase tracking-wide mb-4">The 6-month hiring plan</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKSHOPS.map((w) => (
                <div key={w.n} className="border border-rule bg-paper p-6 flex flex-col">
                  <div className="text-small text-ink-muted mb-1">Month {w.n} · {w.dept}</div>
                  <h3 className="text-h3 font-semibold text-ink mb-2">{w.title}</h3>
                  <p className="text-body text-ink-soft flex-1">{w.promise}</p>
                  <ul className="mt-4 pt-4 border-t border-rule space-y-1">
                    {w.skills.map(([name, gloss]) => (
                      <li key={name} className="text-small text-ink-muted">
                        <span className="text-ink">{name}</span> · {gloss}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Org chart payoff */}
            <div className="mt-14">
              <p className="text-small text-ink-muted uppercase tracking-wide mb-4">Your org chart by month six</p>
              <div className="overflow-x-auto border border-rule bg-paper p-6">
                <pre className="text-small text-ink-soft leading-relaxed whitespace-pre font-mono">{ORG_CHART}</pre>
              </div>
              <p className="text-body text-ink-muted mt-4 max-w-prose">
                Twenty-four Assistants. Six departments. All reporting to Maestro. Cancel anytime and the team stays yours.
              </p>
            </div>
          </div>
        </Section>

        {/* 9. BEFORE / AFTER DREAM OUTCOME */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Where this goes</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            From the brain trap to an asset that runs.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-rule bg-paper-grey p-8">
              <p className="eyebrow mb-4">Today</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>Generic AI output you fix by hand.</li>
                <li>Leads slip through the cracks.</li>
                <li>You cap everything the business does.</li>
                <li>The work stops when you step away.</li>
              </ul>
            </div>
            <div className="border-2 border-accent bg-paper p-8">
              <p className="eyebrow mb-4">Six months in</p>
              <ul className="space-y-3 text-body text-ink-soft">
                <li>Posts that read like your mentor wrote them.</li>
                <li>Every lead gets a fast, personal reply.</li>
                <li>The routine runs on Assistants.</li>
                <li>An asset you could sell or step away from.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 10. WHAT'S INCLUDED */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">What you get</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            Everything in the membership.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {INCLUDED.map(([title, body]) => (
              <div key={title} className="flex gap-4">
                <span className="text-accent text-h3 leading-none mt-1">–</span>
                <div>
                  <p className="text-body font-semibold text-ink mb-1">{title}</p>
                  <p className="text-body text-ink-soft">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 11. PROOF */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Proof</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            These numbers came from these systems.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {WINS.map((w) => (
              <div key={w.result} className="border border-rule bg-paper p-5">
                <div className="text-h3 font-semibold text-ink mb-2">{w.result}</div>
                <p className="text-small text-ink-soft">{w.detail}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-rule bg-paper-grey p-6">
                <p className="text-body text-ink mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-small font-semibold text-ink">{t.name}</p>
                <p className="text-small text-ink-muted">{t.title}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 12. ABOUT REV */}
        <Section bg="greyDark" width="content">
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="hidden md:block">
              <div className="relative aspect-square w-full border border-rule">
                <Image src="/Rev-Vaughn-800.jpg" alt="Rev Vaughn" fill sizes="280px" className="object-cover grayscale" />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="eyebrow mb-4">Who’s behind it</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink mb-5">
                I build these systems for a living. Now I’m handing you mine.
              </h2>
              <p className="text-body text-ink-soft mb-4">
                I’m Rev Vaughn, a GTM strategist and revenue systems architect. I built the control campaign for
                Grant Cardone’s 10X Business Coach, launches that sold out in 48 hours, and pipelines that lifted
                booked calls 144%.
              </p>
              <p className="text-body text-ink-soft">
                You get the exact Assistants I use every day, packaged so a busy founder can run them without a tech team.
              </p>
            </div>
          </div>
        </Section>

        {/* 13. PRICING */}
        <Section bg="paper" width="content">
          <div className="text-center mb-10">
            <div className="eyebrow mb-4">Founding price</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Less than one lost deal. Less than one agency invoice.
            </h2>
          </div>
          <div className="max-w-md mx-auto border-2 border-accent bg-paper p-8">
            <div className="eyebrow mb-4">AI Inner Circle</div>
            <div className="text-display font-semibold text-ink mb-1">$149</div>
            <div className="text-small text-ink-muted mb-8">per month · founding price (regular $199)</div>
            <ul className="space-y-3 text-body text-ink-soft mb-8">
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>A new AI Assistant every week</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>1–2 live workshops per month</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Friday Q&amp;A with Rev</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Daily access inside the community</li>
              <li className="flex gap-3"><span className="text-accent mt-1">–</span>Your Command Center, set up with you</li>
            </ul>
            <WaitlistForm buttonLabel="Join the Waitlist" />
            <p className="text-small text-ink-muted mt-4">
              Enrollment closes August 1. A 1:1 coaching tier opens soon at $999 a month.
            </p>
          </div>
        </Section>

        {/* 14. RISK REVERSAL */}
        <Section bg="grey" width="content">
          <div className="eyebrow mb-4">No games</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6 max-w-prose">
            Cancel anytime. Keep what you built.
          </h2>
          <p className="text-lead text-ink-muted max-w-prose mb-4">
            Your Assistants live in your own folder, on your own machine. Walk away whenever you want. The system stays yours.
          </p>
          <p className="text-body text-ink-soft max-w-prose">
            Straight talk on costs. You need a Claude subscription. For the outreach month, add a paid LinkedIn plan
            and a few dollars of Apify. No expensive CRM, no cold-email tools.
          </p>
        </Section>

        {/* 15. FAQ */}
        <Section bg="paper" width="content">
          <div className="eyebrow mb-4">Questions</div>
          <h2 className="text-h1 font-semibold tracking-tight text-ink mb-10">Before you join.</h2>
          <div className="space-y-8 max-w-prose">
            {FAQ.map(([q, a]) => (
              <div key={q}>
                <p className="text-body font-semibold text-ink mb-2">{q}</p>
                <p className="text-body text-ink-soft">{a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 16. FINAL CTA */}
        <Section bg="greyDark" width="content">
          <div className="text-center">
            <h2 className="text-display font-semibold tracking-tight text-ink mb-6 max-w-prose mx-auto">
              The AI knows you now. Put it to work.
            </h2>
            <p className="text-lead text-ink-muted mb-8 max-w-prose mx-auto">
              Join the founding cohort before enrollment closes August 1. Lock in $149 a month.
            </p>
            <div className="flex justify-center mb-6">
              <WaitlistForm buttonLabel="Join the Waitlist" />
            </div>
            <p className="text-small text-ink-muted">
              Still deciding?{' '}
              <Link href="/map" className="text-accent underline underline-offset-2 hover:no-underline">
                Take the 5-minute assessment &rarr;
              </Link>
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
