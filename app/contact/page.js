import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from '../components/Section'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Contact — Rev Vaughn',
  description: 'Get in touch with Rev Vaughn about GTM strategy and revenue growth systems for founder-led brands.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section bg="paper" width="content" className="pt-20 md:pt-28">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="eyebrow mb-6">Contact</div>
              <h1 className="text-display font-semibold tracking-tight text-ink mb-6">
                Let&rsquo;s Connect
              </h1>
              <p className="text-lead text-ink-muted">
                Please fill the form to contact me. I&rsquo;ll personally review every note and
                respond as soon as I can.
              </p>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
