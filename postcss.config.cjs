const postcssPresetEnv = require('postcss-preset-env');
module.exports = {
	plugins: [
		require('css-if-polyfill'),
		require('cssnano'),
		postcssPresetEnv({
			stage: 0,
			enableClientSidePolyfill: true,
			features: {
				'random-function': true,
			}
		}),
	]
}