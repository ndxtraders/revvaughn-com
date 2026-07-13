/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 301 redirects from legacy Simvoly URLs to new site equivalents
  // Preserves SEO equity from previously indexed pages
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/rev-vaughn', destination: '/#about', permanent: true },
      { source: '/booking-15-min-call', destination: '/contact', permanent: true },
      { source: '/influential-founder', destination: '/', permanent: true },
      { source: '/invitation-funnel', destination: '/resources', permanent: true },
      { source: '/coach-s-checklist', destination: '/resources', permanent: true },
      // Legacy AI Priority Map landing page — superseded by /ai
      { source: '/ai-priority-map', destination: '/ai', permanent: true },
      // All AI-related thought leadership now lives on aiinnercircle.com.
      // These 4 were mirrored here and revvaughn.com, competing for the same
      // query on two domains. aiinnercircle.com is the canonical home; these
      // send equity there instead of duplicating the content.
      { source: '/articles/future-of-ai-agents-in-business', destination: 'https://aiinnercircle.com/articles/future-of-ai-agents-in-business', permanent: true },
      { source: '/articles/why-ai-writing-sucks', destination: 'https://aiinnercircle.com/articles/why-ai-writing-sucks', permanent: true },
      { source: '/articles/why-chatgpt-sounds-robotic', destination: 'https://aiinnercircle.com/articles/why-chatgpt-sounds-robotic', permanent: true },
      { source: '/articles/how-ai-content-destroys-trust', destination: 'https://aiinnercircle.com/articles/how-ai-content-destroys-trust', permanent: true },
      // NOTE: the aiinnercircle.com / www.aiinnercircle.com host redirects were
      // removed. aiinnercircle.com is now its own Vercel project. Re-adding a
      // catch-all host redirect here would 301 that entire site into
      // revvaughn.com/ai-inner-circle the moment its DNS points at Vercel.
    ]
  },
}
module.exports = nextConfig
