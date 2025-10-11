import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY;
  const isGithubPages = Boolean(process.env.GITHUB_ACTIONS && repository);
  const isCustomDomain = Boolean(process.env.CUSTOM_DOMAIN);
  
  // For custom domains, use root path. For GitHub Pages subdomain, use repository path
  const base = isCustomDomain ? '/' : (isGithubPages ? `/${repository!.split('/')[1]}/` : '/');

  return {
    base,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
