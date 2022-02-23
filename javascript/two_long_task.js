function time_intensive_task1() {
    console.log("1. time intensive operation started");

    const arr = new Array(50000000).fill(1);
    for (let i = 0; i < arr.length; i++) {
         arr[i] *= 2;
    }

    console.log("1. time intensive operation stopped");
}

function time_intensive_task2() {
    console.log("2. time intensive operation started");

    const arr = new Array(50000000).fill(1);
    for (let i = 0; i < arr.length; i++) {
         arr[i] *= 2;
    }

    console.log("2. time intensive operation stopped");
}


// setTimeout(time_intensive_task1, 0);
// setTimeout(time_intensive_task2, 0);

// 1. time intensive operation started
// 1. time intensive operation stopped
// 2. time intensive operation started
// 2. time intensive operation stopped



setTimeout(time_intensive_task1, 0);
time_intensive_task2();

// 2. time intensive operation started
// 2. time intensive operation stopped
// 1. time intensive operation started
// 1. time intensive operation stopped
