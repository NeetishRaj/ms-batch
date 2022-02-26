// Let's see the use of promise, i.e then()

function make_coffee() {
    get_milk()
        .then(() => boil_milk())
        .then(() => ground_coffee())
        .then(() => mix_milk_and_coffee());
}

make_coffee();

function get_milk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1. Getting milk done!");
            resolve();
        }, 2000);
    });
}

function boil_milk(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("2 .milk ready");
            resolve();
        },2000)
    });
}

function ground_coffee(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("3. Ground Cofee done");
            resolve();
        },2000)
    });
}

function mix_milk_and_coffee(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("4. mix milk and coffee done");
          resolve();
        }, 2000);
    });
}