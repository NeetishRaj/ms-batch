 // Three ways to declare variables
// Old way
var a = 5;

a = 6 // OK
a = "HI" // OK
a = []   // OK
a = {}  // OK
a = function() {} // OK

// New way
let b = 10;
b = 6 // OK
b = "HI" // OK
b = []   // OK
b = {}  // OK
b = function() {} // OK

const c = 15;
c = 20;  // Not OK, Throw error