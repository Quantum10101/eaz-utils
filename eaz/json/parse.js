function parse(json) {
	return JSON.parse(json, (_, value) => {
		if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
			return new Map(Object.entries(value));
		}
		
		return value;
	});
}

module.exports = parse;
