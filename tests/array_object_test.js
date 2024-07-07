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
	
	expect(groupedObjects.obj1[0].theKey).toEqual("obj1");
	expect(groupedObjects["obj1"][0]["theKey"]).toEqual("obj1");
	expect(groupedObjects.obj1[1].theKey).toEqual("obj1");
	expect(groupedObjects["obj1"][1]["theKey"]).toEqual("obj1");
	
	expect(groupedObjects.obj2[0].theValue).toEqual("val2-1");
	expect(groupedObjects["obj2"][0]["theValue"]).toEqual("val2-1");
	expect(groupedObjects.obj2[1].theValue).toEqual("val2-2");
	expect(groupedObjects["obj2"][1]["theValue"]).toEqual("val2-2");
	
	expect(groupedObjects.obj3[0].extra).toEqual(71);
	expect(groupedObjects["obj3"][0]["extra"]).toEqual(71);
	expect(groupedObjects.obj3[1].extra).toEqual(72);
	expect(groupedObjects["obj3"][1]["extra"]).toEqual(72);
});

test("eaz.array.object.flatGroupBy", () => {
	const arrObj = exampleData();
	const flatGroupedObjects = eaz.array.object.flatGroupBy(arrObj, "theKey");
	
	expect(flatGroupedObjects.obj1.theKey).toEqual("obj1");
	expect(flatGroupedObjects["obj1"]["theKey"]).toEqual("obj1");
	
	expect(flatGroupedObjects.obj2.theValue).toEqual("val2-2");
	expect(flatGroupedObjects["obj2"]["theValue"]).toEqual("val2-2");
	
	expect(flatGroupedObjects.obj3.extra).toEqual(72);
	expect(flatGroupedObjects["obj3"]["extra"]).toEqual(72);
});

test("eaz.array.object.convertTo.keyedObjects", () => {
	const arrObj = exampleData();
	const keyedObjects = eaz.array.object.convertTo.keyedObjects(arrObj, "theKey");
	
	expect(keyedObjects.obj1[0].theKey).toEqual("obj1");
	expect(keyedObjects["obj1"][0]["theKey"]).toEqual("obj1");
	expect(keyedObjects.obj1[1].theKey).toEqual("obj1");
	expect(keyedObjects["obj1"][1]["theKey"]).toEqual("obj1");
	
	expect(keyedObjects.obj2[0].theValue).toEqual("val2-1");
	expect(keyedObjects["obj2"][0]["theValue"]).toEqual("val2-1");
	expect(keyedObjects.obj2[1].theValue).toEqual("val2-2");
	expect(keyedObjects["obj2"][1]["theValue"]).toEqual("val2-2");
	
	expect(keyedObjects.obj3[0].extra).toEqual(71);
	expect(keyedObjects["obj3"][0]["extra"]).toEqual(71);
	expect(keyedObjects.obj3[1].extra).toEqual(72);
	expect(keyedObjects["obj3"][1]["extra"]).toEqual(72);
});

test("eaz.array.object.convertTo.keyedValues", () => {
	const arrObj = exampleData();
	const keyedValues = eaz.array.object.convertTo.keyedValues(arrObj, "theKey", "theValue");
	
	expect(keyedValues.obj1[0]).toEqual("val1-1");
	expect(keyedValues["obj1"][0]).toEqual("val1-1");
	expect(keyedValues.obj1[1]).toEqual("val1-2");
	expect(keyedValues["obj1"][1]).toEqual("val1-2");
	
	expect(keyedValues.obj2[0]).toEqual("val2-1");
	expect(keyedValues["obj2"][0]).toEqual("val2-1");
	expect(keyedValues.obj2[1]).toEqual("val2-2");
	expect(keyedValues["obj2"][1]).toEqual("val2-2");
	
	expect(keyedValues.obj3[0]).toEqual("val3-1");
	expect(keyedValues["obj3"][0]).toEqual("val3-1");
	expect(keyedValues.obj3[1]).toEqual("val3-2");
	expect(keyedValues["obj3"][1]).toEqual("val3-2");
});

test("eaz.array.object.convertTo.flatKeyedObjects", () => {
	const arrObj = exampleData();
	const flatKeyedObjects = eaz.array.object.convertTo.flatKeyedObjects(arrObj, "theKey");
	
	expect(flatKeyedObjects.obj1.theKey).toEqual("obj1");
	expect(flatKeyedObjects["obj1"]["theKey"]).toEqual("obj1");
	
	expect(flatKeyedObjects.obj2.theValue).toEqual("val2-2");
	expect(flatKeyedObjects["obj2"]["theValue"]).toEqual("val2-2");
	
	expect(flatKeyedObjects.obj3.extra).toEqual(72);
	expect(flatKeyedObjects["obj3"]["extra"]).toEqual(72);
});

test("eaz.array.object.convertTo.flatKeyedValues", () => {
	const arrObj = exampleData();
	const flatKeyedValues = eaz.array.object.convertTo.flatKeyedValues(arrObj, "theKey", "theValue");
	
	expect(flatKeyedValues.obj1).toEqual("val1-2");
	expect(flatKeyedValues["obj1"]).toEqual("val1-2");
	
	expect(flatKeyedValues.obj2).toEqual("val2-2");
	expect(flatKeyedValues["obj2"]).toEqual("val2-2");
	
	expect(flatKeyedValues.obj3).toEqual("val3-2");
	expect(flatKeyedValues["obj3"]).toEqual("val3-2");
});
