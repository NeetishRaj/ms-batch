// Abstraction: showing aonly what's necessary to the user. Hide the complexities.


// Example: Write a code to create a Coffee.


function boil_water() {
    console.log("Boil water!");
}

function ground_coffee_beans() {
    console.log("Ground coffee beans!");
}

function mix_coffee_with_water() {
    console.log("Mix coffee with water");
}

function add_cream() {
    console.log("Added cream!");
}

boil_water();
ground_coffee_beans();
mix_coffee_with_water();
add_cream();


// Above is not a good  way. Details are not encapsulated.

// Better way

function make_coffee() {
    console.log("Boil water!");
    console.log("Ground coffee beans!");
    console.log("Mix coffee with water");
    console.log("Added cream!");
}

make_coffee();