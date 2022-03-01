// Destructuring

/***
 * Destructuring is just a convenient syntax to extract variables out of Arrays and Objects
 * 
 * 
 * There are 2 types
 *  1. Array Destructuring
 *  2. Object destructuring
 * 
 * 
 * 
 * 
 */

const arr = [1, 2, 3, 4];

// const first = arr[0];
// const second = arr[1];

// Better syntax to create variables from array
const [first, second] = arr;

console.log(first);
console.log(second);

let f, s;
[f, s] = arr;

// above two lines same as "let [f, s] = arr;"
console.log(f); // 1
console.log(s);  // 2


// we can also skip items
const [, , third, fourth ] = arr;
console.log(third);
console.log(fourth);

/**
 * One common practical application of array destructuring is during URL parsing
 * 
 * http://es6-features.org/#SpreadOperator
 * 
 * ['http', '', 'es6-features', 'org', '#SpreadOperator']
 */
const [protocol, prefix] = ['http', '', 'es6-features', 'org', '#SpreadOperator'];
console.log(protocol);




///////////////////////
// Object Destructuring
///////////////////////


const obj = {
    fullname: "John Doe",
    age: 29,
    address: {
        street: "Levington",
        house: 49
    }
}

// const fullname = obj.fullname;
// const age = obj.age;

// Convenient Object destructuting syntax
const { fullname, age } = obj;

console.log(fullname);
console.log(age);

// If want to keep different variable name than actual object property name
const { fullname:fname, age:ageInYears } = obj;

console.log(fname);
console.log(ageInYears);


// Deep property extraction
const {address: { street }} = obj;
console.log(street); // levington

// Imp Note: Above address variable is not getting creatined


// Practical use: Passing props in React
