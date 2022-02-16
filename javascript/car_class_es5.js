function Car(color, wheels, headlight) {
    this.color = color;
    this.wheels = wheels;
    this.headlight = headlight;
}

// Instance method
Car.prototype.drive =  function() {
    console.log("Driving");
}

// static method
Car.drive = function() {
    console.log("Driving");
}

const c1 = new Car("red", 4, 2);
const c2 = new Car("blue", 3, 3);
const c3 = new Car("white", 4, 6);

console.log(c1);
console.log(c2);
console.log(c3);


// Things to remember to make normal function as a class
/**
 * 
 * 1. use 'this' to create class properties and methods.
 * 2. Use 'new' when invoking function to create objects.
 */


