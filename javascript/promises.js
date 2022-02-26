/**
 * 
 * Why use Promise?
 * 
 * Because more convenient syntax and easier to work with multiple asynchronous operation.
 * 
 * 
 * What is the Structure of Promise?
 * Promise is basically a async return type where we have 3 states
 * 
 * 1. Resolved
 * 2. Rejected
 * 3. Pending
 * 
 * 
 * 
 * How we create a Promise?
 * 
 * Step 1: return a new Promise() with proper callback structure i.e (resolve, reject) => {}.
 * 
 * Step 2: do the time taking operation inside Promise callback.
 * 
 * Step 3: If the time taking operation was successful then invoke resolve() else invoke reject()
 * 
 * 
 * 
 * Pronmise.then(successCallback, failureCallback)
 * 
 * Takes 2 arguments which are callback functions
 */

function sample_promise() {
    const promise = new Promise((resolve, reject) => {

        // We do the time taking operation, i.e Making fetch call to get all the users JSON data
        let is_data_received = true;

        setTimeout(() => {
            if(is_data_received) {
                resolve("JSON DTATA STRING");
            } else {
                reject();
            }
        }, 300)
    });

    return promise;
}





// const promise = sample_promise();

// const successCallback = () => {
//     console.log("Things went successful! Now let's do the next thing.")
// }

// const failureCallback = () =>  {
//     console.log("Things went bad! Let's re-try.")
// }
// promise.then(successCallback, failureCallback);


// shorter format
sample_promise().then(
    (data) => {
        console.log(data);
        console.log("Things went successful! Now let's do the next thing.");
    },
    () => {
        console.log("Things went bad! Let's re-try.");
    }
)