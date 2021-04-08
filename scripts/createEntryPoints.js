/**
 * Create entry object for webpack
 * @module
 * @example {
 *  'util/dateTime.js': './src/util/dateTime.js',
 *  'util/errors.js': './src/util/errors.js'
 * }
 */

const glob = require('glob');

// const entryArray = glob.sync('src/{!(types), **}/{!(types.js|test.js), *.js}');
const entryArray = glob.sync('src/**/*.js');

/** Object of entry points */
const entryObject = entryArray.reduce((acc, item) => {
	const name = item;
	if (name.includes('.js')) {
		acc[name.replace('src/', '').replace('.js', '')] = `./${item}`;
	}
	return acc;
}, {});

module.exports = entryObject;
