// understand resolve and reject callbacks in promise

function buy_milk() {
    return new Promise((resolve, reject) => {
        console.log("Started my bike to get milk");
        let is_accident_happened = true;

        setTimeout(() => {
            if(is_accident_happened) {
                console.log("Couldn't buy milk");
                reject("Hit a pole while watching youtube");
            } else {
                console.log("Bought milk");
                resolve(5);
            }
        }, 2000)
    });
}

const successCallback = (litres) => {
    console.log(`Bought ${litres}L Now I can make coffee`);

}

const failureCallback = (accidentReason) => {
    console.log(`Met an accident! ${accidentReason}`);
}

buy_milk()
    .then(successCallback, failureCallback);


/**
 * syntx for then()
 * 
 * then(successCallback, failureCallback)
 * 
 * 
 */

// Important: When using multiple promise then() chains. In that case we cannot use the second failureCallback argument. In that case  we use a catch() in the end

// buy_milk()
//     .then(successCallback1)
//     .then(successCallback2)
//     .catch(failureCallback)