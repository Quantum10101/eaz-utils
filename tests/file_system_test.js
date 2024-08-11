import eaz from "../eaz";

test("eaz.fileSystem.pathToScript.file", () => {
	const filePath = eaz.fileSystem.pathToScript.file();
	expect(filePath[0]).toBe("/");
	
	const filename = filePath.substring(filePath.lastIndexOf("/"))
	expect(filename).toBe("/file_system_test.js");
});

test("eaz.fileSystem.pathToScript.directory", () => {
	const directoryPath = eaz.fileSystem.pathToScript.directory();
	expect(directoryPath[0]).toBe("/");
	
	const dirname = directoryPath.substring(directoryPath.lastIndexOf("/"))
	expect(dirname).toBe("/tests");
});

test("eaz.fileSystem.listOf.files", () => {
	const files = eaz.fileSystem.listOf.files("../");
	expect(files).toContain("package.json");
	expect(files).not.toContain("eaz");
	expect(files).not.toContain("tests");
});

test("eaz.fileSystem.listOf.directories", () => {
	const directories = eaz.fileSystem.listOf.directories("../");
	expect(directories).not.toContain("package.json");
	expect(directories).toContain("eaz");
	expect(directories).toContain("tests");
});

test("eaz.fileSystem.listOf.entities", () => {
	const entities = eaz.fileSystem.listOf.entities("../");
	expect(entities).toContain("package.json");
	expect(entities).toContain("eaz");
	expect(entities).toContain("tests");
});

test("eaz.fileSystem.checkPathType", () => {
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DIRECTORY);
	eaz.fileSystem.file.write.text("../testfiles/test.txt", "testing123");
	expect(eaz.fileSystem.checkPathType("../testfiles/test.txt")).toBe(eaz.fileSystem.PathType.FILE);
	eaz.fileSystem.file.remove("../testfiles/test.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.directory.create", () => {
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	expect(eaz.fileSystem.directory.create("../testfiles")).toBe(true);
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DIRECTORY);
	expect(eaz.fileSystem.directory.create("../testfiles")).toBe(false);
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.directory.remove", () => {
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	expect(eaz.fileSystem.directory.create("../testfiles")).toBe(true);
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DIRECTORY);
	expect(eaz.fileSystem.directory.remove("../testfiles")).toBe(true);
	expect(eaz.fileSystem.checkPathType("../testfiles")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	expect(eaz.fileSystem.directory.remove("../testfiles")).toBe(false);
});

test("eaz.fileSystem.file.write.text", () => {
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.file.write.text("../testfiles/file.txt", "testing")).toBe(true);
	expect(eaz.fileSystem.file.write.text("../testfiles/file.txt", "123")).toBe(true);
	expect(eaz.fileSystem.file.get.text("../testfiles/file.txt")).toBe("123");
	eaz.fileSystem.file.remove("../testfiles/file.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.write.bytes", () => {
	const bytes = Buffer.from([1, 2, 3, 4, 5]);
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.file.write.bytes("../testfiles/file.bin", Buffer.from([90, 4, 6, 8, 10]))).toBe(true);
	expect(eaz.fileSystem.file.write.bytes("../testfiles/file.bin", bytes)).toBe(true);
	expect(eaz.fileSystem.file.get.bytes("../testfiles/file.bin")).toEqual(bytes);
	eaz.fileSystem.file.remove("../testfiles/file.bin");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.append.text", () => {
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.file.append.text("../testfiles/file.txt", "testing")).toBe(true);
	expect(eaz.fileSystem.file.append.text("../testfiles/file.txt", "123")).toBe(true);
	expect(eaz.fileSystem.file.get.text("../testfiles/file.txt")).toBe("testing123");
	eaz.fileSystem.file.remove("../testfiles/file.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.append.textLine", () => {
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.file.append.textLine("../testfiles/file.txt", "testing")).toBe(true);
	expect(eaz.fileSystem.file.append.textLine("../testfiles/file.txt", "123")).toBe(true);
	expect(eaz.fileSystem.file.get.text("../testfiles/file.txt")).toBe("testing\n123\n");
	eaz.fileSystem.file.remove("../testfiles/file.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.append.bytes", () => {
	const bytes1 = Buffer.from([90, 4, 6, 8, 10]);
	const bytes2 = Buffer.from([1, 2, 3, 4, 5]);
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.file.append.bytes("../testfiles/file.bin", bytes1)).toBe(true);
	expect(eaz.fileSystem.file.append.bytes("../testfiles/file.bin", bytes2)).toBe(true);
	expect(eaz.fileSystem.file.get.bytes("../testfiles/file.bin")).toEqual(Buffer.concat([bytes1, bytes2]));
	eaz.fileSystem.file.remove("../testfiles/file.bin");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.get.size", () => {
	eaz.fileSystem.directory.create("../testfiles");
	eaz.fileSystem.file.append.text("../testfiles/file.txt", "testing");
	expect(eaz.fileSystem.file.get.size("../testfiles/file.txt")).toBe(7);
	eaz.fileSystem.file.remove("../testfiles/file.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.get.text", () => {
	eaz.fileSystem.directory.create("../testfiles");
	eaz.fileSystem.file.append.text("../testfiles/file.txt", "testing");
	expect(eaz.fileSystem.file.get.text("../testfiles/file.txt")).toBe("testing");
	eaz.fileSystem.file.remove("../testfiles/file.txt");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.get.bytes", () => {
	eaz.fileSystem.directory.create("../testfiles");
	eaz.fileSystem.file.append.bytes("../testfiles/file.bin", Buffer.from([1, 2, 3, 4, 5]));
	expect(eaz.fileSystem.file.get.bytes("../testfiles/file.bin")).toEqual(Buffer.from([1, 2, 3, 4, 5]));
	eaz.fileSystem.file.remove("../testfiles/file.bin");
	eaz.fileSystem.directory.remove("../testfiles");
});

test("eaz.fileSystem.file.remove", () => {
	eaz.fileSystem.directory.create("../testfiles");
	expect(eaz.fileSystem.checkPathType("../testfiles/file.bin")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	eaz.fileSystem.file.append.bytes("../testfiles/file.bin", Buffer.from([1, 2, 3, 4, 5]));
	expect(eaz.fileSystem.checkPathType("../testfiles/file.bin")).toBe(eaz.fileSystem.PathType.FILE);
	expect(eaz.fileSystem.file.remove("../testfiles/file.bin")).toBe(true);
	expect(eaz.fileSystem.checkPathType("../testfiles/file.bin")).toBe(eaz.fileSystem.PathType.DOES_NOT_EXIST);
	expect(eaz.fileSystem.file.remove("../testfiles/file.bin")).toBe(false);
	eaz.fileSystem.directory.remove("../testfiles");
});
