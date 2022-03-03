/// creating decorators for functions with variable number of arguments


let sum = function(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1)) // 1
console.log(sum(1 , 2, 3, 4)) // 10
console.log(sum(100, -100)) // 0

// Let's create function counter decorator
function log_decorator(fn) {
    let function_execution_count = 0;

    return (...params) => {
        console.log(`Executed ${++function_execution_count} times`);

        return fn(...params);
    }
}

// let's decorate the sum function
sum = log_decorator(sum);

console.log(sum(1)) // 1
console.log(sum(1 , 2, 3, 4)) // 10
console.log(sum(100, -100)) // 0