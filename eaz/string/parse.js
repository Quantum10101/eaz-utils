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
		directory: "",
		file: "",
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
		result.path = "/";
		result.directory = "/";
		result.file = "";
		result.ext = "";
	}
	else {
		left = str.substring(0, pathStart);
		right = str.substring(pathStart);
		result.path = right.endsWith("/") && right.length > 1 ? right.slice(0, -1) : right;
		str = left;
		
		const lastSlash = right.lastIndexOf("/");
		if (lastSlash === -1 || lastSlash === right.length - 1) {
			result.directory = right.endsWith("/") && right.length > 1 ? right.slice(0, -1) : right;
			result.file = "";
			result.ext = "";
		}
		else {
			const lastSegment = right.substring(lastSlash + 1);
			const extStart = lastSegment.lastIndexOf(".");
			
			if (extStart === -1) {
				result.directory = right;
				result.file = "";
				result.ext = "";
			}
			else {
				result.directory = right.substring(0, lastSlash);
				result.file = lastSegment;
				result.ext = lastSegment.substring(extStart + 1);
			}
			
			if (result.directory === "") result.directory = "/";
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
