// object basics
// Object is the default data structure made available to JS programmers


var obj = {
    key: "value",
    key2: 34,
    key3: true,
    key4: undefined,
    key5: () => {
        console.log("this is a function property!");
    },
    unique_string_and_non_keyword: "value",
    "neetish raj": 85,
}



// There are two ways to access object properties


// 1. Dot notation
// console.log(obj.key);
// console.log(obj.key2);
// console.log(obj.key3);
// console.log(obj.key4);
// console.log(obj.key5);

// 2. is [] brackets
// console.log(obj["key"]);
// console.log(obj["key2"]);
// console.log(obj["key3"]);
// console.log(obj["key4"]);
// console.log(obj["key5"]);
// console.log(obj["neetish raj"]);


// which to use when

// Always use dot Notation, and use [] only in these 3 situations

// situation1: invalid identifier keys ex. "abc xyz" or "^$%$%$89", "function"
console.log(obj["neetish raj"]);

// situation 2: When property name is itself a variable.
const var_key = "key_name";
const obj2 = {
    key_name: "Some value"
}
// console.log(obj2[var_key])

// situation 3: when we are using for-of loop to iterate over object properties.

// for (const iterator of object) {
//     // object[iterator] to access to property
// }


// const vs var vs let objects

// always keep the objects const
const obj5 = {
    key: "value",
    key1: 1
}
obj5.key1 = 8; // we can do this, (Mutating an object)
obj5.key2 = 10; // we can also add a new property
delete obj5.key // we can also delete an object propery
//obj5 = {};    // We cannot do this re-assignment

// console.log(obj5);

let obj6 = {
    key: "value",
    key1: 1
}
obj6.key1 = 8; // we can do this, (Mutating an object)
obj6.key2 = 10; // we can also add a new property
delete obj6.key // we can also delete an object propery
obj6 = {};    // We cannot do this re-assignment

console.log(obj6);