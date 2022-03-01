// Computed property names concept

/**
 * there are situations where we create object property names dynamically at run time
 * so we use 'computed property names' syntax to do this.
 */



// Assignment
// Write a function to return an object with 'n' properies named 'prop1', prop2' and son on
// Also property name will be prefixed with random 0 - 99 integer
// Sample input: 5
// Output: {prop1: 1, prop2: 2, prop3: 3, prop4: 4, prop5: 5}

function getIndex() {
    return Math.floor(Math.random() * 100);
}

function create_obj_with_dynamic_property_names(propCount) {
    const result = {};

    for (let i = 1; i <= propCount; i++) {
        result[getIndex() + `prop${i}`] = i
    }

    return result;
}

console.log(create_obj_with_dynamic_property_names(0));
console.log(create_obj_with_dynamic_property_names(3));
console.log(create_obj_with_dynamic_property_names(7));