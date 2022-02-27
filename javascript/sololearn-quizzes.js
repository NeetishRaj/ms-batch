const a = ['a1', 'a2'];
const b = ['b1', 'b2'];
const c = ['c1', 'c2'];


const merged_array = c.concat(b).concat(a);

console.log(merged_array[3]);  //   ?

// Imp concept: Method chaining and return of array type

/////////////////////////////////////////////////


var x = 1;

for(; x < 6; x += 2){
    x = x * x;
}

console.log(x) // ?


// Imp Concept: Logic flow in for loop

//////////////////////////////////////////////////


var f = false;
var t = true;

console.log((f || t) && (f && t) || (f != t))   // ?

// Imp concept: AND OR operations and direction of operation

//////////////////////////////////////////////////

function sayName(name) {
    var name2  = name || 'noname' || undefined;
    console.log(name2);
}

sayName();

// Imp Concept: use of || for nulll/enpty check and allocating default  values

//////////////////////////////////////////////////


console.log("127.0" + Number("0.1"));   // ?

// Imp concept: Whenever a string is there on either side of + operator then it becomes a string addition

/////////////////////////////////////////////////



var a = (!undefined)
var b = (!NaN)
var c = (!null)
console.log(a + b + c);

// Imp concept: Implicit Boolean type conversion using not '!' operator and implicit Number type conversion.


///////////////////////////////////////////////////

val = 0
const obj = {
    val: 3,
    update: () => {
        this.val++;
    }
}
obj.update();

console.log(obj.val) //

// Imp Concept: Lexical scoping of this in arrow functions

////////////////////////////////////////////////////


const obj2 = {
    val: 3,
    update: function() {
        this.val++;
    }
}
obj2.update();

console.log(obj2.val); // ?

// Imp concept: Natural binding of 'this' with obj2 due to function syntax.

/////////////////////////////////////////////////////

const Counter = {
    count: 0,
    get count() {
        return this.count++;
    }
}

console.log(Counter.count); // ?
console.log(Counter.count); // ?
console.log(Counter.count); // ?

// Imp concept: getter with same name as property will go into infinite recursive call because  this.count points to the getter itself

//////////////////////////////////////////////////////


const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.filter(x => x % 2 === 0).reduce((acc, x) => acc + x))


// Imp concept: Method chaining of Array functions and default acc value as undefined

/////////////////////////////////////////////////////
