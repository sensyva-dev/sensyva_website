import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY;
  const isGithubPages = Boolean(process.env.GITHUB_ACTIONS && repository);
  const base = isGithubPages ? `/${repository!.split('/')[1]}/` : '/';

  return {
    base,
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
  };
});
