function isEmpty(object) {
	let isEmpty = true;
	
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			isEmpty = false;
			break;
		}
	}
	
	return isEmpty;
}

module.exports = isEmpty;
