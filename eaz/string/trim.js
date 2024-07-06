// Code borrowed from:
// Jason Larke: https://stackoverflow.com/users/1280370/jason-larke
// Stack Overflow answer: https://stackoverflow.com/a/55292366/508558

const search = require("./search");

function charsBoth(str, chars) {
	let start = 0;
	let end = str.length;
	
	while(start < end && chars.indexOf(str[start]) >= 0) {
		start++;
	}
	
	while(end > start && chars.indexOf(str[end - 1]) >= 0) {
		end--;
	}
	
	return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

function charsLeft(str, chars) {
	let start = 0;
	const end = str.length;
	
	while(start < end && chars.indexOf(str[start]) >= 0) {
		start++;
	}
	
	return start > 0 ? str.substring(start) : str;
}

function charsRight(str, chars) {
	const start = 0;
	let end = str.length;
	
	while(end > start && chars.indexOf(str[end - 1]) >= 0) {
		end--;
	}
	
	return end < str.length ? str.substring(start, end) : str;
}

function wordBoth(str, word) {
	let start = 0;
	let end = str.length;
	const len = word.length;
	
	while (start < end && search.hasSubstringAt(str, word, start)) {
		start += word.length;
	}
	
	while (end > start && search.hasSubstringAt(str, word, end - len)) {
		end -= word.length
	}
	
	return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

function wordLeft(str, word) {
	let start = 0;
	const end = str.length;
	
	while (start < end && search.hasSubstringAt(str, word, start)) {
		start += word.length;
	}
	
	return start > 0 ? str.substring(start) : str;
}

function wordRight(str, word) {
	const start = 0;
	let end = str.length;
	const len = word.length;
	
	while (end > start && search.hasSubstringAt(str, word, end - len)) {
		end -= word.length
	}
	
	return end < str.length ? str.substring(start, end) : str;
}

module.exports = {
	charsBoth,
	charsLeft,
	charsRight,
	wordBoth,
	wordLeft,
	wordRight,
}
