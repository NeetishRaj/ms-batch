// String class in JS

// mMost important functions: split(), substring(), toLowercase(), toUpercase(), trim()

const str = "i love to code" || 'i love to code' || `i love to code`;

// charAt()
// Example: Ge the character at index 4
console.log(str.charAt(4)); //v


// concat()
// For example: Add two strings str and str2
const str2 = " & I code daily";
console.log(str.concat(str2));



const str_arr  = [
    "the good, bad and ugly",
    "independence day",
    "batlleship",
    "the man from earth",
    "finding nemo",
    "the godfather 1",

]
// startsWith()
// For example: filter out the strings starting with "the" from the str_arr

const filtered_items = str_arr.filter( movie => movie.startsWith("the"));
console.log(filtered_items);

// same as above but in function syntax
// const filtered_items = str_arr.filter( function(movie, index, arr) {
//     let is_movie_starting_with_the = movie.startsWith("the");

//     return is_movie_starting_with_the;
// })


// endsWith()
// For example: filter out the strings ending with "day" from the str_arr

const filtered_items2 = str_arr.filter( movie => movie.endsWith("day"));
console.log(filtered_items2);

// padEnd()
//For example: pad str with "*" 
console.log(str.padEnd(18, '*')); // i love to code*****


// repeat()
// for example repeat str 10 times
console.log(str.repeat(10));

// replace()
// for example: replace the word 'code' with 'workout' in str
console.log(str.replace('code', 'workout'));  //i love to workout


// toLowerCase()
const upper = "ABCDEF"
console.log(upper.toLowerCase()); //abcdef


// toUppercase()
const lower = "abcdef"
console.log(upper.toUpperCase()); //ABCDEF

//trim()
const str_with_unwanted_spaces_in_ends = " hello there      ";
console.log(`Before trim: "${str_with_unwanted_spaces_in_ends}"\nAfter trim:  "${str_with_unwanted_spaces_in_ends.trim()}"`);
