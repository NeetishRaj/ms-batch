// Native Object methods in JS

//Object.prototype.hasOwnProperty()
// it's used to check whether a property exist in the object or not

const obj = {
    fullname: "John Doe",
    age: 29
}

// console.log(obj.hasOwnProperty('fullname')) // true
// console.log(obj.hasOwnProperty('age'))      // true
// console.log(obj.hasOwnProperty('random'))   // false

// // usually we use shorter 'in' syntax

// console.log('fullname' in obj) // true
// console.log('age' in obj)      // true
// console.log('random' in obj)   // false



// Object.Create()
// The Object.create() method creates a new object (new reference), using an existing object as the prototype of the newly created object

//const new_object = obj;
const new_object = Object.create(obj);

// console.log(new_object); // {}
// console.log(new_object.fullname) // "John Doe"
// console.log(new_object.age) // "John Doe"






// Object.entries(), Object.keys() and Object.values()

const person = {
    fullname: "John Doe",
    age: 29,
    sex: "male",
    address: "Hawaai",
    isMarried: false
}

// If we want the key, value pairs in person
const key_value_pairs = Object.entries(person);
// console.log(key_value_pairs);
// [["fullname", "John Doe"], ["age", 29], and so on.....]

// If we only want the keys
const keys = Object.keys(person);
// console.log(keys);
// [ 'fullname', 'age', 'sex', 'address', 'isMarried' ]

// If we only want the values
const values = Object.values(person);
// console.log(values);
// [ 'John Doe', 29, 'male', 'Hawaai', false ]





// - Object.freeze(), Object.isFrozen()
// if we want to make sure that our objects cannot be modified then we freeze them


const employee = {
    fullname: "John Doe",
    age: 29,
    sex: "male",
    address: "Hawaai",
    isMarried: false
}

//we want to make sure that no one is able to mutate this object.
Object.freeze(employee) // If we do this then none of the mutations will apply

employee.fullname = "Joker" // dont want this to happen
employee.isCrazy = true;   // dont want this to happen
delete employee.isMarried // dont want this to happen

console.log(employee);

// {
//     fullname: 'Joker',
//     age: 29,
//     sex: 'male',
//     address: 'Hawaai',
//     isCrazy: true
// }

// Note: Since Array are also derived from Object type therefore we can also freeze arrays
const arr = [1, 2, 3, 4]
Object.freeze(arr);
// arr.push(5);
console.log(arr); // [1, 2, 3, 4]



// Object.assign
// this method is used to merege multiple objects together.
// https://neetishop.medium.com/copying-objects-in-javascript-with-built-in-functions-5ec5df8357ea
// https://neetishop.medium.com/why-use-object-assign-582dcdcab6f6

