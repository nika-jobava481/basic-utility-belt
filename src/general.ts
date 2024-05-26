

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
