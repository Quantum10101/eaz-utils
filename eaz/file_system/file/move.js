const fs = require('fs');
const path = require('path');
const common = require("../../common");

function move(source, destination, force = false) {
	const fullSource = common.prepareFullPath(source);
	const fullDestination = common.prepareFullPath(destination);
	
	try {
		if (!force && fs.existsSync(fullDestination)) {
			return false;
		}
		
		const destinationDir = path.dirname(fullDestination);
		fs.mkdirSync(destinationDir, { recursive: true });
		
		fs.renameSync(fullSource, fullDestination);
		return true;
	}
	catch (err) {
		// Check if the error is due to different devices (EXDEV)
		if (err.code === 'EXDEV') {
			// Copy the file if renameSync fails due to different devices
			fs.copyFileSync(fullSource, fullDestination);
			fs.unlinkSync(fullSource);
			return true;
		}
		else {
			throw err;
		}
	}
}

module.exports = move;
