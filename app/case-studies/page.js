import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Case Studies | Rev Vaughn',
  description:
    'Real campaigns I built for founder-led brands. The problem, the system, and what it produced.',
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
  'REVIVX',
]

const ENDORSEMENTS = [
  {
    quote:
      "When I think of campaigns that convert, I think of Rev. PERIOD. I've brought Rev in on million-dollar campaign launches, hired him for my 7-figure marketing agency, and seen firsthand what happens when real, A-level copy hits the page. Getting time on Rev's calendar is rare. If he's available, take it. Most people won't get the chance. If you do, don't walk... run.",
    name: 'Garen Mazon',
    title: 'Co-Founder',
    org: 'SpaSurge',
  },
  {
    quote:
      'Rev Vaughn is that ultra-rare copywriter who practically cannot fail. That’s because he has not only mastered the craft, but he also deeply understands people and what drives their desires. Although I could have hired almost anyone, I was proud to call Rev my personal copywriter inside Copy Chief.',
    name: 'Kevin Rogers',
    title: 'Founder',
    org: 'Copy Chief',
  },
  {
    quote:
      "Listen to his training, and you'll make more money TODAY! I learned more about guiding people through the sales process than I learned from thousands of dollars in paid sales courses. It doesn't matter what industry you're in... listen to his training, and you'll make more money TODAY.",
    name: 'Jimmy Parent',
    title: 'Persuasion Scientist',
    org: '',
  },
]

export default function CaseStudies() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-6">Case Studies</p>
          <h1 className="text-display font-semibold leading-tight mb-6">
            The work behind the numbers.
          </h1>
          <p className="text-body text-ink-muted max-w-prose mb-10">
            Real campaigns I built for founder-led brands. The problem, the system, and what it produced.
          </p>
          <Button href="https://revvaughn.com/quick-win/" external variant="primary">
            Book a Quick Win Consult &rarr;
          </Button>
        </Section>

        {/* SELECTED WIN / 01 */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-6">Selected Win / 01</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            $6.57M from a neglected list of 5,259 people.
          </h2>
          <div className="mb-12">
            <Image
              src="/SquadUp-Summit.jpg"
              alt="SquadUp Summit live event"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>It was December 2023. A new client called with an urgent ask.</p>
                <p>Fill seats for a live event nobody had heard of.</p>
                <p>There was no pre-launch marketing plan.</p>
                <p>Just one neglected list of 5,259 cold prospects. Many had forgotten why they joined.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Big Idea</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>Most campaigns like this fail for the same reason.</p>
                <p>Everyone looks downstream. More leads. More ads. New funnels. More content.</p>
                <p>The real problem is usually upstream, and it hides. Unclear positioning. Message-market mismatch. The wrong growth lever.</p>
                <p>Get those wrong, and more traffic just makes noise.</p>
                <p>So I started with the fundamentals.</p>
                <p>Buyer psychology to find what actually moved this audience. Story frameworks to build connection fast. Objection handling to turn every doubt into a reason to buy.</p>
                <p>Then one Big Idea to tie it all together.</p>
                <p>The result was a 172-email campaign. 58,053 words, built in ActiveCampaign.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Numbers</h3>
              <ul className="space-y-2 text-body text-ink">
                <li>43.2% open rate, double the standard</li>
                <li>1,920 sales from 5,259 prospects</li>
                <li>40% list conversion</li>
                <li>$2.3M in base ticket sales</li>
                <li>$4.27M in onsite upsells</li>
                <li>$6.57M total in under 120 days</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              If growth feels harder than it should, that upstream break is usually why. A Quick Win Consult finds it fast.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 02 */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Selected Win / 02</p>
          <h2 className="text-h1 font-semibold leading-tight mb-4">
            No lead left behind.
          </h2>
          <p className="text-body text-ink-muted leading-relaxed mb-10">
            A full lifecycle system that caught every lead REVIVX was paying to lose.
          </p>
          <div className="mb-12">
            <Image
              src="/REVIVX.jpg"
              alt="REVIVX lifecycle system"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Concept</h3>
              <p className="text-body text-ink leading-relaxed">
                REVIVX was spending to generate leads, then losing them. Some never got a follow-up. Some booked a call and never showed. Some went cold and got forgotten.
              </p>
              <p className="text-body text-ink leading-relaxed mt-4">
                So we built a system with one rule. No lead left behind.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The System</h3>
              <p className="text-body text-ink leading-relaxed mb-4">Every lead hit a path built to catch it.</p>
              <ul className="space-y-2 text-body text-ink">
                <li>Front-end ads to a lead form</li>
                <li>Landing page with a warm-up video</li>
                <li>Routing logic to the right consultant</li>
                <li>Instant SMS from a dedicated consultant</li>
                <li>A parallel email series from that consultant</li>
                <li>Book-a-call campaign</li>
                <li>Show-up campaign before each call</li>
                <li>Rebook campaign for no-shows</li>
                <li>A win-back path for non-responders</li>
                <li>Long-term nurture for non-buyers</li>
                <li>Objection-handling sequence</li>
                <li>Reactivation campaign for cold leads</li>
              </ul>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Numbers</h3>
              <p className="text-body text-ink leading-relaxed mb-4">The leaks closed. Here is what moved.</p>
              <ul className="space-y-2 text-body text-ink">
                <li>Cost Per Lead (CPL) came in below goal</li>
                <li>Booked calls up 144%</li>
                <li>30% call conversion rate</li>
                <li>37% lower Customer Acquisition Cost (CAC)</li>
                <li>280+ booked calls per month</li>
              </ul>
            </div>
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink mb-6 leading-relaxed">
                &ldquo;Reduced CPL below goal. Booked calls rose 144% with 30% conversion rates. Rev&rsquo;s work set a new standard for how we approach campaign structure, messaging, and analytics across multiple brands. I confidently recommend Rev for any role requiring strategic marketing leadership, copy expertise, and proven results.&rdquo;
              </p>
              <footer className="text-small">
                <div className="font-semibold text-ink">Joe Bradley</div>
                <div className="text-ink-muted">Director, Marketing Partnerships</div>
                <div className="text-ink-faint">Cardone Ventures</div>
              </footer>
            </blockquote>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Most brands lose more leads after the click than before it. A Quick Win Consult finds where yours are slipping.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 03 */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-6">Selected Win / 03</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            How signal logic turned quiz traffic into high-ticket calls.
          </h2>
          <div className="mb-12">
            <Image
              src="/10X-Health.jpg"
              alt="10X Health quiz funnel"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Break</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>10X Health had no shortage of quiz traffic. The problem was what happened next.</p>
                <p>Leads came in. Then the path from quiz to consultation leaked. Intent showed up early and went cold. The customer relationship management (CRM) system was collecting answers it never acted on.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Build</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>Here&rsquo;s the question that mattered. When does a quiz answer become a buying signal?</p>
                <p>I restructured the quiz-to-consultation flow around that one idea. Then I rebuilt the backend CRM signal logic so the right answers triggered the right next step.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>More leads crossed into Marketing Qualified Leads (MQLs) and Sales Qualified Leads (SQLs). CAC came down while volume held.</p>
                <p>The brand stopped paying to generate intent it was already wasting.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Most funnels collect signals they never act on. A Quick Win Consult shows you which ones are costing you calls.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 04 */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Selected Win / 04</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            Sold out in 48 hours.
          </h2>
          <div className="mb-12">
            <Image
              src="/Heather-Rae-Essentials.jpg"
              alt="Heather Rae Essentials launch"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>Heather Rae Essentials was launching its new business and its flagship product. New brand. New audience. One shot at a strong open.</p>
                <p>A pre-launch campaign built desire before we opened the cart. Sales were driven primarily by email, with support from social channels.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <p className="text-body text-ink leading-relaxed">
                The entire first run sold out in under 48 hours.
              </p>
            </div>
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink mb-6 leading-relaxed">
                &ldquo;Our first launch sold out in only 48 hours, driven by email and social media. I had the opportunity to work with Rev on several of our consumer brands, including HRE Beauty and CardoMax. His ability to blend strategy, creative execution, and data made a measurable difference in how those brands grew.&rdquo;
              </p>
              <footer className="text-small">
                <div className="font-semibold text-ink">Lisa De Rosa</div>
                <div className="text-ink-muted">Director, Corporate Partnerships</div>
                <div className="text-ink-faint">Cardone Ventures</div>
              </footer>
            </blockquote>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Launches are won before launch day. A Quick Win Consult pressure-tests yours while there is still time to fix it.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 05 */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-6">Selected Win / 05</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            The $1M control campaign for 10X Business Coach.
          </h2>
          <div className="mb-12">
            <Image
              src="/10X-Business-Coach.jpg"
              alt="10X Business Coach webinar funnel"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <p className="text-body text-ink leading-relaxed">
                Grant Cardone&rsquo;s 10X Business Coach needed to turn cold and warm traffic into high-ticket coaching clients. Not a one-time push. A repeatable acquisition engine.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Build</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>I built a webinar-to-call funnel around a single offer. The webinar taught. The call closed.</p>
                <p>The follow-up caught the rest. No-show sequences, rebook campaigns, and nurture for leads who were not ready yet.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>Over $1M in new revenue in under 9 months.</p>
                <p>The campaign became the control. The baseline every future test had to beat.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              If you don&rsquo;t have a control, you are guessing. A Quick Win Consult helps you find the one campaign worth scaling.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 06 */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Selected Win / 06</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            A 59% open rate on a high-ticket investor list.
          </h2>
          <div className="mb-12">
            <Image
              src="/Vestright.jpg"
              alt="VestRight investor nurture"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <p className="text-body text-ink leading-relaxed">
                VestRight runs a high-ticket training program for land developers and real estate investors. High-ticket means a long decision. A long decision means a lot of email.
              </p>
              <p className="text-body text-ink leading-relaxed mt-4">
                And email only works if people open it.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Build</h3>
              <p className="text-body text-ink leading-relaxed">
                I architected the acquisition funnel and the lifecycle sequences behind it. Every email earned the next open. Subject lines that fit the reader. Bodies that delivered before they asked for anything.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>A 59% average open rate, held across the full investor nurture campaign. Most lists would take half of that.</p>
                <p>Open rate can be a vanity metric. High opens mean little if nothing converts behind them. That was not the case here. These opens sat on top of a lifecycle built to move investors toward a high-ticket purchase.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Your nurture sequence is only as strong as your open rate. A Quick Win Consult shows you what is dragging yours down.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 07 */}
        <Section bg="paper" width="content">
          <p className="eyebrow mb-6">Selected Win / 07</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            A direct-to-consumer relaunch that lowered CAC while volume grew.
          </h2>
          <div className="mb-12">
            <Image
              src="/CardoMax.jpg"
              alt="CardoMax Shopify relaunch"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <p className="text-body text-ink leading-relaxed">
                CardoMax needed more than a refresh. The store, the message, and the funnel all had to work together. And it had to bring acquisition cost down, not up, while volume grew.
              </p>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Build</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>I worked with a cross-functional team on a complete relaunch. I directed the site copy, the visual assets, the Shopify build, the front-end ad launches, and the email lifecycle.</p>
                <p>Then we co-developed a new front-end lead-gen offer. That offer was the lever.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <p className="text-body text-ink leading-relaxed">
                CAC came down while volume went up. That combination is the hard part, and the new offer is what made it work.
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Most direct-to-consumer brands scale by spending more. A Quick Win Consult finds the offer change that lowers acquisition cost instead.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

        {/* SELECTED WIN / 08 */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Selected Win / 08</p>
          <h2 className="text-h1 font-semibold leading-tight mb-10">
            The Email Copy Academy relaunch that beat its goal by 10%.
          </h2>
          <div className="mb-12">
            <Image
              src="/Email-Copy-Academy.jpg"
              alt="Email Copy Academy AI Edition"
              width={1280}
              height={720}
              className="w-full h-auto grayscale"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>Email Copy Academy was already a proven program. I had gone through it myself before Chris and Kevin brought me in to relaunch it.</p>
                <p>This time the goal was bigger. Rebuild the program around AI, without losing the craft that made it work.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Build</h3>
              <div className="space-y-4 text-body text-ink leading-relaxed">
                <p>I re-engineered the acquisition funnel and the launch messaging. Then we added AI workflows that got a writer 80% of the way to good copy.</p>
                <p>No drift. No hallucinations. Human judgment finished the last 20%.</p>
                <p>That is the whole idea behind one of my core philosophies. Human for Trust. AI for Scale. You need the human in the loop for the part that builds trust.</p>
              </div>
            </div>
            <div>
              <h3 className="text-h3 font-semibold mb-4">The Result</h3>
              <p className="text-body text-ink leading-relaxed">
                The relaunch beat its sales goal by 10%.
              </p>
            </div>
            <blockquote className="border-l-2 border-accent pl-6">
              <p className="text-body text-ink mb-6 leading-relaxed">
                &ldquo;Knocked it out of the park. Exceeded our sales goal. I fully endorse Rev. Kevin Rogers and I hired him to redo our Email Copy Academy funnel, and Rev knocked it out of the park. We even exceeded our sales goal. I was blown away by how well it did.&rdquo;
              </p>
              <footer className="text-small">
                <div className="font-semibold text-ink">Chris Orzechowski</div>
                <div className="text-ink-muted">Creator, Email Copy Academy</div>
              </footer>
            </blockquote>
          </div>
          <div className="mt-12 border-t border-rule pt-10">
            <p className="text-body text-ink-muted leading-relaxed mb-6">
              Adding AI before the system works just scales the problem. A Quick Win Consult finds what to fix first.
            </p>
            <Button href="https://revvaughn.com/quick-win/" external variant="primary">
              Book a Quick Win Consult &rarr;
            </Button>
          </div>
        </Section>

{/* SELECTED WIN / 09 */}
<Section bg="paper" width="content">
  <p className="eyebrow mb-6">Selected Win / 09</p>
  <h2 className="text-h1 font-semibold leading-tight mb-10">
    Even a warm audience needs a full launch.
  </h2>
  <div className="mb-12">
    <Image
      src="/remix-your-business.webp"
      alt="Remix Your Business launch"
      width={1280}
      height={720}
      className="w-full h-auto grayscale"
    />
  </div>
  <div className="space-y-10">
    <div>
      <h3 className="text-h3 font-semibold mb-4">The Setup</h3>
      <div className="space-y-4 text-body text-ink leading-relaxed">
        <p>Natalie Dawson wanted to grow her personal brand and launch her first course, "Remix Your Business."</p>
        <p>Her audience already knew her, liked her, and trusted her. So the temptation was to send a few emails and let the relationship do the work.</p>
        <p>That is where most warm launches leave money on the table... a whole lot of money.</p>
      </div>
    </div>
    <div>
      <h3 className="text-h3 font-semibold mb-4">The Work</h3>
      <div className="space-y-4 text-body text-ink leading-relaxed">
        <p>And here is a myth worth killing. A warm list sells itself. Na-na. No, it does not.</p>
        <p>Trust might get you in the door, but it doesn't close a live class on its own. That takes real promotion. So we promoted. I created the internal launch campaign all in Natalie's unique voice, style and tone.</p>
      </div>
         </p>
        <h3 className="text-h3 font-semibold mb-4">The Campaign</h3>
      <ul className="space-y-2 text-body text-ink my-4">
        <li>2 pre-launch, 9 launch, and 4 nurture emails</li>
        <li>32 show-up emails and texts to boost attandance at the live class</li>
        <li>4 replay emails and 4 testimonial getting emails</li>
        <li>2 landing pages and a thank-you page</li>
        <li>A webinar script to sell the program</li>
      </ul>
      <p className="text-body text-ink leading-relaxed">
        Here's what you might not know: Getting a warm audience to show up live is the hard part. And that's what this campaign delivered.
      </p>
    </div>
    <div>
      <h3 className="text-h3 font-semibold mb-4">The Numbers</h3>
      <ul className="space-y-2 text-body text-ink">
        <li>61.92% open rate</li>
        <li>14.96% Click-Through Rate (CTR)</li>
        <li>42.91% conversion rate</li>
        <li>1,205 people through the program (the last time I heard)</li>
      </ul>
    </div>
    <div>
      <h3 className="text-h3 font-semibold mb-4">The Takeaway</h3>
      <p className="text-body text-ink leading-relaxed">
        Even when people know, like, and trust you, you still have to promote. Then promote again. And promote again. Trust does not close the sale for you. That part still takes a real launch.
      </p>
    </div>
  </div>
  <div className="mt-12 border-t border-rule pt-10">
    <p className="text-body text-ink-muted leading-relaxed mb-6">
      Sitting on a warm list and a new offer? A Quick Win Consult maps the launch that gets them to show up and buy.
    </p>
    <Button href="https://revvaughn.com/quick-win/" external variant="primary">
      Book a Quick Win Consult &rarr;
    </Button>
  </div>
</Section>
  
        {/* CLIENT LOGO STRIP */}
        <section className="bg-paper-grey border-y border-rule py-12">
          <div className="max-w-wide mx-auto px-6">
            <p className="text-h3 font-semibold text-ink mb-6 text-center">
              Clients &amp; Campaigns
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-body text-ink-soft">
              {CLIENTS.map((c) => (
                <span key={c} className="whitespace-nowrap">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT THE EXPERTS SAY */}
        <Section bg="paper" width="wide">
          <div className="max-w-prose mb-14">
            <p className="eyebrow mb-6">What the Experts Say</p>
            <h2 className="text-h1 font-semibold">Selected endorsements.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
            {ENDORSEMENTS.map((e) => (
              <blockquote key={e.name} className="border-l-2 border-accent pl-6">
                <p className="text-body text-ink mb-6 leading-relaxed">&ldquo;{e.quote}&rdquo;</p>
                <footer className="text-small">
                  <div className="font-semibold text-ink">{e.name}</div>
                  <div className="text-ink-muted">{e.title}</div>
                  {e.org && <div className="text-ink-faint">{e.org}</div>}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        {/* CLOSING CTA */}
        <Section bg="grey" width="content">
          <p className="eyebrow mb-6">Work with me</p>
          <h2 className="text-h1 font-semibold leading-tight mb-6">
            Find your hidden bottleneck.
          </h2>
          <p className="text-body text-ink-muted max-w-prose mb-10">
            A 60-minute Quick Win Consult to pinpoint what is blocking growth and remove it fast.
          </p>
          <Button href="https://revvaughn.com/quick-win/" external variant="primary">
            Book a Quick Win Consult &rarr;
          </Button>
        </Section>

      </main>
      <Footer />
    </>
  )
}
