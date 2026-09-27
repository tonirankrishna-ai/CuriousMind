# 🎯 Quick Start - Publishing Workflow

## 📝 Publish a Comic (Easiest Way)

### Via GitHub (Recommended)

```
1. Open `/admin/` and click the Comics folder.
2. In GitHub, choose **Add file → Create new file**.
3. Name it `your-comic-name.md` and add the frontmatter and story below.
4. Commit the file to `main`; GitHub Actions will deploy the site.

Use one optimized image per comic page for a vertical, phone-friendly reader. Upload pages into `public/images/comics/` with ordered names such as `story-01.webp`, `story-02.webp`, and so on. Keep the original page proportions and add meaningful alt text.

```markdown
---
title: "The Windy Forest"
description: "A traveler follows a strange sound through the woods."
pubDate: 2026-09-27
genre: "adventure"
heroImage: "/images/comics/story-cover.webp"
featured: true
---

![Page 1: A traveler enters a forest beneath dark clouds.](/images/comics/story-01.webp)

![Page 2: A lantern glows between the trees.](/images/comics/story-02.webp)
```

PDF is not required. You can additionally upload a print-ready PDF under `public/images/comics/` and link it from the Markdown, but keep the page images as the main on-site reading experience.
```

### Via Local File

```bash
# 1. Create a new Markdown file
# Use the frontmatter example above, then add your own title and page images

# 2. Edit the file with your details
# Update frontmatter (title, date, image path, etc)

# 3. Add image to public folder
# Copy your image to: public/images/comics/your-image.jpg

# 4. Push to GitHub
git add .
git commit -m "Add comic: Your Comic Name"
git push origin main
   ✅ Done! Builds automatically!
```

---

## 📷 Publish a Photo

```
1. Open `/admin/` and click the Photos folder.
2. Choose **Add file → Create new file** and add a Markdown entry.
3. Upload the image to `public/images/photos/`.
4. Use an image path starting with `/images/photos/` in the entry.
5. Commit to `main` to publish.
```

---

## 🎬 Publish a Video

```
GitHub:
1. Open `/admin/` and click the Videos folder.
2. Create a Markdown file in `src/content/videos/` with this frontmatter:

```yaml
---
title: "First video"
description: "A short description of the video."
pubDate: 2026-09-27
videoId: "https://www.youtube.com/embed/cZPRtNM55Go?si=tljDxd5gj6vQngCP"
featured: false
---
```

`videoId` accepts the full YouTube embed, watch, or share URL, or the 11-character video ID. The player extracts the ID and embeds it responsively.
```

---

## 🏗️ Publish a Project

```
GitHub:
1. Open `/admin/` and click the Projects folder.
2. Add a Markdown entry with:
   - Title: "Project Name"
   - Description: "What did you build"
   - Tags: web-design, branding, 3d (comma-separated)
   - Status: completed/ongoing/planned
   - Project Image: Upload (optional)
   - GitHub URL: https://github.com/... (optional)
   - Demo URL: https://demo.com (optional)
   - YouTube video URL or ID (optional)
3. Commit to `main` to publish.

Example project frontmatter with an embedded YouTube video:

```yaml
---
title: "Forest Short Film"
description: "A short film made for the project."
pubDate: 2026-09-27
tags:
  - film
  - animation
status: "completed"
videoUrl: "https://www.youtube.com/embed/cZPRtNM55Go?si=tljDxd5gj6vQngCP"
---
```

`videoUrl` is optional. Paste the full YouTube embed, watch, or share URL, or the 11-character video ID. The project page displays it in a responsive player.
```

---

## 📂 File Structure Reference

```
Your Content Lives Here:

Comics:       /src/content/comics/
Photos:       /src/content/photos/
Videos:       /src/content/videos/
Projects:     /src/content/projects/

Images Go Here:
Comics:       /public/images/comics/
Photos:       /public/images/photos/
Projects:     /public/images/projects/
```

---

## 🔄 Publishing Checklist

### Before Publishing Anything:

- [ ] Install Node.js v22.19+ and npm v9.6.5+
- [ ] Run `npm ci`
- [ ] Run `npm run dev` (see it working)
- [ ] Create GitHub repo
- [ ] Push code: `git push origin main`
- [ ] GitHub Pages auto-deploys
- [ ] Wait 5 minutes for DNS
- [ ] Visit your domain
- [ ] Visit `/admin/` to open the GitHub content hub

### Regular Publishing:

**Recommended: GitHub content hub**
- Open `/admin/`, choose a content folder, create or edit a Markdown file.
- Upload images under `public/images/`.
- Commit to `main`; deployment runs automatically.

**Alternative: Local files**
- Create markdown file
- Add image to public/images
- `git add .`
- `git commit -m "message"`
- `git push origin main`
- Auto-deploys!

You can also open files directly in GitHub and use its web editor.

---

## 🎨 Formatting Tips

### Markdown Basics (in Content)

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered
2. List

[Link text](https://example.com)
![Image alt](image-path.jpg)
```

### Image Paths

Always use `/images/` prefix:

```
Wrong: images/comics/my-comic.jpg
Right: /images/comics/my-comic.jpg

Wrong: ../public/images/photo.jpg
Right: /images/photos/photo.jpg
```

---

## 🚀 After Publishing

Your content:
1. Is automatically committed to GitHub
2. Triggers a rebuild (visible in Actions tab)
3. Deploys to your domain instantly
4. Shows up in galleries immediately

No manual deployment needed! 🎉

---

## ❓ Quick Fixes

**GitHub content hub not opening?**
→ Open `https://nirankrishna.in/admin/` and hard-refresh the page
→ GitHub may ask you to sign in before opening repository folders

**Changes not showing?**
→ Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
→ Clear cache: Settings → Clear browsing data
→ Check GitHub Actions for build errors

**Images not loading?**
→ Make sure file is in `/public/images/`
→ Check path starts with `/images/`
→ Verify image filename is lowercase with hyphens
→ Image should be under 5MB

**Domain not working?**
→ Check GitHub Pages settings
→ Verify CNAME file exists
→ Wait 10-30 min for DNS
→ Try `nslookup yourdomain.com`

---

## 📞 Support

- **Astro Questions?** → https://docs.astro.build
- **GitHub Pages?** → https://docs.github.com/en/pages
- **GoDaddy DNS?** → GoDaddy support chat

---

**That's it! You're ready to publish. Happy creating! 🎨**
