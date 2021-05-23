const path = require('path');
const createEntryPoints = require('./scripts/createEntryPoints');

const BUILD_PATH = path.join(__dirname, 'dist');

module.exports = {
	entry: {
		...createEntryPoints,
	},
	output: {
		path: BUILD_PATH,
		publicPath: BUILD_PATH,
		libraryTarget: 'umd',
		// Fixes for hotloading
		library: '[name]',
		umdNamedDefine: false,
		globalObject: 'this',
		chunkFilename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
};
