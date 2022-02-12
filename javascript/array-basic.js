const  array = [];
const array2 = new Array(10);

const dhoni_matches = [3, 27, 29, 37 , 29, 29, 18, 24, 16, 26, 12, 20, 13, 29, 20, 18];

// why cosnt for arrays

// 1. Dont want them to be resassign
// dhoni_matches = []

// 2. But we want them to able to modify
// dhoni_matches.push(0);
// console.log(dhoni_matches);

// 3. Always go  with const for functions, arrays and objects if you don't have to reassign.


//length
// Print dhoni's matches count since 2004 to 2019
// console.log(dhoni_matches.length);

// for (let i = 0, year = 2004; i < dhoni_matches.length; i++) {
//     console.log(`${year + i}: ${dhoni_matches[i]} matches`);
// }

// indexOf

console.log(dhoni_matches.indexOf(13))

// In which year dhoni played 13 matches
console.log(`Dhoni played 13 matches in ${2004 + dhoni_matches.indexOf(13)}`);


// reverse() will reverse the array elements.
console.log(dhoni_matches.reverse());



// Push(), Pop(), Shift() and Unshift()

const arr = [1, 2, 3];

arr.push(4); // [1, 2, 3, 4]

arr.pop(); // [1, 2, 3]

arr.unshift(0); // [0, 1, 2, 3]

arr.shift(); // [1, 2, 3]
