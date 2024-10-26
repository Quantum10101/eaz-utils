// Ensures that each element is included in the result at least as many times as it appears in every given array (duplicates preserved based on minimum count)
function intersect(...arrays) {
	if (arrays.length === 0) return [];
	
	// Build an array of maps, each mapping element to its count in the array
	const countsArray = arrays.map(arr => {
		const counts = new Map();
		for (let value of arr) {
			counts.set(value, (counts.get(value) || 0) + 1);
		}
		return counts;
	});
	
	// Get the set of elements present in all arrays
	let commonElements = new Set(countsArray[0].keys());
	for (let i = 1; i < countsArray.length; i++) {
		const counts = countsArray[i];
		commonElements = new Set([...commonElements].filter(value => counts.has(value)));
	}
	
	// For each common element, find the minimum count across all arrays
	const result = [];
	for (let value of commonElements) {
		let minCount = Infinity;
		for (let counts of countsArray) {
			minCount = Math.min(minCount, counts.get(value));
		}
		for (let i = 0; i < minCount; i++) {
			result.push(value);
		}
	}
	
	return result;
}

module.exports = intersect;
