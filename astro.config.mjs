import { defineConfig } from 'astro/config';

export default defineConfig({
  // For GitHub Pages with custom domain
  site: 'https://curioushminds.com', // Replace with your domain
  
  // GitHub Pages requires 'gh-pages' if no custom domain, or root if custom domain
  // Since you're using a custom domain, build to root
  output: 'static',
  
  // Content Collections configuration
  integrations: [],
  
  // Build optimization
  vite: {
    ssr: {
      external: ['sharp'],
    },
  },
  
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
