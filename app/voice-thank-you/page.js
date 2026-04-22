import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Your DISC Voice Is On the Way — Rev Vaughn',
  description: 'Your DISC Voice assets are being delivered to your inbox.',
  robots: { index: false, follow: false },
}

export default function VoiceThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">You&rsquo;re In</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            Your DISC Voice is on the way.
          </h1>

          <div className="space-y-6 text-lead text-ink-soft leading-relaxed mb-12">
            <p>
              Thanks for grabbing the DISC Voice. Your install link and workshop access
              are being delivered to your inbox right now.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 mb-12">
            <div className="eyebrow mb-3">What to do next</div>
            <div className="space-y-4 text-body text-ink-soft leading-relaxed">
              <p>
                Look for an email from Rev Vaughn with the subject line{' '}
                <span className="font-semibold text-ink">
                  &ldquo;Your AI DISC Voice Skill&rdquo;
                </span>
                .
              </p>
              <p>
                Can&rsquo;t find it? Check your Promotions tab, Trash, or Spam folders and
                move it to your inbox. Then hit reply and let me know you got it.
              </p>
            </div>
          </div>

          <p className="text-body text-ink mb-2">Talk soon,</p>
          <p className="text-body text-ink font-semibold mb-10">Rev Vaughn</p>

          <Button href="/" variant="secondary">
            Back to Home
          </Button>
        </Section>
      </main>
      <Footer />
    </>
  )
}
