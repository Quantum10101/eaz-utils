// Preserves all duplicate values and behaves exactly like array concatenation
function union(...arrays) {
	return arrays.flat();
}

module.exports = union;
