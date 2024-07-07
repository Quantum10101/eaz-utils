function union(...arrays) {
	return [...new Set(arrays.flat())];
}

module.exports = union;
