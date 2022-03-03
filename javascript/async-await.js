// async-await

// function say_hi() {
//     console.log("Hi there!");
// }

// say_hi();

// console.log("bye");


// we want to create an asynchronous example therefore we ll use setTimeout for say_hi method

// function say_hi() {
//     setTimeout(() => {
//         console.log("Hi there!");
//     }, 0);
// }

// say_hi();

// console.log("bye");


// We know working with async methods is easier if they are returning a Promise and we can use "then()"


// function say_hi() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi there!");
//             resolve();
//         }, 0);
//     })
// }

// say_hi().then(() => {
//     console.log("bye")
// });


// Now we made the syntax unncessarily complicated using Promise and there's a better way to do this using async
async function wrap() {


    let say_hi = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hi there!");
            resolve();
        }, 2000);
    })
    
    await say_hi;
    
    console.log("bye");
}

wrap();


/**
 * Few rules:
 * 
 * await makes the async code behaves like a synchronous code
 * 
 * 1. Await can only be used inside an async function
 * 
 * 2. 
 * 
 * 
 */