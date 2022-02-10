
// Function declaration syntax
function double1(num) {
    return num *2;
}
console.log(double1(2));

// Function expression syntax
const double2 = function(num) {
    return num * 2;
}
console.log(double2(3));


// Differences
// 1. Declaration can be hoisted but expressions cannot.
// 2. In case of double2, it's not the function name but it's just a variable whose value is an anonymous function.

// When to use which?
// Whenever you have to pass function as an argument then go with function expression else function declaration is good



//Something extra to remember
//we can also have named function expression

const func = function(num) {
    return num * 2;
}

console.log(func(4));

// Just remember that a  anonymous function can be named but it serves no purpose.
const func2 = function double(num) {
    return num * 2;
}
console.log(func2(6));
//console.log(double(7));