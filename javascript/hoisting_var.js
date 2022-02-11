// Hoisting in JS


// var is hoisted but let and const are not

function test_hoisting() {
    console.log(test_var);  // undefined
    var test_var = 5;       // This is OK
    //const test_var = 0;   // ReferenceError: Cannot access 'test_var' before initialization
    //let test_var = 0;     // ReferenceError: Cannot access 'test_var' before initialization
    console.log(test_var);  // 05
}

/**
 * Explanation : Hoisting
 * 
 * During Hoisitng for var,  compiler will look for all 
 * the var declarations inside the function body and will 
 * hoist them to the top of the function and initialize them 
 * with undefined value
 * 
 * function test_hoisting() {
 *     var test_var = undefined; // Done by compiler and this is called hoisting
 *      
 *     console.log(test_var); // undefined
 *     test_var = 5; 
 *     console.log(test_var); //5
 * }
 * 
 */

test_hoisting();


// Hoisting is just something that we must be aware of,
// at one point it was useful for code conveneince to declare variables
// at any point in the code. 
// But now after let and const the use of var is deprecated