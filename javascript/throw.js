

// console.log("hello");

// throw new Error("manually throwing an error");

// console.log("bye");

// as always we can  catch the exception using try-catch

console.log("hello");

try {
    throw new Error("manually throwing an error");
} catch (error) {
    console.log(error.message);
}

console.log("bye");