// In JS there are 3 sytaxes to create a string


// 1: double quotes
const str1 = "used double quotes";
console.log(str1);

// 2: single quotes
const str2 = 'used single quotes';
console.log(str2);


//3: Using backquotes
const str3 = `used backquotes`;
console.log(str3);


/**
 * Which to use when?
 * 
 * Double quotes and single quotes can be used interchangeably and depend upon the project.
 * 
 * 
 * But back quotes is special as it is used when we want to do "string interpolation"
 * 
 * Let's see an example
 * 
 */

let weight = 85;
let height = 82;
let name = "Neetish";

let sentence1 = "Neetish's height is " + height +"cms and weight is " + weight + "Kgs.";
console.log(sentence1);

let sentence2 = 'Neetish\'s height is ' + height +'cms and weight is ' + weight + 'Kgs.';
console.log(sentence2);

// This is  called as string interpolation in JS
let sentence3 = `Neetish's height is ${height}cms and weight is ${weight}Kgs.`;
console.log(sentence3);