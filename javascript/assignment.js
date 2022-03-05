// waf to create a random array of size 10 and return the sum.


function rand_sum_10() {
    // create an array of length 10 with random values
    const arr = new Array(10);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random()  * 10 );
    }

    // return the sum of all the items in the array

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}

console.log(rand_sum_10()) // random value