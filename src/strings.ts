/**
 * Capitalize the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Decapitalize the first letter of a string.
 * @param {string} str - The string to decapitalize.
 * @returns {string} The string with the first letter decapitalized.
 */
export function decapitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}


/**
 * Convert a string to camel case.
 * @param {string} str The input string.
 * @returns {string} The string in camel case.
 */
export function camelCase(str: string): string {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
}

/**
 * Convert a string to snake_case.
 * @param {string} str The string to convert.
 * @returns {string} The string converted to snake_case.
 */
export function toSnakeCase(str: string): string {
    return str.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase());
}

/**
 * Convert a string to kebab-case.
 * @param {string} str The string to convert.
 * @returns {string} The string converted to kebab-case.
 */
export function toKebabCase(str: string): string {
    return str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
}


/**
 * Convert a string to PascalCase.
 * @param {string} str The string to convert.
 * @returns {string} The string converted to PascalCase.
 */
export function toPascalCase(str: string): string {
    return str.replace(/\s\w/g, match => match.trim().toUpperCase()).replace(/^\w/, match => match.toUpperCase());
}

/**
 * Capitalize the first letter of each word in a string.
 * @param {string} str The string to capitalize.
 * @returns {string} The string with the first letter of each word capitalized.
 */
export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, match => match.toUpperCase());
}

/**
 * Reverse a given string.
 * @param {string} str The input string.
 * @returns {string} The reversed string.
 */
export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * Escape HTML special characters in a string.
 * @param {string} str The input string.
 * @returns {string} The string with HTML special characters escaped.
 */
export function escapeHTML(str: string): string {
    return str.replace(/[<>&"]/g, (char) => {
        switch (char) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            default: return char;
        }
    });
}

/**
 * Escape special characters in a string for use in a regular expression.
 * @param {string} str The string to escape.
 * @returns {string} The string with special characters escaped.
 */
export function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}



/**
 * Truncate a string to a specified length and add ellipsis if necessary.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the truncated string including the ellipsis.
 * @returns {string} The truncated string with ellipsis if it was truncated.
 */
export function truncateString(str: string, length: number): string {
    if (str.length <= length) {
        return str;
    }
    return str.slice(0, length - 3) + '...';
}


/**
 * Repeat a string a specified number of times.
 * @param {string} str The string to repeat.
 * @param {number} [count=10] The number of times to repeat the string. Default is 10.
 * @returns {string} The repeated string.
 */
export function repeatString(str: string, count: number = 10): string {
    return str.repeat(count);
}


/**
 * Check if a string starts with a given substring.
 * @param {string} str The string to check.
 * @param {string} searchString The substring to search for at the beginning of the string.
 * @returns {boolean} True if the string starts with the given substring, otherwise false.
 */
export function startsWith(str: string, searchString: string): boolean {
    return str.startsWith(searchString);
}


/**
 * Check if a string ends with a given substring.
 * @param {string} str The string to check.
 * @param {string} searchString The substring to search for at the end of the string.
 * @returns {boolean} True if the string ends with the given substring, otherwise false.
 */
export function endsWith(str: string, searchString: string): boolean {
    return str.endsWith(searchString);
}


/**
 * Check if a string includes a given substring.
 * @param {string} str The string to check.
 * @param {string} searchString The substring to search for within the string.
 * @returns {boolean} True if the string includes the given substring, otherwise false.
 */
export function includesSubstring(str: string, searchString: string): boolean {
    return str.includes(searchString);
}

/**
 * Count the occurrences of a substring in a string.
 * @param {string} str The string to search in.
 * @param {string} subString The substring to count occurrences of.
 * @returns {number} The number of occurrences of the substring in the string.
 */
export function countOccurrences(str: string, subString: string): number {
    const regex = new RegExp(subString, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}


/**
 * Remove leading and trailing whitespace from a string.
 * @param {string} str The string to trim.
 * @returns {string} The string with leading and trailing whitespace removed.
 */
export function trimWhitespace(str: string): string {
    return str.trim();
}


/**
 * Pad a string with a specified character to a given length.
 * @param {string} str The string to pad.
 * @param {number} length The desired length of the padded string.
 * @param {string} [char=' '] The character to use for padding. Default is space.
 * @returns {string} The padded string.
 */
export function padString(str: string, length: number, char: string = ' '): string {
    if (str.length >= length) {
        return str;
    }
    const padding = char.repeat(length - str.length);
    return str + padding;
}


/**
 * Remove non-ASCII characters from a string.
 * @param {string} str The string to remove non-ASCII characters from.
 * @returns {string} The string with non-ASCII characters removed.
 */
export function removeNonAscii(str: string): string {
    return str.replace(/[^\x00-\x7F]/g, '');
}


/**
 * Reverse the words in a string.
 * @param {string} str The string whose words to reverse.
 * @returns {string} The string with the words reversed.
 */
export function reverseWords(str: string): string {
    return str.split(/\s+/).reverse().join(' ');
}
