import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/', import.meta.url)),

      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),

      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),

      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    },
  },
});
