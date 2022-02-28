// Why destructuing?
/**
 * the things that we do using destructuing can also be done normally.
 * 
 * THE ONLY DIFFERENCE is convenient single line sytax, that's it.
 * 
 */

const arr = [1, 2, 3, 4, 5];

const firstElement = arr[0];
const secondElement = arr[1];

// using destructuring syntax

const [first, second, third, , fifth] = arr;

console.log(first);
console.log(second);
console.log(fifth);

// We can also do destructuring after variable declaaration.
let f, s;

[f, s] = arr;

console.log(f);
console.log(s);

// Real life example
/**
 * You have a URL
 * https://www.sololearn.com/profile/3083060
 * 
 * const arr = ['https', 'www', 'sololearn', ]
 * 
 * we would be working primarily with the first two variables
 */

const arr1 = ['https', 'www', 'sololearn', ];

const [protocol, prefix] = arr;



///////////////////////////////////
// Destructuring of Objects
//////////////////////////////////



const obj = {
    fullname: "john doe",
    age: 29
}

const fullname = obj.fullname;
const age = obj.age;


// const { fullname, age } = obj;

console.log(fullname); // john doe
console.log(age); // 29


// You can also change the name of variables like this.

const {fullname:fname} = obj;

console.log(fname); // john doe


// Practiccal use: Props passing React.