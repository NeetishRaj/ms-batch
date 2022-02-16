const array_instance = new Array(10);

// Here Array.protoype.fill() is an instance method, 
// it means we alway shave to create an Array object/instance to call this method
array_instance.fill(1);



// Array.isArray() is a static method.
// it means that we can call this method without creating any object/instance.
Array.isArray(array_instance); // true



// Array source code would be something like this.

class Array {
    constructor(size) {
        this.length = size;
    }
}


Array.prototype.fill = function(arg) {
    //
}


Array.isArray = function (arg) {
    ///
}

