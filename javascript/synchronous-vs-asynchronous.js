function time_intensive_task() {
    console.log("time intensive operation started");

    const arr = new Array(50000000).fill(1);
    for (let i = 0; i < arr.length; i++) {
         arr[i] *= 2;
    }

    console.log("time intensive operation stopped");
}

function quick_task() {
    console.log("Completed this quick task!");
}

// time_intensive_task();

// We made time_intensive_task asynchronous using setTimeout
setTimeout(time_intensive_task, 0);

quick_task();

