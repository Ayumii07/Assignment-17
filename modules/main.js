// Importing functions from other files
import { add, subtract } from "./mathUtils.js";
import { getUserName, getUserAge } from "./userUtils.js";
// Using functions
console.log(add(8, 7));        
console.log(subtract(50, 5));   

console.log(getUserName("Ayumi Khanal "));
console.log(getUserAge(20));

// What are JavaScript Modules?
// - Modules allow you to split code into separate files
// - Each file can export and import functionality
// - Helps organize and reuse code

// export:
// - Used to share functions/variables from a file
// - Can have multiple named exports

// default export:
// - Only one default export per file
// Example:
// export default function myFunc() {}

// import:
// - Used to bring functions/variables from another file
// Example:
// import myFunc from './file.js' (default)
// import { add } from './file.js' (named)

// Difference:
// - Named export: must use exact name inside {}
// - Default export: can use any name

// Why modular code is important:
// - Keeps code clean and organized
// - Makes large applications easier to manage
// - Reusable functions
// - Easier debugging and maintenance