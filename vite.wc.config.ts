import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
	plugins: [react()],
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/web-components.tsx'),
			name: 'WebComponents',
			fileName: 'web-components',
			formats: ['es', 'umd'],
		},
		outDir: 'dist/wc',
		rollupOptions: {
			// We bundle React to make it a standalone drop-in.
			external: [],
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				loadPaths: ['node_modules'],
			},
		},
	},
});
