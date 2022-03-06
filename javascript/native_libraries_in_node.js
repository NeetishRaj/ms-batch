//  import operating system library
const os = require('os');
const fs = require('fs');


// What is the processor architecture of your machine?
console.log(os.arch()); //x64

console.log(os.cpus());



// how to create a new folder
console.log(fs.mkdir("folder1", () => {
    // Do the operations after creating a folder.
}));