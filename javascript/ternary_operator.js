

const age = 12;
const is_graduate = true;

let is_allowed = false;

if(age > 13 && is_graduate)
   is_allowed = true;
else
    is_allowed = false;


console.log(`Is person allowed to visit website: ${is_allowed}`);

// Let's re-write the whole if-else block and assigning part in ternary one-liner

/**
 * Ternary syntax
 * condition ? value1 : value2
 */

let is_allowed = age > 13 && is_graduate ? true : false; 
console.log(`Is person allowed to visit website: ${is_allowed}`);