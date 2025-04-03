import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import typescriptPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import dotenv from 'dotenv';

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescriptPaths(),
    checker({
      overlay: false,
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
    svgr(),
  ],
});
