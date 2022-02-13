// Functions that return functions 


/**
 * Higher order function: Any function that accepts or return another function
 * 
 * Wrapper: It's a function that returns another function. Example: add()
 * 
 * Thunk: It's a function that is returned by the wrapper function. Example: add_10()
 * 
 * Closure: It's created when function returns another function and the variable in wrapper function behaves like a private member. Exmaple: num in line 22 behaves as private variable.
 *  
 * 
 */




// wrapper function
function add(){
    const num = 10;
    // Thunk function
    return function(num2){
        return num + num2;
    }
}

const add_10 = add();


const val = add_10(20);

console.log(val);

console.log(add_10(100));
console.log(add_10(200));
console.log(add_10(300));