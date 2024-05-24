
/**
 * Calculate the number of days between two dates.
 * @param {Date} startDate The start date.
 * @param {Date} endDate The end date.
 * @returns {number} The number of days between the two dates.
 */
export function getCalendarDays(startDate: Date, endDate: Date): number {
    // Calculate the difference in milliseconds
    const differenceMs = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days
    const days = differenceMs / (1000 * 60 * 60 * 24);

    // Round the result to handle daylight saving time changes
    return Math.round(days);
}


/**
 * Calculate the number of working days (Monday to Friday) between two dates.
 * @param {Date} startDate The start date.
 * @param {Date} endDate The end date.
 * @returns {number} The number of working days between the two dates.
 */
export function getWorkingDays(startDate: Date, endDate: Date): number {
    let count = 0;
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Skip Sundays (0) and Saturdays (6)
            count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return count;
}



/**
 * Add a specified number of days to a date.
 * @param {Date} date The date to add days to.
 * @param {number} days The number of days to add.
 * @returns {Date} The new date.
 */
export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Subtract a specified number of days from a date.
 * @param {Date} date The date to subtract days from.
 * @param {number} days The number of days to subtract.
 * @returns {Date} The new date.
 */
export function subtractDays(date: Date, days: number): Date {
    return addDays(date, -days);
}

/**
 * Get the day of the week from a date.
 * @param {Date} date The date to get the day of the week from.
 * @returns {string} The day of the week.
 */
export function getDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

/**
 * Check if a year is a leap year.
 * @param {number} year The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year:number):boolean {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    if (year % 400 !== 0) return false;
    return true;
}



