import eaz from "../eaz";

test("eaz.string.is_a.string", () => {
	expect(eaz.string.is_a.string("ahoy")).toBe(true);
	expect(eaz.string.is_a.string("12.5")).toBe(true);
	expect(eaz.string.is_a.string("")).toBe(true);
	expect(eaz.string.is_a.string(12.5)).toBe(false);
	try {
		eaz.string.is_a.string(new String("a String object"));
	}
	catch(err) {
		expect(err.message).toBe("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	}
});
