//at, concat, find, findIndex, includes, join, slice

const arr = ["red", "blue", "green", "yellow"];

//at()
// Whenever we want the item at some index we use at()
// For example: Get the item in arr at index 2
//console.log(arr.at(2)); //green

// concat()
// Whenever we want to concatenate multiple arrays we use concat()
const arr2 = ["brown", "violet", "teal"]
// For example: Merge arr and arr2
const concatenated_array = arr.concat(arr2); //["red", "blue", "green", "yellow", "brown", "violet", "teal"] 
console.log(concatenated_array);

// find()
// For example: find if there is red color in arr
const find_red = (item) => {
    return item === "red";
}
const red = arr.find(find_red);
console.log(red); //red


// findIndex()
// For example: find at postion do we have red color in arr?

const find_red_index = (item) => {
    return item === "red";
}
const red_index = arr.findIndex(find_red_index);
console.log(red_index);  //0

// short arrow notation in on line
console.log(arr.findIndex(item => item === 'red')); // 0

// if something not found then it returns -1 as the index
console.log(arr.findIndex(item => item === "lime")); //  -1


// includes()
// For exmaple: Check if arr contains 'yellow'
const is_yellow_there = arr.includes("yellow");
console.log(`Is yellow there in arr: ${is_yellow_there}`);
console.log(`Is teal there in arr: ${arr.includes('teal')}`);


// join()
// For example: join a string array to form a sentence
const str_arr = ["I", "love", "to", "code"];
const joined_sentence = str_arr.join(" "); // "I love to code"
console.log(`Joined sentence: ${joined_sentence}`);


// slice()
// For example: slice arr from second item to end item
const arr_sliced = arr.slice(1)     // ["blue", "green", "yellow"]
console.log(`Sliced array is: ${arr_sliced}`);
console.log(`Slice from middle of arr: ${arr.slice(1, 3)}`); //["blue", "green"]