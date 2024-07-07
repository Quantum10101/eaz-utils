import eaz from "../eaz";

test("eaz.string.isA.string", () => {
	expect(eaz.string.isA.string("ahoy")).toBe(true);
	expect(eaz.string.isA.string("12.5")).toBe(true);
	expect(eaz.string.isA.string("")).toBe(true);
	expect(eaz.string.isA.string(12.5)).toBe(false);
	try {
		eaz.string.isA.string(new String("a String object"));
	}
	catch(err) {
		expect(err.message).toBe("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	}
});

test("eaz.string.isA.number", () => {
	const integer = "5";
	expect(eaz.string.isA.number(integer)).toBe(true);
	
	const decimal = "5.5";
	expect(eaz.string.isA.number(decimal)).toBe(true);
	
	const lessThanOne = "0.5";
	expect(eaz.string.isA.number(lessThanOne)).toBe(true);
	
	const missingWhole = ".5";
	expect(eaz.string.isA.number(missingWhole)).toBe(true);
	
	const zeroDecimal = "5.0";
	expect(eaz.string.isA.number(zeroDecimal)).toBe(true);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.isA.number(nothingAfterDecimal)).toBe(true);
	
	const twoZeroDecimal = "5.00";
	expect(eaz.string.isA.number(twoZeroDecimal)).toBe(true);
	
	const lotsOfZeroDecimals = "5.000000000";
	expect(eaz.string.isA.number(lotsOfZeroDecimals)).toBe(true);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.isA.number(veryBigNumber)).toBe(true);
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.isA.number(infiniteNumber)).toBe(true);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.isA.number(infiniteNegativeNumber)).toBe(true);
	
	const exponent = "123e5";
	expect(eaz.string.isA.number(exponent)).toBe(true);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.isA.number(negativeExponent)).toBe(true);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.isA.number(lotsOfDigits)).toBe(true);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.isA.number(commaNumber1)).toBe(false);
	
	const commaNumber2 = "50,05";
	expect(eaz.string.isA.number(commaNumber2)).toBe(false);
	
	const commaNumber3 = "500,5";
	expect(eaz.string.isA.number(commaNumber3)).toBe(false);
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,5,,,,,";
	expect(eaz.string.isA.number(commaNumber4)).toBe(false);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.isA.number(twoDecimals)).toBe(false);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.isA.number(twoAdjacentDecimals)).toBe(false);
	
	const twoLeadingDecimals = "..5";
	expect(eaz.string.isA.number(twoLeadingDecimals)).toBe(false);
	
	const twoTrailingDecimals = "5..";
	expect(eaz.string.isA.number(twoTrailingDecimals)).toBe(false);
	
	const lotsOfDecimals = "...5.....5...";
	expect(eaz.string.isA.number(lotsOfDecimals)).toBe(false);
	
	const bothCommasAndDots = "5,000.00";
	expect(eaz.string.isA.number(bothCommasAndDots)).toBe(false);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.isA.number(spaceSeparatedNumber)).toBe(false);
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	expect(eaz.string.isA.number(spaceSeparatedBigNumber)).toBe(false);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.isA.number(paddedNumber)).toBe(true);
	
	const leftPaddedNumber = "  5";
	expect(eaz.string.isA.number(leftPaddedNumber)).toBe(true);
	
	const rightPaddedNumber = "5  ";
	expect(eaz.string.isA.number(rightPaddedNumber)).toBe(true);
	
	const underbars = "5_000_000";
	expect(eaz.string.isA.number(underbars)).toBe(false);
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	expect(eaz.string.isA.number(leadingZeros)).toBe(true);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.isA.number(binaryNumber)).toBe(true);
	
	const octalNumber = "0o377";
	expect(eaz.string.isA.number(octalNumber)).toBe(true);
	
	const hexNumber = "0x1";
	expect(eaz.string.isA.number(hexNumber)).toBe(true);
	
	const negativeInteger = "-5";
	expect(eaz.string.isA.number(negativeInteger)).toBe(true);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.isA.number(negativeDecimal)).toBe(true);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.isA.number(negativeWithSpace)).toBe(false);
	
	const str = "happy";
	expect(eaz.string.isA.number(str)).toBe(false);
	
	const date = "2016-12-31";
	expect(eaz.string.isA.number(date)).toBe(false);
	
	const empty = "";
	expect(eaz.string.isA.number(empty)).toBe(false);
	
	const space = " ";
	expect(eaz.string.isA.number(space)).toBe(false);
	
	const numberThenString = "10g";
	expect(eaz.string.isA.number(numberThenString)).toBe(false);
	
	const stringThenNumber = "g10";
	expect(eaz.string.isA.number(stringThenNumber)).toBe(false);
	
	const booleanTrue = "true";
	expect(eaz.string.isA.number(booleanTrue)).toBe(false);
	
	const booleanFalse = "false";
	expect(eaz.string.isA.number(booleanFalse)).toBe(false);
	
	const infinity = "Infinity";
	expect(eaz.string.isA.number(infinity)).toBe(false);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.isA.number(negativeInfinity)).toBe(false);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.isA.number(lowercaseInfinity)).toBe(false);
	
	const nullWord = "null";
	expect(eaz.string.isA.number(nullWord)).toBe(false);
	
	const undefinedWord = "undefined";
	expect(eaz.string.isA.number(undefinedWord)).toBe(false);
	
	const NaNword = "NaN";
	expect(eaz.string.isA.number(NaNword)).toBe(false);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.isA.number(wat)).toBe(false);
});

test("eaz.string.isA.integer", () => {
	const integer = "5";
	expect(eaz.string.isA.integer(integer)).toBe(true);
	
	const decimal = "5.5";
	expect(eaz.string.isA.integer(decimal)).toBe(false);
	
	const missingWhole = ".5";
	expect(eaz.string.isA.integer(missingWhole)).toBe(false);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.isA.integer(nothingAfterDecimal)).toBe(true);
	
	// .0 is implicitly omitted because a .0 decimal can be mathematically treated as an integer without any problems.
	// If you use 5.0 as an integer, nothing bad will ever happen in math.
	const zeroAsDecimal = "5.0";
	expect(eaz.string.isA.integer(zeroAsDecimal)).toBe(true);
	
	const zerosAfterDecimal = "5.000000";
	expect(eaz.string.isA.integer(zerosAfterDecimal)).toBe(true);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.isA.integer(veryBigNumber)).toBe(true);
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.isA.integer(infiniteNumber)).toBe(true);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.isA.integer(infiniteNegativeNumber)).toBe(true);
	
	const exponent = "123e5";
	expect(eaz.string.isA.integer(exponent)).toBe(true);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.isA.integer(negativeExponent)).toBe(false);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.isA.integer(lotsOfDigits)).toBe(true);
	
	const lotsOfDigitsWithZeroesDecimal = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493.00000000000";
	expect(eaz.string.isA.integer(lotsOfDigitsWithZeroesDecimal)).toBe(true);
	
	const lotsOfDigitsHiddenDecimal = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493";
	expect(eaz.string.isA.integer(lotsOfDigitsHiddenDecimal)).toBe(false);
	
	const lotsOfDigitsHiddenDecimalWithZeroes = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493.0000000";
	expect(eaz.string.isA.integer(lotsOfDigitsHiddenDecimalWithZeroes)).toBe(false);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.isA.integer(commaNumber1)).toBe(false);
	
	const commaNumber2 = "50,05";
	expect(eaz.string.isA.integer(commaNumber2)).toBe(false);
	
	const commaNumber3 = "500,5";
	expect(eaz.string.isA.integer(commaNumber3)).toBe(false);
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,5,,,,,";
	expect(eaz.string.isA.integer(commaNumber4)).toBe(false);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.isA.integer(twoDecimals)).toBe(false);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.isA.integer(twoAdjacentDecimals)).toBe(false);
	
	const twoLeadingDecimals = "..5";
	expect(eaz.string.isA.integer(twoLeadingDecimals)).toBe(false);
	
	const twoTrailingDecimals = "5..";
	expect(eaz.string.isA.integer(twoTrailingDecimals)).toBe(false);
	
	const lotsOfDecimals = "...5.....5...";
	expect(eaz.string.isA.integer(lotsOfDecimals)).toBe(false);
	
	const bothCommasAndDots = "5,000.00";
	expect(eaz.string.isA.integer(bothCommasAndDots)).toBe(false);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.isA.integer(spaceSeparatedNumber)).toBe(false);
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	expect(eaz.string.isA.integer(spaceSeparatedBigNumber)).toBe(false);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.isA.integer(paddedNumber)).toBe(true);
	
	const leftPaddedNumber = "  5";
	expect(eaz.string.isA.integer(leftPaddedNumber)).toBe(true);
	
	const rightPaddedNumber = "5  ";
	expect(eaz.string.isA.integer(rightPaddedNumber)).toBe(true);
	
	const underbars = "5_000_000";
	expect(eaz.string.isA.integer(underbars)).toBe(false);
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	expect(eaz.string.isA.integer(leadingZeros)).toBe(true);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.isA.integer(binaryNumber)).toBe(true);
	
	const octalNumber = "0o377";
	expect(eaz.string.isA.integer(octalNumber)).toBe(true);
	
	const hexNumber = "0x1";
	expect(eaz.string.isA.integer(hexNumber)).toBe(true);
	
	const negativeInteger = "-5";
	expect(eaz.string.isA.integer(negativeInteger)).toBe(true);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.isA.integer(negativeDecimal)).toBe(false);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.isA.integer(negativeWithSpace)).toBe(false);
	
	const str = "happy";
	expect(eaz.string.isA.integer(str)).toBe(false);
	
	const date = "2016-12-31";
	expect(eaz.string.isA.integer(date)).toBe(false);
	
	const empty = "";
	expect(eaz.string.isA.integer(empty)).toBe(false);
	
	const space = " ";
	expect(eaz.string.isA.integer(space)).toBe(false);
	
	const numberThenString = "10g";
	expect(eaz.string.isA.integer(numberThenString)).toBe(false);
	
	const stringThenNumber = "g10";
	expect(eaz.string.isA.integer(stringThenNumber)).toBe(false);
	
	const booleanTrue = "true";
	expect(eaz.string.isA.integer(booleanTrue)).toBe(false);
	
	const booleanFalse = "false";
	expect(eaz.string.isA.integer(booleanFalse)).toBe(false);
	
	const infinity = "Infinity";
	expect(eaz.string.isA.integer(infinity)).toBe(false);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.isA.integer(negativeInfinity)).toBe(false);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.isA.integer(lowercaseInfinity)).toBe(false);
	
	const nullWord = "null";
	expect(eaz.string.isA.integer(nullWord)).toBe(false);
	
	const undefinedWord = "undefined";
	expect(eaz.string.isA.integer(undefinedWord)).toBe(false);
	
	const NaNword = "NaN";
	expect(eaz.string.isA.integer(NaNword)).toBe(false);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.isA.integer(wat)).toBe(false);
});

test("eaz.string.isA.boolean", () => {
	const trueLower = "true";
	expect(eaz.string.isA.boolean(trueLower)).toBe(true);
	
	const trueUpper = "TRUE";
	expect(eaz.string.isA.boolean(trueUpper)).toBe(true);
	
	const trueMiXeD = "TrUe";
	expect(eaz.string.isA.boolean(trueMiXeD)).toBe(true);
	
	const falseLower = "false";
	expect(eaz.string.isA.boolean(falseLower)).toBe(true);
	
	const falseUpper = "FALSE";
	expect(eaz.string.isA.boolean(falseUpper)).toBe(true);
	
	const falseMiXeD = "FaLsE";
	expect(eaz.string.isA.boolean(falseMiXeD)).toBe(true);
	
	const tLower = "t";
	expect(eaz.string.isA.boolean(tLower)).toBe(true);
	
	const tUpper = "T";
	expect(eaz.string.isA.boolean(tUpper)).toBe(true);
	
	const fLower = "f";
	expect(eaz.string.isA.boolean(fLower)).toBe(true);
	
	const fUpper = "F";
	expect(eaz.string.isA.boolean(fUpper)).toBe(true);
	
	const one = "1";
	expect(eaz.string.isA.boolean(one)).toBe(true);
	
	const zero = "0";
	expect(eaz.string.isA.boolean(zero)).toBe(true);
	
	const startsWithT = "truish";
	expect(eaz.string.isA.boolean(startsWithT)).toBe(false);
	
	const startsWithF = "falsy";
	expect(eaz.string.isA.boolean(startsWithF)).toBe(false);
	
	const eleven = "11";
	expect(eaz.string.isA.boolean(eleven)).toBe(false);
	
	const double07 = "007";
	expect(eaz.string.isA.boolean(double07)).toBe(false);
});
