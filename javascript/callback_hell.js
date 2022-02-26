// Callback Hell


/**
 * Let's assume that our coffee making process consists of 4 time taking steps
 * 
 * 1. get_milk()  - 2 seconds
 * 2. boil_milk() - 2 seconds
 * 3. ground_coffee() - 2 seconds
 * 4. mix_milk_and_coffee() - 2 seconds
 * 
 * 
 * they all should executre in order one after another, taking overall 8 seconds
 */

// function make_cofee() {
//     get_milk();
//     boil_milk();
//     ground_coffee();
//     mix_milk_and_coffee();
// }

// make_cofee();

// function get_milk() {
//     setTimeout(() => {
//         console.log("1. Getting milk done!");
//     }, 2000);
// }

// function boil_milk(){
//     setTimeout(function(){
//         console.log("2 .milk ready");
//     },2000)
// }

// function ground_coffee(){
//     setTimeout(function(){
//         console.log("3. Ground Cofee done");
//     },2000)
// }

// function mix_milk_and_coffee(){
//     setTimeout(() => {
//       console.log("4. mix milk and coffee done");
//     }, 2000);
// }
 

// the problem in above code is all the 4 steps are taking 2 seconds and starting at the same time
// Let's fix this

function make_cofee() {

    get_milk(boil_milk);
    // boil_milk();
    // ground_coffee();
    // mix_milk_and_coffee();
}

make_cofee();

function get_milk(callback) {
    setTimeout(() => {
        console.log("1. Getting milk done!");
        callback();
    }, 2000);

}

function boil_milk(){
    setTimeout(function(){
        console.log("2 .milk ready");
        ground_coffee();
    },2000)
}

function ground_coffee(){
    setTimeout(function(){
        console.log("3. Ground Cofee done");
        mix_milk_and_coffee();
    },2000)
}

function mix_milk_and_coffee(){
    setTimeout(() => {
      console.log("4. mix milk and coffee done");
    }, 2000);
}