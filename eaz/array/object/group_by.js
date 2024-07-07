const convertTo = require("./convert_to");

function groupBy(objArr, key) {
	// return groupBy(objArr, x => x[key]); // x[key] doesn't work
	return convertTo.keyedObjects(objArr, key);
}

module.exports = groupBy;
