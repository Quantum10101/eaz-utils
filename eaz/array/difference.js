// For every given value, removes the number of duplicates in parameter a that exist in parameter b
function difference(a, b) {
	const bCounts = {};
	for (const element of b) {
		bCounts[element] = (bCounts[element] || 0) + 1;
	}
	const result = [];
	for (const element of a) {
		if (bCounts[element]) {
			bCounts[element]--;
		} else {
			result.push(element);
		}
	}
	return result;
}

module.exports = difference;
