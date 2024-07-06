import eaz from "../eaz";

test("eaz.array.union", () => {
	const array1 = [1, 2, 3];
	const array2 = [2, 3, 4];
	const array3 = [4, 5, 6];
	
	const uniqueItems = eaz.array.union(array1, array2, array3);
	
	expect(uniqueItems).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
