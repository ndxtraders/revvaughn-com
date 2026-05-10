import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  metadataBase: new URL('https://revvaughn.com'),
  title: 'Rev Vaughn | GTM Strategy & Revenue Growth Systems for Founder-led Brands',
  description: 'GTM strategy and revenue growth systems for founder-led brands. Diagnose bottlenecks, architect the system, operate it with AI where it adds leverage.',
  openGraph: {
    title: 'Rev Vaughn | GTM Strategy & Revenue Growth Systems',
    description: 'GTM strategy and revenue growth systems for founder-led brands.',
    url: 'https://revvaughn.com',
    siteName: 'Rev Vaughn',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

// JSON-LD structured data — Person + Organization schema
// Builds entity recognition for SEO, AEO, and GEO (Answer/Generative Engine Optimization)
const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://revvaughn.com/#person',
  name: 'Rev Vaughn',
  givenName: 'Raul',
  additionalName: 'Rev',
  familyName: 'Vaughn',
  alternateName: ['Raul Vaughn', 'Raul "Rev" Vaughn'],
  jobTitle: 'GTM Strategist & Revenue Systems Architect',
  description:
    'GTM strategist and revenue systems architect helping founder-led brands turn traffic into qualified pipeline and predictable revenue using AI-leveraged growth systems. Track record includes contributions to over $100M in collective revenue across brands like Grant Cardone, 10X Health, Cardone Ventures, SquadUp Summit, Copy Chief, Anacapa Marketing, and FrontPorch.',
  url: 'https://revvaughn.com',
  image: 'https://revvaughn.com/headshot-4.png',
  email: 'mailto:rev@revvaughn.com',
  worksFor: { '@id': 'https://revvaughn.com/#organization' },
  knowsAbout: [
    'Go-to-market strategy',
    'Revenue growth systems',
    'Direct response marketing',
    'B2B demand generation',
    'Conversion rate optimization',
    'Funnel architecture',
    'Fractional CMO services',
    'AI-leveraged content systems',
    'Founder-led brand growth',
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/revvaughn/',
    'https://medium.com/@revvaughn',
    'https://www.youtube.com/@revvaughn1',
    'https://x.com/RaulRevVaughn',
  ],
}

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://revvaughn.com/#organization',
  name: 'Rev Vaughn LLC',
  alternateName: ['Leads & Clients', 'Rev Vaughn'],
  legalName: 'Rev Vaughn LLC',
  description:
    'Revenue growth advisory and GTM strategy for founder-led brands. Diagnostic sprints, growth-as-a-service engagements, mentorship, and AI-powered content systems.',
  url: 'https://revvaughn.com',
  logo: 'https://revvaughn.com/headshot-4.png',
  image: 'https://revvaughn.com/headshot-4.png',
  email: 'rev@revvaughn.com',
  founder: { '@id': 'https://revvaughn.com/#person' },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: 'Worldwide',
  sameAs: [
    'https://www.linkedin.com/in/revvaughn/',
    'https://medium.com/@revvaughn',
    'https://www.youtube.com/@revvaughn1',
    'https://x.com/RaulRevVaughn',
  ],
}

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://revvaughn.com/#website',
  url: 'https://revvaughn.com',
  name: 'Rev Vaughn',
  description: 'GTM strategy and revenue growth systems for founder-led brands.',
  publisher: { '@id': 'https://revvaughn.com/#organization' },
  inLanguage: 'en-US',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-YMW2HJJM2L" />
    </html>
  )
}
