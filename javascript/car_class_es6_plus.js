class Car {

    #privateType = "Private: Automobile"
    showPrivate() {
        console.log(this.#privateType);
    }

    // public
    type = "Public: Automobile"

    constructor(color, wheels, headlight) {
        this.color = color;
        this.wheels = wheels;
        this.headlight = headlight;
    }

    // Instance method
    dive() {
        onsole.log("Driving");
    }

    // Static method
    static drive() {
        console.log("Driving");
    }
}


const c1 = new Car("red", 4, 2);
const c2 = new Car("blue", 3, 3);
const c3 = new Car("white", 4, 6);

console.log(c1);
console.log(c2);
console.log(c3);


// get private variable
console.log(c1.privateType) // Invalid
c1.showPrivate();

// Things to remember to make normal function as a class
/**
 * 
 * 1. use 'this' to create class properties and methods.
 * 2. Use 'new' when invoking function to create objects.
 */


