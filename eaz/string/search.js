function hasSubstringAt(str, substr, pos) {
	let idx = 0;
	const len = substr.length;
	
	for (const max = str.length; idx < len; ++idx) {
		if ((pos + idx) >= max || str[pos + idx] != substr[idx]) {
			break;
		}
	}
	
	return idx === len;
}

module.exports = {
	hasSubstringAt,
}
