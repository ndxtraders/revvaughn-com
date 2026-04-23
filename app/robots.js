// Auto-generates https://revvaughn.com/robots.txt at build time
// All crawlers (including AI engines) allowed by default to maximize citations and discovery
// Thank-you pages excluded so they don't appear in search results

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/voice-thank-you'],
      },
    ],
    sitemap: 'https://revvaughn.com/sitemap.xml',
    host: 'https://revvaughn.com',
  }
}
