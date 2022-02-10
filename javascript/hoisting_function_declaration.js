// In JS only the function declarations are hoisted not not function expressions


// Funcation declaration can be used before defining 
console.log(double1(2));

function double1(num) {
    return num *2;
}

// Funcation expression is not hoisted to the top

console.log(double2(3)); 
//ReferenceError: Cannot access 'double2' before initialization

const double2 = function(num) {
    return num * 2;
}