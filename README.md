# Lade Stack Blog — Next.js + TypeScript + Tailwind CSS

A minimal, modern blog built with Next.js (App Router), TypeScript, and Tailwind CSS. Blog posts are statically generated at build time for excellent performance and SEO, with a beautiful dark/light theme toggle and a full Shadcn UI component set.

## ✨ Features

- **Next.js App Router** with TypeScript — server components, static generation (`generateStaticParams`), per-post `generateMetadata` for SEO
- **Utility-first styling** with Tailwind CSS — design tokens in CSS variables, mobile-first responsive layout
- **Shadcn UI component library** — accessible, composable components (dialog, dropdown, carousel, toast, tabs, and more)
- **Dark/light theme toggle** with persisted theme
- **Static site generation** — every blog post is pre-rendered HTML, deployed on Cloudflare Pages
- **Dynamic blog routes** — `/blog/[slug]` pages generated from a local data file
- Pages: Home, Blog, About, Contact, Admin (placeholder)

## 🛠 Tech Stack

- **Framework:** Next.js 15.3.3 (App Router), React 18.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4, Shadcn UI, Radix UI primitives
- **Data:** Local file-based content (`src/lib/data.ts`) — no backend required
- **Build/Deploy:** Static export (`output: 'export'`), hosted on Cloudflare Pages
- **Tooling:** PostCSS, `tsc` typecheck, ESLint

## 🚀 Quick Start

### Prerequisites

Node.js 18+ and npm.

### Run locally

```bash
git clone https://github.com/girishlade111/Lade-Stack-Blog-TypeScript-NextJS-Tailwind-CSS-.git
cd Lade-Stack-Blog-TypeScript-NextJS-Tailwind-CSS-
npm install
npm run dev
```

Open http://localhost:3000. (The dev script also passes `--turbopack -p 9002`, so the actual port is 9002 unless changed.)

### Build a static site

```bash
npm run build
```

This produces a fully static `out/` directory thanks to `output: 'export'` in `next.config.ts`. Serve it with any static host:

```bash
npx serve out
```

### Other scripts

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

## 📁 Project Structure

```
src/
  app/
    page.tsx            # Home page
    blog/[slug]/page.tsx # Individual blog post (static params)
    about/page.tsx      # About page
    contact/page.tsx    # Contact page
    admin/page.tsx      # Admin placeholder
    layout.tsx          # Root layout (theme provider, header/footer)
    globals.css         # Tailwind + CSS design tokens
  components/
    ui/                 # Shadcn UI components
    header.tsx          # Site navigation
    footer.tsx          # Site footer
    blog-post-card.tsx  # Blog card used on listing pages
    theme-toggle.tsx    # Dark/light switch
  lib/
    data.ts             # Blog post content source
    utils.ts            # cn() utility
  ai/                   # Genkit AI scaffolding (experimental, not used by pages)
public/                 # Static assets
next.config.ts          # Static export config, unoptimized images
tailwind.config.ts      # Tailwind theme extension
```

## 🎨 Customization

### Adding a blog post

Add an object to the `blogPosts` array in `src/lib/data.ts`. The `slug` field becomes the URL (`/blog/<slug>`).

### Theming

Colors and fonts are controlled by CSS variables in `src/app/globals.css` (`:root` and `.dark` blocks). Tailwind tokens are extended in `tailwind.config.ts`.

### Environment variables

None required. Content is file-based; no API keys or backend services are needed. (Genkit AI scaffolding under `src/ai/` is experimental and not wired into any page.)

## 🌐 Deployment

The site is a static export (`next build` → `out/`) and can be hosted on any static host:

- **Cloudflare Pages:** `cloudflare pages_deploy <project> out`
- **GitHub Pages / Netlify / Vercel:** point the publish directory to `out/`

Since all images are unoptimized (`images.unoptimized: true`) and routes are statically generated, no server runtime is needed.

## 👤 Author

Built by **Girish Lade** — [ladestack.in](https://ladestack.in)
