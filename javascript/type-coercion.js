// What is Type-Coercion/Type conversion?

// It is changing of the type for variables. It sometimes happens automatically(Implicit) and sometimes change types ourselves (explicit).

// Explicit type-coercion

let num = 9;
let num_str = "9";

//  Explicit type-coercion: from  string to number
console.log(num === Number(num_str));

//  Explicit type-coercion: from number to boolean
console.log(Boolean(num)) //true




// Implicit type-coercion

let a = 3;
let b = false;

console.log(a*b); // 0
/**
 * Internally JS compiler is doing this
 * 
 * console.log(a * Number(b));
 */

// Popular type-coercion examples

console.log(2 + "2"); //"22"
/**
 * Internally JS compiler is doing this
 * + is overloaded operator to support string addition and string addition priority is harder.
 * console.log(String(2) + "2");
 */

 console.log(2 + true); // 3
 /**
  * Internally JS compiler is doing this
  * console.log(2 + Number(true);
  */

console.log(2 + true + '2'); //'32'
 /**
  * Internally JS compiler is doing this
  * console.log((2 + true) + '2');
  * console.log(2 + Number(true)) +'2')
  * console.log(3 +'2')
  * console.log(String(3) +'2')
  */

 console.log(1 + true * '2') //3
 /**
  * Internally JS compiler is doing this
  * console.log(1 + (true * '2'));
  * console.log(1 + (Number(true) * Number('2')));
  * console.log(1 +(1 * 2))
  * console.log(1 + 2) //3
  */

//  GENERAL FORMULA

// Number + String = String;

// Number + Boolean = Number;

// Boolean + String = String;


// Priority
// String -> Number -> Boolean


