// lets' assume w


// function make_coffee() {
//     get_milk();
//     mix_coffee_with_milk();
// }

// function get_milk() {
//     setTimeout(() => {
//         console.log("1. Milk purchased!")
//     }, 2000);
// }

// function mix_coffee_with_milk() {
//     console.log("2. Coffee is mixed with milk and ready to serve!")
// }

// make_coffee();


// Above situation is incorrect, we have to wait for milk before mixing.
// let's fix above situation

function make_coffee() {
    get_milk(mix_coffee_with_milk);
    // mix_coffee_with_milk();
}

function get_milk(callback) {
    setTimeout(() => {
        console.log("1. Milk purchased!");
        callback();
    }, 3000);

    setTimeout(() => {
        console.log("1. Milk purchased! duplicate");
        // callback();
    }, 2000);
}

function mix_coffee_with_milk() {
    console.log("2. Coffee is mixed with milk and ready to serve!")
}

make_coffee();