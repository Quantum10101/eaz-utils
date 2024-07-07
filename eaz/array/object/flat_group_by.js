const convertTo = require("./convert_to");

function flatGroupBy(objArr, key) {
	// return mapValues(groupBy(objArr, x => x[key]), x => x![0]); // x[key] doesn't work
	return convertTo.flatKeyedObjects(objArr, key);
}

module.exports = flatGroupBy;
