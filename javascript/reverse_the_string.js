
/**
 * write a function expression that takes a string as an argument and returns the string in reverse format
 * 
 * Example:
 * 
 * Input: "I love  Coding"
 * output: "gnidoC evol I"
 */

const reverse_string = function(str) {
    let reverse_str = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reverse_str += str[i];
    }

    return reverse_str;
}

const input = "I love  Coding";
const output = reverse_string(input);

console.log(output);