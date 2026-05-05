// Auto-generates https://revvaughn.com/sitemap.xml at build time
// To add a new page: append to PAGES with the URL path and priority

const BASE_URL = 'https://revvaughn.com'

const PAGES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/ai-inner-circle', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/quick-win', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/map', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/growth-as-a-service', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/mentor', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/voice', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/privacy-terms', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap() {
  const lastModified = new Date()
  return PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
