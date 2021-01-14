import vue from '@vitejs/plugin-vue'
import voie from 'vite-plugin-voie'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(), voie()]
}
