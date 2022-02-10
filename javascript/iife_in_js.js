// Immediately invoked function expressions - (function(){})().

(function() {
    console.log("I am a function but I executed without invoking");
})();


//usecase of IIFE's is for 
// 1. Creating modules
// 2. abstraction and private members, 
// 3. and dependency injection.

//Example: Create a public method to Display a strip of asterisks (*) and a private method as well

// Created a Display Module with one public method and one private method
const Display = (function(){
    const public_display = function(count = 1) {
        for (let i = 0; i < count; i++) {
            console.log("**********************");            
        }
    }

    // Since we are not returning this method so it stays private
    const private_display = function() {
        console.log("######################");
        console.log("######################");
    }

    return {
        print: public_display,
    }

})();

Display.print(5);

//Display.private_display();  // TypeError: Display.private_display is not a function
// Display.public_display();
