// without Promise

/**
 * Assumption: We have 2 time taking tasks
 * 
 * Task 1: Buy milk. It takes 2 seconds.
 * 
 * Task 2: Make Coffee. It takes 2 seconds.
 * 
 * 
 */

// function buy_milk() {
//     setTimeout(() => {
//         console.log("bought milk!")
//     }, 2000);
// }

// function mix_coffee_with_milk() {
//     setTimeout(() => {
//         console.log("Coffee milk mixed!")
//     }, 2000);
// }


// function  make_coffee() {
//     buy_milk();
//     mix_coffee_with_milk();
// }

// make_coffee();


// Problem above: mix_coffee_with_milk() is also starting at the same time as buy_milk()
// and getting completed in 2 seconds, this shouldn't happen
// Ideally: buy_milk() should finish first and then mix_coffee_with_milk() should start
// It should take 4 seconds to complete.


// Let's fix above problem by using callbacks

// function buy_milk(callback) {
//     setTimeout(() => {
//         console.log("bought milk!");
//         callback();
//     }, 2000);
// }

// function mix_coffee_with_milk() {
//     setTimeout(() => {
//         console.log("Coffee milk mixed!")
//     }, 2000);
// }


// function  make_coffee() {
//     buy_milk(mix_coffee_with_milk);
//     // mix_coffee_with_milk();
// }

// make_coffee();


/////////////////////////////////////////
// rewrite the above logic using Promise.
/////////////////////////////////////////

function buy_milk() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("bought milk!");
            resolve();
        }, 2000);
    });

    return promise;
}

function mix_coffee_with_milk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Coffee milk mixed!");
            resolve();
        }, 2000);
    })
}


function  make_coffee() {
    buy_milk()
        .then(() => mix_coffee_with_milk())
}

make_coffee();