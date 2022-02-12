// push, pop, shift, unshift, splice, fill, reverse, sort

/**
 * Mutating Array methods change the original array 
 */

// push, pop, shift, unshift
const arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]

arr.pop(); // [1, 2, 3]

arr.unshift(0); // [0, 1, 2, 3]

arr.shift(); // [1, 2, 3]


// splice()
const num_arr = [1, 2, 3, 4]
// For example: Insert 2.2, 2. 5 and 2.7 between 2 and 3 in num_arr and then remove it bak to original
console.log(`Before splice: ${num_arr}`);

num_arr.splice(2, 0, 2.2, 2.5, 2.7)

console.log(`After splice: ${num_arr}`);

num_arr.splice(2, 3);

console.log(`Splice back to original: ${num_arr}`);


// fill()
// For example: Create an empty array of size 10 and fill them with 1
const arr_of_size_10 = new Array(10);
console.log(`Before fill: ${arr_of_size_10}`)
arr_of_size_10.fill(1);
console.log(`After fill: ${arr_of_size_10}`)


// reverse()
const num_array = [1, 2, 3, 4];
console.log(`Before reverse: ${num_array}`)

num_array.reverse();

console.log(`After reverse: ${num_array}`)


//sort()
const num_array_unsorted = [3, 1, 5, 56, 23, 9];

console.log(`Before sorting: ${num_array_unsorted}`)

num_array_unsorted.sort((a, b) => a - b);

console.log(`After sorting in ascending: ${num_array_unsorted}`)

num_array_unsorted.sort((a, b) => b - a);

console.log(`After sorting in descending: ${num_array_unsorted}`)




