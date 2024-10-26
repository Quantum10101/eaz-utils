function difference(a, b) {
	const result = new Set(a);
	
	for (const elem of b) {
		result.delete(elem);
	}
	
	return result;
}

module.exports = difference;
