/**
 * We have to write a JS function that adds the digits of a number.
 * 
 * Example: 
 * 
 * Input: 23
 * Output: 5
 * Explanation: 2 + 3 = 5
 * 
 * Input: 980
 * Output: 17
 * Explanation: 9 + 8 + 0 = 17
 * 
 *  */ 

function add_digits(number) {

    let sum = 0;

    while(number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}

console.log(add_digits(23));

console.log(add_digits(1200));

console.log(add_digits(1250000));
