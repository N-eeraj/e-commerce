import path from 'path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@router': path.resolve(__dirname, './src/router'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@components': path.resolve(__dirname, './src/components'),
      '@skeletons': path.resolve(__dirname, './src/components/skeletons'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@api': path.resolve(__dirname, './src/hooks/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@customTypes': path.resolve(__dirname, './src/types'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/e-commerce/' : '/',
})
