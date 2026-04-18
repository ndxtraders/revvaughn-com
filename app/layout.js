import './globals.css'

export const metadata = {
  title: 'Rev Vaughn | GTM Strategy & Revenue Systems',
  description: 'GTM Strategist & Fractional CMO. Turn traffic into predictable revenue.',
  openGraph: {
    title: 'Rev Vaughn | GTM Strategy & Revenue Systems',
    description: 'GTM Strategist & Fractional CMO. Turn traffic into predictable revenue.',
    url: 'https://revvaughn.com',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
