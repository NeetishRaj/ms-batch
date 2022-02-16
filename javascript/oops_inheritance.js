// Inheritance : Is resuse exisitng code and classify the hierarchy.


class BMW {
    constructor(color, wheels, headlight) {
        this.color = color;
        this.wheels = wheels;
        this.headlight = headlight;
    }

    drive() {
        console.log("Driving");
    }

    V8_engine() {
        console.log("V8 Engine");
    }
}


class Volvo {
    constructor(color, wheels, headlight) {
        this.color = color;
        this.wheels = wheels;
        this.headlight = headlight;
    }

    drive() {
        console.log("Driving");
    }

    crab_drive() {
        console.log("Crab Drive");
    }
}


// the problem here is that both classes share similar properties and method, this is bad.
// Better way to create a common parent class with similar properties.


class Car {
    constructor(color, wheels, headlight) {
        this.color = color;
        this.wheels = wheels;
        this.headlight = headlight;
    }

    drive() {
        console.log("Driving");
    }
}

class BMW extends Car {
    constructor(color, wheels, headlight){
        super(color, wheels, headlight)
    }

    V8_engine() {
        console.log("V8 Engine");
    }
}

class Volvo extends Car {
    constructor(color, wheels, headlight){
        super(color, wheels, headlight)
    }

    crab_drive() {
        console.log("Crab Drive");
    }
}



