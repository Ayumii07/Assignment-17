// PROMISES IN JAVASCRIPT

// A Promise is an object that represents the result of an asynchronous operation.
// It can be in one of three states:
// 1. Pending  : initial state (waiting)
// 2. Fulfilled : operation completed successfully (resolve)
// 3. Rejected  : operation failed (reject)
// Promises are useful because they help handle asynchronous tasks
// like API calls, file reading, timers, etc. in a cleaner way
// instead of using deeply nested callbacks (callback hell).

// TASK 1: checkNumber Function
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("The number is EVEN ");
        } else {
            reject("The number is ODD ");
        }
    });
}

// TASK 2: Consuming Promise
checkNumber(5)
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Execution completed (finally block)");
    });

// TASK 3: Simulating Data Loading
function loadData() {
    return new Promise((resolve) => {
        console.log("Loading data");

        setTimeout(() => {
            resolve("Data loaded successfully after 2 seconds ");
        }, 2000); // 2 seconds delay
    });
}
// Consuming loadData Promise
loadData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Data loading process finished.");
    });
// Real-world uses of Promises:
// Fetching data from APIs
// Database operations
// File uploads/downloads
// Timers (like setTimeout)
// Authentication systems