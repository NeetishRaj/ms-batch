// what is memoization?

/**
 * It's a caching technique to increase performance of pure functions being invoked frequently.
 */

function add(num) {
    return num + 10;
}

add(20); // 30
add(20); // 30

add(30); // 40


// Let's make the memoized version of add()

function memoized_add() {
    const cache = {};

    return function(num) {
        let result;
        
        if(num in cache) {
            console.log("From cache");
            
            result = cache[num];
            
        } else {
            console.log(`calculating for ${num} and adding to cache`);
            const temp = num + 10;
            result = cache[num] = temp;
        }
        
        console.log(cache);
        return result;
    }
}

const better_add = memoized_add();

console.log(better_add(20)); // 30
console.log(better_add(20)); // 30 from  cache
console.log(better_add(20)); // 30 from  cache
console.log(better_add(20)); // 30 from  cache


console.log(better_add(30)); // 40
console.log(better_add(30)); // 40 from cache

console.log(better_add(1000)); // 40