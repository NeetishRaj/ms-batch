// Date class in JS

// Link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/**
 * Why Date is an important headache for programmers?
 * 
 * 
 * 1. time zones, Its 6AM in India but 6PM in USA, so we have to adjust the AMs PMs, Good evenings, good afternoons etc.
 * 
 * 2. dozens of ways to write dates
 *      16-02-2022
 *      16-2-2022
 *      16th Feb, 2022
 *      16 February, 2022
 *      2-16-2022
 *      16-02-2022 06:14:23 PM  
 * 
 * 3. In India we use this format DD-MM-YYYY, but in USA they use this format MM-DD-YYYY
 * 
 * 4. Clock systems
 *      - conventional calendar format
 *      - programming milliseconds since 1970 format
 * 
 * 5. Understand GMT, UTC formats
 * 
 */




// Get current date in conventional calendar format
console.log(new Date()); //2022-02-16T17:24:14.215Z


// Get current date in programming number format
console.log(Date.now());  // 1645032254221


// Now lets focus on converting from one format to another format

const date = new Date();

//Get today's date
console.log(date.getDate()) // 16

//Get this month
console.log(date.getUTCMonth()) //  11 for feb, 0 for January


// parse the date from string
const dateString = "01 Feb 2022 03:23:22 GMT";
const programmer_format = Date.parse(dateString);
console.log(programmer_format);