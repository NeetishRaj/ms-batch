console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000);

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4);

//Everyone: 1 4 3 2
 