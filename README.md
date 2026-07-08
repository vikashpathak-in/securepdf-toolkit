# SecurePDF Toolkit — Marketing Website

Landing page for **SecurePDF Toolkit**, an offline PDF processing app for
chartered accountants, tax consultants, and finance teams. Built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design notes

- **Palette**: primary `#2563EB`, secondary/ink `#0F172A`, accent `#10B981`, background `#F8FAFC` (see `tailwind.config.ts`).
- **Type system**: Space Grotesk for display headings, Inter for body copy, JetBrains Mono for numbers/data (`.tabular` utility) — a nod to ledgers and tabular financial data.
- **Signature motif**: the dashed "local boundary" container (`.local-boundary` in `app/globals.css`) recurs across the trust bar, security section, comparison table, and pricing card — a visual metaphor for "your device, nothing leaves it."
- Dark mode uses the `class` strategy with a pre-hydration inline script (in `app/layout.tsx`) to avoid a flash of the wrong theme.
- Reduced motion is respected globally via a `prefers-reduced-motion` media query in `globals.css`.

## Project structure

```
securepdf-toolkit/
├── app/
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   ├── page.tsx           # Assembles all sections
│   └── globals.css        # Tailwind layers + design tokens
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── WhyItMatters.tsx
│   ├── FeaturesGrid.tsx       # includes live feature search
│   ├── AIFeatures.tsx
│   ├── WhoUsesIt.tsx
│   ├── SecuritySection.tsx    # includes animated counters
│   ├── ComparisonTable.tsx
│   ├── Screenshots.tsx        # tabbed preview
│   ├── Testimonials.tsx
│   ├── Pricing.tsx            # includes pricing toggle
│   ├── FAQ.tsx                # accordion
│   ├── CTA.tsx
│   ├── Footer.tsx              # includes contact form UI
│   ├── ThemeToggle.tsx
│   ├── BackToTop.tsx
│   └── DownloadModal.tsx
├── public/
│   └── favicon.svg
├── .github/workflows/deploy.yml   # auto-deploy to GitHub Pages
├── next.config.mjs         # static export config
├── tailwind.config.ts
└── package.json
```

## Getting started locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to GitHub Pages

This project is pre-configured for static export.

1. Push this repo to GitHub.
2. In your repo settings, go to **Pages** → **Build and deployment** → set **Source** to **GitHub Actions**.
3. Push to `main`. The included workflow (`.github/workflows/deploy.yml`) will run `npm run build`, which uses `output: "export"` in `next.config.mjs` to produce a static `out/` directory, and publish it automatically.
4. `next.config.mjs` auto-detects the repo name inside GitHub Actions and sets `basePath`/`assetPrefix` accordingly, so no manual edits are needed for a project page (`https://<user>.github.io/<repo>/`).

If you're deploying to a **user/organization page** (`<user>.github.io` root repo) instead of a project page, remove the `basePath`/`assetPrefix` logic in `next.config.mjs`.

### Manual export (no GitHub Actions)

```bash
npm run build
# static site is now in ./out — upload it to any static host
```

## Deploying to Vercel

Vercel needs no static export. Simply:

```bash
npm i -g vercel
vercel
```

Or import the repo directly at vercel.com — Vercel auto-detects Next.js.
(You may want to remove `output: "export"` from `next.config.mjs` first, since Vercel doesn't require it and it disables some Next.js features like image optimization.)

## Content notes

Testimonials, pricing figures, and screenshot descriptions are illustrative
placeholder content — swap in real customer quotes, final pricing, and actual
product screenshots (drop images into `public/` and reference them in
`Screenshots.tsx`) before shipping.
