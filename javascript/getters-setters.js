//  getters and setters

const obj = {
    name: "Neetish Raj",
    
    _: 85,
    get weight() {
        return this._;
    },
    
    certificates: [1234, 4567, 24324],
    get certificate(){
        return this.certificates[this.certificates.length - 1]
    },
    set certificate(val) {
        this.certificates.push(val);
    },
}

// Get last certificate
console.log(obj.certificates[obj.certificates.length - 1]);

// get weight
console.log(obj.weight); //85
obj.weight = 100;   // No use
console.log(obj.weight); //85


// since name is not behind a getter therefore it can easily be modified
obj.name = "Sunny";
console.log(obj.name);

// using getter 'certificate'
console.log(obj.certificate);

/**
 * Why we  use getters?
 * 
 * 1. It's a syntax to simplify access to object properties.
 * 
 * 2. It's doesn't allow direct mutation of the property.
 * 
 * 
 */





// setters

/**
 * 
 * When using getter you cannot directly change the value, so using setter you can set the value.
 * 
 * Or you can perform some operations that are required before setting.
 * */

console.log(obj.certificate); //24324

obj.certificate = 999999;

console.log(obj.certificate); //999999

