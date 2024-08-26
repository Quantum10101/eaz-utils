import eaz from "../eaz";

test("eaz.cryptography.blake2s.hexString", () => {
	const hash = eaz.cryptography.blake2s.hexString("digest this");
	expect(hash).toBe("2ab31fc045f7d800a4501f4c88d8801115f6a3ba197887699c3cd7e8ba175f16");
});

test("eaz.cryptography.blake2s.uint8Array", () => {
	const hash = eaz.cryptography.blake2s.uint8Array("digest this");
	expect(hash).toEqual(new Uint8Array([
		42, 179, 31, 192, 69, 247, 216, 0, 164, 80, 31, 76, 136, 216, 128, 17,
		21, 246, 163, 186, 25, 120, 135, 105, 156, 60, 215, 232, 186, 23, 95, 22
	]));
});
