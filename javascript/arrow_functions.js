// normal function

function print_name(name) {
    console.log(`Hello there! ${name}`);
}

print_name("Prakash");


// Arrow syntax
const print_name2 = (name)  => {
    console.log(`Hello there! ${name}`);
}

print_name2("Prashant");


// When single argument then parenthesis () becomes optional
const print_name3 = name  => {
    console.log(`Hello there! ${name}`);
}
print_name3("Raghav");


// when there is just a single return statement in the arrow function body then {} braces and return becomes optional

function get_salutation(name) {
    return `Hello there! ${name}`;
}

console.log(get_salutation("Neetish", 85));


const print_name4 = name => `Hello there! ${name}`;

console.log(print_name4("Parag"));


// When more than one argument then () is ncessary
const print_name4 = (name, age) => `Hello there! ${name}, age is ${age}`;

console.log(print_name4("Parag", 25));