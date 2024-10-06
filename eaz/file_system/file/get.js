const fs = require('fs');
const common = require("../../common");

function size(path = "") {
	const fullPath = common.prepareFullPath(path);
	const stats = fs.lstatSync(fullPath);
	return stats.size;
}

function text(path = "") {
	const fullPath = common.prepareFullPath(path);
	return fs.readFileSync(fullPath, 'utf8');
}

function bytes(path = "") {
	const fullPath = common.prepareFullPath(path);
	return fs.readFileSync(fullPath);
}

module.exports = {
	size,
	text,
	bytes,
}
