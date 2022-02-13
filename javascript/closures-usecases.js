// closures usecases


/**
 * 
 * Uses of closures 
 * 
 * 1. Simulate private members
 * 2. abstraction
 * 3. configurability
 */

//IIFE
const IIFE = (function(arg) {
    console.log(arg);

    let _private_var = 10;

    function get_private() {
        return _private_var;
    }

    function set_private(val) {
        _private_var = val;
    }

    return {
        get: get_private,
        set_private
    }
})("Passig value to IIFE");

console.log(IIFE);

//console.log(private_var); //ReferenceError: private_var is not defined
console.log(IIFE.get());

IIFE.set_private(20);

console.log(IIFE.get());

