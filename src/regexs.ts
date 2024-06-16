/**
 * Validate if a given string is a valid email address.
 * @param {string} email The email address to validate.
 * @returns {boolean} True if the email is valid, false otherwise.
 */
export function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate a URL format.
 * @param {string} url The URL to validate.
 * @returns {boolean} True if the URL format is valid, false otherwise.
 */
export function validateURL(url: string): boolean {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
}

/**
 * Validate a credit card number format.
 * @param {string} cardNumber The credit card number to validate.
 * @returns {boolean} True if the credit card number format is valid, false otherwise.
 */
export function validateCreditCard(cardNumber: string): boolean {
    const regex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
    return regex.test(cardNumber);
}

/**
 * Validate an IPv4 address format.
 * @param {string} ipv4 The IPv4 address to validate.
 * @returns {boolean} True if the IPv4 address format is valid, false otherwise.
 */
export function validateIPv4(ipv4: string): boolean {
    const regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return regex.test(ipv4);
}

/**
 * Validate an IPv6 address format.
 * @param {string} ipv6 The IPv6 address to validate.
 * @returns {boolean} True if the IPv6 address format is valid, false otherwise.
 */
export function validateIPv6(ipv6: string): boolean {
    const regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return regex.test(ipv6);
}

/**
 * Validate a date string format.
 * @param {string} dateStr The date string to validate.
 * @returns {boolean} True if the date string is valid, false otherwise.
 */
export function validateDate(dateString: string): boolean {
    const dateFormats = [
        /\d{4}-\d{2}-\d{2}/, // YYYY-MM-DD
        /\d{2}\/\d{2}\/\d{4}/, // DD/MM/YYYY
        /\d{2}\.\d{2}\.\d{4}/, // DD.MM.YYYY
        /\d{2}\/\d{2}\/\d{2}/, // MM/DD/YY
        /\d{2}-\d{2}-\d{4}/, // DD-MM-YYYY
        /\d{4}\/\d{2}\/\d{2}/, // YYYY/MM/DD
        /\d{4}\.\d{2}\.\d{2}/, // YYYY.MM.DD
        /\d{1,2}\/\d{1,2}\/\d{2,4}/, // D/M/YY or DD/MM/YY or D/M/YYYY or DD/MM/YYYY
        /\d{1,2}th \w+, \d{4}/i, // Dth MONTH, YYYY (e.g., 25th May, 2024)
        /\w+ \d{1,2}, \d{4}/i, // MONTH D, YYYY (e.g., May 25, 2024)
        /\w+ \d{1,2}th, \d{4}/i, // MONTH Dth, YYYY (e.g., May 25th, 2024)
        /\d{1,2} \w+ \d{4}/i, // D MONTH YYYY (e.g., 25 May 2024)
        /\d{4} \w+ \d{1,2}/i, // YYYY MONTH D (e.g., 2024 May 25)
        /\d{1,2}-\d{1,2}-\d{2}/, // D-D-YY or DD-DD-YY (e.g., 25-05-24 or 05-25-24)
        /\d{4} \d{2} \w+/i, // YYYY DD MONTH (e.g., 2024 25 May)
        /\d{4} \d{1,2}th \w+/i // YYYY Dth MONTH (e.g., 2024 25th May)
    ];

    return dateFormats.some(format => format.test(dateString));
}

