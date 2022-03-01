/**
 * spread (...) is used to extract the values of arrays and objects
 */

// For arrays

const odd = [1, 3, 5];
const even = [2, 4, 6];


const merge = [...odd, ...even];
console.log(merge);

// we can also put any other items in between
const merge2 = [0, ...odd, 3.5, 4.5, ...even, 10];
console.log(merge2);


// Imp Note: spread operator is often used to create copies of array with new reference
const copy_odd = [...odd]
console.log(copy_odd) // [1, 3, 5]


// For objects

const obj1 = {
    fullname: "john doe",
    age: 29
}

const obj2 = {
    sex: "male",
    address: {
        street: 'Levington',
        house: 49
    }
}

const merged_object = {
    ...obj1,
    ...obj2
}

console.log(merged_object);


// Quick assignment
// Merge few more address properties to main merged_object

const address_more = {
    lane: 2,
    areacode: 34567
}
// merged_address should look like below
// {
//     // other properties
//     address: {
//         street: 'Levington',
//         house: 49,
//         lane: 2,
//         areacode: 34567
//     }
// }

const merged_address = {
    ...merged_object,
    address: {
        ...merged_object.address,
        ...address_more
    }
}

console.log(merged_address);