# Curious Minds Portfolio - Complete Setup Guide

## 📁 Project Directory Structure

```
curious-minds/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ComicGallery.astro
│   │   ├── PhotoGrid.astro
│   │   ├── VideoGallery.astro
│   │   ├── ProjectCards.astro
│   │   └── Navigation.astro
│   ├── pages/
│   │   ├── index.astro (homepage)
│   │   ├── comics/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── photos/
│   │   │   └── index.astro
│   │   ├── videos/
│   │   │   └── index.astro
│   │   ├── projects/
│   │   │   └── index.astro
│   │   ├── about/
│   │   │   └── index.astro
│   │   └── admin/index.astro
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css
│   └── content/
│       ├── comics/
│       │   └── [comic-entries-in-markdown]
│       ├── projects/
│       │   └── [project-entries-in-markdown]
│       ├── videos/
│       │   └── [video-entries-in-markdown]
├── public/
│   ├── images/
│   │   ├── comics/
│   │   ├── photos/
│   │   ├── projects/
│   │   └── logo.svg
│   └── favicon.svg
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
├── CNAME (domain configuration)
└── README.md
```

## 🔑 Key Files Generated Below

1. `astro.config.mjs` - Astro configuration
2. `package.json` - Dependencies
3. `.gitignore` - Git ignore rules
4. `CNAME` - GitHub Pages domain file
5. Layout components (Astro files)
6. Content collection configuration
7. GitHub content hub; photos are image files in `public/images/photos/`
8. Deployment & DNS setup guide

All files are provided in the following sections.
