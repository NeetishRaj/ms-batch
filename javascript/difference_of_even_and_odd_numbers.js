/**
 * 
 * Difference of sum of even and odd numbers.
 * 
 * 
 * Input: [1, 2, 3, 4, 5]
 * Output: -3
 * Explanation: 
 *  Sum of even number - sum of odd numbers
 * (2 + 4)             - ( 1 + 3 + 5)   
 *  6                  - 9
 * -3    
 */

function difference_of_odd_even(arr) {
    let difference = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0)
            difference += arr[i];
        else
            difference -= arr[i];
    }

    return difference;
}

console.log(difference_of_odd_even( [1, 2, 3, 4, 5]))