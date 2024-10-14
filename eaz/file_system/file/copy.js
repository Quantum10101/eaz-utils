const fs = require('fs');
const common = require("../../common");

function copy(source, destination, force = false) {
	const fullSource = common.prepareFullPath(source);
	const fullDestination = common.prepareFullPath(destination);
	
	if (!force && fs.existsSync(fullDestination)) {
		return false;
	}
	
	fs.copyFileSync(fullSource, fullDestination);
	return true;
}

module.exports = copy;
