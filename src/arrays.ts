/**
 * Randomly shuffle the elements of an array.
 * @param {any[]} array The array to shuffle.
 * @returns {any[]} The shuffled array.
 */
export function shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Remove duplicates from an array.
 * @param {any[]} array The array to remove duplicates from.
 * @returns {any[]} The array with duplicates removed.
 */
export function uniqueArray(array: any[]): any[] {
    return Array.from(new Set(array));
}

/**
 * Flatten a nested array.
 * @param {any[]} array The nested array to flatten.
 * @returns {any[]} The flattened array.
 */
export function flattenArray(array: any[]): any[] {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}


/**
 * Split an array into chunks of a specified size.
 * @param {any[]} array The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {any[][]} An array containing the chunked arrays.
 */
export function chunkArray(array: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}
