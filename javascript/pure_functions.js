// Pure functions

// functions who always give same input when provided same output are pure functions.


// add() is a Pure function
function add(num1, num2) {
    return num1 + num2;
}

add(10, 20);  // It ll always 30
add(2.5, 3.6);  // It ll always 6.1


// random_add() is an Impure function
function random_add(num1) {
    const rand = Math.round(Math.random() * 10)
    return rand + num1;
}

console.log(random_add(10));  // random value between 10 & 20
console.log(random_add(10));  // random value between 10 & 20
console.log(random_add(10));  // random value between 10 & 20
console.log(random_add(10));  // random value between 10 & 20