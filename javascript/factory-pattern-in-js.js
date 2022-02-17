// Factory design patttern


/**
 * Question: Are yuou aware of any design patterns in programming?
 * Answer: Yes,  I know Factory design pattern
 * 
 * Question: What is Factory patter Or why to use Factory pattern?
 * Answer: Factory design pattern says that the responsibility of creating new instances/objects should be taken care by the Factory class for that class.
 * 
 * therefore in our example, we refrain from creating car objects directly but we have delegated the work to CarFactory class instead.
 * 
 *  */


class Car {
    constructor(color, wheels, headlight) {
        this.color = color;
        this.wheels = wheels;
        this.headlight = headlight;
        this.steering = 1;
    }

    getCarinfo () {
        console.log(`color: ${this.color}, wheels: ${this.wheels}, head-lights: ${this.headlight}`)
    }
}

// const c1 = new Car("red", 4, 2);
// const c2 = new Car("yellow", 4, 2);
// const c3 = new Car("gold", 4, 2);
// Above practice is bad, let's use Factory pattern

class CarFactory {
    constructor() {
        this.CarList = []
    }

    createCar(color, wheels, headLights) {
        const newCar = new Car(color, wheels, headLights);
        this.CarList.push(newCar);
    }
}

const carFactory = new CarFactory();


carFactory.createCar("red", 4, 2);
carFactory.createCar("yellow", 4, 2);
carFactory.createCar("gold", 4, 2);
carFactory.createCar("silver", 4, 2);
carFactory.createCar("pink", 4, 2);
carFactory.createCar("brown", 4, 2);


carFactory.CarList.forEach((car, index) => {
    car.getCarinfo();
})

console.log(carFactory.CarList);