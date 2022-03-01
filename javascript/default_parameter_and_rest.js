// default parameters

/**
 * we can set default parameter for function parameters
 * 
 */

// function add(first = 1, second = 2, third  = 3) {

//     return first + second + third;

// }

// console.log(add(1, 2, 3));    // 6
// console.log(add())            // 6
// console.log(add(10, 20 , 30)) // 60


// console.log(add(10, 20)) // 10 + 20  + 3 = 33


// Imortant thing to note in default arguments is that,
//  the convention is we should keep the default arg paramters in the end

function add(first = 1, second = 2, third) {

    return first + second + third;

}

// Wanted to use default for first and second and use 10 for third
console.log(add(10)) // 10 + 2 + undefined = NaN

// BTW, There is a way to do this by passing 'undefined'
console.log(add(undefined, undefined, 10)) // 1 + 2 + 10 = 13



/////////////////////////////////////////////
// rest operator (...) in function parameters
/////////////////////////////////////////////

/**
 * Lets imagine a function which can take any number of argumenst and reference it.
 */

// function add_numbers(...args) {
//     // args is an array of all the arguments
//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }

//     return sum;
// }

// console.log(add_numbers(1)) // 1
// console.log(add_numbers(1, 2, 3, 4)) // 10

// we can also have dedicated parameters together with rest operator

function add_numbers(num1, num2, ...args) {
    // args is an array of all the arguments
    let sum = num1 + num2;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

console.log(add_numbers(5, 5)) // 10
console.log(add_numbers(5, 5, 5, 5)) // 20














