import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/To-doList/', // Correctly set the base path
  plugins: [react()],  // Include the React plugin
});
