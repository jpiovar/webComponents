import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
			tsconfigPath: './tsconfig.build.json',
			outDir: 'dist/types',
			rollupTypes: true,
		}),
	],
	define: {
		'process.env.NODE_ENV': JSON.stringify('production'),
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'WebComponents',
			formats: ['es', 'umd'],
			// fileName: (format) => `web-components.${format}.js`,
		},
		outDir: 'dist/wc',
		rollupOptions: {
			// We bundle React to make it a standalone drop-in.
			external: [],
			output: [
				{
					format: 'es',
					entryFileNames: 'web-components.es.js',
				},
				{
					format: 'umd',
					name: 'WebComponents',
					entryFileNames: 'web-components.umd.js',
				},
				{
					format: 'umd',
					name: 'WebComponents',
					entryFileNames: 'web-components.js', // ← alias
				},
			],
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
