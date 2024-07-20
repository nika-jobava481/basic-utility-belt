

/**
 * Convert an object to an array of key-value pairs.
 * @param {Object} obj - The object to convert.
 * @returns {[string, any][]} An array of key-value pairs.
 */
export function objectToPairs(obj: { [key: string]: any }): [string, any][] {
    return Object.entries(obj);
}

/**
 * Convert an array of key-value pairs to an object.
 * @param {[string, any][]} pairs - The array of key-value pairs to convert.
 * @returns {Object} The resulting object.
 */
export function pairsToObject(pairs: [string, any][]): { [key: string]: any } {
    return Object.fromEntries(pairs);
}


/**
 * Perform a deep comparison between two values to determine if they are equivalent.
 * @param {any} value1 The first value to compare.
 * @param {any} value2 The second value to compare.
 * @returns {boolean} True if the values are equivalent, false otherwise.
 */
export function deepEqual(value1: any, value2: any): boolean {
    // Check if both values are strictly equal
    if (value1 === value2) {
        return true;
    }

    // If both values are objects, perform a deep comparison
    if (value1 && typeof value1 === 'object' && value2 && typeof value2 === 'object') {
        // Compare arrays
        if (Array.isArray(value1) && Array.isArray(value2)) {
            if (value1.length !== value2.length) {
                return false;
            }
            for (let i = 0; i < value1.length; i++) {
                if (!deepEqual(value1[i], value2[i])) {
                    return false;
                }
            }
            return true;
        } 
        // Compare objects
        else if (!Array.isArray(value1) && !Array.isArray(value2)) {
            const keys1 = Object.keys(value1);
            const keys2 = Object.keys(value2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (let key of keys1) {
                if (!deepEqual(value1[key], value2[key])) {
                    return false;
                }
            }
            return true;
        }
    }

    // If values are not strictly equal or objects, return false
    return false;
}


/**
 * Deeply clone an object.
 * @param {T} obj The object to clone.
 * @returns {T} A deep clone of the original object.
 */
export function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [] as unknown as T;
        for (let i = 0; i < (obj as unknown as any[]).length; i++) {
            (arrCopy as unknown as any[])[i] = deepClone((obj as unknown as any[])[i]);
        }
        return arrCopy;
    }

    const objCopy = {} as T;
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            (objCopy as unknown as { [key: string]: any })[key] = deepClone((obj as unknown as { [key: string]: any })[key]);
        }
    }
    return objCopy;
}


/**
 * Merge multiple objects into one.
 * @param {...object} objects The objects to merge.
 * @returns {object} The merged object.
 */
export function mergeObjects(...objects: object[]): object {
    return Object.assign({}, ...objects);
}
