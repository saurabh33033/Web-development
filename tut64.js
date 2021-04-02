const fs = require("fs");
let text = fs.readFileSync("tut64test.txt", "utf-8");
text = text.replace("rohan", "Saurabh");

console.log("The content of the file is ");
console.log(text);
console.log("Creating a new file... ");
fs.writeFileSync("Saurabh.txt", text);