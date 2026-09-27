# Start Here: Curious Mind

The Astro site is ready for local development and static deployment. It includes the home, comics, photos, projects, videos, about, and GitHub content hub routes.

## Requirements

- Node.js 22.19 or newer
- npm 9.6.5 or newer

Check your versions with `node --version` and `npm --version`. On Windows, install a current Node.js 22 LTS release from [nodejs.org](https://nodejs.org/).

## Run Locally

From the repository root:

```bash
npm ci
npm run dev
```

Open `http://localhost:4321/`. Build the static site with `npm run build`; the output is written to `dist/`.

## Publish the Site

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the deployment source. The custom domain is configured as `nirankrishna.in` in `CNAME` and `public/CNAME`.

## Manage Content

Content lives in `src/content/comics/`, `photos/`, `projects/`, and `videos/`. Collection schemas are in `src/content.config.ts`. Open [/admin/](https://nirankrishna.in/admin/) and choose a GitHub folder, or go directly to the repository. Use **Add file → Create new file** to add Markdown, or **Add file → Upload files** to upload images. Commit to `main`; GitHub Actions builds and publishes the update.

For images, upload to `public/images/comics/`, `public/images/photos/`, or `public/images/projects/`. In Markdown, refer to the image as `/images/...`.

## Guides

- [SETUP_GUIDE.md](SETUP_GUIDE.md): installation, deployment, and GitHub editing
- [QUICK_START.md](QUICK_START.md): content publishing examples
- [ARCHITECTURE.md](ARCHITECTURE.md): site and deployment flow
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md): launch verification
