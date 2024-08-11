const fs = require('fs');
const pathToScript = require("../path_to_script");

function text(relativePath, content) {
	const path = pathToScript.directory(1) + "/" + relativePath;
	fs.writeFileSync(path, content, 'utf8');
	return true;
}

function bytes(relativePath, bytes) {
	const path = pathToScript.directory(1) + "/" + relativePath;
	fs.writeFileSync(path, bytes);
	return true;
}

module.exports = {
	text,
	bytes,
}
