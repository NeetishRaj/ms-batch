//write a function to calculate simple interest in JavaScript.
//ASI  (Automatic semicolon insertion)

// let principle = 100;

const INTEREST_RATE = 10.25; 

// let time = 3;

// principle = 200;
// time = 6;
// //interest_rate = 12; illegal

// let simple_interest = (principle * INTEREST_RATE * time) / 100;

// console.log(simple_interest);




function CalculateSimpleInterest(principle, time) {

    if(!Number.isInteger(time))
        return null;
        
    const interest = (principle * INTEREST_RATE * time) / 100;
    const amount = principle + interest;

    console.log("Principle: " + principle +"₹");
    console.log("Interest: " + INTEREST_RATE + "%");
    console.log("Time: " + time + " Years");
    console.log("Amount: " + amount +"₹");
    
    return interest; 
}

CalculateSimpleInterest(100, 5);