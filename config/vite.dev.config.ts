import { defineConfig } from 'vite'
import { svgPlugin } from 'vite-plugin-fast-react-svg'

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	server: {
		port: 18300,
		host: '0.0.0.0',
		hmr: false,
	},
	build: {
		target: 'es2015',
	},
	plugins: [tsconfigPaths(), react(), svgPlugin()],
})
