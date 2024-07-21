const fs = require('fs');
const pathToScript = require("./path_to_script");

function files(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	return fs.readdirSync(path).filter(x => fs.statSync(`${path}/${x}`).isDirectory() === false);
}

function directories(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	return fs.readdirSync(path).filter(x => fs.statSync(`${path}/${x}`).isDirectory() === true);
}

function entities(relativePath = "") {
	const path = pathToScript.directory(1) + "/" + relativePath;
	return fs.readdirSync(path);
}

module.exports = {
	files,
	directories,
	entities,
}
