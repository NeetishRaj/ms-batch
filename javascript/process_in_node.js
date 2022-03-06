//console.log(process);

/**
 * What are the common uses of process object?
 * 
 * 1. Get the OS environment variables using 'process.env'
 * 
 * 2. Get the command line arguments using process.argv. 
 *
 */

// Now let's create an environment variable 'server_owner' and use it here.
console.log(process.env.SERVER_OWNER); // Neetish Raj


// no let's access the command line arguments
// if we type " node .\process_in_node.js name"
console.log(process.argv.slice(2)); //["name"]
