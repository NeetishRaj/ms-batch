// Whenever we treat functions like arguments and pass/return them to another function then we call it as higher order functions.

const print1 = (number) => {
    console.log(`The number is ${number}`)
}

const print2 = (number) => {
    console.log(`####### ${number} ######`)
}


const higher_order_function = (number, callback) => {

    // There would be some sort of operatio to get the number

    callback(number);
}

higher_order_function(10, print1);

higher_order_function(20, print2);

higher_order_function(30, (number) => {
    console.log(`******** ${number} *******`)
});



// Callback is common term in JS when functions are kept as parameters to another functions.