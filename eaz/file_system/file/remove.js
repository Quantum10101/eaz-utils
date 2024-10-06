const fs = require('fs');
const common = require("../../common");

function remove(path = "") {
	const fullPath = common.prepareFullPath(path);
	
	try {
		fs.unlinkSync(fullPath);
	}
	catch (err) {
		if (err.code === 'ENOENT') return false;
		throw err;
	}
	
	return true;
}

module.exports = remove;
