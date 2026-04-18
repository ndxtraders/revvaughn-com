# Setup Instructions: Deploy to GitHub & Vercel

Follow these steps to push your code to GitHub and deploy to Vercel.

## Step 1: Clone the Files

The project files are in `/sessions/nifty-zen-goldberg/mnt/outputs/revvaughn-com/`

Either:
- **Download the folder** and extract it locally, OR
- **Copy all files** to your existing `revvaughn-com` folder

## Step 2: Initialize Git & Push to GitHub

Navigate to the project folder in your terminal:

```bash
cd revvaughn-com
```

Initialize git and connect to your GitHub repo:

```bash
git init
git add .
git commit -m "Initial commit: Rev Vaughn authority hub"
git branch -M main
git remote add origin https://github.com/ndxtraders/revvaughn-com.git
git push -u origin main
```

**Note:** Make sure you're authenticated with GitHub. If you get auth errors, use:
```bash
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"
```

Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## Step 3: Add Your Images

1. Add `headshot-4.png` to the `/public` folder
2. Add `ai-inner-circle-logo.jpg` to the `/public` folder
3. Commit and push:

```bash
git add public/
git commit -m "Add hero images"
git push
```

## Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your **raulvaughn@gmail.com** account
2. Click **"Add New"** → **"Project"**
3. Select **"Import Git Repository"**
4. Find and select **`ndxtraders/revvaughn-com`**
5. Vercel will auto-detect:
   - Framework: Next.js ✓
   - Build command: `next build` ✓
   - Output directory: `.next` ✓
6. Click **"Deploy"**

**Deployment will take 2-3 minutes.** You'll see a live URL when complete.

## Step 5: Configure Your Domain

After deployment:

1. In Vercel dashboard, go to your project → **"Settings"** → **"Domains"**
2. Add `revvaughn.com`
3. Point your domain registrar's DNS to Vercel (instructions provided)
4. SSL certificate auto-provisions (24-48 hours)

## Step 6: Connect MailerLite (Optional)

When ready to wire up email signups:

1. Get your MailerLite API credentials
2. Create `.env.local` in the project root:

```
NEXT_PUBLIC_MAILERLITE_API_KEY=your_api_key
NEXT_PUBLIC_MAILERLITE_GROUP_ID=your_group_id
```

3. Uncomment and update the email handler in `app/page.js`
4. Push changes:

```bash
git add app/page.js .env.local
git commit -m "Add MailerLite integration"
git push
```

Vercel will auto-redeploy.

## Step 7: Monitor & Optimize

- **Vercel Dashboard:** Check build logs, analytics, and performance
- **Lighthouse:** Test on [PageSpeed Insights](https://pagespeed.web.dev)
- **Core Web Vitals:** Monitor in Vercel Analytics

## Troubleshooting

### "fatal: not a git repository"
Make sure you're in the correct folder:
```bash
pwd  # Should show .../revvaughn-com
```

### "Permission denied (publickey)"
Set up GitHub SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "Cannot find module 'next'"
Run `npm install` before deploying:
```bash
npm install
npm run build
```

### Vercel says "Build failed"
Check the build logs in the Vercel dashboard. Usually it's a missing image or env variable.

## Auto-Deploy on Every Push

Once connected, every push to `main` triggers an automatic build and deployment. Your site updates in 2-3 minutes.

```bash
git add .
git commit -m "Your message"
git push  # Vercel auto-deploys
```

---

**Questions?** Check the README.md or visit [vercel.com/docs](https://vercel.com/docs)
