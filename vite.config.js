import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le `base` correspond au nom du dépôt pour un déploiement GitHub Pages
// (https://alex-inside.github.io/App-Educ-Fi/). Il n'est appliqué qu'au build
// afin de garder le serveur de dev accessible à la racine (http://localhost:5173).
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/App-Educ-Fi/' : '/',
  plugins: [react()],
}))
