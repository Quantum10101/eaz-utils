function string(str) {
	if (str instanceof String) throw new Error("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	return typeof str === "string";
}

module.exports = {
	string,
}
