# 🎨 Curious Minds - Personal Portfolio & Publishing Hub

A lightning-fast portfolio and publishing platform built with **Astro** and **GitHub Pages**. Add and edit content directly in the GitHub repository.

**100% Free. 100% Yours. 0% Fuss.**

---

## ✨ Features

- **⚡ Lightning Fast** - Astro generates static HTML for instant load times
- **📱 Fully Responsive** - Beautiful on mobile, tablet, and desktop
- **🎨 Gorgeous Design** - Matches the premium aesthetic of your design mockups
- **📝 GitHub content hub** - `/admin` links directly to the repository folders for adding content.
- **🖼️ Multiple Content Types**:
  - Comics with genre organization
  - Photo galleries with category filters
  - YouTube video embeds
  - Project showcase with tags and links
  - About/bio page
- **🔐 GitHub-Powered** - Content stored in version control, backed up automatically
- **💰 100% Free Hosting** - GitHub Pages (no monthly hosting fees)
- **🌐 Custom Domain** - Use your own domain from GoDaddy
- **🎯 SEO-Friendly** - Meta tags, Open Graph, structured data
- **🌙 Dark Mode Support** - Automatic light/dark theme switching

---

## 🚀 Quick Start (3 Steps)

### 1. **Local Setup** (5 min)
Use Node.js 22.19 or newer and npm 9.6.5 or newer.

```bash
npm ci
npm run dev
# Visit http://localhost:4321
```

### 2. **Push to GitHub** (5 min)
```bash
git push origin main
# The GitHub Actions workflow builds and deploys the site.
```

For the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**.

### 3. **Point Your Domain** (5 min)
- Update GoDaddy DNS records (follow our guide)
- Set custom domain in GitHub Pages
- Visit your site! 🎉

**Total setup time: ~15 minutes**

---

## 📚 Documentation

We've created detailed guides for every step:

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete installation and deployment guide
  - Local development setup
  - GitHub repository configuration
  - GitHub Pages deployment
  - GoDaddy domain setup
  - Adding content through GitHub
  - Troubleshooting

- **[QUICK_START.md](QUICK_START.md)** - Fast reference for publishing
  - How to publish comics, photos, videos, projects
  - File structure reference
  - Markdown formatting tips
  - Quick fixes for common issues

---

## 📁 Project Structure

```
curious-minds/
├── src/
│   ├── layouts/              # Page templates
│   │   └── BaseLayout.astro
│   ├── components/           # Reusable components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── ...
│   ├── pages/               # Routable pages (auto-generates routes)
│   │   ├── index.astro      # Homepage
│   │   ├── comics/
│   │   ├── photos/
│   │   ├── projects/
│   │   ├── videos/
│   │   ├── about/
│   │   └── admin/index.astro # GitHub content links
│   ├── content/             # Markdown content edited through GitHub
│   │   ├── comics/
│   │   ├── photos/
│   │   ├── projects/
│   │   └── videos/
│   └── styles/
│       ├── globals.css
│       └── variables.css
├── public/
│   ├── admin/               # Static admin page is generated from src/pages/admin/
│   ├── images/              # Your content images
│   │   ├── comics/
│   │   ├── photos/
│   │   └── projects/
│   ├── CNAME                # Domain configuration
│   └── favicon.svg
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md (this file)
```

---

## 🎬 Publishing Workflow

Choose your preferred method:

### **Option 1: GitHub Content Hub (Recommended)**

```
1. Go to `https://nirankrishna.in/admin/`
2. Open the content folder you want to update.
3. In GitHub, choose **Add file → Create new file** (or **Upload files** for images).
4. Commit the change to `main`; GitHub Actions builds and deploys it.
```

The commit starts a deployment automatically. Check the repository's **Actions** tab for its status.

### **Option 2: Local Files**

```bash
# Create new comic
cp src/content/comics/example.md src/content/comics/my-comic.md

# Edit with your details, add image to public/images/

# Push to GitHub
git add .
git commit -m "Add comic: My Comic"
git push origin main
# GitHub Pages auto-builds!
```

### **Option 3: GitHub Web Editor**

```
1. Go to GitHub.com
2. Find file in browser
3. Click pencil to edit
4. Make changes
5. Commit directly
6. Auto-builds!
```

---

## 🎯 Content Types

### Comics
- **Genre-organized** (Origin, Adventure, Mystery, Suspense, Horror)
- **Sequential viewer-friendly** layout
- **Featured on homepage** option
- Markdown descriptions

### Photos
- **Category filters** (All, Street, Nature, People, Places)
- **Responsive masonry grid**
- **Full-size image modal** viewing
- Captions and metadata

### Projects
- **Technology tags** (web-design, branding, 3d, etc.)
- **Status tracking** (completed, ongoing, planned)
- **Links to GitHub & demo**
- Featured project showcase

### Videos
- **YouTube embed support** (just add video ID)
- **Category organization** (Process, Animation, Comics, Photography)
- **Duration tracking**
- **Responsive player**

---

## 🛠️ Tech Stack

| Layer | Technology | Why? |
|-------|-----------|------|
| **Framework** | Astro | Static generation, fast builds, content-focused |
| **Content** | Markdown in GitHub | Version-controlled, Git-native, easy to maintain |
| **Hosting** | GitHub Pages | Free, reliable, automatic deploys |
| **Domain** | GoDaddy | You already own it! |
| **Styling** | CSS Variables | Customizable, theme-aware, performant |
| **Icons** | SVG | Scalable, lightweight, customizable |

**Zero vendor lock-in.** Everything is portable — your content is pure Markdown files in GitHub.

---

## 💡 Key Concepts

### Content Collections (Astro)
Content is organized using Astro's Content Collections API. Each piece of content is a Markdown file with frontmatter (metadata):

```markdown
---
title: "Comic Title"
description: "One-liner"
pubDate: 2024-01-15
genre: "adventure"
heroImage: "/images/comics/cover.jpg"
featured: true
---

Your content here in Markdown...
```

### GitHub Content Hub
The `/admin/` page links to the repository folders. GitHub edits are committed to `main` and trigger the Pages workflow.

### GitHub Pages Deployment
Every push to `main` branch:
1. Triggers GitHub Actions build
2. Runs `npm run build` (Astro compiles to static HTML)
3. Deploys to GitHub Pages
4. Updates your domain instantly

---

## ⚙️ Configuration

### Site Metadata
Edit `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourdomain.com', // Your domain here!
  // ... rest of config
});
```

### Colors & Typography
Edit `src/styles/variables.css`:
```css
:root {
  --color-accent: #d4a574;        /* Your brand color */
  --font-display: 'Your Font', serif;
  --color-background: #f5f1ed;
  /* etc */
}
```

### Content Configuration
Collection fields and validation rules live in `src/content.config.ts`.

---

## 🚀 Deployment Checklist

- [ ] Node.js installed locally
- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] CNAME file updated with your domain
- [ ] DNS records updated in GoDaddy
- [ ] Content hub tested at `/admin/`
- [ ] First content published
- [ ] Domain working and site live!

**Need step-by-step help?** See [SETUP_GUIDE.md](SETUP_GUIDE.md)

---

## 📖 Examples

### Markdown Content Format

**Comic:**
```yaml
---
title: "The Windy Forest"
description: "Lost under the red moon..."
pubDate: 2024-01-20
genre: "horror"
heroImage: "/images/comics/windy-forest.jpg"
featured: true
---

# The Windy Forest

Story details, author's notes, behind-the-scenes...
```

**Project:**
```yaml
---
title: "Brand Identity: Dusk Studio"
description: "Full branding for a photography studio"
pubDate: 2024-01-15
tags: [branding, design, identity]
status: completed
image: "/images/projects/dusk-studio.jpg"
github: "https://github.com/..."
demo: "https://dusk-studio.com"
featured: true
---
```

---

## 🎨 Customization

### Add Your Logo
Replace `/public/favicon.svg` with your own SVG.

### Change Colors
Edit CSS variables in `src/styles/variables.css`:
```css
--color-accent: #your-color;
--color-background: #your-bg;
```

### Update Social Links
Edit `src/components/Footer.astro`:
```astro
<a href="https://instagram.com/YOUR_HANDLE">Instagram</a>
```

### Add Custom Fonts
Edit `src/layouts/BaseLayout.astro`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font" rel="stylesheet" />
```

### Modify Layout
All components are in `src/components/` — edit as needed!

---

## 🐛 Troubleshooting

### Build fails in GitHub Actions?
- Check GitHub Actions tab for error messages
- Verify all Markdown files have valid frontmatter
- Make sure image paths start with `/images/`

### GitHub content hub not loading?
- Open `https://nirankrishna.in/admin/` and hard-refresh the page.
- If GitHub asks you to sign in, sign in with an account that can edit the repository.

### Domain not resolving?
- Wait 10-30 minutes for DNS propagation
- Run `nslookup yourdomain.com` to verify
- Check GitHub Pages settings show your custom domain
- Compare GoDaddy DNS records against guide

### Images broken?
- Verify image path starts with `/` (absolute path)
- Make sure image is in `/public/images/`
- Check image filename doesn't have spaces
- Image should be < 5MB

---

## 📞 Support & Resources

- **Astro Documentation**: https://docs.astro.build
- **GitHub Pages Guide**: https://docs.github.com/en/pages
- **GoDaddy Support**: https://www.godaddy.com/help

---

## 📈 Performance

### Build Time
- Development: < 2 seconds
- Production: < 30 seconds

### Page Load
- First Contentful Paint: < 1 second
- Fully Interactive: < 2 seconds
- Lighthouse Score: 95+

All thanks to static generation with Astro! 🚀

---

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Astro | Free | Open-source framework |
| GitHub Pages | Free | Public repository |
| Domain | Your cost | Whatever you paid for yourdomain.com |
| **Total** | **Your domain only** | No additional fees! |

---

## 📄 License

This project is provided as-is. Customize it however you like!

---

## 🎉 What's Next?

1. **Follow [SETUP_GUIDE.md](SETUP_GUIDE.md)** for step-by-step setup
2. **Use [QUICK_START.md](QUICK_START.md)** as your publishing reference
3. **Open `/admin/`** and follow its links to add content on GitHub.
4. **Share your portfolio** and enjoy the creative freedom

---

## 🙌 Credits

Built with:
- ⚡ [Astro](https://astro.build) - Amazing static site framework
- 💙 [GitHub Pages](https://pages.github.com) - Free hosting
- ✨ Your creative mind!

---

**Ready to launch your portfolio?** Start with the [SETUP_GUIDE.md](SETUP_GUIDE.md)! 🚀

Happy creating! 🎨✍️📷🎬
