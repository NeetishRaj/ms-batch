// Try catch

/***
 * Try-catch is error handling mechanism available in all programming languages.
 * 
 */


// WHy try-catch block?

// const a = 5;
// a = 10;

// console.log("This line will never be executed because of the error above")

// Whenever we feel that some code may throw error we can can take care of it using try catch

const a = 5;

try {
    a = 10;
} 
catch(e) {
    console.log(e.message);
}

console.log("Now this line will execute");


// Whenever an error happens then internally it throws an exception
// we can simulate throwing of an exception.



