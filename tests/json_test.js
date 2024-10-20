import eaz from "../eaz";

test("eaz.json.parse", () => {
	const json = `
		[
			{
				"stuff": "things1",
				"five": "six1",
				"nested": {
					"a": 1,
					"b": 2
				}
			},
			{
				"stuff": "things2",
				"five": "six2",
				"nested": {
					"a": 2,
					"b": 3,
					"c": 4
				}
			}
		]
	`;
	
	// TypeScript:
	// const obj = eaz.json.parse<Array<Map<string, string | Map<string, number>>>>(json);
	const obj = eaz.json.parse(json);
	
	expect(obj[1].get("nested").get("b")).toBe(3);
});
