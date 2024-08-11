const fs = require('fs');
const pathToScript = require("../path_to_script");

function size(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	const stats = fs.lstatSync(path);
	return stats.size;
}

function text(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	return fs.readFileSync(path, 'utf8');
}

function bytes(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	return fs.readFileSync(path);
}

module.exports = {
	size,
	text,
	bytes,
}
