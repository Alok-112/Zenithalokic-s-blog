import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'public', // Specify the output directory
  },
  plugins: [react()]
});
