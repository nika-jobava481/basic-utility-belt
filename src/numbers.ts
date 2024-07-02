











/**
 * Calculate the modulus of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The modulus of `a` divided by `b`.
 */
export function modulus(a: number, b: number): number {
    return a % b;
}



/**
 * Convert radians to degrees.
 * @param {number} radians - The angle in radians to convert.
 * @returns {number} The angle converted to degrees.
 */
export function radiansToDegrees(radians: number): number {
    return radians * (180 / Math.PI);
}



/**
 * Convert degrees to radians.
 * @param {number} degrees - The angle in degrees to convert.
 * @returns {number} The angle converted to radians.
 */
export function degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
}



/**
 * Generate a random integer within a specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {number} The generated random integer.
 */
export function randomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



/**
 * Generate a random float within a specified range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @returns {number} The generated random float.
 */
export function randomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}


/**
 * Format a number to a specified precision.
 * @param {number} num - The number to format.
 * @param {number} precision - The number of significant digits.
 * @returns {string} The formatted number as a string.
 */
export function toPrecision(num: number, precision: number): string {
    return num.toPrecision(precision);
}



/**
 * Format a number using fixed-point notation.
 * @param {number} num - The number to format.
 * @param {number} digits - The number of digits to appear after the decimal point.
 * @returns {string} The formatted number as a string.
 */
export function toFixed(num: number, digits: number): string {
    return num.toFixed(digits);
}



/**
 * Check if a number is a float.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is a float, false otherwise.
 */
export function isFloat(num: number): boolean {
    return Number(num) === num && !Number.isInteger(num);
}



/**
 * Check if a number is an integer.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is an integer, false otherwise.
 */
export function isInteger(num: number): boolean {
    return Number.isInteger(num);
}


/**
 * Check if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function isEven(num: number): boolean {
    return num % 2 === 0;
}

/**
 * Check if a number is odd.
 * @param {number} num - The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export function isOdd(num: number): boolean {
    return num % 2 !== 0;
}


/**
 * Clamp a number within a specified range.
 * @param {number} num The number to clamp.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} The clamped number.
 */
export function clamp(num: number, min: number, max: number): number {
    return Math.min(Math.max(num, min), max);
}

/**
 * Round a number to a specified number of decimal places.
 * @param {number} num The number to round.
 * @param {number} decimalPlaces The number of decimal places.
 * @returns {number} The rounded number.
 */
export function round(num: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

/**
 * Calculate the average of a variable number of numbers.
 * @param {...number} numbers The numbers.
 * @returns {number} The average of the numbers. Returns NaN if no numbers are provided.
 */
export function average(...numbers:number[]) {
    if (numbers.length === 0) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

/**
 * Calculate the sum of a variable number of numbers.
 * @param {...number} numbers The numbers.
 * @returns {number} The sum of the numbers.
 */
export function sum(...numbers:number[]) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}


/**
 * Calculate the factorial of a non-negative integer.
 * @param {number} num The non-negative integer.
 * @returns {number} The factorial of the number, or NaN if the number is negative.
 */
export function factorial(num: number): number {
    if (num < 0) return NaN; // Factorial of a negative number doesn't exist
    if (num === 0) return 1;
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

/**
 * Generate a Fibonacci sequence up to a specified number of terms.
 * @param {number} numTerms The number of terms in the Fibonacci sequence.
 * @returns {number[]} The Fibonacci sequence.
 */
export function fibonacci(numTerms: number): number[] {
    if (numTerms <= 0) return [];
    if (numTerms === 1) return [0];
    const seq = [0, 1];
    for (let i = 2; i < numTerms; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

/**
 * Check if a number is a prime number.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
export function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}


/**
 * Calculate the greatest common divisor of multiple numbers.
 * @param {...number} numbers Numbers for which to calculate the greatest common divisor.
 * @returns {number} The greatest common divisor.
 */
export function gcd(...numbers: number[]): number {
    if (numbers.length === 0) return NaN;
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcdTwoNumbers(result, numbers[i]);
    }
    return result;
}

/**
 * Calculate the least common multiple of multiple numbers.
 * @param {...number} numbers Numbers for which to calculate the least common multiple.
 * @returns {number} The least common multiple.
 */
export function lcm(...numbers: number[]): number {
    if (numbers.length === 0) return NaN;
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = lcmTwoNumbers(result, numbers[i]);
    }
    return result;
}


/**
 * Calculate the greatest common divisor of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The greatest common divisor.
 */
export function gcdTwoNumbers(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

/**
 * Calculate the least common multiple of two numbers.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The least common multiple.
 */
export function lcmTwoNumbers(a: number, b: number): number {
    return (a * b) / gcdTwoNumbers(a, b);
}

/**
 * Convert a number to a Roman numeral.
 * @param {number} num The number to convert.
 * @returns {string} The Roman numeral representation of the number.
 */
export function numberToRoman(num: number): string {
    const val = [
        1000, 900, 500, 400, 100, 90, 
        50, 40, 10, 9, 5, 4, 1
    ];
    const syb = [
        "M", "CM", "D", "CD", "C", "XC",
        "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    let roman = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            roman += syb[i];
        }
    }
    return roman;
}

/**
 * Convert a Roman numeral to a number.
 * @param {string} roman The Roman numeral to convert.
 * @returns {number} The numerical representation of the Roman numeral.
 */
export function romanToNumber(roman: string): number {
    const romanToInt: { [key: string]: number } = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let num = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanToInt[roman[i]];
        const next = romanToInt[roman[i + 1]];
        if (next > current) {
            num += next - current;
            i++;
        } else {
            num += current;
        }
    }
    return num;
}

