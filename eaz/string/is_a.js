const trim = require("./trim");

function string(str) {
	if (str instanceof String) throw new Error("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	return typeof str === "string";
}

function number(str) {
	if (+str !== +str) return false;
	if (isNaN(Number(str))) return false;
	if (str.trim() === "") return false;
	if (str === "Infinity") return false;
	if (str === "-Infinity") return false;
	return true;
}

function integer(str) {
	if (+str !== +str) return false;
	if (str.trim() === "") return false;
	if (str === "Infinity") return false;
	if (str === "-Infinity") return false;
	
	const parsed = Number(str);
	if (isNaN(parsed)) return false;
	
	let trimmedZeroStr = trim.charsRight(str, ["0"]);
	trimmedZeroStr = trim.charsRight(trimmedZeroStr, ["."]);
	if (trimmedZeroStr.indexOf(".") != -1) return false;
	
	return Math.round(parsed) === parsed;
}

function boolean(str) {
	const lowerStr = str.toLowerCase();
	
	if (
		lowerStr === "true" ||
		lowerStr === "false" ||
		lowerStr === "t" ||
		lowerStr === "f" ||
		str === "1" ||
		str === "0"
	) {
		return true;
	}
	
	return false;
}

module.exports = {
	string,
	number,
	integer,
	boolean,
}
