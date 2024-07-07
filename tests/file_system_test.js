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
