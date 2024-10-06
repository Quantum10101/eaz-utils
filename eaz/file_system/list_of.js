const fs = require('fs');
const common = require("../common");

function files(path = "") {
	const fullPath = common.prepareFullPath(path);
	return fs.readdirSync(fullPath).filter(x => fs.statSync(`${fullPath}/${x}`).isDirectory() === false);
}

function directories(path = "") {
	const fullPath = common.prepareFullPath(path);
	return fs.readdirSync(fullPath).filter(x => fs.statSync(`${fullPath}/${x}`).isDirectory() === true);
}

function entities(path = "") {
	const fullPath = common.prepareFullPath(path);
	return fs.readdirSync(fullPath);
}

module.exports = {
	files,
	directories,
	entities,
}
