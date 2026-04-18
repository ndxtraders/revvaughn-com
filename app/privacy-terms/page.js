import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'

export const metadata = {
  title: 'Privacy & Terms — Rev Vaughn',
  description: 'Privacy policy and terms of service for revvaughn.com.',
}

export default function PrivacyTermsPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="prose" className="pt-20 md:pt-28">
          <div className="eyebrow mb-6">Privacy &amp; Terms</div>
          <h1 className="text-h1 font-semibold tracking-tight text-ink mb-10">
            Privacy &amp; Terms
          </h1>
          <div className="space-y-6 text-body text-ink-soft">
            <p>
              This page will contain the official privacy policy and terms of service for
              revvaughn.com.
            </p>
            <p>
              Final content will be provided and replaced here before launch.
            </p>
            <p className="text-ink-faint text-small">
              Last updated: pending.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
