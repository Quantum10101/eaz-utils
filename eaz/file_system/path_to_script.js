function file() {
	// Sadly, we cannot use import.meta.url because it will return the file path of THIS script, not the calling script.
	
	const stack = new Error().stack;
	if (!stack) return "INVALID";
	
	const line = stack.split('\n').slice(2, 3)[0];
	if (line.indexOf("(") === -1) return "INVALID";
	
	const path = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(line)?.groups?.path || "";
	
	return path.replace("file://", "");
}

function directory() {
	// Sadly, we cannot use import.meta.url because it will return the file path of THIS script, not the calling script.
	
	const stack = new Error().stack;
	if (!stack) return "INVALID";
	
	const line = stack.split('\n').slice(2, 3)[0];
	if (line.indexOf("(") === -1) return "INVALID";
	
	let path = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(line)?.groups?.path || "";
	
	path = path.substring(0, path.lastIndexOf("/"));
	
	return path.replace("file://", "");
}

module.exports = {
	file,
	directory,
}
