function keyedObjects(objArr, key) {
	const keyedObjects = {};
	
	for (const obj of objArr) {
		if (keyedObjects[obj[key]] === undefined) keyedObjects[obj[key]] = [];
		keyedObjects[obj[key]].push(obj);
	}
	
	return keyedObjects;
}

function keyedValues(objArr, key, val) {
	const keyedValues = {};
	
	for (const obj of objArr) {
		if (keyedValues[obj[key]] === undefined) keyedValues[obj[key]] = [];
		keyedValues[obj[key]].push(obj[val]);
	}
	
	return keyedValues;
}

function flatKeyedObjects(objArr, key) {
	//return Object.assign({}, ...objects.map(x => ({[x.key]: x})));
	
	const flatKeyedObjects = {};
	
	for (const obj of objArr) {
		flatKeyedObjects[obj[key]] = obj;
	}
	
	return flatKeyedObjects;
}

function flatKeyedValues(objArr, key, val) {
	//return Object.assign({}, ...objects.map(x => ({[x.key]: x.val})));
	
	const flatKeyedValues = {};
	
	for (const obj of objArr) {
		flatKeyedValues[obj[key]] = obj[val];
	}
	
	return flatKeyedValues;
}

module.exports = {
	keyedObjects,
	keyedValues,
	flatKeyedObjects,
	flatKeyedValues,
}
