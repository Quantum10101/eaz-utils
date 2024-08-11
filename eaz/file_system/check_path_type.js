const fs = require('fs');
const PathType = require("./path_type");
const pathToScript = require("./path_to_script");

function checkPathType(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	
	try {
		const stats = fs.lstatSync(path);
		if (stats.isDirectory()) {
			return PathType.DIRECTORY;
		}
		else if (stats.isFile()) {
			return PathType.FILE;
		}
		else if (stats.isSymbolicLink()) {
			return PathType.SYMBOLIC_LINK;
		}
		else if (stats.isBlockDevice()) {
			return PathType.BLOCK_DEVICE;
		}
		else if (stats.isCharacterDevice()) {
			return PathType.CHARACTER_DEVICE;
		}
		else if (stats.isFIFO()) {
			return PathType.FIFO;
		}
		else if (stats.isSocket()) {
			return PathType.SOCKET;
		}
		else {
			return PathType.OTHER;
		}
	}
	catch (err) {
		if (err.code === 'ENOENT') {
			return PathType.DOES_NOT_EXIST;
		}
		else {
			throw err;
		}
	}
}

module.exports = checkPathType;
