//  Encapuslation : Bundling pof related methods and properties together.


let height = 1.85;

let weight = 85;

function calculate_bmi() {
    return Math.round(weight / (height * height));
}

console.log(`My BMI with height: ${height}m & weight: ${weight}Kg is ${calculate_bmi()}`);


// This is bad example of encapsualtion.

// Better way to write this would be.

// This is encapsulated, all variables and  logic are encapsulated within the function calculate_bmi
function calculate_bmi() {
    const HEIGHT = 1.85, WEIGHT = 85;

    const bmi = Math.round(WEIGHT / (HEIGHT * HEIGHT));

    console.log(`My BMI with height: ${HEIGHT}m & weight: ${WEIGHT}Kg is ${bmi}`);

    return bmi;
}