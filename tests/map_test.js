import eaz from "../eaz";

test("eaz.map.filterMapByKeys", () => {
	const filteredSubset = eaz.map.filterMapByKeys(new Map([[2, "two"], [4, "four"], [6, "six"]]), new Set([4, 6]));
	expect(filteredSubset).toStrictEqual(new Map([[4, "four"], [6, "six"]]));
});

test("eaz.map.filterMapByValues", () => {
	const filteredSubset = eaz.map.filterMapByValues(new Map([[2, "two"], [4, "four"], [6, "six"]]), new Set(["four", "six"]));
	expect(filteredSubset).toStrictEqual(new Map([[4, "four"], [6, "six"]]));
});
