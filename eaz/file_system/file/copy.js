const fs = require('fs');
const path = require('path');
const common = require("../../common");

function copy(source, destination, force = false) {
	const fullSource = common.prepareFullPath(source);
	const fullDestination = common.prepareFullPath(destination);
	
	if (!force && fs.existsSync(fullDestination)) {
		return false;
	}
	
	const destinationDir = path.dirname(fullDestination);
	fs.mkdirSync(destinationDir, { recursive: true });
	
	fs.copyFileSync(fullSource, fullDestination);
	return true;
}

module.exports = copy;
