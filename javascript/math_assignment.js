// Write a program to generate 100 random numbers between 100 and 1000 and  return them as comma separated string.
// Expected output: "234, 456, 121, ,,,,,,,,,"  100 times

// Let's break the problem statement

// 1. Generate a random number between 100 & 1000
// 2. Round and add to string.
// 3. Do this exactly 100 times  

function get_100_random_integers() {
    let count = 0;
    let result = ""

    while(count < 100){

        const num = Math.round(Math.random() * 1000);
    
        if(num > 100 && num < 1000) {
            result += `${num}, `;
            count++;
            //console.log(`${count}. ${num} `);
        }
    }

    return result;
}

console.log(get_100_random_integers())