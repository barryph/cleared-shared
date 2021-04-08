module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		jest: true,
	},
	extends: [
		'airbnb-base',
	],
	plugins: [
		'react',
	],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'import/no-extraneous-dependencies': ['error', { 'packageDir': './' }],
		'quote-props': 'off',
		'max-len': 'off',
		'no-plusplus': 'off',
		'implicit-arrow-linebreak': 'off',

		// React
		'class-methods-use-this': 'off',
		'no-prototype-builtins': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		// Doesn't mix well with jsx
		'newline-per-chained-call': 'off',
	},
	parserOptions: {
		'ecmaFeatures': {
			'jsx': true,
		},
	},
};
