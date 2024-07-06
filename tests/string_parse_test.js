import eaz from "../eaz";

test("eaz.string.parse.number", () => {
	const integer = "5";
	expect(eaz.string.parse.number(integer)).toEqual(5);
	
	const decimal = "5.5";
	expect(eaz.string.parse.number(decimal)).toEqual(5.5);
	
	const lessThanOne = "0.5";
	expect(eaz.string.parse.number(lessThanOne)).toEqual(0.5);
	
	const missingWhole = ".5";
	expect(eaz.string.parse.number(missingWhole)).toEqual(0.5);
	
	const zeroDecimal = "5.0";
	expect(eaz.string.parse.number(zeroDecimal)).toEqual(5);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.parse.number(nothingAfterDecimal)).toEqual(5);
	
	const twoZeroDecimal = "5.00";
	expect(eaz.string.parse.number(twoZeroDecimal)).toEqual(5);
	
	const lotsOfZeroDecimals = "5.000000000";
	expect(eaz.string.parse.number(lotsOfZeroDecimals)).toEqual(5);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.parse.number(veryBigNumber)).toEqual(1e+100);
	
	// There's no stopping JavaScript math from turning very large numbers into an Infinity number. To remain consistent with that principle,
	// parsing an otherwise legitimate huge number should also result in an Infinity number.
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.parse.number(infiniteNumber)).toEqual(Infinity);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.parse.number(infiniteNegativeNumber)).toEqual(-Infinity);
	
	const exponent = "123e5";
	expect(eaz.string.parse.number(exponent)).toEqual(12300000);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.parse.number(negativeExponent)).toEqual(0.00123);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.parse.number(lotsOfDigits)).toEqual(8.43578439852373e+123);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.parse.number(commaNumber1)).toEqual(NaN);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.parse.number(twoDecimals)).toEqual(NaN);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.parse.number(twoAdjacentDecimals)).toEqual(NaN);
	
	const twoLeadingDecimals = "..5";
	expect(eaz.string.parse.number(twoLeadingDecimals)).toEqual(NaN);
	
	const twoTrailingDecimals = "5..";
	expect(eaz.string.parse.number(twoTrailingDecimals)).toEqual(NaN);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.parse.number(spaceSeparatedNumber)).toEqual(NaN);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.parse.number(paddedNumber)).toEqual(5);
	
	const underbars = "5_000_000";
	expect(eaz.string.parse.number(underbars)).toEqual(NaN);
	
	const leadingZeros = "00000005";
	expect(eaz.string.parse.number(leadingZeros)).toEqual(5);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.parse.number(binaryNumber)).toEqual(255);
	
	const octalNumber = "0o377";
	expect(eaz.string.parse.number(octalNumber)).toEqual(255);
	
	const hexNumber = "0x1";
	expect(eaz.string.parse.number(hexNumber)).toEqual(1);
	
	const negativeInteger = "-5";
	expect(eaz.string.parse.number(negativeInteger)).toEqual(-5);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.parse.number(negativeDecimal)).toEqual(-5.5);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.parse.number(negativeWithSpace)).toEqual(NaN);
	
	const str = "happy";
	expect(eaz.string.parse.number(str)).toEqual(NaN);
	
	const date = "2016-12-31";
	expect(eaz.string.parse.number(date)).toEqual(NaN);
	
	const empty = "";
	expect(eaz.string.parse.number(empty)).toEqual(NaN);
	
	const space = " ";
	expect(eaz.string.parse.number(space)).toEqual(NaN);
	
	const numberThenString = "10g";
	expect(eaz.string.parse.number(numberThenString)).toEqual(NaN);
	
	const stringThenNumber = "g10";
	expect(eaz.string.parse.number(stringThenNumber)).toEqual(NaN);
	
	const booleanTrue = "true";
	expect(eaz.string.parse.number(booleanTrue)).toEqual(NaN);
	
	const booleanFalse = "false";
	expect(eaz.string.parse.number(booleanFalse)).toEqual(NaN);
	
	// A word string should never parse to a number, even if that word is "Infinity".
	
	const infinity = "Infinity";
	expect(eaz.string.parse.number(infinity)).toEqual(NaN);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.parse.number(negativeInfinity)).toEqual(NaN);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.parse.number(lowercaseInfinity)).toEqual(NaN);
	
	const nullWord = "null";
	expect(eaz.string.parse.number(nullWord)).toEqual(NaN);
	
	const undefinedWord = "undefined";
	expect(eaz.string.parse.number(undefinedWord)).toEqual(NaN);
	
	const NaNword = "NaN";
	expect(eaz.string.parse.number(NaNword)).toEqual(NaN);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.parse.number(wat)).toEqual(NaN);
});

test("eaz.string.parse.integer", () => {
	const integer = "5";
	expect(eaz.string.parse.integer(integer)).toEqual(5);
	
	const decimal = "5.5";
	expect(eaz.string.parse.integer(decimal)).toEqual(6);
	
	const missingWhole = ".5";
	expect(eaz.string.parse.integer(missingWhole)).toEqual(1);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.parse.integer(nothingAfterDecimal)).toEqual(5);
	
	const zeroAsDecimal = "5.0";
	expect(eaz.string.parse.integer(zeroAsDecimal)).toEqual(5);
	
	const zerosAfterDecimal = "5.000000";
	expect(eaz.string.parse.integer(zerosAfterDecimal)).toEqual(5);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.parse.integer(veryBigNumber)).toEqual(1e+100);
	
	// There's no stopping JavaScript math from turning very large numbers into an Infinity number. To remain consistent with that principle,
	// parsing an otherwise legitimate huge number should also result in an Infinity number.
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.parse.integer(infiniteNumber)).toEqual(Infinity);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.parse.integer(infiniteNegativeNumber)).toEqual(-Infinity);
	
	const exponent = "123e5";
	expect(eaz.string.parse.integer(exponent)).toEqual(12300000);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.parse.integer(negativeExponent)).toEqual(0);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.parse.integer(lotsOfDigits)).toEqual(8.43578439852373e+123);
	
	const lotsOfDigitsWithZeroesDecimal = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493.00000000000";
	expect(eaz.string.parse.integer(lotsOfDigitsWithZeroesDecimal)).toEqual(8.43578439852373e+123);
	
	const lotsOfDigitsHiddenDecimal = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493";
	expect(eaz.string.parse.integer(lotsOfDigitsHiddenDecimal)).toEqual(8.43578439852373e+86);
	
	const lotsOfDigitsHiddenDecimalWithZeroes = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493.0000000";
	expect(eaz.string.parse.integer(lotsOfDigitsHiddenDecimalWithZeroes)).toEqual(NaN);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.parse.integer(commaNumber1)).toEqual(NaN);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.parse.integer(twoDecimals)).toEqual(NaN);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.parse.integer(twoAdjacentDecimals)).toEqual(NaN);
	
	const lotsOfDecimals = "...5.....5...";
	expect(eaz.string.parse.integer(lotsOfDecimals)).toEqual(NaN);
	
	const bothCommasAndDots = "5,000.00";
	expect(eaz.string.parse.integer(bothCommasAndDots)).toEqual(NaN);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.parse.integer(spaceSeparatedNumber)).toEqual(NaN);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.parse.integer(paddedNumber)).toEqual(5);
	
	const underbars = "5_000_000";
	expect(eaz.string.parse.integer(underbars)).toEqual(NaN);
	
	const leadingZeros = "00000005";
	expect(eaz.string.parse.integer(leadingZeros)).toEqual(5);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.parse.integer(binaryNumber)).toEqual(255);
	
	const octalNumber = "0o377";
	expect(eaz.string.parse.integer(octalNumber)).toEqual(255);
	
	const hexNumber = "0x1";
	expect(eaz.string.parse.integer(hexNumber)).toEqual(1);
	
	const negativeInteger = "-5";
	expect(eaz.string.parse.integer(negativeInteger)).toEqual(-5);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.parse.integer(negativeDecimal)).toEqual(-5);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.parse.integer(negativeWithSpace)).toEqual(NaN);
	
	const str = "happy";
	expect(eaz.string.parse.integer(str)).toEqual(NaN);
	
	const date = "2016-12-31";
	expect(eaz.string.parse.integer(date)).toEqual(NaN);
	
	const empty = "";
	expect(eaz.string.parse.integer(empty)).toEqual(NaN);
	
	const space = " ";
	expect(eaz.string.parse.integer(space)).toEqual(NaN);
	
	const numberThenString = "10g";
	expect(eaz.string.parse.integer(numberThenString)).toEqual(NaN);
	
	const stringThenNumber = "g10";
	expect(eaz.string.parse.integer(stringThenNumber)).toEqual(NaN);
	
	const booleanTrue = "true";
	expect(eaz.string.parse.integer(booleanTrue)).toEqual(NaN);
	
	const booleanFalse = "false";
	expect(eaz.string.parse.integer(booleanFalse)).toEqual(NaN);
	
	// A word string should never parse to a number, even if that word is "Infinity".
	
	const infinity = "Infinity";
	expect(eaz.string.parse.integer(infinity)).toEqual(NaN);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.parse.integer(negativeInfinity)).toEqual(NaN);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.parse.integer(lowercaseInfinity)).toEqual(NaN);
	
	const nullWord = "null";
	expect(eaz.string.parse.integer(nullWord)).toEqual(NaN);
	
	const undefinedWord = "undefined";
	expect(eaz.string.parse.integer(undefinedWord)).toEqual(NaN);
	
	const NaNword = "NaN";
	expect(eaz.string.parse.integer(NaNword)).toEqual(NaN);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.parse.integer(wat)).toEqual(NaN);
});

test("eaz.string.parse.boolean", () => {
	const trueLower = "true";
	expect(eaz.string.parse.boolean(trueLower)).toEqual(true);
	
	const trueUpper = "TRUE";
	expect(eaz.string.parse.boolean(trueUpper)).toEqual(true);
	
	const trueMiXeD = "TrUe";
	expect(eaz.string.parse.boolean(trueMiXeD)).toEqual(true);
	
	const falseLower = "false";
	expect(eaz.string.parse.boolean(falseLower)).toEqual(false);
	
	const falseUpper = "FALSE";
	expect(eaz.string.parse.boolean(falseUpper)).toEqual(false);
	
	const falseMiXeD = "FaLsE";
	expect(eaz.string.parse.boolean(falseMiXeD)).toEqual(false);
	
	const tLower = "t";
	expect(eaz.string.parse.boolean(tLower)).toEqual(true);
	
	const tUpper = "T";
	expect(eaz.string.parse.boolean(tUpper)).toEqual(true);
	
	const fLower = "f";
	expect(eaz.string.parse.boolean(fLower)).toEqual(false);
	
	const fUpper = "F";
	expect(eaz.string.parse.boolean(fUpper)).toEqual(false);
	
	const one = "1";
	expect(eaz.string.parse.boolean(one)).toEqual(true);
	
	const zero = "0";
	expect(eaz.string.parse.boolean(zero)).toEqual(false);
	
	const startsWithT = "truish";
	expect(eaz.string.parse.boolean(startsWithT)).toEqual(false);
	
	const startsWithF = "falsy";
	expect(eaz.string.parse.boolean(startsWithF)).toEqual(false);
	
	const eleven = "11";
	expect(eaz.string.parse.boolean(eleven)).toEqual(false);
	
	const double07 = "007";
	expect(eaz.string.parse.boolean(double07)).toEqual(false);
});

test("eaz.string.parse.url", () => {
	const url1Info = eaz.string.parse.url("proto://sub1.sub2.dom.tld:80/path/to/file.ext?query#frag");
	expect(url1Info.protocol).toEqual("proto");
	expect(url1Info.subdomain).toEqual("sub1.sub2");
	expect(url1Info.domain).toEqual("dom");
	expect(url1Info.tld).toEqual("tld");
	expect(url1Info.port).toEqual("80");
	expect(url1Info.path).toEqual("/path/to/file.ext");
	expect(url1Info.filename).toEqual("file.ext");
	expect(url1Info.ext).toEqual("ext");
	expect(url1Info.query).toEqual("query");
	expect(url1Info.fragment).toEqual("frag");
	
	const url2Info = eaz.string.parse.url("localhost/page");
	expect(url2Info.protocol).toEqual("");
	expect(url2Info.subdomain).toEqual("");
	expect(url2Info.domain).toEqual("localhost");
	expect(url2Info.tld).toEqual("");
	expect(url2Info.port).toEqual("");
	expect(url2Info.path).toEqual("/page");
	expect(url2Info.filename).toEqual("");
	expect(url2Info.ext).toEqual("");
	expect(url2Info.query).toEqual("");
	expect(url2Info.fragment).toEqual("");
	
	const url3Info = eaz.string.parse.url("somewhere.tld/page#frag");
	expect(url3Info.protocol).toEqual("");
	expect(url3Info.subdomain).toEqual("");
	expect(url3Info.domain).toEqual("somewhere");
	expect(url3Info.tld).toEqual("tld");
	expect(url3Info.port).toEqual("");
	expect(url3Info.path).toEqual("/page");
	expect(url3Info.filename).toEqual("");
	expect(url3Info.ext).toEqual("");
	expect(url3Info.query).toEqual("");
	expect(url3Info.fragment).toEqual("frag");
	
	const url4Info = eaz.string.parse.url("localhost");
	expect(url4Info.protocol).toEqual("");
	expect(url4Info.subdomain).toEqual("");
	expect(url4Info.domain).toEqual("localhost");
	expect(url4Info.tld).toEqual("");
	expect(url4Info.port).toEqual("");
	expect(url4Info.path).toEqual("");
	expect(url4Info.filename).toEqual("");
	expect(url4Info.ext).toEqual("");
	expect(url4Info.query).toEqual("");
	expect(url4Info.fragment).toEqual("");
	
	const url5Info = eaz.string.parse.url("http://example.com?var1=one");
	expect(url5Info.protocol).toEqual("http");
	expect(url5Info.subdomain).toEqual("");
	expect(url5Info.domain).toEqual("example");
	expect(url5Info.tld).toEqual("com");
	expect(url5Info.port).toEqual("");
	expect(url5Info.path).toEqual("");
	expect(url5Info.filename).toEqual("");
	expect(url5Info.ext).toEqual("");
	expect(url5Info.query).toEqual("var1=one");
	expect(url5Info.fragment).toEqual("");
});

test("eaz.string.parse.urlQuery", () => {
	const obj1 = eaz.string.parse.urlQuery("?var1=one&var2=two&var3=three");
	expect(obj1["var1"]).toEqual("one");
	expect(obj1["var2"]).toEqual("two");
	expect(obj1["var3"]).toEqual("three");
	
	const obj2 = eaz.string.parse.urlQuery("var4=four&var5=five&var6=six");
	expect(obj2["var4"]).toEqual("four");
	expect(obj2["var5"]).toEqual("five");
	expect(obj2["var6"]).toEqual("six");
});
