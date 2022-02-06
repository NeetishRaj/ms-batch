// Understand  the difference between == & ===
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness


let a = 4;
let b = 4;

let a_string = "4";

console.log(a == b); //true
console.log(a === b); //true

console.log(a == a_string); // true
console.log(a === a_string); // false

//==  : we compare only the value
//=== : we compare the value but we also compare the type


// It's always recommended to use strict comparison (===) in your actual code.