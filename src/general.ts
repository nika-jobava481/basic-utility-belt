

/**
 * Generate a UUID (Universally Unique Identifier).
 * @returns {string} The generated UUID.
 */
export function generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/**
 * Parse a URL query string into an object.
 * @param {string} queryString The URL query string to parse.
 * @returns {Record<string, string>} The parsed object representing the query string.
 */
export function parseQueryString(queryString: string): Record<string, string> {
    const params = new URLSearchParams(queryString);
    const result: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
        result[key] = value;
    }
    return result;
}


/**
 * Convert a HEX color code to RGB.
 * @param {string} hex The HEX color code to convert.
 * @param {number} [opacity] The opacity of the color (optional, default is 1).
 * @returns {[number, number, number, number]} The RGBA representation of the color.
 */
export function hexToRgb(hex: string, opacity: number = 1): [number, number, number, number] {
    // Clamp opacity value to ensure it's within the range of 0 to 1
    const clampedOpacity = Math.min(1, Math.max(0, opacity));
    
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b, clampedOpacity];
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

