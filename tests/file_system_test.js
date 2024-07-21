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
