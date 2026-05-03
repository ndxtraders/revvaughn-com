import Image from 'next/image'
import Section from './Section'
import Button from './Button'

export default function HeroWithImage() {
  return (
    <Section bg="paper" width="content" className="pt-24 md:pt-28">
      <div className="grid md:grid-cols-3 gap-10 items-end">
        {/* Text — 2/3 width */}
        <div className="md:col-span-2">
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

        {/* Headshot — 1/3 width, aligned to bottom of text */}
        <div className="hidden md:block">
          <div className="relative aspect-[4/5] w-full border border-rule">
            <Image
              src="/Rev Vaughn Hero.png"
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
  )
}
