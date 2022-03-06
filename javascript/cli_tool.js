// create a nodejs CLI tool to pass numbers on the CLI and return their sum

/**
 * for example: 
 * 
 * on command line if I type
 * >node ./cli_tool.js 1 2 3 4 45
 * >55 // output on the CLI
 * 
 */


// get the CLI arguments

const numbers = process.argv.slice(2);

// CLI args will be string, so parse them to numbers using Number() or parseInt()
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i]);
}

// perform the sum and console.log it
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);