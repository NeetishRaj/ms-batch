/**
 * 
 * One of the common implementations for decorator pattern is to 
 * decorate functions with error hadling capability.
 * 
 * Le't create a memoize decorator
 */

let square = (num) => {
    return num * num;
}


function memoize_decorator(fn){
    const cache = {};

    return (arg) => {
        const arg_string = arg.toString();

        if(arg_string in cache) {
            console.log("Returned from cache");
            return cache[arg_string];
        } else {
            const result  = fn(arg);
            console.log(`{'${arg}':${result}} added to cache`);
            cache[arg_string] = result;
            
            return result;
        }
    }
}


// console.log(square(3)) // 9
// console.log(square(4)) // 16
// console.log(square(4)) // 16


// NOw let's decorate it using memoize_decorator
square = memoize_decorator(square);

console.log(square(3)) // 9 added to cache
console.log(square(4)) // 16  added to cache
console.log(square(4)) // 16 from cache


