import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'; //плагин для инъекции css файла при загрузке библиотеки

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    copyPublicDir: false, // не копировать папку public
    lib: { // настройка для сборки под библиотеку https://vitejs.dev/guide/build.html#library-mode
      entry: resolve(__dirname, 'src/lib.ts'), // точка входа библиотеки
      name: 'lib-origin',
    },
    rollupOptions: { // настройки сборщика rollup
      external: ['react', 'react-dom'], // исключить из библиотки, библиотеки которые уже должны быть установлены в проекте
      output: {
        globals: { // глобальные переменные
          react: 'React'
        }
      }
    }
  }
})
