const fs = require('fs');
const common = require("../../common");

function text(path, content) {
	const fullPath = common.prepareFullPath(path);
	
	fs.writeFileSync(fullPath, content, 'utf8');
	return true;
}

function bytes(path, bytes) {
	const fullPath = common.prepareFullPath(path);
	
	fs.writeFileSync(fullPath, bytes);
	return true;
}

module.exports = {
	text,
	bytes,
}
