import eaz from "../eaz";

test("eaz.string.is_a.string", () => {
	expect(eaz.string.is_a.string("ahoy")).toBe(true);
	expect(eaz.string.is_a.string("12.5")).toBe(true);
	expect(eaz.string.is_a.string("")).toBe(true);
	expect(eaz.string.is_a.string(12.5)).toBe(false);
	try {
		eaz.string.is_a.string(new String("a String object"));
	}
	catch(err) {
		expect(err.message).toBe("The String type should not be used. It is not a 'string' type, which is confusing. It leads to bugs, it is discouraged in the industry, and it should not have been added to JavaScript.");
	}
});

test("eaz.string.is_a.number", () => {
	const integer = "5";
	expect(eaz.string.is_a.number(integer)).toBe(true);
	
	const decimal = "5.5";
	expect(eaz.string.is_a.number(decimal)).toBe(true);
	
	const lessThanOne = "0.5";
	expect(eaz.string.is_a.number(lessThanOne)).toBe(true);
	
	const missingWhole = ".5";
	expect(eaz.string.is_a.number(missingWhole)).toBe(true);
	
	const zeroDecimal = "5.0";
	expect(eaz.string.is_a.number(zeroDecimal)).toBe(true);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.is_a.number(nothingAfterDecimal)).toBe(true);
	
	const twoZeroDecimal = "5.00";
	expect(eaz.string.is_a.number(twoZeroDecimal)).toBe(true);
	
	const lotsOfZeroDecimals = "5.000000000";
	expect(eaz.string.is_a.number(lotsOfZeroDecimals)).toBe(true);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.is_a.number(veryBigNumber)).toBe(true);
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.is_a.number(infiniteNumber)).toBe(true);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.is_a.number(infiniteNegativeNumber)).toBe(true);
	
	const exponent = "123e5";
	expect(eaz.string.is_a.number(exponent)).toBe(true);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.is_a.number(negativeExponent)).toBe(true);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.is_a.number(lotsOfDigits)).toBe(true);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.is_a.number(commaNumber1)).toBe(false);
	
	const commaNumber2 = "50,05";
	expect(eaz.string.is_a.number(commaNumber2)).toBe(false);
	
	const commaNumber3 = "500,5";
	expect(eaz.string.is_a.number(commaNumber3)).toBe(false);
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,5,,,,,";
	expect(eaz.string.is_a.number(commaNumber4)).toBe(false);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.is_a.number(twoDecimals)).toBe(false);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.is_a.number(twoAdjacentDecimals)).toBe(false);
	
	const twoLeadingDecimals = "..5";
	expect(eaz.string.is_a.number(twoLeadingDecimals)).toBe(false);
	
	const twoTrailingDecimals = "5..";
	expect(eaz.string.is_a.number(twoTrailingDecimals)).toBe(false);
	
	const lotsOfDecimals = "...5.....5...";
	expect(eaz.string.is_a.number(lotsOfDecimals)).toBe(false);
	
	const bothCommasAndDots = "5,000.00";
	expect(eaz.string.is_a.number(bothCommasAndDots)).toBe(false);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.is_a.number(spaceSeparatedNumber)).toBe(false);
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	expect(eaz.string.is_a.number(spaceSeparatedBigNumber)).toBe(false);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.is_a.number(paddedNumber)).toBe(true);
	
	const leftPaddedNumber = "  5";
	expect(eaz.string.is_a.number(leftPaddedNumber)).toBe(true);
	
	const rightPaddedNumber = "5  ";
	expect(eaz.string.is_a.number(rightPaddedNumber)).toBe(true);
	
	const underbars = "5_000_000";
	expect(eaz.string.is_a.number(underbars)).toBe(false);
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	expect(eaz.string.is_a.number(leadingZeros)).toBe(true);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.is_a.number(binaryNumber)).toBe(true);
	
	const octalNumber = "0o377";
	expect(eaz.string.is_a.number(octalNumber)).toBe(true);
	
	const hexNumber = "0x1";
	expect(eaz.string.is_a.number(hexNumber)).toBe(true);
	
	const negativeInteger = "-5";
	expect(eaz.string.is_a.number(negativeInteger)).toBe(true);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.is_a.number(negativeDecimal)).toBe(true);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.is_a.number(negativeWithSpace)).toBe(false);
	
	const str = "happy";
	expect(eaz.string.is_a.number(str)).toBe(false);
	
	const date = "2016-12-31";
	expect(eaz.string.is_a.number(date)).toBe(false);
	
	const empty = "";
	expect(eaz.string.is_a.number(empty)).toBe(false);
	
	const space = " ";
	expect(eaz.string.is_a.number(space)).toBe(false);
	
	const numberThenString = "10g";
	expect(eaz.string.is_a.number(numberThenString)).toBe(false);
	
	const stringThenNumber = "g10";
	expect(eaz.string.is_a.number(stringThenNumber)).toBe(false);
	
	const booleanTrue = "true";
	expect(eaz.string.is_a.number(booleanTrue)).toBe(false);
	
	const booleanFalse = "false";
	expect(eaz.string.is_a.number(booleanFalse)).toBe(false);
	
	const infinity = "Infinity";
	expect(eaz.string.is_a.number(infinity)).toBe(false);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.is_a.number(negativeInfinity)).toBe(false);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.is_a.number(lowercaseInfinity)).toBe(false);
	
	const nullWord = "null";
	expect(eaz.string.is_a.number(nullWord)).toBe(false);
	
	const undefinedWord = "undefined";
	expect(eaz.string.is_a.number(undefinedWord)).toBe(false);
	
	const NaNword = "NaN";
	expect(eaz.string.is_a.number(NaNword)).toBe(false);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.is_a.number(wat)).toBe(false);
});

test("eaz.string.is_a.integer", () => {
	const integer = "5";
	expect(eaz.string.is_a.integer(integer)).toBe(true);
	
	const decimal = "5.5";
	expect(eaz.string.is_a.integer(decimal)).toBe(false);
	
	const missingWhole = ".5";
	expect(eaz.string.is_a.integer(missingWhole)).toBe(false);
	
	const nothingAfterDecimal = "5.";
	expect(eaz.string.is_a.integer(nothingAfterDecimal)).toBe(true);
	
	// .0 is implicitly omitted because a .0 decimal can be mathematically treated as an integer without any problems.
	// If you use 5.0 as an integer, nothing bad will ever happen in math.
	const zeroAsDecimal = "5.0";
	expect(eaz.string.is_a.integer(zeroAsDecimal)).toBe(true);
	
	const zerosAfterDecimal = "5.000000";
	expect(eaz.string.is_a.integer(zerosAfterDecimal)).toBe(true);
	
	const veryBigNumber = "1e100";
	expect(eaz.string.is_a.integer(veryBigNumber)).toBe(true);
	
	const infiniteNumber = "1e1000";
	expect(eaz.string.is_a.integer(infiniteNumber)).toBe(true);
	
	const infiniteNegativeNumber = "-1e1000";
	expect(eaz.string.is_a.integer(infiniteNegativeNumber)).toBe(true);
	
	const exponent = "123e5";
	expect(eaz.string.is_a.integer(exponent)).toBe(true);
	
	const negativeExponent = "123e-5";
	expect(eaz.string.is_a.integer(negativeExponent)).toBe(false);
	
	const lotsOfDigits = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493";
	expect(eaz.string.is_a.integer(lotsOfDigits)).toBe(true);
	
	const lotsOfDigitsWithZeroesDecimal = "8435784398523729857394573459834725894375894357834925739485734985723957435824735893275349573285734295437285732953275934573493.00000000000";
	expect(eaz.string.is_a.integer(lotsOfDigitsWithZeroesDecimal)).toBe(true);
	
	const lotsOfDigitsHiddenDecimal = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493";
	expect(eaz.string.is_a.integer(lotsOfDigitsHiddenDecimal)).toBe(false);
	
	const lotsOfDigitsHiddenDecimalWithZeroes = "843578439852372985739457345983472589437589435783492573948573498572395743582473589327534.9573285734295437285732953275934573493.0000000";
	expect(eaz.string.is_a.integer(lotsOfDigitsHiddenDecimalWithZeroes)).toBe(false);
	
	const commaNumber1 = "5,005";
	expect(eaz.string.is_a.integer(commaNumber1)).toBe(false);
	
	const commaNumber2 = "50,05";
	expect(eaz.string.is_a.integer(commaNumber2)).toBe(false);
	
	const commaNumber3 = "500,5";
	expect(eaz.string.is_a.integer(commaNumber3)).toBe(false);
	
	const commaNumber4 = ",,,,,,,,5,,,,0,,,,,,,,,,0,,,,,5,,,,,";
	expect(eaz.string.is_a.integer(commaNumber4)).toBe(false);
	
	const twoDecimals = "1.2.3";
	expect(eaz.string.is_a.integer(twoDecimals)).toBe(false);
	
	const twoAdjacentDecimals = "5..6";
	expect(eaz.string.is_a.integer(twoAdjacentDecimals)).toBe(false);
	
	const twoLeadingDecimals = "..5";
	expect(eaz.string.is_a.integer(twoLeadingDecimals)).toBe(false);
	
	const twoTrailingDecimals = "5..";
	expect(eaz.string.is_a.integer(twoTrailingDecimals)).toBe(false);
	
	const lotsOfDecimals = "...5.....5...";
	expect(eaz.string.is_a.integer(lotsOfDecimals)).toBe(false);
	
	const bothCommasAndDots = "5,000.00";
	expect(eaz.string.is_a.integer(bothCommasAndDots)).toBe(false);
	
	const spaceSeparatedNumber = "5 000";
	expect(eaz.string.is_a.integer(spaceSeparatedNumber)).toBe(false);
	
	const spaceSeparatedBigNumber = "5 000 000 000 000 000 000 000";
	expect(eaz.string.is_a.integer(spaceSeparatedBigNumber)).toBe(false);
	
	const paddedNumber = "  5  ";
	expect(eaz.string.is_a.integer(paddedNumber)).toBe(true);
	
	const leftPaddedNumber = "  5";
	expect(eaz.string.is_a.integer(leftPaddedNumber)).toBe(true);
	
	const rightPaddedNumber = "5  ";
	expect(eaz.string.is_a.integer(rightPaddedNumber)).toBe(true);
	
	const underbars = "5_000_000";
	expect(eaz.string.is_a.integer(underbars)).toBe(false);
	
	// Why would this be more offensive than 5.000000? Why the bias against unnecessary zeroes on the left of the decimal?
	const leadingZeros = "00000005";
	expect(eaz.string.is_a.integer(leadingZeros)).toBe(true);
	
	const binaryNumber = "0b11111111";
	expect(eaz.string.is_a.integer(binaryNumber)).toBe(true);
	
	const octalNumber = "0o377";
	expect(eaz.string.is_a.integer(octalNumber)).toBe(true);
	
	const hexNumber = "0x1";
	expect(eaz.string.is_a.integer(hexNumber)).toBe(true);
	
	const negativeInteger = "-5";
	expect(eaz.string.is_a.integer(negativeInteger)).toBe(true);
	
	const negativeDecimal = "-5.5";
	expect(eaz.string.is_a.integer(negativeDecimal)).toBe(false);
	
	const negativeWithSpace = "- 5";
	expect(eaz.string.is_a.integer(negativeWithSpace)).toBe(false);
	
	const str = "happy";
	expect(eaz.string.is_a.integer(str)).toBe(false);
	
	const date = "2016-12-31";
	expect(eaz.string.is_a.integer(date)).toBe(false);
	
	const empty = "";
	expect(eaz.string.is_a.integer(empty)).toBe(false);
	
	const space = " ";
	expect(eaz.string.is_a.integer(space)).toBe(false);
	
	const numberThenString = "10g";
	expect(eaz.string.is_a.integer(numberThenString)).toBe(false);
	
	const stringThenNumber = "g10";
	expect(eaz.string.is_a.integer(stringThenNumber)).toBe(false);
	
	const booleanTrue = "true";
	expect(eaz.string.is_a.integer(booleanTrue)).toBe(false);
	
	const booleanFalse = "false";
	expect(eaz.string.is_a.integer(booleanFalse)).toBe(false);
	
	const infinity = "Infinity";
	expect(eaz.string.is_a.integer(infinity)).toBe(false);
	
	const negativeInfinity = "-Infinity";
	expect(eaz.string.is_a.integer(negativeInfinity)).toBe(false);
	
	const lowercaseInfinity = "infinity";
	expect(eaz.string.is_a.integer(lowercaseInfinity)).toBe(false);
	
	const nullWord = "null";
	expect(eaz.string.is_a.integer(nullWord)).toBe(false);
	
	const undefinedWord = "undefined";
	expect(eaz.string.is_a.integer(undefinedWord)).toBe(false);
	
	const NaNword = "NaN";
	expect(eaz.string.is_a.integer(NaNword)).toBe(false);
	
	const wat = " \u00A0   \t\n\r";
	expect(eaz.string.is_a.integer(wat)).toBe(false);
});

test("eaz.string.is_a.boolean", () => {
	const trueLower = "true";
	expect(eaz.string.is_a.boolean(trueLower)).toBe(true);
	
	const trueUpper = "TRUE";
	expect(eaz.string.is_a.boolean(trueUpper)).toBe(true);
	
	const trueMiXeD = "TrUe";
	expect(eaz.string.is_a.boolean(trueMiXeD)).toBe(true);
	
	const falseLower = "false";
	expect(eaz.string.is_a.boolean(falseLower)).toBe(true);
	
	const falseUpper = "FALSE";
	expect(eaz.string.is_a.boolean(falseUpper)).toBe(true);
	
	const falseMiXeD = "FaLsE";
	expect(eaz.string.is_a.boolean(falseMiXeD)).toBe(true);
	
	const tLower = "t";
	expect(eaz.string.is_a.boolean(tLower)).toBe(true);
	
	const tUpper = "T";
	expect(eaz.string.is_a.boolean(tUpper)).toBe(true);
	
	const fLower = "f";
	expect(eaz.string.is_a.boolean(fLower)).toBe(true);
	
	const fUpper = "F";
	expect(eaz.string.is_a.boolean(fUpper)).toBe(true);
	
	const one = "1";
	expect(eaz.string.is_a.boolean(one)).toBe(true);
	
	const zero = "0";
	expect(eaz.string.is_a.boolean(zero)).toBe(true);
	
	const startsWithT = "truish";
	expect(eaz.string.is_a.boolean(startsWithT)).toBe(false);
	
	const startsWithF = "falsy";
	expect(eaz.string.is_a.boolean(startsWithF)).toBe(false);
	
	const eleven = "11";
	expect(eaz.string.is_a.boolean(eleven)).toBe(false);
	
	const double07 = "007";
	expect(eaz.string.is_a.boolean(double07)).toBe(false);
});
