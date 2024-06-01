

/**
 * Get the day of the year from a date.
 * @param {Date} date The date object from which to get the day of the year.
 * @returns {number} The day of the year (1-365 or 1-366 for leap years).
 */
export function getDayOfYear(date: Date): number {
    // Get the start of the year for the given date
    const startOfYear = new Date(date.getFullYear(), 0, 0);

    // Calculate the difference in milliseconds between the given date and the start of the year
    const diff = date.getTime() - startOfYear.getTime();

    // Convert milliseconds to days and add 1 (since January 1 is considered day 1)
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

    return dayOfYear;
}


/**
 * Get the week of the year from a date.
 * @param {Date} date The date object from which to get the week of the year.
 * @returns {number} The week of the year (1-52 or 1-53 depending on the year's configuration).
 */
export function getWeekOfYear(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneWeekInMilliseconds = 1000 * 60 * 60 * 24 * 7;
    const weekOfYear = Math.floor(diff / oneWeekInMilliseconds) + 1;
    return weekOfYear;
}





/**
 * Parse a date string into a date object.
 * @param {string} dateString The date string to parse.
 * @returns {Date | null} A Date object representing the parsed date, or null if parsing fails.
 */
export function parseDate(dateString: string): Date | null {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
        return null; // Parsing failed, return null
    }
    return parsedDate;
}

/**
 * Format a date object into a string.
 * @param {Date} date The date object to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}






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
 * Add a specified number of months to a date.
 * @param {Date} date The date object to which to add months.
 * @param {number} months The number of months to add. Positive values add months in the future, negative values subtract months.
 * @returns {Date} A new Date object with the specified number of months added.
 */
export function addMonths(date: Date, months: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
}


/**
 * Subtract a specified number of months from a date.
 * @param {Date} date The date object from which to subtract months.
 * @param {number} months The number of months to subtract. Positive values subtract months, negative values add months.
 * @returns {Date} A new Date object with the specified number of months subtracted.
 */
export function subtractMonths(date: Date, months: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() - months);
    return newDate;
}


/**
 * Add a specified number of years to a date.
 * @param {Date} date The date object to which to add years.
 * @param {number} years The number of years to add. Positive values add years in the future, negative values subtract years.
 * @returns {Date} A new Date object with the specified number of years added.
 */
export function addYears(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() + years);
    return newDate;
}

/**
 * Subtract a specified number of years from a date.
 * @param {Date} date The date object from which to subtract years.
 * @param {number} years The number of years to subtract. Positive values subtract years, negative values add years.
 * @returns {Date} A new Date object with the specified number of years subtracted.
 */
export function subtractYears(date: Date, years: number): Date {
    const newDate = new Date(date);
    newDate.setFullYear(newDate.getFullYear() - years);
    return newDate;
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
 * Check if a date falls on a weekend (Saturday or Sunday).
 * @param {Date} date The date object to check.
 * @returns {boolean} A boolean value indicating whether the date falls on a weekend.
 */
export function isWeekend(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 0: Sunday, 6: Saturday
}


/**
 * Check if a date falls on a weekday (Monday to Friday).
 * @param {Date} date The date object to check.
 * @returns {boolean} A boolean value indicating whether the date falls on a weekday.
 */
export function isWeekday(date: Date): boolean {
    const dayOfWeek = date.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 5; // Monday to Friday (1 to 5)
}




/**
 * Check if a year is a leap year.
 * @param {number} year The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year: number): boolean {
    if (year % 4 !== 0) return false;
    if (year % 100 !== 0) return true;
    if (year % 400 !== 0) return false;
    return true;
}


