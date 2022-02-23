console.log("Hello there before async");

setTimeout(() => {
    console.log("Hello there async");
}, 1000);


console.log("Hello there after async");