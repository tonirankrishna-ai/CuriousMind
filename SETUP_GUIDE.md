# 🚀 Curious Minds Portfolio - Complete Setup Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [GitHub Repository Setup](#github-repository-setup)
3. [GitHub Pages Configuration](#github-pages-configuration)
4. [GoDaddy Domain Configuration](#godaddy-domain-configuration)
5. [GitHub Content Editing](#github-content-editing)
6. [Deployment Workflow](#deployment-workflow)
7. [Content Publishing Workflow](#content-publishing-workflow)
8. [Troubleshooting](#troubleshooting)

---

## Local Development Setup

### Prerequisites
- **Node.js** (v22.19 or higher) and **npm** (v9.6.5 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **GitHub Account** - [Create one](https://github.com/signup)
- **GoDaddy Account** with your domain

### Step 1: Clone & Setup

```bash
# Clone the repository (after you create it on GitHub)
git clone https://github.com/tonirankrishna-ai/CuriousMind.git
cd CuriousMind

# Install dependencies
npm ci

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site live.

### Step 2: Project Structure

```
curious-minds/
├── src/
│   ├── layouts/        # Page layouts
│   ├── components/     # Reusable components
│   ├── pages/         # Routable pages
│   ├── content/       # Markdown content files
│   │   ├── comics/
│   │   ├── photos/
│   │   ├── projects/
│   │   └── videos/
│   └── styles/        # CSS files
├── public/
│   ├── admin/         # GitHub content hub route
│   ├── images/        # Images for content
│   ├── favicon.svg
│   └── CNAME          # Domain file
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## GitHub Repository Setup

### Step 1: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `curious-minds`
3. **Description**: "Personal portfolio and publishing hub"
4. **Visibility**: Public (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Push Your Code

```bash
# From your local project directory
git remote add origin https://github.com/YOUR_USERNAME/curious-minds.git
git branch -M main
git add .
git commit -m "Initial commit: portfolio setup"
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
  - **Source**: GitHub Actions
4. Click **Save**

---

## GitHub Pages Configuration

### Step 1: Update Your Site URL

Edit `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://curioushminds.com', // ← Change to YOUR domain
  output: 'static',
  // ... rest of config
});
```

### Step 2: CNAME File

The `public/CNAME` file is included in the Pages artifact and tells GitHub Pages which domain to use:

```
curioushminds.com
```

Update this file with your actual domain.

### Step 3: Deploy to GitHub Pages

After pushing to GitHub, GitHub Actions will automatically build and deploy your site. Check the **Actions** tab to see build status.

```bash
# Or deploy manually:
npm run build
git add .
git commit -m "Deploy site"
git push origin main
```

---

## GoDaddy Domain Configuration

### Step 1: Point Domain to GitHub Pages

1. **Log in to GoDaddy**
2. Go to **My Products** → **Domains**
3. Click your domain → **DNS**

### Step 2: Update DNS Records

You need to create/update these records:

#### For Apex Domain (curioushminds.com):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 600 |
| A | @ | 185.199.109.153 | 600 |
| A | @ | 185.199.110.153 | 600 |
| A | @ | 185.199.111.153 | 600 |
| AAAA | @ | 2606:50c0:8000::153 | 600 |
| AAAA | @ | 2606:50c0:8001::153 | 600 |
| AAAA | @ | 2606:50c0:8002::153 | 600 |
| AAAA | @ | 2606:50c0:8003::153 | 600 |
| CNAME | www | YOUR_USERNAME.github.io | 600 |

#### For Subdomain (www.curioushminds.com):

If the `www` record isn't already there, add:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | YOUR_USERNAME.github.io | 600 |

### Step 3: Verify DNS Setup

1. Wait 10-30 minutes for DNS to propagate
2. Run this command in your terminal:

```bash
# Check A records
nslookup curioushminds.com

# Check CNAME record
nslookup www.curioushminds.com
```

You should see the GitHub Pages IP addresses.

### Step 4: Verify in GitHub

1. Go to your repository → **Settings** → **Pages**
2. Under "Custom domain", enter: `curioushminds.com`
3. Check **Enforce HTTPS** (wait for the checkmark to appear - this takes a few minutes)

---

## GitHub Content Editing

The `/admin/` page links directly to the content folders in GitHub. No CMS, OAuth app, or Netlify setup is needed.

1. Open `/admin/` and choose Comics, Photos, Projects, or Videos.
2. In GitHub, choose **Add file → Create new file** to add an entry, or edit an existing Markdown file.
3. For images, choose **Add file → Upload files** in the matching folder under `public/images/`.
4. Commit changes to `main`. GitHub Actions builds and publishes the site.

---

## Deployment Workflow

### Automatic Deployment (Recommended)

Every time you push to GitHub, your site automatically rebuilds and deploys:

```bash
npm run build        # Build locally
git add .
git commit -m "Description of changes"
git push origin main # GitHub Pages auto-builds!
```

### Manual Build

```bash
npm run build
# The `dist/` folder is what gets deployed
```

### Preview Build Locally

```bash
npm run preview  # See the production build locally
```

---

## Content Publishing Workflow

### Method 1: GitHub Content Hub

Open `/admin/`, choose the content folder, create or edit Markdown, and commit the change to `main`.

### Method 2: Local Content Files

If you prefer direct file management:

1. Create a markdown file in `src/content/[collection]/`
2. Use the correct frontmatter format
3. Commit and push:
   ```bash
   git add src/content/
   git commit -m "Add new comic: title"
   git push origin main
   ```

You can also open an entry directly on GitHub and use the pencil icon to edit it in the browser.

---

## Content Examples

### Adding a Comic

**In Admin Dashboard:**
1. Title: "The Windy Forest"
2. Description: "Lost under the red moon..."
3. Publish Date: Select today
4. Genre: "Horror"
5. Hero Image: Upload your cover
6. Click Publish!

**Frontmatter Format:**
```yaml
---
title: "The Windy Forest"
description: "Lost under the red moon..."
pubDate: 2024-01-20
genre: "horror"
heroImage: "/images/comics/windy-forest.jpg"
featured: false
---
```

### Adding a Project

**Required fields:**
- Title
- Description
- Tags (comma-separated)
- Status: completed / ongoing / planned
- GitHub URL (optional)
- Demo URL (optional)

### Adding a Photo

**Required fields:**
- Title
- Description
- Image (upload)
- Category: all / street / nature / people / places

### Adding a Video

**Required fields:**
- Title
- Description
- YouTube watch, share, or embed URL, or its 11-character video ID
- Duration (e.g., "12 min")

---

## Customization

### Change Site Title & Email

Edit `/src/components/Header.astro` and `/src/pages/index.astro`:

```astro
// Change "Curious Minds" to your name
<a href="/" class="logo">
  <span>YOUR NAME HERE</span>
</a>
```

Edit social links in `/src/components/Footer.astro`:

```html
<li><a href="https://instagram.com/YOUR_HANDLE">Instagram</a></li>
<li><a href="https://twitter.com/YOUR_HANDLE">X / Twitter</a></li>
```

### Customize Colors

Edit `/src/styles/variables.css`:

```css
:root {
  --color-accent: #d4a574;        /* Change this color */
  --color-accent-yellow: #ffc107;
  --color-background: #f5f1ed;
  --color-text-primary: #1a1a1a;
  /* etc... */
}
```

### Update Typography

Install custom fonts and update `src/layouts/BaseLayout.astro`:

```astro
<link
  href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

Then update variables.css:

```css
--font-display: 'Your Font Name', serif;
```

---

## Troubleshooting

### Site not building?

1. Check **GitHub Actions** tab for build errors
2. Verify `astro.config.mjs` has correct site URL
3. Make sure all markdown files have valid frontmatter

### GitHub content links not opening?

1. Check browser console (F12) for errors
2. Sign in to GitHub and confirm your account can access the repository

### Domain not working?

1. Wait 10-30 minutes for DNS propagation
2. Verify DNS records in GoDaddy match the guide exactly
3. Check GitHub Pages settings show your domain
4. Run: `nslookup curioushminds.com` to verify

### Images not loading?

1. Make sure images are in `/public/images/` folder
2. Use absolute paths: `/images/comics/my-comic.jpg`
3. Verify images are under 5MB each
4. Check file names don't have spaces (use hyphens instead)

### HTTPS not working?

1. After adding domain, GitHub usually issues cert within 5-10 minutes
2. Go to repo → **Settings** → **Pages**
3. Wait for "Enforce HTTPS" checkbox to appear and check it
4. If it doesn't appear after 20 minutes, try manually removing and re-adding domain

---

## Free Hosting Costs

Your complete setup is **100% free**:

- ✅ **Astro** - Free
- ✅ **GitHub Pages** - Free (with public repo)
- ✅ **GoDaddy Domain** - Only costs as much as you paid for domain

**Total cost**: Just your domain! 🎉

---

## Next Steps

1. ✅ Complete local setup
2. ✅ Push to GitHub
3. ✅ Configure GitHub Pages
4. ✅ Update GoDaddy DNS
5. ✅ Add your content through GitHub
7. 🎉 Share your portfolio!

---

## Need Help?

- **Astro Docs**: https://docs.astro.build
- **GitHub Pages Guide**: https://docs.github.com/en/pages
- **GoDaddy DNS Help**: https://www.godaddy.com/help

Happy creating! 🚀
