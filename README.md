# Basic Utility Belt

Basic Utility Belt is a versatile collection of essential utility functions designed to simplify a wide range of common programming tasks. Whether you need to manipulate dates, perform arithmetic operations, or process strings, this toolkit has you covered. Enhance your development workflow with these reliable and easy-to-use functions, all in one convenient package.


## Navigation

- [Installation](#installation)
- [Features](#features)
- [Docs](#docs)
  - [General Utilities](#general-utilities)
  - [numbers](#numbers)
  - [dates](#dates)
  - [strings](#strings)
  - [objects](#objects)
  - [arrays](#arrays)
  - [regexs](#regexs)
- [License](#license)

## Installation

You can install Basic Utility Belt via npm:

npm install basic-utility-belt


## Features

- Arithmetic operations
- Date and time manipulation
- String processing
- and more...


## Docs

  - [General Utilities](#general-utilities)
  - [numbers](#numbers)
  - [dates](#dates)
  - [strings](#strings)
  - [arrays](#arrays)
  - [regexs](#regexs)

### General Utilities

- [generateUUID](#generateuuid)
- [objectToQueryString](#objectToQueryStringobj)
- [parseQueryString](#parsequerystringqueryString)
- [hexToRgb](#hextorgbhex-opacity)


#### generateUUID()

Generate a UUID (Universally Unique Identifier).

- Returns: The generated UUID.

#### objectToQueryString(obj)

Convert an object to a URL query string.

- `obj`: The object to convert.
- Returns: The URL query string.



#### parseQueryString(queryString)

Parse a URL query string into an object.

- `queryString`: The URL query string to parse.
- Returns: The parsed object representing the query string.


#### hexToRgb(hex, opacity?)

Convert a HEX color code to RGB.

- `hex`: The HEX color code to convert.
- `opacity`: The opacity of the color (optional, default is 1).
- Returns: The RGBA representation of the color.





### numbers

- [getRandomNumber](#getrandomnumbermin-max)
- [clamp](#clampnum-min-max)
- [round](#roundnum-decimalplaces)
- [average](#averagenumbers)
- [sum](#sumnumbers)
- [factorial](#factorialnum)
- [fibonacci](#fibonaccinumterms)
- [isPrime](#isprimenum)
- [gcd](#gcda-b)
- [lcm](#lcma-b)
- [numberToRoman](#numberToRomannum)
- [romanToNumber](#romanToNumberroman)

#### getRandomNumber(min, max)

Generate a random number within a specified range.

- `min`: The minimum value.
- `max`: The maximum value.
- Returns: A random number between min and max (inclusive).

#### clamp(num, min, max)

Clamp a number within a specified range.

- `num`: The number to clamp.
- `min`: The minimum value.
- `max`: The maximum value.
- Returns: The clamped number.

#### round(num, decimalPlaces)

Round a number to a specified number of decimal places.

- `num`: The number to round.
- `decimalPlaces`: The number of decimal places.
- Returns: The rounded number.


### average(...numbers)

Calculate the average of a variable number of numbers.

- `...numbers`: The numbers.
- Returns: The average of the numbers. Returns NaN if no numbers are provided.

### sum(...numbers)

Calculate the sum of a variable number of numbers.

- `...numbers`: The numbers.
- Returns: The sum of the numbers.

#### factorial(num)

Calculate the factorial of a number.

- `num`: The number to calculate the factorial of.
- Returns: The factorial of the number.

#### fibonacci(numTerms)

Generate a Fibonacci sequence up to a specified number of terms.

- `numTerms`: The number of terms in the Fibonacci sequence.
- Returns: The Fibonacci sequence.

#### isPrime(num)

Check if a number is a prime number.

- `num`: The number to check.
- Returns: True if the number is prime, false otherwise.

#### gcd(...numbers)

Calculate the greatest common divisor of multiple numbers.

- `...numbers`: Numbers for which to calculate the greatest common divisor.
- Returns: The greatest common divisor.

#### lcm(...numbers)

Calculate the least common multiple of multiple numbers.

- `...numbers`: Numbers for which to calculate the least common multiple.
- Returns: The least common multiple.

# Roman Numeral Conversion Library

Convert between numbers and Roman numerals.

#### numberToRoman(num)

Convert a number to a Roman numeral.

- `num`: The number to convert.
- Returns: The Roman numeral representation of the number.

#### romanToNumber(roman)

Convert a Roman numeral to a number.

- `roman`: The Roman numeral to convert.
- Returns: The numerical representation of the Roman numeral.




### dates

- [getDayOfYear](#getDayOfYeardate)
- [getweekOfYear](#getWeekOfYeardate)
- [parseDate](#parseDatedateString)
- [formatDate](#formatDatedate)
- [getCalendarDays](#getcalendardaysstartdate-enddate)
- [getWorkingDays](#getworkingdaysstartdate-enddate)
- [addDays](#adddaysdate-days)
- [subtractDays](#subtractdaysdate-days)
- [addMonths](#addMonthsdate-months)
- [subtractMonths](#subtractMonthsdate-months)
- [addYears](#addYearsdate-years)
- [subtractYears](#subtractYearsdate-years)
- [getDayOfWeek](#getdayofweekdate)
- [isWeekend](#isWeekenddate)
- [isWeekday](#isWeekdaydate)
- [isLeapYear](#isleapyearyear)

#### getDayOfYear(date)

Get the day of the year from a date.

- `date`: The date object from which to get the day of the year.
- Returns: The day of the year (1-365 or 1-366 for leap years).


#### getWeekOfYear(date)

Get the week of the year from a date.

- `date`: The date object from which to get the week of the year.
- Returns: The week of the year (1-52 or 1-53 depending on the year's configuration).




#### parseDate(dateString)

Parse a date string into a JavaScript Date object.

- `dateString`: The date string to parse.
- Returns: A Date object representing the parsed date, or null if parsing fails.

**Note:** Dates are returned in UTC time.

#### formatDate(date)

Format a date object into a string.

- `date`: The date object to format.
- Returns: The formatted date string.

**Note:** Dates are formatted in UTC time.


#### getCalendarDays(startDate, endDate)

Calculate the number of days between two dates, inclusive of both the start and end dates.

- `startDate`: The start date.
- `endDate`: The end date.
- Returns: The number of days between the two dates.

#### getWorkingDays(startDate, endDate)

Calculate the number of working days (Monday to Friday) between two dates, inclusive of both the start and end dates.

- `startDate`: The start date.
- `endDate`: The end date.
- Returns: The number of working days between the two dates.

#### addDays(date, days)

Add a specified number of days to a date.

- `date`: The date to add days to.
- `days`: The number of days to add.
- Returns: The new date after adding days.

#### subtractDays(date, days)

Subtract a specified number of days from a date.

- `date`: The date to subtract days from.
- `days`: The number of days to subtract.
- Returns: The new date after subtracting days.

#### addMonths(date, months)

Add a specified number of months to a date.

- `date`: The date object to which to add months.
- `months`: The number of months to add. Positive values add months in the future, negative values subtract months.
- Returns: A new Date object with the specified number of months added.

#### subtractMonths(date, months)

Subtract a specified number of months from a date.

- `date`: The date object from which to subtract months.
- `months`: The number of months to subtract. Positive values subtract months, negative values add months.
- Returns: A new Date object with the specified number of months subtracted.

#### addYears(date, years)

Add a specified number of years to a date.

- `date`: The date object to which to add years.
- `years`: The number of years to add. Positive values add years in the future, negative values subtract years.
- Returns: A new Date object with the specified number of years added.


#### subtractYears(date, years)

Subtract a specified number of years from a date.

- `date`: The date object from which to subtract years.
- `years`: The number of years to subtract. Positive values subtract years, negative values add years.
- Returns: A new Date object with the specified number of years subtracted.




#### getDayOfWeek(date)

Get the day of the week from a date.

- `date`: The date to get the day of the week from.
- Returns: The day of the week as a string.

#### isWeekend(date)

Check if a date falls on a weekend (Saturday or Sunday).

- `date`: The date object to check.
- Returns: A boolean value indicating whether the date falls on a weekend.

#### isWeekday(date)

Check if a date falls on a weekday (Monday to Friday).

- `date`: The date object to check.
- Returns: A boolean value indicating whether the date falls on a weekday.



#### isLeapYear(year)

Check if a year is a leap year.

- `year`: The year to check.
- Returns: `true` if the year is a leap year, `false` otherwise.

### strings

- [capitalize](#capitalizestr)
- [camelCase](#camelcasestr)
- [toSnakeCase](#toSnakeCasestr)
- [toKebabCase](#toKebabCasestr)
- [toPascalCase](#toPascalCasestr)
- [capitalizeWords](#capitalizeWordsstr)
- [reverseString](#reversestringstr)
- [escapeHTML](#escapehtmlstr)
- [escapeRegExp](#escapeRegExpstr)
- [truncateString](#truncateStringstr-length)
- [repeatString](#repeatStringstr-count)
- [startsWith](#startsWithstr-searchString)
- [endsWith](#endsWithstr-searchString)
- [includesSubstring](#includesSubstringstr-searchString)
- [countOccurrences](#countOccurrencesstr-subString)
- [trimWhitespace](#trimWhitespacestr)
- [padString](#padStringstr-length-char)
- [removeNonAscii](#removeNonAsciistr)
- [reverseWords](#reverseWordsstr)

#### capitalize(str)

Capitalize the first letter of a string.

- `str`: The input string.
- Returns: The string with the first letter capitalized.

#### camelCase(str)

Convert a string to camel case.

- `str`: The input string.
- Returns: The string in camel case.

#### toSnakeCase(str)

Convert a string to snake_case.

- `str`: The string to convert.
- Returns: The string converted to snake_case.

#### toKebabCase(str)

Convert a string to kebab-case.

- `str`: The string to convert.
- Returns: The string converted to kebab-case.

#### toPascalCase(str)

Convert a string to PascalCase.

- `str`: The string to convert.
- Returns: The string converted to PascalCase.

#### capitalizeWords(str)

Capitalize the first letter of each word in a string.

- `str`: The string to capitalize.
- Returns: The string with the first letter of each word capitalized.



#### reverseString(str)

Reverse a given string.

- `str`: The input string.
- Returns: The reversed string.

#### escapeHTML(str)

Escape HTML special characters in a string.

- `str`: The input string.
- Returns: The string with HTML special characters escaped.


#### escapeRegExp(str)

Escape special characters in a string for use in a regular expression.

- `str`: The string to escape.
- Returns: The string with special characters escaped.



#### truncateString(str, length)

Truncate a string to a specified length and add ellipsis if necessary.

- `str`: The string to truncate.
- `length`: The maximum length of the truncated string including the ellipsis.
- Returns: The truncated string with ellipsis if it was truncated.


#### repeatString(str, count)

Repeat a string a specified number of times.

- `str`: The string to repeat.
- `count`: The number of times to repeat the string. Default is 10.
- Returns: The repeated string.


#### startsWith(str, searchString)

Check if a string starts with a given substring.

- `str`: The string to check.
- `searchString`: The substring to search for at the beginning of the string.
- Returns: True if the string starts with the given substring, otherwise false.

#### endsWith(str, searchString)

Check if a string ends with a given substring.

- `str`: The string to check.
- `searchString`: The substring to search for at the end of the string.
- Returns: True if the string ends with the given substring, otherwise false.

#### includesSubstring(str, searchString)

Check if a string includes a given substring.

- `str`: The string to check.
- `searchString`: The substring to search for within the string.
- Returns: True if the string includes the given substring, otherwise false.

#### countOccurrences(str, subString)

Count the occurrences of a substring in a string.

- `str`: The string to search in.
- `subString`: The substring to count occurrences of.
- Returns: The number of occurrences of the substring in the string.


#### trimWhitespace(str)

Remove leading and trailing whitespace from a string.

- `str`: The string to trim.
- Returns: The string with leading and trailing whitespace removed.

#### padString(str, length, char)

Pad a string with a specified character to a given length.

- `str`: The string to pad.
- `length`: The desired length of the padded string.
- `char`: The character to use for padding. Default is space.
- Returns: The padded string.

#### removeNonAscii(str)

Remove non-ASCII characters from a string.

- `str`: The string to remove non-ASCII characters from.
- Returns: The string with non-ASCII characters removed.

#### reverseWords(str)

Reverse the words in a string.

- `str`: The string whose words to reverse.
- Returns: The string with the words reversed.



### objects
- [deepEqual](#deepEqualvalue1-value2)
- [deepClone](#deepCloneobj)
- [mergeObjects](#mergeObjectsobjects)


#### deepEqual(value1, value2)

Perform a deep comparison between two values to determine if they are equivalent.

- `value1`: The first value to compare.
- `value2`: The second value to compare.
- Returns: `true` if the values are equivalent, `false` otherwise.

#### mergeObjects(...objects)

Merge multiple objects into one.

- `...objects`: The objects to merge.
- Returns: The merged object.


#### deepClone(obj)

Deeply clone an object.

- `obj`: The object to clone.
- Returns: A deep clone of the original object.



### arrays

- [arrayMedian](#arrayMedianarray)
- [findMin](#findMinarray)
- [findMax](#findMaxarray)
- [removeDuplicates](#removeDuplicatesarray)
- [removeFalsyValues](#removeFalsyValuesarray)
- [arraySymmetricDifference](#arraySymmetricDifferencearray1-array2)
- [arrayUnion](#arrayUnionarray1-array2)
- [arrayIntersection](#arrayIntersectionarray1-array2)
- [arrayDifference](#arrayDifferencearray1-array2)
- [shuffleArray](#shufflearrayarray)
- [uniqueArray](#uniquearrayarray)
- [flattenArray](#flattenarrayarray)
- [chunkArray](#chunkarrayarray-size)

#### arrayMedian(array)

Calculate the median of an array of numbers.

- `array`: The array of numbers.
- Returns: The median value.


#### findMin(array)

Find the minimum value in an array.

- `array`: The array in which to find the minimum value.
- Returns: The minimum value in the array.


#### findMax(array)

Find the maximum value in an array.

- `array`: The array in which to find the maximum value.
- Returns: The maximum value in the array.


#### removeDuplicates(array)

Remove duplicate elements from an array, leaving only non-duplicated values.

- `array`: The array from which to remove duplicates.
- Returns: An array with only non-duplicated values.


#### removeFalsyValues(array)

Remove all falsy values from an array.

- `array`: The array from which to remove falsy values.
- Returns: An array with all falsy values removed.


#### arraySymmetricDifference(array1, array2)

Get the symmetric difference of two arrays.

- `array1`: The first array.
- `array2`: The second array.
- Returns: An array containing the elements that are present in either of the two arrays but not in both.


#### arrayUnion(array1, array2)

Get the union of two arrays.

- `array1`: The first array.
- `array2`: The second array.
- Returns: An array containing all unique elements that are present in either array.


#### arrayIntersection(array1, array2)

Get the intersection of two arrays.

- `array1`: The first array.
- `array2`: The second array.
- Returns: An array containing the elements that are present in both arrays.



#### arrayDifference(array1, array2)

Get the difference between two arrays.

- `array1`: The first array.
- `array2`: The second array.
- Returns: An array containing the elements that are present in the first array but not in the second array.


#### shuffleArray(array)

Randomly shuffle the elements of an array.

- `array`: The array to shuffle.
- Returns: The shuffled array.

#### uniqueArray(array)

Remove duplicates from an array.

- `array`: The array to remove duplicates from.
- Returns: The array with duplicates removed.

#### flattenArray(array)

Flatten a nested array.

- `array`: The nested array to flatten.
- Returns: The flattened array.

#### chunkArray(array, size)

Split an array into chunks of a specified size.

- `array`: The array to chunk.
- `size`: The size of each chunk.
- Returns: An array containing the chunked arrays.




### regexs

- [validateEmail](#validateemailemail)
- [validateURL](#validateurlurl)
- [validateCreditCard](#validatecreditcardcardnumber)
- [validateIPv4](#validateipv4ipv4Address)
- [validateIPv6](#validateipv6ipv6Address)
- [validateDate](#validatedatedateString)

#### validateEmail(email)

Validate an email address format.

- `email`: The email address to validate.
- Returns: `true` if the email address is valid, `false` otherwise.

#### validateURL(url)

Validate a URL format.

- `url`: The URL to validate.
- Returns: `true` if the URL is valid, `false` otherwise.

#### validateCreditCard(cardNumber)

Validate a credit card number format.

- `cardNumber`: The credit card number to validate.
- Returns: `true` if the credit card number is valid, `false` otherwise.

#### validateIPv4(ipv4Address)

Validate an IPv4 address format.

- `ipv4Address`: The IPv4 address to validate.
- Returns: `true` if the IPv4 address is valid, `false` otherwise.

#### validateIPv6(ipv6Address)

Validate an IPv6 address format.

- `ipv6Address`: The IPv6 address to validate.
- Returns: `true` if the IPv6 address is valid, `false` otherwise.

#### validateDate(dateString)

Validate a date string format.

- `dateString`: The date string to validate.
- Returns: `true` if the date string is valid, `false` otherwise. Note: This function supports many common date formats but may not cover all edge cases.





## License

This project is licensed under the MIT License - see the LICENSE file for details.
