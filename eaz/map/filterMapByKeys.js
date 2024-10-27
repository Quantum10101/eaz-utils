function filterMapByKeys(original, keysToRetain) {
	return new Map(
		[...original].filter(([key]) => keysToRetain.has(key))
	);
}

module.exports = filterMapByKeys;
