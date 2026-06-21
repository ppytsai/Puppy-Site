# Puppy Tsai Photography

Personal photography portfolio built with Next.js, deployed on Vercel.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (GitHub + Vercel)

### First-time setup

1. **Create a GitHub repo** and push this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/puppy-tsai-photography.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repo
   - Framework: Next.js (auto-detected)
   - Click Deploy

3. **Custom domain** (`puppytsai.com`):
   - In Vercel → your project → Settings → Domains
   - Add `puppytsai.com` and `www.puppytsai.com`
   - Update your DNS records as instructed (point to Vercel's nameservers or add the CNAME/A records)

After that, every `git push` to `main` auto-deploys.

## Contact form setup

The contact form uses [Formspree](https://formspree.io) (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) → create an account → New Form
2. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc`)
3. Open `src/components/ContactForm.tsx` and replace `YOUR_FORM_ID`:
   ```
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...
   ```

## Photos page (Instagram)

The Photos page currently links out to Instagram. To embed a real feed:

**Option A – Elfsight** (easiest, free tier available):
1. Sign up at [elfsight.com](https://elfsight.com) → Instagram Feed widget
2. Get your embed snippet and paste it into `src/app/photos/page.tsx` where the comment says "OPTIONAL"

**Option B – SnapWidget** (free):
1. Sign up at [snapwidget.com](https://snapwidget.com)
2. Copy the `<iframe>` embed code into the photos page

## Social links

Update your Instagram/LinkedIn URLs in `src/components/Footer.tsx` if needed.

## File structure

```
src/
├── app/
│   ├── layout.tsx       — root layout + metadata
│   ├── globals.css      — global styles, CSS variables, fonts
│   ├── page.tsx         — Home
│   ├── about/page.tsx   — About + exhibitions
│   ├── photos/page.tsx  — Photos (Instagram embed)
│   └── contact/page.tsx — Contact form
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    └── ContactForm.tsx

public/
└── images/
    ├── hero.jpg      — homepage hero
    ├── about.jpg     — about page portrait
    └── contact.jpg   — contact page leaf photo
```
