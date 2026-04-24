// ASYNC / AWAIT IN JAVASCRIPT
// async/await is a cleaner way to work with Promises.
// It makes asynchronous code look like synchronous code.
// async -> makes a function return a Promise
// await -> pauses execution until the Promise is resolved or rejected
// TASK 1: checkNumber with async/await
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve("The number is EVEN");
        } else {
            reject("The number is ODD");
        }
    });
}
// Async function using await
async function runCheck() {
    try {
        const result = await checkNumber(4);
        console.log("Success:", result);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Execution completed");
    }
}
runCheck();
// TASK 2: Error Handling
// try -> code that may fail
// catch -> handles error
// finally -> always runs

// TASK 3: getUserData Function
function getUserData() {
    return new Promise((resolve) => {
        console.log("Fetching user data");

        setTimeout(() => {
            resolve({
                id: 1,
                name: "ayumi",
                email: "abc@mail.com"
            });
        }, 2000);
    });
}
// Using async/await
async function fetchUser() {
    try {
        const user = await getUserData();
        console.log("User Data:", user);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Process finished");
    }
}
fetchUser();
// Why async/await is useful:
// - Cleaner than .then()
// - Easier to read and debug
// - Commonly used for API calls and async operations