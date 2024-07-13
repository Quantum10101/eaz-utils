import eaz from "../eaz";

function exampleData() {
	return [
		{
			theKey: "obj1",
			theValue: "val1-1",
			extra: 41,
		},
		{
			theKey: "obj1",
			theValue: "val1-2",
			extra: 42,
		},
		{
			theKey: "obj2",
			theValue: "val2-1",
			extra: 31,
		},
		{
			theKey: "obj2",
			theValue: "val2-2",
			extra: 32,
		},
		{
			theKey: "obj3",
			theValue: "val3-1",
			extra: 71,
		},
		{
			theKey: "obj3",
			theValue: "val3-2",
			extra: 72,
		},
	];
}

test("eaz.array.object.groupBy", () => {
	const arrObj = exampleData();
	const groupedObjects = eaz.array.object.groupBy(arrObj, "theKey");
	
	const expected = JSON.parse(`
		{
			"obj1": [
				{
					"theKey": "obj1",
					"theValue": "val1-1",
					"extra": 41
				},
				{
					"theKey": "obj1",
					"theValue": "val1-2",
					"extra": 42
				}
			],
			"obj2": [
				{
					"theKey": "obj2",
					"theValue": "val2-1",
					"extra": 31
				},
				{
					"theKey": "obj2",
					"theValue": "val2-2",
					"extra": 32
				}
			],
			"obj3": [
				{
					"theKey": "obj3",
					"theValue": "val3-1",
					"extra": 71
				},
				{
					"theKey": "obj3",
					"theValue": "val3-2",
					"extra": 72
				}
			]
		}
	`);
	
	expect(groupedObjects).toEqual(expected);
});

test("eaz.array.object.flatGroupBy", () => {
	const arrObj = exampleData();
	const flatGroupedObjects = eaz.array.object.flatGroupBy(arrObj, "theKey");
	
	const expected = JSON.parse(`
		{
			"obj1": {
				"theKey": "obj1",
				"theValue": "val1-2",
				"extra": 42
			},
			"obj2": {
				"theKey": "obj2",
				"theValue": "val2-2",
				"extra": 32
			},
			"obj3": {
				"theKey": "obj3",
				"theValue": "val3-2",
				"extra": 72
			}
		}
	`);
	
	expect(flatGroupedObjects).toEqual(expected);
});

test("eaz.array.object.convertTo.keyedObjects", () => {
	const arrObj = exampleData();
	const keyedObjects = eaz.array.object.convertTo.keyedObjects(arrObj, "theKey");
	
	const expected = JSON.parse(`
		{
			"obj1": [
				{
					"theKey": "obj1",
					"theValue": "val1-1",
					"extra": 41
				},
				{
					"theKey": "obj1",
					"theValue": "val1-2",
					"extra": 42
				}
			],
			"obj2": [
				{
					"theKey": "obj2",
					"theValue": "val2-1",
					"extra": 31
				},
				{
					"theKey": "obj2",
					"theValue": "val2-2",
					"extra": 32
				}
			],
			"obj3": [
				{
					"theKey": "obj3",
					"theValue": "val3-1",
					"extra": 71
				},
				{
					"theKey": "obj3",
					"theValue": "val3-2",
					"extra": 72
				}
			]
		}
	`);
	
	expect(keyedObjects).toEqual(expected);
});

test("eaz.array.object.convertTo.keyedValues", () => {
	const arrObj = exampleData();
	const keyedValues = eaz.array.object.convertTo.keyedValues(arrObj, "theKey", "theValue");
	
	const expected = JSON.parse(`
		{
			"obj1": [ "val1-1", "val1-2" ],
			"obj2": [ "val2-1", "val2-2" ],
			"obj3": [ "val3-1", "val3-2" ]
		}
	`);
	
	expect(keyedValues).toEqual(expected);
});

test("eaz.array.object.convertTo.flatKeyedObjects", () => {
	const arrObj = exampleData();
	const flatKeyedObjects = eaz.array.object.convertTo.flatKeyedObjects(arrObj, "theKey");
	
	const expected = JSON.parse(`
		{
			"obj1": {
				"theKey": "obj1",
				"theValue": "val1-2",
				"extra": 42
			},
			"obj2": {
				"theKey": "obj2",
				"theValue": "val2-2",
				"extra": 32
			},
			"obj3": {
				"theKey": "obj3",
				"theValue": "val3-2",
				"extra": 72
			}
		}
	`);
	
	expect(flatKeyedObjects).toEqual(expected);
});

test("eaz.array.object.convertTo.flatKeyedValues", () => {
	const arrObj = exampleData();
	const flatKeyedValues = eaz.array.object.convertTo.flatKeyedValues(arrObj, "theKey", "theValue");
	
	const expected = JSON.parse(`
		{
			"obj1": "val1-2",
			"obj2": "val2-2",
			"obj3": "val3-2"
		}
	`);
	
	expect(flatKeyedValues).toEqual(expected);
});
