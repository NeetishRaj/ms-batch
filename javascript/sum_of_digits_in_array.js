/**
 * 
 * Input: [1, 2, 3, 45]
 * Output: 15
 * Exaplanation: 1 + 2 + 3 + 4 + 5 = 15
 * 
 * Input: [1, 0, 3, 4500]
 * Output: 15
 * Exaplanation: 1 + 0 + 3 + 4 + 5 + 0 + 0= 13
 * 
 * 
 * Input: [21, 22, 33]
 * Output: 13
 * Exaplanation: 2+1 + 2+2 +  3+3 = 13
 */

 function add_digits(number) {

    let sum = 0;

    while(number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }

    return sum;
}

function add_digits_in_array(digits_arr) {
    let sum = 0;

    // write logic
    for (let i = 0; i < digits_arr.length; i++) {
        sum = sum + add_digits(digits_arr[i])
    }

    return sum;
}

console.log(add_digits_in_array([1, 2, 3, 45]))