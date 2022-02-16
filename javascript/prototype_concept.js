function Car(color, wheels, headlight) {
    this.color = color;
    this.wheels = wheels;
    this.headlight = headlight;

    this.drive = function() {
        console.log("Non-static but not from prototype: Driving");
    }
}

Car.prototype.drive =  function() {
    console.log("Non-static from prototype: Driving");
}

//  Static drive method
Car.drive =  function() {
    console.log("Static and not from prototype: Driving");
}

const c1 = new Car("red", 4, 2);
const c2 = new Car("blue", 3, 3);
const c3 = new Car("white", 4, 6);


c1.drive()

// valid
Car.drive();



// Few things to remember about Prototype

/**
 * 1. Every item in JS is inherited from 'Object'
 * 2. EWvery item will have an internal 'Protoype" property.
 * 3. We can actually see this inheritance chain through the prototype chaining (__prot__).
 * 4. To make static members we have to use like this "Car.drive = () => {}"
 */