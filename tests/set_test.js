import eaz from "../eaz";

test("eaz.set.union", () => {
	const uniqueNumbers = eaz.set.union(new Set([1, 2, 3]), new Set([2, 3, 4]), new Set([4, 5, 6]));
	expect(uniqueNumbers).toStrictEqual(new Set([1, 2, 3, 4, 5, 6]));
});

test("eaz.set.intersect", () => {
	const commonNumbers = eaz.set.intersect(new Set([1, 2, 4]), new Set([2, 3, 4]), new Set([2, 4, 6]));
	expect(commonNumbers).toStrictEqual(new Set([2, 4]));
});

test("eaz.set.difference", () => {
	const differentNums = eaz.set.difference(new Set([1, 2, 3, 4, 5]), new Set([2, 4, 6]));
	expect(differentNums).toStrictEqual(new Set([1, 3, 5]));
});
