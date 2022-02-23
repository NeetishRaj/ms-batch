const arr = [1, 2, 3, 4, 5];

// return the sum of all elments

//Approach 1
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

//console.log(sum);

// Approach 2 : reduce

const result  = arr.reduce(function(acc, item) {
    console.log(`acc: ${acc}, item: ${item}`);

    return acc + item;
}, 0)