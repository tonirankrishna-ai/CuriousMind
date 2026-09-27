# 🚀 Curious Minds Portfolio - Complete Setup Guide

## Table of Contents
1. [Local Development Setup](#local-development-setup)
2. [GitHub Repository Setup](#github-repository-setup)
3. [GitHub Pages Configuration](#github-pages-configuration)
4. [GoDaddy Domain Configuration](#godaddy-domain-configuration)
5. [Decap CMS (Admin Panel) Setup](#decap-cms-admin-panel-setup)
6. [Deployment Workflow](#deployment-workflow)
7. [Content Publishing Workflow](#content-publishing-workflow)
8. [Troubleshooting](#troubleshooting)

---

## Local Development Setup

### Prerequisites
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **GitHub Account** - [Create one](https://github.com/signup)
- **GoDaddy Account** with your domain

### Step 1: Clone & Setup

```bash
# Clone the repository (after you create it on GitHub)
git clone https://github.com/YOUR_USERNAME/curious-minds.git
cd curious-minds

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site live.

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
│   ├── admin/         # Decap CMS admin panel
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
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `/ (root)`
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

The `CNAME` file in `/public` tells GitHub Pages which domain to use:

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

## Decap CMS (Admin Panel) Setup

### What is Decap CMS?

Decap CMS gives you a user-friendly admin dashboard (`/admin`) where you can:
- Add comics, photos, projects, and videos
- Upload images
- Publish content directly to GitHub
- No coding required!

### Step 1: OAuth Setup with GitHub

Decap CMS uses OAuth for authentication. Set up a GitHub OAuth app:

1. Go to GitHub → **Settings** → **Developer settings** → **OAuth Apps**
2. Click **New OAuth App**
3. Fill in:
   - **Application name**: Curious Minds Admin
   - **Homepage URL**: `https://curioushminds.com`
   - **Authorization callback URL**: `https://curioushminds.com/auth/callback`
4. Click **Register application**
5. Copy your **Client ID** (you'll need this)

### Step 2: Update Decap Config

Edit `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/curious-minds  # ← Update
  branch: main
  auth_endpoint: /api/auth
  base_url: https://curioushminds.com  # ← Update
```

### Step 3: Deploy Auth Handler

For GitHub OAuth to work with GitHub Pages, you need a serverless backend. Use **Netlify** (free tier):

**Option A: Deploy to Netlify (Recommended)**

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Go to **Site settings** → **Build & deploy** → **Environment**
6. Add environment variable:
   - **Key**: `GITHUB_CLIENT_ID`
   - **Value**: Your GitHub OAuth Client ID
7. Deploy!

**Option B: Use GitHub's OAuth Alternative**

Use a simpler auth method by installing the Netlify CMS Identity widget:

Edit `public/admin/index.html`:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

Then go to your Netlify site settings and enable **Netlify Identity**.

### Step 4: Access Your Admin Panel

Visit: `https://curioushminds.com/admin/`

You should see a login screen. Use your GitHub credentials to log in.

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

### Method 1: Admin Dashboard (Easiest! 🎉)

1. Visit `https://curioushminds.com/admin/`
2. Log in with GitHub
3. Click the collection (Comics, Photos, Projects, Videos)
4. Click **New [Item]**
5. Fill in the form
6. Click **Publish**

The content automatically creates a file in your GitHub repo and publishes instantly!

### Method 2: Local Content Files (Advanced)

If you prefer direct file management:

1. Create a markdown file in `src/content/[collection]/`
2. Use the correct frontmatter format
3. Commit and push:
   ```bash
   git add src/content/
   git commit -m "Add new comic: title"
   git push origin main
   ```

### Method 3: GitHub Web Editor (Good for Quick Edits)

1. Go to your GitHub repo
2. Navigate to the file you want to edit
3. Click the pencil icon to edit
4. Make changes and commit directly to `main`
5. GitHub Pages auto-rebuilds!

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
- YouTube Video ID (just the ID, e.g., `dQw4w9WgXcQ`)
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

### Admin panel shows blank?

1. Check browser console (F12) for errors
2. Verify OAuth app is set up correctly
3. Make sure Netlify is deployed if using GitHub OAuth

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
- ✅ **Decap CMS** - Free
- ✅ **GoDaddy Domain** - Only costs as much as you paid for domain
- ✅ **Netlify** - Free tier for OAuth handling

**Total cost**: Just your domain! 🎉

---

## Next Steps

1. ✅ Complete local setup
2. ✅ Push to GitHub
3. ✅ Configure GitHub Pages
4. ✅ Update GoDaddy DNS
5. ✅ Set up Decap CMS
6. ✅ Add your content via admin panel
7. 🎉 Share your portfolio!

---

## Need Help?

- **Astro Docs**: https://docs.astro.build
- **Decap CMS Docs**: https://decapcms.org/docs/
- **GitHub Pages Guide**: https://docs.github.com/en/pages
- **GoDaddy DNS Help**: https://www.godaddy.com/help

Happy creating! 🚀
