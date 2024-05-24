/**
 * Capitalize the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
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
