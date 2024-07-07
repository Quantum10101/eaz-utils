import eaz from "../eaz";

test("eaz.sleep", async () => {
	const beforeTime = Date.now();
	await eaz.sleep(50);
	const afterTime = Date.now();
	expect(afterTime - beforeTime >= 50).toBe(true);
	expect(afterTime - beforeTime < 60).toBe(true);
});
