const fs = require('fs');
const common = require("../common");

function create(path = "") {
	const fullPath = common.prepareFullPath(path);
	
	const result = fs.mkdirSync(fullPath, { recursive: true });
	if (result === undefined) return false;
	return true;
}

function remove(path = "") {
	const fullPath = common.prepareFullPath(path);
	
	try {
		fs.rmdirSync(fullPath);
	}
	catch (err) {
		if (err.code === 'ENOENT') return false;
		throw err;
	}
	
	return true;
}

module.exports = {
	create,
	remove,
}
