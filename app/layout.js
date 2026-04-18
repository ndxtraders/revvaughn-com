import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Rev Vaughn | GTM Strategy & Revenue Growth Systems for Founder-led Brands',
  description: 'GTM strategy and revenue growth systems for founder-led brands. Diagnose bottlenecks, architect the system, operate it with AI where it adds leverage.',
  openGraph: {
    title: 'Rev Vaughn | GTM Strategy & Revenue Growth Systems',
    description: 'GTM strategy and revenue growth systems for founder-led brands.',
    url: 'https://revvaughn.com',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  )
}
