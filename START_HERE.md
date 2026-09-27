# Start Here: Curious Mind

The Astro site is ready for local development and static deployment. It includes the home, comics, photos, projects, videos, about, and CMS routes.

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

Content lives in `src/content/comics/`, `photos/`, `projects/`, and `videos/`. Collection schemas are in `src/content.config.ts`. Add or edit Markdown entries and push to `main` to publish them.

The CMS interface is at `/admin/` and is configured for `tonirankrishna-ai/CuriousMind`. GitHub Pages is static and cannot perform OAuth itself; CMS publishing needs a separately configured OAuth bridge. Keep its client secret in the provider's secret store, not in this repository. Until that bridge is configured, edit content locally or through GitHub's web editor.

## Guides

- [SETUP_GUIDE.md](SETUP_GUIDE.md): installation, deployment, and OAuth requirements
- [QUICK_START.md](QUICK_START.md): content publishing examples
- [ARCHITECTURE.md](ARCHITECTURE.md): site and deployment flow
- [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md): launch verification
