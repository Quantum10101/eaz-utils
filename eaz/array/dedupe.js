function dedupe(...arrays) {
	return [...new Set(arrays.flat())];
}

module.exports = dedupe;
