import eaz from "../eaz";

test("eaz.string.trim.charsBoth", () => {
	const t = eaz.string.trim.charsBoth("-/-trim-hyphens-/-", ["-", "/"]);
	expect(t).toEqual("trim-hyphens");
});

test("eaz.string.trim.charsLeft", () => {
	const t = eaz.string.trim.charsLeft("-/-trim-hyphens-/-", ["-", "/"]);
	expect(t).toEqual("trim-hyphens-/-");
});

test("eaz.string.trim.charsRight", () => {
	const t = eaz.string.trim.charsRight("-/-trim-hyphens-/-", ["-", "/"]);
	expect(t).toEqual("-/-trim-hyphens");
});

test("eaz.string.trim.wordBoth", () => {
	const t = eaz.string.trim.wordBoth("wordwordtrim-wordswordword", "word");
	expect(t).toEqual("trim-words");
});

test("eaz.string.trim.wordLeft", () => {
	const t = eaz.string.trim.wordLeft("wordwordtrim-wordswordword", "word");
	expect(t).toEqual("trim-wordswordword");
});

test("eaz.string.trim.wordRight", () => {
	const t = eaz.string.trim.wordRight("wordwordtrim-wordswordword", "word");
	expect(t).toEqual("wordwordtrim-words");
});
