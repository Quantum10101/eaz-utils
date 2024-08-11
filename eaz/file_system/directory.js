const fs = require('fs');
const pathToScript = require("./path_to_script");

function create(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	const result = fs.mkdirSync(path, { recursive: true });
	if (result === undefined) return false;
	return true;
}

function remove(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	
	try {
		fs.rmdirSync(path);
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
