function intersect(...sets) {
	if (sets.length === 0) {
		return new Set();
	}
	
	// Start with the smallest set to optimize performance
	const [smallestSet, ...otherSets] = sets.sort((a, b) => a.size - b.size);
	
	return new Set(
		[...smallestSet].filter(element =>
			otherSets.every(set => set.has(element))
		)
	);
}

module.exports = intersect;
