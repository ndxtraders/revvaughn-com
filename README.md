# Rev Vaughn Authority Hub

A high-performance, mobile-first personal authority site built with Next.js, React, and Tailwind CSS. Deployed on Vercel.

## Tech Stack

- **Framework:** Next.js (latest)
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Runtime:** Node.js

## Project Structure

```
revvaughn-com/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Homepage
│   └── globals.css        # Global Tailwind styles
├── public/
│   ├── headshot-4.png     # Profile image
│   └── ai-inner-circle-logo.jpg  # Logo
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the dev server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Mobile-First Design

- **Hero Section:** Responsive layout with headshot (48px mobile, 56px desktop)
- **Typography:** 28px h1 on mobile, 48px on desktop
- **Body Copy:** 18px with 1.6 line-height for readability
- **Sticky CTA:** Mobile footer button with "Let's Talk" call-to-action
- **Accessibility:** Semantic HTML, proper contrast, touch-friendly buttons

## Features

- **Hero Section:** Value proposition with profile image
- **Authority Strip:** Social proof from past clients
- **AI Inner Circle Section:** Three-column benefits grid
- **Email Opt-In:** MailerLite integration placeholder (ready for API)
- **Mobile Sticky Button:** Bottom navigation for mobile users

## Deployment to Vercel

1. Push this repo to your GitHub account:
```bash
git add .
git commit -m "Initial commit: Rev Vaughn authority hub"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and click "Add New" → "Project"
3. Import the `revvaughn-com` repository
4. Vercel will auto-detect Next.js and configure build settings
5. Click "Deploy" — your site will be live in ~2-3 minutes

## Environment Variables

If connecting to MailerLite API:
```
NEXT_PUBLIC_MAILERLITE_API_KEY=your_key_here
NEXT_PUBLIC_MAILERLITE_GROUP_ID=your_group_id_here
```

Add to `.env.local` (not committed to git).

## Customization

- Update `headshot-4.png` in `/public` with your image
- Update `ai-inner-circle-logo.jpg` in `/public` with your logo
- Edit copy in `app/page.js`
- Modify colors in `tailwind.config.js`
- Update metadata in `app/layout.js`

## Performance

- **Lighthouse:** Optimized for Core Web Vitals
- **Image Optimization:** Next.js Image component with lazy loading
- **CSS:** Tailwind purges unused styles (production bundle ~15KB)
- **Zero JS:** Static site except for form interactivity

## Next Steps

1. Connect MailerLite email service
2. Set up domain (revvaughn.com)
3. Configure analytics (Vercel Analytics or Google Analytics)
4. Add sitemap.xml and robots.txt
5. Monitor Core Web Vitals on Vercel dashboard

## Support

For issues, check:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
