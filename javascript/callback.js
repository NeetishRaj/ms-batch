// callback?
// When we pass function as an argument to another function then it becomes a callback.



function greet(callback) {
    const name = "neetish";

    callback(name);
}

const func = (person_name) => {
    console.log(`Hello ${person_name}`);
}

greet(func);
