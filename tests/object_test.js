import eaz from "../eaz";

test("eaz.object.isEmpty", () => {
	const object1 = {};
	const object2 = {
		"item": "exists"
	};
	
	expect(eaz.object.isEmpty(object1)).toBe(true);
	expect(eaz.object.isEmpty(object2)).toBe(false);
});
