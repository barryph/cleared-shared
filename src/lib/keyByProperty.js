/**
 * @param {Object[]} arr - arr of objects to key
 * @param {Function} propertySelector - select the property to use as key
 * @returns {Object}
 */
export default function keyByProperty(arr, propertySelector) {
	return arr.reduce((obj, item) => {
		const key = propertySelector(item);
		// eslint-disable-next-line no-param-reassign
		obj[key] = item;
		return obj;
	}, {});
}
