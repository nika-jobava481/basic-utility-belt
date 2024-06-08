/**
 * Calculate the median of an array of numbers.
 * @param {number[]} array The array of numbers.
 * @returns {number} The median value.
 */
export function arrayMedian(array: number[]): number {
    if (array.length === 0) {
        throw new Error("Array must not be empty");
    }

    const sortedArray = array.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2;
    } else {
        return sortedArray[middleIndex];
    }
}


/**
 * Find the minimum value in an array.
 * @param {number[]} array The array in which to find the minimum value.
 * @returns {number} The minimum value in the array.
 */
export function findMin(array: number[]): number {
    if (array.length === 0) {
        throw new Error("Array must not be empty");
    }

    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}



/**
 * Find the maximum value in an array.
 * @param {number[]} array The array in which to find the maximum value.
 * @returns {number} The maximum value in the array.
 */
export function findMax(array: number[]): number {
    if (array.length === 0) {
        throw new Error("Array must not be empty");
    }

    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}



/**
 * Remove duplicate elements from an array, leaving only non-duplicated values.
 * @param {any[]} array The array from which to remove duplicates.
 * @returns {any[]} An array with only non-duplicated values.
 */
export function removeDuplicates(array: any[]): any[] {
    const countMap = array.reduce((map, val) => {
        map[val] = (map[val] || 0) + 1;
        return map;
    }, {});

    return array.filter(val => countMap[val] === 1);
}



/**
 * Remove all falsy values from an array.
 * @param {any[]} array The array from which to remove falsy values.
 * @returns {any[]} An array with all falsy values removed.
 */
export function removeFalsyValues(array: any[]): any[] {
    return array.filter(Boolean);
}



/**
 * Get the symmetric difference of two arrays.
 * @param {any[]} array1 The first array.
 * @param {any[]} array2 The second array.
 * @returns {any[]} An array containing the elements that are present in either of the two arrays but not in both.
 */
export function arraySymmetricDifference(array1: any[], array2: any[]): any[] {
    const set1 = new Set(array1);
    const set2 = new Set(array2);

    const difference = new Set(
        [...set1].filter(element => !set2.has(element)).concat(
            [...set2].filter(element => !set1.has(element))
        )
    );

    return Array.from(difference);
}



/**
 * Get the union of two arrays.
 * @param {any[]} array1 The first array.
 * @param {any[]} array2 The second array.
 * @returns {any[]} An array containing all unique elements that are present in either array.
 */
export function arrayUnion(array1: any[], array2: any[]): any[] {
    return Array.from(new Set([...array1, ...array2]));
}


/**
 * Get the intersection of two arrays.
 * @param {any[]} array1 The first array.
 * @param {any[]} array2 The second array.
 * @returns {any[]} An array containing the elements that are present in both arrays.
 */
export function arrayIntersection(array1: any[], array2: any[]): any[] {
    return array1.filter(element => array2.includes(element));
}



/**
 * Get the difference between two arrays.
 * @param {any[]} array1 The first array.
 * @param {any[]} array2 The second array.
 * @returns {any[]} An array containing the elements that are present in the first array but not in the second array.
 */
export function arrayDifference(array1: any[], array2: any[]): any[] {
    return array1.filter(element => !array2.includes(element));
}


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
