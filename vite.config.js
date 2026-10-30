import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative asset paths are required so Electron can load the built app via file://.
export default defineConfig({
  base: './',
  plugins: [react()]
});
