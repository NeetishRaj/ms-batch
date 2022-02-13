/**
 * In general there are 3 levels of scope.
 * 
 * 
 * 1. Global scope: all the code resides in Global scope
 * 
 * 2. Function scope: Created by functions
 * 
 * 3. Block Scope: Created by blocks {}, only followed by let and const. var doesn't follow block scoping. 
 * 
 */

let global_var = "global_var"
console.log(`${global_var} is in global scope`);

function func() {
    let function_var = "function_var";
    console.log(`${function_var} is in 'func' scope i.e function name`);

    {
        let block_var = "block_var";
        console.log(`${block_var} is in global scope`);
    }
}

func();
