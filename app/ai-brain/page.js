import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import WaitlistForm from '../components/WaitlistForm'

export const metadata = {
  title: 'AI Brain Workshop — Rev Vaughn',
  description:
    'Build an AI that knows your business, your voice, and how you think — in one on-demand workshop. For founder-led brand owners who use AI every day.',
  openGraph: {
    title: 'AI Brain Workshop — Rev Vaughn',
    description:
      'Set up a version of Claude that stops handing you generic answers and starts working like a partner who has known you for years.',
    url: 'https://revvaughn.com/ai-brain',
    siteName: 'Rev Vaughn',
    type: 'website',
  },
}

const DELIVERABLES = [
  {
    n: '01',
    title: 'An AI that knows you everywhere.',
    body:
      'A short, one-time setup that loads into every conversation you have. The AI knows your role, how you work, and how you like to communicate. Every chat, from now on.',
  },
  {
    n: '02',
    title: 'Your AI Brain.',
    body:
      'A folder on your computer that holds the good stuff: what your business is, what you know, how you decide, and how you write. The AI reads it on its own and answers from it. Guided tools hand you a short form — already partly filled in — and write the files for you. Point them at an existing doc or website and they pull from it. No blank page.',
  },
  {
    n: '03',
    title: 'Your first Custom Command.',
    body:
      'Turn a task you repeat — repurpose a post in your voice, prep for a sales call, review copy against your standards — and turn it into a shortcut slash command like /repurpose-post. Type it, and Claude runs the whole task your way, no re-explaining. Most people who use AI never build this. You will.',
  },
]

const BEFORE_AFTER = [
  {
    before:
      '“I’m a B2B coach, my clients are founders, I sell a 12-week program, keep it short, casual tone, no bullet points…” typed out one more time. Make it sound like me and not like a robot.',
    after: '“Draft the follow-up.” Done. In your voice.',
  },
  {
    before: 'Advice that reads like a generic blog post.',
    after: 'A recommendation that reads like your business mentor wrote it.',
  },
  {
    before: 'You bend to fit the tool.',
    after: 'The tool is built around you.',
  },
]

const REQUIREMENTS = [
  'A Claude Pro ($20/month) or Max account',
  'The Claude desktop app (free to download)',
  'About 2–3 hours — split it however you like; your work saves as you go',
  '3–5 good written samples in your own voice (an About or sales page, a few posts or emails — written by you, not AI)',
]

const INCLUDES = [
  'The full on-demand workshop, yours to revisit anytime',
  'A written, step-by-step guide you keep',
  'The guided tools that build your AI Brain for you',
  'Live Q&A on Friday',
  'A setup that’s yours forever, and gets sharper every time you use it',
]

const FAQS = [
  {
    q: 'Do I need to be technical?',
    a: 'No. If you can type a message and click a button, you can do this. The tools do the building.',
  },
  {
    q: 'I use ChatGPT, not Claude. Can I still join?',
    a: 'Yes. This runs on Claude, and getting you set up is part of the session. If you’ve used ChatGPT, you already know enough to follow along. A lot of people come over from ChatGPT for exactly this.',
  },
  {
    q: 'How long does it take?',
    a: 'Plan for about 2–3 hours. It’s on-demand, so do it in one sitting or split it across a few — your work saves as you go, and you pick up right where you left off.',
  },
  {
    q: 'What do I need before we start?',
    a: 'A Claude Pro ($20/month) or Max account, the Claude desktop app (free to download), and three to five things you’ve written in your own voice — not AI-generated. We send a short checklist before the workshop.',
  },
  {
    q: 'Is it live or recorded?',
    a: 'The workshop is on-demand — pre-recorded, so every demo is clean and you go at your own pace. The Q&A is live, so you get the best of both: a polished build you can follow anytime, plus real answers to your questions.',
  },
  {
    q: 'Is my information private?',
    a: 'The files you build live on your own computer, in your own folder. You decide what goes in them.',
  },
  {
    q: 'Will this work for my kind of business?',
    a: 'If your business runs on your expertise, judgment, and voice, yes. The whole point is that it’s built around you, not a template.',
  },
  {
    q: 'What happens after the workshop?',
    a: 'You keep everything you built. Afterward you’re invited to join AI Inner Circle, where we build on it — connecting your AI Brain to your tools and calendar so it can start doing more of the work for you.',
  },
]

export default function AIBrainPage() {
  return (
    <>
      <Header />
      <main>

        {/* 1. HERO */}
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="eyebrow mb-6">For founder-led brand owners who use AI every day</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
                Build an AI That Knows You, Your Business, and How You Think
              </h1>
              <p className="text-lead text-ink-muted mb-10">
                In one on-demand workshop, you’ll set up a version of Claude that stops handing you
                generic answers and starts working like a partner who’s known you for years. No tech
                skills required.
              </p>
              <WaitlistForm buttonLabel="Join the Waitlist" />
              <p className="text-small text-ink-faint mt-3">
                Founder’s pricing for the first cohort. No payment now — we’ll email you when
                enrollment opens.
              </p>
            </div>
            <div className="hidden md:flex items-start justify-center">
              <Image
                src="/Rev-Vaughn-800.jpg"
                alt="Rev Vaughn"
                width={400}
                height={500}
                className="w-full h-auto max-w-sm"
              />
            </div>
          </div>
        </Section>

        {/* 2. PICTURE THIS */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Picture this</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                An answer that sounds like it came from a partner who’s been in the room with you for months.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                You open AI. It already knows your business. Your offer. Your clients. The way you
                write. The way you make decisions.
              </p>
              <p>
                You ask a question. You get an answer built around you. No re-explaining. No “let me
                give you some context first.” No safe, generic advice that could apply to anyone.
              </p>
              <p>That’s what you’ll build in this session.</p>
            </div>
          </div>
        </Section>

        {/* 3. WHY IT FEELS GENERIC (PROBLEM) */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">The hidden tax</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                Why your AI feels generic right now.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Every time you open a new chat, the AI starts over. It doesn’t know you — not your
                business, not your clients, not your voice.
              </p>
              <p>
                So you do what everyone does. You explain yourself. Again. You describe your audience.
                You spell out what you mean by “short.” You paste in background.
              </p>
              <p>
                You’re paying a hidden tax nobody told you about: the cost of starting from zero,
                every single time. A few wasted exchanges per chat. Ten chats a day. Watered-down
                output at the end of all of it.
              </p>
            </div>
          </div>
        </Section>

        {/* 4. WHAT CHANGES (TRANSFORMATION) */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">What changes</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                When AI actually knows you, the output changes completely.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Ask how to price a new offer. Instead of a generic framework, you get a recommendation
                built on your market, your positioning, and how you’ve made calls like this before.
              </p>
              <p>
                Ask it to write an email. Instead of sounding like every other person on the internet
                using AI, it sounds like you wrote it.
              </p>
              <p>
                The founders getting the most out of AI aren’t the ones with the clever prompts. That
                ship has sailed. They’re the ones who spent a little time telling AI who they are.
              </p>
            </div>
          </div>
        </Section>

        {/* 5. WHAT YOU WALK OUT WITH (DELIVERABLES) */}
        <Section bg="paper" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">What you’ll walk out with</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Three things. All working before you close your laptop.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {DELIVERABLES.map((d) => (
              <div key={d.n} className="border-t border-ink pt-6">
                <div className="text-small font-medium text-accent mb-3">{d.n}</div>
                <h3 className="text-h3 font-semibold text-ink mb-3">{d.title}</h3>
                <p className="text-body text-ink-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. BEFORE AND AFTER */}
        <Section bg="greyDark" width="content">
          <div className="max-w-prose mb-10">
            <div className="eyebrow mb-4">Before and after</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              You stop bending to fit the tool.
            </h2>
          </div>
          <div className="border-t border-ink">
            {/* Column headers (desktop only) */}
            <div className="hidden md:grid grid-cols-2 gap-8 py-4 border-b border-rule">
              <div className="eyebrow text-ink-faint">Before</div>
              <div className="eyebrow flex gap-3">
                <span className="opacity-0 shrink-0">→</span>After
              </div>
            </div>
            {BEFORE_AFTER.map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-x-8 gap-y-3 py-6 border-b border-rule items-baseline">
                <div>
                  <div className="eyebrow text-ink-faint mb-2 md:hidden">Before</div>
                  <p className="text-body text-ink-muted leading-snug">{row.before}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent font-semibold shrink-0">→</span>
                  <div>
                    <div className="eyebrow mb-2 md:hidden">After</div>
                    <p className="text-body text-ink font-medium leading-snug">{row.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 7. HOW IT WORKS */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">How the workshop works</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                You watch it happen first. Then you do it yourself.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                It’s on-demand — pre-recorded, so every AI demo is clean and vetted, not a live
                screen-share that hangs at the worst moment. You go at your own pace, on your own
                schedule, and pause whenever you need.
              </p>
              <p>
                We go step by step. The guided tools do the heavy lifting — they pre-fill from what
                Claude already knows about you, and you can point them at things you’ve already
                written. By the end, your AI Brain is live, and you’ve tested it on your own real work.
              </p>
              <p>The Q&amp;A is a live call, so you get real answers without the risk of a buggy live build.</p>
            </div>
          </div>
        </Section>

        {/* 8. WHAT YOU NEED */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-12">
            <div className="eyebrow mb-4">What you need</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              If you can fill in a short form, you can do this.
            </h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="border-l-2 border-accent pl-6 text-body text-ink-soft leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
        </Section>

        {/* 9. WHO IT'S FOR */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">Who this is for</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink">
                For founders who are the face and voice of their business.
              </h2>
            </div>
            <div className="space-y-5 text-body text-ink-soft">
              <p>
                Coaches, consultants, agency owners, course creators, service providers — people whose
                business runs on their own expertise, judgment, and voice. It’s especially for you if
                you’re new to Claude, or you’ve been limping along with ChatGPT and want a setup that
                actually remembers you.
              </p>
              <p>
                It’s not for you if you want a magic button that asks nothing of you. The AI gets sharp
                because you teach it who you are — but that’s lighter than it sounds. You bring the raw
                material, or just point it at what you’ve already written, and the tools do the
                structuring.
              </p>
            </div>
          </div>
        </Section>

        {/* 10. WHO'S TEACHING (ABOUT) */}
        <Section bg="grey" width="content">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[4/5] relative w-full max-w-xs">
                <Image
                  src="/Rev-Vaughn-800.jpg"
                  alt="Rev Vaughn"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="eyebrow mb-6">Who’s teaching this</p>
              <h2 className="text-h1 font-semibold mb-6 leading-tight">
                This isn’t theory. It’s the system I run my business on every day.
              </h2>
              <div className="space-y-5 text-body text-ink-muted">
                <p>
                  I’m Rev Vaughn. I build revenue systems for founder-led brands, and I rebuilt my own
                  consulting practice around these exact AI setups. I’ll walk you through building yours.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 11. WHAT YOU GET + FIRST CTA */}
        <Section bg="paper" width="content">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="eyebrow mb-4">What you get</div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
                A setup that’s yours forever.
              </h2>
              <ul className="space-y-3 text-body text-ink-soft">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent mt-1">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-rule bg-paper p-8 flex flex-col">
              <div className="eyebrow mb-4">AI Brain Workshop</div>
              <h3 className="text-h2 font-semibold text-ink mb-2">Founders’ Cohort</h3>
              <div className="text-display font-semibold text-ink mb-1">$97</div>
              <div className="text-small text-ink-muted mb-8">one-time — going up to $199 soon</div>
              <p className="text-body text-ink-soft mb-8 flex-1">
                Founders’ cohort pricing is early-access and based on current capacity. This price is
                going up to $199 soon — if you leave and come back later, it will likely be higher.
                Claude Pro ($20/month) is a separate prerequisite, not part of this price.
              </p>
              <WaitlistForm buttonLabel="Join the Waitlist" />
              <p className="text-small text-ink-faint mt-3">
                Free to join. No payment now — we’ll email you the moment enrollment opens.
              </p>
            </div>
          </div>
        </Section>

        {/* 12. FAQ */}
        <Section bg="grey" width="content">
          <div className="max-w-prose mb-14">
            <div className="eyebrow mb-4">Questions people ask</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink">
              Straight answers.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-ink pt-6">
                <h3 className="text-h3 font-semibold text-ink mb-3">{f.q}</h3>
                <p className="text-body text-ink-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 13. CLOSING CTA */}
        <Section bg="paper" width="content">
          <div className="max-w-prose">
            <div className="eyebrow mb-4">One last thing</div>
            <h2 className="text-h1 font-semibold tracking-tight text-ink mb-6">
              Your AI is generic because it doesn’t know you yet.
            </h2>
            <p className="text-lead text-ink-muted mb-10">
              In a few quick hours, you can fix that for good. Teach it who you are — once — and it
              gets sharper every time you use it.
            </p>
            <WaitlistForm buttonLabel="Join the Waitlist" />
            <p className="text-small text-ink-faint mt-3">
              On-demand and self-paced. Live Q&amp;A on Friday. Join the waitlist now &mdash; no
              payment until enrollment opens.
            </p>
          </div>
        </Section>

      </main>
      <Footer />
    </>
  )
}
