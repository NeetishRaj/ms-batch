// let str = "hi";

// let str2 = str;  // let str2 = "hi"

// console.log(str);
// console.log(str2);

// console.log("After changing str2");

// str2 = "hello";

// console.log(str);
// console.log(str2);
// // let my_object = {
// //     age: 28,
// //     sex: "MALE"
// // }

let obj1 =  {
    age: 28,
    sex: "MALE"
};

let obj2 = obj1; // obj2 = obj1, we do not create a fresh copy, we share the same reference

console.log("obj1")
console.log(obj1);
console.log("obj2")
console.log(obj2);

console.log("After changing obj2");

obj2.age = 80;

console.log("obj1")
console.log(obj1);
console.log("obj2")
console.log(obj2);