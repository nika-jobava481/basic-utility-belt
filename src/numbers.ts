/**
 * Generate a random number within a specified range.
 * @param {number} min The minimum value.
 * @param {number} max The maximum value.
 * @returns {number} A random number between min and max (inclusive).
 */
export function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
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
 * Calculate the average of an array of numbers.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The average of the numbers.
 */
export function average(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

/**
 * Calculate the sum of an array of numbers.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
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

