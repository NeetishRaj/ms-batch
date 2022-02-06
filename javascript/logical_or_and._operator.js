
const age = 12;
const is_graduate = true;


if(age > 13 && is_graduate) {
    console.log("Allow them to visit this Site.")
} else {
    console.log("Not allowed: Age must be greater than 13 AND person must be a graduate");
}

if(age > 13 || is_graduate) {
    console.log("Allow them to visit this Site.")
} else {
    console.log("Not allowed: Age must be greater than 13OR person must be a graduate");
}

//One more usecase of || operator during assignment.

let x = null;
let y = 10;
let b = x || y || 0;

console.log(b);