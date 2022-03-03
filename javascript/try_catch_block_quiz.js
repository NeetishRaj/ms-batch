////////////////////////////////////
//Quiz 1
////////////////////////////////////

let a = 5;
const b = 10;
try {
    a = a * b;
    b = b * a;
    
} catch (error) {
    a = a + 10;
} finally {
    a = a + 10;
}

console.log(`a: ${a}, b: ${b}`);


////////////////////////////////////
//Quiz 2
////////////////////////////////////

let a = 5;
const b = 10;
try {
    a = a * b;

} catch (error) {
    a = a + 10;
} finally {
    a = a + 10;
}

console.log(`a: ${a}, b: ${b}`);



////////////////////////////////////
//Quiz 2
////////////////////////////////////

let a = 5;
const b = 10;
try {
    throw new Error("aise hi error daal diya!");
    a = a * b;
    
} catch (error) {
    a = a + 10;
} finally {
    a = a + 10;
}

console.log(`a: ${a}, b: ${b}`);