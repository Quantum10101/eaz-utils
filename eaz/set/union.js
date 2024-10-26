function union(...sets) {
	return new Set([].concat(...sets.map(set => Array.from(set))));
}

module.exports = union;
