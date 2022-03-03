// Decorator pattern

/**
 * this patterns is one of the easiest patterns but highly powerful
 *  and are used heavily when working with Js libraries
 * 
 * Imp Note: We can add multiple decorators to a same function
 * 
 * 
 * Let's create 2 decorators and attach them to our convert_to_lower method
 * 
 * 1. For adding trimminng
 * 2. Remove numbers
 * 
 * Expected behaviour:
 * Once both decorators are attached to convert_to_lower  function then
 * using convert_to_lower we can also have the decorator functionalities.
 * 
 */
let convert_to_lower = (str) => {
    return str.toLowerCase();
}

console.log(convert_to_lower("   HELLO THERE 1234         "));



// Now let's create our first decorator trim_decorator
function trim_decorator(fn) {
    return (arg) => {

        const trimmed_arg = arg.trim();
        return fn(trimmed_arg)
    }
}

// Now let's decorate convert_to_lower
convert_to_lower = trim_decorator(convert_to_lower);

console.log(convert_to_lower("   HELLO THERE 1234         "));





// Now let's create our second decorator remove_num_decorator
function remove_num_decorator(fn) {
    return (arg) => {

        const numbers_removed_arg =  arg.replace(/\d/g, '')
        return fn(numbers_removed_arg)
    }
}

// Now let's decorate convert_to_lower
convert_to_lower = remove_num_decorator(convert_to_lower);

console.log(convert_to_lower("   HELLO THERE 1234         "));


