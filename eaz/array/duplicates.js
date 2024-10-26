function duplicates(arr) {
	const counts = {};
	
	// First pass: count occurrences
	for (const item of arr) {
		counts[item] = (counts[item] || 0) + 1;
	}
	
	// Second pass: collect elements that occur more than once
	const result = [];
	for (const item of arr) {
		if (counts[item] > 1) {
			result.push(item);
		}
	}
	
	return result;
}

module.exports = duplicates;
