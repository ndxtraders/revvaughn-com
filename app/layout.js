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
    <html lang="en">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
