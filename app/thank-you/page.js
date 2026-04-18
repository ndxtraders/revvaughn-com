import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import Button from '../components/Button'

export const metadata = {
  title: 'Thanks for Reaching Out — Rev Vaughn',
  description: 'Thanks for getting in touch with Rev Vaughn.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Message Received</div>
          <h1 className="text-display font-semibold tracking-tight text-ink mb-8">
            Thanks for Reaching Out
          </h1>

          <div className="space-y-6 text-lead text-ink-soft leading-relaxed mb-12">
            <p>
              Thanks for getting in touch. I just received your message through the contact form
              and wanted to let you know I appreciate you reaching out.
            </p>
            <p>
              I&rsquo;m often traveling or working closely with clients, but I&rsquo;ll personally
              review your note and respond as soon as I can.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6 mb-12">
            <div className="eyebrow mb-3">What to do next</div>
            <p className="text-body text-ink-soft leading-relaxed">
              Check your inbox for a message from me. If you can&rsquo;t find it, check your
              promotion or spam folders and move it to the inbox. Then hit reply and let me know
              you got it — and add any details I should know.
            </p>
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
