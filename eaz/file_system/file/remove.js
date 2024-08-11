const fs = require('fs');
const pathToScript = require("../path_to_script");

function remove(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	
	try {
		fs.unlinkSync(path);
	}
	catch (err) {
		if (err.code === 'ENOENT') return false;
		throw err;
	}
	
	return true;
}

module.exports = remove;
