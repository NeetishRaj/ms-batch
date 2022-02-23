let intervalI = setInterval(() => {
    console.log("HI");
}, 1000);

console.log("After interval");

// Lets close interval after 10 seconds
clearInterval(intervalId);
// setTimeout(() => {
// }, 10000);