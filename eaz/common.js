const os = require("os");
const pathToScript = require("./file_system/path_to_script");

export function prepareFullPath(path) {
	let fullPath = path;
	
	if (["/", "~"].includes(path[0]) === false) {
		fullPath = pathToScript.directory(2) + "/" + path;
	}
	
	if (path[0] === "~") {
		fullPath = os.homedir() + fullPath.slice(1);
	}
	
	return fullPath;
}
