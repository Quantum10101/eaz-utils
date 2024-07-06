import eaz from "../eaz";

test("eaz.string.search.hasSubstringAt", () => {
	expect(eaz.string.search.hasSubstringAt("abcdefghi", "def", 3)).toBe(true);
});
