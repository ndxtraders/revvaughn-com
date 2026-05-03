import Image from 'next/image'
import Section from './Section'
import Button from './Button'

export default function HeroWithImage() {
  return (
    <Section bg="paper" width="content" className="pt-24 md:pt-28">
      <div className="flex items-start justify-between gap-10">
        {/* Text — identical to current hero */}
        <div className="max-w-prose">
          <p className="eyebrow mb-6">G0-To-Market · Revenue Systems · AI Leverage</p>
          <h1 className="font-sans font-semibold text-display mb-6 text-ink">
            GTM strategy and revenue growth systems for founder-led brands.
          </h1>
          <p className="text-lead text-ink-muted mb-10">
            Turn traffic into qualified pipeline and predictable revenue.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="#programs" variant="primary">See My Work</Button>
            <Button href="#briefings" variant="secondary">Subscribe to Briefings</Button>
          </div>
        </div>

        {/* Headshot — smaller, right-aligned, hidden on mobile */}
        <div className="hidden md:block flex-shrink-0">
          <div className="relative w-[200px] h-[250px] border border-rule">
            <Image
              src="/Rev Vaughn Hero.png"
              alt="Rev Vaughn"
              fill
              sizes="200px"
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
