function number(str) {
	if (str.trim() === "") return NaN;
	if (str === "Infinity") return NaN;
	if (str === "-Infinity") return NaN;
	return Number(str);
}

function integer(str) {
	if (str.trim() === "") return NaN;
	if (str === "Infinity") return NaN;
	if (str === "-Infinity") return NaN;
	return Math.round(Number(str));
}

function boolean(str) {
	const lowerStr = str.toLowerCase();
	
	if (lowerStr === "true" || lowerStr === "t" || str === "1") {
		return true;
	}
	
	return false;
}

function url(str) {
	let left, right;
	
	const result = {
		protocol: "",
		subdomain: "",
		domain: "",
		tld: "",
		port: "",
		path: "",
		filename: "",
		ext: "",
		query: "",
		fragment: ""
	};
	
	[left, right] = str.split("://");
	if (right === undefined) {
		result.protocol = "";
		str = left;
	}
	else {
		result.protocol = left;
		str = right;
	}
	
	[left, right] = str.split("#");
	if (right === undefined) {
		result.fragment = "";
	}
	else {
		result.fragment = right;
		str = left;
	}
	
	[left, right] = str.split("?");
	if (right === undefined) {
		result.query = "";
	}
	else {
		result.query = right;
		str = left;
	}
	
	const pathStart = str.indexOf("/");
	if (pathStart === -1) {
		result.path = "";
		result.filename = "";
		result.ext = "";
	}
	else {
		left = str.substring(0, pathStart);
		right = str.substring(pathStart);
		result.path = right;
		str = left;
		const extStart = right.indexOf(".");
		if (extStart === -1) {
			result.filename = "";
			result.ext = "";
		}
		else {
			result.ext = right.substring(extStart + 1);
			const filenameStart = right.lastIndexOf("/");
			result.filename = right.substring(filenameStart + 1);
		}
	}
	
	[left, right] = str.split(":");
	if (right === undefined) {
		result.port = "";
	}
	else {
		result.port = right;
		str = left;
	}
	
	const tldStart = str.lastIndexOf(".");
	if (tldStart === -1) {
		result.tld = "";
		result.domain = str;
		result.subdomain = "";
		return result;
	}
	
	result.tld = str.substring(tldStart + 1);
	str = str.substring(0, tldStart);
	
	const domainStart = str.lastIndexOf(".");
	if (domainStart === -1) {
		result.domain = str;
		result.subdomain = "";
	}
	else {
		result.subdomain = str.substring(0, domainStart);
		result.domain = str.substring(domainStart + 1);
	}
	
	return result;
}

function urlQuery(str) {
	return Object.fromEntries(new URLSearchParams(str));
}

module.exports = {
	number,
	integer,
	boolean,
	url,
	urlQuery,
}
