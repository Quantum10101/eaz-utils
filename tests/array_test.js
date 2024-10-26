import eaz from "../eaz";

test("eaz.array.concat", () => {
	let allTheNumbers = eaz.array.concat([1, 2, 3], [2, 3, 4], [4, 5, 6]);
	expect(allTheNumbers).toStrictEqual([1, 2, 3, 2, 3, 4, 4, 5, 6]);
	
	allTheNumbers = eaz.array.concat(["one", "two", "three"], ["two", "three", "four"], ["four", "five", "six"]);
	expect(allTheNumbers).toStrictEqual(["one", "two", "three", "two", "three", "four", "four", "five", "six"]);
});

test("eaz.array.dedupe", () => {
	let uniqueNumbers = eaz.array.dedupe([1, 2, 3], [2, 3, 4], [4, 5, 6]);
	expect(uniqueNumbers).toStrictEqual([1, 2, 3, 4, 5, 6]);
	
	uniqueNumbers = eaz.array.dedupe([5, 9, 2, 4, 8, 2, 6, 1, 8, 4, 9, 2, 0, 7, 6]);
	expect(uniqueNumbers).toStrictEqual([5, 9, 2, 4, 8, 6, 1, 0, 7]);
	
	uniqueNumbers = eaz.array.dedupe(["one", "two", "three"], ["two", "three", "four"], ["four", "five", "six"]);
	expect(uniqueNumbers).toStrictEqual(["one", "two", "three", "four", "five", "six"]);
});

test("eaz.array.union", () => {
	let allTheNumbers = eaz.array.union([1, 2, 3], [2, 3, 4], [4, 5, 6]);
	expect(allTheNumbers).toStrictEqual([1, 2, 3, 2, 3, 4, 4, 5, 6]);
	
	allTheNumbers = eaz.array.union(["one", "two", "three"], ["two", "three", "four"], ["four", "five", "six"]);
	expect(allTheNumbers).toStrictEqual(["one", "two", "three", "two", "three", "four", "four", "five", "six"]);
});

test("eaz.array.intersect", () => {
	let commonNumbers = eaz.array.intersect([1, 2, 2, 4], [2, 2, 3, 4], [2, 2, 4, 6]);
	expect(commonNumbers).toStrictEqual([2, 2, 4]);
	
	commonNumbers = eaz.array.intersect(["one", "two", "two", "four"], ["two", "two", "three", "four"], ["two", "two", "four", "six"]);
	expect(commonNumbers).toStrictEqual(["two", "two", "four"]);
});

test("eaz.array.difference", () => {
	let differentNums = eaz.array.difference([1, 2, 3, 4, 4, 4, 4, 5], [2, 2, 4, 4, 6]);
	expect(differentNums).toStrictEqual([1, 3, 4, 4, 5]);
	
	differentNums = eaz.array.difference([1, 4, 2, 4, 4, 3, 5, 4], [2, 4, 2, 6, 4]);
	expect(differentNums).toStrictEqual([1, 4, 3, 5, 4]);
	
	differentNums = eaz.array.difference(["one", "four", "two", "four", "four", "three", "five", "four"], ["two", "four", "two", "six", "four"]);
	expect(differentNums).toStrictEqual(["one", "four", "three", "five", "four"]);
});

test("eaz.array.duplicates", () => {
	let duplicateNums = eaz.array.duplicates([3, 4, 4, 7, 8, 9, 7]);
	expect(duplicateNums).toStrictEqual([4, 4, 7, 7]);
	
	duplicateNums = eaz.array.duplicates(["three", "four", "four", "seven", "eight", "nine", "seven"]);
	expect(duplicateNums).toStrictEqual(["four", "four", "seven", "seven"]);
});
