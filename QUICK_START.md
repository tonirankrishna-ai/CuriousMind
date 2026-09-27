# 🎯 Quick Start - Publishing Workflow

## 📝 Publish a Comic (Easiest Way)

### Via Admin Dashboard (Recommended)

```
1. Go to: https://curioushminds.com/admin/
2. Log in with GitHub
3. Click "Comics" → "New Comic"
4. Fill form:
   - Title: "Your Comic Name"
   - Description: "One-line about the comic"
   - Publish Date: Today
   - Genre: Pick one (origin/adventure/mystery/suspense/horror)
   - Hero Image: Upload your cover
5. Click "Publish"
   ✅ Done! Live instantly!
```

### Via File (If admin doesn't work)

```bash
# 1. Create file
cp src/content/comics/example-comic.md src/content/comics/your-comic-name.md

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
Admin Dashboard:
1. Comics → "Photos" section
2. "New Photo"
3. Fill in:
   - Title: "Photo Name"
   - Description: "What's in the photo"
   - Image: Upload
   - Category: street/nature/people/places
4. Publish
```

---

## 🎬 Publish a Video

```
Admin Dashboard:
1. "Videos" section
2. "New Video"
3. Fill in:
   - Title: "Video Name"
   - Description: "What's the video about"
   - YouTube URL or ID: paste the watch, share, or embed link, or just its 11-character ID
   - Duration: "12 min"
   - Category: process/animation/comics/photography
4. Publish
```

---

## 🏗️ Publish a Project

```
Admin Dashboard:
1. "Projects" section
2. "New Project"
3. Fill in:
   - Title: "Project Name"
   - Description: "What did you build"
   - Tags: web-design, branding, 3d (comma-separated)
   - Status: completed/ongoing/planned
   - Project Image: Upload (optional)
   - GitHub URL: https://github.com/... (optional)
   - Demo URL: https://demo.com (optional)
4. Publish
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
- [ ] Run `npm install`
- [ ] Run `npm run dev` (see it working)
- [ ] Create GitHub repo
- [ ] Push code: `git push origin main`
- [ ] GitHub Pages auto-deploys
- [ ] Wait 5 minutes for DNS
- [ ] Visit your domain
- [ ] Visit `/admin` to test Decap CMS

### Regular Publishing:

**Option 1 (Easiest - Recommended):**
- Use admin dashboard at `/admin`
- Fill form, click publish
- Done!

**Option 2 (Via Files):**
- Create markdown file
- Add image to public/images
- `git add .`
- `git commit -m "message"`
- `git push origin main`
- Auto-deploys!

**Option 3 (GitHub Web Editor):**
- Go to GitHub.com
- Edit file in browser
- Commit directly
- Auto-deploys!

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

**Admin panel blank?**
→ Clear browser cache (Ctrl+Shift+Del)
→ Try incognito window
→ Check browser console (F12) for errors

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
- **Decap CMS Help?** → https://decapcms.org/docs/
- **GitHub Pages?** → https://docs.github.com/en/pages
- **GoDaddy DNS?** → GoDaddy support chat

---

**That's it! You're ready to publish. Happy creating! 🎨**
