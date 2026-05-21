// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		css: {
			transformer: 'lightningcss'
		}
	},
	fonts: [{
    provider: fontProviders.fontsource(),
    name: "Atkinson Hyperlegible Next",
    cssVariable: "--atk-next",
  },
	{
		provider: fontProviders.fontsource(),
		name: "Atkinson Hyperlegible Mono",
		cssVariable: "--atk-mono",
	}],
	site: 'https://iprobablydontknowwhatimdoing.github.io',
	base: '/english-project',
	build: {
		inlineStylesheets: 'always',
	}
});
