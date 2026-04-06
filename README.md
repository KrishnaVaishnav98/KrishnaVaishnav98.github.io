# Krishna Vaishnav — Portfolio

Live: [krishnavaishnav98.github.io](https://krishnavaishnav98.github.io/)

Built in Public — Krishna v1 → v5. A terminal/developer-OS themed portfolio where the portfolio itself is a project.

## Repo structure

```
.
├── source/              ← Next.js source code (edit here)
│   ├── package.json
│   ├── next.config.ts
│   ├── public/
│   └── src/
│       ├── app/
│       └── components/
│
├── _next/               ← Built JS/CSS bundles (don't edit)
├── index.html           ← Built HTML (don't edit)
├── 404.html             ← Built 404 page (don't edit)
├── krishna-profile.jpeg ← Profile image
├── .nojekyll            ← Required for GitHub Pages to serve _next/
└── README.md
```

GitHub Pages serves the static files from the repo root. The `source/` folder contains the Next.js project that generates them.

## Tech stack

- **Next.js 16** (App Router) — static export mode
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animations
- **React 19**

## Local development

```bash
cd source
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy (rebuild + push)

After making changes in `source/`:

```bash
cd source
npm run build
cp -R out/. ../
cd ..
git add -A
git commit -m "update portfolio"
git push
```

GitHub Pages will pick up the changes within a few minutes.

## Branches

- `master` — live site (built static files + source/)
- `old-portfolio-backup` — original static HTML portfolio (pre-redesign)
