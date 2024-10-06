const fs = require('fs');
const common = require("../../common");

function text(path, content) {
	const fullPath = common.prepareFullPath(path);
	fs.appendFileSync(fullPath, content, 'utf8');
	return true;
}

function textLine(path, content) {
	const fullPath = common.prepareFullPath(path);
	fs.appendFileSync(fullPath, content + '\n', 'utf8');
	return true;
}

function bytes(path, bytes) {
	const fullPath = common.prepareFullPath(path);
	fs.appendFileSync(fullPath, bytes);
	return true;
}

module.exports = {
	text,
	textLine,
	bytes,
}
