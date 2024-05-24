# Basic Utility Belt

Basic Utility Belt is a versatile collection of essential utility functions designed to simplify a wide range of common programming tasks. Whether you need to manipulate dates, perform arithmetic operations, or process strings, this toolkit has you covered. Enhance your development workflow with these reliable and easy-to-use functions, all in one convenient package.


## Navigation

- [Installation](#installation)
- [Features](#features)
- [Docs](#docs)
  - [numbers.js](#numbersjs)
  - [dates.js](#datesjs)
- [License](#license)

## Installation

You can install Basic Utility Belt via npm:

npm install basic-utility-belt


## Features

- Arithmetic operations
- Date and time manipulation
- String processing
- File utilities
- and more...


## Docs

  - [numbers.js](#numbersjs)
  - [dates.js](#datesjs)

### numbers.js

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

#### average(numbers)

Calculate the average of an array of numbers.

- `numbers`: The array of numbers.
- Returns: The average of the numbers.

#### sum(numbers)

Calculate the sum of an array of numbers.

- `numbers`: The array of numbers.
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



### dates.js

- [getCalendarDays](#getcalendardaysstartdate-enddate)
- [getWorkingDays](#getworkingdaysstartdate-enddate)
- [addDays](#adddaysdate-days)
- [subtractDays](#subtractdaysdate-days)
- [getDayOfWeek](#getdayofweekdate)
- [isLeapYear](#isleapyearyear)

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

#### getDayOfWeek(date)

Get the day of the week from a date.

- `date`: The date to get the day of the week from.
- Returns: The day of the week as a string.

#### isLeapYear(year)

Check if a year is a leap year.

- `year`: The year to check.
- Returns: `true` if the year is a leap year, `false` otherwise.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
