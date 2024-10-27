function filterMapByValues(original, valuesToRetain) {
	return new Map(
		[...original].filter(([_, value]) => valuesToRetain.has(value))
	);
}

module.exports = filterMapByValues;
