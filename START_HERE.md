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

Comics, projects, and videos use Markdown under `src/content/`. Photos are automatic: upload image files directly under `public/images/photos/`; filenames become titles, and subfolders `street/`, `nature/`, `people/`, or `places/` set photo filters. Open [/admin/](https://nirankrishna.in/admin/) to jump to each GitHub folder. Commit to `main`; GitHub Actions builds and publishes the update.

For comic and project images, upload to `public/images/comics/` or `public/images/projects/` and refer to them in Markdown as `/images/...`.

## Guides

- [SETUP_GUIDE.md](SETUP_GUIDE.md): installation, deployment, and GitHub editing
- [QUICK_START.md](QUICK_START.md): content publishing examples
- [ARCHITECTURE.md](ARCHITECTURE.md): site and deployment flow
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md): launch verification
