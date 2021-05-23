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
const entryArray = glob.sync('src/**/*.+(js|jsx|ts|tsx)');

function hasExtension(path, extensions) {
	return extensions.find((ext) => path.endsWith(ext));
}

/** Object of entry points */
const entryObject = entryArray.reduce((acc, name) => {
	const ext = hasExtension(name, ['.js', '.tsx']);
	if (ext) {
		acc[name.replace('src/', '').replace(ext, '')] = `./${name}`;
	}
	return acc;
}, {});

module.exports = entryObject;
