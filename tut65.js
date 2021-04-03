// Synchronous or blocking
// - Line by line execution.

const fs = require("fs");
// let text = fs.readFileSync('tut64test.txt', 'utf-8');
// console.log(text);


// Asynchronous or non-blocking
// - Line by line execution not guaranteed.
// - Callbacks will fire.

fs.readFile('tut64test.txt', 'utf-8', (err, data) => {
    console.log(data)
});
console.log('This is a message');