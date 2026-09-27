# ✅ Pre-Launch Deployment Checklist

Use this checklist to ensure everything is set up correctly before going live.

---

## Phase 1: Local Setup (15 minutes)

### Prerequisites
- [ ] Node.js v22.19+ installed (`node --version`)
- [ ] npm v9.6.5+ installed (`npm --version`)
- [ ] Git installed (`git --version`)
- [ ] GitHub account created and logged in
- [ ] GoDaddy account with your domain
- [ ] Code editor ready (VS Code recommended)

### Initial Setup
- [ ] Clone repository or create new directory
- [ ] Run `npm install`
- [ ] Verify no errors during installation
- [ ] Run `npm run dev`
- [ ] Visit `http://localhost:4321` and see homepage
- [ ] Check all navigation links work
- [ ] Try admin panel at `http://localhost:4321/admin/`

### Configuration
- [ ] Update `astro.config.mjs` with your domain
  - Find: `site: 'https://curioushminds.com'`
  - Replace with: `site: 'https://YOURDOMAIN.com'`
- [ ] Update `CNAME` file with your domain
  - Find: `curioushminds.com`
  - Replace with: `YOURDOMAIN.com`
- [ ] Update color scheme in `src/styles/variables.css` (optional)
- [ ] Update social links in `src/components/Footer.astro`
- [ ] Update email in `src/pages/index.astro` and `src/pages/about/index.astro`
- [ ] Update your name/bio in `src/pages/about/index.astro`

### Local Testing
- [ ] Build locally: `npm run build`
- [ ] Check `dist/` folder was created
- [ ] Preview build: `npm run preview`
- [ ] Visit `http://localhost:4321` and verify it still works
- [ ] All pages load correctly
- [ ] No 404 errors
- [ ] Mobile responsive (test with F12 → toggle device)

---

## Phase 2: GitHub Setup (10 minutes)

### Create Repository
- [ ] Go to https://github.com/new
- [ ] Repository name: `curious-minds`
- [ ] Description: "Personal portfolio and publishing hub"
- [ ] Visibility: **Public** (required for free GitHub Pages)
- [ ] Do NOT check "Initialize with README" (we have one)
- [ ] Click "Create repository"

### Initial Commit
- [ ] In terminal, navigate to your project
- [ ] Run: `git init`
- [ ] Run: `git add .`
- [ ] Run: `git commit -m "Initial commit: portfolio setup"`
- [ ] Run: `git branch -M main`
- [ ] Copy the push command from GitHub (should be like below)
- [ ] Run: `git remote add origin https://github.com/YOUR_USERNAME/curious-minds.git`
- [ ] Run: `git push -u origin main`
- [ ] Verify code appears on GitHub.com

### Verify GitHub Pages Setup
- [ ] Go to repository Settings
- [ ] Click "Pages" in left sidebar
- [ ] Under "Build and deployment":
   - [ ] Source: Select "GitHub Actions"
- [ ] Click "Save"
- [ ] You should see a message: "Your site is ready to be published..."

---

## Phase 3: Domain Configuration (10 minutes)

### Update GoDaddy DNS Records

1. **Log in to GoDaddy**
   - [ ] Go to godaddy.com
   - [ ] Click "Account" → "My Products"
   - [ ] Find your domain → Click it

2. **Access DNS Settings**
   - [ ] Click "DNS"
   - [ ] Find "A Records" and "CNAME Records" sections

3. **Update/Create A Records** (point apex domain)
   - [ ] Update or create these A records:
     ```
     Name: @
     Type: A
     Value: 185.199.108.153
     TTL: 600
     ```
   - [ ] Add second A record:
     ```
     Name: @
     Type: A
     Value: 185.199.109.153
     TTL: 600
     ```
   - [ ] Add third A record:
     ```
     Name: @
     Type: A
     Value: 185.199.110.153
     TTL: 600
     ```
   - [ ] Add fourth A record:
     ```
     Name: @
     Type: A
     Value: 185.199.111.153
     TTL: 600
     ```
   
4. **Add/Update AAAA Records** (IPv6)
   - [ ] Add AAAA record:
     ```
     Name: @
     Type: AAAA
     Value: 2606:50c0:8000::153
     TTL: 600
     ```
   - [ ] Add AAAA record:
     ```
     Name: @
     Type: AAAA
     Value: 2606:50c0:8001::153
     TTL: 600
     ```
   - [ ] Add AAAA record:
     ```
     Name: @
     Type: AAAA
     Value: 2606:50c0:8002::153
     TTL: 600
     ```
   - [ ] Add AAAA record:
     ```
     Name: @
     Type: AAAA
     Value: 2606:50c0:8003::153
     TTL: 600
     ```

5. **Update CNAME Record** (www subdomain)
   - [ ] Find CNAME record with name `www`
   - [ ] If exists, update value to: `YOUR_USERNAME.github.io`
   - [ ] If doesn't exist, create:
     ```
     Name: www
     Type: CNAME
     Value: YOUR_USERNAME.github.io
     TTL: 600
     ```

6. **Save and Verify**
   - [ ] All changes saved in GoDaddy
   - [ ] Click "Save" if prompted
   - [ ] Wait 10-30 minutes for DNS propagation

### Verify DNS Changes
- [ ] Open terminal
- [ ] Run: `nslookup YOURDOMAIN.com`
- [ ] Should show GitHub's IP addresses (185.199...)
- [ ] Run: `nslookup www.YOURDOMAIN.com`
- [ ] Should show GitHub's IP addresses or CNAME

### Set Custom Domain in GitHub Pages
- [ ] Go to repository Settings
- [ ] Click "Pages"
- [ ] Under "Custom domain", enter: `YOURDOMAIN.com`
- [ ] Leave www option unchecked (GitHub handles it)
- [ ] Click "Save"
- [ ] GitHub will check DNS configuration
- [ ] Wait for green checkmark (may take 1-5 minutes)
- [ ] Check "Enforce HTTPS" checkbox
- [ ] Wait for HTTPS certificate (usually 5-10 minutes)

---

## Phase 4: GitHub Actions Verification (5 minutes)

### Check Build Status
- [ ] Go to your repository on GitHub.com
- [ ] Click "Actions" tab
- [ ] You should see a workflow running or completed
- [ ] Click on the latest workflow run
- [ ] Verify it shows "✅ All checks have passed"
- [ ] Click "build" step and check for errors (should be none)
- [ ] Wait for "Deployment" step to complete successfully

### Test Your Site
- [ ] Wait 5 minutes from GitHub Pages setup
- [ ] Visit `https://YOURDOMAIN.com` in browser
- [ ] Homepage should load
- [ ] Check browser console (F12) for errors (should be none)
- [ ] Try navigation: Comics, Photos, Projects, Videos, About
- [ ] Test mobile view (F12 → toggle device toolbar)
- [ ] Check that favicon loads
- [ ] Visit `/admin` - Decap CMS should load (may show login)

---

## Phase 5: Decap CMS Setup (15 minutes)

The CMS UI loads from `/admin/`. Publishing through GitHub requires a separately deployed OAuth bridge; keep its client secret out of this repository.

### Create GitHub OAuth Application

1. **Go to GitHub OAuth Settings**
   - [ ] Visit github.com
   - [ ] Click your profile → Settings
   - [ ] Click "Developer settings" (left sidebar)
   - [ ] Click "OAuth Apps"
   - [ ] Click "New OAuth App"

2. **Fill OAuth Form**
   - [ ] Application name: `Curious Minds Admin`
   - [ ] Homepage URL: `https://YOURDOMAIN.com`
   - [ ] Authorization callback URL: use the callback URL supplied by your OAuth bridge
   - [ ] Leave "Authorization callback URL description" blank
   - [ ] Check: "Request user authorization (OAuth) during installation"
   - [ ] Click "Register application"

3. **Copy Credentials**
   - [ ] Copy **Client ID** (you'll need this)
   - [ ] Click "Generate a new client secret"
   - [ ] Copy **Client Secret** (keep this safe!)

4. **Update Decap Config** (Option A: with Netlify)
   - [ ] If using Netlify for auth, continue to Phase 6
   
   Or **Update Decap Config** (Option B: Simple Auth)
   - [ ] Go to `public/admin/config.yml`
   - [ ] Find `backend:` section
   - [ ] Replace with your info:
     ```yaml
     backend:
       name: github
       repo: YOUR_USERNAME/curious-minds
       branch: main
          auth_endpoint: YOUR_PROVIDER_AUTH_ENDPOINT
          base_url: https://YOUR_OAUTH_SERVICE
     ```

---

## Phase 6: Verify CMS Publishing

- [ ] Configure the OAuth bridge using that provider's current Decap CMS instructions.
- [ ] Set the provider callback URL and secret outside the repository.
- [ ] Set `base_url` and `auth_endpoint` in `public/admin/config.yml`.
- [ ] Sign in at `/admin/`, create a draft entry, and verify the commit appears in the GitHub repository.

---

## Phase 7: Test Admin Panel (5 minutes)

### Access Admin Dashboard
- [ ] Visit `https://YOURDOMAIN.com/admin/`
- [ ] You should see Decap CMS login screen
- [ ] Click "Login with GitHub"
- [ ] Authorize the application when prompted
- [ ] You should see admin dashboard with collections

### Test Creating Content
- [ ] Click "Comics" → "New Comic"
- [ ] Fill in test data:
  - Title: "Test Comic"
  - Description: "This is a test"
  - Date: Today
  - Genre: "adventure"
- [ ] Click "Save" (not publish yet - just save as draft)
- [ ] Click "Publish"
- [ ] You should see "Entry published" message
- [ ] Go to website and check Comics page
- [ ] Your test comic should appear!
- [ ] Delete test comic (click it, then delete)

---

## Phase 8: Final Verification (10 minutes)

### Site Functionality
- [ ] Homepage loads quickly
- [ ] Navigation works (Comics, Photos, Projects, Videos, About)
- [ ] All links are blue/highlighted appropriately
- [ ] Footer is visible with social links
- [ ] Colors match your design
- [ ] Typography looks correct
- [ ] Images load (even if just placeholder)
- [ ] Responsive design works on mobile (F12)
- [ ] No console errors (F12 → Console tab)

### Admin Panel
- [ ] Admin panel accessible at `/admin/`
- [ ] Can log in with GitHub
- [ ] Collections visible (Comics, Photos, Projects, Videos)
- [ ] Can create new entries
- [ ] Can upload images
- [ ] Can publish content
- [ ] Published content appears on website

### Performance
- [ ] Homepage loads in < 2 seconds
- [ ] Lighthouse score > 90 (run with F12)
- [ ] No "mixed content" warnings
- [ ] HTTPS lock icon shows in address bar

### Domain & Security
- [ ] Domain resolves correctly
- [ ] HTTPS works (https:// in address bar)
- [ ] Green lock icon visible
- [ ] No warnings about certificates
- [ ] Both YOURDOMAIN.com and www.YOURDOMAIN.com work
- [ ] DNS records verified with `nslookup` command

---

## Phase 9: Ready to Launch! 🚀

All checks passed? You're ready to go live!

### Do This Before Announcing
- [ ] Personalize "About" page with your info
- [ ] Update social links in footer
- [ ] Add one sample comic, photo, or project
- [ ] Test that sample content displays correctly
- [ ] Proofread all text for typos

### Announcement Checklist
- [ ] Share link on social media
- [ ] Send to friends and family
- [ ] Add to email signature
- [ ] Update LinkedIn profile
- [ ] Post on dev.to, Medium, or similar
- [ ] Add to portfolio sites

### Ongoing Maintenance
- [ ] Publish new content regularly
- [ ] Check GitHub Actions for failed builds
- [ ] Update bio/links as needed
- [ ] Monitor for broken links
- [ ] Share your work! 🎉

---

## 🆘 Troubleshooting

### Site not loading?
- [ ] Check GitHub Pages Settings shows your domain
- [ ] Verify DNS records in GoDaddy match guide exactly
- [ ] Wait 10-30 min for DNS propagation
- [ ] Try clearing browser cache (Ctrl+Shift+Del)
- [ ] Check GitHub Actions for build errors

### Admin panel blank?
- [ ] Clear browser cache
- [ ] Try incognito window
- [ ] Check browser console for errors (F12)
- [ ] Verify GitHub OAuth app is created correctly
- [ ] If using Netlify, verify environment variables are set

### Images not loading?
- [ ] Verify image is in `/public/images/`
- [ ] Check path in markdown starts with `/`
- [ ] Image should be < 5MB
- [ ] Filename should be lowercase with hyphens (no spaces)

### Domain showing "parked" page?
- [ ] DNS hasn't propagated yet (wait 30 minutes)
- [ ] A records and CNAME might be conflicting (remove old records)
- [ ] Check GitHub Pages settings show your domain
- [ ] Run `nslookup YOURDOMAIN.com` to verify

---

## 📞 Need Help?

If you get stuck:

1. **Check the guides:**
   - SETUP_GUIDE.md - Detailed instructions
   - QUICK_START.md - Quick reference
   - ARCHITECTURE.md - How everything works

2. **Check documentation:**
   - Astro: https://docs.astro.build
   - Decap CMS: https://decapcms.org/docs/
   - GitHub Pages: https://docs.github.com/en/pages
   - GoDaddy Support: https://www.godaddy.com/help

3. **Common issues:**
   - Slow DNS propagation (wait 30 minutes)
   - Cache issues (clear browser cache)
   - OAuth misconfiguration (verify GitHub app)

---

## ✨ Congratulations!

You now have a professional, fast, and free portfolio site. 

**Your site is:**
- ✅ Lightning fast (static HTML)
- ✅ Fully customizable (all open source)
- ✅ Easy to update (admin panel)
- ✅ Beautifully designed
- ✅ SEO optimized
- ✅ Mobile friendly
- ✅ Secure (GitHub + HTTPS)

Now go create and share amazing work! 🚀🎨

---

**Last updated:** 2024 | **Status:** Ready to deploy ✅
