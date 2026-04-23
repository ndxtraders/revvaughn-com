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
    ]
  },
}

module.exports = nextConfig
