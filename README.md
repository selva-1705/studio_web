# Studio Web

A short, one-page creative-studio website. Plain React + TypeScript, built
with Vite, styled with Tailwind CSS, animated with Framer Motion. No backend,
no database — it builds to static files and runs on GitHub Pages.

## Editing content

All editable content lives in one file, separate from the UI:

**`src/data/config.ts`** — agency name, tagline, email, phone, WhatsApp
number, Instagram/LinkedIn, location, nav links, SEO title/description,
services, projects, process steps, clients, and testimonials.

Search the codebase for `[YOUR` to find every remaining placeholder value.

Project visuals are real (freely licensed) placeholder photography under
`public/media/` — see `public/media/CREDITS.md` for sources. Swap a
project's `image` path in `config.ts` once real case-study imagery exists;
`src/components/WorkCard.tsx` just renders whatever path it's given.

The contact form (Final CTA section) has no backend: submitting it opens
the visitor's email client with the fields pre-filled (`mailto:`). Swap
`handleSubmit` in `src/components/FinalCTA.tsx` for a service like
Formspree or Netlify Forms if you want it to submit directly.

## Local setup

```bash
npm install
npm run dev       # starts the dev server, prints a local URL
```

Other scripts:

```bash
npm run build      # type-checks and builds to dist/
npm run preview    # serves the production build locally
npm run lint       # oxlint
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
`dist/` to GitHub Pages automatically on every push to `main`.

One-time setup after pushing this repo to GitHub:

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. The site will be published at `https://<owner>.github.io/<repo>/`.

No manual `gh-pages` branch or `vite.config.ts` changes are needed —
`base: './'` is already set so the build works at any GitHub Pages path.

### Deploying manually instead

If you'd rather not use the included Actions workflow:

```bash
npm run build
# then publish the contents of dist/ with whatever static host you prefer
```
