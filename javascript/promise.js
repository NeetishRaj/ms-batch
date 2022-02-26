// Promise

/**
 * 
 * Promise is special way to write asynchronous code in js,
 * Where it is very convenient to create the flow of multiple async tasks.
 */


function boil_water() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boiling water!");
            resolve("Successfully boiled!");
        }, 2000)
    })
}


// const promise = boil_water();

// console.log(promise);

boil_water()
    .then((response) => {
        console.log(response);
    })